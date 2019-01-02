
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.MaterialRevaluationFIFOParams = function () {
}
SAPB1.MaterialRevaluationFIFOParams.prototype = new SAPB1.ComplexType();
SAPB1.MaterialRevaluationFIFOParams.prototype.constructor = SAPB1.MaterialRevaluationFIFOParams;
SAPB1.MaterialRevaluationFIFOParams.ItemCode = { valueOf: function(){return 'ItemCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluationFIFOParams.LocationType = { valueOf: function(){return 'LocationType';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluationFIFOParams.LocationCode = { valueOf: function(){return 'LocationCode';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluationFIFOParams.ShowIssuedLayers = { valueOf: function(){return 'ShowIssuedLayers';}, Type: 'BoYesNoEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluationFIFOParams.prototype.ItemCode = new String();
SAPB1.MaterialRevaluationFIFOParams.prototype.LocationType = new String();
SAPB1.MaterialRevaluationFIFOParams.prototype.LocationCode = new String();
SAPB1.MaterialRevaluationFIFOParams.prototype.ShowIssuedLayers = new String();


SAPB1.MaterialRevaluationFIFOParams.BoYesNoEnum = BoYesNoEnum

SAPB1.MaterialRevaluationFIFOParams.create = function (rawObject) {
    var instance = new SAPB1.MaterialRevaluationFIFOParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.MaterialRevaluationFIFOParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.MaterialRevaluationFIFOParams;
