package com.aswin.demo.serviceimpl;


import com.aswin.demo.entity.*;
import com.aswin.demo.repository.BookingRepository;
import com.aswin.demo.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class BookingServiceimpl implements BookingService {

    @Autowired
    BookingRepository bookingRepository;
    @Override
    public String newBooking(Bookings bookings) {
        bookings.setBookingid(UUID.randomUUID().toString());
        bookingRepository.save(bookings);
        return bookings.getBookingid();
    }

    @Override
    public List<Bookings> getAllbookings( String username) {
        return bookingRepository.findAllById(username);
    }
    @Override
    public String deleteById(String id) {
        bookingRepository.deleteById(id);
        return "booking deleted";
    }
    @Override
    public String updateBooking(Bookings bookings) {
        bookingRepository.save(bookings);
        return "Update success";
    }
}
