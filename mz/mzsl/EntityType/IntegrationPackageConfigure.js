
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.IntegrationPackageConfigure = function () {
}
SAPB1.IntegrationPackageConfigure.prototype = new SAPB1.EntityType();
SAPB1.IntegrationPackageConfigure.prototype.constructor = SAPB1.IntegrationPackageConfigure;
SAPB1.IntegrationPackageConfigure.prototype.keys.push('AbsEntry');
SAPB1.IntegrationPackageConfigure.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.IntegrationPackageConfigure.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.IntegrationPackageConfigure.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.IntegrationPackageConfigure.IsEnable = { valueOf: function(){return 'IsEnable';}, Type: 'BoYesNoEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.IntegrationPackageConfigure.prototype.AbsEntry = new Number();
SAPB1.IntegrationPackageConfigure.prototype.Code = new String();
SAPB1.IntegrationPackageConfigure.prototype.Name = new String();
SAPB1.IntegrationPackageConfigure.prototype.IsEnable = new String();


SAPB1.IntegrationPackageConfigure.BoYesNoEnum = BoYesNoEnum

SAPB1.IntegrationPackageConfigure.create = function (rawObject) {
    var instance = new SAPB1.IntegrationPackageConfigure();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.IntegrationPackageConfigure.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.IntegrationPackageConfigure;
