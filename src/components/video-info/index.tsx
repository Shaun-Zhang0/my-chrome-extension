import React, {useEffect, useState, useRef} from "react"
import cx from "classnames"

const styles = require("./index.less");
const VideoInfo = () => {
    const [videoUrl, setVideoUrl] = useState("");
    const [videoSize, setVideoSize] = useState(0); // 通过 XHR 的响应头的 content-length 获取。 单位: kb
    const [videoRate, setVideoRate] = useState(0); // 通过 video组件 获取视频的长度。 单位: 秒
    const [videoTime, setVideoTime] = useState(0); // video 时间
    const [videoFirstFrameImg, setVideoFirstFrameImg] = useState(''); // 视频首帧图
    const [loading, setLoading] = useState(false); // 请求状态
    const videoFirstFrameRef: any = useRef(null); // 用于存储video第一帧的图片
    const isVideo = (path: string) => {
        return /\.(mp4|avi|wmv|mpg|mpeg|mov|rm|ram|swf|flv)/.test(path);
    };

    let videoEl: any = useRef(null);
    const getVideoUrl = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setVideoUrl(e.target.value);
    };

    /**
     * 通过xhr创建一个get请求
     */
    const submit = (): void => {
        if (!isVideo(videoUrl) || loading) {
            return;
        }
        setLoading(true);
        const xhr = new XMLHttpRequest();
        xhr.open('get', videoUrl, true);
        xhr.responseType = 'blob';
        xhr.onreadystatechange = function () {
            if (xhr.status === 200 && (xhr.readyState === 3 || xhr.readyState === 4)) {
                // setLoading(false);
                const headers = this.getAllResponseHeaders()?.trim().split(/[\r\n]+/);
                let headerMap: { [k: string]: any } = {};
                headers.forEach(function (line) {
                    let parts = line.split(': ');
                    let header = parts.shift();
                    let value = parts.join(': ');
                    headerMap[String(header)] = value;
                });
                // 获取视频文件的大小
                setVideoSize(headerMap['content-length']);
                // videoEl.current && videoEl.current.play();
                // const videoDuration = getVideoDuration();
                // console.log('videoDuration',videoDuration);
                // debugger;
                // setVideoTime(Number(videoDuration));
                // videoDuration && setVideoRate(Math.floor(headerMap['content-length'] / 1000 * 8 / videoDuration))
            }
        };
        xhr.send();
    };

    /**
     * 获取视频时长
     */
    const getVideoDuration = () => {
        return videoEl.current && videoEl.current.duration;
    };
    /**
     * 更新首帧的图片
     */
    useEffect(() => {
        getVideoFirstFrame();
    }, [videoTime]);

    /**
     * 获取视频首帧图片
     */
    const getVideoFirstFrame = () => {
        videoEl.current.onloadeddata = (() => {
            /**
             * 即时获取可能会获取不到对应的第一帧图
             * 故采取设置一个时间较短的定时器来实现
             */
            setTimeout(() => {
                const canvas: any = document.createElement('canvas');
                canvas.width = videoEl.current.videoWidth;
                canvas.height = videoEl.current.videoHeight;
                canvas.getContext('2d').drawImage(videoEl.current, 0, 0);

                const img = canvas.toDataURL('image/png');
                setVideoFirstFrameImg(img);
            }, 50)
        });
    };

    /**
     * 导出图片
     */
    const downloadImg = () => {
        const a = document.createElement('a');
        a.style.display = 'none';
        a.download = `video-poster-${new Date().getTime()}`;
        a.href = videoFirstFrameImg;
        a.target = '_blank';
        document.body.appendChild(a);
        a.click(); // 自动触发点击a标签的click事件
        document.body.removeChild(a);
    };

    // 当video的元数据加载完成后，即视频的播放时间、音轨等等元素 时回调
    const handlerVideoMetaData = () => {
        videoEl.current && videoEl.current.play();
        const videoDuration = getVideoDuration();
        setVideoTime(Number(videoDuration));
        videoDuration && setVideoRate(Math.floor(videoSize / 1000 * 8 / videoDuration))
        setLoading(false);
    }

    /**
     * 视频相关信息
     */
    const videoInfoContainer = () => {
        return <React.Fragment>
            <div className={styles.videoInfoRow}>
                <div className={styles.videoInfoRowHeader}>
                    videoDuration / 视频时间长度
                </div>
                <div className={styles.videoInfoValue}>
                    {Math.floor(videoTime)} s
                </div>
            </div>
            <div className={styles.videoInfoRow}>
                <div className={styles.videoInfoRowHeader}>
                    video Data Rate / 视频码率
                </div>
                <div className={styles.videoInfoValue}>
                    {videoRate} kbps
                </div>
            </div>
            <div className={styles.videoInfoRow}>
                <div className={styles.videoInfoRowHeader}>
                    video Size / 视频文件大小
                </div>
                <div className={styles.videoInfoValue}>
                    {videoSize / 1000 * 8}kb
                </div>
            </div>
            <div className={styles.videoInfoRow}>
                <div className={styles.videoInfoRowHeader}>首帧图片</div>
                <div className={styles.videoInfoValue}>
                    <img className={styles.videoFirstFrameImage} ref={videoFirstFrameRef} src={videoFirstFrameImg}/>
                    <div className={styles.downloadImage} onClick={downloadImg}>导出图片</div>
                </div>
            </div>
        </React.Fragment>
    };


    return (
        <div className={styles.videoForm}>
            {loading && <div className={styles.loadingIcon}>
                <img src={require("./images/loading.gif")} alt={'loading'}/>
                <div className={styles.loadingTips}>正在努力获取中...</div>
            </div>}
            <div className={styles.pageTitle}>查看线上视频相关信息</div>
            <div className={styles.formItem}>
                <input className={styles.formInput} onChange={getVideoUrl} value={videoUrl} placeholder={'请输入视频的地址'}/>
            </div>
            <div className={cx(styles.formSubmit, loading && 'disabled')} onClick={submit}>获取相关信息</div>
            <video className={styles.video} ref={videoEl} src={videoUrl} muted onLoadedMetadata={handlerVideoMetaData} crossOrigin="anonymous"/>
            {!!videoTime && videoInfoContainer()}
        </div>
    )
};
export default React.memo(VideoInfo);
