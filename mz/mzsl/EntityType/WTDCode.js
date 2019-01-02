var WTDEffectiveDate = require('ComplexType/WTDEffectiveDate')
var WTDEffectiveDateCollection = require('ComplexType/WTDEffectiveDateCollection')
var WTDBP = require('ComplexType/WTDBP')
var WTDBPCollection = require('ComplexType/WTDBPCollection')
var WTDItem = require('ComplexType/WTDItem')
var WTDItemCollection = require('ComplexType/WTDItemCollection')
var WTDFreight = require('ComplexType/WTDFreight')
var WTDFreightCollection = require('ComplexType/WTDFreightCollection')

var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var WithholdingTaxCodeCategoryEnum = require('EnumType/WithholdingTaxCodeCategoryEnum')
var WithholdingTaxCodeBaseTypeEnum = require('EnumType/WithholdingTaxCodeBaseTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.WTDCode = function () {
}
SAPB1.WTDCode.prototype = new SAPB1.EntityType();
SAPB1.WTDCode.prototype.constructor = SAPB1.WTDCode;
SAPB1.WTDCode.prototype.keys.push('AbsEntry');
SAPB1.WTDCode.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.WTDCode.WTaxCode = { valueOf: function(){return 'WTaxCode';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.WTDCode.WTaxName = { valueOf: function(){return 'WTaxName';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTDCode.FormulaID = { valueOf: function(){return 'FormulaID';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTDCode.Inactive = { valueOf: function(){return 'Inactive';}, Type: 'BoYesNoEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTDCode.OfficialCode = { valueOf: function(){return 'OfficialCode';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTDCode.Category = { valueOf: function(){return 'Category';}, Type: 'WithholdingTaxCodeCategoryEnum', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTDCode.BaseType = { valueOf: function(){return 'BaseType';}, Type: 'WithholdingTaxCodeBaseTypeEnum', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTDCode.Type = { valueOf: function(){return 'Type';}, Type: 'Edm.Int32', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTDCode.MinAmount = { valueOf: function(){return 'MinAmount';}, Type: 'Edm.Double', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTDCode.BaseAmountPrct = { valueOf: function(){return 'BaseAmountPrct';}, Type: 'Edm.Double', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTDCode.SlidingScaleProgressiveTax = { valueOf: function(){return 'SlidingScaleProgressiveTax';}, Type: 'BoYesNoEnum', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTDCode.WTDEffectiveDateCollection = { valueOf: function(){return 'WTDEffectiveDateCollection';}, Type: 'WTDEffectiveDate', Index: 12, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.WTDCode.WTDBPCollection = { valueOf: function(){return 'WTDBPCollection';}, Type: 'WTDBP', Index: 13, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.WTDCode.WTDItemCollection = { valueOf: function(){return 'WTDItemCollection';}, Type: 'WTDItem', Index: 14, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.WTDCode.WTDFreightCollection = { valueOf: function(){return 'WTDFreightCollection';}, Type: 'WTDFreight', Index: 15, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.WTDCode.prototype.AbsEntry = new Number();
SAPB1.WTDCode.prototype.WTaxCode = new String();
SAPB1.WTDCode.prototype.WTaxName = new String();
SAPB1.WTDCode.prototype.FormulaID = new Number();
SAPB1.WTDCode.prototype.Inactive = new String();
SAPB1.WTDCode.prototype.OfficialCode = new String();
SAPB1.WTDCode.prototype.Category = new String();
SAPB1.WTDCode.prototype.BaseType = new String();
SAPB1.WTDCode.prototype.Type = new Number();
SAPB1.WTDCode.prototype.MinAmount = new Number();
SAPB1.WTDCode.prototype.BaseAmountPrct = new Number();
SAPB1.WTDCode.prototype.SlidingScaleProgressiveTax = new String();
SAPB1.WTDCode.prototype.WTDEffectiveDateCollection = new WTDEffectiveDateCollection();
SAPB1.WTDCode.prototype.WTDBPCollection = new WTDBPCollection();
SAPB1.WTDCode.prototype.WTDItemCollection = new WTDItemCollection();
SAPB1.WTDCode.prototype.WTDFreightCollection = new WTDFreightCollection();

SAPB1.WTDCode.WTDEffectiveDate = WTDEffectiveDate
SAPB1.WTDCode.WTDEffectiveDateCollection = WTDEffectiveDateCollection
SAPB1.WTDCode.WTDBP = WTDBP
SAPB1.WTDCode.WTDBPCollection = WTDBPCollection
SAPB1.WTDCode.WTDItem = WTDItem
SAPB1.WTDCode.WTDItemCollection = WTDItemCollection
SAPB1.WTDCode.WTDFreight = WTDFreight
SAPB1.WTDCode.WTDFreightCollection = WTDFreightCollection

SAPB1.WTDCode.BoYesNoEnum = BoYesNoEnum
SAPB1.WTDCode.WithholdingTaxCodeCategoryEnum = WithholdingTaxCodeCategoryEnum
SAPB1.WTDCode.WithholdingTaxCodeBaseTypeEnum = WithholdingTaxCodeBaseTypeEnum

SAPB1.WTDCode.create = function (rawObject) {
    var instance = new SAPB1.WTDCode();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.WTDCode.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.WTDCode;
