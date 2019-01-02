$.import("mz.httpUtil","post");

var postData = $.request.body.asString();
var result = $.mz.httpUtil.post.sendPostReq(postData,'PurchaseRequests');
$.response.contentType = "application/json";
$.response.setBody(result);