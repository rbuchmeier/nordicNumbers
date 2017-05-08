RESOURCE_URL = 'http://localhost:3000/api/races';
var promise = require("es6-promise");
var $ = require('jquery');

module.exports = {
    getRaces: function () {
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: resourceUrl,
                method: "GET",
                dataType: "json",
                success: resolve,
                error: reject
            });
        });
    }
};
