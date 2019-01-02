var MTC_CIOTRN1 = require('ComplexType/MTC_CIOTRN1')
var MTC_CIOTRN1Collection = require('ComplexType/MTC_CIOTRN1Collection')


var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.MTC_CIOTRN = function () {
}
SAPB1.MTC_CIOTRN.prototype = new SAPB1.EntityType();
SAPB1.MTC_CIOTRN.prototype.constructor = SAPB1.MTC_CIOTRN;
SAPB1.MTC_CIOTRN.prototype.keys.push('Code');
SAPB1.MTC_CIOTRN.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.MTC_CIOTRN.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_CIOTRN.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.MTC_CIOTRN.Canceled = { valueOf: function(){return 'Canceled';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_CIOTRN.Object = { valueOf: function(){return 'Object';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_CIOTRN.LogInst = { valueOf: function(){return 'LogInst';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_CIOTRN.UserSign = { valueOf: function(){return 'UserSign';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_CIOTRN.Transfered = { valueOf: function(){return 'Transfered';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_CIOTRN.CreateDate = { valueOf: function(){return 'CreateDate';}, Type: 'Edm.DateTime', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_CIOTRN.CreateTime = { valueOf: function(){return 'CreateTime';}, Type: 'Edm.Time', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_CIOTRN.UpdateDate = { valueOf: function(){return 'UpdateDate';}, Type: 'Edm.DateTime', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_CIOTRN.UpdateTime = { valueOf: function(){return 'UpdateTime';}, Type: 'Edm.Time', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_CIOTRN.DataSource = { valueOf: function(){return 'DataSource';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_CIOTRN.U_ForType = { valueOf: function(){return 'U_ForType';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_CIOTRN.U_SrcType = { valueOf: function(){return 'U_SrcType';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_CIOTRN.MTC_CIOTRN1Collection = { valueOf: function(){return 'MTC_CIOTRN1Collection';}, Type: 'MTC_CIOTRN1', Index: 15, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.MTC_CIOTRN.prototype.Code = new String();
SAPB1.MTC_CIOTRN.prototype.Name = new String();
SAPB1.MTC_CIOTRN.prototype.DocEntry = new Number();
SAPB1.MTC_CIOTRN.prototype.Canceled = new String();
SAPB1.MTC_CIOTRN.prototype.Object = new String();
SAPB1.MTC_CIOTRN.prototype.LogInst = new Number();
SAPB1.MTC_CIOTRN.prototype.UserSign = new Number();
SAPB1.MTC_CIOTRN.prototype.Transfered = new String();
SAPB1.MTC_CIOTRN.prototype.CreateDate = new String();
SAPB1.MTC_CIOTRN.prototype.CreateTime = new String();
SAPB1.MTC_CIOTRN.prototype.UpdateDate = new String();
SAPB1.MTC_CIOTRN.prototype.UpdateTime = new String();
SAPB1.MTC_CIOTRN.prototype.DataSource = new String();
SAPB1.MTC_CIOTRN.prototype.U_ForType = new String();
SAPB1.MTC_CIOTRN.prototype.U_SrcType = new String();
SAPB1.MTC_CIOTRN.prototype.MTC_CIOTRN1Collection = new MTC_CIOTRN1Collection();

SAPB1.MTC_CIOTRN.MTC_CIOTRN1 = MTC_CIOTRN1
SAPB1.MTC_CIOTRN.MTC_CIOTRN1Collection = MTC_CIOTRN1Collection


SAPB1.MTC_CIOTRN.create = function (rawObject) {
    var instance = new SAPB1.MTC_CIOTRN();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.MTC_CIOTRN.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.MTC_CIOTRN;
