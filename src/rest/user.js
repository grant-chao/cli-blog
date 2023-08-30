import {post} from "@/utils/rest";

export const check = async (username) => {
    return await post("@api/user/check/", {
        username
    });
};

export const login = async (data) => {
    return await post("@api/user/login/", data);
};
