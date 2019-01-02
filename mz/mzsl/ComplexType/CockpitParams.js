
var BoCockpitTypeEnum = require('EnumType/BoCockpitTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.CockpitParams = function () {
}
SAPB1.CockpitParams.prototype = new SAPB1.ComplexType();
SAPB1.CockpitParams.prototype.constructor = SAPB1.CockpitParams;
SAPB1.CockpitParams.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CockpitParams.CockpitType = { valueOf: function(){return 'CockpitType';}, Type: 'BoCockpitTypeEnum', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CockpitParams.prototype.AbsEntry = new Number();
SAPB1.CockpitParams.prototype.CockpitType = new String();


SAPB1.CockpitParams.BoCockpitTypeEnum = BoCockpitTypeEnum

SAPB1.CockpitParams.create = function (rawObject) {
    var instance = new SAPB1.CockpitParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.CockpitParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.CockpitParams;
