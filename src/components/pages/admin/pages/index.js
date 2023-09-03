'use client';

import SidebarActive from "@/components/layout/admin/sidebar/active";

export const AdminPagesPage = () => {
    return <div>
        <SidebarActive openKeys={['cms']} selectedKeys={['/pages/']} />
        AdminPagesPage
    </div>
};

export default AdminPagesPage;
