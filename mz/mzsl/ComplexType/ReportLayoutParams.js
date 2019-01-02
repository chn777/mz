
var ReportLayoutCategoryEnum = require('EnumType/ReportLayoutCategoryEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ReportLayoutParams = function () {
}
SAPB1.ReportLayoutParams.prototype = new SAPB1.ComplexType();
SAPB1.ReportLayoutParams.prototype.constructor = SAPB1.ReportLayoutParams;
SAPB1.ReportLayoutParams.LayoutCode = { valueOf: function(){return 'LayoutCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutParams.LayoutName = { valueOf: function(){return 'LayoutName';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutParams.Category = { valueOf: function(){return 'Category';}, Type: 'ReportLayoutCategoryEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ReportLayoutParams.prototype.LayoutCode = new String();
SAPB1.ReportLayoutParams.prototype.LayoutName = new String();
SAPB1.ReportLayoutParams.prototype.Category = new String();


SAPB1.ReportLayoutParams.ReportLayoutCategoryEnum = ReportLayoutCategoryEnum

SAPB1.ReportLayoutParams.create = function (rawObject) {
    var instance = new SAPB1.ReportLayoutParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ReportLayoutParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ReportLayoutParams;
