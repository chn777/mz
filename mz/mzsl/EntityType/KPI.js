var KPI_ItemLine = require('ComplexType/KPI_ItemLine')
var KPI_ItemLineCollection = require('ComplexType/KPI_ItemLineCollection')

var KPITypeEnum = require('EnumType/KPITypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.KPI = function () {
}
SAPB1.KPI.prototype = new SAPB1.EntityType();
SAPB1.KPI.prototype.constructor = SAPB1.KPI;
SAPB1.KPI.prototype.keys.push('KPICode');
SAPB1.KPI.KPICode = { valueOf: function(){return 'KPICode';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.KPI.KPIName = { valueOf: function(){return 'KPIName';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KPI.KPIType = { valueOf: function(){return 'KPIType';}, Type: 'KPITypeEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KPI.NumberOfColumns = { valueOf: function(){return 'NumberOfColumns';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KPI.KPI_ItemLines = { valueOf: function(){return 'KPI_ItemLines';}, Type: 'KPI_ItemLine', Index: 4, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.KPI.prototype.KPICode = new String();
SAPB1.KPI.prototype.KPIName = new String();
SAPB1.KPI.prototype.KPIType = new String();
SAPB1.KPI.prototype.NumberOfColumns = new Number();
SAPB1.KPI.prototype.KPI_ItemLines = new KPI_ItemLineCollection();

SAPB1.KPI.KPI_ItemLine = KPI_ItemLine
SAPB1.KPI.KPI_ItemLineCollection = KPI_ItemLineCollection

SAPB1.KPI.KPITypeEnum = KPITypeEnum

SAPB1.KPI.create = function (rawObject) {
    var instance = new SAPB1.KPI();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.KPI.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.KPI;
