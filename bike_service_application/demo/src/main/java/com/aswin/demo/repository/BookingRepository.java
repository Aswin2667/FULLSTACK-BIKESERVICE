package com.aswin.demo.repository;

import com.aswin.demo.entity.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookingRepository extends JpaRepository<Bookings,String>{


    @Query(
            value = "select *from bookings b where b.username = ?1",
            nativeQuery = true
    )
    public List<Bookings> findAllById(String username);

}
