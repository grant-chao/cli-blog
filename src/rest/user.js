import {post} from "@/utils/rest";

export const check = (username) => {
    return post("@api/user/check/", {
        username
    });
};

export const login = (data) => {
    return post("@api/user/login/", data);
};

export const logout = () => {
    return post("@api/user/logout/");
};
