package org.jhipster.com.web.rest.librairy;

import org.jhipster.com.domain.librairy.Book;
import org.jhipster.com.repository.librairy.BookRepository;
import org.jhipster.com.web.rest.errors.BadRequestAlertException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/book")
public class BookController {

    private static final String ENTITY_NAME = "book";

    private final BookRepository repository;

    public BookController(BookRepository repository) {
        this.repository = repository;
    }

    @GetMapping()
    public List<Book> getAll(){
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public Book getById(@PathVariable Long id){
        return repository.findById(id).orElseThrow(() -> new BadRequestAlertException("Book doesn't exist", ENTITY_NAME, "id doesn't exist"));
    }

    @PostMapping()
    public Book create(@Valid @RequestBody Book book){
        if (book.getId() != null) {
            throw new BadRequestAlertException("A new book cannot already have an ID", ENTITY_NAME, "idexists");
        }
        return repository.save(book);
    }

    @PutMapping("/{id}/availability")
    public Book editAvailability(@PathVariable Long id){
        Book book = repository.findById(id).orElseThrow(() -> new BadRequestAlertException("Book doesn't exist", ENTITY_NAME, "id doesn't exist"));
        book.setAvailable(!book.isAvailable());
        return repository.save(book);
    }

    @PutMapping()
    public Book edit(@Valid @RequestBody Book book){
        if (book.getId() == null) {
            throw new BadRequestAlertException("book doesn't have an ID", ENTITY_NAME, "id doesn't exist");
        }
        return repository.save(book);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        repository.delete(repository.findById(id).orElseThrow(() -> new BadRequestAlertException("cannot delete", ENTITY_NAME, "id doesn't exist")));
    }

}
