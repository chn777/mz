
var AccountCategorySourceEnum = require('EnumType/AccountCategorySourceEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.AccountCategory = function () {
}
SAPB1.AccountCategory.prototype = new SAPB1.EntityType();
SAPB1.AccountCategory.prototype.constructor = SAPB1.AccountCategory;
SAPB1.AccountCategory.prototype.keys.push('CategoryCode');
SAPB1.AccountCategory.CategoryCode = { valueOf: function(){return 'CategoryCode';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.AccountCategory.CategoryName = { valueOf: function(){return 'CategoryName';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.AccountCategory.CategorySource = { valueOf: function(){return 'CategorySource';}, Type: 'AccountCategorySourceEnum', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.AccountCategory.prototype.CategoryCode = new Number();
SAPB1.AccountCategory.prototype.CategoryName = new String();
SAPB1.AccountCategory.prototype.CategorySource = new String();


SAPB1.AccountCategory.AccountCategorySourceEnum = AccountCategorySourceEnum

SAPB1.AccountCategory.create = function (rawObject) {
    var instance = new SAPB1.AccountCategory();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.AccountCategory.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.AccountCategory;
