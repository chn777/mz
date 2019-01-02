var PM_TimeSheetLineData = require('ComplexType/PM_TimeSheetLineData')
var PM_TimeSheetLineDataCollection = require('ComplexType/PM_TimeSheetLineDataCollection')

var TimeSheetTypeEnum = require('EnumType/TimeSheetTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.PM_TimeSheetData = function () {
}
SAPB1.PM_TimeSheetData.prototype = new SAPB1.EntityType();
SAPB1.PM_TimeSheetData.prototype.constructor = SAPB1.PM_TimeSheetData;
SAPB1.PM_TimeSheetData.prototype.keys.push('AbsEntry');
SAPB1.PM_TimeSheetData.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.PM_TimeSheetData.DocNumber = { valueOf: function(){return 'DocNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_TimeSheetData.TimeSheetType = { valueOf: function(){return 'TimeSheetType';}, Type: 'TimeSheetTypeEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_TimeSheetData.UserID = { valueOf: function(){return 'UserID';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_TimeSheetData.LastName = { valueOf: function(){return 'LastName';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_TimeSheetData.FirstName = { valueOf: function(){return 'FirstName';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_TimeSheetData.Department = { valueOf: function(){return 'Department';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_TimeSheetData.DateFrom = { valueOf: function(){return 'DateFrom';}, Type: 'Edm.DateTime', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_TimeSheetData.DateTo = { valueOf: function(){return 'DateTo';}, Type: 'Edm.DateTime', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.PM_TimeSheetData.PM_TimeSheetLineDataCollection = { valueOf: function(){return 'PM_TimeSheetLineDataCollection';}, Type: 'PM_TimeSheetLineData', Index: 9, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.PM_TimeSheetData.prototype.AbsEntry = new Number();
SAPB1.PM_TimeSheetData.prototype.DocNumber = new Number();
SAPB1.PM_TimeSheetData.prototype.TimeSheetType = new String();
SAPB1.PM_TimeSheetData.prototype.UserID = new Number();
SAPB1.PM_TimeSheetData.prototype.LastName = new String();
SAPB1.PM_TimeSheetData.prototype.FirstName = new String();
SAPB1.PM_TimeSheetData.prototype.Department = new Number();
SAPB1.PM_TimeSheetData.prototype.DateFrom = new String();
SAPB1.PM_TimeSheetData.prototype.DateTo = new String();
SAPB1.PM_TimeSheetData.prototype.PM_TimeSheetLineDataCollection = new PM_TimeSheetLineDataCollection();

SAPB1.PM_TimeSheetData.PM_TimeSheetLineData = PM_TimeSheetLineData
SAPB1.PM_TimeSheetData.PM_TimeSheetLineDataCollection = PM_TimeSheetLineDataCollection

SAPB1.PM_TimeSheetData.TimeSheetTypeEnum = TimeSheetTypeEnum

SAPB1.PM_TimeSheetData.create = function (rawObject) {
    var instance = new SAPB1.PM_TimeSheetData();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.PM_TimeSheetData.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.PM_TimeSheetData;
