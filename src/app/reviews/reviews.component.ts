import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {


  blogs: any[] = []; 
  paginatedBlogs: any[] = [];
  contentLimit: number = 100; 
  pageSize: number = 5;  
  pageIndex: number = 0;
  blog = { name: '', content: '' }; 
  wordLimit: number = 100;
  constructor(
    private http: HttpClient
  ){ }
  ngOnInit() {
    this.loadBlogs();
    this.updatePaginatedBlogs();
  }

  loadBlogs() {
    this.http.get('http://localhost:5001/api/blogs').subscribe((data: any[]) => {
      this.blogs = data;  // Populate the blogs array with data from server
      this.updatePaginatedBlogs();
    });
    
  }

  onSubmit(){
    this.http.post('http://localhost:5001/api/blogs', this.blog).subscribe(
      response => {
        console.log('Blog created successfully:', response);
        this.loadBlogs()
        this.blogs.push(response);
        this.blog = {name: '', content:''};
      }, error => {
        console.error('Error creating blog:', error);
      }
    )
  }
  updatePaginatedBlogs() {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedBlogs = this.blogs.slice(startIndex, endIndex);
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedBlogs();
  }

  toggleExpand(blog: any) {
    blog.expanded = !blog.expanded;
  }
  
}
