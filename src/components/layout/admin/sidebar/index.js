import { Menu } from '@arco-design/web-react';
import { IconHome, IconList, IconSettings } from '@arco-design/web-react/icon';
import styles from './style.module.scss';
import {useRecoilValue} from "recoil";
import {langState} from "@/state";
import {useRouter} from "next/navigation";
import {sidebarState} from "@/state/layout.admin";
import {useEffect, useMemo, useState} from "react";
import { uniq } from "lodash";

const Sidebar = () => {
    const lang = useRecoilValue(langState);
    const router = useRouter();
    const state = useRecoilValue(sidebarState);
    const [openKeys, setOpenKeys] = useState(state.openKeys);
    const [selectedKeys, setSelectedKeys] = useState(state.selectedKeys);
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        setSelectedKeys(state.selectedKeys);
    }, [state.selectedKeys])

    useEffect(() => {
        setOpenKeys(uniq([
            ...(openKeys || []),
            ...(state.openKeys || [])
        ]));
    }, [state.openKeys])

    return <div className={`${collapsed ? 'w-[49px]' : 'w-[260px]'} border border-y-0 border-l-0 ${styles.sidebar}`}>
        <Menu
            className="w-full h-full"
            hasCollapseButton
            openKeys={openKeys}
            selectedKeys={selectedKeys}
            onClickSubMenu={(key, keys) => setOpenKeys(keys)}
            onClickMenuItem={(key) => {
                setSelectedKeys([key]);
                router.push(`/${lang}/admin${key}`);
            }}
            onCollapseChange={setCollapsed}
        >
            <Menu.Item key="/">
                <IconHome /> {"首页".i18n()}
            </Menu.Item>
            <Menu.SubMenu
                key='cms'
                title={
                    <>
                        <IconList /> {"内容管理".i18n()}
                    </>
                }
            >
                <Menu.Item key='/posts/'>{"文章管理".i18n()}</Menu.Item>
                <Menu.Item key='/pages/'>{"页面管理".i18n()}</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="/setting/">
                <IconSettings /> {"系统设置".i18n()}
            </Menu.Item>
        </Menu>
    </div>
};

export default Sidebar;
