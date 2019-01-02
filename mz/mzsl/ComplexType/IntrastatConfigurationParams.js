
var IntrastatConfigurationEnum = require('EnumType/IntrastatConfigurationEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.IntrastatConfigurationParams = function () {
}
SAPB1.IntrastatConfigurationParams.prototype = new SAPB1.ComplexType();
SAPB1.IntrastatConfigurationParams.prototype.constructor = SAPB1.IntrastatConfigurationParams;
SAPB1.IntrastatConfigurationParams.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.IntrastatConfigurationParams.ConfType = { valueOf: function(){return 'ConfType';}, Type: 'IntrastatConfigurationEnum', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.IntrastatConfigurationParams.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.IntrastatConfigurationParams.StatCode = { valueOf: function(){return 'StatCode';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.IntrastatConfigurationParams.DateFrom = { valueOf: function(){return 'DateFrom';}, Type: 'Edm.DateTime', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.IntrastatConfigurationParams.DateTo = { valueOf: function(){return 'DateTo';}, Type: 'Edm.DateTime', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.IntrastatConfigurationParams.Country = { valueOf: function(){return 'Country';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.IntrastatConfigurationParams.prototype.AbsEntry = new Number();
SAPB1.IntrastatConfigurationParams.prototype.ConfType = new String();
SAPB1.IntrastatConfigurationParams.prototype.Code = new String();
SAPB1.IntrastatConfigurationParams.prototype.StatCode = new String();
SAPB1.IntrastatConfigurationParams.prototype.DateFrom = new String();
SAPB1.IntrastatConfigurationParams.prototype.DateTo = new String();
SAPB1.IntrastatConfigurationParams.prototype.Country = new String();


SAPB1.IntrastatConfigurationParams.IntrastatConfigurationEnum = IntrastatConfigurationEnum

SAPB1.IntrastatConfigurationParams.create = function (rawObject) {
    var instance = new SAPB1.IntrastatConfigurationParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.IntrastatConfigurationParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.IntrastatConfigurationParams;
