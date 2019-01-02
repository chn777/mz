
var PaymentInvoiceTypeEnum = require('EnumType/PaymentInvoiceTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.PaymentInvoiceEntry = function () {
}
SAPB1.PaymentInvoiceEntry.prototype = new SAPB1.ComplexType();
SAPB1.PaymentInvoiceEntry.prototype.constructor = SAPB1.PaymentInvoiceEntry;
SAPB1.PaymentInvoiceEntry.DocType = { valueOf: function(){return 'DocType';}, Type: 'PaymentInvoiceTypeEnum', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentInvoiceEntry.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentInvoiceEntry.InstallmentId = { valueOf: function(){return 'InstallmentId';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PaymentInvoiceEntry.prototype.DocType = new String();
SAPB1.PaymentInvoiceEntry.prototype.DocEntry = new Number();
SAPB1.PaymentInvoiceEntry.prototype.InstallmentId = new Number();


SAPB1.PaymentInvoiceEntry.PaymentInvoiceTypeEnum = PaymentInvoiceTypeEnum

SAPB1.PaymentInvoiceEntry.create = function (rawObject) {
    var instance = new SAPB1.PaymentInvoiceEntry();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.PaymentInvoiceEntry.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.PaymentInvoiceEntry;
