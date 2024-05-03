import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { take } from 'rxjs';
import { CategoryService } from 'src/app/_services/category.service';
import { Module, ModulesService } from 'src/app/_services/modules.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent {
  newForm: FormGroup;
  modules: Module[];
  selectedModules: number[] = [];
  totalValue: number = 0.0;
  constructor(
    private formBuilder: FormBuilder,
    private spinner: NgxUiLoaderService,
    private categoryService: CategoryService,
    private moduleService: ModulesService,
    private _snackBar: MatSnackBar,
    private location: Location
  ) {
    this.newForm = this.formBuilder.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
      modules: [[]]
    });
    this.getModules();
  }

  create() {
    if (this.newForm.valid) {
      this.newForm.setValue({
        name: this.newForm.value.name,
        modules: this.selectedModules,
        description: this.newForm.value.description,
      });
      this.spinner.start();
      this.categoryService.new(this.newForm.value).pipe(take(1)).subscribe((response) => {
        if (response.success) {
          this.alertMenssage(response.message);
          this.newForm.reset();
        } else {
          this.alertMenssage(response.message);
        }
        this.spinner.stop();
      })
    } else {
      this.alertMenssage("Preencha todos os campos!");
    }
  }

  getModules() {
    this.spinner.start();
    this.moduleService.getAll({}).pipe(take(1)).subscribe((response) => {
      if (response.success) {
        
        this.modules = response.data;
      } else {
        this.alertMenssage(response.message);
      }
      this.spinner.stop();
    }, (error: HttpErrorResponse) => {
      this.alertMenssage(error.message);
    })
  }

  selectModule(id: number, value: number, isChecked: any) {
    
    if (isChecked) {
      // Adiciona o ID ao array se o checkbox estiver marcado
      this.selectedModules.push(id);
      this.totalValue += value;
    } else {
      // Remove o ID do array se o checkbox estiver desmarcado
      this.selectedModules = this.selectedModules.filter(item => item !== id);
      this.totalValue -= value;
    }
    console.log(this.selectedModules)
  }


  alertMenssage(message: string, action: string = "Ok") {
    this._snackBar.open(message, action);
  }

  cancel(){
    this.location.back();
  }
}
