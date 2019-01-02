var CallArgument = require('ComplexType/CallArgument')
var CallArgumentCollection = require('ComplexType/CallArgumentCollection')
var CallMessage = require('ComplexType/CallMessage')
var CallMessageCollection = require('ComplexType/CallMessageCollection')

var ExternalCallStatusEnum = require('EnumType/ExternalCallStatusEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ExternalCall = function () {
}
SAPB1.ExternalCall.prototype = new SAPB1.ComplexType();
SAPB1.ExternalCall.prototype.constructor = SAPB1.ExternalCall;
SAPB1.ExternalCall.ID = { valueOf: function(){return 'ID';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ExternalCall.Category = { valueOf: function(){return 'Category';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExternalCall.Status = { valueOf: function(){return 'Status';}, Type: 'ExternalCallStatusEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExternalCall.CreationDate = { valueOf: function(){return 'CreationDate';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExternalCall.CreationTime = { valueOf: function(){return 'CreationTime';}, Type: 'Edm.Int32', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExternalCall.LastUpdateDate = { valueOf: function(){return 'LastUpdateDate';}, Type: 'Edm.DateTime', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExternalCall.LastUpdateTime = { valueOf: function(){return 'LastUpdateTime';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExternalCall.LastUpdateUserCode = { valueOf: function(){return 'LastUpdateUserCode';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ExternalCall.CallArguments = { valueOf: function(){return 'CallArguments';}, Type: 'CallArgument', Index: 8, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.ExternalCall.CallMessages = { valueOf: function(){return 'CallMessages';}, Type: 'CallMessage', Index: 9, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.ExternalCall.prototype.ID = new Number();
SAPB1.ExternalCall.prototype.Category = new Number();
SAPB1.ExternalCall.prototype.Status = new String();
SAPB1.ExternalCall.prototype.CreationDate = new String();
SAPB1.ExternalCall.prototype.CreationTime = new Number();
SAPB1.ExternalCall.prototype.LastUpdateDate = new String();
SAPB1.ExternalCall.prototype.LastUpdateTime = new Number();
SAPB1.ExternalCall.prototype.LastUpdateUserCode = new String();
SAPB1.ExternalCall.prototype.CallArguments = new CallArgumentCollection();
SAPB1.ExternalCall.prototype.CallMessages = new CallMessageCollection();

SAPB1.ExternalCall.CallArgument = CallArgument
SAPB1.ExternalCall.CallArgumentCollection = CallArgumentCollection
SAPB1.ExternalCall.CallMessage = CallMessage
SAPB1.ExternalCall.CallMessageCollection = CallMessageCollection

SAPB1.ExternalCall.ExternalCallStatusEnum = ExternalCallStatusEnum

SAPB1.ExternalCall.create = function (rawObject) {
    var instance = new SAPB1.ExternalCall();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ExternalCall.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ExternalCall;
