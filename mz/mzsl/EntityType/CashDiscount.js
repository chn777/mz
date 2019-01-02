var DiscountLine = require('ComplexType/DiscountLine')
var DiscountLineCollection = require('ComplexType/DiscountLineCollection')

var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.CashDiscount = function () {
}
SAPB1.CashDiscount.prototype = new SAPB1.EntityType();
SAPB1.CashDiscount.prototype.constructor = SAPB1.CashDiscount;
SAPB1.CashDiscount.prototype.keys.push('Code');
SAPB1.CashDiscount.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.CashDiscount.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CashDiscount.ByDate = { valueOf: function(){return 'ByDate';}, Type: 'BoYesNoEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CashDiscount.Freight = { valueOf: function(){return 'Freight';}, Type: 'BoYesNoEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CashDiscount.Tax = { valueOf: function(){return 'Tax';}, Type: 'BoYesNoEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CashDiscount.DiscountLines = { valueOf: function(){return 'DiscountLines';}, Type: 'DiscountLine', Index: 5, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.CashDiscount.prototype.Code = new String();
SAPB1.CashDiscount.prototype.Name = new String();
SAPB1.CashDiscount.prototype.ByDate = new String();
SAPB1.CashDiscount.prototype.Freight = new String();
SAPB1.CashDiscount.prototype.Tax = new String();
SAPB1.CashDiscount.prototype.DiscountLines = new DiscountLineCollection();

SAPB1.CashDiscount.DiscountLine = DiscountLine
SAPB1.CashDiscount.DiscountLineCollection = DiscountLineCollection

SAPB1.CashDiscount.BoYesNoEnum = BoYesNoEnum

SAPB1.CashDiscount.create = function (rawObject) {
    var instance = new SAPB1.CashDiscount();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.CashDiscount.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.CashDiscount;
