'use client';

import Header from "@/components/layout/admin/header";
import Sidebar from "@/components/layout/admin/sidebar";
import '@arco-design/web-react/dist/css/arco.min.css';

const AdminLayout = (props) => {
    const {
        children
    } = props;

    return <div className="flex min-h-full flex-col">
        <Header />
        <div className="flex-1 flex">
            <Sidebar />
            <div className="flex-1">
                {children}
            </div>
        </div>
    </div>
};

export default AdminLayout;
