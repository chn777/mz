
var LegalDataLineTypeEnum = require('EnumType/LegalDataLineTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.LegalDataDetail = function () {
}
SAPB1.LegalDataDetail.prototype = new SAPB1.ComplexType();
SAPB1.LegalDataDetail.prototype.constructor = SAPB1.LegalDataDetail;
SAPB1.LegalDataDetail.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.LegalDataDetail.LineSequence = { valueOf: function(){return 'LineSequence';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.LegalDataDetail.LineType = { valueOf: function(){return 'LineType';}, Type: 'LegalDataLineTypeEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LegalDataDetail.TaxCode = { valueOf: function(){return 'TaxCode';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LegalDataDetail.TaxRate = { valueOf: function(){return 'TaxRate';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LegalDataDetail.Amount = { valueOf: function(){return 'Amount';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.LegalDataDetail.prototype.DocEntry = new Number();
SAPB1.LegalDataDetail.prototype.LineSequence = new Number();
SAPB1.LegalDataDetail.prototype.LineType = new String();
SAPB1.LegalDataDetail.prototype.TaxCode = new String();
SAPB1.LegalDataDetail.prototype.TaxRate = new Number();
SAPB1.LegalDataDetail.prototype.Amount = new Number();


SAPB1.LegalDataDetail.LegalDataLineTypeEnum = LegalDataLineTypeEnum

SAPB1.LegalDataDetail.create = function (rawObject) {
    var instance = new SAPB1.LegalDataDetail();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.LegalDataDetail.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.LegalDataDetail;
