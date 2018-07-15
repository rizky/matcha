/*
 Navicat Premium Data Transfer

 Source Server         : 127.0.0.1
 Source Server Type    : MySQL
 Source Server Version : 50559
 Source Host           : localhost:3306
 Source Schema         : camagru

 Target Server Type    : MySQL
 Target Server Version : 50559
 File Encoding         : 65001

 Date: 30/05/2018 18:40:19
*/

DROP SCHEMA IF EXISTS `matcha` ;

-- -----------------------------------------------------
-- Schema matcha
-- -----------------------------------------------------

CREATE SCHEMA IF NOT EXISTS `matcha` DEFAULT CHARACTER SET utf8 ;
USE `matcha` ;

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for message
-- ----------------------------
DROP TABLE IF EXISTS `message`;
CREATE TABLE `message` (
  `id` int(30) NOT NULL AUTO_INCREMENT,
  `thread` int(30) NOT NULL,
  `photo` int(30) NULL DEFAULT NULL,
  `from` int(30) NOT NULL,
  `to` int(30) NOT NULL,
  `match` bit(1) NOT NULL DEFAULT b'0',
  `like` bit(1) NOT NULL DEFAULT b'0',
  `message` varchar(255) DEFAULT NULL,
  `read` bit(1) NOT NULL DEFAULT b'0',
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted` bit(1) NOT NULL DEFAULT b'0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for thread
-- ----------------------------
DROP TABLE IF EXISTS `thread`;
CREATE TABLE `thread` (
  `id` int(30) NOT NULL AUTO_INCREMENT,
  `user1` int(30) NOT NULL,
  `user2` int(30) NOT NULL,
  `matcher` int(30) NULL DEFAULT NULL,
  `lastMessage` int(30) NULL DEFAULT NULL,
  `read` bit(1) NOT NULL DEFAULT b'0',
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted` bit(1) NOT NULL DEFAULT b'0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for photo
-- ----------------------------
DROP TABLE IF EXISTS `photo`;
CREATE TABLE `photo` (
  `id` int(30) NOT NULL AUTO_INCREMENT,
  `user` int(30) NOT NULL,
  `url` varchar(255) NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted` bit(1) NOT NULL DEFAULT b'0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of photo
-- ----------------------------
BEGIN;
INSERT INTO `photo` VALUES (0000000001, 0000000001, '/img/photos/40547073-32d77e60-6031-11e8-8f8c-5e9429224498.jpg', '2018-05-30 16:39:15', NULL, b'0');
INSERT INTO `photo` VALUES (0000000002, 0000000002, 'https://user-images.githubusercontent.com/6814254/40547072-32b917cc-6031-11e8-8aa3-07d0353793ee.jpg', '2018-05-30 16:39:15', NULL, b'0');
INSERT INTO `photo` VALUES (0000000003, 0000000003, 'https://user-images.githubusercontent.com/6814254/40547069-31bb4e8a-6031-11e8-88f7-ec9480b235e7.jpg', '2018-05-30 16:39:15', NULL, b'0');
INSERT INTO `photo` VALUES (0000000004, 0000000004, 'https://user-images.githubusercontent.com/6814254/40547068-31a14026-6031-11e8-9095-845f6600dd9b.jpg', '2018-05-30 16:39:15', NULL, b'0');
INSERT INTO `photo` VALUES (0000000005, 0000000005, 'https://user-images.githubusercontent.com/6814254/40547074-32f1a132-6031-11e8-9bbd-e8f9f389bca2.png', '2018-05-30 16:39:15', NULL, b'0');
INSERT INTO `photo` VALUES (0000000006, 0000000006, 'https://user-images.githubusercontent.com/6814254/40547075-330989d2-6031-11e8-9c0c-e7d690c70531.jpg', '2018-05-30 16:39:15', NULL, b'0');
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(30) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `email` varchar(255) NOT NULL,
  `picture` varchar(255) NOT NULL,
  `dob` timestamp NULL DEFAULT NULL,
  `subscribed` bit(1) NOT NULL DEFAULT b'1',
  `lat` float( 10, 6 ) NOT NULL ,
  `long` float( 10, 6 ) NOT NULL ,
  `activeAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted` bit(1) NOT NULL DEFAULT b'0',
  `tokenValidated` varchar(100) DEFAULT NULL,
  `tokenLost` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

SET FOREIGN_KEY_CHECKS = 1;
