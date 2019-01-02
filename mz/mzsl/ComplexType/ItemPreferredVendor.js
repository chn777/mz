

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ItemPreferredVendor = function () {
}
SAPB1.ItemPreferredVendor.prototype = new SAPB1.ComplexType();
SAPB1.ItemPreferredVendor.prototype.constructor = SAPB1.ItemPreferredVendor;
SAPB1.ItemPreferredVendor.BPCode = { valueOf: function(){return 'BPCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemPreferredVendor.prototype.BPCode = new String();



SAPB1.ItemPreferredVendor.create = function (rawObject) {
    var instance = new SAPB1.ItemPreferredVendor();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ItemPreferredVendor.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ItemPreferredVendor;
