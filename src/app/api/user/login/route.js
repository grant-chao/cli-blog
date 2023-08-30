import {success, error} from "@/plugin/server";
import '@/utils/string.server';
import execute from "@/plugin/mysql";

export async function POST(request) {
    const data = await request.json();
    const result = await execute({
        sql: 'select count(id) as size from user where username = ? and password = ?',
        values: [data.username, data.password]
    });
    const size = result[0].size;
    if(size === 0) {
        return error({
            code: 1,
            data: false
        })
    }
    // 网络请求
    return success({
        data: true
    })
}
