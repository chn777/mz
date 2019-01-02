

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BusinessPlaceTributaryInfo = function () {
}
SAPB1.BusinessPlaceTributaryInfo.prototype = new SAPB1.ComplexType();
SAPB1.BusinessPlaceTributaryInfo.prototype.constructor = SAPB1.BusinessPlaceTributaryInfo;
SAPB1.BusinessPlaceTributaryInfo.BPLID = { valueOf: function(){return 'BPLID';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BusinessPlaceTributaryInfo.TributaryID = { valueOf: function(){return 'TributaryID';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.BusinessPlaceTributaryInfo.TributaryType = { valueOf: function(){return 'TributaryType';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlaceTributaryInfo.TTStartDate = { valueOf: function(){return 'TTStartDate';}, Type: 'Edm.DateTime', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlaceTributaryInfo.TTEndDate = { valueOf: function(){return 'TTEndDate';}, Type: 'Edm.DateTime', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlaceTributaryInfo.TributaryRegimeCode = { valueOf: function(){return 'TributaryRegimeCode';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlaceTributaryInfo.TRCStartDate = { valueOf: function(){return 'TRCStartDate';}, Type: 'Edm.DateTime', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlaceTributaryInfo.TRCEndDate = { valueOf: function(){return 'TRCEndDate';}, Type: 'Edm.DateTime', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BusinessPlaceTributaryInfo.prototype.BPLID = new Number();
SAPB1.BusinessPlaceTributaryInfo.prototype.TributaryID = new Number();
SAPB1.BusinessPlaceTributaryInfo.prototype.TributaryType = new Number();
SAPB1.BusinessPlaceTributaryInfo.prototype.TTStartDate = new String();
SAPB1.BusinessPlaceTributaryInfo.prototype.TTEndDate = new String();
SAPB1.BusinessPlaceTributaryInfo.prototype.TributaryRegimeCode = new Number();
SAPB1.BusinessPlaceTributaryInfo.prototype.TRCStartDate = new String();
SAPB1.BusinessPlaceTributaryInfo.prototype.TRCEndDate = new String();



SAPB1.BusinessPlaceTributaryInfo.create = function (rawObject) {
    var instance = new SAPB1.BusinessPlaceTributaryInfo();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BusinessPlaceTributaryInfo.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BusinessPlaceTributaryInfo;
