
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.TechnicianSettingsGroup = function () {
}
SAPB1.TechnicianSettingsGroup.prototype = new SAPB1.ComplexType();
SAPB1.TechnicianSettingsGroup.prototype.constructor = SAPB1.TechnicianSettingsGroup;
SAPB1.TechnicianSettingsGroup.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.TechnicianSettingsGroup.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TechnicianSettingsGroup.CustomizedGroup = { valueOf: function(){return 'CustomizedGroup';}, Type: 'BoYesNoEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TechnicianSettingsGroup.EnableEditTime = { valueOf: function(){return 'EnableEditTime';}, Type: 'BoYesNoEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TechnicianSettingsGroup.EnableReject = { valueOf: function(){return 'EnableReject';}, Type: 'BoYesNoEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TechnicianSettingsGroup.EnableResign = { valueOf: function(){return 'EnableResign';}, Type: 'BoYesNoEnum', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TechnicianSettingsGroup.EnableFollowup = { valueOf: function(){return 'EnableFollowup';}, Type: 'BoYesNoEnum', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TechnicianSettingsGroup.EnableSignature = { valueOf: function(){return 'EnableSignature';}, Type: 'BoYesNoEnum', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TechnicianSettingsGroup.EnableStarRating = { valueOf: function(){return 'EnableStarRating';}, Type: 'BoYesNoEnum', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TechnicianSettingsGroup.EnableActualDuration = { valueOf: function(){return 'EnableActualDuration';}, Type: 'BoYesNoEnum', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TechnicianSettingsGroup.AdvancedDashBoard = { valueOf: function(){return 'AdvancedDashBoard';}, Type: 'Edm.Int32', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TechnicianSettingsGroup.prototype.Code = new Number();
SAPB1.TechnicianSettingsGroup.prototype.Name = new String();
SAPB1.TechnicianSettingsGroup.prototype.CustomizedGroup = new String();
SAPB1.TechnicianSettingsGroup.prototype.EnableEditTime = new String();
SAPB1.TechnicianSettingsGroup.prototype.EnableReject = new String();
SAPB1.TechnicianSettingsGroup.prototype.EnableResign = new String();
SAPB1.TechnicianSettingsGroup.prototype.EnableFollowup = new String();
SAPB1.TechnicianSettingsGroup.prototype.EnableSignature = new String();
SAPB1.TechnicianSettingsGroup.prototype.EnableStarRating = new String();
SAPB1.TechnicianSettingsGroup.prototype.EnableActualDuration = new String();
SAPB1.TechnicianSettingsGroup.prototype.AdvancedDashBoard = new Number();


SAPB1.TechnicianSettingsGroup.BoYesNoEnum = BoYesNoEnum

SAPB1.TechnicianSettingsGroup.create = function (rawObject) {
    var instance = new SAPB1.TechnicianSettingsGroup();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.TechnicianSettingsGroup.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.TechnicianSettingsGroup;
