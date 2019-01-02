

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.QueryCategory = function () {
}
SAPB1.QueryCategory.prototype = new SAPB1.EntityType();
SAPB1.QueryCategory.prototype.constructor = SAPB1.QueryCategory;
SAPB1.QueryCategory.prototype.keys.push('Code');
SAPB1.QueryCategory.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.QueryCategory.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.QueryCategory.Permissions = { valueOf: function(){return 'Permissions';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.QueryCategory.prototype.Code = new Number();
SAPB1.QueryCategory.prototype.Name = new String();
SAPB1.QueryCategory.prototype.Permissions = new String();



SAPB1.QueryCategory.create = function (rawObject) {
    var instance = new SAPB1.QueryCategory();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.QueryCategory.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.QueryCategory;
