import {title} from "@/utils/seo";
import AdminPostsPage from "@/components/pages/admin/posts";

export const metadata = () => {
    return {
        title: title('文章管理'.i18n()),
    };
}

const Page = () => <AdminPostsPage />;

export default Page;
