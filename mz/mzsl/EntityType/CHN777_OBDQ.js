

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.CHN777_OBDQ = function () {
}
SAPB1.CHN777_OBDQ.prototype = new SAPB1.EntityType();
SAPB1.CHN777_OBDQ.prototype.constructor = SAPB1.CHN777_OBDQ;
SAPB1.CHN777_OBDQ.prototype.keys.push('id__');
SAPB1.CHN777_OBDQ.ItemCode = { valueOf: function(){return 'ItemCode';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CHN777_OBDQ.WhsCode = { valueOf: function(){return 'WhsCode';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CHN777_OBDQ.SysNumber = { valueOf: function(){return 'SysNumber';}, Type: 'Edm.Int32', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CHN777_OBDQ.Quantity = { valueOf: function(){return 'Quantity';}, Type: 'Edm.Double', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CHN777_OBDQ.CommitQty = { valueOf: function(){return 'CommitQty';}, Type: 'Edm.Double', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CHN777_OBDQ.CountQty = { valueOf: function(){return 'CountQty';}, Type: 'Edm.Double', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CHN777_OBDQ.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CHN777_OBDQ.MdAbsEntry = { valueOf: function(){return 'MdAbsEntry';}, Type: 'Edm.Int32', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CHN777_OBDQ.TrackingNt = { valueOf: function(){return 'TrackingNt';}, Type: 'Edm.Int32', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CHN777_OBDQ.TrackiNtLn = { valueOf: function(){return 'TrackiNtLn';}, Type: 'Edm.Int32', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CHN777_OBDQ.CCDQuant = { valueOf: function(){return 'CCDQuant';}, Type: 'Edm.Double', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.CHN777_OBDQ.id__ = { valueOf: function(){return 'id__';}, Type: 'Edm.Int32', Index: 11, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.CHN777_OBDQ.prototype.ItemCode = new String();
SAPB1.CHN777_OBDQ.prototype.WhsCode = new String();
SAPB1.CHN777_OBDQ.prototype.SysNumber = new Number();
SAPB1.CHN777_OBDQ.prototype.Quantity = new Number();
SAPB1.CHN777_OBDQ.prototype.CommitQty = new Number();
SAPB1.CHN777_OBDQ.prototype.CountQty = new Number();
SAPB1.CHN777_OBDQ.prototype.AbsEntry = new Number();
SAPB1.CHN777_OBDQ.prototype.MdAbsEntry = new Number();
SAPB1.CHN777_OBDQ.prototype.TrackingNt = new Number();
SAPB1.CHN777_OBDQ.prototype.TrackiNtLn = new Number();
SAPB1.CHN777_OBDQ.prototype.CCDQuant = new Number();
SAPB1.CHN777_OBDQ.prototype.id__ = new Number();



SAPB1.CHN777_OBDQ.create = function (rawObject) {
    var instance = new SAPB1.CHN777_OBDQ();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.CHN777_OBDQ.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.CHN777_OBDQ;
