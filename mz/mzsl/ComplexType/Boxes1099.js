

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.Boxes1099 = function () {
}
SAPB1.Boxes1099.prototype = new SAPB1.ComplexType();
SAPB1.Boxes1099.prototype.constructor = SAPB1.Boxes1099;
SAPB1.Boxes1099.FormCode = { valueOf: function(){return 'FormCode';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.Boxes1099.Box1099 = { valueOf: function(){return 'Box1099';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Boxes1099.BoxDescription = { valueOf: function(){return 'BoxDescription';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Boxes1099.Minimum1099Amount = { valueOf: function(){return 'Minimum1099Amount';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Boxes1099.prototype.FormCode = new Number();
SAPB1.Boxes1099.prototype.Box1099 = new String();
SAPB1.Boxes1099.prototype.BoxDescription = new String();
SAPB1.Boxes1099.prototype.Minimum1099Amount = new Number();



SAPB1.Boxes1099.create = function (rawObject) {
    var instance = new SAPB1.Boxes1099();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.Boxes1099.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.Boxes1099;
