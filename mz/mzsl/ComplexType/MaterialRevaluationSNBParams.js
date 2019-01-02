

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.MaterialRevaluationSNBParams = function () {
}
SAPB1.MaterialRevaluationSNBParams.prototype = new SAPB1.ComplexType();
SAPB1.MaterialRevaluationSNBParams.prototype.constructor = SAPB1.MaterialRevaluationSNBParams;
SAPB1.MaterialRevaluationSNBParams.SnbAbsEntry = { valueOf: function(){return 'SnbAbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluationSNBParams.NewCost = { valueOf: function(){return 'NewCost';}, Type: 'Edm.Double', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluationSNBParams.DebitCredit = { valueOf: function(){return 'DebitCredit';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluationSNBParams.SystemNumber = { valueOf: function(){return 'SystemNumber';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluationSNBParams.LotNumber = { valueOf: function(){return 'LotNumber';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluationSNBParams.ManufactureNumber = { valueOf: function(){return 'ManufactureNumber';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluationSNBParams.AdmissionDate = { valueOf: function(){return 'AdmissionDate';}, Type: 'Edm.DateTime', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluationSNBParams.ExpirationDate = { valueOf: function(){return 'ExpirationDate';}, Type: 'Edm.DateTime', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MaterialRevaluationSNBParams.prototype.SnbAbsEntry = new Number();
SAPB1.MaterialRevaluationSNBParams.prototype.NewCost = new Number();
SAPB1.MaterialRevaluationSNBParams.prototype.DebitCredit = new Number();
SAPB1.MaterialRevaluationSNBParams.prototype.SystemNumber = new Number();
SAPB1.MaterialRevaluationSNBParams.prototype.LotNumber = new String();
SAPB1.MaterialRevaluationSNBParams.prototype.ManufactureNumber = new String();
SAPB1.MaterialRevaluationSNBParams.prototype.AdmissionDate = new String();
SAPB1.MaterialRevaluationSNBParams.prototype.ExpirationDate = new String();



SAPB1.MaterialRevaluationSNBParams.create = function (rawObject) {
    var instance = new SAPB1.MaterialRevaluationSNBParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.MaterialRevaluationSNBParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.MaterialRevaluationSNBParams;
