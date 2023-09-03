'use client';

import SidebarActive from "@/components/layout/admin/sidebar/active";

export const AdminPostsPage = () => {
    return <div>
        <SidebarActive openKeys={['cms']} selectedKeys={['/posts/']} />
        AdminPostsPage
    </div>
};

export default AdminPostsPage;
