

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.EmployeeFullNamesParams = function () {
}
SAPB1.EmployeeFullNamesParams.prototype = new SAPB1.ComplexType();
SAPB1.EmployeeFullNamesParams.prototype.constructor = SAPB1.EmployeeFullNamesParams;
SAPB1.EmployeeFullNamesParams.EmployeeID = { valueOf: function(){return 'EmployeeID';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeFullNamesParams.EmployeeFullName = { valueOf: function(){return 'EmployeeFullName';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeFullNamesParams.prototype.EmployeeID = new Number();
SAPB1.EmployeeFullNamesParams.prototype.EmployeeFullName = new String();



SAPB1.EmployeeFullNamesParams.create = function (rawObject) {
    var instance = new SAPB1.EmployeeFullNamesParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.EmployeeFullNamesParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.EmployeeFullNamesParams;
