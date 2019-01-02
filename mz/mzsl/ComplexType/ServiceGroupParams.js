

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ServiceGroupParams = function () {
}
SAPB1.ServiceGroupParams.prototype = new SAPB1.ComplexType();
SAPB1.ServiceGroupParams.prototype.constructor = SAPB1.ServiceGroupParams;
SAPB1.ServiceGroupParams.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceGroupParams.ServiceGroupCode = { valueOf: function(){return 'ServiceGroupCode';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ServiceGroupParams.prototype.AbsEntry = new Number();
SAPB1.ServiceGroupParams.prototype.ServiceGroupCode = new String();



SAPB1.ServiceGroupParams.create = function (rawObject) {
    var instance = new SAPB1.ServiceGroupParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ServiceGroupParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ServiceGroupParams;
