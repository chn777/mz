

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.SalesTaxInvoiceLine = function () {
}
SAPB1.SalesTaxInvoiceLine.prototype = new SAPB1.ComplexType();
SAPB1.SalesTaxInvoiceLine.prototype.constructor = SAPB1.SalesTaxInvoiceLine;
SAPB1.SalesTaxInvoiceLine.RefEntry1 = { valueOf: function(){return 'RefEntry1';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxInvoiceLine.RefEntry2 = { valueOf: function(){return 'RefEntry2';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SalesTaxInvoiceLine.prototype.RefEntry1 = new Number();
SAPB1.SalesTaxInvoiceLine.prototype.RefEntry2 = new Number();



SAPB1.SalesTaxInvoiceLine.create = function (rawObject) {
    var instance = new SAPB1.SalesTaxInvoiceLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.SalesTaxInvoiceLine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.SalesTaxInvoiceLine;
