

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.VendorPaymentAgingQueryParameter = function () {
}
SAPB1.VendorPaymentAgingQueryParameter.prototype = new SAPB1.EntityType();
SAPB1.VendorPaymentAgingQueryParameter.prototype.constructor = SAPB1.VendorPaymentAgingQueryParameter;
SAPB1.VendorPaymentAgingQueryParameter.prototype.keys.push('P_AgingDate','P_AgingBucketSize');
SAPB1.VendorPaymentAgingQueryParameter.P_AgingDate = { valueOf: function(){return 'P_AgingDate';}, Type: 'Edm.Date', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQueryParameter.P_AgingBucketSize = { valueOf: function(){return 'P_AgingBucketSize';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQueryParameter.prototype.P_AgingDate = new String();
SAPB1.VendorPaymentAgingQueryParameter.prototype.P_AgingBucketSize = new Number();



SAPB1.VendorPaymentAgingQueryParameter.create = function (rawObject) {
    var instance = new SAPB1.VendorPaymentAgingQueryParameter();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.VendorPaymentAgingQueryParameter.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.VendorPaymentAgingQueryParameter;
