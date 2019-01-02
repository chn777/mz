var TaxCodeDeterminationTCDKeyFieldValue = require('ComplexType/TaxCodeDeterminationTCDKeyFieldValue')
var TaxCodeDeterminationTCDKeyFieldValueCollection = require('ComplexType/TaxCodeDeterminationTCDKeyFieldValueCollection')


var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.TaxCodeDeterminationTCDKeyField = function () {
}
SAPB1.TaxCodeDeterminationTCDKeyField.prototype = new SAPB1.ComplexType();
SAPB1.TaxCodeDeterminationTCDKeyField.prototype.constructor = SAPB1.TaxCodeDeterminationTCDKeyField;
SAPB1.TaxCodeDeterminationTCDKeyField.AbsId = { valueOf: function(){return 'AbsId';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCDKeyField.Descr = { valueOf: function(){return 'Descr';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCDKeyField.Priority = { valueOf: function(){return 'Priority';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCDKeyField.KeyFld_1 = { valueOf: function(){return 'KeyFld_1';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCDKeyField.UDFTable_1 = { valueOf: function(){return 'UDFTable_1';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCDKeyField.UDFAlias_1 = { valueOf: function(){return 'UDFAlias_1';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCDKeyField.KeyFld_2 = { valueOf: function(){return 'KeyFld_2';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCDKeyField.UDFTable_2 = { valueOf: function(){return 'UDFTable_2';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCDKeyField.UDFAlias_2 = { valueOf: function(){return 'UDFAlias_2';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCDKeyField.KeyFld_3 = { valueOf: function(){return 'KeyFld_3';}, Type: 'Edm.Int32', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCDKeyField.UDFTable_3 = { valueOf: function(){return 'UDFTable_3';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCDKeyField.UDFAlias_3 = { valueOf: function(){return 'UDFAlias_3';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCDKeyField.KeyFld_4 = { valueOf: function(){return 'KeyFld_4';}, Type: 'Edm.Int32', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCDKeyField.UDFTable_4 = { valueOf: function(){return 'UDFTable_4';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCDKeyField.UDFAlias_4 = { valueOf: function(){return 'UDFAlias_4';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCDKeyField.TaxCodeDeterminationTCDKeyFieldValues = { valueOf: function(){return 'TaxCodeDeterminationTCDKeyFieldValues';}, Type: 'TaxCodeDeterminationTCDKeyFieldValue', Index: 15, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.TaxCodeDeterminationTCDKeyField.prototype.AbsId = new Number();
SAPB1.TaxCodeDeterminationTCDKeyField.prototype.Descr = new String();
SAPB1.TaxCodeDeterminationTCDKeyField.prototype.Priority = new Number();
SAPB1.TaxCodeDeterminationTCDKeyField.prototype.KeyFld_1 = new Number();
SAPB1.TaxCodeDeterminationTCDKeyField.prototype.UDFTable_1 = new String();
SAPB1.TaxCodeDeterminationTCDKeyField.prototype.UDFAlias_1 = new String();
SAPB1.TaxCodeDeterminationTCDKeyField.prototype.KeyFld_2 = new Number();
SAPB1.TaxCodeDeterminationTCDKeyField.prototype.UDFTable_2 = new String();
SAPB1.TaxCodeDeterminationTCDKeyField.prototype.UDFAlias_2 = new String();
SAPB1.TaxCodeDeterminationTCDKeyField.prototype.KeyFld_3 = new Number();
SAPB1.TaxCodeDeterminationTCDKeyField.prototype.UDFTable_3 = new String();
SAPB1.TaxCodeDeterminationTCDKeyField.prototype.UDFAlias_3 = new String();
SAPB1.TaxCodeDeterminationTCDKeyField.prototype.KeyFld_4 = new Number();
SAPB1.TaxCodeDeterminationTCDKeyField.prototype.UDFTable_4 = new String();
SAPB1.TaxCodeDeterminationTCDKeyField.prototype.UDFAlias_4 = new String();
SAPB1.TaxCodeDeterminationTCDKeyField.prototype.TaxCodeDeterminationTCDKeyFieldValues = new TaxCodeDeterminationTCDKeyFieldValueCollection();

SAPB1.TaxCodeDeterminationTCDKeyField.TaxCodeDeterminationTCDKeyFieldValue = TaxCodeDeterminationTCDKeyFieldValue
SAPB1.TaxCodeDeterminationTCDKeyField.TaxCodeDeterminationTCDKeyFieldValueCollection = TaxCodeDeterminationTCDKeyFieldValueCollection


SAPB1.TaxCodeDeterminationTCDKeyField.create = function (rawObject) {
    var instance = new SAPB1.TaxCodeDeterminationTCDKeyField();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.TaxCodeDeterminationTCDKeyField.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.TaxCodeDeterminationTCDKeyField;
