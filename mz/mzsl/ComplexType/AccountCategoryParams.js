

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.AccountCategoryParams = function () {
}
SAPB1.AccountCategoryParams.prototype = new SAPB1.ComplexType();
SAPB1.AccountCategoryParams.prototype.constructor = SAPB1.AccountCategoryParams;
SAPB1.AccountCategoryParams.CategoryCode = { valueOf: function(){return 'CategoryCode';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AccountCategoryParams.CategoryName = { valueOf: function(){return 'CategoryName';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.AccountCategoryParams.prototype.CategoryCode = new Number();
SAPB1.AccountCategoryParams.prototype.CategoryName = new String();



SAPB1.AccountCategoryParams.create = function (rawObject) {
    var instance = new SAPB1.AccountCategoryParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.AccountCategoryParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.AccountCategoryParams;
