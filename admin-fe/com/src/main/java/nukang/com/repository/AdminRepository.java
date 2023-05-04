package nukang.com.repository;

import nukang.com.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AdminRepository extends JpaRepository<User, Long> {
  List<User> findByPublished(boolean published);

  List<User> findByTitleContaining(String title);
}
