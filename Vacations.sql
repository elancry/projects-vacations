-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: vacations
-- ------------------------------------------------------
-- Server version	8.0.25

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
-- Table structure for table `followers`
--

DROP TABLE IF EXISTS `followers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `followers` (
  `vacation_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`vacation_id`,`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `followers`
--

LOCK TABLES `followers` WRITE;
/*!40000 ALTER TABLE `followers` DISABLE KEYS */;
INSERT INTO `followers` VALUES (108,213),(108,218),(108,225),(108,252),(109,213),(109,218),(109,225),(109,252),(135,213),(135,218),(135,225),(135,252),(136,218),(136,225),(136,252),(137,213),(137,218),(137,225),(137,252),(138,218),(138,225),(138,252),(139,218),(139,225),(139,252),(140,218),(140,225),(140,252),(157,225),(157,252),(158,225),(158,252),(159,225),(159,252),(160,225),(160,252),(161,225),(161,252),(163,252);
/*!40000 ALTER TABLE `followers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` bigint NOT NULL AUTO_INCREMENT,
  `username` varchar(500) NOT NULL,
  `password` varchar(500) NOT NULL,
  `email` varchar(500) NOT NULL,
  `first_name` varchar(500) NOT NULL,
  `last_name` varchar(500) NOT NULL,
  `user_type` varchar(500) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=253 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (192,'admin','539fe0fd674bb4f3f09406e2ceb208f9','admin@gmail.com','sahar','elancry','ADMIN'),(193,'sahar','539fe0fd674bb4f3f09406e2ceb208f9','sahar@gmail.com','sahar','elancry','USER'),(211,'haimotti','539fe0fd674bb4f3f09406e2ceb208f9','haimotti@gmail.com','haimotti','haimotti','USER'),(212,'koki','539fe0fd674bb4f3f09406e2ceb208f9','koki@gmail.com','koki','koki','USER'),(213,'barjames','539fe0fd674bb4f3f09406e2ceb208f9','bar','bar','james','USER'),(218,'sasa','539fe0fd674bb4f3f09406e2ceb208f9','sadasd','sadasd','sadasd','USER'),(219,'bigo','539fe0fd674bb4f3f09406e2ceb208f9','bigo@gmail.com','avigail','cohen','USER'),(221,'sahar1','539fe0fd674bb4f3f09406e2ceb208f9','sahar1@gmail.com','sadasd','sadasdasd','USER'),(222,'sahargg','539fe0fd674bb4f3f09406e2ceb208f9','sahar1','sadasd','sadasdasd','USER'),(225,'saharok','539fe0fd674bb4f3f09406e2ceb208f9','sahar12','sadasd','sadasdasd','USER'),(226,'nahon','539fe0fd674bb4f3f09406e2ceb208f9','nahon@gmail.com','shon','elancry','USER'),(227,'shon','539fe0fd674bb4f3f09406e2ceb208f9','shonel@gmail.com','shon','elancry','USER'),(228,'shon1','539fe0fd674bb4f3f09406e2ceb208f9','shonel1@gmail.com','shon','elancry','USER'),(229,'shon11','539fe0fd674bb4f3f09406e2ceb208f9','shonel11@gmail.com','shon','elancry','USER'),(231,'sadsadasd','539fe0fd674bb4f3f09406e2ceb208f9','sahar333@gmail.com','sahar','elancry','USER'),(233,'sadsa','539fe0fd674bb4f3f09406e2ceb208f9','sahar333dd@gmail.com','sahar','elancry','USER'),(235,'geole','539fe0fd674bb4f3f09406e2ceb208f9','sahar33@gmail.com','sahar','elancry','USER'),(236,'geole22','539fe0fd674bb4f3f09406e2ceb208f9','sahar332@gmail.com','sahar','elancry','USER'),(237,'bonjo','539fe0fd674bb4f3f09406e2ceb208f9','bonjo@gmail.com','bonjo','konko','USER'),(238,'Mottii','539fe0fd674bb4f3f09406e2ceb208f9','kakon@gmail.com','motti','kakon','USER'),(239,'sahar55','539fe0fd674bb4f3f09406e2ceb208f9','sahar55@gmail.com','sahar','elancry','USER'),(240,'sahar6666','539fe0fd674bb4f3f09406e2ceb208f9','kokilda@gmail.com','sahar','koki','USER'),(241,'yair','539fe0fd674bb4f3f09406e2ceb208f9','yair@gmail.com','yair','rahum','USER'),(242,'sagadfas','539fe0fd674bb4f3f09406e2ceb208f9','sadasdasd@gmail.com','sahar','elancry','USER'),(243,'sadasd','539fe0fd674bb4f3f09406e2ceb208f9','sadasda@gmail.com','sahar','elancry','USER'),(244,'moshearari','539fe0fd674bb4f3f09406e2ceb208f9','sadasdasd','moshe','arari','USER'),(245,'moshearari2','539fe0fd674bb4f3f09406e2ceb208f9','sadasdasd2','moshe','arari','USER'),(246,'moshearari22','539fe0fd674bb4f3f09406e2ceb208f9','sadasdasd22','moshe','arari','USER'),(247,'moshearari222','539fe0fd674bb4f3f09406e2ceb208f9','sadasdasd222','moshe','arari','USER'),(248,'sadasdasd','539fe0fd674bb4f3f09406e2ceb208f9','sadasda','asdasda','asdasdasd','USER'),(251,'shalom','539fe0fd674bb4f3f09406e2ceb208f9','sadasdasd11@gmail.com','asdasdas','asdasdasdas','USER'),(252,'shalom2','539fe0fd674bb4f3f09406e2ceb208f9','sadasdasd121@gmail.com','asdasdas','asdasdasdas','USER');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vacations`
--

DROP TABLE IF EXISTS `vacations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vacations` (
  `vacation_id` bigint NOT NULL AUTO_INCREMENT,
  `destination` varchar(50) NOT NULL,
  `description` varchar(500) NOT NULL,
  `from_date` date NOT NULL,
  `to_date` date NOT NULL,
  `price` int NOT NULL,
  `image` varchar(200) NOT NULL,
  PRIMARY KEY (`vacation_id`),
  UNIQUE KEY `vacation_id_UNIQUE` (`vacation_id`)
) ENGINE=InnoDB AUTO_INCREMENT=181 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vacations`
--

LOCK TABLES `vacations` WRITE;
/*!40000 ALTER TABLE `vacations` DISABLE KEYS */;
INSERT INTO `vacations` VALUES (108,'Berlin','Berlin, the capital city of Germany, is renowned for its exceptional range of landmarks, vibrant cultural scene and way of life that\'s somehow all go yet relaxed. In fact, the city is best known for its striking contrasts. Historical buildings stand alongside modern architecture as the past and present intermingle.','2021-09-09','2021-09-15',621,'https://picfiles.alphacoders.com/332/thumb-1920-332110.jpg'),(109,'Istanbul','Istanbul is a transcontinental city, straddling the Bosphorus strait in northwestern Turkey between the Sea of Marmara and the Black Sea. Founded on the Sarayburnu promontory around 660 BC as Byzantium, the city now known as Istanbul developed to become one of the most significant cities in history.','2021-08-08','2021-08-14',550,'https://i.pinimg.com/originals/06/ef/cd/06efcd611d573ab20a1f8d9e6bbdce21.jpg'),(135,'Tokyo','Tokyo, formerly (until 1868) Edo, city and capital of Tokyo to (metropolis) and of Japan. It is located at the head of Tokyo Bay on the Pacific coast of central Honshu. It is the focus of the vast metropolitan area often called Greater Tokyo, the largest urban and industrial agglomeration in Japan.','2021-12-22','2021-12-29',499,'https://i.imgur.com/nA5sI5v.jpg'),(136,'Lisbon','Lisbon, Portuguese Lisboa, city, port, capital of Portugal, and the centre of the Lisbon metropolitan area. ... Lisbon owes its historical prominence to its natural harbour, one of the most beautiful in the world. Area city, 33 square miles (85 square km).','2021-08-22','2021-08-29',612,'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/53000/53909-Alfama.jpg'),(137,'Mykonos','Welcome to Greece\'s most famous cosmopolitan island, a whitewashed paradise in the heart of the Cyclades. According to mythology, Mykonos was formed from the petrified bodies of giants killed by Hercules. ... Mykonos is known for its dry, windy climate, sandy beaches and world famous nightlife!','2021-06-06','2021-06-12',1250,'https://raindropsofsapphire.com/wp-content/uploads/2016/06/mykonos-greece-1440x1031.jpg'),(138,'London','Exploring the world-class British Museum, seeing a musical in the West End theater district, touring the Tower of London and gorging on fish and chips or a Sunday roast at a local pub are all part of the London bucket list experience. However, London\'s high hotel prices can make travelers with tight budgets cringe. To save some money, book your accommodations far in advance or consider reserving a vacation rental','2021-09-26','2021-10-02',399,'https://wallpapercave.com/wp/wp3107334.jpg'),(139,'Brussels','Brussels, Flemish Brussel, French Bruxelles, city, capital of Belgium. It is located in the valley of the Senne (Flemish: Zenne) River, a small tributary of the Schelde (French: Escaut). Greater Brussels is the country\'s largest urban agglomeration.','2021-07-07','2021-07-14',422,'https://momaboard.com/wp-content/uploads/gallery/brussels/brussels4.jpg'),(140,'Paris','Paris is filled with highly regarded museums, monuments and churches. You could easily spend your entire vacation admiring iconic sights like the Eiffel Tower, wandering through exhibits at the Louvre and strolling through the beautiful green space admiring flowers at the Luxembourg Gardens. Still, you should save some time for people-watching and munching on fresh croissants at sidewalk cafes during the day. Once the sun sets, sit down for a decadent French meal with amazing wine','2021-07-14','2021-07-21',589,'https://coolwallpapers.me/picsup/1347244-paris.jpg'),(157,'Rome','Rome is a can\'t-miss spot on your trip to Europe. The aroma of fresh Italian cooking wafts through the alleys, and historical sights stand proudly at every turn. No visit to Italy\'s capital would be complete without checking out the Colosseum, the Roman Forum, St. Peter\'s Basilica, the Sistine Chapel and the awe-inspiring Trevi Fountain. If you have additional time, venture beyond the main attractions to Trastevere and the Spanish Steps.','2022-12-03','2022-12-03',599,'https://montessori150.org/sites/default/files/images/events/rome.jpg'),(158,'Barcelona','Barcelona, Spain\'s diverse architecture sets the city apart from other European destinations. Antoni Gaudí\'s Park Güell and Basilica de la Sagrada Família are beyond impressive, as are Palau de la Música Catalana and the many medieval buildings in the Gothic Quarter. When you tire of taking in the city\'s stunning architecture, relax on La Barceloneta beach, sample a smattering of tasty local tapas at Boqueria Market or sip sangria along Las Ramblas','2022-04-22','2022-04-29',479,'https://www.thenews.coop/wp-content/uploads/Sagrada-Familia-copy.jpg'),(159,'Prague','A vacation in Prague will leave you feeling as if you\'ve stepped into a fairy tale. Take in the Gothic architecture and vibrant atmosphere of Old Town Square, and be sure to tour Prague Castle and go for a stroll across the famously scenic Charles Bridge. Prague\'s affordable food and drinks, accommodations and public transportation make it a great place for travelers who wish to visit Europe on a budget','2022-04-27','2022-05-05',609,'https://img3.goodfon.ru/original/2560x1440/f/91/sities-czech-republic-prage.jpg'),(160,'Athens','Athens was made for history buffs and architecture aficionados thanks to it housing the world-renowned Acropolis and Ancient Agora. However, there\'s more to Athens than its historical sites. The Greek capital\'s laid-back lifestyle and incredible food attract the masses just as much as its famous attractions do. As you tour around, be sure to stroll through the historical neighborhood of Plaka, where you\'ll find restaurants, cafes, whitewashed homes and charming shops.','2022-01-15','2022-01-22',380,'https://skiathosavaton.gr/wp-content/uploads/2019/10/skiathos-2-2.jpg'),(161,'Vienna','This storied Austrian city is best known for its music and monarchs. Explore the Habsburg family\'s Schönbrunn Palace and its on-site Tiergarten, which is home to the oldest zoo in the world. Art lovers should head to the MuseumsQuartier Wien to peruse the exhibits at the Museum of Modern Art, while music fans will likely enjoy visiting the House of Music and touring or watching a performance at the Vienna State Opera','2022-01-17','2022-01-25',499,'https://im0-tub-com.yandex.net/i?id=cfa0a68081784d9d1168b0672ae15fbd&n=13&exp=1');
/*!40000 ALTER TABLE `vacations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-21 12:18:18
