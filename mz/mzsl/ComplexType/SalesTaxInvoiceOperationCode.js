

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.SalesTaxInvoiceOperationCode = function () {
}
SAPB1.SalesTaxInvoiceOperationCode.prototype = new SAPB1.ComplexType();
SAPB1.SalesTaxInvoiceOperationCode.prototype.constructor = SAPB1.SalesTaxInvoiceOperationCode;
SAPB1.SalesTaxInvoiceOperationCode.OpCode = { valueOf: function(){return 'OpCode';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxInvoiceOperationCode.prototype.OpCode = new Number();



SAPB1.SalesTaxInvoiceOperationCode.create = function (rawObject) {
    var instance = new SAPB1.SalesTaxInvoiceOperationCode();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.SalesTaxInvoiceOperationCode.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.SalesTaxInvoiceOperationCode;
