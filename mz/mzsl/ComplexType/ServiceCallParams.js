

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ServiceCallParams = function () {
}
SAPB1.ServiceCallParams.prototype = new SAPB1.ComplexType();
SAPB1.ServiceCallParams.prototype.constructor = SAPB1.ServiceCallParams;
SAPB1.ServiceCallParams.ServiceCallID = { valueOf: function(){return 'ServiceCallID';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceCallParams.prototype.ServiceCallID = new Number();



SAPB1.ServiceCallParams.create = function (rawObject) {
    var instance = new SAPB1.ServiceCallParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ServiceCallParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ServiceCallParams;
