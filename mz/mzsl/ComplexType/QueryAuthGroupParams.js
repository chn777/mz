

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.QueryAuthGroupParams = function () {
}
SAPB1.QueryAuthGroupParams.prototype = new SAPB1.ComplexType();
SAPB1.QueryAuthGroupParams.prototype.constructor = SAPB1.QueryAuthGroupParams;
SAPB1.QueryAuthGroupParams.AuthGroupId = { valueOf: function(){return 'AuthGroupId';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.QueryAuthGroupParams.AuthGroupCode = { valueOf: function(){return 'AuthGroupCode';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.QueryAuthGroupParams.prototype.AuthGroupId = new Number();
SAPB1.QueryAuthGroupParams.prototype.AuthGroupCode = new String();



SAPB1.QueryAuthGroupParams.create = function (rawObject) {
    var instance = new SAPB1.QueryAuthGroupParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.QueryAuthGroupParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.QueryAuthGroupParams;
