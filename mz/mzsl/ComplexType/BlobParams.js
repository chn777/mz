var BlobTableKeySegment = require('ComplexType/BlobTableKeySegment')
var BlobTableKeySegmentCollection = require('ComplexType/BlobTableKeySegmentCollection')


var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//Workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.BlobParams = function () {
}
SAPB1.BlobParams.prototype = new SAPB1.ComplexType();
SAPB1.BlobParams.prototype.constructor = SAPB1.BlobParams;
SAPB1.BlobParams.Table = { valueOf: function(){return 'Table';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlobParams.Field = { valueOf: function(){return 'Field';}, Type: 'Edm.String', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlobParams.FileName = { valueOf: function(){return 'FileName';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.BlobParams.BlobTableKeySegments = { valueOf: function(){return 'BlobTableKeySegments';}, Type: 'BlobTableKeySegment', Index: 3, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.BlobParams.prototype.Table = new String();
SAPB1.BlobParams.prototype.Field = new String();
SAPB1.BlobParams.prototype.FileName = new String();
SAPB1.BlobParams.prototype.BlobTableKeySegments = new BlobTableKeySegmentCollection();

SAPB1.BlobParams.BlobTableKeySegment = BlobTableKeySegment
SAPB1.BlobParams.BlobTableKeySegmentCollection = BlobTableKeySegmentCollection


SAPB1.BlobParams.create = function (rawObject) {
    var instance = new SAPB1.BlobParams();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.BlobParams.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.BlobParams;
