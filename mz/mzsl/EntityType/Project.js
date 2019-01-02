
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.Project = function () {
}
SAPB1.Project.prototype = new SAPB1.EntityType();
SAPB1.Project.prototype.constructor = SAPB1.Project;
SAPB1.Project.prototype.keys.push('Code');
SAPB1.Project.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.Project.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Project.ValidFrom = { valueOf: function(){return 'ValidFrom';}, Type: 'Edm.DateTime', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Project.ValidTo = { valueOf: function(){return 'ValidTo';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Project.Active = { valueOf: function(){return 'Active';}, Type: 'BoYesNoEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Project.U_BPLId = { valueOf: function(){return 'U_BPLId';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Project.U_BPLName = { valueOf: function(){return 'U_BPLName';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.Project.prototype.Code = new String();
SAPB1.Project.prototype.Name = new String();
SAPB1.Project.prototype.ValidFrom = new String();
SAPB1.Project.prototype.ValidTo = new String();
SAPB1.Project.prototype.Active = new String();
SAPB1.Project.prototype.U_BPLId = new String();
SAPB1.Project.prototype.U_BPLName = new String();


SAPB1.Project.BoYesNoEnum = BoYesNoEnum

SAPB1.Project.create = function (rawObject) {
    var instance = new SAPB1.Project();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.Project.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.Project;
