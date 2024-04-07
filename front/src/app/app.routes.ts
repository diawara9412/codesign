import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'global', loadChildren: () => import('./global/global.module')
        .then(m => m.GlobalModule)
      },
      
      { path: '**', redirectTo: '/global', pathMatch:'full'},
];
