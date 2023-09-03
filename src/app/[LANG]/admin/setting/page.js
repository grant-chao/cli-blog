import {title} from "@/utils/seo";
import AdminSettingPage from "@/components/pages/admin/setting";

export const metadata = () => {
    return {
        title: title('系统设置'.i18n()),
    };
}

const Page = () => <AdminSettingPage />;

export default Page;
