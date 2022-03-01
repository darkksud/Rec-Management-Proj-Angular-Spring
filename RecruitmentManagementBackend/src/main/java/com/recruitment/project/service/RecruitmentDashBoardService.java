package com.recruitment.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.recruitment.project.dao.RecruitmentDashBoardDao;
import com.recruitment.project.entities.RecruitmentDashBoard;

@Service
public class RecruitmentDashBoardService {

	@Autowired
	private RecruitmentDashBoardDao recruitmentDashBoardDao;
	public List<RecruitmentDashBoard> getAllRecruitmentDashBoardData(){
		return recruitmentDashBoardDao.getAllRecruitmentDashBoardData();
	}
}
