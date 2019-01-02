
var BoBpAccountTypes = require('EnumType/BoBpAccountTypes')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BPAccountReceivablePayble = function () {
}
SAPB1.BPAccountReceivablePayble.prototype = new SAPB1.ComplexType();
SAPB1.BPAccountReceivablePayble.prototype.constructor = SAPB1.BPAccountReceivablePayble;
SAPB1.BPAccountReceivablePayble.AccountType = { valueOf: function(){return 'AccountType';}, Type: 'BoBpAccountTypes', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPAccountReceivablePayble.AccountCode = { valueOf: function(){return 'AccountCode';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BPAccountReceivablePayble.BPCode = { valueOf: function(){return 'BPCode';}, Type: 'Edm.String', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BPAccountReceivablePayble.prototype.AccountType = new String();
SAPB1.BPAccountReceivablePayble.prototype.AccountCode = new String();
SAPB1.BPAccountReceivablePayble.prototype.BPCode = new String();


SAPB1.BPAccountReceivablePayble.BoBpAccountTypes = BoBpAccountTypes

SAPB1.BPAccountReceivablePayble.create = function (rawObject) {
    var instance = new SAPB1.BPAccountReceivablePayble();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BPAccountReceivablePayble.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BPAccountReceivablePayble;
