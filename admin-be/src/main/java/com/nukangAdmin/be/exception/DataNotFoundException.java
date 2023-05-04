package com.nukangAdmin.be.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class DataNotFoundException extends RuntimeException{

    public static final long serialVersionUID = 1L;
    public DataNotFoundException(String message){
        super(message);
    }
}
