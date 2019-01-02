
var IntrastatConfigurationEnum = require('EnumType/IntrastatConfigurationEnum')
var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.IntrastatConfiguration = function () {
}
SAPB1.IntrastatConfiguration.prototype = new SAPB1.EntityType();
SAPB1.IntrastatConfiguration.prototype.constructor = SAPB1.IntrastatConfiguration;
SAPB1.IntrastatConfiguration.prototype.keys.push('AbsEntry');
SAPB1.IntrastatConfiguration.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.IntrastatConfiguration.ConfType = { valueOf: function(){return 'ConfType';}, Type: 'IntrastatConfigurationEnum', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.IntrastatConfiguration.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.IntrastatConfiguration.Descr = { valueOf: function(){return 'Descr';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.IntrastatConfiguration.PrcstVal = { valueOf: function(){return 'PrcstVal';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.IntrastatConfiguration.SuppUnit = { valueOf: function(){return 'SuppUnit';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.IntrastatConfiguration.Export = { valueOf: function(){return 'Export';}, Type: 'BoYesNoEnum', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.IntrastatConfiguration.Import = { valueOf: function(){return 'Import';}, Type: 'BoYesNoEnum', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.IntrastatConfiguration.StatCode = { valueOf: function(){return 'StatCode';}, Type: 'Edm.String', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.IntrastatConfiguration.DateFrom = { valueOf: function(){return 'DateFrom';}, Type: 'Edm.DateTime', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.IntrastatConfiguration.DateTo = { valueOf: function(){return 'DateTo';}, Type: 'Edm.DateTime', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.IntrastatConfiguration.Country = { valueOf: function(){return 'Country';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.IntrastatConfiguration.ConfID = { valueOf: function(){return 'ConfID';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.IntrastatConfiguration.prototype.AbsEntry = new Number();
SAPB1.IntrastatConfiguration.prototype.ConfType = new String();
SAPB1.IntrastatConfiguration.prototype.Code = new String();
SAPB1.IntrastatConfiguration.prototype.Descr = new String();
SAPB1.IntrastatConfiguration.prototype.PrcstVal = new Number();
SAPB1.IntrastatConfiguration.prototype.SuppUnit = new Number();
SAPB1.IntrastatConfiguration.prototype.Export = new String();
SAPB1.IntrastatConfiguration.prototype.Import = new String();
SAPB1.IntrastatConfiguration.prototype.StatCode = new String();
SAPB1.IntrastatConfiguration.prototype.DateFrom = new String();
SAPB1.IntrastatConfiguration.prototype.DateTo = new String();
SAPB1.IntrastatConfiguration.prototype.Country = new String();
SAPB1.IntrastatConfiguration.prototype.ConfID = new String();


SAPB1.IntrastatConfiguration.IntrastatConfigurationEnum = IntrastatConfigurationEnum
SAPB1.IntrastatConfiguration.BoYesNoEnum = BoYesNoEnum

SAPB1.IntrastatConfiguration.create = function (rawObject) {
    var instance = new SAPB1.IntrastatConfiguration();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.IntrastatConfiguration.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.IntrastatConfiguration;
