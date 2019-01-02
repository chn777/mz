

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ReportTypeParams = function () {
}
SAPB1.ReportTypeParams.prototype = new SAPB1.ComplexType();
SAPB1.ReportTypeParams.prototype.constructor = SAPB1.ReportTypeParams;
SAPB1.ReportTypeParams.TypeCode = { valueOf: function(){return 'TypeCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportTypeParams.TypeName = { valueOf: function(){return 'TypeName';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportTypeParams.AddonName = { valueOf: function(){return 'AddonName';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportTypeParams.AddonFormType = { valueOf: function(){return 'AddonFormType';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportTypeParams.MenuID = { valueOf: function(){return 'MenuID';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportTypeParams.prototype.TypeCode = new String();
SAPB1.ReportTypeParams.prototype.TypeName = new String();
SAPB1.ReportTypeParams.prototype.AddonName = new String();
SAPB1.ReportTypeParams.prototype.AddonFormType = new String();
SAPB1.ReportTypeParams.prototype.MenuID = new String();



SAPB1.ReportTypeParams.create = function (rawObject) {
    var instance = new SAPB1.ReportTypeParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ReportTypeParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ReportTypeParams;
