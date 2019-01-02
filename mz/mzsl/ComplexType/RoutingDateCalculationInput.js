
var ResourceAllocationEnum = require('EnumType/ResourceAllocationEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.RoutingDateCalculationInput = function () {
}
SAPB1.RoutingDateCalculationInput.prototype = new SAPB1.ComplexType();
SAPB1.RoutingDateCalculationInput.prototype.constructor = SAPB1.RoutingDateCalculationInput;
SAPB1.RoutingDateCalculationInput.ResourceCode = { valueOf: function(){return 'ResourceCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RoutingDateCalculationInput.WarehouseCode = { valueOf: function(){return 'WarehouseCode';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RoutingDateCalculationInput.CalculateFromDate = { valueOf: function(){return 'CalculateFromDate';}, Type: 'Edm.DateTime', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RoutingDateCalculationInput.CalculateUntilDate = { valueOf: function(){return 'CalculateUntilDate';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RoutingDateCalculationInput.CapacitySum = { valueOf: function(){return 'CapacitySum';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RoutingDateCalculationInput.FirstDateProportion = { valueOf: function(){return 'FirstDateProportion';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RoutingDateCalculationInput.ResourceAlloc = { valueOf: function(){return 'ResourceAlloc';}, Type: 'ResourceAllocationEnum', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RoutingDateCalculationInput.WORObjAbs = { valueOf: function(){return 'WORObjAbs';}, Type: 'Edm.Int32', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RoutingDateCalculationInput.WORLine = { valueOf: function(){return 'WORLine';}, Type: 'Edm.Int32', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RoutingDateCalculationInput.prototype.ResourceCode = new String();
SAPB1.RoutingDateCalculationInput.prototype.WarehouseCode = new String();
SAPB1.RoutingDateCalculationInput.prototype.CalculateFromDate = new String();
SAPB1.RoutingDateCalculationInput.prototype.CalculateUntilDate = new String();
SAPB1.RoutingDateCalculationInput.prototype.CapacitySum = new Number();
SAPB1.RoutingDateCalculationInput.prototype.FirstDateProportion = new Number();
SAPB1.RoutingDateCalculationInput.prototype.ResourceAlloc = new String();
SAPB1.RoutingDateCalculationInput.prototype.WORObjAbs = new Number();
SAPB1.RoutingDateCalculationInput.prototype.WORLine = new Number();


SAPB1.RoutingDateCalculationInput.ResourceAllocationEnum = ResourceAllocationEnum

SAPB1.RoutingDateCalculationInput.create = function (rawObject) {
    var instance = new SAPB1.RoutingDateCalculationInput();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.RoutingDateCalculationInput.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.RoutingDateCalculationInput;
