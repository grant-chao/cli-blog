import '@/assets/iconfont/iconfont.css';

const Icon = (props) => {
    const { type, className } = props;
    return <i className={`iconfont icon-${type} ${className}`} />
};

export default Icon;
