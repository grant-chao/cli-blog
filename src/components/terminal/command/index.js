import '@/utils/string';
import Help from "@/components/terminal/command/help";
import NotFound from "@/components/terminal/command/not-found";
import Open from "@/components/terminal/command/open";
import Login from "@/components/terminal/command/login";
import helpMain from '@/components/terminal/command/help/main';
import openMain from '@/components/terminal/command/open/main';
import loginMain from '@/components/terminal/command/login/main';
import notFoundMain from '@/components/terminal/command/not-found/main';
import themeMain from '@/components/terminal/command/theme/main';
import Theme from "@/components/terminal/command/theme";
import Logout from "@/components/terminal/command/logout";
import logoutMain from '@/components/terminal/command/logout/main';

export default [
    {
        name: 'help',
        description: '查看帮助'.i18n(),
        main: helpMain,
        component: Help
    },
    {
        name: 'cls, clear',
        description: '清屏'.i18n(),
    },
    {
        name: 'open',
        description: '打开链接。用法：open <url>'.i18n(),
        main: openMain,
        component: Open
    },
    {
        name: 'theme',
        description: '设置主题模式。用法：theme <dark|light|system>'.i18n(),
        main: themeMain,
        component: Theme
    },
    {
        name: 'login',
        async: true,
        description: '用户登录。用法：login <user>'.i18n(),
        main: loginMain,
        component: Login
    },
    {
        name: 'logout',
        async: true,
        description: '退出当前登录账号'.i18n(),
        main: logoutMain,
        component: Logout
    },
    {
        name: 'not-found',
        hide: true,
        main: notFoundMain,
        component: NotFound
    }
]
