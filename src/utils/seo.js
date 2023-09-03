import {isArray, isString} from 'lodash';

export const title = (title) => {
    const titles = [
        'Cli Blog'.i18n()
    ];
    if(title) {
        titles.unshift(title);
    }
    return titles.join(' - ');
}

export const keywords = (keys) => {
    const list = ['Cli,Blog'.i18n()];
    if(isString(keys)) {
        list.push(keys);
    }else if(isArray(keys)) {
        keys.forEach((key) => {
            list.push(key);
        })
    }
    return list.join(', ');
}
