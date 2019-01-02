
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.PM_OpenIssueData = function () {
}
SAPB1.PM_OpenIssueData.prototype = new SAPB1.ComplexType();
SAPB1.PM_OpenIssueData.prototype.constructor = SAPB1.PM_OpenIssueData;
SAPB1.PM_OpenIssueData.LineID = { valueOf: function(){return 'LineID';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.PM_OpenIssueData.StageID = { valueOf: function(){return 'StageID';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_OpenIssueData.Area = { valueOf: function(){return 'Area';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_OpenIssueData.Priority = { valueOf: function(){return 'Priority';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_OpenIssueData.Remarks = { valueOf: function(){return 'Remarks';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_OpenIssueData.Closed = { valueOf: function(){return 'Closed';}, Type: 'BoYesNoEnum', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_OpenIssueData.SolutionID = { valueOf: function(){return 'SolutionID';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_OpenIssueData.Responsible = { valueOf: function(){return 'Responsible';}, Type: 'Edm.Int32', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_OpenIssueData.EnteredBy = { valueOf: function(){return 'EnteredBy';}, Type: 'Edm.Int32', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_OpenIssueData.EnteredDate = { valueOf: function(){return 'EnteredDate';}, Type: 'Edm.DateTime', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_OpenIssueData.Effort = { valueOf: function(){return 'Effort';}, Type: 'Edm.Double', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_OpenIssueData.prototype.LineID = new Number();
SAPB1.PM_OpenIssueData.prototype.StageID = new Number();
SAPB1.PM_OpenIssueData.prototype.Area = new Number();
SAPB1.PM_OpenIssueData.prototype.Priority = new Number();
SAPB1.PM_OpenIssueData.prototype.Remarks = new String();
SAPB1.PM_OpenIssueData.prototype.Closed = new String();
SAPB1.PM_OpenIssueData.prototype.SolutionID = new Number();
SAPB1.PM_OpenIssueData.prototype.Responsible = new Number();
SAPB1.PM_OpenIssueData.prototype.EnteredBy = new Number();
SAPB1.PM_OpenIssueData.prototype.EnteredDate = new String();
SAPB1.PM_OpenIssueData.prototype.Effort = new Number();


SAPB1.PM_OpenIssueData.BoYesNoEnum = BoYesNoEnum

SAPB1.PM_OpenIssueData.create = function (rawObject) {
    var instance = new SAPB1.PM_OpenIssueData();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.PM_OpenIssueData.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.PM_OpenIssueData;
