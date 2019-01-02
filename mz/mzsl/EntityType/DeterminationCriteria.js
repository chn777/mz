
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DeterminationCriteria = function () {
}
SAPB1.DeterminationCriteria.prototype = new SAPB1.EntityType();
SAPB1.DeterminationCriteria.prototype.constructor = SAPB1.DeterminationCriteria;
SAPB1.DeterminationCriteria.prototype.keys.push('DmcId');
SAPB1.DeterminationCriteria.DmcId = { valueOf: function(){return 'DmcId';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.DeterminationCriteria.DeterminationCriteria = { valueOf: function(){return 'DeterminationCriteria';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DeterminationCriteria.IsActive = { valueOf: function(){return 'IsActive';}, Type: 'BoYesNoEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DeterminationCriteria.Priority = { valueOf: function(){return 'Priority';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DeterminationCriteria.prototype.DmcId = new Number();
SAPB1.DeterminationCriteria.prototype.DeterminationCriteria = new String();
SAPB1.DeterminationCriteria.prototype.IsActive = new String();
SAPB1.DeterminationCriteria.prototype.Priority = new Number();


SAPB1.DeterminationCriteria.BoYesNoEnum = BoYesNoEnum

SAPB1.DeterminationCriteria.create = function (rawObject) {
    var instance = new SAPB1.DeterminationCriteria();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DeterminationCriteria.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DeterminationCriteria;
