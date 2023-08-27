import Logo from "@/components/common/logo";
import ColorSchemeSwitch from "src/components/layout/cli/header/color-scheme-switch";
import ExtendButton from "@/components/layout/cli/header/extend-button";
import Icon from "@/components/common/icon";
import Link from "next/link";
import {useParams} from "next/navigation";

const Header = () => {
    const params = useParams();

    const navs = [
        {
            url: `/${params.LANG}/`,
            title: "首页".i18n()
        },
        {
            url: `/${params.LANG}/posts/`,
            title: "文章".i18n()
        },
        {
            url: `/${params.LANG}/about/`,
            title: "关于".i18n()
        },
    ];

    return <header className="z-[100] sticky top-0 ct h-[var(--header-height)] flex justify-center items-center">
        <Logo />
        <ul className="flex-1 flex justify-center items-center">
            {
                navs.map((nav) => {
                    return <li key={nav.url}>
                        <Link className="mx-[10px] underline hover:no-underline" href={nav.url}>{nav.title}</Link>
                    </li>
                })
            }
        </ul>
        <div className="flex space-x-[5px]">
            <ExtendButton>
                <Icon type="github" className="!text-[20px]"/>
            </ExtendButton>
            <ColorSchemeSwitch />
        </div>
    </header>
};

export default Header;
