
var EcmActionLogTypeEnum = require('EnumType/EcmActionLogTypeEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.EcmActionLog = function () {
}
SAPB1.EcmActionLog.prototype = new SAPB1.ComplexType();
SAPB1.EcmActionLog.prototype.constructor = SAPB1.EcmActionLog;
SAPB1.EcmActionLog.ActionID = { valueOf: function(){return 'ActionID';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EcmActionLog.LogID = { valueOf: function(){return 'LogID';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.EcmActionLog.Type = { valueOf: function(){return 'Type';}, Type: 'EcmActionLogTypeEnum', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EcmActionLog.Message = { valueOf: function(){return 'Message';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EcmActionLog.Data = { valueOf: function(){return 'Data';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EcmActionLog.LogDate = { valueOf: function(){return 'LogDate';}, Type: 'Edm.DateTime', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EcmActionLog.LogTime = { valueOf: function(){return 'LogTime';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EcmActionLog.ExportFormat = { valueOf: function(){return 'ExportFormat';}, Type: 'Edm.Int32', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.EcmActionLog.prototype.ActionID = new Number();
SAPB1.EcmActionLog.prototype.LogID = new Number();
SAPB1.EcmActionLog.prototype.Type = new String();
SAPB1.EcmActionLog.prototype.Message = new String();
SAPB1.EcmActionLog.prototype.Data = new String();
SAPB1.EcmActionLog.prototype.LogDate = new String();
SAPB1.EcmActionLog.prototype.LogTime = new Number();
SAPB1.EcmActionLog.prototype.ExportFormat = new Number();


SAPB1.EcmActionLog.EcmActionLogTypeEnum = EcmActionLogTypeEnum

SAPB1.EcmActionLog.create = function (rawObject) {
    var instance = new SAPB1.EcmActionLog();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.EcmActionLog.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.EcmActionLog;
