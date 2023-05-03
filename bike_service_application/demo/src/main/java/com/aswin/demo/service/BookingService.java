package com.aswin.demo.service;

import com.aswin.demo.entity.*;

import java.util.List;

public interface BookingService {
    public String newBooking(Bookings bookings);

    List<Bookings> getAllbookings(String username);

    String deleteById(String id);

    String updateBooking(Bookings bookings);
}
