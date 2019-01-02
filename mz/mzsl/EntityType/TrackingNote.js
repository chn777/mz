var TrackingNoteItem = require('ComplexType/TrackingNoteItem')
var TrackingNoteItemCollection = require('ComplexType/TrackingNoteItemCollection')
var TrackingNoteBroker = require('ComplexType/TrackingNoteBroker')
var TrackingNoteBrokerCollection = require('ComplexType/TrackingNoteBrokerCollection')

var BoYesNoEnum = require('EnumType/BoYesNoEnum')

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.TrackingNote = function () {
}
SAPB1.TrackingNote.prototype = new SAPB1.EntityType();
SAPB1.TrackingNote.prototype.constructor = SAPB1.TrackingNote;
SAPB1.TrackingNote.prototype.keys.push('TrackingNoteNumber');
SAPB1.TrackingNote.TrackingNoteNumber = { valueOf: function(){return 'TrackingNoteNumber';}, Type: 'Edm.Int32', Index: 0, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.TrackingNote.CCDNumber = { valueOf: function(){return 'CCDNumber';}, Type: 'Edm.String', Index: 1, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.TrackingNote.Date = { valueOf: function(){return 'Date';}, Type: 'Edm.DateTime', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TrackingNote.CustomsTerminal = { valueOf: function(){return 'CustomsTerminal';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TrackingNote.CountryOfOrigin = { valueOf: function(){return 'CountryOfOrigin';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.TrackingNote.IsDirectImport = { valueOf: function(){return 'IsDirectImport';}, Type: 'BoYesNoEnum', Index: 5, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.TrackingNote.TrackingNoteItemCollection = { valueOf: function(){return 'TrackingNoteItemCollection';}, Type: 'TrackingNoteItem', Index: 6, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.TrackingNote.TrackingNoteBrokerCollection = { valueOf: function(){return 'TrackingNoteBrokerCollection';}, Type: 'TrackingNoteBroker', Index: 7, Nullable: true, IsArray: true, IsComplex: true };
SAPB1.TrackingNote.prototype.TrackingNoteNumber = new Number();
SAPB1.TrackingNote.prototype.CCDNumber = new String();
SAPB1.TrackingNote.prototype.Date = new String();
SAPB1.TrackingNote.prototype.CustomsTerminal = new String();
SAPB1.TrackingNote.prototype.CountryOfOrigin = new String();
SAPB1.TrackingNote.prototype.IsDirectImport = new String();
SAPB1.TrackingNote.prototype.TrackingNoteItemCollection = new TrackingNoteItemCollection();
SAPB1.TrackingNote.prototype.TrackingNoteBrokerCollection = new TrackingNoteBrokerCollection();

SAPB1.TrackingNote.TrackingNoteItem = TrackingNoteItem
SAPB1.TrackingNote.TrackingNoteItemCollection = TrackingNoteItemCollection
SAPB1.TrackingNote.TrackingNoteBroker = TrackingNoteBroker
SAPB1.TrackingNote.TrackingNoteBrokerCollection = TrackingNoteBrokerCollection

SAPB1.TrackingNote.BoYesNoEnum = BoYesNoEnum

SAPB1.TrackingNote.create = function (rawObject) {
    var instance = new SAPB1.TrackingNote();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.TrackingNote.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.TrackingNote;
