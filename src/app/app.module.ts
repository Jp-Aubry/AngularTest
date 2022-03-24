import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MarkerService } from './marker.service';
import { FarmerService } from './farmer-profile/farmer.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './map/map.component';
import { MatSliderModule } from '@angular/material/slider'
import { MatInputModule } from '@angular/material/input'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatDividerModule } from '@angular/material/divider'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatPaginatorModule} from '@angular/material/paginator';
import { FarmerProfileComponent } from './farmer-profile/farmer-profile.component';
import { MenuComponent } from './menu/menu.component';
import { FarmerInfoComponent } from './farmer-info/farmer-info.component'
import { FormsModule } from '@angular/forms';
import {SidenavModeExample} from './sidenav-mode-example';
import {MatRadioModule} from '@angular/material/radio';
import {MatToolbarModule} from '@angular/material/toolbar';


 


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    FarmerProfileComponent,
    MenuComponent,
    FarmerInfoComponent,
    SidenavModeExample  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSliderModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatPaginatorModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule,
    MatRadioModule,
    MatToolbarModule
  ],
  providers: [
    MarkerService,
    FarmerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
