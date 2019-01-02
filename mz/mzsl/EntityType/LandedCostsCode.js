
var BoAllocationByEnum = require('EnumType/BoAllocationByEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.LandedCostsCode = function () {
}
SAPB1.LandedCostsCode.prototype = new SAPB1.EntityType();
SAPB1.LandedCostsCode.prototype.constructor = SAPB1.LandedCostsCode;
SAPB1.LandedCostsCode.prototype.keys.push('Code');
SAPB1.LandedCostsCode.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.LandedCostsCode.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCostsCode.AllocationBy = { valueOf: function(){return 'AllocationBy';}, Type: 'BoAllocationByEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCostsCode.LandedCostsAllocationAccount = { valueOf: function(){return 'LandedCostsAllocationAccount';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LandedCostsCode.prototype.Code = new String();
SAPB1.LandedCostsCode.prototype.Name = new String();
SAPB1.LandedCostsCode.prototype.AllocationBy = new String();
SAPB1.LandedCostsCode.prototype.LandedCostsAllocationAccount = new String();


SAPB1.LandedCostsCode.BoAllocationByEnum = BoAllocationByEnum

SAPB1.LandedCostsCode.create = function (rawObject) {
    var instance = new SAPB1.LandedCostsCode();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.LandedCostsCode.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.LandedCostsCode;
