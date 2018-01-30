import { Routes, RouterModule } from '@angular/router';

import { ViewComponent } from './View/view.component';
import { EditComponent } from './Edit/edit.component';
import { AddComponent } from './Add/add.component';

const appRoutes: Routes = [
    { path: '', component: ViewComponent },
    { path: 'add', component: AddComponent },
    { path: 'edit/:id', component: EditComponent },
    {path: '**', component: ViewComponent}
  ];

  export const routing = RouterModule.forRoot(appRoutes);