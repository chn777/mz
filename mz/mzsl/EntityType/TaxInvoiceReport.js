var TaxInvoiceReportLine = require('ComplexType/TaxInvoiceReportLine')
var TaxInvoiceReportLineCollection = require('ComplexType/TaxInvoiceReportLineCollection')

var TaxInvoiceReportNTSApprovedEnum = require('EnumType/TaxInvoiceReportNTSApprovedEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.TaxInvoiceReport = function () {
}
SAPB1.TaxInvoiceReport.prototype = new SAPB1.EntityType();
SAPB1.TaxInvoiceReport.prototype.constructor = SAPB1.TaxInvoiceReport;
SAPB1.TaxInvoiceReport.prototype.keys.push('TaxInvoiceReportNumber');
SAPB1.TaxInvoiceReport.NTSApproval = { valueOf: function(){return 'NTSApproval';}, Type: 'TaxInvoiceReportNTSApprovedEnum', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxInvoiceReport.ETaxWebSite = { valueOf: function(){return 'ETaxWebSite';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxInvoiceReport.ETaxNo = { valueOf: function(){return 'ETaxNo';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxInvoiceReport.NTSApprovalNo = { valueOf: function(){return 'NTSApprovalNo';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxInvoiceReport.OriginalNTSApprovalNo = { valueOf: function(){return 'OriginalNTSApprovalNo';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxInvoiceReport.Remarks = { valueOf: function(){return 'Remarks';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxInvoiceReport.TaxInvoiceReportNumber = { valueOf: function(){return 'TaxInvoiceReportNumber';}, Type: 'Edm.String', Index: 6, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.TaxInvoiceReport.Date = { valueOf: function(){return 'Date';}, Type: 'Edm.DateTime', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxInvoiceReport.BusinessPlace = { valueOf: function(){return 'BusinessPlace';}, Type: 'Edm.Int32', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxInvoiceReport.BPCode = { valueOf: function(){return 'BPCode';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxInvoiceReport.BPName = { valueOf: function(){return 'BPName';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxInvoiceReport.BaseAmount = { valueOf: function(){return 'BaseAmount';}, Type: 'Edm.Double', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxInvoiceReport.TaxAmount = { valueOf: function(){return 'TaxAmount';}, Type: 'Edm.Double', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxInvoiceReport.Canceled = { valueOf: function(){return 'Canceled';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxInvoiceReport.ReportType = { valueOf: function(){return 'ReportType';}, Type: 'Edm.Int32', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxInvoiceReport.TaxInvoiceReportLineCollection = { valueOf: function(){return 'TaxInvoiceReportLineCollection';}, Type: 'TaxInvoiceReportLine', Index: 15, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.TaxInvoiceReport.prototype.NTSApproval = new String();
SAPB1.TaxInvoiceReport.prototype.ETaxWebSite = new Number();
SAPB1.TaxInvoiceReport.prototype.ETaxNo = new String();
SAPB1.TaxInvoiceReport.prototype.NTSApprovalNo = new String();
SAPB1.TaxInvoiceReport.prototype.OriginalNTSApprovalNo = new String();
SAPB1.TaxInvoiceReport.prototype.Remarks = new String();
SAPB1.TaxInvoiceReport.prototype.TaxInvoiceReportNumber = new String();
SAPB1.TaxInvoiceReport.prototype.Date = new String();
SAPB1.TaxInvoiceReport.prototype.BusinessPlace = new Number();
SAPB1.TaxInvoiceReport.prototype.BPCode = new String();
SAPB1.TaxInvoiceReport.prototype.BPName = new String();
SAPB1.TaxInvoiceReport.prototype.BaseAmount = new Number();
SAPB1.TaxInvoiceReport.prototype.TaxAmount = new Number();
SAPB1.TaxInvoiceReport.prototype.Canceled = new String();
SAPB1.TaxInvoiceReport.prototype.ReportType = new Number();
SAPB1.TaxInvoiceReport.prototype.TaxInvoiceReportLineCollection = new TaxInvoiceReportLineCollection();

SAPB1.TaxInvoiceReport.TaxInvoiceReportLine = TaxInvoiceReportLine
SAPB1.TaxInvoiceReport.TaxInvoiceReportLineCollection = TaxInvoiceReportLineCollection

SAPB1.TaxInvoiceReport.TaxInvoiceReportNTSApprovedEnum = TaxInvoiceReportNTSApprovedEnum

SAPB1.TaxInvoiceReport.create = function (rawObject) {
    var instance = new SAPB1.TaxInvoiceReport();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.TaxInvoiceReport.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.TaxInvoiceReport;
