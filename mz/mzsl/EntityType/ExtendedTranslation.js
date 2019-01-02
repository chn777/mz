var ExtendedTranslation_ItemLine = require('ComplexType/ExtendedTranslation_ItemLine')
var ExtendedTranslation_ItemLineCollection = require('ComplexType/ExtendedTranslation_ItemLineCollection')

var TranslationCategoryEnum = require('EnumType/TranslationCategoryEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ExtendedTranslation = function () {
}
SAPB1.ExtendedTranslation.prototype = new SAPB1.EntityType();
SAPB1.ExtendedTranslation.prototype.constructor = SAPB1.ExtendedTranslation;
SAPB1.ExtendedTranslation.prototype.keys.push('DocEntry');
SAPB1.ExtendedTranslation.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ExtendedTranslation.Category = { valueOf: function(){return 'Category';}, Type: 'TranslationCategoryEnum', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ExtendedTranslation.ID = { valueOf: function(){return 'ID';}, Type: 'Edm.String', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ExtendedTranslation.SecondaryID = { valueOf: function(){return 'SecondaryID';}, Type: 'Edm.String', Index: 3, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ExtendedTranslation.SourceLanguage = { valueOf: function(){return 'SourceLanguage';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedTranslation.UpdateDate = { valueOf: function(){return 'UpdateDate';}, Type: 'Edm.DateTime', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedTranslation.CreateDate = { valueOf: function(){return 'CreateDate';}, Type: 'Edm.DateTime', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExtendedTranslation.ExtendedTranslation_ItemLines = { valueOf: function(){return 'ExtendedTranslation_ItemLines';}, Type: 'ExtendedTranslation_ItemLine', Index: 7, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.ExtendedTranslation.prototype.DocEntry = new Number();
SAPB1.ExtendedTranslation.prototype.Category = new String();
SAPB1.ExtendedTranslation.prototype.ID = new String();
SAPB1.ExtendedTranslation.prototype.SecondaryID = new String();
SAPB1.ExtendedTranslation.prototype.SourceLanguage = new Number();
SAPB1.ExtendedTranslation.prototype.UpdateDate = new String();
SAPB1.ExtendedTranslation.prototype.CreateDate = new String();
SAPB1.ExtendedTranslation.prototype.ExtendedTranslation_ItemLines = new ExtendedTranslation_ItemLineCollection();

SAPB1.ExtendedTranslation.ExtendedTranslation_ItemLine = ExtendedTranslation_ItemLine
SAPB1.ExtendedTranslation.ExtendedTranslation_ItemLineCollection = ExtendedTranslation_ItemLineCollection

SAPB1.ExtendedTranslation.TranslationCategoryEnum = TranslationCategoryEnum

SAPB1.ExtendedTranslation.create = function (rawObject) {
    var instance = new SAPB1.ExtendedTranslation();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ExtendedTranslation.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ExtendedTranslation;
