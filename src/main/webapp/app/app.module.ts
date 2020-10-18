import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterSharedModule } from 'app/shared/shared.module';
import { JhipsterCoreModule } from 'app/core/core.module';
import { JhipsterAppRoutingModule } from './app-routing.module';
import { JhipsterHomeModule } from './home/home.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';
import { AuthorComponent } from './library/author/author.component';
import { LibraryRoutingModule } from 'app/library/library-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterSharedModule,
    JhipsterCoreModule,
    JhipsterHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    LibraryRoutingModule,
    JhipsterAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class JhipsterAppModule {}
