import React, {useEffect, useState} from "react"

require("./index.less");

const VideoInfo = () => {
    const [videoUrl, setVideoUrl] = useState("");
    const getVideoUrl = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setVideoUrl(e.target.value)
    };
    return <div className={"video-form"}>
        <div className={"form-title"}>计算视频地址的码率</div>
        <div className={"form-item"}>
            <label className={'form-label'}>视频地址</label>
            <input className={'form-input'} onChange={getVideoUrl} value={videoUrl}/>
        </div>
        <div className={"form-submit"}>确定</div>
    </div>
};
export default React.memo(VideoInfo);
