import {title} from "@/utils/seo";
import AdminPage from "@/components/pages/admin";

export const metadata = () => {
    return {
        title: title('控制台'.i18n()),
    };
}

const Page = () => <AdminPage />;

export default Page;
