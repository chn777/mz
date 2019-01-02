var LandedCost_ItemLine = require('ComplexType/LandedCost_ItemLine')
var LandedCost_ItemLineCollection = require('ComplexType/LandedCost_ItemLineCollection')
var LandedCost_CostLine = require('ComplexType/LandedCost_CostLine')
var LandedCost_CostLineCollection = require('ComplexType/LandedCost_CostLineCollection')

var LandedCostDocStatusEnum = require('EnumType/LandedCostDocStatusEnum')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.LandedCost = function () {
}
SAPB1.LandedCost.prototype = new SAPB1.EntityType();
SAPB1.LandedCost.prototype.constructor = SAPB1.LandedCost;
SAPB1.LandedCost.prototype.keys.push('DocEntry');
SAPB1.LandedCost.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.LandedCost.LandedCostNumber = { valueOf: function(){return 'LandedCostNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.LandedCost.PostingDate = { valueOf: function(){return 'PostingDate';}, Type: 'Edm.DateTime', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost.DueDate = { valueOf: function(){return 'DueDate';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost.VendorCode = { valueOf: function(){return 'VendorCode';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost.VendorName = { valueOf: function(){return 'VendorName';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost.Broker = { valueOf: function(){return 'Broker';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost.BrokerName = { valueOf: function(){return 'BrokerName';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost.ClosedDocument = { valueOf: function(){return 'ClosedDocument';}, Type: 'LandedCostDocStatusEnum', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost.FileNumber = { valueOf: function(){return 'FileNumber';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost.Remarks = { valueOf: function(){return 'Remarks';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost.Reference = { valueOf: function(){return 'Reference';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost.DocumentCurrency = { valueOf: function(){return 'DocumentCurrency';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost.DocumentRate = { valueOf: function(){return 'DocumentRate';}, Type: 'Edm.Double', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost.ProjectedCustoms = { valueOf: function(){return 'ProjectedCustoms';}, Type: 'Edm.Double', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost.ActualCustoms = { valueOf: function(){return 'ActualCustoms';}, Type: 'Edm.Double', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost.ActualCustomsFC = { valueOf: function(){return 'ActualCustomsFC';}, Type: 'Edm.Double', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost.Tax1 = { valueOf: function(){return 'Tax1';}, Type: 'Edm.Double', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost.Tax2 = { valueOf: function(){return 'Tax2';}, Type: 'Edm.Double', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost.BeforeTax = { valueOf: function(){return 'BeforeTax';}, Type: 'Edm.Double', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost.Total = { valueOf: function(){return 'Total';}, Type: 'Edm.Double', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost.TotalFreightCharges = { valueOf: function(){return 'TotalFreightCharges';}, Type: 'Edm.Double', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost.ProjectedCustomsFC = { valueOf: function(){return 'ProjectedCustomsFC';}, Type: 'Edm.Double', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost.Tax1FC = { valueOf: function(){return 'Tax1FC';}, Type: 'Edm.Double', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost.Tax2FC = { valueOf: function(){return 'Tax2FC';}, Type: 'Edm.Double', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost.BeforeTaxFC = { valueOf: function(){return 'BeforeTaxFC';}, Type: 'Edm.Double', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost.TotalFC = { valueOf: function(){return 'TotalFC';}, Type: 'Edm.Double', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost.TotalFreightChargesFC = { valueOf: function(){return 'TotalFreightChargesFC';}, Type: 'Edm.Double', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost.Series = { valueOf: function(){return 'Series';}, Type: 'Edm.Int32', Index: 28, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.LandedCost.CustomsAffectsInventory = { valueOf: function(){return 'CustomsAffectsInventory';}, Type: 'BoYesNoEnum', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost.AmountToBalance = { valueOf: function(){return 'AmountToBalance';}, Type: 'Edm.Double', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost.AmountToBalanceFC = { valueOf: function(){return 'AmountToBalanceFC';}, Type: 'Edm.Double', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost.BillofLadingNumber = { valueOf: function(){return 'BillofLadingNumber';}, Type: 'Edm.String', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost.TransportType = { valueOf: function(){return 'TransportType';}, Type: 'Edm.Int32', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost.TransactionNumber = { valueOf: function(){return 'TransactionNumber';}, Type: 'Edm.Int32', Index: 34, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost.JournalRemarks = { valueOf: function(){return 'JournalRemarks';}, Type: 'Edm.String', Index: 35, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost.AttachmentEntry = { valueOf: function(){return 'AttachmentEntry';}, Type: 'Edm.Int32', Index: 36, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCost.LandedCost_ItemLines = { valueOf: function(){return 'LandedCost_ItemLines';}, Type: 'LandedCost_ItemLine', Index: 37, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.LandedCost.LandedCost_CostLines = { valueOf: function(){return 'LandedCost_CostLines';}, Type: 'LandedCost_CostLine', Index: 38, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.LandedCost.prototype.DocEntry = new Number();
SAPB1.LandedCost.prototype.LandedCostNumber = new Number();
SAPB1.LandedCost.prototype.PostingDate = new String();
SAPB1.LandedCost.prototype.DueDate = new String();
SAPB1.LandedCost.prototype.VendorCode = new String();
SAPB1.LandedCost.prototype.VendorName = new String();
SAPB1.LandedCost.prototype.Broker = new String();
SAPB1.LandedCost.prototype.BrokerName = new String();
SAPB1.LandedCost.prototype.ClosedDocument = new String();
SAPB1.LandedCost.prototype.FileNumber = new String();
SAPB1.LandedCost.prototype.Remarks = new String();
SAPB1.LandedCost.prototype.Reference = new String();
SAPB1.LandedCost.prototype.DocumentCurrency = new String();
SAPB1.LandedCost.prototype.DocumentRate = new Number();
SAPB1.LandedCost.prototype.ProjectedCustoms = new Number();
SAPB1.LandedCost.prototype.ActualCustoms = new Number();
SAPB1.LandedCost.prototype.ActualCustomsFC = new Number();
SAPB1.LandedCost.prototype.Tax1 = new Number();
SAPB1.LandedCost.prototype.Tax2 = new Number();
SAPB1.LandedCost.prototype.BeforeTax = new Number();
SAPB1.LandedCost.prototype.Total = new Number();
SAPB1.LandedCost.prototype.TotalFreightCharges = new Number();
SAPB1.LandedCost.prototype.ProjectedCustomsFC = new Number();
SAPB1.LandedCost.prototype.Tax1FC = new Number();
SAPB1.LandedCost.prototype.Tax2FC = new Number();
SAPB1.LandedCost.prototype.BeforeTaxFC = new Number();
SAPB1.LandedCost.prototype.TotalFC = new Number();
SAPB1.LandedCost.prototype.TotalFreightChargesFC = new Number();
SAPB1.LandedCost.prototype.Series = new Number();
SAPB1.LandedCost.prototype.CustomsAffectsInventory = new String();
SAPB1.LandedCost.prototype.AmountToBalance = new Number();
SAPB1.LandedCost.prototype.AmountToBalanceFC = new Number();
SAPB1.LandedCost.prototype.BillofLadingNumber = new String();
SAPB1.LandedCost.prototype.TransportType = new Number();
SAPB1.LandedCost.prototype.TransactionNumber = new Number();
SAPB1.LandedCost.prototype.JournalRemarks = new String();
SAPB1.LandedCost.prototype.AttachmentEntry = new Number();
SAPB1.LandedCost.prototype.LandedCost_ItemLines = new LandedCost_ItemLineCollection();
SAPB1.LandedCost.prototype.LandedCost_CostLines = new LandedCost_CostLineCollection();

SAPB1.LandedCost.LandedCost_ItemLine = LandedCost_ItemLine
SAPB1.LandedCost.LandedCost_ItemLineCollection = LandedCost_ItemLineCollection
SAPB1.LandedCost.LandedCost_CostLine = LandedCost_CostLine
SAPB1.LandedCost.LandedCost_CostLineCollection = LandedCost_CostLineCollection

SAPB1.LandedCost.LandedCostDocStatusEnum = LandedCostDocStatusEnum
SAPB1.LandedCost.BoYesNoEnum = BoYesNoEnum

SAPB1.LandedCost.create = function (rawObject) {
    var instance = new SAPB1.LandedCost();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.LandedCost.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.LandedCost;
