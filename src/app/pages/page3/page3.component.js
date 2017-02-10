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
var posts_service_1 = require('./services/posts.service');
var Page3Component = (function () {
    function Page3Component(postsService) {
        this.postsService = postsService;
        this.getPosts();
        this.showPost = false;
    }
    Page3Component.prototype.togglePost = function (PostForm) {
        if (this.showPost == true) {
            this.modifyPost(PostForm);
        }
        else {
            this.addPost(PostForm);
        }
    };
    // 목록조회
    Page3Component.prototype.getPosts = function () {
        var _this = this;
        this.postsService.getPosts().subscribe(function (posts) {
            _this.posts = posts;
        });
    };
    // post 객체에 form 값 인입
    Page3Component.prototype.setPostFormValue = function (PostForm) {
        this.post = {
            userId: PostForm['Post.userId'].value,
            id: PostForm['Post.id'].value,
            title: PostForm['Post.title'].value,
            body: PostForm['Post.body'].value
        };
    };
    // 취소
    Page3Component.prototype.cancelPost = function (PostForm) {
        PostForm.reset();
        // 버튼 edit -> add 로 변경
        this.showPost = false;
    };
    // 신규등록
    Page3Component.prototype.addPost = function (PostForm) {
        var _this = this;
        this.setPostFormValue(PostForm);
        //  this.posts.push(this.post);
        this.postsService.addPosts(this.post).subscribe(function (res) {
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
    Page3Component.prototype.modifyPost = function (PostForm) {
        var _this = this;
        this.setPostFormValue(PostForm);
        this.postsService.modifyPost(this.post).subscribe(function (res) {
            if (res.success == true) {
                _this.getPosts();
                _this.cancelPost(PostForm);
            }
            else {
                console.log('error');
            }
        });
    };
    // 상세조회
    Page3Component.prototype.editPost = function (PostForm, post) {
        PostForm.reset();
        PostForm['Post.userId'].value = post.userId;
        PostForm['Post.id'].value = post.id;
        PostForm['Post.title'].value = post.title;
        PostForm['Post.body'].value = post.body;
        this.showPost = true;
    };
    // 삭제
    Page3Component.prototype.deletePost = function (i, post, PostForm) {
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
    Page3Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'page3',
            templateUrl: "page3.component.html",
            styleUrls: ['./services/posts.component.css'],
            providers: [posts_service_1.PostsService]
        }), 
        __metadata('design:paramtypes', [posts_service_1.PostsService])
    ], Page3Component);
    return Page3Component;
}());
exports.Page3Component = Page3Component;
//# sourceMappingURL=page3.component.js.map