package com.nukangAdmin.be.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "city")
public class City {
//    @Id
//    @GeneratedValue(strategy = GenerationType.SEQUENCE)
//    Long Id;
    @Id
    @Column(name = "city_id")
    private String cityCode;
    @Column(name = "city_name")
    private String cityName;


    public String getCityCode() {
        return cityCode;
    }

    public void setCityCode(String cityCode) {
        this.cityCode = cityCode;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }
}