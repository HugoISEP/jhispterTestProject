package org.jhipster.com.repository.librairy;


import org.jhipster.com.domain.librairy.Author;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthorRepository extends JpaRepository<Author, Long> {
}
