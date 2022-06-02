import {action, comparer, computed, observable} from 'mobx';
import React, {useEffect, useRef} from 'react';
import {observer} from 'mobx-react';
import regex from '../../utils/regex';

interface IVideoInfo {
    videoUrl: string,
    videoSize: number,
    videoRate: number,
    videoTime: number,
    videoFirstFrameImg: string,
    loading: boolean,
    showInfoStatus: boolean

}

class VideoInfoStore implements IVideoInfo {
    /**
     * 视频地址
     */
    @observable videoUrl = '';
    /**
     * 视频文件大小
     */
    @observable videoSize = 0;
    /**
     * 视频码率
     */
    @observable videoRate = 0
    /**
     * 视频时间长度
     */
    @observable videoTime = 0
    /**
     * 视频首帧图片
     */
    @observable videoFirstFrameImg = '';
    /**
     * 数据加载中
     */
    @observable loading = false;
    /**
     * 是否展示信息栏
     */
    @observable showInfoStatus = false;

    private videoEl: any
    private videoFirstFrameRef: any


    /**
     * 获取视频实际时间
     */
    @computed
    get getVideoDuration(): number {
        if (!this.videoEl?.current) {
            return 0;
        }
        return Number(this.videoEl.current.duration);
    }

    /**
     * 获取视频的地址
     * @param e
     */
    getVideoUrl = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.videoUrl = e.target.value;
    }
    submit = () => {
        this.loading = true;
        if (!regex('video', this.videoUrl)/**当前地址不是一个视频地址*/) {
            return;
        }
        this.onSubmitBtnClick();
    }
    /**
     * 点击提交按钮时回调
     */
    onSubmitBtnClick = (): void => {
        if(!this.videoUrl){
            alert('请先输入视频地址')
        }
        if (!regex('video', this.videoUrl)/**当前地址不是一个视频地址*/) {
            return;
        } else {
            this.loading = true;
            const xhr = new XMLHttpRequest();
            xhr.open('get', this.videoUrl, true);
            xhr.responseType = 'blob';
            xhr.onreadystatechange = () => {
                if (xhr.status === 200 && (xhr.readyState === 3 || xhr.readyState === 4)) {
                    const headers = xhr.getAllResponseHeaders()?.trim().split(/[\r\n]+/);
                    let headerMap: { [k: string]: any } = {};
                    headers.forEach(function (line) {
                        let parts = line.split(': ');
                        let header = parts.shift();
                        let value = parts.join(': ');
                        headerMap[String(header)] = value;
                    });
                    this.videoSize = headerMap['content-length'];
                    this.videoRate = Math.floor(this.videoSize / 1000 * 8 / this.videoTime)
                }
            };
            xhr.send();
        }
    }
    /**
     * 在视频可以播放时回调
     * video onCanPlay 时回调
     */
    videoInit = (): void => {
        /**
         * 即时获取可能会获取不到对应的第一帧图
         * 故采取设置一个较短时间的定时器来实现
         * 经过多次尝试 50ms可以准确获取到图片 在视频播放上并没有影响
         */
        setTimeout(() => {
            const canvas: any = document.createElement('canvas');
            canvas.width = this.videoEl.current?.videoWidth;
            canvas.height = this.videoEl.current?.videoHeight;
            canvas.getContext('2d').drawImage(this.videoEl.current, 0, 0);
            const img = canvas.toDataURL('image/png');
            this.videoFirstFrameImg = img;
        }, 50)

        this.videoEl.current && this.videoEl.current?.play();
        this.videoTime = this.getVideoDuration;

    };
    /**
     * 导出图片
     */
    downloadImg = () => {
        const a = document.createElement('a');
        a.style.display = 'none';
        a.download = `video-poster-${new Date().getTime()}`;
        a.href = this.videoFirstFrameImg;
        a.target = '_blank';
        document.body.appendChild(a);
        a.click(); // 自动触发点击a标签的click事件
        document.body.removeChild(a);
    };

    use() {

        /**
         * 视频首帧图
         */
        this.videoFirstFrameRef = useRef(null);

        /**
         * 视频dom元素
         */
        this.videoEl = useRef<HTMLVideoElement>(null);
        useEffect(() => {
            if (this.videoFirstFrameImg !== '' && this.videoRate !== 0) {
                this.loading = false
                this.showInfoStatus = true;
            }
        }, [this.videoFirstFrameImg, this.videoRate])
    }
}

export default VideoInfoStore;
