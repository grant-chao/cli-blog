import {success} from "@/plugin/server";
import '@/utils/string.server';
import redis from "@/plugin/redis";
import {getToken} from "@/utils/request";

export async function GET(request) {
    const token = getToken(request);
    console.log(await redis.get(token));
    return success({})
}
