import { atom } from "recoil";

export const sidebarState = atom({
    key: 'layout.admin.sidebar',
    default: {
        openKeys: [],
        selectedKeys: [],
    }
})
