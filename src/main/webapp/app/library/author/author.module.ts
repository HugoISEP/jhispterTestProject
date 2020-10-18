import { NgModule } from '@angular/core';
import { JhipsterSharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AuthorComponent } from './author.component';
import { authorRoute } from './author.route';

@NgModule({
  imports: [JhipsterSharedModule, RouterModule.forChild([authorRoute])],
  declarations: [AuthorComponent],
})
export class AuthorModule {}
