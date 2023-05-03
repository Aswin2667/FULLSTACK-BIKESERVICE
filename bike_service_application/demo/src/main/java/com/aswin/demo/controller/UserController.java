package com.aswin.demo.controller;
import com.aswin.demo.entity.User;
import com.aswin.demo.serviceimpl.UserServiceimpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {
    @Autowired
    UserServiceimpl userServiceimpl;
    @PostMapping("/register")
    public String addUser(@RequestBody User user){
        return userServiceimpl.addUser(user);
    }
    @PostMapping("/{username}/{password}")
    public String isExist(@PathVariable("username")String username,@PathVariable("password") String password){
         return userServiceimpl.isExist(username,password)?"true":"false";
    }
}
