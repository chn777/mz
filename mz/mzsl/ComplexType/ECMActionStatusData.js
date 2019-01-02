
var EcmActionStatusEnum = require('EnumType/EcmActionStatusEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ECMActionStatusData = function () {
}
SAPB1.ECMActionStatusData.prototype = new SAPB1.ComplexType();
SAPB1.ECMActionStatusData.prototype.constructor = SAPB1.ECMActionStatusData;
SAPB1.ECMActionStatusData.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ECMActionStatusData.ActStatus = { valueOf: function(){return 'ActStatus';}, Type: 'EcmActionStatusEnum', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ECMActionStatusData.ReportID = { valueOf: function(){return 'ReportID';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ECMActionStatusData.ReceivDate = { valueOf: function(){return 'ReceivDate';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ECMActionStatusData.ActMessage = { valueOf: function(){return 'ActMessage';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.ECMActionStatusData.prototype.AbsEntry = new Number();
SAPB1.ECMActionStatusData.prototype.ActStatus = new String();
SAPB1.ECMActionStatusData.prototype.ReportID = new String();
SAPB1.ECMActionStatusData.prototype.ReceivDate = new String();
SAPB1.ECMActionStatusData.prototype.ActMessage = new String();


SAPB1.ECMActionStatusData.EcmActionStatusEnum = EcmActionStatusEnum

SAPB1.ECMActionStatusData.create = function (rawObject) {
    var instance = new SAPB1.ECMActionStatusData();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ECMActionStatusData.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ECMActionStatusData;
