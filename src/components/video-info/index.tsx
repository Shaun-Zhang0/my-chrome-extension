import React, {useEffect, useState, useRef} from "react"

require("./index.less");

const VideoInfo = () => {
    const [videoUrl, setVideoUrl] = useState("");
    const [videoSize, setVideoSize] = useState(0); // 通过 XHR 的响应头的 content-length 获取。 单位: kb
    const [videoRate, setVideoRate] = useState(0); // 通过 video组件 获取视频的长度。 单位: 秒


    let videoEl = useRef<HTMLVideoElement>(null);
    const getVideoUrl = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setVideoUrl(e.target.value)
    };

    const submit = (): void => {
        const xhr = new XMLHttpRequest();
        xhr.open('get', videoUrl, true);
        xhr.responseType = 'blob';
        xhr.onreadystatechange = function () {
            if (this.readyState == this.HEADERS_RECEIVED) {
                const headers = this.getAllResponseHeaders()?.trim().split(/[\r\n]+/)

                // Create a map of header names to values
                let headerMap: { [k: string]: any } = {};
                headers.forEach(function (line) {
                    let parts = line.split(': ');
                    let header = parts.shift();
                    let value = parts.join(': ');
                    headerMap[String(header)] = value;
                });
                setVideoSize(headerMap['content-length']);

                videoEl.current && videoEl.current.play();
                const videoDuration = getVideoDuration();
                videoDuration && setVideoRate(Math.floor(headerMap['content-length'] / 1000 * 8 / videoDuration))
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

    return <div className={"video-form"}>
        <div className={"form-title"}>计算视频地址的码率</div>
        <div className={"form-item"}>
            <label className={'form-label'}>视频地址</label>
            <input className={'form-input'} onChange={getVideoUrl} value={videoUrl}/>
        </div>
        <div className={"form-submit"} onClick={submit}>确定</div>
        <video className={'video'} ref={videoEl} src={videoUrl}/>
        视频码率:
         <input value={videoRate}/>
    </div>
};
export default React.memo(VideoInfo);
