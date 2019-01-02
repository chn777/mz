

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.WIPMapping = function () {
}
SAPB1.WIPMapping.prototype = new SAPB1.ComplexType();
SAPB1.WIPMapping.prototype.constructor = SAPB1.WIPMapping;
SAPB1.WIPMapping.AbsoluteEntry = { valueOf: function(){return 'AbsoluteEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.WIPMapping.LineNumber = { valueOf: function(){return 'LineNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.WIPMapping.AccountFrom = { valueOf: function(){return 'AccountFrom';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WIPMapping.AccountTo = { valueOf: function(){return 'AccountTo';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WIPMapping.prototype.AbsoluteEntry = new Number();
SAPB1.WIPMapping.prototype.LineNumber = new Number();
SAPB1.WIPMapping.prototype.AccountFrom = new String();
SAPB1.WIPMapping.prototype.AccountTo = new String();



SAPB1.WIPMapping.create = function (rawObject) {
    var instance = new SAPB1.WIPMapping();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.WIPMapping.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.WIPMapping;
