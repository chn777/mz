var SeriesLine = require('ComplexType/SeriesLine')
var SeriesLineCollection = require('ComplexType/SeriesLineCollection')


var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.CertificateSeries = function () {
}
SAPB1.CertificateSeries.prototype = new SAPB1.EntityType();
SAPB1.CertificateSeries.prototype.constructor = SAPB1.CertificateSeries;
SAPB1.CertificateSeries.prototype.keys.push('AbsEntry');
SAPB1.CertificateSeries.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.CertificateSeries.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.CertificateSeries.Section = { valueOf: function(){return 'Section';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CertificateSeries.Location = { valueOf: function(){return 'Location';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CertificateSeries.DefaultSeries = { valueOf: function(){return 'DefaultSeries';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CertificateSeries.SeriesLines = { valueOf: function(){return 'SeriesLines';}, Type: 'SeriesLine', Index: 5, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.CertificateSeries.prototype.AbsEntry = new Number();
SAPB1.CertificateSeries.prototype.Code = new String();
SAPB1.CertificateSeries.prototype.Section = new Number();
SAPB1.CertificateSeries.prototype.Location = new Number();
SAPB1.CertificateSeries.prototype.DefaultSeries = new Number();
SAPB1.CertificateSeries.prototype.SeriesLines = new SeriesLineCollection();

SAPB1.CertificateSeries.SeriesLine = SeriesLine
SAPB1.CertificateSeries.SeriesLineCollection = SeriesLineCollection


SAPB1.CertificateSeries.create = function (rawObject) {
    var instance = new SAPB1.CertificateSeries();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.CertificateSeries.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.CertificateSeries;
