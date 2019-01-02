
var BoChangeLogEnum = require('EnumType/BoChangeLogEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.GetChangeLogParams = function () {
}
SAPB1.GetChangeLogParams.prototype = new SAPB1.ComplexType();
SAPB1.GetChangeLogParams.prototype.constructor = SAPB1.GetChangeLogParams;
SAPB1.GetChangeLogParams.PrimaryKey = { valueOf: function(){return 'PrimaryKey';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GetChangeLogParams.UDOObjectCode = { valueOf: function(){return 'UDOObjectCode';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GetChangeLogParams.Object = { valueOf: function(){return 'Object';}, Type: 'BoChangeLogEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GetChangeLogParams.prototype.PrimaryKey = new String();
SAPB1.GetChangeLogParams.prototype.UDOObjectCode = new String();
SAPB1.GetChangeLogParams.prototype.Object = new String();


SAPB1.GetChangeLogParams.BoChangeLogEnum = BoChangeLogEnum

SAPB1.GetChangeLogParams.create = function (rawObject) {
    var instance = new SAPB1.GetChangeLogParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.GetChangeLogParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.GetChangeLogParams;
