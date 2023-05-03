package com.aswin.demo.controller;
import com.aswin.demo.entity.Bookings;
import com.aswin.demo.entity.Owner;
import com.aswin.demo.service.OwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/owner")
@CrossOrigin("*")
public class OwnerController {
    @Autowired
    OwnerService ownerService;
    @PostMapping("/login")
    public String addOwner(@RequestBody Owner owner){
        return ownerService.addowner(owner);
    }
    @PostMapping("/login/{username}/{password}")
    public String isExist(@PathVariable("username")String username, @PathVariable("password") String password){
        return ownerService.isExist(username,password)?"true":"false";
    }
    @GetMapping("/allbooking")
    public List<Bookings> getAllBookings(){
        return ownerService.getAllBookings();
    }
}