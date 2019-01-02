

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DynamicSystemStringParams = function () {
}
SAPB1.DynamicSystemStringParams.prototype = new SAPB1.ComplexType();
SAPB1.DynamicSystemStringParams.prototype.constructor = SAPB1.DynamicSystemStringParams;
SAPB1.DynamicSystemStringParams.FormID = { valueOf: function(){return 'FormID';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DynamicSystemStringParams.ItemID = { valueOf: function(){return 'ItemID';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DynamicSystemStringParams.ColumnID = { valueOf: function(){return 'ColumnID';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DynamicSystemStringParams.prototype.FormID = new String();
SAPB1.DynamicSystemStringParams.prototype.ItemID = new String();
SAPB1.DynamicSystemStringParams.prototype.ColumnID = new String();



SAPB1.DynamicSystemStringParams.create = function (rawObject) {
    var instance = new SAPB1.DynamicSystemStringParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DynamicSystemStringParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DynamicSystemStringParams;
