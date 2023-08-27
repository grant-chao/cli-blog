import {getLang} from "@/utils/server";
import {i18nHandler} from "@/utils/i18n";

String.prototype.i18n = function ({lang = getLang()} = {}) {
    return i18nHandler(this, {lang});
}
