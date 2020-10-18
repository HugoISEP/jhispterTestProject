import { Moment } from 'moment';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DATE_FORMAT } from '../../shared/constants/input.constants';
import * as moment from 'moment';

export type Author = {
  id?: number;
  name: string;
  nationality: string;
  birthday: Moment;
};

export class AuthorService {
  authors?: Author[];
  authorsSubject = new Subject<Author[]>();

  constructor(private httpClient: HttpClient) {}

  emitAuthorsSubject(): void {
    this.authorsSubject.next(this.authors);
  }

  getAllAuthors(): void {
    this.httpClient
      .get<Author[]>('http://localhost:8080/api/author')
      .pipe()
      .subscribe(reponse => {
        this.authors = reponse.map(au => this.convertDateFromServer(au));
        this.emitAuthorsSubject();
      });
  }

  editAuthor(author: Author): void {
    author = this.convertDateFromClient(author);
    this.httpClient.put<Author>(`http://localhost:8080/api/author/${author.id}`, author).subscribe(response => {
      this.authors = this.authors?.filter(a => a.id !== author.id);
      this.authors?.push(this.convertDateFromServer(response));
      this.emitAuthorsSubject();
    });
  }

  addAuthor(author: Author): void {
    author = this.convertDateFromClient(author);
    this.httpClient.post<Author>('http://localhost:8080/api/author', author).subscribe(response => {
      this.authors?.push(this.convertDateFromClient(response));
      this.emitAuthorsSubject();
    });
  }

  deleteAuthor(author: Author): void {
    this.httpClient.delete<void>(`http://localhost:8080/api/author/${author.id}`).subscribe(() => {
      this.authors = this.authors?.filter(a => a.id !== author.id);
      this.emitAuthorsSubject();
    });
  }

  protected convertDateFromClient(author: Author): Author {
    const copy: Author = Object.assign({}, author, {
      birthDay: author.birthday && author.birthday.isValid() ? author.birthday.format(DATE_FORMAT) : undefined,
    });
    return copy;
  }

  protected convertDateFromServer(res: Author): Author {
    if (res.birthday) {
      res.birthday = moment(res.birthday);
    }
    return res;
  }
}
