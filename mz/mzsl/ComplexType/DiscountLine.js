

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DiscountLine = function () {
}
SAPB1.DiscountLine.prototype = new SAPB1.ComplexType();
SAPB1.DiscountLine.prototype.constructor = SAPB1.DiscountLine;
SAPB1.DiscountLine.DiscountCode = { valueOf: function(){return 'DiscountCode';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.DiscountLine.LineId = { valueOf: function(){return 'LineId';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.DiscountLine.NumOfDays = { valueOf: function(){return 'NumOfDays';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DiscountLine.Discount = { valueOf: function(){return 'Discount';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DiscountLine.Day = { valueOf: function(){return 'Day';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DiscountLine.Month = { valueOf: function(){return 'Month';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DiscountLine.prototype.DiscountCode = new String();
SAPB1.DiscountLine.prototype.LineId = new Number();
SAPB1.DiscountLine.prototype.NumOfDays = new Number();
SAPB1.DiscountLine.prototype.Discount = new Number();
SAPB1.DiscountLine.prototype.Day = new Number();
SAPB1.DiscountLine.prototype.Month = new Number();



SAPB1.DiscountLine.create = function (rawObject) {
    var instance = new SAPB1.DiscountLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DiscountLine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DiscountLine;
