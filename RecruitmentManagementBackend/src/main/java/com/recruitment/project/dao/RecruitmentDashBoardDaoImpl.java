package com.recruitment.project.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.recruitment.project.entities.RecruitmentDashBoard;

@Repository
public class RecruitmentDashBoardDaoImpl implements RecruitmentDashBoardDao {

	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Override
	public List<RecruitmentDashBoard> getAllRecruitmentDashBoardData() {
		String sql = "SELECT * FROM candidate_detail";
		return jdbcTemplate.query(sql, new RowMapper<RecruitmentDashBoard>() {
			@Override
			public RecruitmentDashBoard mapRow(ResultSet rs, int rowNum) throws SQLException {
				final RecruitmentDashBoard recTableData = new RecruitmentDashBoard();
				recTableData.setName(rs.getString("candidate_name"));
				recTableData.setEmail(rs.getString("candidate_email"));
				recTableData.setPhone(rs.getString("candidate_phone"));
				recTableData.setProject(rs.getString("project_name"));
				recTableData.setAvailabilityDate(rs.getString("candidate_avail_datetime"));
				recTableData.setFeedback(rs.getString("feedback_shared_TA_DTD"));
				recTableData.setInterviewDate("");
				recTableData.setJoiningDate("");
				recTableData.setNoticePeriod(rs.getString("notice_period"));
				recTableData.setOfferRLDate(rs.getString("offer_release_date"));
				recTableData.setPanel(rs.getString("panel"));
				recTableData.setProfile(rs.getString("profile_shared"));
				recTableData.setResignationDate(rs.getString("resignition_letter_share_date"));
				recTableData.setSkills(rs.getString("candidate_skill"));
				recTableData.setsNo(rs.getString("CANDIDATE_ID"));
				recTableData.setStatus(rs.getString("status"));
				return recTableData;
			}
		});
	}

}
