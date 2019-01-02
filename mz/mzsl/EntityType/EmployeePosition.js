

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.EmployeePosition = function () {
}
SAPB1.EmployeePosition.prototype = new SAPB1.EntityType();
SAPB1.EmployeePosition.prototype.constructor = SAPB1.EmployeePosition;
SAPB1.EmployeePosition.prototype.keys.push('PositionID');
SAPB1.EmployeePosition.PositionID = { valueOf: function(){return 'PositionID';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.EmployeePosition.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.EmployeePosition.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeePosition.prototype.PositionID = new Number();
SAPB1.EmployeePosition.prototype.Name = new String();
SAPB1.EmployeePosition.prototype.Description = new String();



SAPB1.EmployeePosition.create = function (rawObject) {
    var instance = new SAPB1.EmployeePosition();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.EmployeePosition.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.EmployeePosition;
