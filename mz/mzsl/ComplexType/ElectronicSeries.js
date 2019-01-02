

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ElectronicSeries = function () {
}
SAPB1.ElectronicSeries.prototype = new SAPB1.ComplexType();
SAPB1.ElectronicSeries.prototype.constructor = SAPB1.ElectronicSeries;
SAPB1.ElectronicSeries.ElectronicSeries = { valueOf: function(){return 'ElectronicSeries';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ElectronicSeries.Series = { valueOf: function(){return 'Series';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ElectronicSeries.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ElectronicSeries.InitialNumber = { valueOf: function(){return 'InitialNumber';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ElectronicSeries.NextNumber = { valueOf: function(){return 'NextNumber';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ElectronicSeries.LastNumber = { valueOf: function(){return 'LastNumber';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ElectronicSeries.Prefix = { valueOf: function(){return 'Prefix';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ElectronicSeries.ApprovalYear = { valueOf: function(){return 'ApprovalYear';}, Type: 'Edm.Int32', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ElectronicSeries.ApprovalNumber = { valueOf: function(){return 'ApprovalNumber';}, Type: 'Edm.Int32', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ElectronicSeries.Remarks = { valueOf: function(){return 'Remarks';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ElectronicSeries.prototype.ElectronicSeries = new Number();
SAPB1.ElectronicSeries.prototype.Series = new Number();
SAPB1.ElectronicSeries.prototype.Name = new String();
SAPB1.ElectronicSeries.prototype.InitialNumber = new String();
SAPB1.ElectronicSeries.prototype.NextNumber = new String();
SAPB1.ElectronicSeries.prototype.LastNumber = new String();
SAPB1.ElectronicSeries.prototype.Prefix = new String();
SAPB1.ElectronicSeries.prototype.ApprovalYear = new Number();
SAPB1.ElectronicSeries.prototype.ApprovalNumber = new Number();
SAPB1.ElectronicSeries.prototype.Remarks = new String();



SAPB1.ElectronicSeries.create = function (rawObject) {
    var instance = new SAPB1.ElectronicSeries();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ElectronicSeries.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ElectronicSeries;
