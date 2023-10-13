package com.pgadmission.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pgadmission.main.model.eventdecorationbirthday;
@Repository
public interface birthday extends JpaRepository<eventdecorationbirthday, Integer> {

}
