import {useCallback, useState, useRef} from "react";
import Input from "@/components/terminal/input";
import command from "@/components/terminal/command";
import { useHotkeys } from 'react-hotkeys-hook';
import CommandWrapper from "@/components/terminal/command/wrapper";
import {useRouter} from "next/navigation";

const renderHistory = (history, index) => {
    return <div key={index} className="mb-[10px] leading-[26px]">
        {history}
    </div>;
}

const Terminal = (props) => {
    const {
        init
    } = props;

    const [history, setHistory] = useState([init]);
    const [inputKey, setInputKey] = useState(Date.now());
    const [onProcess, setOnProcess] = useState(false);
    const currentRef = useRef();
    const router = useRouter();

    const onFinished = (code) => {
        setOnProcess(false);
    };

    const onCancel = () => {
        currentRef.current?.cancel()
    };

    useHotkeys('ctrl+c', onCancel);

    const onInputSubmit = useCallback((v) => {
        const n = v.split(' ')[0];
        if(['cls', 'clear'].includes(n)) { // 清屏
            setHistory([]);
            setInputKey(Date.now());
            return;
        }
        const args = v.replace(n, '').trim();
        const cmd = command.find(({name}) => (n === name));
        if(cmd) { // 支持的命令
            const code = cmd.main(args, router);
            const CMD = cmd.component;
            if(cmd.async) {
                setOnProcess(true);
            }
            setHistory([
                ...history,
                <Input key="history" readOnly={true} value={v} code={code} error={code !== 0} />,
                <CommandWrapper ref={currentRef} key={code} async={cmd.async} params={v.replace(n, '').trim()} code={code} onFinished={onFinished} command={CMD} />
            ]);
        } else { // 命令未找到
            const info = command.find(({name}) => (name === 'not-found'));
            const code = info.main(args, router);
            const NotFound = info.component;
            setHistory([
                ...history,
                <Input key="history" readOnly={true} value={v} code={code} error={true} />,
                <NotFound key={code} command={n} />
            ]);
        }
        // 重置输入框
        setInputKey(Date.now());
    }, [history])

    return <div>
        {history.map(renderHistory)}
        { onProcess ? null: <Input key={inputKey} onSubmit={onInputSubmit} /> }
    </div>
};

export default Terminal;
