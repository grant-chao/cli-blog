import {useCallback, useEffect, useRef, useState} from "react";

const PasswordInput = (props) => {
    const {
        title,
        onEnter
    } = props;

    const [readOnly, setReadOnly] = useState(true);
    const passwordRef = useRef(null);
    const [value, setValue] = useState('');

    useEffect(() => {
        passwordRef.current?.focus();
    }, []);

    const onKeyDown = useCallback((e) => {
        if(e.key === 'Enter') {
            onEnter(value);
        }
    }, [value])

    return <div className="flex justify-center items-center">
        { title ?  <div>{title}</div> : null }
        <input
            ref={passwordRef}
            className="flex-1"
            type="password"
            autoComplete="new-password"
            readOnly={readOnly}
            onFocus={() => setReadOnly(false)}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKeyDown}
        />
    </div>
};

export default PasswordInput;
