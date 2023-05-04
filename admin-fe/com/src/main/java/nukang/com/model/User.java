package nukang.com.model;
import jakarta.persistence.*;

public class User {


  @Entity
  @Table(name = "tutorials")
  public class Tutorial {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "published")
    private boolean published;
  }
}
