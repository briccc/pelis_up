import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; 
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module'
import { appRoutes } from './app.routing';
import { InicioComponent } from './routes/inicio/inicio.component';
import { PelisComponent } from './routes/pelis/pelis.component';
import { SeriesComponent } from './routes/series/series.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PelisComponent,
    SeriesComponent,
  ],
  imports: [BrowserModule, 
    RouterModule.forRoot(appRoutes), 
    LayoutModule, 
    HttpClientModule,
    SharedModule,  
    AuthModule,
    BsDropdownModule.forRoot(), 
    FormsModule
  ], 
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
