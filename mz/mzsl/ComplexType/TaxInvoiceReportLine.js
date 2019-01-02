
var TaxInvoiceReportLineTypeEnum = require('EnumType/TaxInvoiceReportLineTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.TaxInvoiceReportLine = function () {
}
SAPB1.TaxInvoiceReportLine.prototype = new SAPB1.ComplexType();
SAPB1.TaxInvoiceReportLine.prototype.constructor = SAPB1.TaxInvoiceReportLine;
SAPB1.TaxInvoiceReportLine.DocumentType = { valueOf: function(){return 'DocumentType';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxInvoiceReportLine.DocumentEntry = { valueOf: function(){return 'DocumentEntry';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxInvoiceReportLine.LineType = { valueOf: function(){return 'LineType';}, Type: 'TaxInvoiceReportLineTypeEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxInvoiceReportLine.BaseAmount = { valueOf: function(){return 'BaseAmount';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxInvoiceReportLine.TaxAmount = { valueOf: function(){return 'TaxAmount';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxInvoiceReportLine.ItemQuantity = { valueOf: function(){return 'ItemQuantity';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxInvoiceReportLine.ItemNo = { valueOf: function(){return 'ItemNo';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxInvoiceReportLine.ItemDescription = { valueOf: function(){return 'ItemDescription';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxInvoiceReportLine.TaxCode = { valueOf: function(){return 'TaxCode';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxInvoiceReportLine.DocumentDate = { valueOf: function(){return 'DocumentDate';}, Type: 'Edm.DateTime', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxInvoiceReportLine.ItemPrice = { valueOf: function(){return 'ItemPrice';}, Type: 'Edm.Double', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxInvoiceReportLine.LineNumber = { valueOf: function(){return 'LineNumber';}, Type: 'Edm.Int32', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxInvoiceReportLine.Currency = { valueOf: function(){return 'Currency';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxInvoiceReportLine.BusinessPlace = { valueOf: function(){return 'BusinessPlace';}, Type: 'Edm.Int32', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxInvoiceReportLine.TaxInvoiceReportNumber = { valueOf: function(){return 'TaxInvoiceReportNumber';}, Type: 'Edm.String', Index: 14, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.TaxInvoiceReportLine.BPCode = { valueOf: function(){return 'BPCode';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxInvoiceReportLine.BPName = { valueOf: function(){return 'BPName';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxInvoiceReportLine.Legacy = { valueOf: function(){return 'Legacy';}, Type: 'Edm.String', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxInvoiceReportLine.prototype.DocumentType = new Number();
SAPB1.TaxInvoiceReportLine.prototype.DocumentEntry = new Number();
SAPB1.TaxInvoiceReportLine.prototype.LineType = new String();
SAPB1.TaxInvoiceReportLine.prototype.BaseAmount = new Number();
SAPB1.TaxInvoiceReportLine.prototype.TaxAmount = new Number();
SAPB1.TaxInvoiceReportLine.prototype.ItemQuantity = new Number();
SAPB1.TaxInvoiceReportLine.prototype.ItemNo = new String();
SAPB1.TaxInvoiceReportLine.prototype.ItemDescription = new String();
SAPB1.TaxInvoiceReportLine.prototype.TaxCode = new String();
SAPB1.TaxInvoiceReportLine.prototype.DocumentDate = new String();
SAPB1.TaxInvoiceReportLine.prototype.ItemPrice = new Number();
SAPB1.TaxInvoiceReportLine.prototype.LineNumber = new Number();
SAPB1.TaxInvoiceReportLine.prototype.Currency = new String();
SAPB1.TaxInvoiceReportLine.prototype.BusinessPlace = new Number();
SAPB1.TaxInvoiceReportLine.prototype.TaxInvoiceReportNumber = new String();
SAPB1.TaxInvoiceReportLine.prototype.BPCode = new String();
SAPB1.TaxInvoiceReportLine.prototype.BPName = new String();
SAPB1.TaxInvoiceReportLine.prototype.Legacy = new String();


SAPB1.TaxInvoiceReportLine.TaxInvoiceReportLineTypeEnum = TaxInvoiceReportLineTypeEnum

SAPB1.TaxInvoiceReportLine.create = function (rawObject) {
    var instance = new SAPB1.TaxInvoiceReportLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.TaxInvoiceReportLine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.TaxInvoiceReportLine;
