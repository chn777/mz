
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DashboardPackageImportParams = function () {
}
SAPB1.DashboardPackageImportParams.prototype = new SAPB1.ComplexType();
SAPB1.DashboardPackageImportParams.prototype.constructor = SAPB1.DashboardPackageImportParams;
SAPB1.DashboardPackageImportParams.PackageFilePath = { valueOf: function(){return 'PackageFilePath';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DashboardPackageImportParams.ImportQueries = { valueOf: function(){return 'ImportQueries';}, Type: 'BoYesNoEnum', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DashboardPackageImportParams.ForceOverwriteQuery = { valueOf: function(){return 'ForceOverwriteQuery';}, Type: 'BoYesNoEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DashboardPackageImportParams.ForceOverwritePackage = { valueOf: function(){return 'ForceOverwritePackage';}, Type: 'BoYesNoEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DashboardPackageImportParams.prototype.PackageFilePath = new String();
SAPB1.DashboardPackageImportParams.prototype.ImportQueries = new String();
SAPB1.DashboardPackageImportParams.prototype.ForceOverwriteQuery = new String();
SAPB1.DashboardPackageImportParams.prototype.ForceOverwritePackage = new String();


SAPB1.DashboardPackageImportParams.BoYesNoEnum = BoYesNoEnum

SAPB1.DashboardPackageImportParams.create = function (rawObject) {
    var instance = new SAPB1.DashboardPackageImportParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DashboardPackageImportParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DashboardPackageImportParams;
