package com.aswin.demo.serviceimpl;

import com.aswin.demo.entity.User;
import com.aswin.demo.repository.UserRepository;
import com.aswin.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class UserServiceimpl implements UserService {
    @Autowired
    UserRepository userRepository;
@Autowired
    JavaMailSender javaMailSender;
    public String addUser(User user){
       if( userRepository.existsById(user.getUsername())) return "user aldready exist";
        try{
            userRepository.save(user);
            SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
            simpleMailMessage.setFrom("aswin96777@gmail.com");
            simpleMailMessage.setTo("aswin96777@gmail.com");
            simpleMailMessage.setText("hello");
            simpleMailMessage.setSubject("testing");
            javaMailSender.send(simpleMailMessage);
            System.out.println("<----------------------------------------mail send successfully------------------------------------>");
        }catch(Exception e){
            return "error occured";
        }
        return "Registerd successfully";
    }
    @Override
    public boolean isExist(String username, String password) {
        if(!userRepository.existsById(username))return false;
        return userRepository.existsById(username)&&userRepository.getById(username).getPassword().equals(password);
    }


}
