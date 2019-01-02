
var UserQueryTypeEnum = require('EnumType/UserQueryTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.UserQuery = function () {
}
SAPB1.UserQuery.prototype = new SAPB1.EntityType();
SAPB1.UserQuery.prototype.constructor = SAPB1.UserQuery;
SAPB1.UserQuery.prototype.keys.push('InternalKey','QueryCategory');
SAPB1.UserQuery.InternalKey = { valueOf: function(){return 'InternalKey';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.UserQuery.QueryCategory = { valueOf: function(){return 'QueryCategory';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.UserQuery.QueryDescription = { valueOf: function(){return 'QueryDescription';}, Type: 'Edm.String', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.UserQuery.Query = { valueOf: function(){return 'Query';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserQuery.ProcedureAlias = { valueOf: function(){return 'ProcedureAlias';}, Type: 'Edm.String', Index: 4, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.UserQuery.ProcedureName = { valueOf: function(){return 'ProcedureName';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserQuery.QueryType = { valueOf: function(){return 'QueryType';}, Type: 'UserQueryTypeEnum', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserQuery.prototype.InternalKey = new Number();
SAPB1.UserQuery.prototype.QueryCategory = new Number();
SAPB1.UserQuery.prototype.QueryDescription = new String();
SAPB1.UserQuery.prototype.Query = new String();
SAPB1.UserQuery.prototype.ProcedureAlias = new String();
SAPB1.UserQuery.prototype.ProcedureName = new String();
SAPB1.UserQuery.prototype.QueryType = new String();


SAPB1.UserQuery.UserQueryTypeEnum = UserQueryTypeEnum

SAPB1.UserQuery.create = function (rawObject) {
    var instance = new SAPB1.UserQuery();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.UserQuery.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.UserQuery;
