
var RecipientTypeEnum = require('EnumType/RecipientTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ActivityRecipient = function () {
}
SAPB1.ActivityRecipient.prototype = new SAPB1.ComplexType();
SAPB1.ActivityRecipient.prototype.constructor = SAPB1.ActivityRecipient;
SAPB1.ActivityRecipient.LineNumber = { valueOf: function(){return 'LineNumber';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ActivityRecipient.RecipientType = { valueOf: function(){return 'RecipientType';}, Type: 'RecipientTypeEnum', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ActivityRecipient.RecipientCode = { valueOf: function(){return 'RecipientCode';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ActivityRecipient.prototype.LineNumber = new Number();
SAPB1.ActivityRecipient.prototype.RecipientType = new String();
SAPB1.ActivityRecipient.prototype.RecipientCode = new String();


SAPB1.ActivityRecipient.RecipientTypeEnum = RecipientTypeEnum

SAPB1.ActivityRecipient.create = function (rawObject) {
    var instance = new SAPB1.ActivityRecipient();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ActivityRecipient.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ActivityRecipient;
