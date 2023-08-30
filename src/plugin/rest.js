// Rest 配置
import * as Rest from '@/utils/rest';
import {get} from "@/utils/headers";

Rest.config({
    useTransId: true,
    onResponse: (data, config) => {
        const { needLogin = true } = config.config;
        const { code } = data
        if (code === 401 && needLogin) { // 未登录
        }
    }
});

// 别名配置
Rest.alias({
    '@api': {
        url: '/api',
        headers: get
    },
});
