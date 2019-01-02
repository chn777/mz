var QueueMember = require('ComplexType/QueueMember')
var QueueMemberCollection = require('ComplexType/QueueMemberCollection')

var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.Queue = function () {
}
SAPB1.Queue.prototype = new SAPB1.EntityType();
SAPB1.Queue.prototype.constructor = SAPB1.Queue;
SAPB1.Queue.prototype.keys.push('QueueID');
SAPB1.Queue.QueueID = { valueOf: function(){return 'QueueID';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.Queue.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Queue.Inactive = { valueOf: function(){return 'Inactive';}, Type: 'BoYesNoEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Queue.QueueManager = { valueOf: function(){return 'QueueManager';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Queue.QueueEmail = { valueOf: function(){return 'QueueEmail';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Queue.QueueMembers = { valueOf: function(){return 'QueueMembers';}, Type: 'QueueMember', Index: 5, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.Queue.prototype.QueueID = new String();
SAPB1.Queue.prototype.Description = new String();
SAPB1.Queue.prototype.Inactive = new String();
SAPB1.Queue.prototype.QueueManager = new Number();
SAPB1.Queue.prototype.QueueEmail = new String();
SAPB1.Queue.prototype.QueueMembers = new QueueMemberCollection();

SAPB1.Queue.QueueMember = QueueMember
SAPB1.Queue.QueueMemberCollection = QueueMemberCollection

SAPB1.Queue.BoYesNoEnum = BoYesNoEnum

SAPB1.Queue.create = function (rawObject) {
    var instance = new SAPB1.Queue();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.Queue.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.Queue;
