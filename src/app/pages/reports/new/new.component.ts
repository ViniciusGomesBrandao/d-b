import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Observable, take } from 'rxjs';
import { ReportsService } from 'src/app/_services/reports.service';
import { startWith, map } from 'rxjs/operators';
import { StateGroup } from '../../forms/form-elements';

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter((item) => item.toLowerCase().includes(filterValue));
};

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  category_id: number;
  doc: string = "";
  filterForm: FormGroup;
  stateGroupOptions: Observable<any[]>;
  filterControl = new FormControl('');
  searchfilteredOptions: Observable<string[]>;
  searchoption: string[] = ['One', 'Two', 'Three'];
  constructor(
    private activatedRoute: ActivatedRoute,
    private reportService: ReportsService,
    private spinner: NgxUiLoaderService,
    private fb: FormBuilder
  ) {
    this.filterForm = this.fb.group({
      name: [''],
      phone: [[]],
      emails: [[]],
    });
   
  }

  ngOnInit(): void {
    this.searchfilteredOptions = this.filterControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._searchfilter(value || ''))
    );

    this.activatedRoute.paramMap.subscribe((params: any) => {
      this.category_id = params.get('category_id');
    });

   
  }

  private _searchfilter(value: string): string[] {
    const searchfilterValue = value.toLowerCase();

    return this.searchoption.filter((searchoption) =>
      searchoption.toLowerCase().includes(searchfilterValue)
    );
  }


  create() {
    this.spinner.start();
    this.reportService.getPdfReport({
      categoryID: String(this.category_id),
      doc: this.doc
    }).pipe(take(1)).subscribe((response) => {
      if (response.success) {
        // Converter Base64 para Blob
        const byteCharacters = atob(response.data);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'application/pdf' });

        // Criar URL do Blob
        const url = URL.createObjectURL(blob);

        // Criar e disparar o download
        const link = document.createElement('a');
        link.href = url;
        link.download = `Relatório (${this.doc}).pdf`;
        document.body.appendChild(link);
        link.click();

        // Limpar a URL do Blob após o download
        URL.revokeObjectURL(url);
        this.spinner.stop();
      } else {
        this.spinner.stop();
        console.error('Erro ao obter o arquivo PDF.');
      }

    }, (err: HttpErrorResponse) => {
      console.log(err)
      this.spinner.stop();
    });
  }

  private saveFile(data: ArrayBuffer) {
    console.log(data)
    const blob = new Blob([data], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'nome_do_arquivo.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
}
