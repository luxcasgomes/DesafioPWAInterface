import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModaAppComponent } from '../../modal-components/moda-app/moda-app.component'
import { AppsService } from "../../services/apps.service"

interface Apps {
  image: string,
  name: string,
  icon: string,
  dev: string,
  tipo: string,
}

@Component({
  selector: 'list-apps',
  templateUrl: './list-apps.component.html',
  styleUrls: ['./list-apps.component.scss'],
})
export class ListAppsComponent implements OnInit {

  @Input() pesquisa: string;

  displaySkeletons: boolean = false;

  // background: string = "https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg"
  // icon: string = "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltbe08684abd48fe97/5fd2a7e97c43e43bf4196b8f/ValorantWallpaper_Icebox.jpg"

  appInit: any;
  aplicativo: any;
  // apps: Array<Apps> = [
  //   {
  //     image: this.background,
  //     name: "Legends of Runeterra",
  //     icon: this.icon,
  //     dev: "RIOT",
  //     tipo: "jogo",
  //   },
  //   {
  //     image: this.background,
  //     name: "Legends of Runeterra",
  //     icon: this.icon,
  //     dev: "RIOT",
  //     tipo: "alimentacao",
  //   },
  //   {
  //     image: this.background,
  //     name: "Legends of Runeterra",
  //     icon: this.icon,
  //     dev: "RIOT",
  //     tipo: "entretenimento",
  //   },
  //   {
  //     image: this.background,
  //     name: "20Matar.",
  //     icon: this.icon,
  //     dev: "RIOT",
  //     tipo: "alimentacao",
  //   },
  //   {
  //     image: this.background,
  //     name: "Fear.",
  //     icon: this.icon,
  //     dev: "RIOT",
  //     tipo: "jogo",
  //   },
  //   {
  //     image: this.background,
  //     name: "Sunset.",
  //     icon: this.icon,
  //     dev: "RIOT",
  //     tipo: "jogo",
  //   },
  //   {
  //     image: this.background,
  //     name: "Matador de Noob.",
  //     icon: this.icon,
  //     dev: "RIOT",
  //     tipo: "jogo",
  //   },
  //   {
  //     image: this.background,
  //     name: "Dark.",
  //     icon: this.icon,
  //     dev: "RIOT",
  //     tipo: "entretenimento",
  //   },
  //   {
  //     image: this.background,
  //     name: "Homi aranha",
  //     icon: this.icon,
  //     dev: "RIOT",
  //     tipo: "entretenimento",
  //   },
  //   {
  //     image: this.background,
  //     name: "Dark Souls",
  //     icon: this.icon,
  //     dev: "RIOT",
  //     tipo: "entretenimento",
  //   },
  //   {
  //     image: this.background,
  //     name: "Dark.",
  //     icon: this.icon,
  //     dev: "RIOT",
  //     tipo: "entretenimento",
  //   },
  //   {
  //     image: this.background,
  //     name: "FIfa",
  //     icon: this.icon,
  //     dev: "RIOT",
  //     tipo: "entretenimento",
  //   },
  //   {
  //     image: this.background,
  //     name: "MACACOO",
  //     icon: this.icon,
  //     dev: "RIOT",
  //     tipo: "entretenimento",
  //   },
  //   {
  //     image: this.background,
  //     name: "ugauga.",
  //     icon: this.icon,
  //     dev: "RIOT",
  //     tipo: "entretenimento",
  //   },

  // ]

  constructor( public modalController: ModalController, public appsService:AppsService) {
    // this.openModalApp(this.appInit[0])
  }
  
  async ngOnInit() {
    this.appInit = await this.appsService.getListApps();
    this.aplicativo = this.appInit
   }

  ngDoCheck() {
    this.findApps(this.pesquisa, this.appInit)
  }

  findApps(texto: string, apps: Array<Apps>) {
    if (!texto || texto.length === 0 || undefined) {
      return this.aplicativo = this.appInit;
    }
    this.displaySkeletons = true;


    texto = texto.toLocaleLowerCase();
    return this.aplicativo = this.appInit.filter(app => {
      this.displaySkeletons = false;
      return app.name.toLowerCase().includes(texto)
    })
  }
  async openModalApp(app){
    const modal = await this.modalController.create({
      component: ModaAppComponent,
      cssClass: 'my-custom-class',
      backdropDismiss: true,
      animated: true,
      swipeToClose: true,
      componentProps: {
        app: app
      }
    });
    return await modal.present();
    
  }


}
