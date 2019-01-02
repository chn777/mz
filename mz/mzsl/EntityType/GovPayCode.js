var GovPayCodeAuthority = require('ComplexType/GovPayCodeAuthority')
var GovPayCodeAuthorityCollection = require('ComplexType/GovPayCodeAuthorityCollection')

var BoYesNoEnum = require('EnumType/BoYesNoEnum')
var GovPayCodePeriodicityEnum = require('EnumType/GovPayCodePeriodicityEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.GovPayCode = function () {
}
SAPB1.GovPayCode.prototype = new SAPB1.EntityType();
SAPB1.GovPayCode.prototype.constructor = SAPB1.GovPayCode;
SAPB1.GovPayCode.prototype.keys.push('AbsId');
SAPB1.GovPayCode.AbsId = { valueOf: function(){return 'AbsId';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.GovPayCode.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.GovPayCode.Descr = { valueOf: function(){return 'Descr';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GovPayCode.StateTax = { valueOf: function(){return 'StateTax';}, Type: 'BoYesNoEnum', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GovPayCode.Prdcity = { valueOf: function(){return 'Prdcity';}, Type: 'GovPayCodePeriodicityEnum', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.GovPayCode.GovPayCodeAuthorities = { valueOf: function(){return 'GovPayCodeAuthorities';}, Type: 'GovPayCodeAuthority', Index: 5, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.GovPayCode.prototype.AbsId = new Number();
SAPB1.GovPayCode.prototype.Code = new String();
SAPB1.GovPayCode.prototype.Descr = new String();
SAPB1.GovPayCode.prototype.StateTax = new String();
SAPB1.GovPayCode.prototype.Prdcity = new String();
SAPB1.GovPayCode.prototype.GovPayCodeAuthorities = new GovPayCodeAuthorityCollection();

SAPB1.GovPayCode.GovPayCodeAuthority = GovPayCodeAuthority
SAPB1.GovPayCode.GovPayCodeAuthorityCollection = GovPayCodeAuthorityCollection

SAPB1.GovPayCode.BoYesNoEnum = BoYesNoEnum
SAPB1.GovPayCode.GovPayCodePeriodicityEnum = GovPayCodePeriodicityEnum

SAPB1.GovPayCode.create = function (rawObject) {
    var instance = new SAPB1.GovPayCode();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.GovPayCode.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.GovPayCode;
