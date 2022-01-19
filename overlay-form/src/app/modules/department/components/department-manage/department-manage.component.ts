import { Component, OnInit } from '@angular/core';

export interface DepartmentElement {

  deptcode: string;
  departname: string;
  status: boolean;
}

const depart_data: DepartmentElement[] = [
  {
    deptcode: 'ELE-90',
    departname:'Mobile',
    status: true
  },
  {
    deptcode: 'ELE-1000',
    departname:'TV',
    status: true
  }
];

@Component({
  selector: 'app-department-manage',
  templateUrl: './department-manage.component.html',
  styleUrls: ['./department-manage.component.scss']
})
export class DepartmentManageComponent implements OnInit {

  displayedColumns: string[] = ['deptcode', 'departname', 'status', 'action'];
  dataSource = depart_data;

  constructor() { }

  ngOnInit(): void {
  }

  // onEdit(DepartmentElement: DepartmentElement){
  //   console.log("here.................");
    
  // }

}
