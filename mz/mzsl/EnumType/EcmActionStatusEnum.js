if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}
SAPB1.EcmActionStatusEnum = function (name, value){
    SAPB1.EnumBase.call(this, name, value);
}
SAPB1.EcmActionStatusEnum.prototype = SAPB1.EnumBase.prototype;
SAPB1.EcmActionStatusEnum.prototype.constructor = SAPB1.EcmActionStatusEnum;
SAPB1.EcmActionStatusEnum.lasPending = new SAPB1.EcmActionStatusEnum('lasPending', 'lasPending');
SAPB1.EcmActionStatusEnum.lasAborted = new SAPB1.EcmActionStatusEnum('lasAborted', 'lasAborted');
SAPB1.EcmActionStatusEnum.lasOK = new SAPB1.EcmActionStatusEnum('lasOK', 'lasOK');
SAPB1.EcmActionStatusEnum.lasCanceled = new SAPB1.EcmActionStatusEnum('lasCanceled', 'lasCanceled');
SAPB1.EcmActionStatusEnum.lasQueued = new SAPB1.EcmActionStatusEnum('lasQueued', 'lasQueued');
SAPB1.EcmActionStatusEnum.lasAuthorized = new SAPB1.EcmActionStatusEnum('lasAuthorized', 'lasAuthorized');
SAPB1.EcmActionStatusEnum.lasDocError = new SAPB1.EcmActionStatusEnum('lasDocError', 'lasDocError');
SAPB1.EcmActionStatusEnum.lasInProcess = new SAPB1.EcmActionStatusEnum('lasInProcess', 'lasInProcess');
SAPB1.EcmActionStatusEnum.lasError = new SAPB1.EcmActionStatusEnum('lasError', 'lasError');
SAPB1.EcmActionStatusEnum.lasDenied = new SAPB1.EcmActionStatusEnum('lasDenied', 'lasDenied');
SAPB1.EcmActionStatusEnum.lasSent = new SAPB1.EcmActionStatusEnum('lasSent', 'lasSent');
SAPB1.EcmActionStatusEnum.lasNew = new SAPB1.EcmActionStatusEnum('lasNew', 'lasNew');
SAPB1.EcmActionStatusEnum.lasNone = new SAPB1.EcmActionStatusEnum('lasNone', 'lasNone');
SAPB1.EcmActionStatusEnum.lasImported = new SAPB1.EcmActionStatusEnum('lasImported', 'lasImported');
SAPB1.EcmActionStatusEnum.lasWaiting = new SAPB1.EcmActionStatusEnum('lasWaiting', 'lasWaiting');
SAPB1.EcmActionStatusEnum.lasRejected = new SAPB1.EcmActionStatusEnum('lasRejected', 'lasRejected');

module.exports = SAPB1.EcmActionStatusEnum;
