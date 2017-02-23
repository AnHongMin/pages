import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { PostsService } from '../services/posts.service';

@Component({
    moduleId: module.id,
    selector: 'posts',
    templateUrl: `posts.component.html`,
    styleUrls: ['./posts.component.css'],
    providers : [PostsService]
})

export class PostsComponent  {
    posts : Post[];
    selectedPost : Post;
    showPost : boolean;

    constructor(private postsService : PostsService, private _router : Router ){
        this.getPosts();
        this.showPost = false;
    }

    togglePost(PostForm : any){
        if(this.showPost == true){
            this.modifyPost(PostForm);
        }else{
            this.addPost(PostForm);
        }
    }

    // 목록조회
    getPosts(){
        this.postsService.getPosts().subscribe(
            data => {
                this.posts = data; 
                console.log(JSON.stringify(data))
            },
            error => alert(error),
            () => console.log("Finished")
        );
    }

    // post 객체에 form 값 인입
    setPostFormValue(PostForm : any){
        this.selectedPost = {
            userId : PostForm['Post.userId'].value, 
            id : PostForm['Post.id'].value,
            title : PostForm['Post.title'].value,
            body : PostForm['Post.body'].value
        };
    }

    // 취소
    cancelPost(PostForm : any){
        PostForm.reset();
        this.setPostFormValue(PostForm);
        // 버튼 edit -> add 로 변경    
        this.showPost = false;
    }

    // 신규등록
    addPost(PostForm : any){
        this.setPostFormValue(PostForm);
    //  this.posts.push(this.selectedPost);

        this.postsService.addPosts(this.selectedPost).subscribe(res => {
            if(res.success == true){
                this.getPosts();
                this.cancelPost(PostForm);
            }else{
                console.log('error');
            }
        });
    }

    // 수정
    modifyPost(PostForm : any){
        this.setPostFormValue(PostForm);

        this.postsService.modifyPost(this.selectedPost).subscribe(
            res => {
                if(res.success == true){        
                    this.getPosts();
                    this.cancelPost(PostForm);
                }else{
                    console.log('error');
                }
            },
            error => alert(error),
            () => console.log("Finished")
        );
    }

    // 상세조회
    editPost(PostForm : any, post : any){
        PostForm.reset();
        PostForm['Post.userId'].value = post.userId;
        PostForm['Post.id'].value = post.id;
        PostForm['Post.title'].value = post.title;
        PostForm['Post.body'].value = post.body;
        this.selectedPost = post;
        this.showPost = true;
    }

    // 상세조회 화면이동
    goPost(post : any){
        this._router.navigate(['newPost',post.id]);      
    }

    // 삭제
    deletePost(i : any, post : any, PostForm : any){
        // 해당건만 삭제
        // this.posts.splice(i,1);
        this.postsService.deletePosts(post).subscribe(res => {
            if(res.success == true){
                this.getPosts();
                this.cancelPost(PostForm);
            }else{
                console.log('error');
            }
        });
    }
}

interface Post {
    userId : string;
    id: string;
    title : string;
    body : string;
}