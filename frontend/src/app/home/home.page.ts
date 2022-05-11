import { Component } from '@angular/core';
import { IonRefresher } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  year: any;
  studentOne: any;
  studentTwo: any;
  students: any =[];


  constructor(
    public _apiService: ApiService
    ) {
    this.getStudents();
  }

  addStudent(){
    let data = {
      year: this.year,
      studentOne: this.studentOne,
      studentTwo: this.studentTwo,
    }

    this._apiService.addStudent(data).subscribe((res:any) =>{
      console.log("SUCCESS ===",res);
      this.year = "";
      this.studentOne = "";
      this.studentTwo = "";
      alert('Success');
      this.getStudents();
    },(error:any) =>{
      alert('Error');
      console.log("ERROR ===",error);
    })
  }

  getStudents(){
    this._apiService.getStudents().subscribe((res:any) =>{
      console.log("SUCCESS ===",res);
      this.students = res;
    },(error:any) =>{
      console.log("ERROR ===",error);
    })
  }

  deleteStudent(id){
    this._apiService.deleteStudent(id).subscribe((res:any) => {
      console.log("SUCCESS");
      this.getStudents();
    }),(err:any) => {
      console.log("ERROR");
    }
  }

  doRefresh(event){
    console.log('Begin async operation');
    this._apiService.getStudents().subscribe((res:any) =>{
      console.log("SUCCESS ===",res);
      this.students = res;
      event.target.complete();
    },(error:any) =>{
      console.log("ERROR ===",error);
    })
    setTimeout(() => {
      console.log('Async operation has ended');
    }, 2000);
  }
}
