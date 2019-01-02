var CycleCountDeterminationSetup = require('ComplexType/CycleCountDeterminationSetup')
var CycleCountDeterminationSetupCollection = require('ComplexType/CycleCountDeterminationSetupCollection')

var CycleCountDeterminationCycleByEnum = require('EnumType/CycleCountDeterminationCycleByEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.CycleCountDetermination = function () {
}
SAPB1.CycleCountDetermination.prototype = new SAPB1.EntityType();
SAPB1.CycleCountDetermination.prototype.constructor = SAPB1.CycleCountDetermination;
SAPB1.CycleCountDetermination.prototype.keys.push('WarehouseCode');
SAPB1.CycleCountDetermination.WarehouseCode = { valueOf: function(){return 'WarehouseCode';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.CycleCountDetermination.CycleBy = { valueOf: function(){return 'CycleBy';}, Type: 'CycleCountDeterminationCycleByEnum', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CycleCountDetermination.CycleCountDeterminationSetupCollection = { valueOf: function(){return 'CycleCountDeterminationSetupCollection';}, Type: 'CycleCountDeterminationSetup', Index: 2, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.CycleCountDetermination.prototype.WarehouseCode = new String();
SAPB1.CycleCountDetermination.prototype.CycleBy = new String();
SAPB1.CycleCountDetermination.prototype.CycleCountDeterminationSetupCollection = new CycleCountDeterminationSetupCollection();

SAPB1.CycleCountDetermination.CycleCountDeterminationSetup = CycleCountDeterminationSetup
SAPB1.CycleCountDetermination.CycleCountDeterminationSetupCollection = CycleCountDeterminationSetupCollection

SAPB1.CycleCountDetermination.CycleCountDeterminationCycleByEnum = CycleCountDeterminationCycleByEnum

SAPB1.CycleCountDetermination.create = function (rawObject) {
    var instance = new SAPB1.CycleCountDetermination();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.CycleCountDetermination.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.CycleCountDetermination;
