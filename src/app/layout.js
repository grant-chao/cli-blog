import '@/utils/string.server';
import RootLayout from "@/components/layout/root";
import {getLang} from "@/utils/server";

export default async function Layout({ children }) {
    const lang = getLang();
    const initialRecoilState = {
        lang,
    }
    return <html>
        <body>
            <RootLayout initializeState={initialRecoilState}>{children}</RootLayout>
        </body>
    </html>
}
