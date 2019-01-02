

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.UoMGroupDefinition = function () {
}
SAPB1.UoMGroupDefinition.prototype = new SAPB1.ComplexType();
SAPB1.UoMGroupDefinition.prototype.constructor = SAPB1.UoMGroupDefinition;
SAPB1.UoMGroupDefinition.AlternateUoM = { valueOf: function(){return 'AlternateUoM';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UoMGroupDefinition.AlternateQuantity = { valueOf: function(){return 'AlternateQuantity';}, Type: 'Edm.Double', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UoMGroupDefinition.BaseQuantity = { valueOf: function(){return 'BaseQuantity';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UoMGroupDefinition.WeightFactor = { valueOf: function(){return 'WeightFactor';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UoMGroupDefinition.UdfFactor = { valueOf: function(){return 'UdfFactor';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UoMGroupDefinition.prototype.AlternateUoM = new Number();
SAPB1.UoMGroupDefinition.prototype.AlternateQuantity = new Number();
SAPB1.UoMGroupDefinition.prototype.BaseQuantity = new Number();
SAPB1.UoMGroupDefinition.prototype.WeightFactor = new Number();
SAPB1.UoMGroupDefinition.prototype.UdfFactor = new Number();



SAPB1.UoMGroupDefinition.create = function (rawObject) {
    var instance = new SAPB1.UoMGroupDefinition();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.UoMGroupDefinition.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.UoMGroupDefinition;
