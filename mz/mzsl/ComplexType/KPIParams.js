

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.KPIParams = function () {
}
SAPB1.KPIParams.prototype = new SAPB1.ComplexType();
SAPB1.KPIParams.prototype.constructor = SAPB1.KPIParams;
SAPB1.KPIParams.KPICode = { valueOf: function(){return 'KPICode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KPIParams.KPIName = { valueOf: function(){return 'KPIName';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KPIParams.prototype.KPICode = new String();
SAPB1.KPIParams.prototype.KPIName = new String();



SAPB1.KPIParams.create = function (rawObject) {
    var instance = new SAPB1.KPIParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.KPIParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.KPIParams;
