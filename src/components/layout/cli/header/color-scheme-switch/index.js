import Icon from "@/components/common/icon";
import {useCallback, useEffect, useRef, useState} from "react";
import {useThemeMode} from "@/hooks";
import ExtendButton from "@/components/layout/cli/header/extend-button";
import '@/utils/string';
import {THEME_KEY, THEME_MODE_KEY} from "@/config/app";

const MODE = {
    LIGHT: "light", // 亮色
    DARK: "dark", // 暗黑
    SYSTEM: 'follow' // 更随系统
}

const renderMenu = (item, current, onClick) => {
    const isCurrent = current === item.mode;
    const op = isCurrent ? 'opacity-1' : 'opacity-[0.5]';
    const bg = isCurrent ? 'bg-[rgba(0,0,0,0.05)]' : 'bg-[rgba(0,0,0,0)]';
    return <div
        key={item.mode}
        className={`flex justify-center items-center px-[3px] my-[2px] ${op} ${bg} hover:opacity-[1] hover:bg-[rgba(0,0,0,0.05)]`}
        onClick={(e) => onClick(e, item.mode)}
    >
        <div className="h-[30px] w-[30px] flex justify-center items-center">
            <Icon type={item.mode}/>
        </div>
        <div className="flex-1 pr-[8px] whitespace-nowrap">{item.title}</div>
    </div>
}

const ColorSchemeSwitch = () => {
    const MODES = [
        {
            title: '亮色'.i18n(),
            mode: MODE.LIGHT,
        },
        {
            title: '暗黑'.i18n(),
            mode: MODE. DARK,
        },
        {
            title: '跟随系统'.i18n(),
            mode: MODE.SYSTEM,
        }
    ]

    const [mode, setMode] = useState(MODE.SYSTEM);
    const [scheme, setScheme] = useState(MODE.LIGHT);
    const [hidden, setHidden] = useState(true);
    useThemeMode(useCallback((m) => {
        if(mode === MODE.SYSTEM) setScheme(m);
    }, [mode]));

    const onDocumentClick = (e) => {
        setHidden(true);
    }

    useEffect(() => {
        document.addEventListener('click', onDocumentClick);
        const themeInLocal = localStorage.getItem(THEME_MODE_KEY) || MODE.SYSTEM;
        setMode(themeInLocal);
        return () => {
            document.removeEventListener('click', onDocumentClick);
        }
    }, []);

    useEffect(() => {
        let scheme = null;
        if(mode === MODE.SYSTEM) {
            scheme =  window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
        }else{
            scheme = mode;
        }
        setScheme(scheme);
        localStorage.setItem(THEME_MODE_KEY, mode);
    }, [mode]);

    useEffect(() => {
        if(scheme === MODE.DARK) {
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark');
        }
    }, [scheme])

    const onMenuClick = (e, mode) => {
        e.stopPropagation();
        setHidden(true);
        setMode(mode);
    }

    return <ExtendButton
        active={!hidden}
        onClick={(e) => {
            e.nativeEvent.stopImmediatePropagation();
            setHidden(false);
        }}
    >
        <Icon type={scheme} className="!text-[20px]"/>
        <div className={`absolute top-[100%] right-0 shadow rounded-[4px] min-w-[100px] cursor-default ${hidden ? 'hidden' : ''}`}>
            {MODES.map((item) => renderMenu(item, mode, onMenuClick))}
        </div>
    </ExtendButton>
};

export default ColorSchemeSwitch;
