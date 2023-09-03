import {title} from "@/utils/seo";
import PostsPage from "@/components/pages/posts";

export const metadata = () => {
    return {
        title: title('文章'.i18n()),
    };
}

const Page = () => <PostsPage />;

export default Page;

