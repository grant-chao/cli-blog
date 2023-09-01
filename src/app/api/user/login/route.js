import {success, error} from "@/plugin/server";
import { SignJWT } from "jose";
import '@/utils/string.server';
import db from "@/plugin/db";
import {key} from "@/utils/auth";

export async function POST(request) {
    const data = await request.json();
    const size = await db.user.count({
        where: data
    });
    if(size === 0) {
        return error({
            code: 1,
            data: null
        })
    }
    const token = await new SignJWT({
        username: data.username,
    })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("24h")
        .sign(key());
    return success({
        data: token
    })
}
