'use client';

import Terminal from "@/components/terminal";

const Home = () => {
    const init = <>
        <div>{"欢迎来到我的博客！👋".i18n()}</div>
        <div>{"这是一个模拟终端交互体验的博客，你可以试着在下方输入：".i18n()}<span className="text-[#36A3D9]">help</span></div>
    </>
    return <Terminal init={init} />
};

export default Home;
