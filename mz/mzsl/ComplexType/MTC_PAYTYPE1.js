

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.MTC_PAYTYPE1 = function () {
}
SAPB1.MTC_PAYTYPE1.prototype = new SAPB1.ComplexType();
SAPB1.MTC_PAYTYPE1.prototype.constructor = SAPB1.MTC_PAYTYPE1;
SAPB1.MTC_PAYTYPE1.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.MTC_PAYTYPE1.LineId = { valueOf: function(){return 'LineId';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.MTC_PAYTYPE1.Object = { valueOf: function(){return 'Object';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_PAYTYPE1.LogInst = { valueOf: function(){return 'LogInst';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_PAYTYPE1.prototype.Code = new String();
SAPB1.MTC_PAYTYPE1.prototype.LineId = new Number();
SAPB1.MTC_PAYTYPE1.prototype.Object = new String();
SAPB1.MTC_PAYTYPE1.prototype.LogInst = new Number();



SAPB1.MTC_PAYTYPE1.create = function (rawObject) {
    var instance = new SAPB1.MTC_PAYTYPE1();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.MTC_PAYTYPE1.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.MTC_PAYTYPE1;
