
var DepreciationCalculationBaseEnum = require('EnumType/DepreciationCalculationBaseEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DepreciationLevel = function () {
}
SAPB1.DepreciationLevel.prototype = new SAPB1.ComplexType();
SAPB1.DepreciationLevel.prototype.constructor = SAPB1.DepreciationLevel;
SAPB1.DepreciationLevel.Level = { valueOf: function(){return 'Level';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.DepreciationLevel.DepreciationCalculationBase = { valueOf: function(){return 'DepreciationCalculationBase';}, Type: 'DepreciationCalculationBaseEnum', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationLevel.NumberOfYears = { valueOf: function(){return 'NumberOfYears';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationLevel.Percentage = { valueOf: function(){return 'Percentage';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationLevel.Amount = { valueOf: function(){return 'Amount';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DepreciationLevel.prototype.Level = new Number();
SAPB1.DepreciationLevel.prototype.DepreciationCalculationBase = new String();
SAPB1.DepreciationLevel.prototype.NumberOfYears = new Number();
SAPB1.DepreciationLevel.prototype.Percentage = new Number();
SAPB1.DepreciationLevel.prototype.Amount = new Number();


SAPB1.DepreciationLevel.DepreciationCalculationBaseEnum = DepreciationCalculationBaseEnum

SAPB1.DepreciationLevel.create = function (rawObject) {
    var instance = new SAPB1.DepreciationLevel();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DepreciationLevel.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DepreciationLevel;
