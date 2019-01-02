

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.WarehouseSublevelCodeParams = function () {
}
SAPB1.WarehouseSublevelCodeParams.prototype = new SAPB1.ComplexType();
SAPB1.WarehouseSublevelCodeParams.prototype.constructor = SAPB1.WarehouseSublevelCodeParams;
SAPB1.WarehouseSublevelCodeParams.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WarehouseSublevelCodeParams.WarehouseSublevel = { valueOf: function(){return 'WarehouseSublevel';}, Type: 'Edm.Int32', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WarehouseSublevelCodeParams.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WarehouseSublevelCodeParams.prototype.AbsEntry = new Number();
SAPB1.WarehouseSublevelCodeParams.prototype.WarehouseSublevel = new Number();
SAPB1.WarehouseSublevelCodeParams.prototype.Code = new String();



SAPB1.WarehouseSublevelCodeParams.create = function (rawObject) {
    var instance = new SAPB1.WarehouseSublevelCodeParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.WarehouseSublevelCodeParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.WarehouseSublevelCodeParams;
