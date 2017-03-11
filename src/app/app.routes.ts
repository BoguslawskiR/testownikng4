import { Routes } from '@angular/router';

import { TestListComponent } from './components/test-list/test-list.component'
import { LearnComponent } from './components/learn-mode/learn-mode.component'
import { TestComponent } from './components/test-mode/test-mode.component'
import { LoginComponent } from './components';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'tests', component: TestListComponent },
  { path: 'tests/:testId/learn', component: LearnComponent },
  { path: 'tests/:testId/test', component: TestComponent}
];

