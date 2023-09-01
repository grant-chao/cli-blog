import {useEffect, useState, useImperativeHandle, forwardRef, useCallback, useRef} from "react";
import Loading from "@/components/terminal/loading";
import PasswordInput from "@/components/terminal/input/password";
import {logout} from "@/rest/user";
import {TOKEN_KEY} from "@/config/app";

const Logout = forwardRef((props, ref) => {
    const {
        onFinished = (c) => {}
    } = props;

    const [code, setCode] = useState(props?.code);
    const [loading, setLoading] = useState(false);
    const networkRef = useRef(null);
    const [result, setResult] = useState(null);

    useEffect(() => {
        setLoading(true);
        const handler = logout();
        networkRef.current = handler;
        handler.then((result) => {
            setLoading(false);
            setResult(result);
            localStorage.removeItem(TOKEN_KEY);
            onFinished(result.code);
        });
    }, []);

    useImperativeHandle(ref,  () => ({
        cancel: () => {
            setCode(-1);
            onFinished(-1);
            networkRef.current?.abort();
        }
    }));

    return <div>
        { code === -1 ? '程序中断'.i18n(): null }
        {
            code === 0 ? <>
                {
                    loading ? <div className="flex justify-start items-center">
                        <Loading /> {"正在退出".i18n()}
                    </div> : <div>
                        { result?.message }
                    </div>
                }
            </> : null
        }
    </div>
});

export default Logout;
