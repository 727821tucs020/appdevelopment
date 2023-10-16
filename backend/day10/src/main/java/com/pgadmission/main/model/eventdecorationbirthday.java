package com.pgadmission.main.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
@Data

@Entity	
@Table(name="birthdaytabledetails")
public class eventdecorationbirthday
{
	
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)

private int id;
private  String firstName;//
 private String lastName;//
 private String mobileNumber;//
 private String email;//
 private String  eventPlace;//
 private String eventTime;//
 private  String eventDate;//
private  String packageSelected;//
private boolean photography;//
 private String cakeSelected;//
 private String cakeInKg;//
 private String address;//

}
