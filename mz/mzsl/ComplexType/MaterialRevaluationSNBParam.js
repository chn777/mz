

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.MaterialRevaluationSNBParam = function () {
}
SAPB1.MaterialRevaluationSNBParam.prototype = new SAPB1.ComplexType();
SAPB1.MaterialRevaluationSNBParam.prototype.constructor = SAPB1.MaterialRevaluationSNBParam;
SAPB1.MaterialRevaluationSNBParam.ItemCode = { valueOf: function(){return 'ItemCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluationSNBParam.prototype.ItemCode = new String();



SAPB1.MaterialRevaluationSNBParam.create = function (rawObject) {
    var instance = new SAPB1.MaterialRevaluationSNBParam();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.MaterialRevaluationSNBParam.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.MaterialRevaluationSNBParam;
