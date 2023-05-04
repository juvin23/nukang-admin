package com.nukangAdmin.be.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.JdbcType;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.annotations.Type;
import org.hibernate.type.descriptor.jdbc.LongVarcharJdbcType;

import java.sql.Types;

@Entity
@AllArgsConstructor
@Data
@NoArgsConstructor
@Builder
@Table(name="AdsRepository")
public class Ads {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "name")
    private String name;

    @Lob
    @JdbcTypeCode(Types.LONGVARBINARY)
    @Column(name = "imagedata",length = 1000)
    private byte[] imageData;


}
