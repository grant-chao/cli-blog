import {useEffect} from "react";
import bus from "@/events";
import {UN_AUTH} from "@/events/common";
import {useParams, useRouter} from "next/navigation";
import {Message} from "@arco-design/web-react";

export const useUnAuth = () => {
    const params = useParams();
    const router  = useRouter();

    const onUnAuth = () => {
        Message.error("请先登录".i18n());
        router.push(`/${params.LANG}/`);
    }

    useEffect(() => {
        bus.on(UN_AUTH, onUnAuth);
        return () => {
            bus.off(UN_AUTH, onUnAuth);
        }
    }, [])
}
