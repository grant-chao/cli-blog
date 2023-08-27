import {useCallback, useState} from "react";
import Input from "@/components/terminal/input";
import command from "@/components/terminal/command";

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

    const onInputSubmit = useCallback((v) => {
        const n = v.split(' ')[0];
        if(['cls', 'clear'].includes(n)) { // 清屏
            setHistory([]);
            setInputKey(Date.now());
            return;
        }
        const cmd = command.find(({name}) => (n === name));
        if(cmd) { // 支持的命令
            const code = cmd.main(v);
            const CMD = cmd.component;
            setHistory([
                ...history,
                <Input key="history" readOnly={true} value={v} code={code} error={code !== 0} />,
                <CMD key={code} code={code} />
            ]);
        } else { // 命令未找到
            const info = command.find(({name}) => (name === 'not-found'));
            const code = info.main(v);
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
        <Input key={inputKey} onSubmit={onInputSubmit} />
    </div>
};

export default Terminal;
