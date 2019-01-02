var MessageDataColumn = require('ComplexType/MessageDataColumn')
var MessageDataColumnCollection = require('ComplexType/MessageDataColumnCollection')
var Recipient = require('ComplexType/Recipient')
var RecipientCollection = require('ComplexType/RecipientCollection')

var BoMsgPriorities = require('EnumType/BoMsgPriorities')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.Message = function () {
}
SAPB1.Message.prototype = new SAPB1.EntityType();
SAPB1.Message.prototype.constructor = SAPB1.Message;
SAPB1.Message.prototype.keys.push('Code');
SAPB1.Message.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.Message.User = { valueOf: function(){return 'User';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Message.Priority = { valueOf: function(){return 'Priority';}, Type: 'BoMsgPriorities', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Message.Subject = { valueOf: function(){return 'Subject';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Message.Text = { valueOf: function(){return 'Text';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Message.Attachment = { valueOf: function(){return 'Attachment';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Message.MessageDataColumns = { valueOf: function(){return 'MessageDataColumns';}, Type: 'MessageDataColumn', Index: 6, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.Message.RecipientCollection = { valueOf: function(){return 'RecipientCollection';}, Type: 'Recipient', Index: 7, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.Message.prototype.Code = new Number();
SAPB1.Message.prototype.User = new Number();
SAPB1.Message.prototype.Priority = new String();
SAPB1.Message.prototype.Subject = new String();
SAPB1.Message.prototype.Text = new String();
SAPB1.Message.prototype.Attachment = new Number();
SAPB1.Message.prototype.MessageDataColumns = new MessageDataColumnCollection();
SAPB1.Message.prototype.RecipientCollection = new RecipientCollection();

SAPB1.Message.MessageDataColumn = MessageDataColumn
SAPB1.Message.MessageDataColumnCollection = MessageDataColumnCollection
SAPB1.Message.Recipient = Recipient
SAPB1.Message.RecipientCollection = RecipientCollection

SAPB1.Message.BoMsgPriorities = BoMsgPriorities

SAPB1.Message.create = function (rawObject) {
    var instance = new SAPB1.Message();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.Message.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.Message;
