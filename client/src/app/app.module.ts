import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { HedearComponent } from './hedear/hedear/hedear.component';
import { FooterComponent } from './footer/footer/footer.component';
import { PHeureComponent } from './P-heure/p-heure/p-heure.component';
import { ActuelComponent } from './actuel/actuel.component';
import { MilitairePipe } from './militaire.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HedearComponent,
    FooterComponent,
    PHeureComponent,
    ActuelComponent,
    MilitairePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
