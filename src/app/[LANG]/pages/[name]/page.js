import {title} from "@/utils/seo";
import PagesPage from "@/components/pages/pages";

export const metadata = () => {
    return {
        title: title('单页'.i18n()),
    };
}

const Page = () => <PagesPage />;

export default Page;

