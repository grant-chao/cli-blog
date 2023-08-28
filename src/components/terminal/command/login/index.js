import {useEffect, useState} from "react";
import Loading from "@/components/terminal/loading";

const Login = (props) => {
    const {
        params,
        onFinished = (code) => {}
    } = props;

    const [code, setCode] = useState(0);

    useEffect(() => {
        if(!params) { // 未输入参数
            setCode(1);
            onFinished(1);
        }

    }, [params, onFinished]);

    return <div>
        { code === 1 ? '参数错误，用法：login <user>'.i18n(): null }
        <div className="flex justify-start items-center">
            <Loading /> Loading
        </div>
    </div>
};

export default Login;
