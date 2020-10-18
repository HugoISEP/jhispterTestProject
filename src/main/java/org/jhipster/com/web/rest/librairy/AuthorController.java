package org.jhipster.com.web.rest.librairy;

import com.sun.mail.iap.Response;
import io.github.jhipster.web.util.ResponseUtil;
import org.jhipster.com.domain.librairy.Author;
import org.jhipster.com.repository.librairy.AuthorRepository;
import org.jhipster.com.web.rest.errors.BadRequestAlertException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/author")
public class AuthorController {

    private static final String ENTITY_NAME = "author";

    private final AuthorRepository repository;

    public AuthorController(AuthorRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Author> getById(@PathVariable Long id){
        return ResponseUtil.wrapOrNotFound(repository.findById(id));
    }

    @GetMapping("")
    public List<Author> getAll(){
        return repository.findAll();
    }

    @PostMapping()
    public Author create(@Valid @RequestBody Author author){
        if (author.getId() != null) {
            throw new BadRequestAlertException("A new author cannot already have an ID", ENTITY_NAME, "idexists");
        }
        return repository.save(author);
    }

    @PutMapping()
    public Author edit(@Valid @RequestBody Author author){
        if (author.getId() == null) {
            throw new BadRequestAlertException("Cannot edit ", ENTITY_NAME, " id doesn't exist");
        }
        return repository.save(author);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        repository.delete(repository.findById(id).orElseThrow(() -> new BadRequestAlertException("Cannot delete ", ENTITY_NAME, " id doesn't exist")));
    }

}
