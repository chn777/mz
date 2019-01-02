

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DeductionTaxGroupParams = function () {
}
SAPB1.DeductionTaxGroupParams.prototype = new SAPB1.ComplexType();
SAPB1.DeductionTaxGroupParams.prototype.constructor = SAPB1.DeductionTaxGroupParams;
SAPB1.DeductionTaxGroupParams.GroupKey = { valueOf: function(){return 'GroupKey';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DeductionTaxGroupParams.prototype.GroupKey = new Number();



SAPB1.DeductionTaxGroupParams.create = function (rawObject) {
    var instance = new SAPB1.DeductionTaxGroupParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DeductionTaxGroupParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DeductionTaxGroupParams;
