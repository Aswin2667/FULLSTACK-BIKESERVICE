package com.aswin.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.sql.Date;
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Bookings {
    @Id
    String bookingid;
    @Column(
            name = "username"
    )
    String username;
    @Column(
            name = "bikename"
    )
    String bikename;
    @Column(
            name="bikeno"
    )
    String bikeno;
    @Column(
            name = "status"
    )
    String status;
    @Column(
            name = "service"
    )
    String service;
    @Column(
            name = "date"
    )
    String date;
}
