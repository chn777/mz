

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.EmployeeEducationInfo = function () {
}
SAPB1.EmployeeEducationInfo.prototype = new SAPB1.ComplexType();
SAPB1.EmployeeEducationInfo.prototype.constructor = SAPB1.EmployeeEducationInfo;
SAPB1.EmployeeEducationInfo.EmployeeNo = { valueOf: function(){return 'EmployeeNo';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeEducationInfo.LineNum = { valueOf: function(){return 'LineNum';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeEducationInfo.FromDate = { valueOf: function(){return 'FromDate';}, Type: 'Edm.DateTime', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeEducationInfo.ToDate = { valueOf: function(){return 'ToDate';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeEducationInfo.EducationType = { valueOf: function(){return 'EducationType';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeEducationInfo.Institute = { valueOf: function(){return 'Institute';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeEducationInfo.Major = { valueOf: function(){return 'Major';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeEducationInfo.Diploma = { valueOf: function(){return 'Diploma';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeEducationInfo.prototype.EmployeeNo = new Number();
SAPB1.EmployeeEducationInfo.prototype.LineNum = new Number();
SAPB1.EmployeeEducationInfo.prototype.FromDate = new String();
SAPB1.EmployeeEducationInfo.prototype.ToDate = new String();
SAPB1.EmployeeEducationInfo.prototype.EducationType = new Number();
SAPB1.EmployeeEducationInfo.prototype.Institute = new String();
SAPB1.EmployeeEducationInfo.prototype.Major = new String();
SAPB1.EmployeeEducationInfo.prototype.Diploma = new String();



SAPB1.EmployeeEducationInfo.create = function (rawObject) {
    var instance = new SAPB1.EmployeeEducationInfo();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.EmployeeEducationInfo.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.EmployeeEducationInfo;
