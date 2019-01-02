var TranslationsInUserLanguage = require('ComplexType/TranslationsInUserLanguage')
var TranslationsInUserLanguageCollection = require('ComplexType/TranslationsInUserLanguageCollection')


var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.MultiLanguageTranslation = function () {
}
SAPB1.MultiLanguageTranslation.prototype = new SAPB1.EntityType();
SAPB1.MultiLanguageTranslation.prototype.constructor = SAPB1.MultiLanguageTranslation;
SAPB1.MultiLanguageTranslation.prototype.keys.push('Numerator');
SAPB1.MultiLanguageTranslation.Numerator = { valueOf: function(){return 'Numerator';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.MultiLanguageTranslation.TableName = { valueOf: function(){return 'TableName';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.MultiLanguageTranslation.FieldAlias = { valueOf: function(){return 'FieldAlias';}, Type: 'Edm.String', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.MultiLanguageTranslation.PrimaryKeyofobject = { valueOf: function(){return 'PrimaryKeyofobject';}, Type: 'Edm.String', Index: 3, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.MultiLanguageTranslation.TranslationsInUserLanguages = { valueOf: function(){return 'TranslationsInUserLanguages';}, Type: 'TranslationsInUserLanguage', Index: 4, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.MultiLanguageTranslation.prototype.Numerator = new Number();
SAPB1.MultiLanguageTranslation.prototype.TableName = new String();
SAPB1.MultiLanguageTranslation.prototype.FieldAlias = new String();
SAPB1.MultiLanguageTranslation.prototype.PrimaryKeyofobject = new String();
SAPB1.MultiLanguageTranslation.prototype.TranslationsInUserLanguages = new TranslationsInUserLanguageCollection();

SAPB1.MultiLanguageTranslation.TranslationsInUserLanguage = TranslationsInUserLanguage
SAPB1.MultiLanguageTranslation.TranslationsInUserLanguageCollection = TranslationsInUserLanguageCollection


SAPB1.MultiLanguageTranslation.create = function (rawObject) {
    var instance = new SAPB1.MultiLanguageTranslation();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.MultiLanguageTranslation.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.MultiLanguageTranslation;
