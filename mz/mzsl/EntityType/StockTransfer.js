var StockTransfer_ApprovalRequest = require('ComplexType/StockTransfer_ApprovalRequest')
var StockTransfer_ApprovalRequestCollection = require('ComplexType/StockTransfer_ApprovalRequestCollection')
var StockTransferLine = require('ComplexType/StockTransferLine')
var StockTransferLineCollection = require('ComplexType/StockTransferLineCollection')
var StockTransferTaxExtension = require('ComplexType/StockTransferTaxExtension')

var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var StockTransferAuthorizationStatusEnum = require('EnumType/StockTransferAuthorizationStatusEnum')
var ElecCommStatusEnum = require('EnumType/ElecCommStatusEnum')
var FolioLetterEnum = require('EnumType/FolioLetterEnum')
var BoStatus = require('EnumType/BoStatus')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.StockTransfer = function () {
}
SAPB1.StockTransfer.prototype = new SAPB1.EntityType();
SAPB1.StockTransfer.prototype.constructor = SAPB1.StockTransfer;
SAPB1.StockTransfer.prototype.keys.push('DocEntry');
SAPB1.StockTransfer.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.Series = { valueOf: function(){return 'Series';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.Printed = { valueOf: function(){return 'Printed';}, Type: 'BoYesNoEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.DocDate = { valueOf: function(){return 'DocDate';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.DueDate = { valueOf: function(){return 'DueDate';}, Type: 'Edm.DateTime', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.CardCode = { valueOf: function(){return 'CardCode';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.CardName = { valueOf: function(){return 'CardName';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.Address = { valueOf: function(){return 'Address';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.Reference1 = { valueOf: function(){return 'Reference1';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.Reference2 = { valueOf: function(){return 'Reference2';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.Comments = { valueOf: function(){return 'Comments';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.JournalMemo = { valueOf: function(){return 'JournalMemo';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.PriceList = { valueOf: function(){return 'PriceList';}, Type: 'Edm.Int32', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.SalesPersonCode = { valueOf: function(){return 'SalesPersonCode';}, Type: 'Edm.Int32', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.FromWarehouse = { valueOf: function(){return 'FromWarehouse';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.ToWarehouse = { valueOf: function(){return 'ToWarehouse';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.CreationDate = { valueOf: function(){return 'CreationDate';}, Type: 'Edm.DateTime', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.UpdateDate = { valueOf: function(){return 'UpdateDate';}, Type: 'Edm.DateTime', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.FinancialPeriod = { valueOf: function(){return 'FinancialPeriod';}, Type: 'Edm.Int32', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.TransNum = { valueOf: function(){return 'TransNum';}, Type: 'Edm.Int32', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.DocNum = { valueOf: function(){return 'DocNum';}, Type: 'Edm.Int32', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.TaxDate = { valueOf: function(){return 'TaxDate';}, Type: 'Edm.DateTime', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.ContactPerson = { valueOf: function(){return 'ContactPerson';}, Type: 'Edm.Int32', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.FolioPrefixString = { valueOf: function(){return 'FolioPrefixString';}, Type: 'Edm.String', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.FolioNumber = { valueOf: function(){return 'FolioNumber';}, Type: 'Edm.Int32', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.DocObjectCode = { valueOf: function(){return 'DocObjectCode';}, Type: 'Edm.String', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.AuthorizationStatus = { valueOf: function(){return 'AuthorizationStatus';}, Type: 'StockTransferAuthorizationStatusEnum', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.BPLID = { valueOf: function(){return 'BPLID';}, Type: 'Edm.Int32', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.BPLName = { valueOf: function(){return 'BPLName';}, Type: 'Edm.String', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.VATRegNum = { valueOf: function(){return 'VATRegNum';}, Type: 'Edm.String', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.AuthorizationCode = { valueOf: function(){return 'AuthorizationCode';}, Type: 'Edm.String', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.StartDeliveryDate = { valueOf: function(){return 'StartDeliveryDate';}, Type: 'Edm.DateTime', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.StartDeliveryTime = { valueOf: function(){return 'StartDeliveryTime';}, Type: 'Edm.Time', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.EndDeliveryDate = { valueOf: function(){return 'EndDeliveryDate';}, Type: 'Edm.DateTime', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.EndDeliveryTime = { valueOf: function(){return 'EndDeliveryTime';}, Type: 'Edm.Time', Index: 34, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.VehiclePlate = { valueOf: function(){return 'VehiclePlate';}, Type: 'Edm.String', Index: 35, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.ATDocumentType = { valueOf: function(){return 'ATDocumentType';}, Type: 'Edm.String', Index: 36, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.EDocExportFormat = { valueOf: function(){return 'EDocExportFormat';}, Type: 'Edm.Int32', Index: 37, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.ElecCommStatus = { valueOf: function(){return 'ElecCommStatus';}, Type: 'ElecCommStatusEnum', Index: 38, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.ElecCommMessage = { valueOf: function(){return 'ElecCommMessage';}, Type: 'Edm.String', Index: 39, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.PointOfIssueCode = { valueOf: function(){return 'PointOfIssueCode';}, Type: 'Edm.String', Index: 40, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.Letter = { valueOf: function(){return 'Letter';}, Type: 'FolioLetterEnum', Index: 41, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.FolioNumberFrom = { valueOf: function(){return 'FolioNumberFrom';}, Type: 'Edm.Int32', Index: 42, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.FolioNumberTo = { valueOf: function(){return 'FolioNumberTo';}, Type: 'Edm.Int32', Index: 43, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.AttachmentEntry = { valueOf: function(){return 'AttachmentEntry';}, Type: 'Edm.Int32', Index: 44, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.DocumentStatus = { valueOf: function(){return 'DocumentStatus';}, Type: 'BoStatus', Index: 45, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.ShipToCode = { valueOf: function(){return 'ShipToCode';}, Type: 'Edm.String', Index: 46, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.U_BusiType = { valueOf: function(){return 'U_BusiType';}, Type: 'Edm.String', Index: 47, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.U_OcrCode = { valueOf: function(){return 'U_OcrCode';}, Type: 'Edm.String', Index: 48, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.StockTransfer.StockTransfer_ApprovalRequests = { valueOf: function(){return 'StockTransfer_ApprovalRequests';}, Type: 'StockTransfer_ApprovalRequest', Index: 49, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.StockTransfer.StockTransferLines = { valueOf: function(){return 'StockTransferLines';}, Type: 'StockTransferLine', Index: 50, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.StockTransfer.StockTransferTaxExtension = { valueOf: function(){return 'StockTransferTaxExtension';}, Type: 'StockTransferTaxExtension', Index: 51, Nullable: true, IsArray: false, IsComplex: true };
SAPB1.StockTransfer.prototype.DocEntry = new Number();
SAPB1.StockTransfer.prototype.Series = new Number();
SAPB1.StockTransfer.prototype.Printed = new String();
SAPB1.StockTransfer.prototype.DocDate = new String();
SAPB1.StockTransfer.prototype.DueDate = new String();
SAPB1.StockTransfer.prototype.CardCode = new String();
SAPB1.StockTransfer.prototype.CardName = new String();
SAPB1.StockTransfer.prototype.Address = new String();
SAPB1.StockTransfer.prototype.Reference1 = new String();
SAPB1.StockTransfer.prototype.Reference2 = new String();
SAPB1.StockTransfer.prototype.Comments = new String();
SAPB1.StockTransfer.prototype.JournalMemo = new String();
SAPB1.StockTransfer.prototype.PriceList = new Number();
SAPB1.StockTransfer.prototype.SalesPersonCode = new Number();
SAPB1.StockTransfer.prototype.FromWarehouse = new String();
SAPB1.StockTransfer.prototype.ToWarehouse = new String();
SAPB1.StockTransfer.prototype.CreationDate = new String();
SAPB1.StockTransfer.prototype.UpdateDate = new String();
SAPB1.StockTransfer.prototype.FinancialPeriod = new Number();
SAPB1.StockTransfer.prototype.TransNum = new Number();
SAPB1.StockTransfer.prototype.DocNum = new Number();
SAPB1.StockTransfer.prototype.TaxDate = new String();
SAPB1.StockTransfer.prototype.ContactPerson = new Number();
SAPB1.StockTransfer.prototype.FolioPrefixString = new String();
SAPB1.StockTransfer.prototype.FolioNumber = new Number();
SAPB1.StockTransfer.prototype.DocObjectCode = new String();
SAPB1.StockTransfer.prototype.AuthorizationStatus = new String();
SAPB1.StockTransfer.prototype.BPLID = new Number();
SAPB1.StockTransfer.prototype.BPLName = new String();
SAPB1.StockTransfer.prototype.VATRegNum = new String();
SAPB1.StockTransfer.prototype.AuthorizationCode = new String();
SAPB1.StockTransfer.prototype.StartDeliveryDate = new String();
SAPB1.StockTransfer.prototype.StartDeliveryTime = new String();
SAPB1.StockTransfer.prototype.EndDeliveryDate = new String();
SAPB1.StockTransfer.prototype.EndDeliveryTime = new String();
SAPB1.StockTransfer.prototype.VehiclePlate = new String();
SAPB1.StockTransfer.prototype.ATDocumentType = new String();
SAPB1.StockTransfer.prototype.EDocExportFormat = new Number();
SAPB1.StockTransfer.prototype.ElecCommStatus = new String();
SAPB1.StockTransfer.prototype.ElecCommMessage = new String();
SAPB1.StockTransfer.prototype.PointOfIssueCode = new String();
SAPB1.StockTransfer.prototype.Letter = new String();
SAPB1.StockTransfer.prototype.FolioNumberFrom = new Number();
SAPB1.StockTransfer.prototype.FolioNumberTo = new Number();
SAPB1.StockTransfer.prototype.AttachmentEntry = new Number();
SAPB1.StockTransfer.prototype.DocumentStatus = new String();
SAPB1.StockTransfer.prototype.ShipToCode = new String();
SAPB1.StockTransfer.prototype.U_BusiType = new String();
SAPB1.StockTransfer.prototype.U_OcrCode = new String();
SAPB1.StockTransfer.prototype.StockTransfer_ApprovalRequests = new StockTransfer_ApprovalRequestCollection();
SAPB1.StockTransfer.prototype.StockTransferLines = new StockTransferLineCollection();
SAPB1.StockTransfer.prototype.StockTransferTaxExtension = new StockTransferTaxExtension();

SAPB1.StockTransfer.StockTransfer_ApprovalRequest = StockTransfer_ApprovalRequest
SAPB1.StockTransfer.StockTransfer_ApprovalRequestCollection = StockTransfer_ApprovalRequestCollection
SAPB1.StockTransfer.StockTransferLine = StockTransferLine
SAPB1.StockTransfer.StockTransferLineCollection = StockTransferLineCollection
SAPB1.StockTransfer.StockTransferTaxExtension = StockTransferTaxExtension

SAPB1.StockTransfer.BoYesNoEnum = BoYesNoEnum
SAPB1.StockTransfer.StockTransferAuthorizationStatusEnum = StockTransferAuthorizationStatusEnum
SAPB1.StockTransfer.ElecCommStatusEnum = ElecCommStatusEnum
SAPB1.StockTransfer.FolioLetterEnum = FolioLetterEnum
SAPB1.StockTransfer.BoStatus = BoStatus

SAPB1.StockTransfer.create = function (rawObject) {
    var instance = new SAPB1.StockTransfer();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.StockTransfer.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.StockTransfer;
