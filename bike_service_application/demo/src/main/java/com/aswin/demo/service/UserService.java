package com.aswin.demo.service;


import com.aswin.demo.entity.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {

    public String addUser(User user);
    public boolean isExist(String username,String password);



}
