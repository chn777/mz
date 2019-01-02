

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DeductionTaxSubGroupParams = function () {
}
SAPB1.DeductionTaxSubGroupParams.prototype = new SAPB1.ComplexType();
SAPB1.DeductionTaxSubGroupParams.prototype.constructor = SAPB1.DeductionTaxSubGroupParams;
SAPB1.DeductionTaxSubGroupParams.GroupCode = { valueOf: function(){return 'GroupCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DeductionTaxSubGroupParams.GroupName = { valueOf: function(){return 'GroupName';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DeductionTaxSubGroupParams.prototype.GroupCode = new String();
SAPB1.DeductionTaxSubGroupParams.prototype.GroupName = new String();



SAPB1.DeductionTaxSubGroupParams.create = function (rawObject) {
    var instance = new SAPB1.DeductionTaxSubGroupParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DeductionTaxSubGroupParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DeductionTaxSubGroupParams;
