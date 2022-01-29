import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Person } from "src/app/core/interfaces/person";
import { ApiService } from 'src/app/services/api.service';
import { ViewComponent } from '../../view/view.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  public personList: Person[] = [];
  dataSource = new MatTableDataSource<Person>();
  displayedColumns: string[] = ['nombre', 'apellido', 'correo', 'ver'];

  constructor(public dialog: MatDialog, public apiService: ApiService) { }

  ngOnInit(): void {
    this.tableList();
  }
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  tableList() {
    this.apiService.personList().subscribe(response => {
      response.forEach((f: Person) => {
        this.personList.push(f)
        this.dataSource.data = [];
        this.dataSource.data = this.personList.slice(0)
        // console.log(response);
      })
    }, err => {
      console.log(err);
    })
  }

  openDialogView(nombre: string) {
    const dialogRef = this.dialog.open(ViewComponent, {
      data: nombre
    });
    // console.log(nombre);
  }
}