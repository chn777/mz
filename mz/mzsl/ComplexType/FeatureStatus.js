
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.FeatureStatus = function () {
}
SAPB1.FeatureStatus.prototype = new SAPB1.ComplexType();
SAPB1.FeatureStatus.prototype.constructor = SAPB1.FeatureStatus;
SAPB1.FeatureStatus.FeatureID = { valueOf: function(){return 'FeatureID';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.FeatureStatus.Blocked = { valueOf: function(){return 'Blocked';}, Type: 'BoYesNoEnum', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FeatureStatus.prototype.FeatureID = new String();
SAPB1.FeatureStatus.prototype.Blocked = new String();


SAPB1.FeatureStatus.BoYesNoEnum = BoYesNoEnum

SAPB1.FeatureStatus.create = function (rawObject) {
    var instance = new SAPB1.FeatureStatus();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.FeatureStatus.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.FeatureStatus;
