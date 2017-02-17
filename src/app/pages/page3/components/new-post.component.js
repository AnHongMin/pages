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
var router_1 = require('@angular/router');
require('rxjs/add/operator/switchMap');
var posts_service_1 = require('../services/posts.service');
var NewPostComponent = (function () {
    function NewPostComponent(_route, _router, postsService) {
        var _this = this;
        this._route = _route;
        this._router = _router;
        this.postsService = postsService;
        var id = this._route.snapshot.params['id'];
        this.id = id;
        //        console.log(typeof id);
        if (id === '0') {
        }
        else {
            this.postsService.getPost(id).subscribe(function (res) {
                _this.selectedPost = res;
                _this.userId = _this.selectedPost.userId;
                _this.id = _this.selectedPost.id;
                _this.title = _this.selectedPost.title;
                _this.body = _this.selectedPost.body;
            });
        }
    }
    NewPostComponent.prototype.ngOnInit = function () {
    };
    NewPostComponent.prototype.cancelPost = function () {
        this._router.navigate(['page3']);
    };
    NewPostComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'new-post',
            templateUrl: "new-post.component.html",
            styleUrls: ['./posts.component.css'],
            providers: [posts_service_1.PostsService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, posts_service_1.PostsService])
    ], NewPostComponent);
    return NewPostComponent;
}());
exports.NewPostComponent = NewPostComponent;
//# sourceMappingURL=new-post.component.js.map