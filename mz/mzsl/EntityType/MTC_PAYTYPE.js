var MTC_PAYTYPE1 = require('ComplexType/MTC_PAYTYPE1')
var MTC_PAYTYPE1Collection = require('ComplexType/MTC_PAYTYPE1Collection')


var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.MTC_PAYTYPE = function () {
}
SAPB1.MTC_PAYTYPE.prototype = new SAPB1.EntityType();
SAPB1.MTC_PAYTYPE.prototype.constructor = SAPB1.MTC_PAYTYPE;
SAPB1.MTC_PAYTYPE.prototype.keys.push('Code');
SAPB1.MTC_PAYTYPE.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.MTC_PAYTYPE.Name = { valueOf: function(){return 'Name';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_PAYTYPE.DocEntry = { valueOf: function(){return 'DocEntry';}, Type: 'Edm.Int32', Index: 2, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.MTC_PAYTYPE.Canceled = { valueOf: function(){return 'Canceled';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_PAYTYPE.Object = { valueOf: function(){return 'Object';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_PAYTYPE.LogInst = { valueOf: function(){return 'LogInst';}, Type: 'Edm.Int32', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_PAYTYPE.UserSign = { valueOf: function(){return 'UserSign';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_PAYTYPE.Transfered = { valueOf: function(){return 'Transfered';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_PAYTYPE.CreateDate = { valueOf: function(){return 'CreateDate';}, Type: 'Edm.DateTime', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_PAYTYPE.CreateTime = { valueOf: function(){return 'CreateTime';}, Type: 'Edm.Time', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_PAYTYPE.UpdateDate = { valueOf: function(){return 'UpdateDate';}, Type: 'Edm.DateTime', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_PAYTYPE.UpdateTime = { valueOf: function(){return 'UpdateTime';}, Type: 'Edm.Time', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_PAYTYPE.DataSource = { valueOf: function(){return 'DataSource';}, Type: 'Edm.String', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.MTC_PAYTYPE.MTC_PAYTYPE1Collection = { valueOf: function(){return 'MTC_PAYTYPE1Collection';}, Type: 'MTC_PAYTYPE1', Index: 13, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.MTC_PAYTYPE.prototype.Code = new String();
SAPB1.MTC_PAYTYPE.prototype.Name = new String();
SAPB1.MTC_PAYTYPE.prototype.DocEntry = new Number();
SAPB1.MTC_PAYTYPE.prototype.Canceled = new String();
SAPB1.MTC_PAYTYPE.prototype.Object = new String();
SAPB1.MTC_PAYTYPE.prototype.LogInst = new Number();
SAPB1.MTC_PAYTYPE.prototype.UserSign = new Number();
SAPB1.MTC_PAYTYPE.prototype.Transfered = new String();
SAPB1.MTC_PAYTYPE.prototype.CreateDate = new String();
SAPB1.MTC_PAYTYPE.prototype.CreateTime = new String();
SAPB1.MTC_PAYTYPE.prototype.UpdateDate = new String();
SAPB1.MTC_PAYTYPE.prototype.UpdateTime = new String();
SAPB1.MTC_PAYTYPE.prototype.DataSource = new String();
SAPB1.MTC_PAYTYPE.prototype.MTC_PAYTYPE1Collection = new MTC_PAYTYPE1Collection();

SAPB1.MTC_PAYTYPE.MTC_PAYTYPE1 = MTC_PAYTYPE1
SAPB1.MTC_PAYTYPE.MTC_PAYTYPE1Collection = MTC_PAYTYPE1Collection


SAPB1.MTC_PAYTYPE.create = function (rawObject) {
    var instance = new SAPB1.MTC_PAYTYPE();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.MTC_PAYTYPE.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.MTC_PAYTYPE;
