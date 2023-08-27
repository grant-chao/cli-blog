const ExtendButton = (props) => {
    const {
        active = false,
        children,
        ...rest
    } = props;

    const activeBg = 'bg-[rgba(0,0,0,0.1)]';

    return <div {...rest} className={`inline-flex h-[32px] w-[32px] relative justify-center items-center rounded-[4px] ${active ? activeBg : ''} hover:${activeBg} cursor-pointer`}>
        { children }
    </div>
};

export default ExtendButton;
