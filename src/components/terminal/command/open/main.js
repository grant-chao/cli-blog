const main = (args) => {
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
