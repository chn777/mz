
var BoDocumentTypes = require('EnumType/BoDocumentTypes')
var BoServiceSupplyMethods = require('EnumType/BoServiceSupplyMethods')
var BoServicePaymentMethods = require('EnumType/BoServicePaymentMethods')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ItemIntrastatExtension = function () {
}
SAPB1.ItemIntrastatExtension.prototype = new SAPB1.ComplexType();
SAPB1.ItemIntrastatExtension.prototype.constructor = SAPB1.ItemIntrastatExtension;
SAPB1.ItemIntrastatExtension.ItemCode = { valueOf: function(){return 'ItemCode';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ItemIntrastatExtension.CommodityCode = { valueOf: function(){return 'CommodityCode';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemIntrastatExtension.SupplementaryUnit = { valueOf: function(){return 'SupplementaryUnit';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemIntrastatExtension.FactorOfSupplementaryUnit = { valueOf: function(){return 'FactorOfSupplementaryUnit';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemIntrastatExtension.ImportRegionState = { valueOf: function(){return 'ImportRegionState';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemIntrastatExtension.ExportRegionState = { valueOf: function(){return 'ExportRegionState';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemIntrastatExtension.ImportNatureOfTransaction = { valueOf: function(){return 'ImportNatureOfTransaction';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemIntrastatExtension.ExportNatureOfTransaction = { valueOf: function(){return 'ExportNatureOfTransaction';}, Type: 'Edm.Int32', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemIntrastatExtension.ImportStatisticalProcedure = { valueOf: function(){return 'ImportStatisticalProcedure';}, Type: 'Edm.Int32', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemIntrastatExtension.ExportStatisticalProcedure = { valueOf: function(){return 'ExportStatisticalProcedure';}, Type: 'Edm.Int32', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemIntrastatExtension.CountryOfOrigin = { valueOf: function(){return 'CountryOfOrigin';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemIntrastatExtension.ServiceCode = { valueOf: function(){return 'ServiceCode';}, Type: 'Edm.Int32', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemIntrastatExtension.Type = { valueOf: function(){return 'Type';}, Type: 'BoDocumentTypes', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemIntrastatExtension.ServiceSupplyMethod = { valueOf: function(){return 'ServiceSupplyMethod';}, Type: 'BoServiceSupplyMethods', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemIntrastatExtension.ServicePaymentMethod = { valueOf: function(){return 'ServicePaymentMethod';}, Type: 'BoServicePaymentMethods', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemIntrastatExtension.ImportRegionCountry = { valueOf: function(){return 'ImportRegionCountry';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemIntrastatExtension.ExportRegionCountry = { valueOf: function(){return 'ExportRegionCountry';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemIntrastatExtension.UseWeightInCalculation = { valueOf: function(){return 'UseWeightInCalculation';}, Type: 'BoYesNoEnum', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemIntrastatExtension.IntrastatRelevant = { valueOf: function(){return 'IntrastatRelevant';}, Type: 'BoYesNoEnum', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemIntrastatExtension.StatisticalCode = { valueOf: function(){return 'StatisticalCode';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemIntrastatExtension.prototype.ItemCode = new String();
SAPB1.ItemIntrastatExtension.prototype.CommodityCode = new Number();
SAPB1.ItemIntrastatExtension.prototype.SupplementaryUnit = new Number();
SAPB1.ItemIntrastatExtension.prototype.FactorOfSupplementaryUnit = new Number();
SAPB1.ItemIntrastatExtension.prototype.ImportRegionState = new Number();
SAPB1.ItemIntrastatExtension.prototype.ExportRegionState = new Number();
SAPB1.ItemIntrastatExtension.prototype.ImportNatureOfTransaction = new Number();
SAPB1.ItemIntrastatExtension.prototype.ExportNatureOfTransaction = new Number();
SAPB1.ItemIntrastatExtension.prototype.ImportStatisticalProcedure = new Number();
SAPB1.ItemIntrastatExtension.prototype.ExportStatisticalProcedure = new Number();
SAPB1.ItemIntrastatExtension.prototype.CountryOfOrigin = new String();
SAPB1.ItemIntrastatExtension.prototype.ServiceCode = new Number();
SAPB1.ItemIntrastatExtension.prototype.Type = new String();
SAPB1.ItemIntrastatExtension.prototype.ServiceSupplyMethod = new String();
SAPB1.ItemIntrastatExtension.prototype.ServicePaymentMethod = new String();
SAPB1.ItemIntrastatExtension.prototype.ImportRegionCountry = new String();
SAPB1.ItemIntrastatExtension.prototype.ExportRegionCountry = new String();
SAPB1.ItemIntrastatExtension.prototype.UseWeightInCalculation = new String();
SAPB1.ItemIntrastatExtension.prototype.IntrastatRelevant = new String();
SAPB1.ItemIntrastatExtension.prototype.StatisticalCode = new String();


SAPB1.ItemIntrastatExtension.BoDocumentTypes = BoDocumentTypes
SAPB1.ItemIntrastatExtension.BoServiceSupplyMethods = BoServiceSupplyMethods
SAPB1.ItemIntrastatExtension.BoServicePaymentMethods = BoServicePaymentMethods
SAPB1.ItemIntrastatExtension.BoYesNoEnum = BoYesNoEnum

SAPB1.ItemIntrastatExtension.create = function (rawObject) {
    var instance = new SAPB1.ItemIntrastatExtension();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ItemIntrastatExtension.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ItemIntrastatExtension;
