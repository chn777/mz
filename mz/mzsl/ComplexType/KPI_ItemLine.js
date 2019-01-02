

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.KPI_ItemLine = function () {
}
SAPB1.KPI_ItemLine.prototype = new SAPB1.ComplexType();
SAPB1.KPI_ItemLine.prototype.constructor = SAPB1.KPI_ItemLine;
SAPB1.KPI_ItemLine.KPICode = { valueOf: function(){return 'KPICode';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.KPI_ItemLine.KPILineNumber = { valueOf: function(){return 'KPILineNumber';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.KPI_ItemLine.KPIName = { valueOf: function(){return 'KPIName';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KPI_ItemLine.KPIValue1 = { valueOf: function(){return 'KPIValue1';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KPI_ItemLine.KPIValue2 = { valueOf: function(){return 'KPIValue2';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KPI_ItemLine.KPIValue3 = { valueOf: function(){return 'KPIValue3';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KPI_ItemLine.KPIValue4 = { valueOf: function(){return 'KPIValue4';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KPI_ItemLine.KPIValue5 = { valueOf: function(){return 'KPIValue5';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KPI_ItemLine.KPIValue6 = { valueOf: function(){return 'KPIValue6';}, Type: 'Edm.Double', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KPI_ItemLine.KPIValue7 = { valueOf: function(){return 'KPIValue7';}, Type: 'Edm.Double', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KPI_ItemLine.KPIValue8 = { valueOf: function(){return 'KPIValue8';}, Type: 'Edm.Double', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KPI_ItemLine.KPIValue9 = { valueOf: function(){return 'KPIValue9';}, Type: 'Edm.Double', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KPI_ItemLine.KPIValue10 = { valueOf: function(){return 'KPIValue10';}, Type: 'Edm.Double', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KPI_ItemLine.KPIValue11 = { valueOf: function(){return 'KPIValue11';}, Type: 'Edm.Double', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KPI_ItemLine.KPIValue12 = { valueOf: function(){return 'KPIValue12';}, Type: 'Edm.Double', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KPI_ItemLine.KPIValue13 = { valueOf: function(){return 'KPIValue13';}, Type: 'Edm.Double', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KPI_ItemLine.KPIValue14 = { valueOf: function(){return 'KPIValue14';}, Type: 'Edm.Double', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KPI_ItemLine.KPIValue15 = { valueOf: function(){return 'KPIValue15';}, Type: 'Edm.Double', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KPI_ItemLine.KPIValue16 = { valueOf: function(){return 'KPIValue16';}, Type: 'Edm.Double', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KPI_ItemLine.KPIValue17 = { valueOf: function(){return 'KPIValue17';}, Type: 'Edm.Double', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KPI_ItemLine.KPIValue18 = { valueOf: function(){return 'KPIValue18';}, Type: 'Edm.Double', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KPI_ItemLine.KPIValue19 = { valueOf: function(){return 'KPIValue19';}, Type: 'Edm.Double', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KPI_ItemLine.KPIValue20 = { valueOf: function(){return 'KPIValue20';}, Type: 'Edm.Double', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KPI_ItemLine.KPIValue21 = { valueOf: function(){return 'KPIValue21';}, Type: 'Edm.Double', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KPI_ItemLine.KPIValue22 = { valueOf: function(){return 'KPIValue22';}, Type: 'Edm.Double', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KPI_ItemLine.KPIValue23 = { valueOf: function(){return 'KPIValue23';}, Type: 'Edm.Double', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KPI_ItemLine.KPIValue24 = { valueOf: function(){return 'KPIValue24';}, Type: 'Edm.Double', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KPI_ItemLine.KPIValue25 = { valueOf: function(){return 'KPIValue25';}, Type: 'Edm.Double', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KPI_ItemLine.KPIValue26 = { valueOf: function(){return 'KPIValue26';}, Type: 'Edm.Double', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KPI_ItemLine.KPIValue27 = { valueOf: function(){return 'KPIValue27';}, Type: 'Edm.Double', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KPI_ItemLine.KPIValue28 = { valueOf: function(){return 'KPIValue28';}, Type: 'Edm.Double', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KPI_ItemLine.KPIValue29 = { valueOf: function(){return 'KPIValue29';}, Type: 'Edm.Double', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KPI_ItemLine.KPIValue30 = { valueOf: function(){return 'KPIValue30';}, Type: 'Edm.Double', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.KPI_ItemLine.prototype.KPICode = new String();
SAPB1.KPI_ItemLine.prototype.KPILineNumber = new Number();
SAPB1.KPI_ItemLine.prototype.KPIName = new String();
SAPB1.KPI_ItemLine.prototype.KPIValue1 = new Number();
SAPB1.KPI_ItemLine.prototype.KPIValue2 = new Number();
SAPB1.KPI_ItemLine.prototype.KPIValue3 = new Number();
SAPB1.KPI_ItemLine.prototype.KPIValue4 = new Number();
SAPB1.KPI_ItemLine.prototype.KPIValue5 = new Number();
SAPB1.KPI_ItemLine.prototype.KPIValue6 = new Number();
SAPB1.KPI_ItemLine.prototype.KPIValue7 = new Number();
SAPB1.KPI_ItemLine.prototype.KPIValue8 = new Number();
SAPB1.KPI_ItemLine.prototype.KPIValue9 = new Number();
SAPB1.KPI_ItemLine.prototype.KPIValue10 = new Number();
SAPB1.KPI_ItemLine.prototype.KPIValue11 = new Number();
SAPB1.KPI_ItemLine.prototype.KPIValue12 = new Number();
SAPB1.KPI_ItemLine.prototype.KPIValue13 = new Number();
SAPB1.KPI_ItemLine.prototype.KPIValue14 = new Number();
SAPB1.KPI_ItemLine.prototype.KPIValue15 = new Number();
SAPB1.KPI_ItemLine.prototype.KPIValue16 = new Number();
SAPB1.KPI_ItemLine.prototype.KPIValue17 = new Number();
SAPB1.KPI_ItemLine.prototype.KPIValue18 = new Number();
SAPB1.KPI_ItemLine.prototype.KPIValue19 = new Number();
SAPB1.KPI_ItemLine.prototype.KPIValue20 = new Number();
SAPB1.KPI_ItemLine.prototype.KPIValue21 = new Number();
SAPB1.KPI_ItemLine.prototype.KPIValue22 = new Number();
SAPB1.KPI_ItemLine.prototype.KPIValue23 = new Number();
SAPB1.KPI_ItemLine.prototype.KPIValue24 = new Number();
SAPB1.KPI_ItemLine.prototype.KPIValue25 = new Number();
SAPB1.KPI_ItemLine.prototype.KPIValue26 = new Number();
SAPB1.KPI_ItemLine.prototype.KPIValue27 = new Number();
SAPB1.KPI_ItemLine.prototype.KPIValue28 = new Number();
SAPB1.KPI_ItemLine.prototype.KPIValue29 = new Number();
SAPB1.KPI_ItemLine.prototype.KPIValue30 = new Number();



SAPB1.KPI_ItemLine.create = function (rawObject) {
    var instance = new SAPB1.KPI_ItemLine();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.KPI_ItemLine.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.KPI_ItemLine;
