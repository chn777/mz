

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.PMC_StageTypeData = function () {
}
SAPB1.PMC_StageTypeData.prototype = new SAPB1.ComplexType();
SAPB1.PMC_StageTypeData.prototype.constructor = SAPB1.PMC_StageTypeData;
SAPB1.PMC_StageTypeData.StageID = { valueOf: function(){return 'StageID';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMC_StageTypeData.StageName = { valueOf: function(){return 'StageName';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMC_StageTypeData.StageDescription = { valueOf: function(){return 'StageDescription';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMC_StageTypeData.prototype.StageID = new Number();
SAPB1.PMC_StageTypeData.prototype.StageName = new String();
SAPB1.PMC_StageTypeData.prototype.StageDescription = new String();



SAPB1.PMC_StageTypeData.create = function (rawObject) {
    var instance = new SAPB1.PMC_StageTypeData();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.PMC_StageTypeData.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.PMC_StageTypeData;
