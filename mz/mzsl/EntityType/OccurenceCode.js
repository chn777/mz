
var BoBoeStatus = require('EnumType/BoBoeStatus')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.OccurenceCode = function () {
}
SAPB1.OccurenceCode.prototype = new SAPB1.EntityType();
SAPB1.OccurenceCode.prototype.constructor = SAPB1.OccurenceCode;
SAPB1.OccurenceCode.prototype.keys.push('AbsEntry');
SAPB1.OccurenceCode.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.OccurenceCode.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.OccurenceCode.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.OccurenceCode.Note = { valueOf: function(){return 'Note';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.OccurenceCode.RequestedBoeStatus = { valueOf: function(){return 'RequestedBoeStatus';}, Type: 'BoBoeStatus', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.OccurenceCode.IsMovement = { valueOf: function(){return 'IsMovement';}, Type: 'BoYesNoEnum', Index: 5, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.OccurenceCode.prototype.AbsEntry = new Number();
SAPB1.OccurenceCode.prototype.Code = new String();
SAPB1.OccurenceCode.prototype.Description = new String();
SAPB1.OccurenceCode.prototype.Note = new String();
SAPB1.OccurenceCode.prototype.RequestedBoeStatus = new String();
SAPB1.OccurenceCode.prototype.IsMovement = new String();


SAPB1.OccurenceCode.BoBoeStatus = BoBoeStatus
SAPB1.OccurenceCode.BoYesNoEnum = BoYesNoEnum

SAPB1.OccurenceCode.create = function (rawObject) {
    var instance = new SAPB1.OccurenceCode();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.OccurenceCode.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.OccurenceCode;
