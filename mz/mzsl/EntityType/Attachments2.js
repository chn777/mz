var Attachments2_Line = require('ComplexType/Attachments2_Line')
var Attachments2_LineCollection = require('ComplexType/Attachments2_LineCollection')


var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.Attachments2 = function () {
}
SAPB1.Attachments2.prototype = new SAPB1.EntityType();
SAPB1.Attachments2.prototype.constructor = SAPB1.Attachments2;
SAPB1.Attachments2.prototype.keys.push('AbsoluteEntry');
SAPB1.Attachments2.AbsoluteEntry = { valueOf: function(){return 'AbsoluteEntry';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.Attachments2.Attachments2_Lines = { valueOf: function(){return 'Attachments2_Lines';}, Type: 'Attachments2_Line', Index: 1, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.Attachments2.prototype.AbsoluteEntry = new Number();
SAPB1.Attachments2.prototype.Attachments2_Lines = new Attachments2_LineCollection();

SAPB1.Attachments2.Attachments2_Line = Attachments2_Line
SAPB1.Attachments2.Attachments2_LineCollection = Attachments2_LineCollection


SAPB1.Attachments2.create = function (rawObject) {
    var instance = new SAPB1.Attachments2();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.Attachments2.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.Attachments2;
