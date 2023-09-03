import {title} from "@/utils/seo";
import AdminPagesPage from "@/components/pages/admin/pages";

export const metadata = () => {
    return {
        title: title('页面管理'.i18n()),
    };
}

const Page = () => <AdminPagesPage />;

export default Page;
