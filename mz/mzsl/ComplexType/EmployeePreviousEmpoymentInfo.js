

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.EmployeePreviousEmpoymentInfo = function () {
}
SAPB1.EmployeePreviousEmpoymentInfo.prototype = new SAPB1.ComplexType();
SAPB1.EmployeePreviousEmpoymentInfo.prototype.constructor = SAPB1.EmployeePreviousEmpoymentInfo;
SAPB1.EmployeePreviousEmpoymentInfo.EmployeeNo = { valueOf: function(){return 'EmployeeNo';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeePreviousEmpoymentInfo.LineNum = { valueOf: function(){return 'LineNum';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeePreviousEmpoymentInfo.FromDtae = { valueOf: function(){return 'FromDtae';}, Type: 'Edm.DateTime', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeePreviousEmpoymentInfo.ToDate = { valueOf: function(){return 'ToDate';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeePreviousEmpoymentInfo.Employer = { valueOf: function(){return 'Employer';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeePreviousEmpoymentInfo.Position = { valueOf: function(){return 'Position';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeePreviousEmpoymentInfo.Remarks = { valueOf: function(){return 'Remarks';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeePreviousEmpoymentInfo.prototype.EmployeeNo = new Number();
SAPB1.EmployeePreviousEmpoymentInfo.prototype.LineNum = new Number();
SAPB1.EmployeePreviousEmpoymentInfo.prototype.FromDtae = new String();
SAPB1.EmployeePreviousEmpoymentInfo.prototype.ToDate = new String();
SAPB1.EmployeePreviousEmpoymentInfo.prototype.Employer = new String();
SAPB1.EmployeePreviousEmpoymentInfo.prototype.Position = new String();
SAPB1.EmployeePreviousEmpoymentInfo.prototype.Remarks = new String();



SAPB1.EmployeePreviousEmpoymentInfo.create = function (rawObject) {
    var instance = new SAPB1.EmployeePreviousEmpoymentInfo();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.EmployeePreviousEmpoymentInfo.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.EmployeePreviousEmpoymentInfo;
