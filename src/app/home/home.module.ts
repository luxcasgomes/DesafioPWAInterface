import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ListAppsComponent } from '../components/list-apps/list-apps.component';
import { SkeletonComponentComponent } from '../components/skeleton-component/skeleton-component.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, ListAppsComponent, SkeletonComponentComponent,]
})
export class HomePageModule {}
