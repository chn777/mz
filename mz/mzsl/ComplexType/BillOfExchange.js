

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BillOfExchange = function () {
}
SAPB1.BillOfExchange.prototype = new SAPB1.ComplexType();
SAPB1.BillOfExchange.prototype.constructor = SAPB1.BillOfExchange;
SAPB1.BillOfExchange.BillOfExchangeNo = { valueOf: function(){return 'BillOfExchangeNo';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchange.BillOfExchangeDueDate = { valueOf: function(){return 'BillOfExchangeDueDate';}, Type: 'Edm.DateTime', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchange.Details = { valueOf: function(){return 'Details';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchange.ReferenceNo = { valueOf: function(){return 'ReferenceNo';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchange.Remarks = { valueOf: function(){return 'Remarks';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchange.PaymentMethodCode = { valueOf: function(){return 'PaymentMethodCode';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchange.BPBankCode = { valueOf: function(){return 'BPBankCode';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchange.BPBankAct = { valueOf: function(){return 'BPBankAct';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchange.BPBankCountry = { valueOf: function(){return 'BPBankCountry';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchange.ControlKey = { valueOf: function(){return 'ControlKey';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchange.PaymentEngineStatus1 = { valueOf: function(){return 'PaymentEngineStatus1';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchange.PaymentEngineStatus2 = { valueOf: function(){return 'PaymentEngineStatus2';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchange.PaymentEngineStatus3 = { valueOf: function(){return 'PaymentEngineStatus3';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchange.StampTaxCode = { valueOf: function(){return 'StampTaxCode';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchange.StampTaxAmount = { valueOf: function(){return 'StampTaxAmount';}, Type: 'Edm.Double', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchange.FolioNumber = { valueOf: function(){return 'FolioNumber';}, Type: 'Edm.Int32', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchange.FolioPrefixString = { valueOf: function(){return 'FolioPrefixString';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchange.InterestAmount = { valueOf: function(){return 'InterestAmount';}, Type: 'Edm.Double', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchange.DiscountAmount = { valueOf: function(){return 'DiscountAmount';}, Type: 'Edm.Double', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchange.FineAmount = { valueOf: function(){return 'FineAmount';}, Type: 'Edm.Double', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchange.InterestDate = { valueOf: function(){return 'InterestDate';}, Type: 'Edm.DateTime', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchange.DiscountDate = { valueOf: function(){return 'DiscountDate';}, Type: 'Edm.DateTime', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchange.FineDate = { valueOf: function(){return 'FineDate';}, Type: 'Edm.DateTime', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchange.IOFAmount = { valueOf: function(){return 'IOFAmount';}, Type: 'Edm.Double', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchange.ServiceFeeAmount = { valueOf: function(){return 'ServiceFeeAmount';}, Type: 'Edm.Double', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchange.OtherExpensesAmount = { valueOf: function(){return 'OtherExpensesAmount';}, Type: 'Edm.Double', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchange.OtherIncomesAmount = { valueOf: function(){return 'OtherIncomesAmount';}, Type: 'Edm.Double', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BillOfExchange.prototype.BillOfExchangeNo = new Number();
SAPB1.BillOfExchange.prototype.BillOfExchangeDueDate = new String();
SAPB1.BillOfExchange.prototype.Details = new String();
SAPB1.BillOfExchange.prototype.ReferenceNo = new String();
SAPB1.BillOfExchange.prototype.Remarks = new String();
SAPB1.BillOfExchange.prototype.PaymentMethodCode = new String();
SAPB1.BillOfExchange.prototype.BPBankCode = new String();
SAPB1.BillOfExchange.prototype.BPBankAct = new String();
SAPB1.BillOfExchange.prototype.BPBankCountry = new String();
SAPB1.BillOfExchange.prototype.ControlKey = new String();
SAPB1.BillOfExchange.prototype.PaymentEngineStatus1 = new String();
SAPB1.BillOfExchange.prototype.PaymentEngineStatus2 = new String();
SAPB1.BillOfExchange.prototype.PaymentEngineStatus3 = new String();
SAPB1.BillOfExchange.prototype.StampTaxCode = new String();
SAPB1.BillOfExchange.prototype.StampTaxAmount = new Number();
SAPB1.BillOfExchange.prototype.FolioNumber = new Number();
SAPB1.BillOfExchange.prototype.FolioPrefixString = new String();
SAPB1.BillOfExchange.prototype.InterestAmount = new Number();
SAPB1.BillOfExchange.prototype.DiscountAmount = new Number();
SAPB1.BillOfExchange.prototype.FineAmount = new Number();
SAPB1.BillOfExchange.prototype.InterestDate = new String();
SAPB1.BillOfExchange.prototype.DiscountDate = new String();
SAPB1.BillOfExchange.prototype.FineDate = new String();
SAPB1.BillOfExchange.prototype.IOFAmount = new Number();
SAPB1.BillOfExchange.prototype.ServiceFeeAmount = new Number();
SAPB1.BillOfExchange.prototype.OtherExpensesAmount = new Number();
SAPB1.BillOfExchange.prototype.OtherIncomesAmount = new Number();



SAPB1.BillOfExchange.create = function (rawObject) {
    var instance = new SAPB1.BillOfExchange();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BillOfExchange.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BillOfExchange;
