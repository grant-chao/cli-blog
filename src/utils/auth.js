import { jwtVerify } from "jose";

export const key = () => {
    const secret = process.env.JWT_SECRET_KEY;
    if (!secret) {
        throw new Error("JWT Secret key is not matched");
    }
    return new TextEncoder().encode(secret);
}

export async function verify(token) {
    try {
        const { payload } = await jwtVerify(token, key());
        return payload;
    } catch (error) {
        return null;
    }
}
