
var BoUTBTableType = require('EnumType/BoUTBTableType')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.UserTablesMD = function () {
}
SAPB1.UserTablesMD.prototype = new SAPB1.EntityType();
SAPB1.UserTablesMD.prototype.constructor = SAPB1.UserTablesMD;
SAPB1.UserTablesMD.prototype.keys.push('TableName');
SAPB1.UserTablesMD.TableName = { valueOf: function(){return 'TableName';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.UserTablesMD.TableDescription = { valueOf: function(){return 'TableDescription';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserTablesMD.TableType = { valueOf: function(){return 'TableType';}, Type: 'BoUTBTableType', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserTablesMD.Archivable = { valueOf: function(){return 'Archivable';}, Type: 'BoYesNoEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserTablesMD.ArchiveDateField = { valueOf: function(){return 'ArchiveDateField';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserTablesMD.prototype.TableName = new String();
SAPB1.UserTablesMD.prototype.TableDescription = new String();
SAPB1.UserTablesMD.prototype.TableType = new String();
SAPB1.UserTablesMD.prototype.Archivable = new String();
SAPB1.UserTablesMD.prototype.ArchiveDateField = new String();


SAPB1.UserTablesMD.BoUTBTableType = BoUTBTableType
SAPB1.UserTablesMD.BoYesNoEnum = BoYesNoEnum

SAPB1.UserTablesMD.create = function (rawObject) {
    var instance = new SAPB1.UserTablesMD();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.UserTablesMD.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.UserTablesMD;
