const Open = (props) => {
    const {
        code
    } = props;

    const messages = {
        0: '已经在新窗口为你打开链接'.i18n(),
        1: '不是正确的链接地址'.i18n()
    }

    return messages[code];
};

export default Open;
