
var CounterTypeEnum = require('EnumType/CounterTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.IndividualCounter = function () {
}
SAPB1.IndividualCounter.prototype = new SAPB1.ComplexType();
SAPB1.IndividualCounter.prototype.constructor = SAPB1.IndividualCounter;
SAPB1.IndividualCounter.DocumentEntry = { valueOf: function(){return 'DocumentEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.IndividualCounter.CounterID = { valueOf: function(){return 'CounterID';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.IndividualCounter.CounterType = { valueOf: function(){return 'CounterType';}, Type: 'CounterTypeEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.IndividualCounter.CounterName = { valueOf: function(){return 'CounterName';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.IndividualCounter.CounterNumber = { valueOf: function(){return 'CounterNumber';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.IndividualCounter.CounterVisualOrder = { valueOf: function(){return 'CounterVisualOrder';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.IndividualCounter.prototype.DocumentEntry = new Number();
SAPB1.IndividualCounter.prototype.CounterID = new Number();
SAPB1.IndividualCounter.prototype.CounterType = new String();
SAPB1.IndividualCounter.prototype.CounterName = new String();
SAPB1.IndividualCounter.prototype.CounterNumber = new Number();
SAPB1.IndividualCounter.prototype.CounterVisualOrder = new Number();


SAPB1.IndividualCounter.CounterTypeEnum = CounterTypeEnum

SAPB1.IndividualCounter.create = function (rawObject) {
    var instance = new SAPB1.IndividualCounter();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.IndividualCounter.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.IndividualCounter;
