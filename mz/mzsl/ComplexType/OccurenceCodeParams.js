
var BoBoeStatus = require('EnumType/BoBoeStatus')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.OccurenceCodeParams = function () {
}
SAPB1.OccurenceCodeParams.prototype = new SAPB1.ComplexType();
SAPB1.OccurenceCodeParams.prototype.constructor = SAPB1.OccurenceCodeParams;
SAPB1.OccurenceCodeParams.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.OccurenceCodeParams.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.OccurenceCodeParams.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.OccurenceCodeParams.Note = { valueOf: function(){return 'Note';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.OccurenceCodeParams.RequestedBoeStatus = { valueOf: function(){return 'RequestedBoeStatus';}, Type: 'BoBoeStatus', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.OccurenceCodeParams.IsMovement = { valueOf: function(){return 'IsMovement';}, Type: 'BoYesNoEnum', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.OccurenceCodeParams.prototype.AbsEntry = new Number();
SAPB1.OccurenceCodeParams.prototype.Code = new String();
SAPB1.OccurenceCodeParams.prototype.Description = new String();
SAPB1.OccurenceCodeParams.prototype.Note = new String();
SAPB1.OccurenceCodeParams.prototype.RequestedBoeStatus = new String();
SAPB1.OccurenceCodeParams.prototype.IsMovement = new String();


SAPB1.OccurenceCodeParams.BoBoeStatus = BoBoeStatus
SAPB1.OccurenceCodeParams.BoYesNoEnum = BoYesNoEnum

SAPB1.OccurenceCodeParams.create = function (rawObject) {
    var instance = new SAPB1.OccurenceCodeParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.OccurenceCodeParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.OccurenceCodeParams;
