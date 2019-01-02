

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.MTC_CSOTCT1 = function () {
}
SAPB1.MTC_CSOTCT1.prototype = new SAPB1.ComplexType();
SAPB1.MTC_CSOTCT1.prototype.constructor = SAPB1.MTC_CSOTCT1;
SAPB1.MTC_CSOTCT1.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.MTC_CSOTCT1.LineId = { valueOf: function(){return 'LineId';}, Type: 'Edm.Int32', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.MTC_CSOTCT1.Object = { valueOf: function(){return 'Object';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_CSOTCT1.LogInst = { valueOf: function(){return 'LogInst';}, Type: 'Edm.Int32', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_CSOTCT1.U_ErrCode = { valueOf: function(){return 'U_ErrCode';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_CSOTCT1.U_Active = { valueOf: function(){return 'U_Active';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_CSOTCT1.U_Purpose = { valueOf: function(){return 'U_Purpose';}, Type: 'Edm.String', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_CSOTCT1.prototype.Code = new String();
SAPB1.MTC_CSOTCT1.prototype.LineId = new Number();
SAPB1.MTC_CSOTCT1.prototype.Object = new String();
SAPB1.MTC_CSOTCT1.prototype.LogInst = new Number();
SAPB1.MTC_CSOTCT1.prototype.U_ErrCode = new String();
SAPB1.MTC_CSOTCT1.prototype.U_Active = new String();
SAPB1.MTC_CSOTCT1.prototype.U_Purpose = new String();



SAPB1.MTC_CSOTCT1.create = function (rawObject) {
    var instance = new SAPB1.MTC_CSOTCT1();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.MTC_CSOTCT1.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.MTC_CSOTCT1;
