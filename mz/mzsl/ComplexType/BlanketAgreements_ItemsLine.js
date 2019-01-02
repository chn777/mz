var BlanketAgreements_DetailsLine = require('ComplexType/BlanketAgreements_DetailsLine')
var BlanketAgreements_DetailsLineCollection = require('ComplexType/BlanketAgreements_DetailsLineCollection')


var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BlanketAgreements_ItemsLine = function () {
}
SAPB1.BlanketAgreements_ItemsLine.prototype = new SAPB1.ComplexType();
SAPB1.BlanketAgreements_ItemsLine.prototype.constructor = SAPB1.BlanketAgreements_ItemsLine;
SAPB1.BlanketAgreements_ItemsLine.AgreementNo = { valueOf: function(){return 'AgreementNo';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_ItemsLine.AgreementRowNumber = { valueOf: function(){return 'AgreementRowNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_ItemsLine.ItemNo = { valueOf: function(){return 'ItemNo';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_ItemsLine.ItemDescription = { valueOf: function(){return 'ItemDescription';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_ItemsLine.ItemGroup = { valueOf: function(){return 'ItemGroup';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_ItemsLine.PlannedQuantity = { valueOf: function(){return 'PlannedQuantity';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_ItemsLine.UnitPrice = { valueOf: function(){return 'UnitPrice';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_ItemsLine.PriceCurrency = { valueOf: function(){return 'PriceCurrency';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_ItemsLine.CumulativeQuantity = { valueOf: function(){return 'CumulativeQuantity';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_ItemsLine.CumulativeAmountLC = { valueOf: function(){return 'CumulativeAmountLC';}, Type: 'Edm.Double', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_ItemsLine.CumulativeAmountFC = { valueOf: function(){return 'CumulativeAmountFC';}, Type: 'Edm.Double', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_ItemsLine.FreeText = { valueOf: function(){return 'FreeText';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_ItemsLine.InventoryUoM = { valueOf: function(){return 'InventoryUoM';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_ItemsLine.PortionOfReturns = { valueOf: function(){return 'PortionOfReturns';}, Type: 'Edm.Double', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_ItemsLine.EndOfWarranty = { valueOf: function(){return 'EndOfWarranty';}, Type: 'Edm.DateTime', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_ItemsLine.PlannedAmountLC = { valueOf: function(){return 'PlannedAmountLC';}, Type: 'Edm.Double', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_ItemsLine.PlannedAmountFC = { valueOf: function(){return 'PlannedAmountFC';}, Type: 'Edm.Double', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_ItemsLine.LineDiscount = { valueOf: function(){return 'LineDiscount';}, Type: 'Edm.Double', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_ItemsLine.UoMEntry = { valueOf: function(){return 'UoMEntry';}, Type: 'Edm.Int32', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_ItemsLine.UoMCode = { valueOf: function(){return 'UoMCode';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_ItemsLine.UnitsOfMeasurement = { valueOf: function(){return 'UnitsOfMeasurement';}, Type: 'Edm.Double', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_ItemsLine.UndeliveredCumulativeQuantity = { valueOf: function(){return 'UndeliveredCumulativeQuantity';}, Type: 'Edm.Double', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_ItemsLine.UndeliveredCumulativeAmountLC = { valueOf: function(){return 'UndeliveredCumulativeAmountLC';}, Type: 'Edm.Double', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_ItemsLine.UndeliveredCumulativeAmountFC = { valueOf: function(){return 'UndeliveredCumulativeAmountFC';}, Type: 'Edm.Double', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_ItemsLine.ShippingType = { valueOf: function(){return 'ShippingType';}, Type: 'Edm.Int32', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_ItemsLine.Project = { valueOf: function(){return 'Project';}, Type: 'Edm.String', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_ItemsLine.TaxCode = { valueOf: function(){return 'TaxCode';}, Type: 'Edm.String', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_ItemsLine.TAXRate = { valueOf: function(){return 'TAXRate';}, Type: 'Edm.Double', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_ItemsLine.PlannedVATAmountLC = { valueOf: function(){return 'PlannedVATAmountLC';}, Type: 'Edm.Double', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_ItemsLine.PlannedVATAmountFC = { valueOf: function(){return 'PlannedVATAmountFC';}, Type: 'Edm.Double', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_ItemsLine.CumulativeVATAmountLC = { valueOf: function(){return 'CumulativeVATAmountLC';}, Type: 'Edm.Double', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_ItemsLine.CumulativeVATAmountFC = { valueOf: function(){return 'CumulativeVATAmountFC';}, Type: 'Edm.Double', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreements_ItemsLine.BlanketAgreements_DetailsLines = { valueOf: function(){return 'BlanketAgreements_DetailsLines';}, Type: 'BlanketAgreements_DetailsLine', Index: 32, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.BlanketAgreements_ItemsLine.prototype.AgreementNo = new Number();
SAPB1.BlanketAgreements_ItemsLine.prototype.AgreementRowNumber = new Number();
SAPB1.BlanketAgreements_ItemsLine.prototype.ItemNo = new String();
SAPB1.BlanketAgreements_ItemsLine.prototype.ItemDescription = new String();
SAPB1.BlanketAgreements_ItemsLine.prototype.ItemGroup = new Number();
SAPB1.BlanketAgreements_ItemsLine.prototype.PlannedQuantity = new Number();
SAPB1.BlanketAgreements_ItemsLine.prototype.UnitPrice = new Number();
SAPB1.BlanketAgreements_ItemsLine.prototype.PriceCurrency = new String();
SAPB1.BlanketAgreements_ItemsLine.prototype.CumulativeQuantity = new Number();
SAPB1.BlanketAgreements_ItemsLine.prototype.CumulativeAmountLC = new Number();
SAPB1.BlanketAgreements_ItemsLine.prototype.CumulativeAmountFC = new Number();
SAPB1.BlanketAgreements_ItemsLine.prototype.FreeText = new String();
SAPB1.BlanketAgreements_ItemsLine.prototype.InventoryUoM = new String();
SAPB1.BlanketAgreements_ItemsLine.prototype.PortionOfReturns = new Number();
SAPB1.BlanketAgreements_ItemsLine.prototype.EndOfWarranty = new String();
SAPB1.BlanketAgreements_ItemsLine.prototype.PlannedAmountLC = new Number();
SAPB1.BlanketAgreements_ItemsLine.prototype.PlannedAmountFC = new Number();
SAPB1.BlanketAgreements_ItemsLine.prototype.LineDiscount = new Number();
SAPB1.BlanketAgreements_ItemsLine.prototype.UoMEntry = new Number();
SAPB1.BlanketAgreements_ItemsLine.prototype.UoMCode = new String();
SAPB1.BlanketAgreements_ItemsLine.prototype.UnitsOfMeasurement = new Number();
SAPB1.BlanketAgreements_ItemsLine.prototype.UndeliveredCumulativeQuantity = new Number();
SAPB1.BlanketAgreements_ItemsLine.prototype.UndeliveredCumulativeAmountLC = new Number();
SAPB1.BlanketAgreements_ItemsLine.prototype.UndeliveredCumulativeAmountFC = new Number();
SAPB1.BlanketAgreements_ItemsLine.prototype.ShippingType = new Number();
SAPB1.BlanketAgreements_ItemsLine.prototype.Project = new String();
SAPB1.BlanketAgreements_ItemsLine.prototype.TaxCode = new String();
SAPB1.BlanketAgreements_ItemsLine.prototype.TAXRate = new Number();
SAPB1.BlanketAgreements_ItemsLine.prototype.PlannedVATAmountLC = new Number();
SAPB1.BlanketAgreements_ItemsLine.prototype.PlannedVATAmountFC = new Number();
SAPB1.BlanketAgreements_ItemsLine.prototype.CumulativeVATAmountLC = new Number();
SAPB1.BlanketAgreements_ItemsLine.prototype.CumulativeVATAmountFC = new Number();
SAPB1.BlanketAgreements_ItemsLine.prototype.BlanketAgreements_DetailsLines = new BlanketAgreements_DetailsLineCollection();

SAPB1.BlanketAgreements_ItemsLine.BlanketAgreements_DetailsLine = BlanketAgreements_DetailsLine
SAPB1.BlanketAgreements_ItemsLine.BlanketAgreements_DetailsLineCollection = BlanketAgreements_DetailsLineCollection


SAPB1.BlanketAgreements_ItemsLine.create = function (rawObject) {
    var instance = new SAPB1.BlanketAgreements_ItemsLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BlanketAgreements_ItemsLine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BlanketAgreements_ItemsLine;
