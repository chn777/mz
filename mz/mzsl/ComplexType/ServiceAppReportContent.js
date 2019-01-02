

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ServiceAppReportContent = function () {
}
SAPB1.ServiceAppReportContent.prototype = new SAPB1.ComplexType();
SAPB1.ServiceAppReportContent.prototype.constructor = SAPB1.ServiceAppReportContent;
SAPB1.ServiceAppReportContent.ReportContent = { valueOf: function(){return 'ReportContent';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ServiceAppReportContent.prototype.ReportContent = new String();



SAPB1.ServiceAppReportContent.create = function (rawObject) {
    var instance = new SAPB1.ServiceAppReportContent();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ServiceAppReportContent.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ServiceAppReportContent;
