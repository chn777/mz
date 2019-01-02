

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DeductionTaxSubGroup = function () {
}
SAPB1.DeductionTaxSubGroup.prototype = new SAPB1.EntityType();
SAPB1.DeductionTaxSubGroup.prototype.constructor = SAPB1.DeductionTaxSubGroup;
SAPB1.DeductionTaxSubGroup.prototype.keys.push('GroupCode');
SAPB1.DeductionTaxSubGroup.GroupCode = { valueOf: function(){return 'GroupCode';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.DeductionTaxSubGroup.GroupName = { valueOf: function(){return 'GroupName';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DeductionTaxSubGroup.prototype.GroupCode = new String();
SAPB1.DeductionTaxSubGroup.prototype.GroupName = new String();



SAPB1.DeductionTaxSubGroup.create = function (rawObject) {
    var instance = new SAPB1.DeductionTaxSubGroup();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DeductionTaxSubGroup.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DeductionTaxSubGroup;
