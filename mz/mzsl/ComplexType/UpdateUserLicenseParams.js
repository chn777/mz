
var LicenseTypeEnum = require('EnumType/LicenseTypeEnum')
var LicenseUpdateTypeEnum = require('EnumType/LicenseUpdateTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.UpdateUserLicenseParams = function () {
}
SAPB1.UpdateUserLicenseParams.prototype = new SAPB1.ComplexType();
SAPB1.UpdateUserLicenseParams.prototype.constructor = SAPB1.UpdateUserLicenseParams;
SAPB1.UpdateUserLicenseParams.UserName = { valueOf: function(){return 'UserName';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UpdateUserLicenseParams.LicenseType = { valueOf: function(){return 'LicenseType';}, Type: 'LicenseTypeEnum', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UpdateUserLicenseParams.LicenseUpdateType = { valueOf: function(){return 'LicenseUpdateType';}, Type: 'LicenseUpdateTypeEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.UpdateUserLicenseParams.prototype.UserName = new String();
SAPB1.UpdateUserLicenseParams.prototype.LicenseType = new String();
SAPB1.UpdateUserLicenseParams.prototype.LicenseUpdateType = new String();


SAPB1.UpdateUserLicenseParams.LicenseTypeEnum = LicenseTypeEnum
SAPB1.UpdateUserLicenseParams.LicenseUpdateTypeEnum = LicenseUpdateTypeEnum

SAPB1.UpdateUserLicenseParams.create = function (rawObject) {
    var instance = new SAPB1.UpdateUserLicenseParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.UpdateUserLicenseParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.UpdateUserLicenseParams;
