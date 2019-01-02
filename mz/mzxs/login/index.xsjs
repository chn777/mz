$.import("mz.httpUtil","post");
var postData = $.request.body.asString();
var result = $.mz.httpUtil.post.sendPostReq(postData,'Login');
$.response.contentType = "application/json";
$.response.setBody(result);
