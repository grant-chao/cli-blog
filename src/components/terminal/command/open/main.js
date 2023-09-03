import {getLang} from "@/utils";

const main = (args, router) => {
    if('admin' === args) {
        const lang = getLang();
        router.push(`/${lang}/admin/`);
        return 0;
    }
    let reg=/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
    const checked = !!reg.test(args)
    if(checked) {
        window.open(args);
    }else{
        return 1;
    }
    return 0;
}

export default main;
