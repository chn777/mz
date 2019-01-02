

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.TranslationsInUserLanguage = function () {
}
SAPB1.TranslationsInUserLanguage.prototype = new SAPB1.ComplexType();
SAPB1.TranslationsInUserLanguage.prototype.constructor = SAPB1.TranslationsInUserLanguage;
SAPB1.TranslationsInUserLanguage.KeyFromHeaderTable = { valueOf: function(){return 'KeyFromHeaderTable';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.TranslationsInUserLanguage.LanguageCodeOfUserLanguage = { valueOf: function(){return 'LanguageCodeOfUserLanguage';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TranslationsInUserLanguage.Translationscontent = { valueOf: function(){return 'Translationscontent';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TranslationsInUserLanguage.prototype.KeyFromHeaderTable = new Number();
SAPB1.TranslationsInUserLanguage.prototype.LanguageCodeOfUserLanguage = new Number();
SAPB1.TranslationsInUserLanguage.prototype.Translationscontent = new String();



SAPB1.TranslationsInUserLanguage.create = function (rawObject) {
    var instance = new SAPB1.TranslationsInUserLanguage();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.TranslationsInUserLanguage.prototype.hasOwnProperty(prop)) {
                if (instance[prop] instanceof SAPB1.Collection) {
                    var collectionInstance = instance[prop].constructor.create(rawObject[prop]);
                    instance[prop] = collectionInstance;
                } else if (instance[prop] instanceof SAPB1.ComplexType) {
                    var complexInstance = instance[prop].constructor.create(rawObject[prop]);
                    instance[prop] = complexInstance;
                }
                else {
                    instance[prop] = rawObject[prop];
                }
            }
        }
    }
    return instance;
}


module.exports = SAPB1.TranslationsInUserLanguage;
