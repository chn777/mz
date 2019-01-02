

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.AccountSegmentationsCategory = function () {
}
SAPB1.AccountSegmentationsCategory.prototype = new SAPB1.ComplexType();
SAPB1.AccountSegmentationsCategory.prototype.constructor = SAPB1.AccountSegmentationsCategory;
SAPB1.AccountSegmentationsCategory.SegmentID = { valueOf: function(){return 'SegmentID';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AccountSegmentationsCategory.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AccountSegmentationsCategory.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AccountSegmentationsCategory.ShortName = { valueOf: function(){return 'ShortName';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AccountSegmentationsCategory.prototype.SegmentID = new Number();
SAPB1.AccountSegmentationsCategory.prototype.Code = new String();
SAPB1.AccountSegmentationsCategory.prototype.Name = new String();
SAPB1.AccountSegmentationsCategory.prototype.ShortName = new String();



SAPB1.AccountSegmentationsCategory.create = function (rawObject) {
    var instance = new SAPB1.AccountSegmentationsCategory();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.AccountSegmentationsCategory.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.AccountSegmentationsCategory;
