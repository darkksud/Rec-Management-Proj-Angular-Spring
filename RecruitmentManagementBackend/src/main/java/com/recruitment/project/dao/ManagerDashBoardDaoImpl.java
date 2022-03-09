package com.recruitment.project.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.recruitment.project.entities.ManagerDashBoard;

@Repository
public class ManagerDashBoardDaoImpl implements ManagerDashBoardDao {

	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Override
	public List<ManagerDashBoard> getAllManagerDashBoardData() {
		String sql = "SELECT * FROM skill_table";
		return jdbcTemplate.query(sql, new RowMapper<ManagerDashBoard>() {
			@Override
			public ManagerDashBoard mapRow(ResultSet rs, int rowNum) throws SQLException {
				final ManagerDashBoard recTableData = new ManagerDashBoard();
				recTableData.setProjectName(rs.getString("project_name"));
				recTableData.setAutomationTesting(rs.getInt("automation_testing"));
				recTableData.setManualTesting(rs.getInt("manual_testing"));
				recTableData.setPhp(rs.getInt("php"));
				recTableData.setSac(rs.getInt("sac"));
				recTableData.setBa(rs.getInt("ba"));
				recTableData.setScrum(rs.getInt("scrum"));
				recTableData.setCicd(rs.getInt("cicd"));
				recTableData.setUnix(rs.getInt("unix"));
				recTableData.setKafka(rs.getInt("kafka"));
				return recTableData;
			}
		});
	}

}



