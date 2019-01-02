
var TaxCodeDeterminationTCDDefaultWTTypeEnum = require('EnumType/TaxCodeDeterminationTCDDefaultWTTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.TaxCodeDeterminationTCDDefaultWT = function () {
}
SAPB1.TaxCodeDeterminationTCDDefaultWT.prototype = new SAPB1.ComplexType();
SAPB1.TaxCodeDeterminationTCDDefaultWT.prototype.constructor = SAPB1.TaxCodeDeterminationTCDDefaultWT;
SAPB1.TaxCodeDeterminationTCDDefaultWT.AbsId = { valueOf: function(){return 'AbsId';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCDDefaultWT.WTCode = { valueOf: function(){return 'WTCode';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCDDefaultWT.Type = { valueOf: function(){return 'Type';}, Type: 'TaxCodeDeterminationTCDDefaultWTTypeEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxCodeDeterminationTCDDefaultWT.prototype.AbsId = new Number();
SAPB1.TaxCodeDeterminationTCDDefaultWT.prototype.WTCode = new String();
SAPB1.TaxCodeDeterminationTCDDefaultWT.prototype.Type = new String();


SAPB1.TaxCodeDeterminationTCDDefaultWT.TaxCodeDeterminationTCDDefaultWTTypeEnum = TaxCodeDeterminationTCDDefaultWTTypeEnum

SAPB1.TaxCodeDeterminationTCDDefaultWT.create = function (rawObject) {
    var instance = new SAPB1.TaxCodeDeterminationTCDDefaultWT();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.TaxCodeDeterminationTCDDefaultWT.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.TaxCodeDeterminationTCDDefaultWT;
