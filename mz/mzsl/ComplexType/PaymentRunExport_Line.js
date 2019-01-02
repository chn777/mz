

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.PaymentRunExport_Line = function () {
}
SAPB1.PaymentRunExport_Line.prototype = new SAPB1.ComplexType();
SAPB1.PaymentRunExport_Line.prototype.constructor = SAPB1.PaymentRunExport_Line;
SAPB1.PaymentRunExport_Line.RowNumber = { valueOf: function(){return 'RowNumber';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport_Line.DateOfPaymentRun = { valueOf: function(){return 'DateOfPaymentRun';}, Type: 'Edm.DateTime', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport_Line.PaymentWizardCode = { valueOf: function(){return 'PaymentWizardCode';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport_Line.VendorNumber = { valueOf: function(){return 'VendorNumber';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport_Line.CustomerNumber = { valueOf: function(){return 'CustomerNumber';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport_Line.PaymentMeans = { valueOf: function(){return 'PaymentMeans';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport_Line.PaymentDocNum = { valueOf: function(){return 'PaymentDocNum';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport_Line.FiscalYear = { valueOf: function(){return 'FiscalYear';}, Type: 'Edm.DateTime', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport_Line.VendorRefNum = { valueOf: function(){return 'VendorRefNum';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport_Line.DocumentObjectType = { valueOf: function(){return 'DocumentObjectType';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport_Line.DocumentPostingDate = { valueOf: function(){return 'DocumentPostingDate';}, Type: 'Edm.DateTime', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport_Line.DocumentTaxDate = { valueOf: function(){return 'DocumentTaxDate';}, Type: 'Edm.DateTime', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport_Line.BPDebitPayableAccount = { valueOf: function(){return 'BPDebitPayableAccount';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport_Line.DocumentCurrency = { valueOf: function(){return 'DocumentCurrency';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport_Line.DocumentRate = { valueOf: function(){return 'DocumentRate';}, Type: 'Edm.Double', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport_Line.DocumentTotal = { valueOf: function(){return 'DocumentTotal';}, Type: 'Edm.Double', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport_Line.DocumentTotalFC = { valueOf: function(){return 'DocumentTotalFC';}, Type: 'Edm.Double', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport_Line.DocumentTaxAmount = { valueOf: function(){return 'DocumentTaxAmount';}, Type: 'Edm.Double', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport_Line.DocumentTaxAmountFC = { valueOf: function(){return 'DocumentTaxAmountFC';}, Type: 'Edm.Double', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport_Line.DocumentRemarks = { valueOf: function(){return 'DocumentRemarks';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport_Line.DocumentPaymentTerms = { valueOf: function(){return 'DocumentPaymentTerms';}, Type: 'Edm.Int32', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport_Line.PaymentDocReference = { valueOf: function(){return 'PaymentDocReference';}, Type: 'Edm.String', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport_Line.DocumentLocalCurrency = { valueOf: function(){return 'DocumentLocalCurrency';}, Type: 'Edm.String', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport_Line.PaymentTermsPeriod = { valueOf: function(){return 'PaymentTermsPeriod';}, Type: 'Edm.Int32', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport_Line.DocumentObjectTypeEx = { valueOf: function(){return 'DocumentObjectTypeEx';}, Type: 'Edm.String', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport_Line.DocumentNumber = { valueOf: function(){return 'DocumentNumber';}, Type: 'Edm.Int32', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport_Line.PaymentNumber = { valueOf: function(){return 'PaymentNumber';}, Type: 'Edm.Int32', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport_Line.PaymentOrderNum = { valueOf: function(){return 'PaymentOrderNum';}, Type: 'Edm.Int32', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport_Line.FreeText1 = { valueOf: function(){return 'FreeText1';}, Type: 'Edm.String', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport_Line.FreeText2 = { valueOf: function(){return 'FreeText2';}, Type: 'Edm.String', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport_Line.FreeText3 = { valueOf: function(){return 'FreeText3';}, Type: 'Edm.String', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentRunExport_Line.prototype.RowNumber = new Number();
SAPB1.PaymentRunExport_Line.prototype.DateOfPaymentRun = new String();
SAPB1.PaymentRunExport_Line.prototype.PaymentWizardCode = new Number();
SAPB1.PaymentRunExport_Line.prototype.VendorNumber = new String();
SAPB1.PaymentRunExport_Line.prototype.CustomerNumber = new String();
SAPB1.PaymentRunExport_Line.prototype.PaymentMeans = new String();
SAPB1.PaymentRunExport_Line.prototype.PaymentDocNum = new Number();
SAPB1.PaymentRunExport_Line.prototype.FiscalYear = new String();
SAPB1.PaymentRunExport_Line.prototype.VendorRefNum = new String();
SAPB1.PaymentRunExport_Line.prototype.DocumentObjectType = new String();
SAPB1.PaymentRunExport_Line.prototype.DocumentPostingDate = new String();
SAPB1.PaymentRunExport_Line.prototype.DocumentTaxDate = new String();
SAPB1.PaymentRunExport_Line.prototype.BPDebitPayableAccount = new String();
SAPB1.PaymentRunExport_Line.prototype.DocumentCurrency = new String();
SAPB1.PaymentRunExport_Line.prototype.DocumentRate = new Number();
SAPB1.PaymentRunExport_Line.prototype.DocumentTotal = new Number();
SAPB1.PaymentRunExport_Line.prototype.DocumentTotalFC = new Number();
SAPB1.PaymentRunExport_Line.prototype.DocumentTaxAmount = new Number();
SAPB1.PaymentRunExport_Line.prototype.DocumentTaxAmountFC = new Number();
SAPB1.PaymentRunExport_Line.prototype.DocumentRemarks = new String();
SAPB1.PaymentRunExport_Line.prototype.DocumentPaymentTerms = new Number();
SAPB1.PaymentRunExport_Line.prototype.PaymentDocReference = new String();
SAPB1.PaymentRunExport_Line.prototype.DocumentLocalCurrency = new String();
SAPB1.PaymentRunExport_Line.prototype.PaymentTermsPeriod = new Number();
SAPB1.PaymentRunExport_Line.prototype.DocumentObjectTypeEx = new String();
SAPB1.PaymentRunExport_Line.prototype.DocumentNumber = new Number();
SAPB1.PaymentRunExport_Line.prototype.PaymentNumber = new Number();
SAPB1.PaymentRunExport_Line.prototype.PaymentOrderNum = new Number();
SAPB1.PaymentRunExport_Line.prototype.FreeText1 = new String();
SAPB1.PaymentRunExport_Line.prototype.FreeText2 = new String();
SAPB1.PaymentRunExport_Line.prototype.FreeText3 = new String();



SAPB1.PaymentRunExport_Line.create = function (rawObject) {
    var instance = new SAPB1.PaymentRunExport_Line();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.PaymentRunExport_Line.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.PaymentRunExport_Line;
