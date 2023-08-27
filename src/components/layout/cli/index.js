'use client';

import Header from "@/components/layout/cli/header";
import Footer from "@/components/layout/cli/footer";

const CliLayout = (props) => {
    const {
        children
    } = props;

    return <div className="flex flex-col h-[100%] justify-center items-center">
        <Header />
        <div className="flex-1 ct">
            { children }
        </div>
        <Footer />
    </div>
};

export default CliLayout;
