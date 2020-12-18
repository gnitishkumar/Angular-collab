import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upd-profile',
  templateUrl: './upd-profile.component.html',
  styleUrls: ['./upd-profile.component.css']
})
export class UpdProfileComponent implements OnInit {

  public username:string='';
  public password:string='';
  public email:string='';
  public state:string='';
  public address:string='';
  public mobile:number=null;
  public zipcode:number=null;
  public city:string='';

  constructor() { }

  ngOnInit(): void {
  }

  onUpd(form)
  {
    if(form.valid)
    {

    //   this.authService.updating(form.value.username,form.value.password,form.value.email,form.value.mobile,form.value.state,form.value.address,form.value.city);
    // this.router.navigate(['/home/profile']);
    }
  }

}
