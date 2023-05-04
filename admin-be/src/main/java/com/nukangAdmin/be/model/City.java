package com.nukangAdmin.be.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;


@Entity
@AllArgsConstructor
@Data
@NoArgsConstructor
@Table(name="city")
public class City {
    @Id
    @GeneratedValue(generator="city_id")
    @GenericGenerator(name="city_id", strategy = "uuid")
    private String city_id;

    @Column(name = "city_name")
    private String city_name;
}
