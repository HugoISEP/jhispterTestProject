import { Component, OnDestroy, OnInit } from '@angular/core';
import { Author, AuthorService } from 'app/library/author/author.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'jhi-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss'],
})
export class AuthorComponent implements OnInit, OnDestroy {
  authors?: Author[];
  authorsSubscription?: Subscription;

  constructor(private authorService: AuthorService) {}

  ngOnInit(): void {
    this.authorsSubscription = this.authorService.authorsSubject.subscribe(authors => (this.authors = authors));
    this.authorService.emitAuthorsSubject();
  }

  ngOnDestroy(): void {
    this.authorsSubscription?.unsubscribe();
  }
}
