package com.aswin.demo.controller;
import com.aswin.demo.entity.*;
import com.aswin.demo.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/booking")
@CrossOrigin("*")
public class BookingController {
        @Autowired
        BookingService bookingService;

        @PostMapping("/addbooking")
    public String newBooking(@RequestBody Bookings bookings){
    return bookingService.newBooking(bookings);

    }

    @GetMapping("/all/{username}")
    public List<Bookings> getAllBookings(@PathVariable("username") String username){
            return bookingService.getAllbookings(username);
    }
    @DeleteMapping("/{id}")
    public String removeByid(@PathVariable("id") String id){
            return bookingService.deleteById(id);
    }
    @PutMapping("/update")
    public String updateBooking(@RequestBody Bookings bookings){
            return bookingService.updateBooking(bookings);
    }
}
