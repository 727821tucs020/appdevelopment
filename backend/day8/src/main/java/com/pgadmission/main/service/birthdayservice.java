package com.pgadmission.main.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pgadmission.main.model.eventdecorationbirthday;
import com.pgadmission.main.repository.birthday;


@Service
public class birthdayservice implements birthdayserviceInterface {
	@Autowired
   private birthday bi;
	@Override
	public List<eventdecorationbirthday> getbirthday() {
		// TODO Auto-generated method stub
		return bi.findAll();
	}

	@Override
	public eventdecorationbirthday postbirthday(eventdecorationbirthday bir) {
		// TODO Auto-generated method stub
		return bi.save(bir);
	}

	@Override
	public eventdecorationbirthday putbirthday(eventdecorationbirthday bir) {
		// TODO Auto-generated method stub
		return bi.save(bir);
	}

	@Override
	public void deletebirthday(int id) {
		bi.deleteById(id);

	}

}
