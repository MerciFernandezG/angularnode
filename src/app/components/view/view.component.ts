import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { Person } from '../../core/interfaces/person';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  persons: any = []= [] ;

  constructor(@Inject(MAT_DIALOG_DATA)
  public data: any,
  private dialogRef: MatDialogRef<ViewComponent>,
  public apiService: ApiService) { }

  ngOnInit(): void {
    //  console.log(this.data, "VER");
     this.viewPerson();
  }

  viewPerson() {
    this.apiService.viewPerson(this.data).subscribe((res:any) => {
      this.persons = res;
      // console.log(this.persons);
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
