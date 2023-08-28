import '@/utils/string';
import Help from "@/components/terminal/command/help";
import NotFound from "@/components/terminal/command/not-found";
import Open from "@/components/terminal/command/open";
import Login from "@/components/terminal/command/login";

export default [
    {
        name: 'help',
        description: '查看帮助'.i18n(),
        main: () => {
            return 0;
        },
        component: Help
    },
    {
        name: 'cls, clear',
        description: '清屏'.i18n(),
    },
    {
        name: 'open',
        description: '打开链接，语法：open <url>'.i18n(),
        main: (cmd) => {
            cmd = cmd.replace('open', '').trim();
            let reg=/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
            const checked = !!reg.test(cmd)
            if(checked) {
                window.open(cmd);
            }else{
                return 1;
            }
            return 0;
        },
        component: Open
    },
    {
        name: 'login',
        async: true,
        description: '用户登录，语法：login <user>'.i18n(),
        main: () => {
            return 0;
        },
        component: Login
    },
    {
        name: 'not-found',
        hide: true,
        main: () => {
            return 127;
        },
        component: NotFound
    }
]
