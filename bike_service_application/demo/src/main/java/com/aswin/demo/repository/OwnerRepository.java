package com.aswin.demo.repository;

import com.aswin.demo.entity.Owner;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OwnerRepository extends JpaRepository<Owner , String> {
}
