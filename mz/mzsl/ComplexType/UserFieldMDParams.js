

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.UserFieldMDParams = function () {
}
SAPB1.UserFieldMDParams.prototype = new SAPB1.ComplexType();
SAPB1.UserFieldMDParams.prototype.constructor = SAPB1.UserFieldMDParams;
SAPB1.UserFieldMDParams.TableName = { valueOf: function(){return 'TableName';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserFieldMDParams.FieldID = { valueOf: function(){return 'FieldID';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UserFieldMDParams.prototype.TableName = new String();
SAPB1.UserFieldMDParams.prototype.FieldID = new Number();



SAPB1.UserFieldMDParams.create = function (rawObject) {
    var instance = new SAPB1.UserFieldMDParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.UserFieldMDParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.UserFieldMDParams;
