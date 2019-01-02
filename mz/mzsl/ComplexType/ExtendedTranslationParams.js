
var TranslationCategoryEnum = require('EnumType/TranslationCategoryEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ExtendedTranslationParams = function () {
}
SAPB1.ExtendedTranslationParams.prototype = new SAPB1.ComplexType();
SAPB1.ExtendedTranslationParams.prototype.constructor = SAPB1.ExtendedTranslationParams;
SAPB1.ExtendedTranslationParams.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedTranslationParams.Category = { valueOf: function(){return 'Category';}, Type: 'TranslationCategoryEnum', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedTranslationParams.ID = { valueOf: function(){return 'ID';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedTranslationParams.SecondaryID = { valueOf: function(){return 'SecondaryID';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedTranslationParams.prototype.DocEntry = new Number();
SAPB1.ExtendedTranslationParams.prototype.Category = new String();
SAPB1.ExtendedTranslationParams.prototype.ID = new String();
SAPB1.ExtendedTranslationParams.prototype.SecondaryID = new String();


SAPB1.ExtendedTranslationParams.TranslationCategoryEnum = TranslationCategoryEnum

SAPB1.ExtendedTranslationParams.create = function (rawObject) {
    var instance = new SAPB1.ExtendedTranslationParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ExtendedTranslationParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ExtendedTranslationParams;
