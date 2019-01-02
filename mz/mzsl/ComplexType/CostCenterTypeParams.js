

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.CostCenterTypeParams = function () {
}
SAPB1.CostCenterTypeParams.prototype = new SAPB1.ComplexType();
SAPB1.CostCenterTypeParams.prototype.constructor = SAPB1.CostCenterTypeParams;
SAPB1.CostCenterTypeParams.CostCenterTypeCode = { valueOf: function(){return 'CostCenterTypeCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CostCenterTypeParams.prototype.CostCenterTypeCode = new String();



SAPB1.CostCenterTypeParams.create = function (rawObject) {
    var instance = new SAPB1.CostCenterTypeParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.CostCenterTypeParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.CostCenterTypeParams;
