import {getLang, isServer} from "@/utils";
import {i18nHandler} from "@/utils/i18n";

if(!isServer) {
    String.prototype.i18n = function ({lang = getLang()} = {}) {
        return i18nHandler(this, {lang});
    }
}
