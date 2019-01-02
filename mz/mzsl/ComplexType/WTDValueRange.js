

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.WTDValueRange = function () {
}
SAPB1.WTDValueRange.prototype = new SAPB1.ComplexType();
SAPB1.WTDValueRange.prototype.constructor = SAPB1.WTDValueRange;
SAPB1.WTDValueRange.LineNumber = { valueOf: function(){return 'LineNumber';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTDValueRange.SeqNum = { valueOf: function(){return 'SeqNum';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTDValueRange.EffectiveFrom = { valueOf: function(){return 'EffectiveFrom';}, Type: 'Edm.DateTime', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTDValueRange.ValueFrom = { valueOf: function(){return 'ValueFrom';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTDValueRange.Rate = { valueOf: function(){return 'Rate';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTDValueRange.prototype.LineNumber = new Number();
SAPB1.WTDValueRange.prototype.SeqNum = new Number();
SAPB1.WTDValueRange.prototype.EffectiveFrom = new String();
SAPB1.WTDValueRange.prototype.ValueFrom = new Number();
SAPB1.WTDValueRange.prototype.Rate = new Number();



SAPB1.WTDValueRange.create = function (rawObject) {
    var instance = new SAPB1.WTDValueRange();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.WTDValueRange.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.WTDValueRange;
