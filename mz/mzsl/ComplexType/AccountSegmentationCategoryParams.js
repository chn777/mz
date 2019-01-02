

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.AccountSegmentationCategoryParams = function () {
}
SAPB1.AccountSegmentationCategoryParams.prototype = new SAPB1.ComplexType();
SAPB1.AccountSegmentationCategoryParams.prototype.constructor = SAPB1.AccountSegmentationCategoryParams;
SAPB1.AccountSegmentationCategoryParams.SegmentID = { valueOf: function(){return 'SegmentID';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AccountSegmentationCategoryParams.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.AccountSegmentationCategoryParams.prototype.SegmentID = new Number();
SAPB1.AccountSegmentationCategoryParams.prototype.Code = new String();



SAPB1.AccountSegmentationCategoryParams.create = function (rawObject) {
    var instance = new SAPB1.AccountSegmentationCategoryParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.AccountSegmentationCategoryParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.AccountSegmentationCategoryParams;
