

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.EmployeeBranchAssignmentItem = function () {
}
SAPB1.EmployeeBranchAssignmentItem.prototype = new SAPB1.ComplexType();
SAPB1.EmployeeBranchAssignmentItem.prototype.constructor = SAPB1.EmployeeBranchAssignmentItem;
SAPB1.EmployeeBranchAssignmentItem.EmployeeID = { valueOf: function(){return 'EmployeeID';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.EmployeeBranchAssignmentItem.BPLID = { valueOf: function(){return 'BPLID';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeBranchAssignmentItem.prototype.EmployeeID = new Number();
SAPB1.EmployeeBranchAssignmentItem.prototype.BPLID = new Number();



SAPB1.EmployeeBranchAssignmentItem.create = function (rawObject) {
    var instance = new SAPB1.EmployeeBranchAssignmentItem();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.EmployeeBranchAssignmentItem.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.EmployeeBranchAssignmentItem;
