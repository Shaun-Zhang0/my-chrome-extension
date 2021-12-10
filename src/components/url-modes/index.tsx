import React, {useCallback, useEffect, useState} from "react"
import {UrlMode} from '../../url_mode';
import {observer} from 'mobx-react';
import useStore from '../../utils/hooks/use-store';
import UrlModesStore from './store';
import cx from "classnames";

const styles = require("./index.less");

const UrlModes = () => {
    const store = useStore(() => new UrlModesStore());

    /**
     * 渲染模式的选项
     */
    const renderModeItem = useCallback(() => {
        return Object.keys(UrlMode).map(i => {
            const isActive = store.activeIndex.indexOf(UrlMode[i]) > 0
            console.log({isActive, urlMode: UrlMode[i]})
            return <div className={cx(styles.modeItem, isActive && styles.activeItem)} onClick={() => store.onItemClick(UrlMode[i])}>{UrlMode[i]}</div>
        })
    }, []);

    return <div className={styles.pageInfoRoot}>
        <div className={styles.header}>调试模式</div>
        <div className={styles.modeContainer}>
            {renderModeItem()}
        </div>
    </div>

};

export default observer(UrlModes);
