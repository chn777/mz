
var ResourceCapacityTypeEnum = require('EnumType/ResourceCapacityTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ResourceCapacityWithFilterParams = function () {
}
SAPB1.ResourceCapacityWithFilterParams.prototype = new SAPB1.ComplexType();
SAPB1.ResourceCapacityWithFilterParams.prototype.constructor = SAPB1.ResourceCapacityWithFilterParams;
SAPB1.ResourceCapacityWithFilterParams.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacityWithFilterParams.Warehouse = { valueOf: function(){return 'Warehouse';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacityWithFilterParams.Date = { valueOf: function(){return 'Date';}, Type: 'Edm.DateTime', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacityWithFilterParams.Type = { valueOf: function(){return 'Type';}, Type: 'ResourceCapacityTypeEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ResourceCapacityWithFilterParams.prototype.Code = new String();
SAPB1.ResourceCapacityWithFilterParams.prototype.Warehouse = new String();
SAPB1.ResourceCapacityWithFilterParams.prototype.Date = new String();
SAPB1.ResourceCapacityWithFilterParams.prototype.Type = new String();


SAPB1.ResourceCapacityWithFilterParams.ResourceCapacityTypeEnum = ResourceCapacityTypeEnum

SAPB1.ResourceCapacityWithFilterParams.create = function (rawObject) {
    var instance = new SAPB1.ResourceCapacityWithFilterParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ResourceCapacityWithFilterParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ResourceCapacityWithFilterParams;
