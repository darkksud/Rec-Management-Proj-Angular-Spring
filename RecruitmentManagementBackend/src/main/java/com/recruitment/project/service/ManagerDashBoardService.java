package com.recruitment.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.recruitment.project.dao.ManagerDashBoardDao;
import com.recruitment.project.entities.ManagerDashBoard;

@Service
public class ManagerDashBoardService {

	@Autowired
	private ManagerDashBoardDao managerDashBoardDao;
	public List<ManagerDashBoard> getAllManagerDashBoardData(){
		return managerDashBoardDao.getAllManagerDashBoardData();
	}
}
