
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ItemCycleCount = function () {
}
SAPB1.ItemCycleCount.prototype = new SAPB1.ComplexType();
SAPB1.ItemCycleCount.prototype.constructor = SAPB1.ItemCycleCount;
SAPB1.ItemCycleCount.CycleCode = { valueOf: function(){return 'CycleCode';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemCycleCount.Alert = { valueOf: function(){return 'Alert';}, Type: 'BoYesNoEnum', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemCycleCount.NextCountingDate = { valueOf: function(){return 'NextCountingDate';}, Type: 'Edm.DateTime', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemCycleCount.AlertTime = { valueOf: function(){return 'AlertTime';}, Type: 'Edm.Time', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemCycleCount.DestinationUser = { valueOf: function(){return 'DestinationUser';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemCycleCount.WarehouseCode = { valueOf: function(){return 'WarehouseCode';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemCycleCount.prototype.CycleCode = new Number();
SAPB1.ItemCycleCount.prototype.Alert = new String();
SAPB1.ItemCycleCount.prototype.NextCountingDate = new String();
SAPB1.ItemCycleCount.prototype.AlertTime = new String();
SAPB1.ItemCycleCount.prototype.DestinationUser = new Number();
SAPB1.ItemCycleCount.prototype.WarehouseCode = new String();


SAPB1.ItemCycleCount.BoYesNoEnum = BoYesNoEnum

SAPB1.ItemCycleCount.create = function (rawObject) {
    var instance = new SAPB1.ItemCycleCount();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ItemCycleCount.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ItemCycleCount;
