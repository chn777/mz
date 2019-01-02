
var MobileAppReportChoiceEnum = require('EnumType/MobileAppReportChoiceEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ServiceAppReport = function () {
}
SAPB1.ServiceAppReport.prototype = new SAPB1.ComplexType();
SAPB1.ServiceAppReport.prototype.constructor = SAPB1.ServiceAppReport;
SAPB1.ServiceAppReport.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ServiceAppReport.SystemReportName = { valueOf: function(){return 'SystemReportName';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceAppReport.CustomizedReportName = { valueOf: function(){return 'CustomizedReportName';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceAppReport.ReportChoice = { valueOf: function(){return 'ReportChoice';}, Type: 'MobileAppReportChoiceEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceAppReport.prototype.Code = new Number();
SAPB1.ServiceAppReport.prototype.SystemReportName = new String();
SAPB1.ServiceAppReport.prototype.CustomizedReportName = new String();
SAPB1.ServiceAppReport.prototype.ReportChoice = new String();


SAPB1.ServiceAppReport.MobileAppReportChoiceEnum = MobileAppReportChoiceEnum

SAPB1.ServiceAppReport.create = function (rawObject) {
    var instance = new SAPB1.ServiceAppReport();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ServiceAppReport.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ServiceAppReport;
