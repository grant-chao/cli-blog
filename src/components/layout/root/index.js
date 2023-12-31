'use client';

import "the-new-css-reset/css/reset.css";
import '@/assets/styles/globals.css';
import '@/utils/string';
import '@/plugin/rest';
import { RecoilRoot } from 'recoil';
import {detectLang} from "@/utils/i18n";
import langList from "@/config/lang.list";
import {initializeRecoilState} from "@/state";

const RootLayout = ({children, initializeState}) => {
    const detected = detectLang(langList);
    if(detected) return null;
    return <RecoilRoot initializeState={initializeRecoilState(initializeState)}>{children}</RecoilRoot>
};

export default RootLayout;
