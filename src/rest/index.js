import {get} from "@/utils/rest";

export const me = () => {
    return get("@api/admin/me/");
};
