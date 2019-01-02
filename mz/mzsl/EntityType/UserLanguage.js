

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.UserLanguage = function () {
}
SAPB1.UserLanguage.prototype = new SAPB1.EntityType();
SAPB1.UserLanguage.prototype.constructor = SAPB1.UserLanguage;
SAPB1.UserLanguage.prototype.keys.push('Code');
SAPB1.UserLanguage.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.UserLanguage.LanguageShortName = { valueOf: function(){return 'LanguageShortName';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.UserLanguage.LanguageFullName = { valueOf: function(){return 'LanguageFullName';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserLanguage.RelatedSystemLanguage = { valueOf: function(){return 'RelatedSystemLanguage';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserLanguage.prototype.Code = new Number();
SAPB1.UserLanguage.prototype.LanguageShortName = new String();
SAPB1.UserLanguage.prototype.LanguageFullName = new String();
SAPB1.UserLanguage.prototype.RelatedSystemLanguage = new Number();



SAPB1.UserLanguage.create = function (rawObject) {
    var instance = new SAPB1.UserLanguage();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.UserLanguage.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.UserLanguage;
