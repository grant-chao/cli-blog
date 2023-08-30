import {FALLBACK_LANG} from "@/config/app";
import langList from "@/config/lang.list";

export const isServer = typeof window === 'undefined';

export const getLang = () => {
    const path = location.href;
    let lang = FALLBACK_LANG;
    for (let obj of langList) {
        const { code } = obj;
        if(path.includes(code)) {
            lang = code;
            break;
        }
    }
    return lang;
}

export const uuid = () => {
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}

export const isMobile = () => {
    if(isServer) return false;
    return !!window.navigator.userAgent.match(/(Metalpha|Antalpha|phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
}
