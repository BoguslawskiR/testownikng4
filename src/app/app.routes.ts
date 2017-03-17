import { Routes } from '@angular/router';

import { TestListComponent } from './components/test-list/test-list.component'
import { LearnComponent } from './components/learn-mode/learn-mode.component'
import { TestComponent } from './components/test-mode/test-mode.component';
import { LoginComponent, UserComponent } from './components';

import { AuthService } from './services/auth.service';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'user', component: UserComponent, canActivate: [AuthService], children: [
      { path: 'tests', component: TestListComponent, canActivate: [AuthService] },
      { path: 'tests/:testId/learn', component: LearnComponent, canActivate: [AuthService] },
      { path: 'tests/:testId/test', component: TestComponent, canActivate: [AuthService] }
    ]
  },
];

