

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.TaxReportBusinessPartner = function () {
}
SAPB1.TaxReportBusinessPartner.prototype = new SAPB1.ComplexType();
SAPB1.TaxReportBusinessPartner.prototype.constructor = SAPB1.TaxReportBusinessPartner;
SAPB1.TaxReportBusinessPartner.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxReportBusinessPartner.prototype.Code = new String();



SAPB1.TaxReportBusinessPartner.create = function (rawObject) {
    var instance = new SAPB1.TaxReportBusinessPartner();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.TaxReportBusinessPartner.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.TaxReportBusinessPartner;
