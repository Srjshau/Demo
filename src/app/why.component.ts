import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'; 

class Url {
  name: string;
  path: string;
}

@Component({
  selector: 'app-why',
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.css']
}) 
export class WhyComponent {

  constructor (private _http: HttpClient) {}

  urls: Url[] = [ {name: 'Google', path: 'https://www.google.com/' },
                  {name: 'Youtube', path: 'https://www.youtube.com/' }  
                ];
  
  selectedValue = this.selectedValue;
  onChange(event){
    console.log(event.target.value);
    let url: string= event.target.value;
    window.open(url, "_blank");
  }

  reading(){
    return this._http.get('assets/hmm.txt').pipe(
      map((msg:Response) => msg.text())
    );
  }

  read(){
    alert("reading");
    alert(this.reading);

    

  }
  

}
