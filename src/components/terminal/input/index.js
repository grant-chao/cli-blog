import styles from './style.module.scss';
import Icon from "@/components/common/icon";
import classNames from "classnames";
import {useCallback, useEffect, useRef, useState} from "react";

const Input = (props) => {
    const {
        onSubmit = (v) => {},
        readOnly = false,
        value,
        code = 0,
        error = false
    } = props;

    const [val, setVal] = useState(value);
    const inputRef = useRef();

    useEffect(() => {
        if(!readOnly) {
            inputRef.current?.focus();
        }
    }, [readOnly]);

    const submit = useCallback(() => {
        onSubmit(val);
    }, [onSubmit, val])

    return <div className="flex justify-center items-center">
        <div className="flex">
            <div className={classNames(styles.triangle, 'z-10')}>
                <Icon type="global" />
            </div>
            <div className={classNames(styles.triangle, styles.path,'z-5')}>
                <Icon type="home" />
                &nbsp;~
            </div>
        </div>
        <div className="flex-1 mx-[15px] h-[20px] flex justify-center items-center">
            <input
                ref={inputRef}
                className="w-[100%] h-[20px]"
                value={val}
                readOnly={readOnly}
                onInput={(e) => setVal(e.target.value)}
                onKeyDown={(e) => {
                    if(e.key === 'Enter') {
                        submit();
                    }
                }}
            />
        </div>
        <div className="flex">
            <div className={classNames(styles.rightTriangle, error ? styles.error : null,  'z-10')}>
                { error && code ? `${code} ` : null }
                { error ? <Icon type="fail" /> : <Icon type="success" /> }
            </div>
        </div>
    </div>
};

export default Input;
