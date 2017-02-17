import { Component } from '@angular/core';
import { OnInit }    from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { PostsService } from '../services/posts.service';

@Component({
    moduleId: module.id,
    selector: 'new-post',
    templateUrl: `new-post.component.html`,
    styleUrls: ['./posts.component.css'],
    providers : [PostsService]
})

export class NewPostComponent implements OnInit  {
    selectedId : string;
    selectedPost: Post;

    id : string;
    userId : string; 
    title : string;
    body : string;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private postsService : PostsService
    ) {
        let selectedId = this._route.snapshot.params['id'];
        this.selectedId = selectedId;

//        console.log(typeof id);
        if(selectedId === '0'){
        }else{
            this.postsService.getPost(selectedId).subscribe(res => {
                this.selectedPost = res;
                this.userId = this.selectedPost.userId;
                this.id = this.selectedPost.id;
                this.title = this.selectedPost.title;
                this.body = this.selectedPost.body;
            });
            
        }
    }

    ngOnInit(){
    }

    cancelPost(){
        this._router.navigate(['page3']);
    }
}

interface Post {
    userId : string;
    id: string;
    title : string;
    body : string;
}