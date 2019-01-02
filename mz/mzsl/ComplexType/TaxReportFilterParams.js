
var TaxReportFilterType = require('EnumType/TaxReportFilterType')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.TaxReportFilterParams = function () {
}
SAPB1.TaxReportFilterParams.prototype = new SAPB1.ComplexType();
SAPB1.TaxReportFilterParams.prototype.constructor = SAPB1.TaxReportFilterParams;
SAPB1.TaxReportFilterParams.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxReportFilterParams.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.TaxReportFilterParams.FilterType = { valueOf: function(){return 'FilterType';}, Type: 'TaxReportFilterType', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TaxReportFilterParams.prototype.Code = new Number();
SAPB1.TaxReportFilterParams.prototype.Name = new String();
SAPB1.TaxReportFilterParams.prototype.FilterType = new String();


SAPB1.TaxReportFilterParams.TaxReportFilterType = TaxReportFilterType

SAPB1.TaxReportFilterParams.create = function (rawObject) {
    var instance = new SAPB1.TaxReportFilterParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.TaxReportFilterParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.TaxReportFilterParams;
