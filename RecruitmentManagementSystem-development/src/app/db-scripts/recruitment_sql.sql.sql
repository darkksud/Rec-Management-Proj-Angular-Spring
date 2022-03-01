/*
Navicat MySQL Data

Source Server         : recruitmentdb
Source Server Version : 50732
Source Host           : localhost:3306
Source Database       : recruitmentdb

Target Server Type    : MYSQL
Target Server Version : 50732
File Encoding         : 65001

Date: 2022-01-12 23:58:44
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `delivery_unit`
-- ----------------------------
DROP TABLE IF EXISTS `delivery_unit`;
CREATE TABLE `delivery_unit` (
  `delivery_unit_id` bigint(20) NOT NULL,
  `delivery_unit_head_name` varchar(255) DEFAULT NULL,
  `delivery_unit_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`delivery_unit_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of delivery_unit
-- ----------------------------
INSERT INTO `delivery_unit` VALUES ('1', 'sdabral', 'Germany');

-- ----------------------------
-- Table structure for `geography`
-- ----------------------------

DROP TABLE IF EXISTS `geography`;
CREATE TABLE `geography` (
  `geography_id` bigint NOT NULL,
  `geography_name` varchar(255) DEFAULT NULL,
  `delivery_unit_id` bigint DEFAULT NULL,
  PRIMARY KEY (`geography_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;


-- ----------------------------
-- Table structure for `role`
-- ----------------------------

DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `role_id` bigint(20) NOT NULL,
  `role_name` varchar(100) NOT NULL,
  PRIMARY KEY (`role_id`),
  UNIQUE KEY `UK_ofx66keruapi6vyqpv6f2or37` (`role_name`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES ('1', 'MANAGER');
INSERT INTO `role` VALUES ('2', 'PMO');
INSERT INTO `role` VALUES ('3', 'EMPLOYEE');
INSERT INTO `role` VALUES ('4', 'DU_HEAD');


-- ----------------------------
-- Table structure for `account`
-- ----------------------------
DROP TABLE IF EXISTS `account`;
CREATE TABLE `account` (
  `account_id` bigint(20) NOT NULL,
  `account_name` varchar(255) DEFAULT NULL,
  `geography_id` bigint(20) DEFAULT NULL,
  `address_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`account_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;



-- ----------------------------
-- Table structure for `project`
-- ----------------------------
DROP TABLE IF EXISTS `project`;
CREATE TABLE `project` (
  `project_id` bigint(20) NOT NULL,
  `project_name` varchar(255) DEFAULT NULL,
  `account_id` bigint(20) DEFAULT NULL,
  `project_code` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  `updated_by` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`project_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;


-- ----------------------------
-- Records of project
-- ----------------------------




-- ----------------------------
-- Table structure for `employee`
-- ----------------------------
DROP TABLE IF EXISTS `employee`;
CREATE TABLE `employee` (
  `employee_id` bigint(20) NOT NULL,
  `employee_name` varchar(255) DEFAULT NULL,
  `employee_code` varchar(255) DEFAULT NULL,
  `project_id` bigint(20) DEFAULT NULL,  
  `email` varchar(255) DEFAULT NULL,
  `contact_no` varchar(255) DEFAULT NULL,
  `passport_id` bigint(20) DEFAULT NULL,
  `address_id` bigint(20) DEFAULT NULL,
  `manager_id` bigint(20) DEFAULT NULL,
  `du_head` bigint(20) DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `updated_by` varchar(255) DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  PRIMARY KEY (`employee_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;


-- ----------------------------
-- Table structure for `employee_role`
-- ----------------------------
DROP TABLE IF EXISTS `employee_role`;
CREATE TABLE `employee_role` (
  `employee_id` bigint(20) NOT NULL,
  `role_id` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;



-- ----------------------------
-- Table structure for `recruitment_case`
-- ----------------------------
DROP TABLE IF EXISTS `recruitment_case`;
CREATE TABLE `recruitment_case` (
  `recruitment_case_id` bigint(20) NOT NULL,
  `employee_id` bigint(20) DEFAULT NULL,
  `project_manager_id` bigint(20) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `qualification` varchar(255) DEFAULT NULL,  
  `address_id` bigint(20) DEFAULT NULL,
  `project_id` bigint(20) DEFAULT NULL,
  `approver_id` bigint(20) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `updated_by` varchar(255) DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  PRIMARY KEY (`recruitment_case_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;


-- ----------------------------
-- Table structure for `action_status`
-- ----------------------------
DROP TABLE IF EXISTS `action_status`;
CREATE TABLE `action_status` (
  `action_id` bigint(20) NOT NULL,
  `recruitment_case_id` bigint(20) DEFAULT NULL,
  `employee_id` bigint(20) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `updated_by` varchar(255) DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  PRIMARY KEY (`action_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;
