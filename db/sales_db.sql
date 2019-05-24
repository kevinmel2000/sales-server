/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 100136
 Source Host           : localhost:3306
 Source Schema         : sales_db

 Target Server Type    : MySQL
 Target Server Version : 100136
 File Encoding         : 65001

 Date: 24/05/2019 08:04:56
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for Products
-- ----------------------------
DROP TABLE IF EXISTS `Products`;
CREATE TABLE `Products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of Products
-- ----------------------------
BEGIN;
INSERT INTO `Products` VALUES (1, 'Sampoerna Mild', 20000, '2019-05-21 11:12:21', '2019-05-21 11:12:25');
INSERT INTO `Products` VALUES (2, 'Pepsodent', 5000, '2019-05-21 11:14:27', '2019-05-21 11:14:31');
INSERT INTO `Products` VALUES (3, 'Aqua', 5000, '2019-05-21 11:14:50', '2019-05-21 11:14:56');
INSERT INTO `Products` VALUES (4, 'Indomie', 2500, '2019-05-21 11:15:08', '2019-05-21 11:15:12');
COMMIT;

-- ----------------------------
-- Table structure for Sales
-- ----------------------------
DROP TABLE IF EXISTS `Sales`;
CREATE TABLE `Sales` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of Sales
-- ----------------------------
BEGIN;
INSERT INTO `Sales` VALUES (55, 10, 2, 2333, '2019-05-24 00:28:18', '2019-05-24 00:28:18');
INSERT INTO `Sales` VALUES (56, 10, 3, 34555, '2019-05-24 00:43:15', '2019-05-24 00:43:15');
INSERT INTO `Sales` VALUES (57, 10, 1, 5000, '2019-05-24 00:43:50', '2019-05-24 01:02:55');
INSERT INTO `Sales` VALUES (58, 2, 2, 100, '2019-05-24 00:59:54', '2019-05-24 01:02:36');
INSERT INTO `Sales` VALUES (59, 10, 2, 23233, '2019-05-24 01:03:32', '2019-05-24 01:03:32');
INSERT INTO `Sales` VALUES (60, 10, 4, 55555, '2019-05-24 01:03:39', '2019-05-24 01:03:39');
INSERT INTO `Sales` VALUES (61, 10, 2, 1000, '2019-05-24 01:03:43', '2019-05-24 01:03:43');
INSERT INTO `Sales` VALUES (62, 10, 4, 2233, '2019-05-24 01:03:47', '2019-05-24 01:03:47');
INSERT INTO `Sales` VALUES (63, 10, 4, 2233, '2019-05-24 01:03:48', '2019-05-24 01:03:48');
INSERT INTO `Sales` VALUES (64, 10, 4, 2233, '2019-05-24 01:03:48', '2019-05-24 01:03:48');
INSERT INTO `Sales` VALUES (65, 10, 4, 2233, '2019-05-24 01:03:48', '2019-05-24 01:03:48');
INSERT INTO `Sales` VALUES (66, 10, 4, 2233, '2019-05-24 01:03:48', '2019-05-24 01:03:48');
INSERT INTO `Sales` VALUES (67, 10, 4, 2233, '2019-05-24 01:03:48', '2019-05-24 01:03:48');
COMMIT;

-- ----------------------------
-- Table structure for Users
-- ----------------------------
DROP TABLE IF EXISTS `Users`;
CREATE TABLE `Users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of Users
-- ----------------------------
BEGIN;
INSERT INTO `Users` VALUES (1, NULL, NULL, NULL, '2019-05-20 16:19:33', '2019-05-20 16:19:33');
INSERT INTO `Users` VALUES (2, 'test@gmail.com', '$2a$08$BPTi.gj4L6PHoDd1pyK6sOWKcZ7MPTjkD/TEhsGpWYK2RZklSaIwu', 'testuser', '2019-05-21 03:53:13', '2019-05-21 03:53:13');
INSERT INTO `Users` VALUES (4, 'test2@gmail.com', '$2a$08$k8hAU7SayFVqamXAYArXqOQljp2YeSg5Wd0EakeklTDH/3TwbYtqW', 'testuser', '2019-05-21 03:56:21', '2019-05-21 03:56:21');
INSERT INTO `Users` VALUES (6, 'test3@gmail.com', '$2a$08$XUw9ZVLF65F/M/GCEey0j.FFgQLP6vGLjX15LsXD0VG4QKhh5nMem', 'testuser', '2019-05-21 03:58:49', '2019-05-21 03:58:49');
INSERT INTO `Users` VALUES (7, 'test7@gmail.com', '$2a$08$fYPKmNfisJ0t26e/SYXe1.uR36VxPOLk.cywk3dqWwg3MI3RURSzm', 'testuser', '2019-05-21 06:52:06', '2019-05-21 06:52:06');
INSERT INTO `Users` VALUES (9, 'test5@gmail.com', '$2a$08$/x3MSScfZqZTKudluDWRs.Zcew/sGFFQGo7kTIuc1Bb7Ih6YkWzSW', 'Roy', '2019-05-23 16:22:33', '2019-05-23 16:22:33');
INSERT INTO `Users` VALUES (10, 'roylisto@gmail.com', '$2a$08$VCCv2q0LystgOTFJy98.eeilNE2eVhaZ8Iev6BYp87y9njz84bPsW', 'Roylisto', '2019-05-23 19:12:26', '2019-05-23 19:12:26');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
