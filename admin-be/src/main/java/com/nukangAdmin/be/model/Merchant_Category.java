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
@Table(name="category")
public class Merchant_Category {

    @Id
    @GeneratedValue(generator="category_id")
    @GenericGenerator(name="category_id", strategy = "uuid")
    private String category_id;

    @Column(name = "category_name")
    private String category_name;
}
