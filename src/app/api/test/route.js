import { error } from "@/plugin/server";
import execute from "@/plugin/mysql";

export async function GET() {
    const result = await execute({
        sql: 'select * from user'
    })
    // 网络请求
    return error(result)
}
