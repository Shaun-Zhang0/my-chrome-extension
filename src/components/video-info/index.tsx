import React, {useEffect, useState, useRef} from "react"
import cx from "classnames"

const styles = require("./index.less");

const VideoInfo = () => {
    const [videoUrl, setVideoUrl] = useState("");
    const [videoSize, setVideoSize] = useState(0); // 通过 XHR 的响应头的 content-length 获取。 单位: kb
    const [videoRate, setVideoRate] = useState(0); // 通过 video组件 获取视频的长度。 单位: 秒
    const [videoTime, setVideoTime] = useState(0); // video 时间
    const [loading, setLoading] = useState(false); // 请求状态

    const isVideo = (path: string) => {
        return /\.(mp4|avi|wmv|mpg|mpeg|mov|rm|ram|swf|flv)/.test(path);
    };

    let videoEl = useRef<HTMLVideoElement>(null);
    const getVideoUrl = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setVideoUrl(e.target.value);
    };


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
                setLoading(false);
                const headers = this.getAllResponseHeaders()?.trim().split(/[\r\n]+/);
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
                setVideoTime(Number(videoDuration));
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
        </React.Fragment>
    };

    return (
        <div className={styles.videoForm}>
            {loading && <div className={styles.loadingIcon}>
                <img src={require("./images/loading.gif")}/>
                <div className={styles.loadingTips}>正在努力获取中...</div>
            </div>}
            <div className={styles.pageTitle}>查看线上视频相关信息</div>
            <div className={styles.formItem}>
                <input className={styles.formInput} onChange={getVideoUrl} value={videoUrl} placeholder={'请输入视频的地址'}/>
            </div>
            <div className={cx(styles.formSubmit,loading&&'disabled')} onClick={submit}>获取相关信息</div>
            <video className={styles.video} ref={videoEl} src={videoUrl} muted crossOrigin="anonymous"/>
            {videoUrl && videoRate !== 0 && videoSize !== 0 && videoInfoContainer()}
        </div>
    )
};
export default React.memo(VideoInfo);
