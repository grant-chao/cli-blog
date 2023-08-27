'use client';

import "the-new-css-reset/css/reset.css";
import '@/assets/styles/globals.css';
import '@/utils/string';
import { RecoilRoot } from 'recoil';
import {detectLang} from "@/utils/i18n";
import langList from "@/config/lang.list";

const RootLayout = ({children}) => {
    const detected = detectLang(langList);
    if(detected) return null;
    return <RecoilRoot>{children}</RecoilRoot>
};

export default RootLayout;
