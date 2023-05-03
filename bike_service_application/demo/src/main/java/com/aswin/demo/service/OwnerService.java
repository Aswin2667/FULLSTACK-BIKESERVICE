package com.aswin.demo.service;


import com.aswin.demo.entity.Bookings;
import com.aswin.demo.entity.Owner;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface OwnerService {
    public  String addowner(Owner owner);

    boolean isExist(String username, String password);

    List<Bookings> getAllBookings();
}
