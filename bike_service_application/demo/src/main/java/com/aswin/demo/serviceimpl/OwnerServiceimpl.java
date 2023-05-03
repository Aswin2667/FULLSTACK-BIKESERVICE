package com.aswin.demo.serviceimpl;
import com.aswin.demo.entity.*;
import com.aswin.demo.repository.BookingRepository;
import com.aswin.demo.repository.OwnerRepository;
import com.aswin.demo.service.OwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OwnerServiceimpl implements OwnerService {
    @Autowired
    OwnerRepository ownerRepository;
    @Autowired
    BookingRepository bookingRepository;
    @Override
    public String addowner(Owner owner) {
        try {
            ownerRepository.save(owner);
        }catch (Exception e){
            return "error occured";
        }
        return "successfully added";
    }
    @Override
    public boolean isExist(String username, String password) {
        return ownerRepository.existsById(username)&&ownerRepository.getById(username).getPassword().equals(password);
    }

    @Override
    public List<Bookings> getAllBookings() {
        return bookingRepository.findAll().stream().toList();

    }
}
