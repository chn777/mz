var ActivityRecipient = require('ComplexType/ActivityRecipient')
var ActivityRecipientCollection = require('ComplexType/ActivityRecipientCollection')

var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ActivityRecipientList = function () {
}
SAPB1.ActivityRecipientList.prototype = new SAPB1.EntityType();
SAPB1.ActivityRecipientList.prototype.constructor = SAPB1.ActivityRecipientList;
SAPB1.ActivityRecipientList.prototype.keys.push('Code');
SAPB1.ActivityRecipientList.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ActivityRecipientList.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ActivityRecipientList.Active = { valueOf: function(){return 'Active';}, Type: 'BoYesNoEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ActivityRecipientList.IsMultiple = { valueOf: function(){return 'IsMultiple';}, Type: 'BoYesNoEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ActivityRecipientList.ActivityRecipientCollection = { valueOf: function(){return 'ActivityRecipientCollection';}, Type: 'ActivityRecipient', Index: 4, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.ActivityRecipientList.prototype.Code = new Number();
SAPB1.ActivityRecipientList.prototype.Name = new String();
SAPB1.ActivityRecipientList.prototype.Active = new String();
SAPB1.ActivityRecipientList.prototype.IsMultiple = new String();
SAPB1.ActivityRecipientList.prototype.ActivityRecipientCollection = new ActivityRecipientCollection();

SAPB1.ActivityRecipientList.ActivityRecipient = ActivityRecipient
SAPB1.ActivityRecipientList.ActivityRecipientCollection = ActivityRecipientCollection

SAPB1.ActivityRecipientList.BoYesNoEnum = BoYesNoEnum

SAPB1.ActivityRecipientList.create = function (rawObject) {
    var instance = new SAPB1.ActivityRecipientList();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ActivityRecipientList.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ActivityRecipientList;
