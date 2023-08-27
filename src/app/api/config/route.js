import {success} from "@/plugin/server";
import '@/utils/string.server';

export async function GET() {
    // 网络请求
    return success({
        data: {
            github: 'https://github.com/grant-chao/',
        },
        message: '成功'.i18n()
    })
}
