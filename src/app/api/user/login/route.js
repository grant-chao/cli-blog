import {success, error} from "@/plugin/server";
import '@/utils/string.server';
import db from "@/plugin/db";

export async function POST(request) {
    const data = await request.json();
    const size = await db.user.count({
        where: data
    });
    if(size === 0) {
        return error({
            code: 1,
            data: false
        })
    }
    return success({
        data: true
    })
}
