

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.PurchaseTaxInvoiceLine = function () {
}
SAPB1.PurchaseTaxInvoiceLine.prototype = new SAPB1.ComplexType();
SAPB1.PurchaseTaxInvoiceLine.prototype.constructor = SAPB1.PurchaseTaxInvoiceLine;
SAPB1.PurchaseTaxInvoiceLine.RefEntry1 = { valueOf: function(){return 'RefEntry1';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseTaxInvoiceLine.RefEntry2 = { valueOf: function(){return 'RefEntry2';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PurchaseTaxInvoiceLine.prototype.RefEntry1 = new Number();
SAPB1.PurchaseTaxInvoiceLine.prototype.RefEntry2 = new Number();



SAPB1.PurchaseTaxInvoiceLine.create = function (rawObject) {
    var instance = new SAPB1.PurchaseTaxInvoiceLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.PurchaseTaxInvoiceLine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.PurchaseTaxInvoiceLine;
