package com.nukangAdmin.be.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "province")
public class Province {
//    @Id
//    @GeneratedValue(strategy = GenerationType.SEQUENCE)
//    Long Id;
    @Id
    @Column(name = "province_id")
    private String provinceCode;
    @Column(name = "province_name")
    private String provinceName;


    public String getProvinceCode() {
        return provinceCode;
    }

    public void setProvinceCode(String provinceCode) {
        this.provinceCode = provinceCode;
    }

    public String getProvinceName() {
        return provinceName;
    }

    public void setProvinceName(String provinceName) {
        this.provinceName = provinceName;
    }
}
