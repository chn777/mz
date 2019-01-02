
var CounterTypeEnum = require('EnumType/CounterTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.TeamCounter = function () {
}
SAPB1.TeamCounter.prototype = new SAPB1.ComplexType();
SAPB1.TeamCounter.prototype.constructor = SAPB1.TeamCounter;
SAPB1.TeamCounter.DocumentEntry = { valueOf: function(){return 'DocumentEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.TeamCounter.CounterID = { valueOf: function(){return 'CounterID';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TeamCounter.CounterType = { valueOf: function(){return 'CounterType';}, Type: 'CounterTypeEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TeamCounter.CounterName = { valueOf: function(){return 'CounterName';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TeamCounter.CounterNumber = { valueOf: function(){return 'CounterNumber';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TeamCounter.CounterVisualOrder = { valueOf: function(){return 'CounterVisualOrder';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TeamCounter.prototype.DocumentEntry = new Number();
SAPB1.TeamCounter.prototype.CounterID = new Number();
SAPB1.TeamCounter.prototype.CounterType = new String();
SAPB1.TeamCounter.prototype.CounterName = new String();
SAPB1.TeamCounter.prototype.CounterNumber = new Number();
SAPB1.TeamCounter.prototype.CounterVisualOrder = new Number();


SAPB1.TeamCounter.CounterTypeEnum = CounterTypeEnum

SAPB1.TeamCounter.create = function (rawObject) {
    var instance = new SAPB1.TeamCounter();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.TeamCounter.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.TeamCounter;
