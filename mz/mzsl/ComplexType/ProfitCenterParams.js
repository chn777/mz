

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ProfitCenterParams = function () {
}
SAPB1.ProfitCenterParams.prototype = new SAPB1.ComplexType();
SAPB1.ProfitCenterParams.prototype.constructor = SAPB1.ProfitCenterParams;
SAPB1.ProfitCenterParams.CenterCode = { valueOf: function(){return 'CenterCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProfitCenterParams.CenterName = { valueOf: function(){return 'CenterName';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ProfitCenterParams.prototype.CenterCode = new String();
SAPB1.ProfitCenterParams.prototype.CenterName = new String();



SAPB1.ProfitCenterParams.create = function (rawObject) {
    var instance = new SAPB1.ProfitCenterParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ProfitCenterParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ProfitCenterParams;
