
var SEPASequenceTypeEnum = require('EnumType/SEPASequenceTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BPBankAccount = function () {
}
SAPB1.BPBankAccount.prototype = new SAPB1.ComplexType();
SAPB1.BPBankAccount.prototype.constructor = SAPB1.BPBankAccount;
SAPB1.BPBankAccount.LogInstance = { valueOf: function(){return 'LogInstance';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPBankAccount.UserNo4 = { valueOf: function(){return 'UserNo4';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPBankAccount.BPCode = { valueOf: function(){return 'BPCode';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPBankAccount.County = { valueOf: function(){return 'County';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPBankAccount.State = { valueOf: function(){return 'State';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPBankAccount.UserNo2 = { valueOf: function(){return 'UserNo2';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPBankAccount.IBAN = { valueOf: function(){return 'IBAN';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPBankAccount.ZipCode = { valueOf: function(){return 'ZipCode';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPBankAccount.City = { valueOf: function(){return 'City';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPBankAccount.Block = { valueOf: function(){return 'Block';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPBankAccount.Branch = { valueOf: function(){return 'Branch';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPBankAccount.Country = { valueOf: function(){return 'Country';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPBankAccount.Street = { valueOf: function(){return 'Street';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPBankAccount.ControlKey = { valueOf: function(){return 'ControlKey';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPBankAccount.UserNo3 = { valueOf: function(){return 'UserNo3';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPBankAccount.BankCode = { valueOf: function(){return 'BankCode';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPBankAccount.AccountNo = { valueOf: function(){return 'AccountNo';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPBankAccount.UserNo1 = { valueOf: function(){return 'UserNo1';}, Type: 'Edm.String', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPBankAccount.InternalKey = { valueOf: function(){return 'InternalKey';}, Type: 'Edm.Int32', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPBankAccount.BuildingFloorRoom = { valueOf: function(){return 'BuildingFloorRoom';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPBankAccount.BIK = { valueOf: function(){return 'BIK';}, Type: 'Edm.String', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPBankAccount.AccountName = { valueOf: function(){return 'AccountName';}, Type: 'Edm.String', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPBankAccount.CorrespondentAccount = { valueOf: function(){return 'CorrespondentAccount';}, Type: 'Edm.String', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPBankAccount.Phone = { valueOf: function(){return 'Phone';}, Type: 'Edm.String', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPBankAccount.Fax = { valueOf: function(){return 'Fax';}, Type: 'Edm.String', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPBankAccount.CustomerIdNumber = { valueOf: function(){return 'CustomerIdNumber';}, Type: 'Edm.String', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPBankAccount.ISRBillerID = { valueOf: function(){return 'ISRBillerID';}, Type: 'Edm.String', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPBankAccount.ISRType = { valueOf: function(){return 'ISRType';}, Type: 'Edm.Int32', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPBankAccount.BICSwiftCode = { valueOf: function(){return 'BICSwiftCode';}, Type: 'Edm.String', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPBankAccount.ABARoutingNumber = { valueOf: function(){return 'ABARoutingNumber';}, Type: 'Edm.String', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPBankAccount.MandateID = { valueOf: function(){return 'MandateID';}, Type: 'Edm.String', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPBankAccount.SignatureDate = { valueOf: function(){return 'SignatureDate';}, Type: 'Edm.DateTime', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPBankAccount.MandateExpDate = { valueOf: function(){return 'MandateExpDate';}, Type: 'Edm.DateTime', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPBankAccount.SEPASeqType = { valueOf: function(){return 'SEPASeqType';}, Type: 'SEPASequenceTypeEnum', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPBankAccount.prototype.LogInstance = new Number();
SAPB1.BPBankAccount.prototype.UserNo4 = new String();
SAPB1.BPBankAccount.prototype.BPCode = new String();
SAPB1.BPBankAccount.prototype.County = new String();
SAPB1.BPBankAccount.prototype.State = new String();
SAPB1.BPBankAccount.prototype.UserNo2 = new String();
SAPB1.BPBankAccount.prototype.IBAN = new String();
SAPB1.BPBankAccount.prototype.ZipCode = new String();
SAPB1.BPBankAccount.prototype.City = new String();
SAPB1.BPBankAccount.prototype.Block = new String();
SAPB1.BPBankAccount.prototype.Branch = new String();
SAPB1.BPBankAccount.prototype.Country = new String();
SAPB1.BPBankAccount.prototype.Street = new String();
SAPB1.BPBankAccount.prototype.ControlKey = new String();
SAPB1.BPBankAccount.prototype.UserNo3 = new String();
SAPB1.BPBankAccount.prototype.BankCode = new String();
SAPB1.BPBankAccount.prototype.AccountNo = new String();
SAPB1.BPBankAccount.prototype.UserNo1 = new String();
SAPB1.BPBankAccount.prototype.InternalKey = new Number();
SAPB1.BPBankAccount.prototype.BuildingFloorRoom = new String();
SAPB1.BPBankAccount.prototype.BIK = new String();
SAPB1.BPBankAccount.prototype.AccountName = new String();
SAPB1.BPBankAccount.prototype.CorrespondentAccount = new String();
SAPB1.BPBankAccount.prototype.Phone = new String();
SAPB1.BPBankAccount.prototype.Fax = new String();
SAPB1.BPBankAccount.prototype.CustomerIdNumber = new String();
SAPB1.BPBankAccount.prototype.ISRBillerID = new String();
SAPB1.BPBankAccount.prototype.ISRType = new Number();
SAPB1.BPBankAccount.prototype.BICSwiftCode = new String();
SAPB1.BPBankAccount.prototype.ABARoutingNumber = new String();
SAPB1.BPBankAccount.prototype.MandateID = new String();
SAPB1.BPBankAccount.prototype.SignatureDate = new String();
SAPB1.BPBankAccount.prototype.MandateExpDate = new String();
SAPB1.BPBankAccount.prototype.SEPASeqType = new String();


SAPB1.BPBankAccount.SEPASequenceTypeEnum = SEPASequenceTypeEnum

SAPB1.BPBankAccount.create = function (rawObject) {
    var instance = new SAPB1.BPBankAccount();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BPBankAccount.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BPBankAccount;
