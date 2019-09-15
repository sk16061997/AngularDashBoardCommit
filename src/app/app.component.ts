import { Component } from '@angular/core';
import 'hammerjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyDashboardTest';
  status="No";
  element = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];
  element2 = [
    {position: 1, name: 'Hydrogen', symbol: 'H'},
    {position: 2, name: 'Helium', symbol: 'He'},
    {position: 3, name: 'Lithium', symbol: 'Li'},
    {position: 4, name: 'Beryllium', symbol: 'Be'},
    {position: 5, name: 'Boron', symbol: 'B'},
    {position: 6, name: 'Carbon', symbol: 'C'},
    {position: 7, name: 'Nitrogen', symbol: 'N'},
    {position: 8, name: 'Oxygen', symbol: 'O'},
    {position: 9, name: 'Fluorine', symbol: 'F'},
    {position: 10, name: 'Neon', symbol: 'Ne'},
  ];
  element3=[];
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  displayedColumns2 = ['position', 'name', 'symbol'];
  displayedColumns3= ['position','name'];
  options=[{
    "name":"Sudesh",
    "value":27
  },{
    "name":"Kunal",
    "value":30
  },{
    "name":"Akshay",
    "value":32
  },{
    "name":"Ashutosh",
    "value":35
  }];
  group=[this.options,this.options,this.options];
  group1=[this.options];
  group2=[];
  group3=[];
  constructor(){
    console.log(this.group);
  }
  addOptions(){
    this.group.push(this.options);
  }
  delOptions(i){
    this.group.splice(i,1);
    console.log(i);
  }
  addOptions1(){
    this.group1.push(this.options);
  }
  delOptions1(i){
    this.group1.splice(i,1);
    console.log(i);
  }
  addOptions2(){
    this.group2.push(this.options);
  }
  delOptions2(i){
    this.group2.splice(i,1);
    console.log(i);
  }
  addOptions3(){
    this.group3.push(this.options);
  }
  delOptions3(i){
    this.group3.splice(i,1);
    console.log(i);
  }
  changed(){
    console.log("Updated");
    if(this.status=="No")
      this.status="Yes";
    else
      this.status="No";
  }
  update3(i){

  }
  update(i){

  }
  update1(i){

  }
  update2(i){

  }

}
