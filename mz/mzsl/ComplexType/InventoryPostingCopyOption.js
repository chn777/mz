
var InventoryPostingCopyOptionEnum = require('EnumType/InventoryPostingCopyOptionEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.InventoryPostingCopyOption = function () {
}
SAPB1.InventoryPostingCopyOption.prototype = new SAPB1.ComplexType();
SAPB1.InventoryPostingCopyOption.prototype.constructor = SAPB1.InventoryPostingCopyOption;
SAPB1.InventoryPostingCopyOption.BaseEntry = { valueOf: function(){return 'BaseEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingCopyOption.CopyOption = { valueOf: function(){return 'CopyOption';}, Type: 'InventoryPostingCopyOptionEnum', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.InventoryPostingCopyOption.prototype.BaseEntry = new Number();
SAPB1.InventoryPostingCopyOption.prototype.CopyOption = new String();


SAPB1.InventoryPostingCopyOption.InventoryPostingCopyOptionEnum = InventoryPostingCopyOptionEnum

SAPB1.InventoryPostingCopyOption.create = function (rawObject) {
    var instance = new SAPB1.InventoryPostingCopyOption();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.InventoryPostingCopyOption.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.InventoryPostingCopyOption;
