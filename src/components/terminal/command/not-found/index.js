const NotFound = (props) => {
    const {
        command
    } = props;

    return <div className="text-[#FF3333]">
        {"不支持的命令：".i18n()} {command}
    </div>
};

export default NotFound;
