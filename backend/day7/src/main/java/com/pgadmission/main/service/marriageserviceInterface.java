package com.pgadmission.main.service;

import java.util.List;

import com.pgadmission.main.model.eventdecorationmarriage;

public interface marriageserviceInterface
{
public List< eventdecorationmarriage>getMarriage();
public  eventdecorationmarriage postMarriage(eventdecorationmarriage edm);
public  eventdecorationmarriage putMarriage(eventdecorationmarriage edm);
public void deleteMarriage(int id);
}
