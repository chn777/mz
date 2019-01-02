

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.PMC_SubprojectTypeData = function () {
}
SAPB1.PMC_SubprojectTypeData.prototype = new SAPB1.ComplexType();
SAPB1.PMC_SubprojectTypeData.prototype.constructor = SAPB1.PMC_SubprojectTypeData;
SAPB1.PMC_SubprojectTypeData.SubprojectTypeID = { valueOf: function(){return 'SubprojectTypeID';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMC_SubprojectTypeData.SubprojectTypeName = { valueOf: function(){return 'SubprojectTypeName';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PMC_SubprojectTypeData.prototype.SubprojectTypeID = new Number();
SAPB1.PMC_SubprojectTypeData.prototype.SubprojectTypeName = new String();



SAPB1.PMC_SubprojectTypeData.create = function (rawObject) {
    var instance = new SAPB1.PMC_SubprojectTypeData();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.PMC_SubprojectTypeData.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.PMC_SubprojectTypeData;
