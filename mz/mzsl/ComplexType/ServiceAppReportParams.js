
var MobileAppReportChoiceEnum = require('EnumType/MobileAppReportChoiceEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ServiceAppReportParams = function () {
}
SAPB1.ServiceAppReportParams.prototype = new SAPB1.ComplexType();
SAPB1.ServiceAppReportParams.prototype.constructor = SAPB1.ServiceAppReportParams;
SAPB1.ServiceAppReportParams.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceAppReportParams.ReportChoice = { valueOf: function(){return 'ReportChoice';}, Type: 'MobileAppReportChoiceEnum', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceAppReportParams.prototype.Code = new Number();
SAPB1.ServiceAppReportParams.prototype.ReportChoice = new String();


SAPB1.ServiceAppReportParams.MobileAppReportChoiceEnum = MobileAppReportChoiceEnum

SAPB1.ServiceAppReportParams.create = function (rawObject) {
    var instance = new SAPB1.ServiceAppReportParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ServiceAppReportParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ServiceAppReportParams;
