import { Component } from '@angular/core';
import { CourseService } from './course.service';
import { course } from './course';
import { CategoryService } from 'src/app/_services/category.service';
import { Category } from '../_interfaces/category';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { take } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  categoriesList: Category[] = [];
  selectedCategory = 'All';

  constructor(
    private courseService: CourseService,
    private categoryService: CategoryService,
    private spinner: NgxUiLoaderService,
    private router: Router
  ) {
    this.getCategories();
  }

  getCategories(){
    this.spinner.start();
    this.categoryService.getAll({}).pipe(take(1)).subscribe((response) => {
      if(response.success){
        this.categoriesList = response.data;  
      }else{

      }
      this.spinner.stop();
    }, (error: HttpErrorResponse) => {
      this.spinner.stop();
    })
  }
  
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    // this.categoriesList = this.filter(filterValue);
  }

  goToCreate(){
    this.router.navigate(['/pages/category/new']);
  }

  // filter(v: string): Category[] {
  //   return this.courseService
  //     .getCourse()
  //     .filter((x) => x.courseName.toLowerCase().indexOf(v.toLowerCase()) !== -1);
  // }

  // ddlChange(ob: any): void {
  //   const filterValue = ob.value;
  //   if (filterValue === 'All') {
  //     this.categoriesList = this.courseService.getCourse();
  //   } else {
  //     this.categoriesList = this.courseService
  //       .getCourse()
  //       // tslint:disable-next-line: no-shadowed-variable
  //       .filter((course) => course.courseFramework === filterValue);
  //   }
  //   // this.todos.filter(course => course.courseType==filterValue);
  // }
}
