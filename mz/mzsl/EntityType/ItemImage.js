

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.ItemImage = function () {
}
SAPB1.ItemImage.prototype = new SAPB1.EntityType();
SAPB1.ItemImage.prototype.constructor = SAPB1.ItemImage;
SAPB1.ItemImage.prototype.keys.push('ItemCode');
SAPB1.ItemImage.ItemCode = { valueOf: function(){return 'ItemCode';}, Type: 'Edm.String', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ItemImage.Picture = { valueOf: function(){return 'Picture';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.ItemImage.prototype.ItemCode = new String();
SAPB1.ItemImage.prototype.Picture = new String();



SAPB1.ItemImage.create = function (rawObject) {
    var instance = new SAPB1.ItemImage();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.ItemImage.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.ItemImage;
