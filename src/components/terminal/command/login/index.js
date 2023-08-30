import {useEffect, useState, useImperativeHandle, forwardRef, useCallback} from "react";
import Loading from "@/components/terminal/loading";
import {check, login} from "@/rest/user";
import PasswordInput from "@/components/terminal/input/password";
import md5 from "md5";

const Login = forwardRef((props, ref) => {
    const {
        params,
        onFinished = (code) => {}
    } = props;

    const [code, setCode] = useState(0);
    const [checking, setChecking] = useState(false);
    const [noUser, setNoUser] = useState(false);
    const [inputPassword, setInputPassword] = useState(false);
    const [_, setPassword] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if(!params) { // 未输入参数
            setCode(1);
            onFinished(1);
        }
    }, [params, onFinished]);

    const checkUser = async (user) => {
        setChecking(true);
        const { data } = await check(user);
        setChecking(false);
        if(data) {
            setInputPassword(true);
        }else{
            setNoUser(true);
            onFinished(2);
        }
    }

    const doLogin = useCallback(async (password) => {
        setInputPassword(false);
        setSubmitting(true);
        setPassword('');
        setMessage('');
        const { success, data } = await login({
            username: params,
            password: md5(password)
        });
        setSubmitting(false);
        if(success) {
            onFinished(0);
            setMessage("登录成功".i18n());
            setSuccess(true);
        }else{
            setMessage("密码不正确".i18n());
            setInputPassword(true);
        }
    }, [params])

    useEffect( () => {
        if(code === 0) {
            checkUser(params).then();
        }
    }, [code, params]);

    const onPasswordEnter = (v) => {
        if(v) {
            doLogin(v).then();
        }
    }

    useImperativeHandle(ref,  () => ({
        cancel: () => {
            setCode(-1);
            onFinished(-1);
        }
    }));

    return <div>
        { code === 1 ? '参数错误，用法：login <user>'.i18n(): null }
        { code === -1 ? '程序中断'.i18n(): null }
        {
            code === 0 ? <>
                { checking ? <div className="flex justify-start items-center"><Loading /> 正在确认用户</div> : null }
                { noUser ? '用户不存在'.i18n() : null }
                { inputPassword ? <PasswordInput onEnter={onPasswordEnter} title={"请输入密码：".i18n()} /> : null }
                { submitting ? <div className="flex justify-start items-center"><Loading /> 正在验证登录</div> : null }
                { message ? <div className={`${success ? 'text-green-600' : 'text-red-500'}`}>{message}</div> : null }
            </> : null
        }
    </div>
});

export default Login;
