

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.UserKeyParams = function () {
}
SAPB1.UserKeyParams.prototype = new SAPB1.ComplexType();
SAPB1.UserKeyParams.prototype.constructor = SAPB1.UserKeyParams;
SAPB1.UserKeyParams.TableName = { valueOf: function(){return 'TableName';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserKeyParams.KeyIndex = { valueOf: function(){return 'KeyIndex';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserKeyParams.prototype.TableName = new String();
SAPB1.UserKeyParams.prototype.KeyIndex = new Number();



SAPB1.UserKeyParams.create = function (rawObject) {
    var instance = new SAPB1.UserKeyParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.UserKeyParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.UserKeyParams;
