package com.recruitment.project.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.recruitment.project.entities.ManagerDashBoard;
import com.recruitment.project.service.ManagerDashBoardService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping(value = "/api/managerDashBoard")
public class ManagerDashBoardRestController {
	@Autowired
	ManagerDashBoardService managerDashBoardService;
	@GetMapping(value = "/getAll")
	public List<ManagerDashBoard> getRecTableData(HttpServletRequest request) {
		
		return managerDashBoardService.getAllManagerDashBoardData();

	}
	
}


