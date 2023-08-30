const main = (args) => {
    if(!args) { // if no args
        return 1;
    }
    if(!['dark', 'light', 'system'].includes(args)) { // 不支持的主题
        return 2;
    }
    if(args === 'dark') {
        document.documentElement.classList.add('dark');
    }else{
        document.documentElement.classList.remove('dark');
    }
    return 0;
}

export default main;
