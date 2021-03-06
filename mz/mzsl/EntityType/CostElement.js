
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.CostElement = function () {
}
SAPB1.CostElement.prototype = new SAPB1.EntityType();
SAPB1.CostElement.prototype.constructor = SAPB1.CostElement;
SAPB1.CostElement.prototype.keys.push('Code');
SAPB1.CostElement.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.CostElement.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CostElement.IsActive = { valueOf: function(){return 'IsActive';}, Type: 'BoYesNoEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CostElement.prototype.Code = new String();
SAPB1.CostElement.prototype.Description = new String();
SAPB1.CostElement.prototype.IsActive = new String();


SAPB1.CostElement.BoYesNoEnum = BoYesNoEnum

SAPB1.CostElement.create = function (rawObject) {
    var instance = new SAPB1.CostElement();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.CostElement.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.CostElement;
