
var BoBoeStatus = require('EnumType/BoBoeStatus')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.RetornoCode = function () {
}
SAPB1.RetornoCode.prototype = new SAPB1.EntityType();
SAPB1.RetornoCode.prototype.constructor = SAPB1.RetornoCode;
SAPB1.RetornoCode.prototype.keys.push('AbsEntry');
SAPB1.RetornoCode.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.RetornoCode.OccurenceCode = { valueOf: function(){return 'OccurenceCode';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RetornoCode.MovementCode = { valueOf: function(){return 'MovementCode';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RetornoCode.BoeStatus = { valueOf: function(){return 'BoeStatus';}, Type: 'BoBoeStatus', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RetornoCode.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RetornoCode.Color = { valueOf: function(){return 'Color';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RetornoCode.FileFormat = { valueOf: function(){return 'FileFormat';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RetornoCode.BankCode = { valueOf: function(){return 'BankCode';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RetornoCode.prototype.AbsEntry = new Number();
SAPB1.RetornoCode.prototype.OccurenceCode = new Number();
SAPB1.RetornoCode.prototype.MovementCode = new Number();
SAPB1.RetornoCode.prototype.BoeStatus = new String();
SAPB1.RetornoCode.prototype.Description = new String();
SAPB1.RetornoCode.prototype.Color = new Number();
SAPB1.RetornoCode.prototype.FileFormat = new String();
SAPB1.RetornoCode.prototype.BankCode = new String();


SAPB1.RetornoCode.BoBoeStatus = BoBoeStatus

SAPB1.RetornoCode.create = function (rawObject) {
    var instance = new SAPB1.RetornoCode();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.RetornoCode.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.RetornoCode;
