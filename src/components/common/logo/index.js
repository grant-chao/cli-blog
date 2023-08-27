import {APP_NAME} from "@/config/app";

const Logo = () => {
    return <div className="inline-flex justify-center items-center">
        <div className="h-[32px] w-[32px] mr-[5px] bg-[url(~@/assets/images/logo/dark.png)] bg-cover dark:bg-[url(~@/assets/images/logo/light.png)] dark:bg-white" />
        <div>{APP_NAME}</div>
    </div>
};

export default Logo;
