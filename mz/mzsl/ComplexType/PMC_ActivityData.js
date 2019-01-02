
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.PMC_ActivityData = function () {
}
SAPB1.PMC_ActivityData.prototype = new SAPB1.ComplexType();
SAPB1.PMC_ActivityData.prototype.constructor = SAPB1.PMC_ActivityData;
SAPB1.PMC_ActivityData.ActivityID = { valueOf: function(){return 'ActivityID';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMC_ActivityData.ActivityType = { valueOf: function(){return 'ActivityType';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMC_ActivityData.LaborItem = { valueOf: function(){return 'LaborItem';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMC_ActivityData.IsChargeable = { valueOf: function(){return 'IsChargeable';}, Type: 'BoYesNoEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMC_ActivityData.IsAbsence = { valueOf: function(){return 'IsAbsence';}, Type: 'BoYesNoEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMC_ActivityData.prototype.ActivityID = new Number();
SAPB1.PMC_ActivityData.prototype.ActivityType = new String();
SAPB1.PMC_ActivityData.prototype.LaborItem = new String();
SAPB1.PMC_ActivityData.prototype.IsChargeable = new String();
SAPB1.PMC_ActivityData.prototype.IsAbsence = new String();


SAPB1.PMC_ActivityData.BoYesNoEnum = BoYesNoEnum

SAPB1.PMC_ActivityData.create = function (rawObject) {
    var instance = new SAPB1.PMC_ActivityData();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.PMC_ActivityData.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.PMC_ActivityData;
