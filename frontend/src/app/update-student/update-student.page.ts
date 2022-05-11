import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.page.html',
  styleUrls: ['./update-student.page.scss'],
})
export class UpdateStudentPage implements OnInit {
  id: any;
  year: any;
  studentOne: any;
  studentTwo: any;
  students: any =[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _apiService: ApiService
  ) { 
    this.route.params.subscribe((param:any) => {
      this.id = param.id;
      console.log(this.id);
      this.getStudent(this.id);
    })
  }

  ngOnInit() {
  }

  getStudent(id){
    this._apiService.getStudent(id).subscribe((res:any) => {
      console.log("SUCCESS", res);
      let student = res[0];
      this.year = student.year;
      this.studentOne = student.studentOne;
      this.studentTwo = student.studentTwo;
    }),(err:any) => {
      console.log("ERROR", err);
    }
  }

  updateStudent(){
    let data = {
      year: this.year,
      studentOne: this.studentOne,
      studentTwo: this.studentTwo,
    }
    this._apiService.updateStudent(this.id,data).subscribe((res:any) => {
      console.log("SUCCESS", res);
      this.router.navigateByUrl('/home');
    }),(err:any) => {
      console.log("ERROR", err);
    }
  }

  backHome(){
    this.router.navigateByUrl('/home');
  }

}
