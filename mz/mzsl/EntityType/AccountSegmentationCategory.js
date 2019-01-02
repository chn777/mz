

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.AccountSegmentationCategory = function () {
}
SAPB1.AccountSegmentationCategory.prototype = new SAPB1.EntityType();
SAPB1.AccountSegmentationCategory.prototype.constructor = SAPB1.AccountSegmentationCategory;
SAPB1.AccountSegmentationCategory.prototype.keys.push('SegmentID','Code');
SAPB1.AccountSegmentationCategory.SegmentID = { valueOf: function(){return 'SegmentID';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.AccountSegmentationCategory.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.AccountSegmentationCategory.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AccountSegmentationCategory.ShortName = { valueOf: function(){return 'ShortName';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AccountSegmentationCategory.prototype.SegmentID = new Number();
SAPB1.AccountSegmentationCategory.prototype.Code = new String();
SAPB1.AccountSegmentationCategory.prototype.Name = new String();
SAPB1.AccountSegmentationCategory.prototype.ShortName = new String();



SAPB1.AccountSegmentationCategory.create = function (rawObject) {
    var instance = new SAPB1.AccountSegmentationCategory();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.AccountSegmentationCategory.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.AccountSegmentationCategory;
