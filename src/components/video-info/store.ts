import {action, comparer, computed, observable} from 'mobx';
import React, {useEffect, useRef} from 'react';
import {observer} from 'mobx-react';

interface IVideoInfo{
    videoUrl: string,
    videoSize:number,
    videoRate: number,
    videoTime:number,
    videoFirstFrameImg: string,
}

class VideoInfoStore implements IVideoInfo{
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

    @observable loading = false;

    videoFirstFrameRef = useRef(null);
    /**
     * 判断是否为视频格式的正则表达式
     */
    regexIsVideo = /\.(mp4|avi|wmv|mpg|mpeg|mov|rm|ram|swf|flv)/;

    /**
     * 判断是否为video格式的链接
     */
    @computed
    get isVideo(){
        return this.regexIsVideo.test(this.videoUrl)
    }

    /**
     * 获取视频的地址
     * @param e
     */
    getVideoUrl=(e:React.ChangeEvent<HTMLInputElement>):void=>{
        this.videoUrl = e.target.value;
    }
    /**
     * 点击提交按钮时回调
     */
    onSubmitBtnClick = ():void=>{
        if(!this.isVideo/**当前地址不是一个视频地址*/){
            return;
        }else{

        }
    }


    use(){

    }
}

export default VideoInfoStore ;
