var MTC_CSOTCT1 = require('ComplexType/MTC_CSOTCT1')
var MTC_CSOTCT1Collection = require('ComplexType/MTC_CSOTCT1Collection')


var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.MTC_CSOTCT = function () {
}
SAPB1.MTC_CSOTCT.prototype = new SAPB1.EntityType();
SAPB1.MTC_CSOTCT.prototype.constructor = SAPB1.MTC_CSOTCT;
SAPB1.MTC_CSOTCT.prototype.keys.push('Code');
SAPB1.MTC_CSOTCT.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.MTC_CSOTCT.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_CSOTCT.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.MTC_CSOTCT.Canceled = { valueOf: function(){return 'Canceled';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_CSOTCT.Object = { valueOf: function(){return 'Object';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_CSOTCT.LogInst = { valueOf: function(){return 'LogInst';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_CSOTCT.UserSign = { valueOf: function(){return 'UserSign';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_CSOTCT.Transfered = { valueOf: function(){return 'Transfered';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_CSOTCT.CreateDate = { valueOf: function(){return 'CreateDate';}, Type: 'Edm.DateTime', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_CSOTCT.CreateTime = { valueOf: function(){return 'CreateTime';}, Type: 'Edm.Time', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_CSOTCT.UpdateDate = { valueOf: function(){return 'UpdateDate';}, Type: 'Edm.DateTime', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_CSOTCT.UpdateTime = { valueOf: function(){return 'UpdateTime';}, Type: 'Edm.Time', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_CSOTCT.DataSource = { valueOf: function(){return 'DataSource';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_CSOTCT.U_ObjectList = { valueOf: function(){return 'U_ObjectList';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_CSOTCT.U_Active = { valueOf: function(){return 'U_Active';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_CSOTCT.U_TransTpLst = { valueOf: function(){return 'U_TransTpLst';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_CSOTCT.U_Procedure = { valueOf: function(){return 'U_Procedure';}, Type: 'Edm.String', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_CSOTCT.MTC_CSOTCT1Collection = { valueOf: function(){return 'MTC_CSOTCT1Collection';}, Type: 'MTC_CSOTCT1', Index: 17, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.MTC_CSOTCT.prototype.Code = new String();
SAPB1.MTC_CSOTCT.prototype.Name = new String();
SAPB1.MTC_CSOTCT.prototype.DocEntry = new Number();
SAPB1.MTC_CSOTCT.prototype.Canceled = new String();
SAPB1.MTC_CSOTCT.prototype.Object = new String();
SAPB1.MTC_CSOTCT.prototype.LogInst = new Number();
SAPB1.MTC_CSOTCT.prototype.UserSign = new Number();
SAPB1.MTC_CSOTCT.prototype.Transfered = new String();
SAPB1.MTC_CSOTCT.prototype.CreateDate = new String();
SAPB1.MTC_CSOTCT.prototype.CreateTime = new String();
SAPB1.MTC_CSOTCT.prototype.UpdateDate = new String();
SAPB1.MTC_CSOTCT.prototype.UpdateTime = new String();
SAPB1.MTC_CSOTCT.prototype.DataSource = new String();
SAPB1.MTC_CSOTCT.prototype.U_ObjectList = new String();
SAPB1.MTC_CSOTCT.prototype.U_Active = new String();
SAPB1.MTC_CSOTCT.prototype.U_TransTpLst = new String();
SAPB1.MTC_CSOTCT.prototype.U_Procedure = new String();
SAPB1.MTC_CSOTCT.prototype.MTC_CSOTCT1Collection = new MTC_CSOTCT1Collection();

SAPB1.MTC_CSOTCT.MTC_CSOTCT1 = MTC_CSOTCT1
SAPB1.MTC_CSOTCT.MTC_CSOTCT1Collection = MTC_CSOTCT1Collection


SAPB1.MTC_CSOTCT.create = function (rawObject) {
    var instance = new SAPB1.MTC_CSOTCT();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.MTC_CSOTCT.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.MTC_CSOTCT;
