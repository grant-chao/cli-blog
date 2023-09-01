import {headers} from "next/headers";
import {FALLBACK_LANG} from "@/config/app";
import langList from "@/config/lang.list";

export const getLangNoContext = (path, al) => {
    let lang = FALLBACK_LANG;
    for (let obj of langList) {
        const { code } = obj;
        if(path.includes(code)) {
            return code;
        }
    }
    if(al) {
        lang = al.substring(0, 5).toLowerCase();
        return langList.find(({code}) => lang === code) ? lang : FALLBACK_LANG;
    }
    return lang;
}

export const getLang = () => {
    const headersList = headers();
    const path = headersList.get('x-invoke-path');
    const al = headersList.get('accept-language');
    return getLangNoContext(path, al);
}

export const getLangFromRequest = (request) => {
    const headersList = request.headers;
    const path = headersList.get('x-invoke-path');
    const al = headersList.get('accept-language');
    return getLangNoContext(path, al);
}
