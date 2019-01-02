
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.PM_SubprojectParams = function () {
}
SAPB1.PM_SubprojectParams.prototype = new SAPB1.ComplexType();
SAPB1.PM_SubprojectParams.prototype.constructor = SAPB1.PM_SubprojectParams;
SAPB1.PM_SubprojectParams.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_SubprojectParams.IsSubproject = { valueOf: function(){return 'IsSubproject';}, Type: 'BoYesNoEnum', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_SubprojectParams.prototype.AbsEntry = new Number();
SAPB1.PM_SubprojectParams.prototype.IsSubproject = new String();


SAPB1.PM_SubprojectParams.BoYesNoEnum = BoYesNoEnum

SAPB1.PM_SubprojectParams.create = function (rawObject) {
    var instance = new SAPB1.PM_SubprojectParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.PM_SubprojectParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.PM_SubprojectParams;
