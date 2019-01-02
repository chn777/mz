

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.UserQueryParams = function () {
}
SAPB1.UserQueryParams.prototype = new SAPB1.ComplexType();
SAPB1.UserQueryParams.prototype.constructor = SAPB1.UserQueryParams;
SAPB1.UserQueryParams.InternalKey = { valueOf: function(){return 'InternalKey';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserQueryParams.QueryCategory = { valueOf: function(){return 'QueryCategory';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserQueryParams.prototype.InternalKey = new Number();
SAPB1.UserQueryParams.prototype.QueryCategory = new Number();



SAPB1.UserQueryParams.create = function (rawObject) {
    var instance = new SAPB1.UserQueryParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.UserQueryParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.UserQueryParams;
