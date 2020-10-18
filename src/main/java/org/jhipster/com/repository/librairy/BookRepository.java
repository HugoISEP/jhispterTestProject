package org.jhipster.com.repository.librairy;

import org.jhipster.com.domain.librairy.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}
