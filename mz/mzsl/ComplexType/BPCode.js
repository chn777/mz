

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BPCode = function () {
}
SAPB1.BPCode.prototype = new SAPB1.ComplexType();
SAPB1.BPCode.prototype.constructor = SAPB1.BPCode;
SAPB1.BPCode.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPCode.DueDate = { valueOf: function(){return 'DueDate';}, Type: 'Edm.DateTime', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPCode.Debit = { valueOf: function(){return 'Debit';}, Type: 'Edm.Double', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPCode.Credit = { valueOf: function(){return 'Credit';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPCode.SystemDebit = { valueOf: function(){return 'SystemDebit';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPCode.SystemCredit = { valueOf: function(){return 'SystemCredit';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPCode.ForeignDebit = { valueOf: function(){return 'ForeignDebit';}, Type: 'Edm.Double', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPCode.ForeignCredit = { valueOf: function(){return 'ForeignCredit';}, Type: 'Edm.Double', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPCode.ForeignCurrency = { valueOf: function(){return 'ForeignCurrency';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPCode.BpCtrlAcct = { valueOf: function(){return 'BpCtrlAcct';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPCode.prototype.Code = new String();
SAPB1.BPCode.prototype.DueDate = new String();
SAPB1.BPCode.prototype.Debit = new Number();
SAPB1.BPCode.prototype.Credit = new Number();
SAPB1.BPCode.prototype.SystemDebit = new Number();
SAPB1.BPCode.prototype.SystemCredit = new Number();
SAPB1.BPCode.prototype.ForeignDebit = new Number();
SAPB1.BPCode.prototype.ForeignCredit = new Number();
SAPB1.BPCode.prototype.ForeignCurrency = new String();
SAPB1.BPCode.prototype.BpCtrlAcct = new String();



SAPB1.BPCode.create = function (rawObject) {
    var instance = new SAPB1.BPCode();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BPCode.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BPCode;
