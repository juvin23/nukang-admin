package nukang.com.controller;

import nukang.com.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class AdminController {

  @Autowired
  TutorialRepository tutorialRepository;

  @GetMapping("/nukang")
  public ResponseEntity<List<User>> getAllnukang(@RequestParam(required = false) String title) {
  }

  @GetMapping("/nukang/{id}")
  public ResponseEntity<User> getTutorialById(@PathVariable("id") long id) {
  }

  @PostMapping("/nukang")
  public ResponseEntity<User> createTutorial(@RequestBody User user) {
  }

  @PutMapping("/nukang/{id}")
  public ResponseEntity<User> updateTutorial(@PathVariable("id") long id, @RequestBody User user) {
  }

  @DeleteMapping("/nukang/{id}")
  public ResponseEntity<HttpStatus> deleteTutorial(@PathVariable("id") long id) {
  }

  @DeleteMapping("/nukang")
  public ResponseEntity<HttpStatus> deleteAllnukang() {
  }

  @GetMapping("/nukang/published")
  public ResponseEntity<List<User>> findByPublished() {
  }
}
