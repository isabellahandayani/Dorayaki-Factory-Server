-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: dorayaki_factory
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id_admin` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`id_admin`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bahan_baku`
--

DROP TABLE IF EXISTS `bahan_baku`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bahan_baku` (
  `id_bahan` int NOT NULL AUTO_INCREMENT,
  `nama_bahan` varchar(45) NOT NULL,
  `stok` int NOT NULL DEFAULT '0',
  `satuan` varchar(45) NOT NULL,
  PRIMARY KEY (`id_bahan`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bahan_baku`
--

LOCK TABLES `bahan_baku` WRITE;
/*!40000 ALTER TABLE `bahan_baku` DISABLE KEYS */;
/*!40000 ALTER TABLE `bahan_baku` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dorayaki`
--

DROP TABLE IF EXISTS `dorayaki`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dorayaki` (
  `id_dorayaki` int NOT NULL AUTO_INCREMENT,
  `dorayaki_name` varchar(45) NOT NULL,
  `price` int NOT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `photo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_dorayaki`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dorayaki`
--

LOCK TABLES `dorayaki` WRITE;
/*!40000 ALTER TABLE `dorayaki` DISABLE KEYS */;
/*!40000 ALTER TABLE `dorayaki` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dorayaki_recipe`
--

DROP TABLE IF EXISTS `dorayaki_recipe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dorayaki_recipe` (
  `id_bahan` int NOT NULL,
  `id_dorayaki` int NOT NULL,
  `qty` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_bahan`,`id_dorayaki`),
  KEY `fk_recipe_dorayaki_idx` (`id_dorayaki`),
  CONSTRAINT `fk_recipe_bahan` FOREIGN KEY (`id_bahan`) REFERENCES `bahan_baku` (`id_bahan`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_recipe_dorayaki` FOREIGN KEY (`id_dorayaki`) REFERENCES `dorayaki` (`id_dorayaki`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dorayaki_recipe`
--

LOCK TABLES `dorayaki_recipe` WRITE;
/*!40000 ALTER TABLE `dorayaki_recipe` DISABLE KEYS */;
/*!40000 ALTER TABLE `dorayaki_recipe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `log_request`
--

DROP TABLE IF EXISTS `log_request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `log_request` (
  `id_request` int NOT NULL,
  `id_admin` int NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_request`,`id_admin`),
  KEY `fk_log_admin_idx` (`id_admin`),
  CONSTRAINT `fk_log_admin` FOREIGN KEY (`id_admin`) REFERENCES `admin` (`id_admin`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_log_request` FOREIGN KEY (`id_request`) REFERENCES `request` (`id_request`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `log_request`
--

LOCK TABLES `log_request` WRITE;
/*!40000 ALTER TABLE `log_request` DISABLE KEYS */;
/*!40000 ALTER TABLE `log_request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `request`
--

DROP TABLE IF EXISTS `request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `request` (
  `id_request` int NOT NULL AUTO_INCREMENT,
  `id_dorayaki` int NOT NULL,
  `stok_added` int NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_request`),
  KEY `fk_request_dorayaki_idx` (`id_dorayaki`),
  CONSTRAINT `fk_request_dorayaki` FOREIGN KEY (`id_dorayaki`) REFERENCES `dorayaki` (`id_dorayaki`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `request`
--

LOCK TABLES `request` WRITE;
/*!40000 ALTER TABLE `request` DISABLE KEYS */;
/*!40000 ALTER TABLE `request` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-08 12:43:21
