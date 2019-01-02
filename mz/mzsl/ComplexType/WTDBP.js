
var WTDDetailType = require('EnumType/WTDDetailType')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.WTDBP = function () {
}
SAPB1.WTDBP.prototype = new SAPB1.ComplexType();
SAPB1.WTDBP.prototype.constructor = SAPB1.WTDBP;
SAPB1.WTDBP.BPKeyPart1 = { valueOf: function(){return 'BPKeyPart1';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTDBP.BPKeyPart2 = { valueOf: function(){return 'BPKeyPart2';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTDBP.WTaxCode = { valueOf: function(){return 'WTaxCode';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTDBP.EffectiveDateFrom = { valueOf: function(){return 'EffectiveDateFrom';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTDBP.EffectiveDateTo = { valueOf: function(){return 'EffectiveDateTo';}, Type: 'Edm.DateTime', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTDBP.Rate = { valueOf: function(){return 'Rate';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTDBP.DetailType = { valueOf: function(){return 'DetailType';}, Type: 'WTDDetailType', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WTDBP.prototype.BPKeyPart1 = new String();
SAPB1.WTDBP.prototype.BPKeyPart2 = new String();
SAPB1.WTDBP.prototype.WTaxCode = new String();
SAPB1.WTDBP.prototype.EffectiveDateFrom = new String();
SAPB1.WTDBP.prototype.EffectiveDateTo = new String();
SAPB1.WTDBP.prototype.Rate = new Number();
SAPB1.WTDBP.prototype.DetailType = new String();


SAPB1.WTDBP.WTDDetailType = WTDDetailType

SAPB1.WTDBP.create = function (rawObject) {
    var instance = new SAPB1.WTDBP();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.WTDBP.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.WTDBP;
