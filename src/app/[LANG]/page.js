import {keywords, title} from "@/utils/seo";
import Home from "@/components/pages";

export const metadata = () => {
    return {
        title: title('首页'.i18n()),
        keywords: keywords('终端, 前端, React'.i18n()),
    };
}

const Page = () => <Home />;

export default Page;

