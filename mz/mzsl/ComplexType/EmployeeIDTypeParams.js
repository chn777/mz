

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.EmployeeIDTypeParams = function () {
}
SAPB1.EmployeeIDTypeParams.prototype = new SAPB1.ComplexType();
SAPB1.EmployeeIDTypeParams.prototype.constructor = SAPB1.EmployeeIDTypeParams;
SAPB1.EmployeeIDTypeParams.IDType = { valueOf: function(){return 'IDType';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeIDTypeParams.prototype.IDType = new String();



SAPB1.EmployeeIDTypeParams.create = function (rawObject) {
    var instance = new SAPB1.EmployeeIDTypeParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.EmployeeIDTypeParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.EmployeeIDTypeParams;
