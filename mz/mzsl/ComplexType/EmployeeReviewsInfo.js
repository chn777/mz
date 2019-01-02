

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.EmployeeReviewsInfo = function () {
}
SAPB1.EmployeeReviewsInfo.prototype = new SAPB1.ComplexType();
SAPB1.EmployeeReviewsInfo.prototype.constructor = SAPB1.EmployeeReviewsInfo;
SAPB1.EmployeeReviewsInfo.EmployeeNo = { valueOf: function(){return 'EmployeeNo';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeReviewsInfo.LineNum = { valueOf: function(){return 'LineNum';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeReviewsInfo.Date = { valueOf: function(){return 'Date';}, Type: 'Edm.DateTime', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeReviewsInfo.ReviewDescription = { valueOf: function(){return 'ReviewDescription';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeReviewsInfo.Manager = { valueOf: function(){return 'Manager';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeReviewsInfo.Grade = { valueOf: function(){return 'Grade';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeReviewsInfo.Remarks = { valueOf: function(){return 'Remarks';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EmployeeReviewsInfo.prototype.EmployeeNo = new Number();
SAPB1.EmployeeReviewsInfo.prototype.LineNum = new Number();
SAPB1.EmployeeReviewsInfo.prototype.Date = new String();
SAPB1.EmployeeReviewsInfo.prototype.ReviewDescription = new String();
SAPB1.EmployeeReviewsInfo.prototype.Manager = new Number();
SAPB1.EmployeeReviewsInfo.prototype.Grade = new String();
SAPB1.EmployeeReviewsInfo.prototype.Remarks = new String();



SAPB1.EmployeeReviewsInfo.create = function (rawObject) {
    var instance = new SAPB1.EmployeeReviewsInfo();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.EmployeeReviewsInfo.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.EmployeeReviewsInfo;
