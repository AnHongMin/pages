"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var PostsService = (function () {
    function PostsService(http) {
        this.http = http;
        //console.log('PostsService Initialized..');
    }
    PostsService.prototype.getPosts = function () {
        //   'https://jsonplaceholder.typicode.com/posts'
        var url = 'http://localhost:8080/post.do?method=getList';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    PostsService.prototype.addPosts = function (post) {
        // https://angular.io/docs/ts/latest/api/http/index/Headers-class.html
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        // https://angular.io/docs/ts/latest/api/http/index/URLSearchParams-class.html
        var urlSearchParams = new http_1.URLSearchParams();
        for (var n in post) {
            urlSearchParams.append(n, post[n]);
        }
        var body = urlSearchParams.toString();
        // https://angular.io/docs/ts/latest/api/http/index/RequestOptions-class.html
        var options = new http_1.RequestOptions({ headers: headers, method: 'post' });
        var url = 'http://localhost:8080/post.do?method=insertPost';
        return this.http.post(url, body, options).map(function (res) { return res.json(); });
    };
    PostsService.prototype.modifyPost = function (post) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var urlSearchParams = new http_1.URLSearchParams();
        for (var n in post) {
            urlSearchParams.append(n, post[n]);
        }
        var body = urlSearchParams.toString();
        var options = new http_1.RequestOptions({ headers: headers, method: 'post' });
        var url = 'http://localhost:8080/post.do?method=updatePost';
        return this.http.post(url, body, options).map(function (res) { return res.json(); });
    };
    PostsService.prototype.deletePosts = function (post) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var urlSearchParams = new http_1.URLSearchParams();
        for (var n in post) {
            urlSearchParams.append(n, post[n]);
        }
        var body = urlSearchParams.toString();
        var options = new http_1.RequestOptions({ headers: headers, method: 'post' });
        var url = 'http://localhost:8080/post.do?method=deletePost';
        return this.http.post(url, body, options).map(function (res) { return res.json(); });
        /*
        http://stackoverflow.com/questions/35212341/angular2-http-post-request-parameters
        
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('username', username);
        urlSearchParams.append('password', password);
        
        let body = urlSearchParams.toString()
        
        return this.http.post('http://localHost:3000/users/login', body, {headers:headers})
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                console.log(response);
                var body = response.json();
                console.log(body);
                if (body.response){
                    let user = response.json();
                    if (user && user.token) {
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('currentUser', JSON.stringify(user));
                    }
                }
                else{
                    return body;
                }
            });
        */
    };
    PostsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PostsService);
    return PostsService;
}());
exports.PostsService = PostsService;
;
//# sourceMappingURL=posts.service.js.map