

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DefaultReportParams = function () {
}
SAPB1.DefaultReportParams.prototype = new SAPB1.ComplexType();
SAPB1.DefaultReportParams.prototype.constructor = SAPB1.DefaultReportParams;
SAPB1.DefaultReportParams.ReportCode = { valueOf: function(){return 'ReportCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DefaultReportParams.LayoutCode = { valueOf: function(){return 'LayoutCode';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DefaultReportParams.UserID = { valueOf: function(){return 'UserID';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DefaultReportParams.CardCode = { valueOf: function(){return 'CardCode';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DefaultReportParams.prototype.ReportCode = new String();
SAPB1.DefaultReportParams.prototype.LayoutCode = new String();
SAPB1.DefaultReportParams.prototype.UserID = new Number();
SAPB1.DefaultReportParams.prototype.CardCode = new String();



SAPB1.DefaultReportParams.create = function (rawObject) {
    var instance = new SAPB1.DefaultReportParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DefaultReportParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DefaultReportParams;
