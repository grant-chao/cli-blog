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
