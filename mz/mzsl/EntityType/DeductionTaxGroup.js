
var BoDeductionTaxGroupCodeEnum = require('EnumType/BoDeductionTaxGroupCodeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.DeductionTaxGroup = function () {
}
SAPB1.DeductionTaxGroup.prototype = new SAPB1.EntityType();
SAPB1.DeductionTaxGroup.prototype.constructor = SAPB1.DeductionTaxGroup;
SAPB1.DeductionTaxGroup.prototype.keys.push('GroupKey');
SAPB1.DeductionTaxGroup.GroupKey = { valueOf: function(){return 'GroupKey';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.DeductionTaxGroup.GroupCode = { valueOf: function(){return 'GroupCode';}, Type: 'BoDeductionTaxGroupCodeEnum', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.DeductionTaxGroup.GroupName = { valueOf: function(){return 'GroupName';}, Type: 'Edm.String', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.DeductionTaxGroup.MaxRedin = { valueOf: function(){return 'MaxRedin';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.DeductionTaxGroup.GroupExtendedCode = { valueOf: function(){return 'GroupExtendedCode';}, Type: 'Edm.String', Index: 4, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.DeductionTaxGroup.prototype.GroupKey = new Number();
SAPB1.DeductionTaxGroup.prototype.GroupCode = new String();
SAPB1.DeductionTaxGroup.prototype.GroupName = new String();
SAPB1.DeductionTaxGroup.prototype.MaxRedin = new Number();
SAPB1.DeductionTaxGroup.prototype.GroupExtendedCode = new String();


SAPB1.DeductionTaxGroup.BoDeductionTaxGroupCodeEnum = BoDeductionTaxGroupCodeEnum

SAPB1.DeductionTaxGroup.create = function (rawObject) {
    var instance = new SAPB1.DeductionTaxGroup();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.DeductionTaxGroup.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.DeductionTaxGroup;
