
var BoCockpitTypeEnum = require('EnumType/BoCockpitTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.Cockpit = function () {
}
SAPB1.Cockpit.prototype = new SAPB1.EntityType();
SAPB1.Cockpit.prototype.constructor = SAPB1.Cockpit;
SAPB1.Cockpit.prototype.keys.push('AbsEntry');
SAPB1.Cockpit.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.Cockpit.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.Cockpit.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.Cockpit.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Cockpit.UserSignature = { valueOf: function(){return 'UserSignature';}, Type: 'Edm.Int32', Index: 4, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.Cockpit.Date = { valueOf: function(){return 'Date';}, Type: 'Edm.DateTime', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Cockpit.Time = { valueOf: function(){return 'Time';}, Type: 'Edm.Time', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Cockpit.Manufacturer = { valueOf: function(){return 'Manufacturer';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Cockpit.Publisher = { valueOf: function(){return 'Publisher';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Cockpit.CockpitType = { valueOf: function(){return 'CockpitType';}, Type: 'BoCockpitTypeEnum', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Cockpit.prototype.AbsEntry = new Number();
SAPB1.Cockpit.prototype.Code = new Number();
SAPB1.Cockpit.prototype.Name = new String();
SAPB1.Cockpit.prototype.Description = new String();
SAPB1.Cockpit.prototype.UserSignature = new Number();
SAPB1.Cockpit.prototype.Date = new String();
SAPB1.Cockpit.prototype.Time = new String();
SAPB1.Cockpit.prototype.Manufacturer = new String();
SAPB1.Cockpit.prototype.Publisher = new String();
SAPB1.Cockpit.prototype.CockpitType = new String();


SAPB1.Cockpit.BoCockpitTypeEnum = BoCockpitTypeEnum

SAPB1.Cockpit.create = function (rawObject) {
    var instance = new SAPB1.Cockpit();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.Cockpit.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.Cockpit;
