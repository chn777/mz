

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.EcmActionLogParams = function () {
}
SAPB1.EcmActionLogParams.prototype = new SAPB1.ComplexType();
SAPB1.EcmActionLogParams.prototype.constructor = SAPB1.EcmActionLogParams;
SAPB1.EcmActionLogParams.ActionID = { valueOf: function(){return 'ActionID';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EcmActionLogParams.LogID = { valueOf: function(){return 'LogID';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EcmActionLogParams.prototype.ActionID = new Number();
SAPB1.EcmActionLogParams.prototype.LogID = new Number();



SAPB1.EcmActionLogParams.create = function (rawObject) {
    var instance = new SAPB1.EcmActionLogParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.EcmActionLogParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.EcmActionLogParams;
