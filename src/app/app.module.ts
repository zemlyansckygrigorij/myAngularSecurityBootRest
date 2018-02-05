import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import {UserComponent} from './user/user.component';
import {UserListComponent} from './user-list/user-list.component';
import {AppUserService} from './shared/user.service';
import {LoginComponent} from './security/login/login.component';
import {AuthGuard} from './security/guards/auth.guards';
import {AuthService} from './security/service/auth.service';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './security/header/header.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HttpHandler} from './util/httpHandler';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';

const routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DashboardComponent,
    UserListComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // FormBuilder,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule, // Импортируем модуль
    ToastrModule.forRoot()
  ],
  providers: [AppUserService,
    AuthGuard,
    AuthService,
    HttpHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
