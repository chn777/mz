
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.MessageHeader = function () {
}
SAPB1.MessageHeader.prototype = new SAPB1.ComplexType();
SAPB1.MessageHeader.prototype.constructor = SAPB1.MessageHeader;
SAPB1.MessageHeader.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MessageHeader.Received = { valueOf: function(){return 'Received';}, Type: 'BoYesNoEnum', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MessageHeader.Read = { valueOf: function(){return 'Read';}, Type: 'BoYesNoEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MessageHeader.ReceivedDate = { valueOf: function(){return 'ReceivedDate';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MessageHeader.ReceivedTime = { valueOf: function(){return 'ReceivedTime';}, Type: 'Edm.Time', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MessageHeader.SentDate = { valueOf: function(){return 'SentDate';}, Type: 'Edm.DateTime', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MessageHeader.SentTime = { valueOf: function(){return 'SentTime';}, Type: 'Edm.Time', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MessageHeader.prototype.Code = new Number();
SAPB1.MessageHeader.prototype.Received = new String();
SAPB1.MessageHeader.prototype.Read = new String();
SAPB1.MessageHeader.prototype.ReceivedDate = new String();
SAPB1.MessageHeader.prototype.ReceivedTime = new String();
SAPB1.MessageHeader.prototype.SentDate = new String();
SAPB1.MessageHeader.prototype.SentTime = new String();


SAPB1.MessageHeader.BoYesNoEnum = BoYesNoEnum

SAPB1.MessageHeader.create = function (rawObject) {
    var instance = new SAPB1.MessageHeader();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.MessageHeader.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.MessageHeader;
