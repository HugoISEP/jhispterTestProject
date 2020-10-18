import { Route } from '@angular/router';
import { AuthorComponent } from './author.component';
import { UserRouteAccessService } from '../../core/auth/user-route-access-service';
import { Authority } from '../../shared/constants/authority.constants';

export const authorRoute: Route = {
  path: '',
  component: AuthorComponent,
  data: {
    authorities: [Authority.USER],
    pageTitle: 'Auteurs',
  },
  canActivate: [UserRouteAccessService],
};
