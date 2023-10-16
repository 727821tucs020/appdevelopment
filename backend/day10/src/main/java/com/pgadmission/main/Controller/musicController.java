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

import com.pgadmission.main.model.eventdecorationmusic;
import com.pgadmission.main.service.musicService;

@RestController
@RequestMapping(Api.USER)
@CrossOrigin(value="*")
public class musicController 
{
	@Autowired
	private musicService nin;
	@GetMapping("/getmusic")
	public List<eventdecorationmusic>getmusic()
	{
		  return nin.getmusic();
		  
	}
	@PostMapping("/postmusic")
	public eventdecorationmusic postmusic(@RequestBody eventdecorationmusic ss)
	{
		  return nin.postmusic(ss);
	}
	@PutMapping("/putmusic/{id}")
	public eventdecorationmusic putmusic(@RequestBody eventdecorationmusic ss,@PathVariable int id)
	{
	ss.setId(id);
	return nin.putmusic(ss);
	}
	@DeleteMapping("/deletemusic")
	public void deletemusic(@RequestParam int id)
	{
		  System.out.print("Deleted Succcessfully");
		  nin.deletemusic(id);
	}

}
