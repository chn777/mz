

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.UserGroupByUserItem = function () {
}
SAPB1.UserGroupByUserItem.prototype = new SAPB1.ComplexType();
SAPB1.UserGroupByUserItem.prototype.constructor = SAPB1.UserGroupByUserItem;
SAPB1.UserGroupByUserItem.USERId = { valueOf: function(){return 'USERId';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserGroupByUserItem.GroupId = { valueOf: function(){return 'GroupId';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserGroupByUserItem.StartDate = { valueOf: function(){return 'StartDate';}, Type: 'Edm.DateTime', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserGroupByUserItem.DueDate = { valueOf: function(){return 'DueDate';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserGroupByUserItem.prototype.USERId = new Number();
SAPB1.UserGroupByUserItem.prototype.GroupId = new Number();
SAPB1.UserGroupByUserItem.prototype.StartDate = new String();
SAPB1.UserGroupByUserItem.prototype.DueDate = new String();



SAPB1.UserGroupByUserItem.create = function (rawObject) {
    var instance = new SAPB1.UserGroupByUserItem();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.UserGroupByUserItem.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.UserGroupByUserItem;
