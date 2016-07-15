import { RouterConfig } from '@angular/router';

import { EditComponent } from './index';

export const EditRoutes: RouterConfig = [
  {
    path: 'edit/:id',
    component: EditComponent
  }
];
