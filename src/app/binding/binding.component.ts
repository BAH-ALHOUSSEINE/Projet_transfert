import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styles: ``
})
export class BindingComponent {

  status : boolean = false;

  titre : string = "bienvenu sur le site";
  name : string | undefined = "bah" ;

  clik_for_update_title (){
      this.titre="on m'a mis a jour ";
  }
}
