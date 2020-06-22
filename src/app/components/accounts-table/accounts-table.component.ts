import { Component, OnInit, Input } from '@angular/core';
import { Compte } from 'src/app/Models/Compte.Model';

@Component({
  selector: 'app-accounts-table',
  templateUrl: './accounts-table.component.html',
  styleUrls: ['./accounts-table.component.css']
})
export class AccountsTableComponent implements OnInit {
  variab:string="epargne";
  ccompte:Compte=null;
  comptes:Array<Compte>
  totalRecords:string;
  page: number=1;
  showVar:boolean=true;
  //@Input() compte:Array<Compte>
  @Input() test:Array<Compte>;
  @Input() epargne:Array<Compte>;
  id:any;
  
    constructor() { }
    ngOnInit(): void {
      this.comptes=this.test;
     
    }
  
    voircheques(){
      
      this.comptes=this.test;
      this.ccompte=null;
      this.page=1;
     // this._router.navigate(['/comptes']); 
     // location.reload();
      
    }
   
    voirepargnes(){
      
      this.comptes=this.epargne;
      this.ccompte=null;
      this.page=1;
     // this._router.navigate(['/comptes']); 
      //location.reload();
     
    }
     select(comppptes){
      
       this.ccompte=comppptes;
    }

}
