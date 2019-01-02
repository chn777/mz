
var BoChangeLogEnum = require('EnumType/BoChangeLogEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ShowDifferenceParams = function () {
}
SAPB1.ShowDifferenceParams.prototype = new SAPB1.ComplexType();
SAPB1.ShowDifferenceParams.prototype.constructor = SAPB1.ShowDifferenceParams;
SAPB1.ShowDifferenceParams.PrimaryKey = { valueOf: function(){return 'PrimaryKey';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ShowDifferenceParams.UDOObjectCode = { valueOf: function(){return 'UDOObjectCode';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ShowDifferenceParams.Object = { valueOf: function(){return 'Object';}, Type: 'BoChangeLogEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ShowDifferenceParams.LogInstance2 = { valueOf: function(){return 'LogInstance2';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ShowDifferenceParams.LogInstance = { valueOf: function(){return 'LogInstance';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ShowDifferenceParams.prototype.PrimaryKey = new String();
SAPB1.ShowDifferenceParams.prototype.UDOObjectCode = new String();
SAPB1.ShowDifferenceParams.prototype.Object = new String();
SAPB1.ShowDifferenceParams.prototype.LogInstance2 = new Number();
SAPB1.ShowDifferenceParams.prototype.LogInstance = new Number();


SAPB1.ShowDifferenceParams.BoChangeLogEnum = BoChangeLogEnum

SAPB1.ShowDifferenceParams.create = function (rawObject) {
    var instance = new SAPB1.ShowDifferenceParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ShowDifferenceParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ShowDifferenceParams;
