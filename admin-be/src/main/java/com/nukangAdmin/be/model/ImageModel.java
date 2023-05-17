package com.nukang.app.image;

import lombok.*;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;

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
