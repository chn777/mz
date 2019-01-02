

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.UserObjectMD_FindColumn = function () {
}
SAPB1.UserObjectMD_FindColumn.prototype = new SAPB1.ComplexType();
SAPB1.UserObjectMD_FindColumn.prototype.constructor = SAPB1.UserObjectMD_FindColumn;
SAPB1.UserObjectMD_FindColumn.ColumnNumber = { valueOf: function(){return 'ColumnNumber';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.UserObjectMD_FindColumn.ColumnAlias = { valueOf: function(){return 'ColumnAlias';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserObjectMD_FindColumn.ColumnDescription = { valueOf: function(){return 'ColumnDescription';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserObjectMD_FindColumn.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 3, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.UserObjectMD_FindColumn.prototype.ColumnNumber = new Number();
SAPB1.UserObjectMD_FindColumn.prototype.ColumnAlias = new String();
SAPB1.UserObjectMD_FindColumn.prototype.ColumnDescription = new String();
SAPB1.UserObjectMD_FindColumn.prototype.Code = new String();



SAPB1.UserObjectMD_FindColumn.create = function (rawObject) {
    var instance = new SAPB1.UserObjectMD_FindColumn();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.UserObjectMD_FindColumn.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.UserObjectMD_FindColumn;
