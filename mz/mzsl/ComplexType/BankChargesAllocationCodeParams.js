

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BankChargesAllocationCodeParams = function () {
}
SAPB1.BankChargesAllocationCodeParams.prototype = new SAPB1.ComplexType();
SAPB1.BankChargesAllocationCodeParams.prototype.constructor = SAPB1.BankChargesAllocationCodeParams;
SAPB1.BankChargesAllocationCodeParams.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankChargesAllocationCodeParams.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankChargesAllocationCodeParams.prototype.Code = new String();
SAPB1.BankChargesAllocationCodeParams.prototype.Description = new String();



SAPB1.BankChargesAllocationCodeParams.create = function (rawObject) {
    var instance = new SAPB1.BankChargesAllocationCodeParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BankChargesAllocationCodeParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BankChargesAllocationCodeParams;
