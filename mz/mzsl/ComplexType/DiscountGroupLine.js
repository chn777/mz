
var DiscountGroupBaseObjectEnum = require('EnumType/DiscountGroupBaseObjectEnum')
var DiscountGroupDiscountTypeEnum = require('EnumType/DiscountGroupDiscountTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DiscountGroupLine = function () {
}
SAPB1.DiscountGroupLine.prototype = new SAPB1.ComplexType();
SAPB1.DiscountGroupLine.prototype.constructor = SAPB1.DiscountGroupLine;
SAPB1.DiscountGroupLine.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.DiscountGroupLine.ObjectType = { valueOf: function(){return 'ObjectType';}, Type: 'DiscountGroupBaseObjectEnum', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DiscountGroupLine.ObjectCode = { valueOf: function(){return 'ObjectCode';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DiscountGroupLine.DiscountType = { valueOf: function(){return 'DiscountType';}, Type: 'DiscountGroupDiscountTypeEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DiscountGroupLine.Discount = { valueOf: function(){return 'Discount';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DiscountGroupLine.PaidQuantity = { valueOf: function(){return 'PaidQuantity';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DiscountGroupLine.FreeQuantity = { valueOf: function(){return 'FreeQuantity';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DiscountGroupLine.MaximumFreeQuantity = { valueOf: function(){return 'MaximumFreeQuantity';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DiscountGroupLine.prototype.AbsEntry = new Number();
SAPB1.DiscountGroupLine.prototype.ObjectType = new String();
SAPB1.DiscountGroupLine.prototype.ObjectCode = new String();
SAPB1.DiscountGroupLine.prototype.DiscountType = new String();
SAPB1.DiscountGroupLine.prototype.Discount = new Number();
SAPB1.DiscountGroupLine.prototype.PaidQuantity = new Number();
SAPB1.DiscountGroupLine.prototype.FreeQuantity = new Number();
SAPB1.DiscountGroupLine.prototype.MaximumFreeQuantity = new Number();


SAPB1.DiscountGroupLine.DiscountGroupBaseObjectEnum = DiscountGroupBaseObjectEnum
SAPB1.DiscountGroupLine.DiscountGroupDiscountTypeEnum = DiscountGroupDiscountTypeEnum

SAPB1.DiscountGroupLine.create = function (rawObject) {
    var instance = new SAPB1.DiscountGroupLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DiscountGroupLine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DiscountGroupLine;
