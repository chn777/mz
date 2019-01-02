

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.CertificateSeriesParams = function () {
}
SAPB1.CertificateSeriesParams.prototype = new SAPB1.ComplexType();
SAPB1.CertificateSeriesParams.prototype.constructor = SAPB1.CertificateSeriesParams;
SAPB1.CertificateSeriesParams.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CertificateSeriesParams.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.CertificateSeriesParams.Section = { valueOf: function(){return 'Section';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CertificateSeriesParams.Location = { valueOf: function(){return 'Location';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CertificateSeriesParams.prototype.AbsEntry = new Number();
SAPB1.CertificateSeriesParams.prototype.Code = new String();
SAPB1.CertificateSeriesParams.prototype.Section = new Number();
SAPB1.CertificateSeriesParams.prototype.Location = new Number();



SAPB1.CertificateSeriesParams.create = function (rawObject) {
    var instance = new SAPB1.CertificateSeriesParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.CertificateSeriesParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.CertificateSeriesParams;
