package com.pgadmission.main.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pgadmission.main.constant.Api;
import com.pgadmission.main.model.eventdecorationmarriage;
import com.pgadmission.main.service.marriageService;

@RestController
@RequestMapping(Api.USER)

//@CrossOrigin(origins = "http://localhost:3000")


public class marriageController
{
	
	
  @Autowired
  private marriageService ms;
  
  @GetMapping("/getwedding")
  public List<eventdecorationmarriage>getMarriage()
  {
	  return ms.getMarriage();
	  
  }
  @PostMapping("/postwedding")
  public eventdecorationmarriage postmarriage(@RequestBody eventdecorationmarriage ee)
  {
	  return ms.postMarriage(ee);
  }
  @PutMapping("/putwedding/{id}")
  public eventdecorationmarriage putmarriage(@RequestBody eventdecorationmarriage ee,@PathVariable int id)
  {
  ee.setId(id);
  return ms.putMarriage(ee);
}
  @DeleteMapping("/deletewedding")
  public void deletemarriage(@RequestParam int id)
  {
	  System.out.print("Deleted Succcessfully");
	  ms.deleteMarriage(id);
  }
  
}
