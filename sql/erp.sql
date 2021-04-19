/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 80018
 Source Host           : localhost:3306
 Source Schema         : erp

 Target Server Type    : MySQL
 Target Server Version : 80018
 File Encoding         : 65001

 Date: 19/04/2021 22:54:00
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for customer
-- ----------------------------
DROP TABLE IF EXISTS `customer`;
CREATE TABLE `customer`  (
  `cid` int(11) NOT NULL AUTO_INCREMENT,
  `cname` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `cidnumber` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ctel` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `caddress` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `other` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createAt` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
  `updateAt` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`cid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of customer
-- ----------------------------

-- ----------------------------
-- Table structure for employee
-- ----------------------------
DROP TABLE IF EXISTS `employee`;
CREATE TABLE `employee`  (
  `eid` int(11) NOT NULL AUTO_INCREMENT,
  `ename` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `esex` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `etype` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `etel` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `eaddress` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `eage` int(11) NOT NULL,
  `eidnumber` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `edate` timestamp(0) NOT NULL,
  `esalary` int(11) NOT NULL,
  `other` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createAt` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
  `updateAt` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`eid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of employee
-- ----------------------------
INSERT INTO `employee` VALUES (1, '张三', '1', 'Manager', '15804236845', '地址', 40, '330358468741569754', '2020-01-01 00:00:00', 5000, NULL, '2021-04-18 14:39:03', '2021-04-18 14:39:03');
INSERT INTO `employee` VALUES (2, '小明', '2', 'Saler', '17804236845', '地址', 30, '330358468742563723', '2020-02-02 00:00:00', 5000, NULL, '2021-04-18 14:39:03', '2021-04-18 14:39:03');
INSERT INTO `employee` VALUES (7, '小白', '男', 'Purchaser', '18475236813', '杭州', 32, '130928198905281793', '2020-01-01 00:00:00', 4000, NULL, '2021-04-18 21:41:39', '2021-04-18 21:42:30');

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods`  (
  `gid` int(11) NOT NULL AUTO_INCREMENT,
  `gname` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `gprice` int(11) NULL DEFAULT NULL,
  `sid` int(11) NULL DEFAULT NULL,
  `gtype` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `gplace` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `gspecs` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `gtime` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `other` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createAt` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
  `updateAt` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`gid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES (1, '可乐', 3, 2, '饮料', '杭州', '500ml', '1年', NULL, '2021-04-19 22:42:16', '2021-04-19 22:42:16');

-- ----------------------------
-- Table structure for message_purchase
-- ----------------------------
DROP TABLE IF EXISTS `message_purchase`;
CREATE TABLE `message_purchase`  (
  `mpid` int(11) NOT NULL AUTO_INCREMENT,
  `mpresid` int(11) NOT NULL,
  `mppurid` int(11) NULL DEFAULT NULL,
  `mpflag` int(11) NOT NULL,
  `other` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `createAt` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
  `updateAt` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`mpid`) USING BTREE,
  INDEX `mpresid`(`mpresid`) USING BTREE,
  CONSTRAINT `message_purchase_ibfk_1` FOREIGN KEY (`mpresid`) REFERENCES `user` (`uid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of message_purchase
-- ----------------------------

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order`  (
  `oid` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `cid` int(11) NOT NULL,
  `ostates` int(11) NOT NULL,
  `ocreateDate` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
  `ocheckDate` timestamp(0) NULL DEFAULT NULL,
  `ofDate` timestamp(0) NULL DEFAULT NULL,
  `oreCheckDate` timestamp(0) NULL DEFAULT NULL,
  `orefDate` timestamp(0) NULL DEFAULT NULL,
  `other` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`oid`) USING BTREE,
  INDEX `uid`(`uid`) USING BTREE,
  INDEX `cid`(`cid`) USING BTREE,
  CONSTRAINT `order_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `order_ibfk_2` FOREIGN KEY (`cid`) REFERENCES `customer` (`cid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of order
-- ----------------------------

-- ----------------------------
-- Table structure for order_account
-- ----------------------------
DROP TABLE IF EXISTS `order_account`;
CREATE TABLE `order_account`  (
  `oaid` int(11) NOT NULL AUTO_INCREMENT,
  `oid` int(11) NOT NULL,
  `oasum` int(11) NOT NULL,
  `osreturn` int(11) NOT NULL,
  `oapay` int(11) NOT NULL,
  `oatime` timestamp(0) NULL DEFAULT NULL,
  `createAt` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
  `other` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`oaid`) USING BTREE,
  INDEX `oid`(`oid`) USING BTREE,
  CONSTRAINT `order_account_ibfk_1` FOREIGN KEY (`oid`) REFERENCES `order` (`oid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of order_account
-- ----------------------------

-- ----------------------------
-- Table structure for purchase
-- ----------------------------
DROP TABLE IF EXISTS `purchase`;
CREATE TABLE `purchase`  (
  `pid` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `pstates` int(11) NOT NULL,
  `pcDate` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
  `pcheckDate` timestamp(0) NULL DEFAULT NULL,
  `pfDate` timestamp(0) NULL DEFAULT NULL,
  `other` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`pid`) USING BTREE,
  INDEX `uid`(`uid`) USING BTREE,
  CONSTRAINT `purchase_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of purchase
-- ----------------------------

-- ----------------------------
-- Table structure for purchase_account
-- ----------------------------
DROP TABLE IF EXISTS `purchase_account`;
CREATE TABLE `purchase_account`  (
  `paid` int(11) NOT NULL AUTO_INCREMENT,
  `pid` int(11) NOT NULL,
  `pasum` int(11) NOT NULL,
  `papay` int(11) NOT NULL,
  `patime` timestamp(0) NULL DEFAULT NULL,
  `createAt` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
  `other` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`paid`) USING BTREE,
  INDEX `pid`(`pid`) USING BTREE,
  CONSTRAINT `purchase_account_ibfk_1` FOREIGN KEY (`pid`) REFERENCES `purchase` (`pid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of purchase_account
-- ----------------------------

-- ----------------------------
-- Table structure for r_order_goods
-- ----------------------------
DROP TABLE IF EXISTS `r_order_goods`;
CREATE TABLE `r_order_goods`  (
  `rogid` int(11) NOT NULL AUTO_INCREMENT,
  `oid` int(11) NOT NULL,
  `gid` int(11) NOT NULL,
  `rogprice` int(11) NOT NULL,
  `rognum` int(11) NOT NULL,
  `other` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`rogid`) USING BTREE,
  INDEX `oid`(`oid`) USING BTREE,
  INDEX `gid`(`gid`) USING BTREE,
  CONSTRAINT `r_order_goods_ibfk_1` FOREIGN KEY (`oid`) REFERENCES `order` (`oid`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `r_order_goods_ibfk_2` FOREIGN KEY (`gid`) REFERENCES `goods` (`gid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of r_order_goods
-- ----------------------------

-- ----------------------------
-- Table structure for r_purchase_goods
-- ----------------------------
DROP TABLE IF EXISTS `r_purchase_goods`;
CREATE TABLE `r_purchase_goods`  (
  `rpgid` int(11) NOT NULL AUTO_INCREMENT,
  `pid` int(11) NOT NULL,
  `gid` int(11) NOT NULL,
  `sid` int(11) NOT NULL,
  `rpgprice` int(11) NOT NULL,
  `rpgnum` int(11) NOT NULL,
  `other` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`rpgid`) USING BTREE,
  INDEX `pid`(`pid`) USING BTREE,
  INDEX `sid`(`sid`) USING BTREE,
  CONSTRAINT `r_purchase_goods_ibfk_1` FOREIGN KEY (`pid`) REFERENCES `purchase` (`pid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `r_purchase_goods_ibfk_2` FOREIGN KEY (`sid`) REFERENCES `supplier` (`sid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of r_purchase_goods
-- ----------------------------

-- ----------------------------
-- Table structure for r_repository_goods
-- ----------------------------
DROP TABLE IF EXISTS `r_repository_goods`;
CREATE TABLE `r_repository_goods`  (
  `rrgid` int(11) NOT NULL AUTO_INCREMENT,
  `gid` int(11) NOT NULL,
  `rrgin` int(11) NOT NULL,
  `rrgnum` int(11) NOT NULL,
  `createAt` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
  `other` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`rrgid`) USING BTREE,
  INDEX `gid`(`gid`) USING BTREE,
  CONSTRAINT `r_repository_goods_ibfk_1` FOREIGN KEY (`gid`) REFERENCES `goods` (`gid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of r_repository_goods
-- ----------------------------

-- ----------------------------
-- Table structure for report_finance
-- ----------------------------
DROP TABLE IF EXISTS `report_finance`;
CREATE TABLE `report_finance`  (
  `rfid` int(11) NOT NULL AUTO_INCREMENT,
  `rfsDate` timestamp(0) NOT NULL,
  `rfeDate` timestamp(0) NOT NULL,
  `rfgain` int(11) NOT NULL,
  `rfpay` int(11) NOT NULL,
  `rfDate` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
  `uid` int(11) NOT NULL,
  `other` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`rfid`) USING BTREE,
  INDEX `uid`(`uid`) USING BTREE,
  CONSTRAINT `report_finance_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of report_finance
-- ----------------------------

-- ----------------------------
-- Table structure for respository
-- ----------------------------
DROP TABLE IF EXISTS `respository`;
CREATE TABLE `respository`  (
  `rid` int(11) NOT NULL AUTO_INCREMENT,
  `gid` int(11) NOT NULL,
  `rnum` int(11) NOT NULL,
  `other` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`rid`) USING BTREE,
  INDEX `gid`(`gid`) USING BTREE,
  CONSTRAINT `respository_ibfk_1` FOREIGN KEY (`gid`) REFERENCES `goods` (`gid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of respository
-- ----------------------------

-- ----------------------------
-- Table structure for supplier
-- ----------------------------
DROP TABLE IF EXISTS `supplier`;
CREATE TABLE `supplier`  (
  `sid` int(11) NOT NULL AUTO_INCREMENT,
  `sname` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `sman` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `smanidnumber` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `stel` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `saddress` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `other` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createAt` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
  `updateAt` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`sid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of supplier
-- ----------------------------
INSERT INTO `supplier` VALUES (2, 'xx公司', '小白', '130928198905281793', '18475236813', '杭州', NULL, '2021-04-19 22:40:11', '2021-04-19 22:40:11');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `eid` int(11) NULL DEFAULT NULL,
  `uaccount` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `upassword` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `utype` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `other` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createAt` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
  `updateAt` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`uid`) USING BTREE,
  INDEX `eid`(`eid`) USING BTREE,
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`eid`) REFERENCES `employee` (`eid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, NULL, 'admin', '123', 'Developer', NULL, '2021-04-18 14:50:50', '2021-04-18 14:50:50');
INSERT INTO `user` VALUES (5, 1, 'manager', '123', 'Manager', NULL, '2021-04-18 15:53:12', '2021-04-18 16:08:32');
INSERT INTO `user` VALUES (7, NULL, 'dev', '202cb962ac59075b964b07152d234b70', 'Develop', NULL, '2021-04-18 17:49:08', '2021-04-18 17:49:08');

SET FOREIGN_KEY_CHECKS = 1;
