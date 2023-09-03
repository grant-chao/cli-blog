'use client';

import SidebarActive from "@/components/layout/admin/sidebar/active";

export const AdminSettingPage = () => {
    return <div>
        <SidebarActive selectedKeys={['/setting/']} />
        setting
    </div>
};

export default AdminSettingPage;
