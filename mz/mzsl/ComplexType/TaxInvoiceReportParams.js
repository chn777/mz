

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.TaxInvoiceReportParams = function () {
}
SAPB1.TaxInvoiceReportParams.prototype = new SAPB1.ComplexType();
SAPB1.TaxInvoiceReportParams.prototype.constructor = SAPB1.TaxInvoiceReportParams;
SAPB1.TaxInvoiceReportParams.TaxInvoiceReportNumber = { valueOf: function(){return 'TaxInvoiceReportNumber';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxInvoiceReportParams.prototype.TaxInvoiceReportNumber = new String();



SAPB1.TaxInvoiceReportParams.create = function (rawObject) {
    var instance = new SAPB1.TaxInvoiceReportParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.TaxInvoiceReportParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.TaxInvoiceReportParams;
