import Logo from "@/components/common/logo";
import ColorSchemeSwitch from "src/components/layout/cli/header/color-scheme-switch";
import ExtendButton from "@/components/layout/cli/header/extend-button";
import Icon from "@/components/common/icon";

const Header = () => {
    return <header className="ct h-[var(--header-height)] flex justify-center items-center">
        <Logo />
        <div className="flex-1"></div>
        <div className="flex space-x-[5px]">
            <ExtendButton>
                <Icon type="github" className="!text-[20px]"/>
            </ExtendButton>
            <ColorSchemeSwitch />
        </div>
    </header>
};

export default Header;
