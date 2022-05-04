import React from "react"
import cx from "classnames"
import useStore from '../../utils/hooks/use-store';
import UrlModesStore from '../url-modes/store';
import VideoInfoStore from './store';
import {observer} from 'mobx-react';

const styles = require("./index.less");
const VideoInfo = () => {
    const store = useStore(() => new VideoInfoStore());


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
                    {Math.floor(store.videoTime)} s
                </div>
            </div>
            <div className={styles.videoInfoRow}>
                <div className={styles.videoInfoRowHeader}>
                    video Data Rate / 视频码率
                </div>
                <div className={styles.videoInfoValue}>
                    {store.videoRate} kbps
                </div>
            </div>
            <div className={styles.videoInfoRow}>
                <div className={styles.videoInfoRowHeader}>
                    video Size / 视频文件大小
                </div>
                <div className={styles.videoInfoValue}>
                    {store.videoSize / 1000 * 8}kb
                </div>
            </div>
            <div className={styles.videoInfoRow}>
                <div className={styles.videoInfoRowHeader}>首帧图片</div>
                <div className={styles.videoInfoValue}>
                    <img className={styles.videoFirstFrameImage} ref={store.videoFirstFrameRef} src={store.videoFirstFrameImg}/>
                    <div className={styles.downloadImage} onClick={store.downloadImg}>导出图片</div>
                </div>
            </div>
        </React.Fragment>
    };

    return (
        <div className={styles.videoForm}>
            {store.loading && <div className={styles.loadingIcon}>
                <img src={require("./images/loading.gif")} alt={"loading"}/>
                <div className={styles.loadingTips}>正在努力获取中...</div>
            </div>}
            <div className={styles.pageTitle}>查看线上视频相关信息</div>
            <div className={styles.formItem}>
                <input className={styles.formInput} onChange={store.getVideoUrl} value={store.videoUrl} placeholder={'请输入视频的地址'}/>
            </div>
            <div className={cx(styles.formSubmit, store.loading && 'disabled')} onClick={store.submit}>获取相关信息</div>
            <video className={styles.video} ref={store.videoEl} src={store.videoUrl} autoPlay={true} muted crossOrigin="anonymous" onCanPlay={store.videoInit}/>
            {store.showInfoStatus && videoInfoContainer()}
        </div>
    )
};
export default observer(VideoInfo);
