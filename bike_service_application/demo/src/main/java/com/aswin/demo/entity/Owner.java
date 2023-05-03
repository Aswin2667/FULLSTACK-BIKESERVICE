package com.aswin.demo.entity;
import jakarta.persistence.*;
import lombok.*;
@Entity
@Data
@AllArgsConstructor
@Builder
@NoArgsConstructor
public class Owner {
    @Id
    @Column(
            name = "username"
    )
    String username;
    @Column(
            name ="emailid"
    )
    String emailid;
    @Column(
            name="password")
    String password;
}
