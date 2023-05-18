package com.nukangAdmin.be.model;

import lombok.*;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;

import javax.persistence.*;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ImageModel {
    @Id
    private String name;

    private String contentType;

    private Long size;

    @Lob
    @Type(type = "org.hibernate.type.BinaryType")
    private byte[] data;
}
