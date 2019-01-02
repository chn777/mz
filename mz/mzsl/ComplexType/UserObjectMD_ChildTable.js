

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.UserObjectMD_ChildTable = function () {
}
SAPB1.UserObjectMD_ChildTable.prototype = new SAPB1.ComplexType();
SAPB1.UserObjectMD_ChildTable.prototype.constructor = SAPB1.UserObjectMD_ChildTable;
SAPB1.UserObjectMD_ChildTable.SonNumber = { valueOf: function(){return 'SonNumber';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.UserObjectMD_ChildTable.TableName = { valueOf: function(){return 'TableName';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserObjectMD_ChildTable.LogTableName = { valueOf: function(){return 'LogTableName';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserObjectMD_ChildTable.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 3, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.UserObjectMD_ChildTable.ObjectName = { valueOf: function(){return 'ObjectName';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserObjectMD_ChildTable.prototype.SonNumber = new Number();
SAPB1.UserObjectMD_ChildTable.prototype.TableName = new String();
SAPB1.UserObjectMD_ChildTable.prototype.LogTableName = new String();
SAPB1.UserObjectMD_ChildTable.prototype.Code = new String();
SAPB1.UserObjectMD_ChildTable.prototype.ObjectName = new String();



SAPB1.UserObjectMD_ChildTable.create = function (rawObject) {
    var instance = new SAPB1.UserObjectMD_ChildTable();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.UserObjectMD_ChildTable.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.UserObjectMD_ChildTable;
