var AccountSegmentationsCategory = require('ComplexType/AccountSegmentationsCategory')
var AccountSegmentationsCategoryCollection = require('ComplexType/AccountSegmentationsCategoryCollection')

var AccountSegmentationTypeEnum = require('EnumType/AccountSegmentationTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.AccountSegmentation = function () {
}
SAPB1.AccountSegmentation.prototype = new SAPB1.EntityType();
SAPB1.AccountSegmentation.prototype.constructor = SAPB1.AccountSegmentation;
SAPB1.AccountSegmentation.prototype.keys.push('Numerator');
SAPB1.AccountSegmentation.Numerator = { valueOf: function(){return 'Numerator';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.AccountSegmentation.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AccountSegmentation.Size = { valueOf: function(){return 'Size';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AccountSegmentation.Type = { valueOf: function(){return 'Type';}, Type: 'AccountSegmentationTypeEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AccountSegmentation.AccountSegmentationsCategories = { valueOf: function(){return 'AccountSegmentationsCategories';}, Type: 'AccountSegmentationsCategory', Index: 4, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.AccountSegmentation.prototype.Numerator = new Number();
SAPB1.AccountSegmentation.prototype.Name = new String();
SAPB1.AccountSegmentation.prototype.Size = new Number();
SAPB1.AccountSegmentation.prototype.Type = new String();
SAPB1.AccountSegmentation.prototype.AccountSegmentationsCategories = new AccountSegmentationsCategoryCollection();

SAPB1.AccountSegmentation.AccountSegmentationsCategory = AccountSegmentationsCategory
SAPB1.AccountSegmentation.AccountSegmentationsCategoryCollection = AccountSegmentationsCategoryCollection

SAPB1.AccountSegmentation.AccountSegmentationTypeEnum = AccountSegmentationTypeEnum

SAPB1.AccountSegmentation.create = function (rawObject) {
    var instance = new SAPB1.AccountSegmentation();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.AccountSegmentation.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.AccountSegmentation;
