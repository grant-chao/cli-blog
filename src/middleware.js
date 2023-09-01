import { NextResponse } from 'next/server'
import {error} from "@/plugin/server";
import {verify} from "@/utils/auth";
import {getLangFromRequest} from "@/utils/server";
import "@/utils/string.server";

export async function middleware(request) {
    const lang = getLangFromRequest(request);
    const noAccess = error({code: 401, message: '没有权限访问'.i18n({lang})});
    const authorization = request.headers.get('authorization');
    if(!authorization) {
        return noAccess;
    }
    const token = authorization.replace('Bearer ', '');
    const payload = await verify(token);
    if(!payload) {
        return noAccess;
    }
    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/api/user/logout',
        '/api/admin/:path*'
    ],
}
