package com.pgadmission.main.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
import com.pgadmission.main.model.eventdecorationbirthday;
import com.pgadmission.main.service.birthdayservice;

@RestController
@RequestMapping(Api.USER)
public class birthdayController
{
@Autowired
private birthdayservice bser;

@GetMapping("/getbirthday")
public List<eventdecorationbirthday>getbirthday()
{
	  return bser.getbirthday();
	  
}
@PostMapping("/postbirthday")
public eventdecorationbirthday postbirthday(@RequestBody eventdecorationbirthday bb)
{
	  return bser.postbirthday(bb);
}
@PutMapping("/putbirthday/{id}")
public eventdecorationbirthday putbirthday(@RequestBody eventdecorationbirthday bb,@PathVariable int id)
{
bb.setId(id);
return bser.putbirthday(bb);
}
@DeleteMapping("/deletebirthday")
public void deletebirthday(@RequestParam int id)
{
	  System.out.print("Deleted Succcessfully");
	  bser.deletebirthday(id);
}

}
