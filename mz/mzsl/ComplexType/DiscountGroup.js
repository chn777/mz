
var DiscountGroupBaseObjectEnum = require('EnumType/DiscountGroupBaseObjectEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DiscountGroup = function () {
}
SAPB1.DiscountGroup.prototype = new SAPB1.ComplexType();
SAPB1.DiscountGroup.prototype.constructor = SAPB1.DiscountGroup;
SAPB1.DiscountGroup.ObjectEntry = { valueOf: function(){return 'ObjectEntry';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DiscountGroup.DiscountPercentage = { valueOf: function(){return 'DiscountPercentage';}, Type: 'Edm.Double', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DiscountGroup.BPCode = { valueOf: function(){return 'BPCode';}, Type: 'Edm.String', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.DiscountGroup.BaseObjectType = { valueOf: function(){return 'BaseObjectType';}, Type: 'DiscountGroupBaseObjectEnum', Index: 3, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.DiscountGroup.prototype.ObjectEntry = new String();
SAPB1.DiscountGroup.prototype.DiscountPercentage = new Number();
SAPB1.DiscountGroup.prototype.BPCode = new String();
SAPB1.DiscountGroup.prototype.BaseObjectType = new String();


SAPB1.DiscountGroup.DiscountGroupBaseObjectEnum = DiscountGroupBaseObjectEnum

SAPB1.DiscountGroup.create = function (rawObject) {
    var instance = new SAPB1.DiscountGroup();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DiscountGroup.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DiscountGroup;
