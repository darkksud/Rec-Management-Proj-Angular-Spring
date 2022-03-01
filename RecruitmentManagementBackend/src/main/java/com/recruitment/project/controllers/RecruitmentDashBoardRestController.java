package com.recruitment.project.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.recruitment.project.entities.AuthenticationBean;
import com.recruitment.project.entities.RecruitmentDashBoard;
import com.recruitment.project.service.RecruitmentDashBoardService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping(value = "/api/recruitmentDashBoard")
public class RecruitmentDashBoardRestController {
	@Autowired
	RecruitmentDashBoardService recruitmentDashBoardService;
	@GetMapping(value = "/getAll")
	public List<RecruitmentDashBoard> getRecTableData(HttpServletRequest request) {
		
		return recruitmentDashBoardService.getAllRecruitmentDashBoardData();

	}
	
}
