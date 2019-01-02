

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ReportType = function () {
}
SAPB1.ReportType.prototype = new SAPB1.EntityType();
SAPB1.ReportType.prototype.constructor = SAPB1.ReportType;
SAPB1.ReportType.prototype.keys.push('TypeCode');
SAPB1.ReportType.TypeCode = { valueOf: function(){return 'TypeCode';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ReportType.TypeName = { valueOf: function(){return 'TypeName';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportType.DefaultReportLayout = { valueOf: function(){return 'DefaultReportLayout';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportType.AddonName = { valueOf: function(){return 'AddonName';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportType.AddonFormType = { valueOf: function(){return 'AddonFormType';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportType.MenuID = { valueOf: function(){return 'MenuID';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportType.prototype.TypeCode = new String();
SAPB1.ReportType.prototype.TypeName = new String();
SAPB1.ReportType.prototype.DefaultReportLayout = new String();
SAPB1.ReportType.prototype.AddonName = new String();
SAPB1.ReportType.prototype.AddonFormType = new String();
SAPB1.ReportType.prototype.MenuID = new String();



SAPB1.ReportType.create = function (rawObject) {
    var instance = new SAPB1.ReportType();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ReportType.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ReportType;
