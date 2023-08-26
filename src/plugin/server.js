import { NextResponse } from 'next/server';

export const CODE = {
    SUCCESS: 0,
}

export const result = (data, code = CODE.SUCCESS, success = true, message) => {
    return NextResponse.json({
        code,
        data,
        success: code === CODE.SUCCESS,
        message
    })
}

export const success = (data, message = 'success') => {
    return result(data, CODE.SUCCESS, true, message);
}

export const error = (data, code, message) => {
    return result(data, code,false, message);
}
