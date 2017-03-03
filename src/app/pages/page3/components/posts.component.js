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
var posts_service_1 = require('../services/posts.service');
var PostsComponent = (function () {
    function PostsComponent(postsService, _router) {
        this.postsService = postsService;
        this._router = _router;
        this.date = new Date();
        this.childChanged = new core_1.EventEmitter();
        this.getPosts();
        this.showPost = false;
    }
    PostsComponent.prototype.onChange = function (value) {
        this.childChanged.emit(value);
    };
    PostsComponent.prototype.togglePost = function (PostForm) {
        if (this.showPost == true) {
            this.modifyPost(PostForm);
        }
        else {
            this.addPost(PostForm);
        }
    };
    // JSONP    
    PostsComponent.prototype.getLoginData = function () {
        var _this = this;
        this.postsService.getLoginData().subscribe(function (data) {
            _this.jsonpValue = JSON.stringify(data);
        }, function (error) { return alert(error); }, function () { return console.log("getLoginData > Finished"); });
    };
    // 목록조회
    PostsComponent.prototype.getPosts = function () {
        var _this = this;
        this.postsService.getPosts().subscribe(function (data) {
            _this.posts = data;
            console.log(JSON.stringify(data));
        }, function (error) { return alert(error); }, function () { return console.log("Finished"); });
    };
    // post 객체에 form 값 인입
    PostsComponent.prototype.setPostFormValue = function (PostForm) {
        this.selectedPost = {
            userId: PostForm['Post.userId'].value,
            id: PostForm['Post.id'].value,
            title: PostForm['Post.title'].value,
            body: PostForm['Post.body'].value
        };
    };
    // 취소
    PostsComponent.prototype.cancelPost = function (PostForm) {
        PostForm.reset();
        this.setPostFormValue(PostForm);
        // 버튼 edit -> add 로 변경    
        this.showPost = false;
    };
    // 신규등록
    PostsComponent.prototype.addPost = function (PostForm) {
        var _this = this;
        this.setPostFormValue(PostForm);
        //  this.posts.push(this.selectedPost);
        this.postsService.addPosts(this.selectedPost).subscribe(function (res) {
            if (res.success == true) {
                _this.getPosts();
                _this.cancelPost(PostForm);
            }
            else {
                console.log('error');
            }
        });
    };
    // 수정
    PostsComponent.prototype.modifyPost = function (PostForm) {
        var _this = this;
        this.setPostFormValue(PostForm);
        this.postsService.modifyPost(this.selectedPost).subscribe(function (res) {
            if (res.success == true) {
                _this.getPosts();
                _this.cancelPost(PostForm);
            }
            else {
                console.log('error');
            }
        }, function (error) { return alert(error); }, function () { return console.log("Finished"); });
    };
    // 상세조회
    PostsComponent.prototype.editPost = function (PostForm, post) {
        PostForm.reset();
        PostForm['Post.userId'].value = post.userId;
        PostForm['Post.id'].value = post.id;
        PostForm['Post.title'].value = post.title;
        PostForm['Post.body'].value = post.body;
        this.selectedPost = post;
        this.showPost = true;
    };
    // 상세조회 화면이동
    PostsComponent.prototype.goPost = function (post) {
        this._router.navigate(['newPost', post.id]);
    };
    // 삭제
    PostsComponent.prototype.deletePost = function (i, post, PostForm) {
        var _this = this;
        // 해당건만 삭제
        // this.posts.splice(i,1);
        this.postsService.deletePosts(post).subscribe(function (res) {
            if (res.success == true) {
                _this.getPosts();
                _this.cancelPost(PostForm);
            }
            else {
                console.log('error');
            }
        });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PostsComponent.prototype, "childChanged", void 0);
    PostsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'posts',
            templateUrl: "posts.component.html",
            styleUrls: ['./posts.component.css'],
            providers: [posts_service_1.PostsService],
            inputs: ['parentValue:passedValue']
        }), 
        __metadata('design:paramtypes', [posts_service_1.PostsService, router_1.Router])
    ], PostsComponent);
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=posts.component.js.map