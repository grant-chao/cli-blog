import {useRecoilState, useRecoilValue} from "recoil";
import {sidebarState} from "@/state/layout.admin";
import {useEffect} from "react";

const SidebarActive = (props) => {
    const { openKeys, selectedKeys } = props;
    const [_, setState] = useRecoilState(sidebarState);
    useEffect(() => {
        setState({
            selectedKeys,
            openKeys,
        })
    }, [openKeys, selectedKeys]);
    return null;
};

export default SidebarActive;
