var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1 = require('Base/ServiceLayerModule.js');

SAPB1.TranslationsInUserLanguageCollection = function () {
}

SAPB1.TranslationsInUserLanguageCollection.prototype = new SAPB1.Collection();
SAPB1.TranslationsInUserLanguageCollection.prototype.constructor = SAPB1.TranslationsInUserLanguageCollection;
//override the default one.    
SAPB1.TranslationsInUserLanguageCollection.get = function (index) {
    return SAPB1.TranslationsInUserLanguage.create(this.array[index]);
}

SAPB1.TranslationsInUserLanguageCollection.create = function (rawCollection) {
    if (!(rawCollection instanceof Array)) {
        return [];
    } else {
        var collection = new SAPB1.TranslationsInUserLanguageCollection();
        rawCollection.forEach(function (element) {
            var instance = SAPB1.TranslationsInUserLanguage.create(element);
            collection.add(instance);
        });
        return collection;
    }
}
module.exports = SAPB1.TranslationsInUserLanguageCollection;
