import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonRadio, IonRadioGroup, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-status-page',
  templateUrl: './status-page.page.html',
  styleUrls: ['./status-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, 
    IonToolbar, CommonModule, FormsModule, 
    IonList, IonRadio, IonItem, IonLabel, 
    IonButton, IonRadioGroup, IonBackButton, IonButtons]
})
export class StatusPagePage implements OnInit {

  myStatus:String ="";

  constructor(private storage: Storage, private router: Router) { }

  async ionViewWillEnter() {
    await this.storage.create();
    this.myStatus = await this.storage.get('status'); 
   }

  async saveStatus(){
    await this.storage.set('status', this.myStatus)
    .then(
      ()=>{
        this.router.navigate(['/home']);
      }
    )
    .catch(
      (error)=>{
        console.log(error);
      }
    );
  }
  
  ngOnInit() {
  }

}
