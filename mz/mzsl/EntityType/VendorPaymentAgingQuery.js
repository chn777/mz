

var ServiceLayerModule = require('Base/ServiceLayerModule.js');

//workaround the possible intellisense bug of VS
if (typeof (SAPB1) === "undefined") {
    SAPB1 = {};
}

SAPB1.VendorPaymentAgingQuery = function () {
}
SAPB1.VendorPaymentAgingQuery.prototype = new SAPB1.EntityType();
SAPB1.VendorPaymentAgingQuery.prototype.constructor = SAPB1.VendorPaymentAgingQuery;
SAPB1.VendorPaymentAgingQuery.prototype.keys.push('id__');
SAPB1.VendorPaymentAgingQuery.BaseDocumentNumber = { valueOf: function(){return 'BaseDocumentNumber';}, Type: 'Edm.String', Index: 0, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.InstallmentNumber = { valueOf: function(){return 'InstallmentNumber';}, Type: 'Edm.Int16', Index: 1, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.ConsolidatedBPCode = { valueOf: function(){return 'ConsolidatedBPCode';}, Type: 'Edm.String', Index: 2, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.ConsolidatedBPName = { valueOf: function(){return 'ConsolidatedBPName';}, Type: 'Edm.String', Index: 3, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.BranchName = { valueOf: function(){return 'BranchName';}, Type: 'Edm.String', Index: 4, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.BusinessPartnerReferenceNum = { valueOf: function(){return 'BusinessPartnerReferenceNum';}, Type: 'Edm.String', Index: 5, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.NumberOfDaysOutstanding = { valueOf: function(){return 'NumberOfDaysOutstanding';}, Type: 'Edm.Int32', Index: 6, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.AgingBucket = { valueOf: function(){return 'AgingBucket';}, Type: 'Edm.String', Index: 7, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.PostingDate = { valueOf: function(){return 'PostingDate';}, Type: 'Edm.Date', Index: 8, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.PostingYear = { valueOf: function(){return 'PostingYear';}, Type: 'Edm.String', Index: 9, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.PostingQuarter = { valueOf: function(){return 'PostingQuarter';}, Type: 'Edm.String', Index: 10, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.PostingMonth = { valueOf: function(){return 'PostingMonth';}, Type: 'Edm.String', Index: 11, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.PostingDateSQL = { valueOf: function(){return 'PostingDateSQL';}, Type: 'Edm.Date', Index: 12, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.PostingYearAndQuarter = { valueOf: function(){return 'PostingYearAndQuarter';}, Type: 'Edm.String', Index: 13, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.PostingYearAndMonth = { valueOf: function(){return 'PostingYearAndMonth';}, Type: 'Edm.String', Index: 14, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.PostingYearAndWeek = { valueOf: function(){return 'PostingYearAndWeek';}, Type: 'Edm.String', Index: 15, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.DueDate = { valueOf: function(){return 'DueDate';}, Type: 'Edm.Date', Index: 16, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.DueYear = { valueOf: function(){return 'DueYear';}, Type: 'Edm.String', Index: 17, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.DueQuarter = { valueOf: function(){return 'DueQuarter';}, Type: 'Edm.String', Index: 18, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.DueMonth = { valueOf: function(){return 'DueMonth';}, Type: 'Edm.String', Index: 19, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.DueDateSQL = { valueOf: function(){return 'DueDateSQL';}, Type: 'Edm.Date', Index: 20, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.DueYearAndQuarter = { valueOf: function(){return 'DueYearAndQuarter';}, Type: 'Edm.String', Index: 21, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.DueYearAndMonth = { valueOf: function(){return 'DueYearAndMonth';}, Type: 'Edm.String', Index: 22, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.DueYearAndWeek = { valueOf: function(){return 'DueYearAndWeek';}, Type: 'Edm.String', Index: 23, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.DocumentDate = { valueOf: function(){return 'DocumentDate';}, Type: 'Edm.Date', Index: 24, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.DocumentYear = { valueOf: function(){return 'DocumentYear';}, Type: 'Edm.String', Index: 25, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.DocumentQuarter = { valueOf: function(){return 'DocumentQuarter';}, Type: 'Edm.String', Index: 26, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.DocumentMonth = { valueOf: function(){return 'DocumentMonth';}, Type: 'Edm.String', Index: 27, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.DocumentDateSQL = { valueOf: function(){return 'DocumentDateSQL';}, Type: 'Edm.Date', Index: 28, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.DocumentYearAndQuarter = { valueOf: function(){return 'DocumentYearAndQuarter';}, Type: 'Edm.String', Index: 29, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.DocumentYearAndMonth = { valueOf: function(){return 'DocumentYearAndMonth';}, Type: 'Edm.String', Index: 30, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.DocumentYearAndWeek = { valueOf: function(){return 'DocumentYearAndWeek';}, Type: 'Edm.String', Index: 31, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.DocumentTypeCode = { valueOf: function(){return 'DocumentTypeCode';}, Type: 'Edm.String', Index: 32, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.DocumentTypeDisplayName = { valueOf: function(){return 'DocumentTypeDisplayName';}, Type: 'Edm.String', Index: 33, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.DocumentTypeGroup = { valueOf: function(){return 'DocumentTypeGroup';}, Type: 'Edm.String', Index: 34, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.AccountCode = { valueOf: function(){return 'AccountCode';}, Type: 'Edm.String', Index: 35, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.SegmentationAccountCode = { valueOf: function(){return 'SegmentationAccountCode';}, Type: 'Edm.String', Index: 36, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.AccountName = { valueOf: function(){return 'AccountName';}, Type: 'Edm.String', Index: 37, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.ParentAccountCode = { valueOf: function(){return 'ParentAccountCode';}, Type: 'Edm.String', Index: 38, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.ParentAccountName = { valueOf: function(){return 'ParentAccountName';}, Type: 'Edm.String', Index: 39, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.AccountNameAndCode = { valueOf: function(){return 'AccountNameAndCode';}, Type: 'Edm.String', Index: 40, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.ParentAccountNameAndCode = { valueOf: function(){return 'ParentAccountNameAndCode';}, Type: 'Edm.String', Index: 41, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.BusinessPartnerCode = { valueOf: function(){return 'BusinessPartnerCode';}, Type: 'Edm.String', Index: 42, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.BusinessPartnerName = { valueOf: function(){return 'BusinessPartnerName';}, Type: 'Edm.String', Index: 43, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.BusinessPartnerNameAndCode = { valueOf: function(){return 'BusinessPartnerNameAndCode';}, Type: 'Edm.String', Index: 44, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.BusinessPartnerType = { valueOf: function(){return 'BusinessPartnerType';}, Type: 'Edm.String', Index: 45, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.BusinessPartnerGroupName = { valueOf: function(){return 'BusinessPartnerGroupName';}, Type: 'Edm.String', Index: 46, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.IndustryName = { valueOf: function(){return 'IndustryName';}, Type: 'Edm.String', Index: 47, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.IndustryDescription = { valueOf: function(){return 'IndustryDescription';}, Type: 'Edm.String', Index: 48, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.BusinessPartnerIsActive = { valueOf: function(){return 'BusinessPartnerIsActive';}, Type: 'Edm.String', Index: 49, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.IsCompanyOrPrivate = { valueOf: function(){return 'IsCompanyOrPrivate';}, Type: 'Edm.String', Index: 50, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.DunningTermCode = { valueOf: function(){return 'DunningTermCode';}, Type: 'Edm.String', Index: 51, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.DunningTermName = { valueOf: function(){return 'DunningTermName';}, Type: 'Edm.String', Index: 52, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.PaymentMethodCode = { valueOf: function(){return 'PaymentMethodCode';}, Type: 'Edm.String', Index: 53, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.BusinessPartnerCurrency = { valueOf: function(){return 'BusinessPartnerCurrency';}, Type: 'Edm.String', Index: 54, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.SalesEmployeeOrBuyerNumber = { valueOf: function(){return 'SalesEmployeeOrBuyerNumber';}, Type: 'Edm.Int32', Index: 55, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.SalesEmployeeOrBuyerName = { valueOf: function(){return 'SalesEmployeeOrBuyerName';}, Type: 'Edm.String', Index: 56, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.EmployeeIsActive = { valueOf: function(){return 'EmployeeIsActive';}, Type: 'Edm.String', Index: 57, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.UserCode = { valueOf: function(){return 'UserCode';}, Type: 'Edm.String', Index: 58, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.UserName = { valueOf: function(){return 'UserName';}, Type: 'Edm.String', Index: 59, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.EmployeeBranch = { valueOf: function(){return 'EmployeeBranch';}, Type: 'Edm.String', Index: 60, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.EmployeeDepartment = { valueOf: function(){return 'EmployeeDepartment';}, Type: 'Edm.String', Index: 61, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.Manager = { valueOf: function(){return 'Manager';}, Type: 'Edm.String', Index: 62, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.ProjectCode = { valueOf: function(){return 'ProjectCode';}, Type: 'Edm.String', Index: 63, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.ProjectName = { valueOf: function(){return 'ProjectName';}, Type: 'Edm.String', Index: 64, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.ProjectNameAndCode = { valueOf: function(){return 'ProjectNameAndCode';}, Type: 'Edm.String', Index: 65, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.OriginalAmountLC = { valueOf: function(){return 'OriginalAmountLC';}, Type: 'Edm.Double', Index: 66, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.AgingBalanceDueLC = { valueOf: function(){return 'AgingBalanceDueLC';}, Type: 'Edm.Double', Index: 67, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.FutureRemitLC = { valueOf: function(){return 'FutureRemitLC';}, Type: 'Edm.Double', Index: 68, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.OverdueLC = { valueOf: function(){return 'OverdueLC';}, Type: 'Edm.Double', Index: 69, Nullable: true, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.id__ = { valueOf: function(){return 'id__';}, Type: 'Edm.Int32', Index: 70, Nullable: false, IsArray: false, IsComplex: false };
SAPB1.VendorPaymentAgingQuery.prototype.BaseDocumentNumber = new String();
SAPB1.VendorPaymentAgingQuery.prototype.InstallmentNumber = new Number();
SAPB1.VendorPaymentAgingQuery.prototype.ConsolidatedBPCode = new String();
SAPB1.VendorPaymentAgingQuery.prototype.ConsolidatedBPName = new String();
SAPB1.VendorPaymentAgingQuery.prototype.BranchName = new String();
SAPB1.VendorPaymentAgingQuery.prototype.BusinessPartnerReferenceNum = new String();
SAPB1.VendorPaymentAgingQuery.prototype.NumberOfDaysOutstanding = new Number();
SAPB1.VendorPaymentAgingQuery.prototype.AgingBucket = new String();
SAPB1.VendorPaymentAgingQuery.prototype.PostingDate = new String();
SAPB1.VendorPaymentAgingQuery.prototype.PostingYear = new String();
SAPB1.VendorPaymentAgingQuery.prototype.PostingQuarter = new String();
SAPB1.VendorPaymentAgingQuery.prototype.PostingMonth = new String();
SAPB1.VendorPaymentAgingQuery.prototype.PostingDateSQL = new String();
SAPB1.VendorPaymentAgingQuery.prototype.PostingYearAndQuarter = new String();
SAPB1.VendorPaymentAgingQuery.prototype.PostingYearAndMonth = new String();
SAPB1.VendorPaymentAgingQuery.prototype.PostingYearAndWeek = new String();
SAPB1.VendorPaymentAgingQuery.prototype.DueDate = new String();
SAPB1.VendorPaymentAgingQuery.prototype.DueYear = new String();
SAPB1.VendorPaymentAgingQuery.prototype.DueQuarter = new String();
SAPB1.VendorPaymentAgingQuery.prototype.DueMonth = new String();
SAPB1.VendorPaymentAgingQuery.prototype.DueDateSQL = new String();
SAPB1.VendorPaymentAgingQuery.prototype.DueYearAndQuarter = new String();
SAPB1.VendorPaymentAgingQuery.prototype.DueYearAndMonth = new String();
SAPB1.VendorPaymentAgingQuery.prototype.DueYearAndWeek = new String();
SAPB1.VendorPaymentAgingQuery.prototype.DocumentDate = new String();
SAPB1.VendorPaymentAgingQuery.prototype.DocumentYear = new String();
SAPB1.VendorPaymentAgingQuery.prototype.DocumentQuarter = new String();
SAPB1.VendorPaymentAgingQuery.prototype.DocumentMonth = new String();
SAPB1.VendorPaymentAgingQuery.prototype.DocumentDateSQL = new String();
SAPB1.VendorPaymentAgingQuery.prototype.DocumentYearAndQuarter = new String();
SAPB1.VendorPaymentAgingQuery.prototype.DocumentYearAndMonth = new String();
SAPB1.VendorPaymentAgingQuery.prototype.DocumentYearAndWeek = new String();
SAPB1.VendorPaymentAgingQuery.prototype.DocumentTypeCode = new String();
SAPB1.VendorPaymentAgingQuery.prototype.DocumentTypeDisplayName = new String();
SAPB1.VendorPaymentAgingQuery.prototype.DocumentTypeGroup = new String();
SAPB1.VendorPaymentAgingQuery.prototype.AccountCode = new String();
SAPB1.VendorPaymentAgingQuery.prototype.SegmentationAccountCode = new String();
SAPB1.VendorPaymentAgingQuery.prototype.AccountName = new String();
SAPB1.VendorPaymentAgingQuery.prototype.ParentAccountCode = new String();
SAPB1.VendorPaymentAgingQuery.prototype.ParentAccountName = new String();
SAPB1.VendorPaymentAgingQuery.prototype.AccountNameAndCode = new String();
SAPB1.VendorPaymentAgingQuery.prototype.ParentAccountNameAndCode = new String();
SAPB1.VendorPaymentAgingQuery.prototype.BusinessPartnerCode = new String();
SAPB1.VendorPaymentAgingQuery.prototype.BusinessPartnerName = new String();
SAPB1.VendorPaymentAgingQuery.prototype.BusinessPartnerNameAndCode = new String();
SAPB1.VendorPaymentAgingQuery.prototype.BusinessPartnerType = new String();
SAPB1.VendorPaymentAgingQuery.prototype.BusinessPartnerGroupName = new String();
SAPB1.VendorPaymentAgingQuery.prototype.IndustryName = new String();
SAPB1.VendorPaymentAgingQuery.prototype.IndustryDescription = new String();
SAPB1.VendorPaymentAgingQuery.prototype.BusinessPartnerIsActive = new String();
SAPB1.VendorPaymentAgingQuery.prototype.IsCompanyOrPrivate = new String();
SAPB1.VendorPaymentAgingQuery.prototype.DunningTermCode = new String();
SAPB1.VendorPaymentAgingQuery.prototype.DunningTermName = new String();
SAPB1.VendorPaymentAgingQuery.prototype.PaymentMethodCode = new String();
SAPB1.VendorPaymentAgingQuery.prototype.BusinessPartnerCurrency = new String();
SAPB1.VendorPaymentAgingQuery.prototype.SalesEmployeeOrBuyerNumber = new Number();
SAPB1.VendorPaymentAgingQuery.prototype.SalesEmployeeOrBuyerName = new String();
SAPB1.VendorPaymentAgingQuery.prototype.EmployeeIsActive = new String();
SAPB1.VendorPaymentAgingQuery.prototype.UserCode = new String();
SAPB1.VendorPaymentAgingQuery.prototype.UserName = new String();
SAPB1.VendorPaymentAgingQuery.prototype.EmployeeBranch = new String();
SAPB1.VendorPaymentAgingQuery.prototype.EmployeeDepartment = new String();
SAPB1.VendorPaymentAgingQuery.prototype.Manager = new String();
SAPB1.VendorPaymentAgingQuery.prototype.ProjectCode = new String();
SAPB1.VendorPaymentAgingQuery.prototype.ProjectName = new String();
SAPB1.VendorPaymentAgingQuery.prototype.ProjectNameAndCode = new String();
SAPB1.VendorPaymentAgingQuery.prototype.OriginalAmountLC = new Number();
SAPB1.VendorPaymentAgingQuery.prototype.AgingBalanceDueLC = new Number();
SAPB1.VendorPaymentAgingQuery.prototype.FutureRemitLC = new Number();
SAPB1.VendorPaymentAgingQuery.prototype.OverdueLC = new Number();
SAPB1.VendorPaymentAgingQuery.prototype.id__ = new Number();



SAPB1.VendorPaymentAgingQuery.create = function (rawObject) {
    var instance = new SAPB1.VendorPaymentAgingQuery();
    for (var prop in rawObject) {
        if (rawObject.hasOwnProperty(prop)) {
            if (SAPB1.VendorPaymentAgingQuery.prototype.hasOwnProperty(prop)) {
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


module.exports = SAPB1.VendorPaymentAgingQuery;
