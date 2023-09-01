import {isMobile, isServer, uuid} from "@/utils";
import {DEVICE_ID_KEY, TOKEN_KEY} from "@/config/app";
import packageInfo from '../../package.json';
import Bowser from 'bowser';

const getDeviceId = () => {
    if(isServer) return 'next-ssr';
    let id = localStorage.getItem(DEVICE_ID_KEY);
    if(!id) {
        id = uuid();
        localStorage.setItem(DEVICE_ID_KEY, id);
    }
    return id;
}

export const get = () => {
    const browser = Bowser.parse(window.navigator.userAgent);
    const headers = {
        "Accept-Language": "zh-CN",
        'CLIENT-PLATFORM-TYPE': isMobile() ? 'H5': 'PC',
        "CLIENT-BUNDLE-ID": location.hostname,
        "CLIENT-VERSION": packageInfo.version,
        "CLIENT-DEVICE-MODEL":browser.os.name,
        "CLIENT-DEVICE-ID": getDeviceId(),
        "CLIENT-SYSTEM-VERSION": browser.os.version,
        "CLIENT-TIMESTAMP": Date.now()
    }
    const token = localStorage.getItem(TOKEN_KEY);
    if(token) headers['Authorization'] = `Bearer ${token}`;
    return headers;
}
