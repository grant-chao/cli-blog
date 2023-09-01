import {success} from "@/plugin/server";
import '@/utils/string.server';

export async function POST() {
    return success({
        data: null,
        message: '退出成功'.i18n()
    })
}
