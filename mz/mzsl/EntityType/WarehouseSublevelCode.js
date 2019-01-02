

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.WarehouseSublevelCode = function () {
}
SAPB1.WarehouseSublevelCode.prototype = new SAPB1.EntityType();
SAPB1.WarehouseSublevelCode.prototype.constructor = SAPB1.WarehouseSublevelCode;
SAPB1.WarehouseSublevelCode.prototype.keys.push('AbsEntry');
SAPB1.WarehouseSublevelCode.WarehouseSublevel = { valueOf: function(){return 'WarehouseSublevel';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.WarehouseSublevelCode.Code = { valueOf: function(){return 'Code';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.WarehouseSublevelCode.Description = { valueOf: function(){return 'Description';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.WarehouseSublevelCode.AbsEntry = { valueOf: function(){return 'AbsEntry';}, Type: 'Edm.Int32', Index: 3, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.WarehouseSublevelCode.prototype.WarehouseSublevel = new Number();
SAPB1.WarehouseSublevelCode.prototype.Code = new String();
SAPB1.WarehouseSublevelCode.prototype.Description = new String();
SAPB1.WarehouseSublevelCode.prototype.AbsEntry = new Number();



SAPB1.WarehouseSublevelCode.create = function (rawObject) {
    var instance = new SAPB1.WarehouseSublevelCode();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.WarehouseSublevelCode.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.WarehouseSublevelCode;
