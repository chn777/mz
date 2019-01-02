
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.CycleCountDeterminationSetup = function () {
}
SAPB1.CycleCountDeterminationSetup.prototype = new SAPB1.ComplexType();
SAPB1.CycleCountDeterminationSetup.prototype.constructor = SAPB1.CycleCountDeterminationSetup;
SAPB1.CycleCountDeterminationSetup.WarehouseCode = { valueOf: function(){return 'WarehouseCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CycleCountDeterminationSetup.Entry = { valueOf: function(){return 'Entry';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CycleCountDeterminationSetup.CycleCode = { valueOf: function(){return 'CycleCode';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CycleCountDeterminationSetup.Alert = { valueOf: function(){return 'Alert';}, Type: 'BoYesNoEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CycleCountDeterminationSetup.DestinationUser = { valueOf: function(){return 'DestinationUser';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CycleCountDeterminationSetup.NextCountingDate = { valueOf: function(){return 'NextCountingDate';}, Type: 'Edm.DateTime', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CycleCountDeterminationSetup.Time = { valueOf: function(){return 'Time';}, Type: 'Edm.Time', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CycleCountDeterminationSetup.ExcludeItemsWithZeroQuantity = { valueOf: function(){return 'ExcludeItemsWithZeroQuantity';}, Type: 'BoYesNoEnum', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CycleCountDeterminationSetup.ChangeExistingItems = { valueOf: function(){return 'ChangeExistingItems';}, Type: 'BoYesNoEnum', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CycleCountDeterminationSetup.prototype.WarehouseCode = new String();
SAPB1.CycleCountDeterminationSetup.prototype.Entry = new Number();
SAPB1.CycleCountDeterminationSetup.prototype.CycleCode = new Number();
SAPB1.CycleCountDeterminationSetup.prototype.Alert = new String();
SAPB1.CycleCountDeterminationSetup.prototype.DestinationUser = new Number();
SAPB1.CycleCountDeterminationSetup.prototype.NextCountingDate = new String();
SAPB1.CycleCountDeterminationSetup.prototype.Time = new String();
SAPB1.CycleCountDeterminationSetup.prototype.ExcludeItemsWithZeroQuantity = new String();
SAPB1.CycleCountDeterminationSetup.prototype.ChangeExistingItems = new String();


SAPB1.CycleCountDeterminationSetup.BoYesNoEnum = BoYesNoEnum

SAPB1.CycleCountDeterminationSetup.create = function (rawObject) {
    var instance = new SAPB1.CycleCountDeterminationSetup();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.CycleCountDeterminationSetup.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.CycleCountDeterminationSetup;
