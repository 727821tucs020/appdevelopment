package com.pgadmission.main.service;

import java.util.List;

import com.pgadmission.main.model.eventdecorationbirthday;


public interface birthdayserviceInterface 
{
public List<eventdecorationbirthday>getbirthday();
public  eventdecorationbirthday postbirthday(eventdecorationbirthday bir);
public  eventdecorationbirthday putbirthday(eventdecorationbirthday bir);
public void deletebirthday(int id);
}
