import {headers} from "next/headers";
import {FALLBACK_LANG} from "@/config/app";
import langList from "@/config/lang.list";

export const getLang = () => {
    const headersList = headers();
    const path = headersList.get('x-invoke-path');
    let lang = FALLBACK_LANG;
    for (let obj of langList) {
        const { code } = obj;
        if(path.includes(code)) {
            return code;
        }
    }
    const al = headersList.get('accept-language');
    if(al) {
        lang = al.substring(0, 5).toLowerCase();
        return langList.find(({code}) => lang === code) ? lang : FALLBACK_LANG;
    }
    return lang;
}
