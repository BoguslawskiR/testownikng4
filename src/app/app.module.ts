import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
//components
import { TestComponent, LearnComponent, LoginComponent, TestListComponent, UserComponent } from './components';
 //services
 import { TestsService } from './services/tests.service';
import { LoginService } from './services/login.service';
import { CurrentUserService } from './services/current-user.service';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LearnComponent,
    LoginComponent,
    TestListComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    AuthService,
    TestsService,
    LoginService,
    CurrentUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 