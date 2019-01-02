var WTDValueRange = require('ComplexType/WTDValueRange')
var WTDValueRangeCollection = require('ComplexType/WTDValueRangeCollection')


var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.WTDEffectiveDate = function () {
}
SAPB1.WTDEffectiveDate.prototype = new SAPB1.ComplexType();
SAPB1.WTDEffectiveDate.prototype.constructor = SAPB1.WTDEffectiveDate;
SAPB1.WTDEffectiveDate.LineNumber = { valueOf: function(){return 'LineNumber';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTDEffectiveDate.EffectiveFrom = { valueOf: function(){return 'EffectiveFrom';}, Type: 'Edm.DateTime', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTDEffectiveDate.Rate = { valueOf: function(){return 'Rate';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTDEffectiveDate.WTDValueRangeCollection = { valueOf: function(){return 'WTDValueRangeCollection';}, Type: 'WTDValueRange', Index: 3, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.WTDEffectiveDate.prototype.LineNumber = new Number();
SAPB1.WTDEffectiveDate.prototype.EffectiveFrom = new String();
SAPB1.WTDEffectiveDate.prototype.Rate = new Number();
SAPB1.WTDEffectiveDate.prototype.WTDValueRangeCollection = new WTDValueRangeCollection();

SAPB1.WTDEffectiveDate.WTDValueRange = WTDValueRange
SAPB1.WTDEffectiveDate.WTDValueRangeCollection = WTDValueRangeCollection


SAPB1.WTDEffectiveDate.create = function (rawObject) {
    var instance = new SAPB1.WTDEffectiveDate();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.WTDEffectiveDate.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.WTDEffectiveDate;
