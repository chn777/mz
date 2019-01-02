

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.SNBLines = function () {
}
SAPB1.SNBLines.prototype = new SAPB1.ComplexType();
SAPB1.SNBLines.prototype.constructor = SAPB1.SNBLines;
SAPB1.SNBLines.SnbAbsEntry = { valueOf: function(){return 'SnbAbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SNBLines.NewCost = { valueOf: function(){return 'NewCost';}, Type: 'Edm.Double', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SNBLines.DebitCredit = { valueOf: function(){return 'DebitCredit';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SNBLines.SystemNumber = { valueOf: function(){return 'SystemNumber';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SNBLines.LotNumber = { valueOf: function(){return 'LotNumber';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SNBLines.ManufactureNumber = { valueOf: function(){return 'ManufactureNumber';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SNBLines.AdmissionDate = { valueOf: function(){return 'AdmissionDate';}, Type: 'Edm.DateTime', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SNBLines.ExpirationDate = { valueOf: function(){return 'ExpirationDate';}, Type: 'Edm.DateTime', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SNBLines.BaseLine = { valueOf: function(){return 'BaseLine';}, Type: 'Edm.Int32', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.SNBLines.prototype.SnbAbsEntry = new Number();
SAPB1.SNBLines.prototype.NewCost = new Number();
SAPB1.SNBLines.prototype.DebitCredit = new Number();
SAPB1.SNBLines.prototype.SystemNumber = new Number();
SAPB1.SNBLines.prototype.LotNumber = new String();
SAPB1.SNBLines.prototype.ManufactureNumber = new String();
SAPB1.SNBLines.prototype.AdmissionDate = new String();
SAPB1.SNBLines.prototype.ExpirationDate = new String();
SAPB1.SNBLines.prototype.BaseLine = new Number();



SAPB1.SNBLines.create = function (rawObject) {
    var instance = new SAPB1.SNBLines();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.SNBLines.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.SNBLines;
