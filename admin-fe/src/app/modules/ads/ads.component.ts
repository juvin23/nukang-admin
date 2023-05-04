import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AdsService } from './ads.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Ads } from './ads';
import { FormBuilder, FormGroup } from '@angular/forms';


declare function showPreview():any;

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent {
  // selectedFiles?: FileList;
  // currentFile?: File;
  // preview = '';
  // file!: File;
  // ads = new Ads;
  form!: FormGroup;
  file!: File;



  constructor(private fb: FormBuilder, private http: HttpClient) {}

//   selectFile(event: any): void {
//     this.preview = '';
//     this.selectedFiles = event.target.files;
  
//     if (this.selectedFiles) {
//       const file: File | null = this.selectedFiles.item(0);
  
//       if (file) {
//         this.preview = '';
//         this.currentFile = file;
  
//         const reader = new FileReader();
  
//         reader.onload = (e: any) => {
//           console.log(file.name);
//           this.preview = e.target.result;
//           this.ads.preview = file;
//           this.ads.name = file.name;
//         };
  
//         reader.readAsDataURL(this.currentFile);
//       }
//     }
//   }

//   upload() {

//     this.adsService.createAdsDetail(this.ads).subscribe(data =>
//       {
//         console.log(data);
//       },
//       error => console.log(error))
//     console.log(this.ads.name);
//     console.log(this.ads.preview);
// }
ngOnInit() {
  this.createForm();
}

// Instantiate an AbstractControl from a user specified configuration
createForm() {
  this.form = this.fb.group({
    file_upload: null
  });
}

// Check for changes in files inputs via a DOMString reprsenting the name of an event
fileChange(event: any) {
  // Instantiate an object to read the file content
  let reader = new FileReader();
  // when the load event is fired and the file not empty
  if(event.target.files && event.target.files.length > 0) {
    // Fill file variable with the file content
    this.file = event.target.files[0];
  }

  
}

// Upload the file to the API
upload() {
  // Instantiate a FormData to store form fields and encode the file
  let body = new FormData();
  // Add file content to prepare the request
  body.append("image", this.file);
  // Launch post request
  this.http.post('http://localhost:8080/api/v1/ads', body)
  .subscribe(
    // Admire results
    (data) => {console.log(data)},
    // Or errors :-(
    error => console.log(error),
    // tell us if it's finished
    () => { console.log("completed") }
  );
}
}

