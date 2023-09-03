import Logo from "@/components/common/logo";

const Header = () => {
    return <header className="px-[12px] sticky top-0 h-[50px] border border-x-0 border-t-0 flex justify-center items-center">
        <Logo />
        <div className="flex-1" />
    </header>
};

export default Header;
