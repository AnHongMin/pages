import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
    constructor(private http: Http){
        //console.log('PostsService Initialized..');
    }

    getPosts(){
        //   'https://jsonplaceholder.typicode.com/posts'
        var url = 'http://localhost:8080/post.do?method=getList';
        return this.http.get(url).map(res => res.json());
    }

    addPosts(post : any){
        // https://angular.io/docs/ts/latest/api/http/index/Headers-class.html
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

        // https://angular.io/docs/ts/latest/api/http/index/URLSearchParams-class.html
        let urlSearchParams = new URLSearchParams();
        for (var n in post) {
            urlSearchParams.append(n, post[n]);
        }
        let body = urlSearchParams.toString();

        // https://angular.io/docs/ts/latest/api/http/index/RequestOptions-class.html
        let options = new RequestOptions({ headers: headers });

        var url = 'http://localhost:8080/post.do?method=insertPost';

        return this.http.post(url, body, options).map(res => res.json());
    }

    modifyPost(post : any){
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let urlSearchParams = new URLSearchParams();
        for (var n in post) {
            urlSearchParams.append(n, post[n]);
        }
        let body = urlSearchParams.toString();
        let options = new RequestOptions({ headers: headers });
        var url = 'http://localhost:8080/post.do?method=updatePost';
        return this.http.post(url, body, options).map(res => res.json());
    }

    deletePosts(post : any){
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let urlSearchParams = new URLSearchParams();
        for (var n in post) {
            urlSearchParams.append(n, post[n]);
        }
        let body = urlSearchParams.toString();
        let options = new RequestOptions({ headers: headers });

        var url = 'http://localhost:8080/post.do?method=deletePost';
        return this.http.post(url, body, options).map(res => res.json());
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
   }
};