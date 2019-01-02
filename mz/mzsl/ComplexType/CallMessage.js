var CallMessageArgument = require('ComplexType/CallMessageArgument')
var CallMessageArgumentCollection = require('ComplexType/CallMessageArgumentCollection')

var CallMessageTypeEnum = require('EnumType/CallMessageTypeEnum')
var CallMessageStatusEnum = require('EnumType/CallMessageStatusEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.CallMessage = function () {
}
SAPB1.CallMessage.prototype = new SAPB1.ComplexType();
SAPB1.CallMessage.prototype.constructor = SAPB1.CallMessage;
SAPB1.CallMessage.ID = { valueOf: function(){return 'ID';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.CallMessage.Type = { valueOf: function(){return 'Type';}, Type: 'CallMessageTypeEnum', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CallMessage.ErrorCode = { valueOf: function(){return 'ErrorCode';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CallMessage.MessageBody = { valueOf: function(){return 'MessageBody';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CallMessage.Status = { valueOf: function(){return 'Status';}, Type: 'CallMessageStatusEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CallMessage.CreationDate = { valueOf: function(){return 'CreationDate';}, Type: 'Edm.DateTime', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CallMessage.CreationTime = { valueOf: function(){return 'CreationTime';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CallMessage.CallMessageArguments = { valueOf: function(){return 'CallMessageArguments';}, Type: 'CallMessageArgument', Index: 7, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.CallMessage.prototype.ID = new Number();
SAPB1.CallMessage.prototype.Type = new String();
SAPB1.CallMessage.prototype.ErrorCode = new String();
SAPB1.CallMessage.prototype.MessageBody = new String();
SAPB1.CallMessage.prototype.Status = new String();
SAPB1.CallMessage.prototype.CreationDate = new String();
SAPB1.CallMessage.prototype.CreationTime = new Number();
SAPB1.CallMessage.prototype.CallMessageArguments = new CallMessageArgumentCollection();

SAPB1.CallMessage.CallMessageArgument = CallMessageArgument
SAPB1.CallMessage.CallMessageArgumentCollection = CallMessageArgumentCollection

SAPB1.CallMessage.CallMessageTypeEnum = CallMessageTypeEnum
SAPB1.CallMessage.CallMessageStatusEnum = CallMessageStatusEnum

SAPB1.CallMessage.create = function (rawObject) {
    var instance = new SAPB1.CallMessage();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.CallMessage.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.CallMessage;
