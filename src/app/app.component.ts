import { Component } from '@angular/core';
import { from } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import{Contact} from './contact';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'local-storage-app';
  constructor( private localStorageService: LocalStorageService) {}
  public firstname :any;
  public phoneNo: any;
  public queryKey: string ='';
  public removeKey: string ='';
  public queryResult1:any;
  public queryResult2:any;
  public contact:Contact[]=[{firstname:'sona',phoneNo:'5555555'},{firstname:'tona',phoneNo:'222222'}];
  //public c:Contact[]=[];
 
 // public contact = {firstName: this.firstname, phoneNo: this.phoneNo }
public addPerson(){
 // this.contact.firstName = this.firstname
  //this.contact.phoneNo = this.phoneNo;
  this.localStorageService.setItem(this.firstname,  JSON.stringify(this.firstname))
 this.localStorageService.setItem(this.phoneNo,  JSON.stringify(this.phoneNo))

 //this.queryResult1 =this.localStorageService.getItem(this.firstname)
 //this.queryResult2 =this.localStorageService.getItem(this.phoneNo)


// console.log(this.queryResult1);
 //console.log(this.queryResult2);
 this.contact.push(this.firstname);
 this.contact.push(this.phoneNo);
 //this.c.push(this.phoneNo);

// let resource = JSON.stringify(Contact);
 //console.log('Add Button clicked: ' + resource);

}
 


deleteData(mycontact:any) {
  for(let i = 0; i < this.contact.length; i++) {
    if(this.contact[i] == mycontact) {
        this.contact.splice(i, 1);
    }
  }

  this.deleteData(mycontact);
}

}
