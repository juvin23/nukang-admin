package com.nukangAdmin.be.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;


@Entity
@Table(name = "faq")
@Setter
@Getter
public class Faq {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(name = "question")
    String question;

    @Column(name = "answer")
    String answer;
}