

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.FinancePeriodParams = function () {
}
SAPB1.FinancePeriodParams.prototype = new SAPB1.ComplexType();
SAPB1.FinancePeriodParams.prototype.constructor = SAPB1.FinancePeriodParams;
SAPB1.FinancePeriodParams.AbsoluteEntry = { valueOf: function(){return 'AbsoluteEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FinancePeriodParams.PeriodIndicator = { valueOf: function(){return 'PeriodIndicator';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.FinancePeriodParams.prototype.AbsoluteEntry = new Number();
SAPB1.FinancePeriodParams.prototype.PeriodIndicator = new String();



SAPB1.FinancePeriodParams.create = function (rawObject) {
    var instance = new SAPB1.FinancePeriodParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.FinancePeriodParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.FinancePeriodParams;
