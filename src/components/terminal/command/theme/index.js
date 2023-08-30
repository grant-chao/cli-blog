const Theme = (props) => {
    const { code } = props;
    return <>
        { [1, 2].includes(code) ? '用法：theme <dark|light|system>'.i18n() : null }
    </>
};

export default Theme;
