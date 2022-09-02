import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
import { Task } from "../Task";
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public url: string = "http://localhost:8085/api/"
  public tasks: Task[] = [];
  public taskFilter: Task[] = [];
  public task!: Task;

  public search= new EventEmitter();
  public searchDeleted= new EventEmitter();
  public taskSearch: any;
  public taskDeletedSearch: any;
  public href : any;


  public todoCount$ = new BehaviorSubject<number>(0);
  public deletedCount$ = new BehaviorSubject<number>(0);


  constructor(private http: HttpClient) { }

  // getTodoList
  public getTodo() {
    return this.http.get(this.url) as Observable<any>;
  }

  // Update or Insert
  public UpdateOrInsertTodo(task: Task): Observable<any> {
  
    return this.http.post(this.url + 'insert', task) as Observable<any>;
  }

  // Delete
  public deleteTodo(id: number): Observable<any> {
    return this.http.delete(this.url + 'delete/' + id) as Observable<any>;
  }

  // get Deleted TodoList
  getDeletedTodoList() {
    return this.http.get(this.url + 'deletedList') as Observable<any>;
  }

  // get by Id
  getTodoById(id: number) {
    return this.http.get(this.url + id) as Observable<any>;
  }

    // Search By Name
    searchByName(name : string){
      const params = new HttpParams().set('name', name);
      (this.http.get(this.url + 'search', {params}) as Observable<any>).subscribe((res)=>{
        this.taskSearch = res.item as Observable<any>;
        this.search.emit();
      });
      return  (this.http.get(this.url + 'search', {params}) as Observable<any>);
    }

  // // Search Deleted By Name
  // searchDeletedByName(name: string) {
  //   const params = new HttpParams().set('name', name);
  //   (this.http.get(this.url + 'searchDeleted', { params }) as Observable<any>).subscribe((data) => {
  //     this.taskDeletedSearch = data.item as Observable<any>;
  //     this.searchDeleted.emit();
  //   });
  //   return (this.http.get(this.url + 'searchDeleted', { params }) as Observable<any>);
  // }

  // // Search By Name
  // searchByName(name : string){
  //   const params = new HttpParams().set('name', name.trim());
  //   if(this.href == '/home') {
  //     (this.http.get(this.url + 'search', {params}) as Observable<any>).subscribe((res)=>{
  //       this.taskSearch = res.item as Observable<any>;
  //       this.search.emit();
  //     });
  //     return  (this.http.get(this.url + 'search', {params}) as Observable<any>);

  //   } else{
  //     (this.http.get(this.url + 'searchDeleted', {params}) as Observable<any>).subscribe((res)=>{
  //       this.taskDeletedSearch = res.item as Observable<any>;
  //       this.searchDeleted.emit();
  //     });
  //     return  (this.http.get(this.url + 'searchDeleted', {params}) as Observable<any>);
  //   }
    
  // }


}





