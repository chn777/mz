

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.EmployeePositionParams = function () {
}
SAPB1.EmployeePositionParams.prototype = new SAPB1.ComplexType();
SAPB1.EmployeePositionParams.prototype.constructor = SAPB1.EmployeePositionParams;
SAPB1.EmployeePositionParams.PositionID = { valueOf: function(){return 'PositionID';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeePositionParams.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.EmployeePositionParams.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeePositionParams.prototype.PositionID = new Number();
SAPB1.EmployeePositionParams.prototype.Name = new String();
SAPB1.EmployeePositionParams.prototype.Description = new String();



SAPB1.EmployeePositionParams.create = function (rawObject) {
    var instance = new SAPB1.EmployeePositionParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.EmployeePositionParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.EmployeePositionParams;
