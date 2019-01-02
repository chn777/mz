
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.PM_TimeSheetLineData = function () {
}
SAPB1.PM_TimeSheetLineData.prototype = new SAPB1.ComplexType();
SAPB1.PM_TimeSheetLineData.prototype.constructor = SAPB1.PM_TimeSheetLineData;
SAPB1.PM_TimeSheetLineData.LineID = { valueOf: function(){return 'LineID';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.PM_TimeSheetLineData.Date = { valueOf: function(){return 'Date';}, Type: 'Edm.DateTime', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_TimeSheetLineData.ActivityType = { valueOf: function(){return 'ActivityType';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_TimeSheetLineData.LaborItem = { valueOf: function(){return 'LaborItem';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_TimeSheetLineData.StartTime = { valueOf: function(){return 'StartTime';}, Type: 'Edm.Time', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_TimeSheetLineData.EndTime = { valueOf: function(){return 'EndTime';}, Type: 'Edm.Time', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_TimeSheetLineData.Workorder = { valueOf: function(){return 'Workorder';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_TimeSheetLineData.ServiceCall = { valueOf: function(){return 'ServiceCall';}, Type: 'Edm.Int32', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_TimeSheetLineData.CostCenter = { valueOf: function(){return 'CostCenter';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_TimeSheetLineData.FinancialProject = { valueOf: function(){return 'FinancialProject';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_TimeSheetLineData.Location = { valueOf: function(){return 'Location';}, Type: 'Edm.Int32', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_TimeSheetLineData.GPSData = { valueOf: function(){return 'GPSData';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_TimeSheetLineData.Branch = { valueOf: function(){return 'Branch';}, Type: 'Edm.Int32', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_TimeSheetLineData.Break = { valueOf: function(){return 'Break';}, Type: 'Edm.Time', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_TimeSheetLineData.NonBillableTime = { valueOf: function(){return 'NonBillableTime';}, Type: 'Edm.Time', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_TimeSheetLineData.EffectiveTime = { valueOf: function(){return 'EffectiveTime';}, Type: 'Edm.Time', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_TimeSheetLineData.BillableTime = { valueOf: function(){return 'BillableTime';}, Type: 'Edm.Time', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_TimeSheetLineData.FullDay = { valueOf: function(){return 'FullDay';}, Type: 'BoYesNoEnum', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_TimeSheetLineData.prototype.LineID = new Number();
SAPB1.PM_TimeSheetLineData.prototype.Date = new String();
SAPB1.PM_TimeSheetLineData.prototype.ActivityType = new Number();
SAPB1.PM_TimeSheetLineData.prototype.LaborItem = new String();
SAPB1.PM_TimeSheetLineData.prototype.StartTime = new String();
SAPB1.PM_TimeSheetLineData.prototype.EndTime = new String();
SAPB1.PM_TimeSheetLineData.prototype.Workorder = new Number();
SAPB1.PM_TimeSheetLineData.prototype.ServiceCall = new Number();
SAPB1.PM_TimeSheetLineData.prototype.CostCenter = new String();
SAPB1.PM_TimeSheetLineData.prototype.FinancialProject = new String();
SAPB1.PM_TimeSheetLineData.prototype.Location = new Number();
SAPB1.PM_TimeSheetLineData.prototype.GPSData = new String();
SAPB1.PM_TimeSheetLineData.prototype.Branch = new Number();
SAPB1.PM_TimeSheetLineData.prototype.Break = new String();
SAPB1.PM_TimeSheetLineData.prototype.NonBillableTime = new String();
SAPB1.PM_TimeSheetLineData.prototype.EffectiveTime = new String();
SAPB1.PM_TimeSheetLineData.prototype.BillableTime = new String();
SAPB1.PM_TimeSheetLineData.prototype.FullDay = new String();


SAPB1.PM_TimeSheetLineData.BoYesNoEnum = BoYesNoEnum

SAPB1.PM_TimeSheetLineData.create = function (rawObject) {
    var instance = new SAPB1.PM_TimeSheetLineData();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.PM_TimeSheetLineData.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.PM_TimeSheetLineData;
