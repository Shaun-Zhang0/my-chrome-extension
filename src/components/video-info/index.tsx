import React, {useEffect, useState} from "react"

const VideoInfo = () => {
    return <div className={"video-form"}>
        <div className={"form-title"}>计算视频地址的码率</div>
        <div className={"form-item"}>
            <label>视频地址</label>
            <input className={'form-input'}/>
        </div>
    </div>
};
export default React.memo(VideoInfo);
