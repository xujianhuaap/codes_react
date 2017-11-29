/**
 * Created by xujianhua on 29/11/17.
 */
import 'whatwg-fetch';

const headerValue= {
};

var FetchData = function (url,methodValue,requestBodyValue) {
    var  op={
        method: methodValue,
        credentials: 'same-origin',//'include'
        headers: headerValue,
        mode:'ｎo-cors',

    };
    if(methodValue === 'POST'){
        op = op||{body: isNaN(requestBodyValue)?new FormData():requestBodyValue}
    }
    return (fetch(url,op));

};
var GetData = function (url) {
    return FetchData(url,'GET',NaN);
};

var PostData = function (url,requestBodyValue) {
    return FetchData(url,'POST',requestBodyValue);
};
export { PostData,GetData} ;