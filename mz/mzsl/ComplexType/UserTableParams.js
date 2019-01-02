

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.UserTableParams = function () {
}
SAPB1.UserTableParams.prototype = new SAPB1.ComplexType();
SAPB1.UserTableParams.prototype.constructor = SAPB1.UserTableParams;
SAPB1.UserTableParams.TableType = { valueOf: function(){return 'TableType';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserTableParams.TableName = { valueOf: function(){return 'TableName';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserTableParams.TableDescription = { valueOf: function(){return 'TableDescription';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserTableParams.ArchiveDateField = { valueOf: function(){return 'ArchiveDateField';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserTableParams.Archivable = { valueOf: function(){return 'Archivable';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserTableParams.prototype.TableType = new String();
SAPB1.UserTableParams.prototype.TableName = new String();
SAPB1.UserTableParams.prototype.TableDescription = new String();
SAPB1.UserTableParams.prototype.ArchiveDateField = new String();
SAPB1.UserTableParams.prototype.Archivable = new String();



SAPB1.UserTableParams.create = function (rawObject) {
    var instance = new SAPB1.UserTableParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.UserTableParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.UserTableParams;
