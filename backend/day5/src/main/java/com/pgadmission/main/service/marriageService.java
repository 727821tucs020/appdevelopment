package com.pgadmission.main.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pgadmission.main.model.eventdecorationmarriage;
import com.pgadmission.main.repository.marriage;
@Service
public class marriageService implements marriageserviceInterface {
    @Autowired
    private marriage m;
	@Override
	public List<eventdecorationmarriage> getMarriage() {
		// TODO Auto-generated method stub
		return m.findAll();
	}

	@Override
	public eventdecorationmarriage postMarriage(eventdecorationmarriage edm) {
		// TODO Auto-generated method stub
		return m.save(edm);
	}

	@Override
	public eventdecorationmarriage putMarriage(eventdecorationmarriage edm) {
		// TODO Auto-generated method stub
		return m.save(edm);
	}

	@Override
	public void deleteMarriage(int id) {
		// TODO Auto-generated method stub
         m.deleteById(id);
	}

}
