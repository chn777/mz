
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ActivityRecipientListParams = function () {
}
SAPB1.ActivityRecipientListParams.prototype = new SAPB1.ComplexType();
SAPB1.ActivityRecipientListParams.prototype.constructor = SAPB1.ActivityRecipientListParams;
SAPB1.ActivityRecipientListParams.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ActivityRecipientListParams.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ActivityRecipientListParams.Active = { valueOf: function(){return 'Active';}, Type: 'BoYesNoEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ActivityRecipientListParams.IsMultiple = { valueOf: function(){return 'IsMultiple';}, Type: 'BoYesNoEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ActivityRecipientListParams.prototype.Code = new Number();
SAPB1.ActivityRecipientListParams.prototype.Name = new String();
SAPB1.ActivityRecipientListParams.prototype.Active = new String();
SAPB1.ActivityRecipientListParams.prototype.IsMultiple = new String();


SAPB1.ActivityRecipientListParams.BoYesNoEnum = BoYesNoEnum

SAPB1.ActivityRecipientListParams.create = function (rawObject) {
    var instance = new SAPB1.ActivityRecipientListParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ActivityRecipientListParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ActivityRecipientListParams;
