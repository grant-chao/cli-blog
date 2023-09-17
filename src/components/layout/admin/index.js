'use client';

import Header from "@/components/layout/admin/header";
import Sidebar from "@/components/layout/admin/sidebar";
import '@arco-design/web-react/dist/css/arco.min.css';
import {useEffect, useState} from "react";
import {me} from "@/rest";
import {useUnAuth} from "@/hooks";

const AdminLayout = (props) => {
    const {
        children
    } = props;

    const [loading, setLoading] = useState(false);
    useUnAuth();

    const load = async () => {
        setLoading(true);
        const { success, data } = await me();
        setLoading(false);
    }

    useEffect(() => {
        load().then();
    }, [])

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
