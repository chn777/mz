

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.EmployeeAbsenceInfo = function () {
}
SAPB1.EmployeeAbsenceInfo.prototype = new SAPB1.ComplexType();
SAPB1.EmployeeAbsenceInfo.prototype.constructor = SAPB1.EmployeeAbsenceInfo;
SAPB1.EmployeeAbsenceInfo.EmployeeID = { valueOf: function(){return 'EmployeeID';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeAbsenceInfo.LineNum = { valueOf: function(){return 'LineNum';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeAbsenceInfo.FromDate = { valueOf: function(){return 'FromDate';}, Type: 'Edm.DateTime', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeAbsenceInfo.ToDate = { valueOf: function(){return 'ToDate';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeAbsenceInfo.Reason = { valueOf: function(){return 'Reason';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeAbsenceInfo.ApprovedBy = { valueOf: function(){return 'ApprovedBy';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeAbsenceInfo.ConfirmerNumber = { valueOf: function(){return 'ConfirmerNumber';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeAbsenceInfo.prototype.EmployeeID = new Number();
SAPB1.EmployeeAbsenceInfo.prototype.LineNum = new Number();
SAPB1.EmployeeAbsenceInfo.prototype.FromDate = new String();
SAPB1.EmployeeAbsenceInfo.prototype.ToDate = new String();
SAPB1.EmployeeAbsenceInfo.prototype.Reason = new String();
SAPB1.EmployeeAbsenceInfo.prototype.ApprovedBy = new String();
SAPB1.EmployeeAbsenceInfo.prototype.ConfirmerNumber = new Number();



SAPB1.EmployeeAbsenceInfo.create = function (rawObject) {
    var instance = new SAPB1.EmployeeAbsenceInfo();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.EmployeeAbsenceInfo.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.EmployeeAbsenceInfo;
