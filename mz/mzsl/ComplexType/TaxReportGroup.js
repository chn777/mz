
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.TaxReportGroup = function () {
}
SAPB1.TaxReportGroup.prototype = new SAPB1.ComplexType();
SAPB1.TaxReportGroup.prototype.constructor = SAPB1.TaxReportGroup;
SAPB1.TaxReportGroup.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxReportGroup.Sum = { valueOf: function(){return 'Sum';}, Type: 'BoYesNoEnum', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxReportGroup.prototype.Code = new String();
SAPB1.TaxReportGroup.prototype.Sum = new String();


SAPB1.TaxReportGroup.BoYesNoEnum = BoYesNoEnum

SAPB1.TaxReportGroup.create = function (rawObject) {
    var instance = new SAPB1.TaxReportGroup();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.TaxReportGroup.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.TaxReportGroup;
