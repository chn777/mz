

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.EmployeeIDType = function () {
}
SAPB1.EmployeeIDType.prototype = new SAPB1.EntityType();
SAPB1.EmployeeIDType.prototype.constructor = SAPB1.EmployeeIDType;
SAPB1.EmployeeIDType.prototype.keys.push('IDType');
SAPB1.EmployeeIDType.IDType = { valueOf: function(){return 'IDType';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.EmployeeIDType.prototype.IDType = new String();



SAPB1.EmployeeIDType.create = function (rawObject) {
    var instance = new SAPB1.EmployeeIDType();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.EmployeeIDType.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.EmployeeIDType;
