
var BoBoeStatus = require('EnumType/BoBoeStatus')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.RetornoCodeParams = function () {
}
SAPB1.RetornoCodeParams.prototype = new SAPB1.ComplexType();
SAPB1.RetornoCodeParams.prototype.constructor = SAPB1.RetornoCodeParams;
SAPB1.RetornoCodeParams.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RetornoCodeParams.OccurenceCode = { valueOf: function(){return 'OccurenceCode';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RetornoCodeParams.MovementCode = { valueOf: function(){return 'MovementCode';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RetornoCodeParams.BoeStatus = { valueOf: function(){return 'BoeStatus';}, Type: 'BoBoeStatus', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RetornoCodeParams.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RetornoCodeParams.Color = { valueOf: function(){return 'Color';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RetornoCodeParams.FileFormat = { valueOf: function(){return 'FileFormat';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RetornoCodeParams.BankCode = { valueOf: function(){return 'BankCode';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.RetornoCodeParams.prototype.AbsEntry = new Number();
SAPB1.RetornoCodeParams.prototype.OccurenceCode = new Number();
SAPB1.RetornoCodeParams.prototype.MovementCode = new Number();
SAPB1.RetornoCodeParams.prototype.BoeStatus = new String();
SAPB1.RetornoCodeParams.prototype.Description = new String();
SAPB1.RetornoCodeParams.prototype.Color = new Number();
SAPB1.RetornoCodeParams.prototype.FileFormat = new String();
SAPB1.RetornoCodeParams.prototype.BankCode = new String();


SAPB1.RetornoCodeParams.BoBoeStatus = BoBoeStatus

SAPB1.RetornoCodeParams.create = function (rawObject) {
    var instance = new SAPB1.RetornoCodeParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.RetornoCodeParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.RetornoCodeParams;
