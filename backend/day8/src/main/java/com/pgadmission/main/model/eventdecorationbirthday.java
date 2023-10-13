package com.pgadmission.main.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
@Data

@Entity	
@Table(name="birthdaytable")
public class eventdecorationbirthday
{
	
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)

private int id;
private  String fullName;
 private String dateOfBirth;
 private String email;
 private String phone;
 private String  eventDate;
 private String eventTime;
private  String photoVideoPermission;
private  String selectedPackage;
 private String cakeSelected;
 private String cakeInKg;
 private String address;

}
