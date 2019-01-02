
var BlanketAgreementDocTypeEnum = require('EnumType/BlanketAgreementDocTypeEnum')
var BoStatus = require('EnumType/BoStatus')
var BADocumentStatus = require('EnumType/BADocumentStatus')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BlanketAgreementsDocument = function () {
}
SAPB1.BlanketAgreementsDocument.prototype = new SAPB1.ComplexType();
SAPB1.BlanketAgreementsDocument.prototype.constructor = SAPB1.BlanketAgreementsDocument;
SAPB1.BlanketAgreementsDocument.AgreementRowNumber = { valueOf: function(){return 'AgreementRowNumber';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreementsDocument.DocumentType = { valueOf: function(){return 'DocumentType';}, Type: 'BlanketAgreementDocTypeEnum', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreementsDocument.DocumentNo = { valueOf: function(){return 'DocumentNo';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreementsDocument.DocumentRowNumber = { valueOf: function(){return 'DocumentRowNumber';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreementsDocument.DocumentDate = { valueOf: function(){return 'DocumentDate';}, Type: 'Edm.DateTime', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreementsDocument.ItemNo = { valueOf: function(){return 'ItemNo';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreementsDocument.ItemDescription = { valueOf: function(){return 'ItemDescription';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreementsDocument.UnitPrice = { valueOf: function(){return 'UnitPrice';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreementsDocument.Quantity = { valueOf: function(){return 'Quantity';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreementsDocument.Discount = { valueOf: function(){return 'Discount';}, Type: 'Edm.Double', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreementsDocument.UoM = { valueOf: function(){return 'UoM';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreementsDocument.RowStatus = { valueOf: function(){return 'RowStatus';}, Type: 'BoStatus', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreementsDocument.UoMCode = { valueOf: function(){return 'UoMCode';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreementsDocument.UnitsOfMeasurement = { valueOf: function(){return 'UnitsOfMeasurement';}, Type: 'Edm.Double', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreementsDocument.DocStatus = { valueOf: function(){return 'DocStatus';}, Type: 'BADocumentStatus', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlanketAgreementsDocument.prototype.AgreementRowNumber = new Number();
SAPB1.BlanketAgreementsDocument.prototype.DocumentType = new String();
SAPB1.BlanketAgreementsDocument.prototype.DocumentNo = new Number();
SAPB1.BlanketAgreementsDocument.prototype.DocumentRowNumber = new Number();
SAPB1.BlanketAgreementsDocument.prototype.DocumentDate = new String();
SAPB1.BlanketAgreementsDocument.prototype.ItemNo = new String();
SAPB1.BlanketAgreementsDocument.prototype.ItemDescription = new String();
SAPB1.BlanketAgreementsDocument.prototype.UnitPrice = new Number();
SAPB1.BlanketAgreementsDocument.prototype.Quantity = new Number();
SAPB1.BlanketAgreementsDocument.prototype.Discount = new Number();
SAPB1.BlanketAgreementsDocument.prototype.UoM = new String();
SAPB1.BlanketAgreementsDocument.prototype.RowStatus = new String();
SAPB1.BlanketAgreementsDocument.prototype.UoMCode = new String();
SAPB1.BlanketAgreementsDocument.prototype.UnitsOfMeasurement = new Number();
SAPB1.BlanketAgreementsDocument.prototype.DocStatus = new String();


SAPB1.BlanketAgreementsDocument.BlanketAgreementDocTypeEnum = BlanketAgreementDocTypeEnum
SAPB1.BlanketAgreementsDocument.BoStatus = BoStatus
SAPB1.BlanketAgreementsDocument.BADocumentStatus = BADocumentStatus

SAPB1.BlanketAgreementsDocument.create = function (rawObject) {
    var instance = new SAPB1.BlanketAgreementsDocument();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BlanketAgreementsDocument.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BlanketAgreementsDocument;
