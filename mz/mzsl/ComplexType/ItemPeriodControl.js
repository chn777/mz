
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ItemPeriodControl = function () {
}
SAPB1.ItemPeriodControl.prototype = new SAPB1.ComplexType();
SAPB1.ItemPeriodControl.prototype.constructor = SAPB1.ItemPeriodControl;
SAPB1.ItemPeriodControl.FiscalYear = { valueOf: function(){return 'FiscalYear';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemPeriodControl.DepreciationArea = { valueOf: function(){return 'DepreciationArea';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemPeriodControl.SubPeriod = { valueOf: function(){return 'SubPeriod';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemPeriodControl.DepreciationStatus = { valueOf: function(){return 'DepreciationStatus';}, Type: 'BoYesNoEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemPeriodControl.Factor = { valueOf: function(){return 'Factor';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemPeriodControl.ActualUnits = { valueOf: function(){return 'ActualUnits';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ItemPeriodControl.prototype.FiscalYear = new String();
SAPB1.ItemPeriodControl.prototype.DepreciationArea = new String();
SAPB1.ItemPeriodControl.prototype.SubPeriod = new Number();
SAPB1.ItemPeriodControl.prototype.DepreciationStatus = new String();
SAPB1.ItemPeriodControl.prototype.Factor = new Number();
SAPB1.ItemPeriodControl.prototype.ActualUnits = new Number();


SAPB1.ItemPeriodControl.BoYesNoEnum = BoYesNoEnum

SAPB1.ItemPeriodControl.create = function (rawObject) {
    var instance = new SAPB1.ItemPeriodControl();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ItemPeriodControl.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ItemPeriodControl;
