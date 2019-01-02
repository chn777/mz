
var BoTCDDocumentTypeEnum = require('EnumType/BoTCDDocumentTypeEnum')
var BoBusinessAreaEnum = require('EnumType/BoBusinessAreaEnum')
var BoTCDConditionEnum = require('EnumType/BoTCDConditionEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.TaxCodeDetermination = function () {
}
SAPB1.TaxCodeDetermination.prototype = new SAPB1.EntityType();
SAPB1.TaxCodeDetermination.prototype.constructor = SAPB1.TaxCodeDetermination;
SAPB1.TaxCodeDetermination.prototype.keys.push('DocEntry');
SAPB1.TaxCodeDetermination.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDetermination.LineNumber = { valueOf: function(){return 'LineNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDetermination.DocumentType = { valueOf: function(){return 'DocumentType';}, Type: 'BoTCDDocumentTypeEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDetermination.BusinessArea = { valueOf: function(){return 'BusinessArea';}, Type: 'BoBusinessAreaEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDetermination.Condition1 = { valueOf: function(){return 'Condition1';}, Type: 'BoTCDConditionEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDetermination.UDFTable1 = { valueOf: function(){return 'UDFTable1';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDetermination.NumberValue1 = { valueOf: function(){return 'NumberValue1';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDetermination.StringValue1 = { valueOf: function(){return 'StringValue1';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDetermination.MoneyValue1 = { valueOf: function(){return 'MoneyValue1';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDetermination.Condition2 = { valueOf: function(){return 'Condition2';}, Type: 'BoTCDConditionEnum', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDetermination.UDFTable2 = { valueOf: function(){return 'UDFTable2';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDetermination.NumberValue2 = { valueOf: function(){return 'NumberValue2';}, Type: 'Edm.Int32', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDetermination.StringValue2 = { valueOf: function(){return 'StringValue2';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDetermination.MoneyValue2 = { valueOf: function(){return 'MoneyValue2';}, Type: 'Edm.Double', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDetermination.Condition3 = { valueOf: function(){return 'Condition3';}, Type: 'BoTCDConditionEnum', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDetermination.UDFTable3 = { valueOf: function(){return 'UDFTable3';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDetermination.NumberValue3 = { valueOf: function(){return 'NumberValue3';}, Type: 'Edm.Int32', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDetermination.StringValue3 = { valueOf: function(){return 'StringValue3';}, Type: 'Edm.String', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDetermination.MoneyValue3 = { valueOf: function(){return 'MoneyValue3';}, Type: 'Edm.Double', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDetermination.Condition4 = { valueOf: function(){return 'Condition4';}, Type: 'BoTCDConditionEnum', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDetermination.UDFTable4 = { valueOf: function(){return 'UDFTable4';}, Type: 'Edm.String', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDetermination.NumberValue4 = { valueOf: function(){return 'NumberValue4';}, Type: 'Edm.Int32', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDetermination.StringValue4 = { valueOf: function(){return 'StringValue4';}, Type: 'Edm.String', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDetermination.MoneyValue4 = { valueOf: function(){return 'MoneyValue4';}, Type: 'Edm.Double', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDetermination.Condition5 = { valueOf: function(){return 'Condition5';}, Type: 'BoTCDConditionEnum', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDetermination.UDFTable5 = { valueOf: function(){return 'UDFTable5';}, Type: 'Edm.String', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDetermination.NumberValue5 = { valueOf: function(){return 'NumberValue5';}, Type: 'Edm.Int32', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDetermination.StringValue5 = { valueOf: function(){return 'StringValue5';}, Type: 'Edm.String', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDetermination.MoneyValue5 = { valueOf: function(){return 'MoneyValue5';}, Type: 'Edm.Double', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDetermination.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDetermination.TaxCode = { valueOf: function(){return 'TaxCode';}, Type: 'Edm.String', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDetermination.FreightRowTax = { valueOf: function(){return 'FreightRowTax';}, Type: 'Edm.String', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDetermination.FreightHeaderTax = { valueOf: function(){return 'FreightHeaderTax';}, Type: 'Edm.String', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDetermination.UDFAlias1 = { valueOf: function(){return 'UDFAlias1';}, Type: 'Edm.String', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDetermination.UDFAlias2 = { valueOf: function(){return 'UDFAlias2';}, Type: 'Edm.String', Index: 34, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDetermination.UDFAlias3 = { valueOf: function(){return 'UDFAlias3';}, Type: 'Edm.String', Index: 35, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDetermination.UDFAlias4 = { valueOf: function(){return 'UDFAlias4';}, Type: 'Edm.String', Index: 36, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDetermination.UDFAlias5 = { valueOf: function(){return 'UDFAlias5';}, Type: 'Edm.String', Index: 37, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDetermination.prototype.DocEntry = new Number();
SAPB1.TaxCodeDetermination.prototype.LineNumber = new Number();
SAPB1.TaxCodeDetermination.prototype.DocumentType = new String();
SAPB1.TaxCodeDetermination.prototype.BusinessArea = new String();
SAPB1.TaxCodeDetermination.prototype.Condition1 = new String();
SAPB1.TaxCodeDetermination.prototype.UDFTable1 = new String();
SAPB1.TaxCodeDetermination.prototype.NumberValue1 = new Number();
SAPB1.TaxCodeDetermination.prototype.StringValue1 = new String();
SAPB1.TaxCodeDetermination.prototype.MoneyValue1 = new Number();
SAPB1.TaxCodeDetermination.prototype.Condition2 = new String();
SAPB1.TaxCodeDetermination.prototype.UDFTable2 = new String();
SAPB1.TaxCodeDetermination.prototype.NumberValue2 = new Number();
SAPB1.TaxCodeDetermination.prototype.StringValue2 = new String();
SAPB1.TaxCodeDetermination.prototype.MoneyValue2 = new Number();
SAPB1.TaxCodeDetermination.prototype.Condition3 = new String();
SAPB1.TaxCodeDetermination.prototype.UDFTable3 = new String();
SAPB1.TaxCodeDetermination.prototype.NumberValue3 = new Number();
SAPB1.TaxCodeDetermination.prototype.StringValue3 = new String();
SAPB1.TaxCodeDetermination.prototype.MoneyValue3 = new Number();
SAPB1.TaxCodeDetermination.prototype.Condition4 = new String();
SAPB1.TaxCodeDetermination.prototype.UDFTable4 = new String();
SAPB1.TaxCodeDetermination.prototype.NumberValue4 = new Number();
SAPB1.TaxCodeDetermination.prototype.StringValue4 = new String();
SAPB1.TaxCodeDetermination.prototype.MoneyValue4 = new Number();
SAPB1.TaxCodeDetermination.prototype.Condition5 = new String();
SAPB1.TaxCodeDetermination.prototype.UDFTable5 = new String();
SAPB1.TaxCodeDetermination.prototype.NumberValue5 = new Number();
SAPB1.TaxCodeDetermination.prototype.StringValue5 = new String();
SAPB1.TaxCodeDetermination.prototype.MoneyValue5 = new Number();
SAPB1.TaxCodeDetermination.prototype.Description = new String();
SAPB1.TaxCodeDetermination.prototype.TaxCode = new String();
SAPB1.TaxCodeDetermination.prototype.FreightRowTax = new String();
SAPB1.TaxCodeDetermination.prototype.FreightHeaderTax = new String();
SAPB1.TaxCodeDetermination.prototype.UDFAlias1 = new String();
SAPB1.TaxCodeDetermination.prototype.UDFAlias2 = new String();
SAPB1.TaxCodeDetermination.prototype.UDFAlias3 = new String();
SAPB1.TaxCodeDetermination.prototype.UDFAlias4 = new String();
SAPB1.TaxCodeDetermination.prototype.UDFAlias5 = new String();


SAPB1.TaxCodeDetermination.BoTCDDocumentTypeEnum = BoTCDDocumentTypeEnum
SAPB1.TaxCodeDetermination.BoBusinessAreaEnum = BoBusinessAreaEnum
SAPB1.TaxCodeDetermination.BoTCDConditionEnum = BoTCDConditionEnum

SAPB1.TaxCodeDetermination.create = function (rawObject) {
    var instance = new SAPB1.TaxCodeDetermination();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.TaxCodeDetermination.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.TaxCodeDetermination;
