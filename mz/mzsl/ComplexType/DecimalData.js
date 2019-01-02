
var RoundingContextEnum = require('EnumType/RoundingContextEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DecimalData = function () {
}
SAPB1.DecimalData.prototype = new SAPB1.ComplexType();
SAPB1.DecimalData.prototype.constructor = SAPB1.DecimalData;
SAPB1.DecimalData.Value = { valueOf: function(){return 'Value';}, Type: 'Edm.Double', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DecimalData.Context = { valueOf: function(){return 'Context';}, Type: 'RoundingContextEnum', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DecimalData.Currency = { valueOf: function(){return 'Currency';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DecimalData.prototype.Value = new Number();
SAPB1.DecimalData.prototype.Context = new String();
SAPB1.DecimalData.prototype.Currency = new String();


SAPB1.DecimalData.RoundingContextEnum = RoundingContextEnum

SAPB1.DecimalData.create = function (rawObject) {
    var instance = new SAPB1.DecimalData();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DecimalData.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DecimalData;
