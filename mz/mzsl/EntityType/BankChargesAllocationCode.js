

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BankChargesAllocationCode = function () {
}
SAPB1.BankChargesAllocationCode.prototype = new SAPB1.EntityType();
SAPB1.BankChargesAllocationCode.prototype.constructor = SAPB1.BankChargesAllocationCode;
SAPB1.BankChargesAllocationCode.prototype.keys.push('Code');
SAPB1.BankChargesAllocationCode.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BankChargesAllocationCode.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BankChargesAllocationCode.prototype.Code = new String();
SAPB1.BankChargesAllocationCode.prototype.Description = new String();



SAPB1.BankChargesAllocationCode.create = function (rawObject) {
    var instance = new SAPB1.BankChargesAllocationCode();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BankChargesAllocationCode.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BankChargesAllocationCode;
