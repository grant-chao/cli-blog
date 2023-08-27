import '@/utils/string.server';
import RootLayout from "@/components/layout/root";

export default function Layout({ children }) {
    return <html>
        <body>
            <RootLayout>{children}</RootLayout>
        </body>
    </html>
}
