import { Component } from '@angular/core';
import { ReportsService } from 'src/app/_services/reports.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  constructor(
    private reportService: ReportsService
  ){

  }
}
