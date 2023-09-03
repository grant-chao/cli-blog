import {useImperativeHandle, forwardRef, useRef, useState, useCallback} from 'react';


const Wrapper = forwardRef((props, ref) => {
    const {
        command,
        onFinished = (code) => {},
        async = false,
        ...rest
    } = props;

    const Command = command;
    const commandRef = useRef();
    const [stopped, setStopped] = useState(false);

    const cancel = useCallback(() => {
        if(!async) return;
        if(stopped) return;
        commandRef.current?.cancel();
    }, [stopped, async]);

    useImperativeHandle(ref,  () => ({
        cancel
    }));

    return <Command
        {...rest}
        ref={async ? commandRef : undefined}
        onFinished={() => {
            setStopped(true);
            onFinished();
        }}
    />
});

export default Wrapper;
