if (typeof (SAPB1) === "undefined") {
    SAPB1 = require('Base/ServiceLayerModule.js');
}

var http = require('HttpModule.js');

SAPB1.DataServiceResponse = function (operation, status, body) {
    this.operation = operation;
    this.status = parseInt(status);
    this.body = body;
}
SAPB1.DataServiceResponse.prototype.isOK = function () {
    var ret = true;
    if (this.operation === 'add') {
        ret = this.status === http.HttpStatus.HTTP_CREATED;
    } else if (this.operation === 'update' || this.operation === 'remove') {
        ret = this.status === http.HttpStatus.HTTP_NO_CONTENT;
    } else if (this.operation === 'get') {
        ret = this.status === http.HttpStatus.HTTP_OK;
    }
    return ret;
}

SAPB1.DataServiceResponse.prototype.getErrCode = function (){
    var code = 0;
    if (!this.isOK()) {
        code = this.body.error.code;
    }
    return code;
}

SAPB1.DataServiceResponse.prototype.getErrMsg = function () {
    var message = ''
    if (!this.isOK()) {
        message = this.body.error.message.value;
    } 
    return message;
}

SAPB1.QueryResponse = function (status, body) {
    var _status = status, _body = body;
    this.toArray = function () {
        return [].concat(_body.value);
    }
    this.getNextLink = function () {
        var annotation = "odata.nextLink";
        if (_body.hasOwnProperty(annotation)) {
            return _body[annotation];
        }
        annotation = "@odata.nextLink";
        if (_body.hasOwnProperty(annotation)) {
            return _body[annotation];
        }
        return undefined;
    }
};


SAPB1.Utility = {
    isStringQuoted: function (val) {
        var isQuoted = String.prototype.charAt.call(val, 0) == "'";
        if (isQuoted) {
            isQuoted = String.prototype.charAt.call(val, val.length - 1) == "'";
        }
        return isQuoted;
    },
    
    getQuotedString: function (val) {
        if (this.isStringQuoted(val)) {
            return val;
        } else {
            return "'" + val + "'";
        }
    },
    
    NormalizeKey: function (key, entityType) {
        if (!entityType) {
            if (typeof (key) === 'number') {
                return ('' + key);
            } else if (typeof (key) === 'string') {
                if (this.isStringQuoted(key)) {
                    return key;
                } else {
                    //If not quoted with '', the key is supposed to be a number.
                    var n = Number(key);
                    if (isNaN(n)) {
                        return this.getQuotedString(key);
                    } else {
                        return '' + key;
                    }
                }
            }
        } else {
            var keys = entityType.prototype.keys;
            var normalizedKey = '';
            if (typeof (key) === 'object') {
                var that = this;
                keys.forEach(function (prop) {
                    if (!key.hasOwnProperty(prop)) {
                        throw new http.HttpException(http.HttpStatus.HTTP_BAD_REQUEST, 
                             "Key property '" + prop + "' not found.", http.ScriptError.INPUT_PARAM_COUNT_ERROR);
                    }
                    if (typeof (key[prop]) === 'string') {
                        var attr = entityType.prototype.getKeyAttribute(prop);
                        if (attr.Type === "Edm.String") {
                            normalizedKey += (prop + "=" + that.getQuotedString(key[prop]) + ",");
                        } else {
                            normalizedKey += (prop + "=" + key[prop] + ",");
                        }
                    } else if (typeof (key[prop]) === 'number') {
                        normalizedKey += (prop + "=" + key[prop] + ",");
                    } else {
                        throw new http.HttpException(http.HttpStatus.HTTP_BAD_REQUEST, 
                            "Invalid type of key property '" + prop + "'", http.ScriptError.INPUT_PARAM_TYPE_ERROR);
                    }
                });
                normalizedKey = normalizedKey.substring(0, normalizedKey.length - 1);
            }
            else if (typeof (key) === 'string') {
                var attr = entityType.prototype.getKeyAttribute(keys[0]);
                if (attr.Type === "Edm.String") {
                    normalizedKey = this.getQuotedString(key);
                } else {
                    normalizedKey = key;
                }
            } else if (typeof (key) === 'number') {
                normalizedKey = '' + key;
            }  
            else {
                var attr = entityType.prototype.getKeyAttribute(keys[0]);
                if (attr.Type === "Edm.String") {
                    throw new http.HttpException(http.HttpStatus.HTTP_BAD_REQUEST, "type mismatch", http.ScriptError.INPUT_PARAM_TYPE_ERROR);
                }
                normalizedKey = key;
            }
            return normalizedKey;
        }
    }
}

SAPB1.EntitySet = function (entityName, entityType, context) {
    this.name = entityName;
    this.type = entityType;
    this.context = context;
};

SAPB1.EntitySet.prototype.get = function (key, callbackFunc) {
    return this.context.get(this.name, key, callbackFunc);
};

SAPB1.EntitySet.prototype.add = function (entity, callbackFunc) {
    return this.context.add(this.name, entity, callbackFunc);
};

SAPB1.EntitySet.prototype.update = function (entity, key, callbackFunc) {
    return this.context.update(this.name, entity, key, callbackFunc);
};

SAPB1.EntitySet.prototype.remove = function (key, callbackFunc) {
    return this.context.remove(this.name, key, callbackFunc);
};

//This API is just in trial and is probably to change.
SAPB1.EntitySet.prototype.query = function (queryOption, bCaseInsensitive) {
    return this.context.query(this.name, queryOption, bCaseInsensitive);
}

//This API is just in trial and is probably to change.
SAPB1.EntitySet.prototype.count = function (queryOption, bCaseInsensitive) {
    return this.context.count(this.name, queryOption, bCaseInsensitive);
}

SAPB1.ServiceLayerContext = function () {
    function getContextHandle(){
        return serviceLayerContext;
    }
    this.contextHandle = getContextHandle();

//entity set member
	this.VendorPaymentAgingQueryParameters = new SAPB1.EntitySet('VendorPaymentAgingQueryParameters', SAPB1.VendorPaymentAgingQueryParameter, this);
	this.InventoryTransactionDocumentsQuery = new SAPB1.EntitySet('InventoryTransactionDocumentsQuery', SAPB1.InventoryTransactionDocumentsQuery, this);
	this.CHN777_OBDQ = new SAPB1.EntitySet('CHN777_OBDQ', SAPB1.CHN777_OBDQ, this);
	this.FinancialAnalysisQuery = new SAPB1.EntitySet('FinancialAnalysisQuery', SAPB1.FinancialAnalysisQuery, this);
	this.VendorPaymentAgingQuery = new SAPB1.EntitySet('VendorPaymentAgingQuery', SAPB1.VendorPaymentAgingQuery, this);
	this.PurchaseAnalysisQuery = new SAPB1.EntitySet('PurchaseAnalysisQuery', SAPB1.PurchaseAnalysisQuery, this);
	this.ChartOfAccounts = new SAPB1.EntitySet('ChartOfAccounts', SAPB1.ChartOfAccount, this);
	this.BusinessPartnerGroups = new SAPB1.EntitySet('BusinessPartnerGroups', SAPB1.BusinessPartnerGroup, this);
	this.SalesOpportunitySourcesSetup = new SAPB1.EntitySet('SalesOpportunitySourcesSetup', SAPB1.SalesOpportunitySourceSetup, this);
	this.BankStatements = new SAPB1.EntitySet('BankStatements', SAPB1.BankStatement, this);
	this.BatchNumberDetails = new SAPB1.EntitySet('BatchNumberDetails', SAPB1.BatchNumberDetail, this);
	this.SerialNumberDetails = new SAPB1.EntitySet('SerialNumberDetails', SAPB1.SerialNumberDetail, this);
	this.InventoryPostings = new SAPB1.EntitySet('InventoryPostings', SAPB1.InventoryPosting, this);
	this.FinancialYears = new SAPB1.EntitySet('FinancialYears', SAPB1.FinancialYear, this);
	this.Sections = new SAPB1.EntitySet('Sections', SAPB1.Section, this);
	this.CertificateSeries = new SAPB1.EntitySet('CertificateSeries', SAPB1.CertificateSeries, this);
	this.NatureOfAssessees = new SAPB1.EntitySet('NatureOfAssessees', SAPB1.NatureOfAssessee, this);
	this.ReportTypes = new SAPB1.EntitySet('ReportTypes', SAPB1.ReportType, this);
	this.UnitOfMeasurementGroups = new SAPB1.EntitySet('UnitOfMeasurementGroups', SAPB1.UnitOfMeasurementGroup, this);
	this.UnitOfMeasurements = new SAPB1.EntitySet('UnitOfMeasurements', SAPB1.UnitOfMeasurement, this);
	this.BinLocationFields = new SAPB1.EntitySet('BinLocationFields', SAPB1.BinLocationField, this);
	this.BinLocationAttributes = new SAPB1.EntitySet('BinLocationAttributes', SAPB1.BinLocationAttribute, this);
	this.WarehouseSublevelCodes = new SAPB1.EntitySet('WarehouseSublevelCodes', SAPB1.WarehouseSublevelCode, this);
	this.BinLocations = new SAPB1.EntitySet('BinLocations', SAPB1.BinLocation, this);
	this.InternalReconciliations = new SAPB1.EntitySet('InternalReconciliations', SAPB1.InternalReconciliation, this);
	this.Activities = new SAPB1.EntitySet('Activities', SAPB1.Activity, this);
	this.SalesStages = new SAPB1.EntitySet('SalesStages', SAPB1.SalesStage, this);
	this.SalesOpportunityReasonsSetup = new SAPB1.EntitySet('SalesOpportunityReasonsSetup', SAPB1.SalesOpportunityReasonSetup, this);
	this.ActivityTypes = new SAPB1.EntitySet('ActivityTypes', SAPB1.ActivityType, this);
	this.ActivityLocations = new SAPB1.EntitySet('ActivityLocations', SAPB1.ActivityLocation, this);
	this.PartnersSetups = new SAPB1.EntitySet('PartnersSetups', SAPB1.PartnersSetup, this);
	this.SalesOpportunityCompetitorsSetup = new SAPB1.EntitySet('SalesOpportunityCompetitorsSetup', SAPB1.SalesOpportunityCompetitorSetup, this);
	this.Drafts = new SAPB1.EntitySet('Drafts', SAPB1.Document, this);
	this.DeductionTaxHierarchies = new SAPB1.EntitySet('DeductionTaxHierarchies', SAPB1.DeductionTaxHierarchy, this);
	this.TaxWebSites = new SAPB1.EntitySet('TaxWebSites', SAPB1.TaxWebSite, this);
	this.DeductionTaxGroups = new SAPB1.EntitySet('DeductionTaxGroups', SAPB1.DeductionTaxGroup, this);
	this.StockTransferDrafts = new SAPB1.EntitySet('StockTransferDrafts', SAPB1.StockTransfer, this);
	this.Branches = new SAPB1.EntitySet('Branches', SAPB1.Branch, this);
	this.Departments = new SAPB1.EntitySet('Departments', SAPB1.Department, this);
	this.Users = new SAPB1.EntitySet('Users', SAPB1.User, this);
	this.ApprovalStages = new SAPB1.EntitySet('ApprovalStages', SAPB1.ApprovalStage, this);
	this.ApprovalTemplates = new SAPB1.EntitySet('ApprovalTemplates', SAPB1.ApprovalTemplate, this);
	this.Cockpits = new SAPB1.EntitySet('Cockpits', SAPB1.Cockpit, this);
	this.ApprovalRequests = new SAPB1.EntitySet('ApprovalRequests', SAPB1.ApprovalRequest, this);
	this.AdditionalExpenses = new SAPB1.EntitySet('AdditionalExpenses', SAPB1.AdditionalExpense, this);
	this.InventoryTransferRequests = new SAPB1.EntitySet('InventoryTransferRequests', SAPB1.StockTransfer, this);
	this.BlanketAgreements = new SAPB1.EntitySet('BlanketAgreements', SAPB1.BlanketAgreement, this);
	this.SalesTaxAuthorities = new SAPB1.EntitySet('SalesTaxAuthorities', SAPB1.SalesTaxAuthority, this);
	this.SalesTaxAuthoritiesTypes = new SAPB1.EntitySet('SalesTaxAuthoritiesTypes', SAPB1.SalesTaxAuthoritiesType, this);
	this.SalesTaxCodes = new SAPB1.EntitySet('SalesTaxCodes', SAPB1.SalesTaxCode, this);
	this.Countries = new SAPB1.EntitySet('Countries', SAPB1.Country, this);
	this.Invoices = new SAPB1.EntitySet('Invoices', SAPB1.Document, this);
	this.States = new SAPB1.EntitySet('States', SAPB1.State, this);
	this.KPIs = new SAPB1.EntitySet('KPIs', SAPB1.KPI, this);
	this.TargetGroups = new SAPB1.EntitySet('TargetGroups', SAPB1.TargetGroup, this);
	this.ExtendedTranslations = new SAPB1.EntitySet('ExtendedTranslations', SAPB1.ExtendedTranslation, this);
	this.Campaigns = new SAPB1.EntitySet('Campaigns', SAPB1.Campaign, this);
	this.RetornoCodes = new SAPB1.EntitySet('RetornoCodes', SAPB1.RetornoCode, this);
	this.OccurrenceCodes = new SAPB1.EntitySet('OccurrenceCodes', SAPB1.OccurenceCode, this);
	this.CashDiscounts = new SAPB1.EntitySet('CashDiscounts', SAPB1.CashDiscount, this);
	this.QueryCategories = new SAPB1.EntitySet('QueryCategories', SAPB1.QueryCategory, this);
	this.ResourceCapacities = new SAPB1.EntitySet('ResourceCapacities', SAPB1.ResourceCapacity, this);
	this.FactoringIndicators = new SAPB1.EntitySet('FactoringIndicators', SAPB1.FactoringIndicator, this);
	this.CreditNotes = new SAPB1.EntitySet('CreditNotes', SAPB1.Document, this);
	this.PaymentDrafts = new SAPB1.EntitySet('PaymentDrafts', SAPB1.Payment, this);
	this.DNFCodeSetup = new SAPB1.EntitySet('DNFCodeSetup', SAPB1.DNFCodeSetup, this);
	this.AccountSegmentations = new SAPB1.EntitySet('AccountSegmentations', SAPB1.AccountSegmentation, this);
	this.AccountSegmentationCategories = new SAPB1.EntitySet('AccountSegmentationCategories', SAPB1.AccountSegmentationCategory, this);
	this.WarehouseLocations = new SAPB1.EntitySet('WarehouseLocations', SAPB1.WarehouseLocation, this);
	this.Forms1099 = new SAPB1.EntitySet('Forms1099', SAPB1.Forms1099, this);
	this.InventoryCycles = new SAPB1.EntitySet('InventoryCycles', SAPB1.InventoryCycles, this);
	this.WizardPaymentMethods = new SAPB1.EntitySet('WizardPaymentMethods', SAPB1.WizardPaymentMethod, this);
	this.DepreciationTypes = new SAPB1.EntitySet('DepreciationTypes', SAPB1.DepreciationType, this);
	this.FAAccountDeterminations = new SAPB1.EntitySet('FAAccountDeterminations', SAPB1.FAAccountDetermination, this);
	this.DepreciationAreas = new SAPB1.EntitySet('DepreciationAreas', SAPB1.DepreciationArea, this);
	this.DepreciationTypePools = new SAPB1.EntitySet('DepreciationTypePools', SAPB1.DepreciationTypePool, this);
	this.AssetClasses = new SAPB1.EntitySet('AssetClasses', SAPB1.AssetClass, this);
	this.IntrastatConfiguration = new SAPB1.EntitySet('IntrastatConfiguration', SAPB1.IntrastatConfiguration, this);
	this.AssetGroups = new SAPB1.EntitySet('AssetGroups', SAPB1.AssetGroup, this);
	this.DeterminationCriterias = new SAPB1.EntitySet('DeterminationCriterias', SAPB1.DeterminationCriteria, this);
	this.AssetCapitalization = new SAPB1.EntitySet('AssetCapitalization', SAPB1.AssetDocument, this);
	this.GLAccountAdvancedRules = new SAPB1.EntitySet('GLAccountAdvancedRules', SAPB1.GLAccountAdvancedRule, this);
	this.AssetCapitalizationCreditMemo = new SAPB1.EntitySet('AssetCapitalizationCreditMemo', SAPB1.AssetDocument, this);
	this.BarCodes = new SAPB1.EntitySet('BarCodes', SAPB1.BarCode, this);
	this.InventoryCountings = new SAPB1.EntitySet('InventoryCountings', SAPB1.InventoryCounting, this);
	this.AssetManualDepreciation = new SAPB1.EntitySet('AssetManualDepreciation', SAPB1.AssetDocument, this);
	this.EnhancedDiscountGroups = new SAPB1.EntitySet('EnhancedDiscountGroups', SAPB1.EnhancedDiscountGroup, this);
	this.AssetTransfer = new SAPB1.EntitySet('AssetTransfer', SAPB1.AssetDocument, this);
	this.CycleCountDeterminations = new SAPB1.EntitySet('CycleCountDeterminations', SAPB1.CycleCountDetermination, this);
	this.AssetRetirement = new SAPB1.EntitySet('AssetRetirement', SAPB1.AssetDocument, this);
	this.PurchaseRequests = new SAPB1.EntitySet('PurchaseRequests', SAPB1.Document, this);
	this.AssetDepreciationGroups = new SAPB1.EntitySet('AssetDepreciationGroups', SAPB1.AssetDepreciationGroup, this);
	this.AttributeGroups = new SAPB1.EntitySet('AttributeGroups', SAPB1.AttributeGroup, this);
	this.IntegrationPackagesConfigure = new SAPB1.EntitySet('IntegrationPackagesConfigure', SAPB1.IntegrationPackageConfigure, this);
	this.DeliveryNotes = new SAPB1.EntitySet('DeliveryNotes', SAPB1.Document, this);
	this.BPPriorities = new SAPB1.EntitySet('BPPriorities', SAPB1.BPPriority, this);
	this.DunningLetters = new SAPB1.EntitySet('DunningLetters', SAPB1.DunningLetter, this);
	this.UserFieldsMD = new SAPB1.EntitySet('UserFieldsMD', SAPB1.UserFieldMD, this);
	this.UserTablesMD = new SAPB1.EntitySet('UserTablesMD', SAPB1.UserTablesMD, this);
	this.PickLists = new SAPB1.EntitySet('PickLists', SAPB1.PickList, this);
	this.EmployeeIDType = new SAPB1.EntitySet('EmployeeIDType', SAPB1.EmployeeIDType, this);
	this.JournalEntryDocumentTypes = new SAPB1.EntitySet('JournalEntryDocumentTypes', SAPB1.JournalEntryDocumentType, this);
	this.PaymentRunExport = new SAPB1.EntitySet('PaymentRunExport', SAPB1.PaymentRunExport, this);
	this.PaymentBlocks = new SAPB1.EntitySet('PaymentBlocks', SAPB1.PaymentBlock, this);
	this.Returns = new SAPB1.EntitySet('Returns', SAPB1.Document, this);
	this.UserQueries = new SAPB1.EntitySet('UserQueries', SAPB1.UserQuery, this);
	this.MaterialRevaluation = new SAPB1.EntitySet('MaterialRevaluation', SAPB1.MaterialRevaluation, this);
	this.CorrectionInvoice = new SAPB1.EntitySet('CorrectionInvoice', SAPB1.Document, this);
	this.CorrectionInvoiceReversal = new SAPB1.EntitySet('CorrectionInvoiceReversal', SAPB1.Document, this);
	this.CorrectionPurchaseInvoice = new SAPB1.EntitySet('CorrectionPurchaseInvoice', SAPB1.Document, this);
	this.CorrectionPurchaseInvoiceReversal = new SAPB1.EntitySet('CorrectionPurchaseInvoiceReversal', SAPB1.Document, this);
	this.ServiceCallStatus = new SAPB1.EntitySet('ServiceCallStatus', SAPB1.ServiceCallStatus, this);
	this.ServiceCallTypes = new SAPB1.EntitySet('ServiceCallTypes', SAPB1.ServiceCallType, this);
	this.ServiceCallProblemTypes = new SAPB1.EntitySet('ServiceCallProblemTypes', SAPB1.ServiceCallProblemType, this);
	this.Orders = new SAPB1.EntitySet('Orders', SAPB1.Document, this);
	this.ContractTemplates = new SAPB1.EntitySet('ContractTemplates', SAPB1.ContractTemplate, this);
	this.EmployeesInfo = new SAPB1.EntitySet('EmployeesInfo', SAPB1.EmployeeInfo, this);
	this.EmployeeRolesSetup = new SAPB1.EntitySet('EmployeeRolesSetup', SAPB1.EmployeeRoleSetup, this);
	this.BrazilMultiIndexers = new SAPB1.EntitySet('BrazilMultiIndexers', SAPB1.BrazilMultiIndexer, this);
	this.EmployeeStatus = new SAPB1.EntitySet('EmployeeStatus', SAPB1.EmployeeStatus, this);
	this.TerminationReason = new SAPB1.EntitySet('TerminationReason', SAPB1.TerminationReason, this);
	this.CustomerEquipmentCards = new SAPB1.EntitySet('CustomerEquipmentCards', SAPB1.CustomerEquipmentCard, this);
	this.WithholdingTaxCodes = new SAPB1.EntitySet('WithholdingTaxCodes', SAPB1.WithholdingTaxCode, this);
	this.PurchaseInvoices = new SAPB1.EntitySet('PurchaseInvoices', SAPB1.Document, this);
	this.ReportFilter = new SAPB1.EntitySet('ReportFilter', SAPB1.TaxReportFilter, this);
	this.BillOfExchangeTransactions = new SAPB1.EntitySet('BillOfExchangeTransactions', SAPB1.BillOfExchangeTransaction, this);
	this.ServiceCallSolutionStatus = new SAPB1.EntitySet('ServiceCallSolutionStatus', SAPB1.ServiceCallSolutionStatus, this);
	this.KnowledgeBaseSolutions = new SAPB1.EntitySet('KnowledgeBaseSolutions', SAPB1.KnowledgeBaseSolution, this);
	this.PurchaseCreditNotes = new SAPB1.EntitySet('PurchaseCreditNotes', SAPB1.Document, this);
	this.ServiceContracts = new SAPB1.EntitySet('ServiceContracts', SAPB1.ServiceContract, this);
	this.ServiceCalls = new SAPB1.EntitySet('ServiceCalls', SAPB1.ServiceCall, this);
	this.ServiceCallOrigins = new SAPB1.EntitySet('ServiceCallOrigins', SAPB1.ServiceCallOrigin, this);
	this.UserKeysMD = new SAPB1.EntitySet('UserKeysMD', SAPB1.UserKeysMD, this);
	this.Queue = new SAPB1.EntitySet('Queue', SAPB1.Queue, this);
	this.DunningTerms = new SAPB1.EntitySet('DunningTerms', SAPB1.DunningTerm, this);
	this.SalesForecast = new SAPB1.EntitySet('SalesForecast', SAPB1.SalesForecast, this);
	this.TrackingNotes = new SAPB1.EntitySet('TrackingNotes', SAPB1.TrackingNote, this);
	this.BusinessPartners = new SAPB1.EntitySet('BusinessPartners', SAPB1.BusinessPartner, this);
	this.PurchaseDeliveryNotes = new SAPB1.EntitySet('PurchaseDeliveryNotes', SAPB1.Document, this);
	this.Territories = new SAPB1.EntitySet('Territories', SAPB1.Territory, this);
	this.Industries = new SAPB1.EntitySet('Industries', SAPB1.Industry, this);
	this.ProductionOrders = new SAPB1.EntitySet('ProductionOrders', SAPB1.ProductionOrder, this);
	this.DownPayments = new SAPB1.EntitySet('DownPayments', SAPB1.Document, this);
	this.PurchaseDownPayments = new SAPB1.EntitySet('PurchaseDownPayments', SAPB1.Document, this);
	this.PackagesTypes = new SAPB1.EntitySet('PackagesTypes', SAPB1.PackagesType, this);
	this.UserObjectsMD = new SAPB1.EntitySet('UserObjectsMD', SAPB1.UserObjectsMD, this);
	this.PurchaseReturns = new SAPB1.EntitySet('PurchaseReturns', SAPB1.Document, this);
	this.EmployeePosition = new SAPB1.EntitySet('EmployeePosition', SAPB1.EmployeePosition, this);
	this.Teams = new SAPB1.EntitySet('Teams', SAPB1.Team, this);
	this.Relationships = new SAPB1.EntitySet('Relationships', SAPB1.Relationship, this);
	this.UserPermissionTree = new SAPB1.EntitySet('UserPermissionTree', SAPB1.UserPermissionTree, this);
	this.PredefinedTexts = new SAPB1.EntitySet('PredefinedTexts', SAPB1.PredefinedText, this);
	this.ActivityStatuses = new SAPB1.EntitySet('ActivityStatuses', SAPB1.ActivityStatus, this);
	this.ChooseFromList = new SAPB1.EntitySet('ChooseFromList', SAPB1.ChooseFromList, this);
	this.FormattedSearches = new SAPB1.EntitySet('FormattedSearches', SAPB1.FormattedSearche, this);
	this.PurchaseOrders = new SAPB1.EntitySet('PurchaseOrders', SAPB1.Document, this);
	this.Attachments2 = new SAPB1.EntitySet('Attachments2', SAPB1.Attachments2, this);
	this.UserLanguages = new SAPB1.EntitySet('UserLanguages', SAPB1.UserLanguage, this);
	this.MultiLanguageTranslations = new SAPB1.EntitySet('MultiLanguageTranslations', SAPB1.MultiLanguageTranslation, this);
	this.DynamicSystemStrings = new SAPB1.EntitySet('DynamicSystemStrings', SAPB1.DynamicSystemString, this);
	this.Quotations = new SAPB1.EntitySet('Quotations', SAPB1.Document, this);
	this.HouseBankAccounts = new SAPB1.EntitySet('HouseBankAccounts', SAPB1.HouseBankAccount, this);
	this.UserGroups = new SAPB1.EntitySet('UserGroups', SAPB1.UserGroup, this);
	this.POSDailySummary = new SAPB1.EntitySet('POSDailySummary', SAPB1.POSDailySummary, this);
	this.EmailGroups = new SAPB1.EntitySet('EmailGroups', SAPB1.EmailGroup, this);
	this.ServiceCallProblemSubTypes = new SAPB1.EntitySet('ServiceCallProblemSubTypes', SAPB1.ServiceCallProblemSubType, this);
	this.WitholdingTaxDefinition = new SAPB1.EntitySet('WitholdingTaxDefinition', SAPB1.WTDCode, this);
	this.ProjectManagements = new SAPB1.EntitySet('ProjectManagements', SAPB1.PM_ProjectDocumentData, this);
	this.ProjectManagementTimeSheet = new SAPB1.EntitySet('ProjectManagementTimeSheet', SAPB1.PM_TimeSheetData, this);
	this.ReturnRequest = new SAPB1.EntitySet('ReturnRequest', SAPB1.Document, this);
	this.GoodsReturnRequest = new SAPB1.EntitySet('GoodsReturnRequest', SAPB1.Document, this);
	this.ActivityRecipientLists = new SAPB1.EntitySet('ActivityRecipientLists', SAPB1.ActivityRecipientList, this);
	this.AccountCategory = new SAPB1.EntitySet('AccountCategory', SAPB1.AccountCategory, this);
	this.BankChargesAllocationCodes = new SAPB1.EntitySet('BankChargesAllocationCodes', SAPB1.BankChargesAllocationCode, this);
	this.IncomingPayments = new SAPB1.EntitySet('IncomingPayments', SAPB1.Payment, this);
	this.CashFlowLineItems = new SAPB1.EntitySet('CashFlowLineItems', SAPB1.CashFlowLineItem, this);
	this.CampaignResponseType = new SAPB1.EntitySet('CampaignResponseType', SAPB1.CampaignResponseType, this);
	this.ExpenseTypes = new SAPB1.EntitySet('ExpenseTypes', SAPB1.ExpenseTypeData, this);
	this.GovPayCodes = new SAPB1.EntitySet('GovPayCodes', SAPB1.GovPayCode, this);
	this.TaxInvoiceReport = new SAPB1.EntitySet('TaxInvoiceReport', SAPB1.TaxInvoiceReport, this);
	this.BusinessPlaces = new SAPB1.EntitySet('BusinessPlaces', SAPB1.BusinessPlace, this);
	this.Deposits = new SAPB1.EntitySet('Deposits', SAPB1.Deposit, this);
	this.LocalEra = new SAPB1.EntitySet('LocalEra', SAPB1.LocalEra, this);
	this.Dimensions = new SAPB1.EntitySet('Dimensions', SAPB1.Dimension, this);
	this.ValueMapping = new SAPB1.EntitySet('ValueMapping', SAPB1.VM_B1ValuesData, this);
	this.ValueMappingCommunication = new SAPB1.EntitySet('ValueMappingCommunication', SAPB1.ValueMappingCommunicationData, this);
	this.IndiaSacCode = new SAPB1.EntitySet('IndiaSacCode', SAPB1.IndiaSacCode, this);
	this.TransportationDocument = new SAPB1.EntitySet('TransportationDocument', SAPB1.TransportationDocumentData, this);
	this.ServiceGroups = new SAPB1.EntitySet('ServiceGroups', SAPB1.ServiceGroup, this);
	this.MaterialGroups = new SAPB1.EntitySet('MaterialGroups', SAPB1.MaterialGroup, this);
	this.CostElements = new SAPB1.EntitySet('CostElements', SAPB1.CostElement, this);
	this.NCMCodesSetup = new SAPB1.EntitySet('NCMCodesSetup', SAPB1.NCMCodeSetup, this);
	this.NFTaxCategories = new SAPB1.EntitySet('NFTaxCategories', SAPB1.NFTaxCategory, this);
	this.TaxCodeDeterminationsTCD = new SAPB1.EntitySet('TaxCodeDeterminationsTCD', SAPB1.TaxCodeDeterminationTCD, this);
	this.BOEDocumentTypes = new SAPB1.EntitySet('BOEDocumentTypes', SAPB1.BOEDocumentType, this);
	this.BOEPortfolios = new SAPB1.EntitySet('BOEPortfolios', SAPB1.BOEPortfolio, this);
	this.BOEInstructions = new SAPB1.EntitySet('BOEInstructions', SAPB1.BOEInstruction, this);
	this.SalesTaxInvoices = new SAPB1.EntitySet('SalesTaxInvoices', SAPB1.SalesTaxInvoice, this);
	this.PurchaseTaxInvoices = new SAPB1.EntitySet('PurchaseTaxInvoices', SAPB1.PurchaseTaxInvoice, this);
	this.CustomsDeclaration = new SAPB1.EntitySet('CustomsDeclaration', SAPB1.CustomsDeclaration, this);
	this.Resources = new SAPB1.EntitySet('Resources', SAPB1.Resource, this);
	this.ResourceProperties = new SAPB1.EntitySet('ResourceProperties', SAPB1.ResourceProperty, this);
	this.ResourceGroups = new SAPB1.EntitySet('ResourceGroups', SAPB1.ResourceGroup, this);
	this.RouteStages = new SAPB1.EntitySet('RouteStages', SAPB1.RouteStage, this);
	this.Banks = new SAPB1.EntitySet('Banks', SAPB1.Bank, this);
	this.JournalEntries = new SAPB1.EntitySet('JournalEntries', SAPB1.JournalEntry, this);
	this.StockTakings = new SAPB1.EntitySet('StockTakings', SAPB1.StockTaking, this);
	this.InventoryOpeningBalances = new SAPB1.EntitySet('InventoryOpeningBalances', SAPB1.InventoryOpeningBalance, this);
	this.Contacts = new SAPB1.EntitySet('Contacts', SAPB1.Contact, this);
	this.CreditCards = new SAPB1.EntitySet('CreditCards', SAPB1.CreditCard, this);
	this.Currencies = new SAPB1.EntitySet('Currencies', SAPB1.Currency, this);
	this.Items = new SAPB1.EntitySet('Items', SAPB1.Item, this);
	this.PaymentTermsTypes = new SAPB1.EntitySet('PaymentTermsTypes', SAPB1.PaymentTermsType, this);
	this.FormPreferences = new SAPB1.EntitySet('FormPreferences', SAPB1.ColumnPreferences, this);
	this.ElectronicFileFormats = new SAPB1.EntitySet('ElectronicFileFormats', SAPB1.ElectronicFileFormat, this);
	this.QueryAuthGroups = new SAPB1.EntitySet('QueryAuthGroups', SAPB1.QueryAuthGroup, this);
	this.BankPages = new SAPB1.EntitySet('BankPages', SAPB1.BankPage, this);
	this.Manufacturers = new SAPB1.EntitySet('Manufacturers', SAPB1.Manufacturer, this);
	this.BusinessPartnerProperties = new SAPB1.EntitySet('BusinessPartnerProperties', SAPB1.BusinessPartnerProperty, this);
	this.TransactionCodes = new SAPB1.EntitySet('TransactionCodes', SAPB1.TransactionCode, this);
	this.VendorPayments = new SAPB1.EntitySet('VendorPayments', SAPB1.Payment, this);
	this.LandedCostsCodes = new SAPB1.EntitySet('LandedCostsCodes', SAPB1.LandedCostsCode, this);
	this.EmployeeTransfers = new SAPB1.EntitySet('EmployeeTransfers', SAPB1.EmployeeTransfer, this);
	this.MobileAddOnSetting = new SAPB1.EntitySet('MobileAddOnSetting', SAPB1.MobileAddOnSetting, this);
	this.ShippingTypes = new SAPB1.EntitySet('ShippingTypes', SAPB1.ShippingType, this);
	this.VatGroups = new SAPB1.EntitySet('VatGroups', SAPB1.VatGroup, this);
	this.LengthMeasures = new SAPB1.EntitySet('LengthMeasures', SAPB1.LengthMeasure, this);
	this.WeightMeasures = new SAPB1.EntitySet('WeightMeasures', SAPB1.WeightMeasure, this);
	this.ItemGroups = new SAPB1.EntitySet('ItemGroups', SAPB1.ItemGroups, this);
	this.SalesPersons = new SAPB1.EntitySet('SalesPersons', SAPB1.SalesPerson, this);
	this.DeductionTaxSubGroups = new SAPB1.EntitySet('DeductionTaxSubGroups', SAPB1.DeductionTaxSubGroup, this);
	this.TaxCodeDeterminations = new SAPB1.EntitySet('TaxCodeDeterminations', SAPB1.TaxCodeDetermination, this);
	this.PurchaseQuotations = new SAPB1.EntitySet('PurchaseQuotations', SAPB1.Document, this);
	this.CostCenterTypes = new SAPB1.EntitySet('CostCenterTypes', SAPB1.CostCenterType, this);
	this.AccrualTypes = new SAPB1.EntitySet('AccrualTypes', SAPB1.AccrualType, this);
	this.NFModels = new SAPB1.EntitySet('NFModels', SAPB1.NFModel, this);
	this.BrazilStringIndexers = new SAPB1.EntitySet('BrazilStringIndexers', SAPB1.BrazilStringIndexer, this);
	this.BrazilNumericIndexers = new SAPB1.EntitySet('BrazilNumericIndexers', SAPB1.BrazilNumericIndexer, this);
	this.BrazilFuelIndexers = new SAPB1.EntitySet('BrazilFuelIndexers', SAPB1.BrazilFuelIndexer, this);
	this.BrazilBeverageIndexers = new SAPB1.EntitySet('BrazilBeverageIndexers', SAPB1.BrazilBeverageIndexer, this);
	this.LegalData = new SAPB1.EntitySet('LegalData', SAPB1.LegalData, this);
	this.FiscalPrinter = new SAPB1.EntitySet('FiscalPrinter', SAPB1.FiscalPrinter, this);
	this.CustomsGroups = new SAPB1.EntitySet('CustomsGroups', SAPB1.CustomsGroup, this);
	this.ChecksforPayment = new SAPB1.EntitySet('ChecksforPayment', SAPB1.ChecksforPayment, this);
	this.InventoryGenEntries = new SAPB1.EntitySet('InventoryGenEntries', SAPB1.Document, this);
	this.PriceLists = new SAPB1.EntitySet('PriceLists', SAPB1.PriceList, this);
	this.InventoryGenExits = new SAPB1.EntitySet('InventoryGenExits', SAPB1.Document, this);
	this.ProfitCenters = new SAPB1.EntitySet('ProfitCenters', SAPB1.ProfitCenter, this);
	this.DistributionRules = new SAPB1.EntitySet('DistributionRules', SAPB1.DistributionRule, this);
	this.Projects = new SAPB1.EntitySet('Projects', SAPB1.Project, this);
	this.Warehouses = new SAPB1.EntitySet('Warehouses', SAPB1.Warehouse, this);
	this.CommissionGroups = new SAPB1.EntitySet('CommissionGroups', SAPB1.CommissionGroup, this);
	this.ProductTrees = new SAPB1.EntitySet('ProductTrees', SAPB1.ProductTree, this);
	this.StockTransfers = new SAPB1.EntitySet('StockTransfers', SAPB1.StockTransfer, this);
	this.LandedCosts = new SAPB1.EntitySet('LandedCosts', SAPB1.LandedCost, this);
	this.SpecialPrices = new SAPB1.EntitySet('SpecialPrices', SAPB1.SpecialPrice, this);
	this.CreditPaymentMethods = new SAPB1.EntitySet('CreditPaymentMethods', SAPB1.CreditPaymentMethod, this);
	this.CreditCardPayments = new SAPB1.EntitySet('CreditCardPayments', SAPB1.CreditCardPayment, this);
	this.AlternateCatNum = new SAPB1.EntitySet('AlternateCatNum', SAPB1.AlternateCatNum, this);
	this.Budgets = new SAPB1.EntitySet('Budgets', SAPB1.Budget, this);
	this.BudgetDistributions = new SAPB1.EntitySet('BudgetDistributions', SAPB1.BudgetDistribution, this);
	this.ItemProperties = new SAPB1.EntitySet('ItemProperties', SAPB1.ItemProperty, this);
	this.AlertManagements = new SAPB1.EntitySet('AlertManagements', SAPB1.AlertManagement, this);
	this.Messages = new SAPB1.EntitySet('Messages', SAPB1.Message, this);
	this.BudgetScenarios = new SAPB1.EntitySet('BudgetScenarios', SAPB1.BudgetScenario, this);
	this.UserDefaultGroups = new SAPB1.EntitySet('UserDefaultGroups', SAPB1.UserDefaultGroup, this);
	this.SalesOpportunities = new SAPB1.EntitySet('SalesOpportunities', SAPB1.SalesOpportunities, this);
	this.SalesOpportunityInterestsSetup = new SAPB1.EntitySet('SalesOpportunityInterestsSetup', SAPB1.SalesOpportunityInterestSetup, this);
	this.MTCCIOTRN = new SAPB1.EntitySet('MTCCIOTRN', SAPB1.MTC_CIOTRN, this);
	this.MTCCSOTCT = new SAPB1.EntitySet('MTCCSOTCT', SAPB1.MTC_CSOTCT, this);
	this.MTCPAYTYPE = new SAPB1.EntitySet('MTCPAYTYPE', SAPB1.MTC_PAYTYPE, this);
	this.U_MTC_IICL2 = new SAPB1.EntitySet('U_MTC_IICL2', SAPB1.MTC_IICL2, this);
	this.B1Sessions = new SAPB1.EntitySet('B1Sessions', SAPB1.B1Session, this);
	this.ItemImages = new SAPB1.EntitySet('ItemImages', SAPB1.ItemImage, this);

};

//General CRUD functions for entity operations, applying both for UDO/UDT and system objects.
SAPB1.ServiceLayerContext.prototype.get = function (name, key, callbackFunc) {
    var entityType = null;
    if (this.hasOwnProperty(name)) {
        entityType = this[name].type;
    }
    var normalizedKey = SAPB1.Utility.NormalizeKey(key, entityType);
    var strRet = this.contextHandle.getEntity(name, normalizedKey);
    var jsonRet = JSON.parse(strRet);
    if (typeof (callbackFunc) === 'function') {
        callbackFunc(jsonRet.status, jsonRet.body);
    }
    return new SAPB1.DataServiceResponse('get', jsonRet.status, jsonRet.body);
};

SAPB1.ServiceLayerContext.prototype.add = function (name, entity, callbackFunc) {

    var strRet, jsonRet, content;
    if (entity instanceof Object) {
        content = JSON.stringify(entity);
    } else {
        throw new http.HttpException(http.HttpStatus.HTTP_BAD_REQUEST, 
            "the input parameter of ServiceLayerContext.add function should be an object", http.ScriptError.INPUT_PARAM_TYPE_ERROR);
    }
    
    strRet = this.contextHandle.addEntity(name, content);
    jsonRet = JSON.parse(strRet);
    
    var ret = new SAPB1.DataServiceResponse('add', jsonRet.status, jsonRet.body);
    if (!ret.isOK()) {
        if (ret.getErrCode() == http.ScriptError.TRANSACTION_TOO_LARGE_ERROR) {
            throw new http.HttpException(ret.status, ret.getErrMsg(), ret.getErrCode());
        }
    }
    
    if (typeof (callbackFunc) === 'function') {
        callbackFunc(jsonRet.status, jsonRet.body);
    }
    return ret;
};

SAPB1.ServiceLayerContext.prototype.update = function (name, entity, key, callbackFunc) {
    var entityType = null;
    if (this.hasOwnProperty(name)) {
        entityType = this[name].type;
    }
    
    var strRet, jsonRet, content, normalizedKey;
    if (entity instanceof Object) {
        content = JSON.stringify(entity);
        normalizedKey = SAPB1.Utility.NormalizeKey(key, entityType);
    } else {
        throw new http.HttpException(http.HttpStatus.HTTP_BAD_REQUEST, 
            "the input parameter of ServiceLayerContext.update function should be an object", http.ScriptError.INPUT_PARAM_TYPE_ERROR);
    }
    
    strRet = this.contextHandle.patchEntity(name, normalizedKey, content);
    jsonRet = JSON.parse(strRet);
    var ret = new SAPB1.DataServiceResponse('update', jsonRet.status, jsonRet.body);
    if (!ret.isOK()) {
        if (ret.getErrCode() == http.ScriptError.TRANSACTION_TOO_LARGE_ERROR) {
            throw new http.HttpException(ret.status, ret.getErrMsg(), ret.getErrCode());
        }
    }
    
    if (typeof (callbackFunc) === 'function') {
        callbackFunc(jsonRet.status, jsonRet.body);
    }
    return ret;
};

SAPB1.ServiceLayerContext.prototype.remove = function (name, key, callbackFunc) {
    var entityType = null;
    if (this.hasOwnProperty(name)) {
        entityType = this[name].type;
    }
    
    var normalizedKey = SAPB1.Utility.NormalizeKey(key, entityType);
    var strRet = this.contextHandle.deleteEntity(name, normalizedKey);
    var jsonRet = JSON.parse(strRet);
    
    var ret = new SAPB1.DataServiceResponse('remove', jsonRet.status, jsonRet.body);
    if (!ret.isOK()){
        if(ret.getErrCode() == http.ScriptError.TRANSACTION_TOO_LARGE_ERROR) {
            throw new http.HttpException(ret.status, ret.getErrMsg(), ret.getErrCode());
        }
    }
    
    if (typeof (callbackFunc) === 'function') {
        callbackFunc(jsonRet.status, jsonRet.body);
    }
    return ret;
};

SAPB1.ServiceLayerContext.prototype.startTransaction = function () {
    this.contextHandle.startTransaction();
};

SAPB1.ServiceLayerContext.prototype.commitTransaction = function (callBackFunc) {
    this.contextHandle.commitTransaction();
    if (typeof (callBackFunc) === 'function') {
        callBackFunc();
    }
};

SAPB1.ServiceLayerContext.prototype.rollbackTransaction = function (callBackFunc) {
    this.contextHandle.rollbackTransaction();
    if (typeof (callBackFunc) === 'function') {
        callBackFunc();
    }
};

SAPB1.ServiceLayerContext.prototype.isInTransaction = function () {
    return this.contextHandle.isInTransaction();
}

//This API is just in trial and is probably to change.
SAPB1.ServiceLayerContext.prototype.query = function (queryPath, queryOption, bCaseInsensitive) {
    if (!queryOption) queryOption = '';
    queryOption = queryOption.substr(queryOption.indexOf('?') + 1);
    
    var strRet = this.contextHandle.query(queryPath, queryOption, !!bCaseInsensitive);
    var jsonRet = JSON.parse(strRet);
    if (jsonRet.status !== http.HttpStatus.HTTP_OK) {
        throw new http.HttpException(jsonRet.status, jsonRet.body.error.message.value, jsonRet.body.error.code);
    }
    return new SAPB1.QueryResponse(jsonRet.status, jsonRet.body);
}

//This API is just in trial and is probably to change.
SAPB1.ServiceLayerContext.prototype.count = function (queryPath, queryOption, bCaseInsensitive) {
    if (!queryOption) queryOption = '';
    queryOption = queryOption.substr(queryOption.indexOf('?') + 1);
    
    var strRet = this.contextHandle.query(queryPath + '/$count', queryOption, !!bCaseInsensitive);
    var jsonRet = JSON.parse(strRet);
    if (jsonRet.status !== http.HttpStatus.HTTP_OK) {
        throw new http.HttpException(jsonRet.status, jsonRet.body.error.message.value, jsonRet.body.error.code);
    }
    return jsonRet.body;
}


module.exports = SAPB1.ServiceLayerContext;
