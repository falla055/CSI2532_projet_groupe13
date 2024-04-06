--**************** INSERTS INTO CHAINE *****************
insert into Chaine (nomChaine, nombreHotel, numRue, nomRue, ville, cp) values ('Chaine A', 8, 1, 'Rue de Paris', 'Paris', '75001');
insert into Chaine (nomChaine, nombreHotel, numRue, nomRue, ville, cp) values ('Chaine B', 8, 10, 'Rue de Lyon', 'Lyon', '69000');
insert into Chaine (nomChaine, nombreHotel, numRue, nomRue, ville, cp) values ('Chaine C', 8, 100, 'Rue de Marseille', 'Marseille','13000');
insert into Chaine (nomChaine, nombreHotel, numRue, nomRue, ville, cp) values ('Chaine D', 8, 101, 'Rue de Bordeaux', 'Bordeaux', '33000');
insert into Chaine (nomChaine, nombreHotel, numRue, nomRue, ville, cp) values ('Chaine E', 8, 102, 'Rue de Nantes', 'Nantes', '44000');

--**************** INSERTS INTO CHAINECONTACTPHONE *****************
insert into ChaineContactPhone (nomChaine, phoneNumber) values ('Chaine A', '0123456789');
insert into ChaineContactPhone (nomChaine, phoneNumber) values ('Chaine A', '0123456798');
insert into ChaineContactPhone (nomChaine, phoneNumber) values ('Chaine B', '0234567890');
insert into ChaineContactPhone (nomChaine, phoneNumber) values ('Chaine B', '0234567891');
insert into ChaineContactPhone (nomChaine, phoneNumber) values ('Chaine B', '0234567892');
insert into ChaineContactPhone (nomChaine, phoneNumber) values ('Chaine C', '0345678901');
insert into ChaineContactPhone (nomChaine, phoneNumber) values ('Chaine C', '0345678902');
insert into ChaineContactPhone (nomChaine, phoneNumber) values ('Chaine D', '0456789012');
insert into ChaineContactPhone (nomChaine, phoneNumber) values ('Chaine D', '0456789013');
insert into ChaineContactPhone (nomChaine, phoneNumber) values ('Chaine D', '0456789014');
insert into ChaineContactPhone (nomChaine, phoneNumber) values ('Chaine D', '0456789015');
insert into ChaineContactPhone (nomChaine, phoneNumber) values ('Chaine E', '0567890123');
insert into ChaineContactPhone (nomChaine, phoneNumber) values ('Chaine E', '0567890124');


--**************** INSERTS INTO CHAINECONTACTEMAIL *****************
insert into ChaineContactEmail (nomChaine, email) values ('Chaine A', 'contact@a1.com');
insert into ChaineContactEmail (nomChaine, email) values ('Chaine A', 'info@a1.com');
insert into ChaineContactEmail (nomChaine, email) values ('Chaine B', 'contact@b2.com');
insert into ChaineContactEmail (nomChaine, email) values ('Chaine B', 'info@b2.com');
insert into ChaineContactEmail (nomChaine, email) values ('Chaine B', 'support@b2.com');
insert into ChaineContactEmail (nomChaine, email) values ('Chaine C', 'contact@c3.com');
insert into ChaineContactEmail (nomChaine, email) values ('Chaine C', 'info@c3.com');
insert into ChaineContactEmail (nomChaine, email) values ('Chaine D', 'contact@d4.com');
insert into ChaineContactEmail (nomChaine, email) values ('Chaine D', 'info@d4.com');
insert into ChaineContactEmail (nomChaine, email) values ('Chaine D', 'support@d4.com');
insert into ChaineContactEmail (nomChaine, email) values ('Chaine D', 'booking@d4.com');
insert into ChaineContactEmail (nomChaine, email) values ('Chaine E', 'contact@e5.com');
insert into ChaineContactEmail (nomChaine, email) values ('Chaine E', 'info@e5.com');
insert into ChaineContactEmail (nomChaine, email) values ('Chaine E', 'entertainment@e5.com');

--**************** INSERTS INTO HOTEL *****************
insert into Hotel ("nomHotel", nombreChambre, classification, numRue, nomRue, ville, cp, numeroContact, emailContact, nomChaine) values ('Abdy', 9, 5, '4395', 'Pennsylvania', 'Jingdezhen', '390548', '(266) 3892281', 'cabdy0@reference.com', 'Chaine A');
insert into Hotel ("nomHotel", nombreChambre, classification, numRue, nomRue, ville, cp, numeroContact, emailContact, nomChaine) values ('Pietri', 13, 2, '76160', 'Pankratz', 'Wrocław', '096451', '(998) 4690474', 'lpietri1@npr.org', 'Chaine A');
insert into Hotel ("nomHotel", nombreChambre, classification, numRue, nomRue, ville, cp, numeroContact, emailContact, nomChaine) values ('Walklot', 16, 3, '6236', 'Lien', 'Carapicuíba', '269532', '(861) 1720064', 'bwalklot2@wufoo.com', 'Chaine A');
insert into Hotel ("nomHotel", nombreChambre, classification, numRue, nomRue, ville, cp, numeroContact, emailContact, nomChaine) values ('Christoffels', 20, 2, '4', 'Cherokee', 'Taiping', '755376', '(818) 2222518', 'achristoffels3@nbcnews.com', 'Chaine A');
insert into Hotel ("nomHotel", nombreChambre, classification, numRue, nomRue, ville, cp, numeroContact, emailContact, nomChaine) values ('Treeby', 10, 2, '58', 'Milwaukee', 'Houping', '298127', '(363) 4691345', 'ftreeby4@columbia.edu', 'Chaine A');
insert into Hotel ("nomHotel", nombreChambre, classification, numRue, nomRue, ville, cp, numeroContact, emailContact, nomChaine) values ('Wards', 16, 3, '42289', 'East', 'Kristiansand S', '375138', '(151) 5028041', 'ywards5@adobe.com', 'Chaine A');
insert into Hotel ("nomHotel", nombreChambre, classification, numRue, nomRue, ville, cp, numeroContact, emailContact, nomChaine) values ('Vasnev', 5, 1, '2', 'Stoughton', 'Semënovskoye', '485762', '(926) 6679276', 'svasnev6@youtube.com', 'Chaine A');
insert into Hotel ("nomHotel", nombreChambre, classification, numRue, nomRue, ville, cp, numeroContact, emailContact, nomChaine) values ('Fourmy', 6, 3, '53218', 'Canary', 'Houping', '200543', '(781) 4827558', 'mfourmy7@behance.net', 'Chaine A');
insert into Hotel ("nomHotel", nombreChambre, classification, numRue, nomRue, ville, cp, numeroContact, emailContact, nomChaine) values ('Turford', 17, 3, '0118', 'Basil', 'Urazovo', '588632', '(748) 9055728', 'tturford8@dagondesign.com', 'Chaine B');
insert into Hotel ("nomHotel", nombreChambre, classification, numRue, nomRue, ville, cp, numeroContact, emailContact, nomChaine) values ('Core', 10, 3, '2', 'Schurz', 'Yaroslavl', '322314', '(650) 9431691', 'lcore9@blog.com', 'Chaine B');
insert into Hotel ("nomHotel", nombreChambre, classification, numRue, nomRue, ville, cp, numeroContact, emailContact, nomChaine) values ('Ricardou', 9, 1, '84509', 'Dahle', 'Quintas', '808189', '(511) 3250481', 'mricardoua@scribd.com', 'Chaine B');
insert into Hotel ("nomHotel", nombreChambre, classification, numRue, nomRue, ville, cp, numeroContact, emailContact, nomChaine) values ('Burnes', 7, 2, '9', 'Sheridan', 'Ludishan', '748504', '(752) 7460196', 'cburnesb@buzzfeed.com', 'Chaine B');
insert into Hotel ("nomHotel", nombreChambre, classification, numRue, nomRue, ville, cp, numeroContact, emailContact, nomChaine) values ('Sotheron', 9, 5, '332', 'Havey', 'Quintas', '771626', '(365) 2451616', 'gsotheronc@ow.ly', 'Chaine B');
insert into Hotel ("nomHotel", nombreChambre, classification, numRue, nomRue, ville, cp, numeroContact, emailContact, nomChaine) values ('Sextie', 15, 5, '15', 'Mockingbird', 'Huangji', '333557', '(475) 7749159', 'lsextied@epa.gov', 'Chaine B');
insert into Hotel ("nomHotel", nombreChambre, classification, numRue, nomRue, ville, cp, numeroContact, emailContact, nomChaine) values ('Thirwell', 15, 3, '2', 'Sunfield', 'Nubl', '744142', '(558) 7241179', 'lthirwelle@cargocollective.com', 'Chaine B');
insert into Hotel ("nomHotel", nombreChambre, classification, numRue, nomRue, ville, cp, numeroContact, emailContact, nomChaine) values ('Dominka', 10, 1, '69', 'Fordem', 'Terang', '166705', '(438) 1844705', 'adominkaf@tamu.edu', 'Chaine B');
insert into Hotel ("nomHotel", nombreChambre, classification, numRue, nomRue, ville, cp, numeroContact, emailContact, nomChaine) values ('Cragoe', 9, 2, '554', 'Red Cloud', 'Plast', '234113', '(411) 9195527', 'tcragoeg@parallels.com', 'Chaine C');
insert into Hotel ("nomHotel", nombreChambre, classification, numRue, nomRue, ville, cp, numeroContact, emailContact, nomChaine) values ('Orfeur', 10, 2, '45', 'Laurel', 'Zoetermeer', '736147', '(261) 6788576', 'borfeurh@harvard.edu', 'Chaine C');
insert into Hotel ("nomHotel", nombreChambre, classification, numRue, nomRue, ville, cp, numeroContact, emailContact, nomChaine) values ('MacVaugh', 15, 3, '214', 'Arrowood', 'Pingya', '311073', '(356) 6874827', 'rmacvaughi@indiatimes.com', 'Chaine C');
insert into Hotel ("nomHotel", nombreChambre, classification, numRue, nomRue, ville, cp, numeroContact, emailContact, nomChaine) values ('Stannering', 5, 1, '59162', 'Fremont', 'Plast', '370744', '(168) 9607180', 'rstanneringj@over-blog.com', 'Chaine C');
insert into Hotel ("nomHotel", nombreChambre, classification, numRue, nomRue, ville, cp, numeroContact, emailContact, nomChaine) values ('Stoneham', 10, 3, '41', 'Schurz', 'Konstantinovo', '008202', '(855) 6474317', 'lstonehamk@digg.com', 'Chaine C');
insert into Hotel ("nomHotel", nombreChambre, classification, numRue, nomRue, ville, cp, numeroContact, emailContact, nomChaine) values ('Brunetti', 9, 4, '4', 'Badeau', 'Staropavlovskaya', '298408', '(189) 8161979', 'lbrunettil@wikimedia.org', 'Chaine C');
insert into Hotel ("nomHotel", nombreChambre, classification, numRue, nomRue, ville, cp, numeroContact, emailContact, nomChaine) values ('Martonfi', 6, 5, '161', 'Lyons', 'Jubao', '115654', '(647) 2218778', 'mmartonfim@ca.gov', 'Chaine C');
insert into Hotel ("nomHotel", nombreChambre, classification, numRue, nomRue, ville, cp, numeroContact, emailContact, nomChaine) values ('Butcher', 18, 4, '6247', 'Pond', 'Florida', '54216', '(890) 7606550', 'rbutchern@weibo.com', 'Chaine C');
insert into Hotel ("nomHotel", nombreChambre, classification, numRue, nomRue, ville, cp, numeroContact, emailContact, nomChaine) values ('Maberley', 11, 5, '43', 'Bunting', 'Templeogue', '502453', '(340) 3778488', 'gmaberleyo@wufoo.com', 'Chaine D');
insert into Hotel ("nomHotel", nombreChambre, classification, numRue, nomRue, ville, cp, numeroContact, emailContact, nomChaine) values ('Alan', 19, 5, '0', 'Clyde Gallagher', 'Idhnā', '423851', '(824) 1589904', 'ealanp@xinhuanet.com', 'Chaine D');
insert into Hotel ("nomHotel", nombreChambre, classification, numRue, nomRue, ville, cp, numeroContact, emailContact, nomChaine) values ('Dupre', 6, 1, '52', 'Eagan', 'Asker', '558171', '(628) 4380643', 'rdupreq@google.com', 'Chaine D');
insert into Hotel ("nomHotel", nombreChambre, classification, numRue, nomRue, ville, cp, numeroContact, emailContact, nomChaine) values ('Merlin', 15, 2, '196', 'Mifflin', 'Idhnā', '505333', '(778) 6170841', 'dmerlinr@vistaprint.com', 'Chaine D');
insert into Hotel ("nomHotel", nombreChambre, classification, numRue, nomRue, ville, cp, numeroContact, emailContact, nomChaine) values ('Schapero', 13, 5, '78860', 'Anderson', 'Wairiang', '345135', '(817) 2396477', 'nschaperos@ameblo.jp', 'Chaine D');
insert into Hotel ("nomHotel", nombreChambre, classification, numRue, nomRue, ville, cp, numeroContact, emailContact, nomChaine) values ('MacAree', 18, 1, '325', 'Randy', 'Jinbi', '482931', '(859) 2962564', 'jmacareet@soundcloud.com', 'Chaine D');
insert into Hotel ("nomHotel", nombreChambre, classification, numRue, nomRue, ville, cp, numeroContact, emailContact, nomChaine) values ('Drabble', 8, 5, '18', 'Merchant', 'Udachny', '393178', '(850) 4562979', 'cdrabbleu@apple.com', 'Chaine D');
insert into Hotel ("nomHotel", nombreChambre, classification, numRue, nomRue, ville, cp, numeroContact, emailContact, nomChaine) values ('Storrar', 9, 1, '31', 'Anhalt', 'Coromoro', '950519', '(481) 3933223', 'kstorrarv@joomla.org', 'Chaine D');
insert into Hotel ("nomHotel", nombreChambre, classification, numRue, nomRue, ville, cp, numeroContact, emailContact, nomChaine) values ('Carlick', 5, 3, '71593', 'Shopko', 'Canala', '506519', '(527) 7025626', 'jcarlickw@china.com.cn', 'Chaine E');
insert into Hotel ("nomHotel", nombreChambre, classification, numRue, nomRue, ville, cp, numeroContact, emailContact, nomChaine) values ('Sorrel', 14, 4, '56', 'Rieder', 'Stockholm', '823635', '(400) 5058683', 'wsorrelx@godaddy.com', 'Chaine E');
insert into Hotel ("nomHotel", nombreChambre, classification, numRue, nomRue, ville, cp, numeroContact, emailContact, nomChaine) values ('Fasey', 11, 2, '756', 'Maryland', 'Berëzovka', '789642', '(262) 2483638', 'bfaseyy@blogger.com', 'Chaine E');
insert into Hotel ("nomHotel", nombreChambre, classification, numRue, nomRue, ville, cp, numeroContact, emailContact, nomChaine) values ('Birdfield', 19, 3, '47', 'Nancy', 'Tulyushka', '501015', '(411) 6104653', 'jbirdfieldz@oaic.gov.au', 'Chaine E');
insert into Hotel ("nomHotel", nombreChambre, classification, numRue, nomRue, ville, cp, numeroContact, emailContact, nomChaine) values ('Clementucci', 10, 2, '5', 'Clyde Gallagher', 'Baoan', '961506', '(388) 7301074', 'mclementucci10@nifty.com', 'Chaine E');
insert into Hotel ("nomHotel", nombreChambre, classification, numRue, nomRue, ville, cp, numeroContact, emailContact, nomChaine) values ('Le Fleming', 17, 3, '7595', 'Coolidge', 'Stockholm', '602391', '(768) 7486251', 'blefleming11@google.ca', 'Chaine E');
insert into Hotel ("nomHotel", nombreChambre, classification, numRue, nomRue, ville, cp, numeroContact, emailContact, nomChaine) values ('MacKeogh', 18, 5, '90', 'Ramsey', 'Nanguzhuang', '858440', '(925) 5271419', 'amackeogh12@woothemes.com', 'Chaine E');
insert into Hotel ("nomHotel", nombreChambre, classification, numRue, nomRue, ville, cp, numeroContact, emailContact, nomChaine) values ('Grayham', 15, 3, '11989', 'Lukken', 'Ituberá', '385859', '(831) 8276518', 'lgrayham13@ovh.net', 'Chaine E');


--**************** INSERTS INTO EMPLOYE *****************
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('347548990', 'Joellen', 'Grigoletti', '31538', 'Mcguire', 'Ruma', '976801', 'Manager', 'Abdy');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('402042167', 'Aggie', 'Turbefield', '0', 'Hazelcrest', 'Xuchang', '012385', 'Manager', 'Pietri');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('354693832', 'Barnett', 'Bere', '05413', 'Debra', 'Syevyerodonetsk', '421054', 'Manager', 'Walklot');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('223321078', 'Etty', 'Meadus', '24900', 'Rutledge', 'Gusev', '216790', 'Manager', 'Christoffels');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('672288976', 'Cornelle', 'Bewfield', '4946', 'Logan', 'Grigiškės', '566624', 'Manager', 'Treeby');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('112633430', 'Eugen', 'Betts', '04204', 'Anderson', 'Gaolong', '393571', 'Manager', 'Wards');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('488988841', 'Duffie', 'Gillies', '44281', 'Charing Cross', 'Santo Antônio de Jesus', '698922', 'Manager', 'Vasnev');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('428057292', 'Stefa', 'Corrao', '66', 'Bellgrove', 'Maindang', '739525', 'Manager', 'Fourmy');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('698726549', 'Barty', 'Ausiello', '692', 'Chinook', 'Brzączowice', '531106', 'Manager', 'Turford');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('089135308', 'Johnathan', 'MacDermand', '331', 'Summit', 'Enyerhyetykaw', '777962', 'Manager', 'Core');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('630019254', 'Reagen', 'Winterbottom', '45', 'Bobwhite', 'Pôsto Fiscal Rolim de Moura', '174374', 'Manager', 'Ricardou');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('297976061', 'Karilynn', 'Sproson', '257', 'Tony', 'Montor Timur', '362799', 'Manager','Burnes');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('679268479', 'Janis', 'Sibylla', '9', 'Carioca', 'Bahuang', '113516', 'Manager', 'Sotheron');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('236164854', 'Chuck', 'Lacknor', '61076', 'Truax', 'Sendangkemulian', '337829', 'Manager', 'Sextie');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('912000039', 'Jammie', 'Wilbore', '00665', 'Butterfield', 'Jakobstad', '553303', 'Manager', 'Thirwell');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('509892113', 'Corrie', 'Rosengarten', '84', 'Montana', 'Reshetylivka', '157305', 'Manager', 'Dominka');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('543560688', 'George', 'McGrann', '40128', 'Vermont', 'Iturama', '370049', 'Manager', 'Cragoe');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('816245566', 'Etienne', 'Staden', '2553', 'Mosinee', 'Landerneau', '407375', 'Manager', 'Orfeur');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('951384135', 'Donn', 'Tadd', '91303', 'Westridge', 'Beppu', '796960', 'Manager', 'MacVaugh');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('917546744', 'Kath', 'MacHoste', '11313', 'Becker', 'Dawu Chengguanzhen', '389960', 'Manager', 'Stannering');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('437192905', 'Eimile', 'Rodd', '969', 'Dennis', 'Khondāb', '666231', 'Manager', 'Stoneham');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('968682550', 'Brose', 'Golda', '8', 'Briar Crest', 'Šoštanj', '698009', 'Manager', 'Brunetti');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('325672028', 'Brianna', 'Norker', '8538', 'Waxwing', 'Canha', '289854', 'Manager', 'Martonfi');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('228039603', 'Evin', 'Laister', '57', 'Crowley', 'Tyshkivka', '474724', 'Manager', 'Butcher');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('896623632', 'Nedi', 'Treeby', '6', 'Sherman', 'Altağac', '338452', 'Manager', 'Maberley');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('580426789', 'Christina', 'Wilby', '673', 'Eagle Crest', 'Sipirok', '199382', 'Manager', 'Alan');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('118622356', 'Jarib', 'Balazin', '70', 'Glacier Hill', 'Bagé', '950071', 'Manager', 'Dupre');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('022925074', 'Ashla', 'Kemball', '39871', 'Sunfield', 'Nangkasari', '826187', 'Manager', 'Merlin');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('069392505', 'Peggy', 'Petrulis', '27', 'Sage', 'Jasper Park Lodge', '908188', 'Manager', 'Schapero');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('892059028', 'Aymer', 'Matys', '73', 'Oak', 'Taiyangling', '943471', 'Manager', 'MacAree');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('775558675', 'Zeb', 'Chasmar', '4', 'Jackson', 'Krasnoarmeysk', '116702', 'Manager', 'Drabble');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('060375495', 'Ursa', 'Manifould', '25932', 'Bonner', 'Revda', '008166', 'Manager', 'Storrar');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('084520409', 'Wileen', 'Leblanc', '8', 'Declaration', 'Pleshanovo', '296855', 'Manager', 'Carlick');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('019760064', 'Ingar', 'Turl', '0303', 'Farwell', 'Tengah', '849489', 'Manager', 'Sorrel');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('452408276', 'Temp', 'Dossit', '0', 'Carpenter', 'Chashnikovo', '367724', 'Manager', 'Fasey' );
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('941537013', 'Jeremias', 'Hyrons', '18411', 'Luster', 'Österbybruk', '271712', 'Manager', 'Birdfield');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('727474386', 'Sollie', 'Kuschke', '609', 'Grayhawk', 'Neẖalim', '079221', 'Manager', 'Clementucci');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('040589067', 'Bear', 'Cuberley', '04', 'Clemons', 'Zama', '263807', 'Manager', 'Le Fleming');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('534645781', 'Alfie', 'Fallon', '21', 'Sloan', 'Kavýli', '469075', 'Manager', 'MacKeogh');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('595902635', 'Consuelo', 'Laity', '81', 'Hanson', 'Girihieum', '994648', 'Manager', 'Grayham');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('469218883', 'Coriss', 'Wooffitt', '67669', 'Delaware', 'Paldit', '516596', 'Clerk', 'Abdy');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('422816201', 'Robby', 'Starcks', '07133', 'Riverside', 'Bzenec', '154725', 'Clerk', 'Pietri');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('356784711', 'Arlina', 'Stubley', '07', 'Judy', '‘Awaj', '453145', 'Clerk', 'Walklot');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('459399180', 'Kore', 'Conner', '49113', 'Vernon', 'Banjarsari', '835782', 'Clerk', 'Christoffels');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('959743736', 'Porter', 'Jollie', '3362', 'Dovetail', 'Casal da Anja', '221618', 'Clerk', 'Treeby');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('967551927', 'Morgen', 'Fidian', '54', 'Everett', 'Aguas Corrientes', '629082', 'Clerk', 'Wards');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('339620877', 'Kim', 'Hoggan', '71478', 'Basil', 'San Sebastián de Yalí', '566065', 'Clerk', 'Vasnev');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('821250153', 'Minni', 'Boarleyson', '861', 'Clyde Gallagher', 'Ugljan', '904009', 'Clerk', 'Fourmy');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('940163725', 'Dedie', 'Eldered', '57', 'Sauthoff', 'Harrisburg', '284675', 'Clerk', 'Turford');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('350965970', 'Harriette', 'Bonus', '3', 'Dryden', 'Nagrog', '035984', 'Clerk', 'Core');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('070271518', 'Grange', 'Teggin', '1845', 'Parkside', 'Jönköping', '059610', 'Clerk', 'Ricardou');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('808986821', 'Patrice', 'Borell', '958', 'Crescent Oaks', 'Beppu', '537107', 'Clerk','Burnes');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('978963625', 'Marthena', 'Shier', '273', 'Mallard', 'Pôsto Fiscal Rolim de Moura', '628801', 'Clerk', 'Sotheron');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('642843836', 'Bogart', 'Rothermel', '0', 'Helena', 'Kepahiang', '764423', 'Clerk', 'Sextie');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('608358837', 'Nola', 'Tremaine', '570', 'Ridge Oak', 'Daxi', '285601', 'Clerk', 'Thirwell');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('915529355', 'Emerson', 'Vale', '96', 'Welch', 'Shebunino', '635653', 'Clerk', 'Dominka');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('415341180', 'Bernarr', 'Wildes', '634', 'Oriole', 'Ouaoula', '252390', 'Clerk', 'Cragoe');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('232806950', 'Lola', 'Trenouth', '3', 'Cordelia', 'Al Bilād', '494859', 'Clerk', 'Orfeur');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('283598813', 'Merilyn', 'Marousek', '579', 'Iowa', 'Fale old settlement', '804729', 'Clerk', 'MacVaugh');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('460477298', 'Glenda', 'Astie', '7', 'Jenna', 'Vose’', '079321', 'Clerk', 'Stannering');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('051152725', 'Alvis', 'Hadgraft', '5', 'Hayes', 'Stęszew', '723001', 'Clerk', 'Stoneham');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('269577864', 'Henka', 'Rickson', '36361', 'Lindbergh', 'Aboisso', '153360', 'Clerk', 'Brunetti');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('863085810', 'Carley', 'Bernardini', '17', 'Eggendart', 'Chociwel', '380924', 'Clerk', 'Martonfi');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('037262861', 'Luz', 'Honig', '432', 'Burrows', 'Ebak', '829629', 'Clerk', 'Butcher');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('307291427', 'Rick', 'Shergold', '2295', 'Dwight', 'Tambakmerak', '571620', 'Clerk', 'Maberley');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('238935552', 'Gwyn', 'Adolphine', '108', 'Prairieview', 'Katakwi', '301806', 'Clerk', 'Alan');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('992342572', 'Beryle', 'Ferrero', '79266', 'Loomis', 'Sagana', '146537', 'Clerk', 'Dupre');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('064021575', 'Wilbert', 'Moreinu', '7', 'Grayhawk', 'Melun', '330344', 'Clerk', 'Merlin');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('417812256', 'Elsworth', 'Conyard', '62', 'Monterey', 'Tiabaya', '358975', 'Clerk', 'Schapero');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('609193465', 'Corbie', 'Burgh', '6', 'Porter', 'Wan’an', '693588', 'Clerk', 'MacAree');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('679126271', 'Duffie', 'Badwick', '36', 'Clarendon', 'Kotido', '379855', 'Clerk','Drabble');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('871929081', 'Chrystal', 'Duval', '3685', 'Dovetail', 'Pelem', '704434', 'Clerk','Storrar');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('552235351', 'Emelia', 'Burgwin', '4315', 'Harper', 'Skuodas', '235724', 'Clerk','Carlick');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('899154675', 'Issiah', 'Dawdary', '26', 'Schlimgen', 'Baishan', '904719', 'Clerk','Sorrel');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('673666609', 'Abby', 'Dorn', '359', 'Redwing', 'Rafael Perazza', '265781', 'Clerk', 'Fasey' );
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('322359982', 'Nadean', 'Santi', '3553', 'Surrey', 'Caluquembe', '987840', 'Clerk', 'Birdfield');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('508297783', 'Loraine', 'Watterson', '42', 'Thackeray', 'Bandung', '388975', 'Clerk', 'Clementucci');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('362643513', 'Derek', 'Dowears', '76599', 'Oneill', 'Santa Valha', '938639', 'Clerk', 'Le Fleming');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('424213076', 'Bobinette', 'Iacomettii', '57', 'Warrior', 'Ferkessédougou', '653872', 'Clerk', 'MacKeogh');
insert into Employe (NAS, prenom, nom, numRue, nomRue, ville, cp, role, nomHotel) values ('170895311', 'Rivy', 'Ochterlony', '01638', 'Westerfield', 'Guacarí', '890622', 'Clerk', 'Grayham');

--**************** INSERTS INTO GESTIONAIRE *****************
INSERT INTO Gestionnaire (nomHotel, NASemploye)
SELECT nomHotel, NAS
FROM Employe
WHERE role = 'Manager';

--**************** INSERTS INTO CHAMBRE *****************
-- Check file room_inserts.sql

--**************** INSERTS INTO COMMODITE *****************
-- Check file commodite_inserts.sql, commodite_inserts2.sql, commodite_inserts3.sql



--**************** Changes to Reservation *****************
-- Step 1: Add the column without the CHECK constraint
ALTER TABLE reservation ADD COLUMN status VARCHAR(100);

-- Step 2: Add the CHECK constraint separately
ALTER TABLE reservation ADD CONSTRAINT status_check CHECK (status IN ('active', 'archived'));

--**************** Changes to Reservation *****************
-- Step 1: Add the column without the CHECK constraint
ALTER TABLE location ADD COLUMN status VARCHAR(100);

-- Step 2: Add the CHECK constraint separately
ALTER TABLE location ADD CONSTRAINT status_check CHECK (status IN ('active', 'archived'));

--**************** INSERTS INTO CLIENT *****************
insert into Client(NAS, prenom, nom, numRue, nomRue, ville, cp, registerDate) VALUES ('123456789', 'Jean', 'Dupont', 123, 'Rue de Paris', 'Paris', '75001', '2023-01-01');
insert into Client(NAS, prenom, nom, numRue, nomRue, ville, cp, registerDate) VALUES ('234567890', 'Marie', 'Curie', 234, 'Avenue des Champs', 'Lyon', '69000', '2023-01-02');
insert into Client(NAS, prenom, nom, numRue, nomRue, ville, cp, registerDate) VALUES ('345678901', 'Luc', 'Martin', 345, 'Boulevard de la Liberté', 'Marseille', '13000', '2023-01-03');
insert into Client(NAS, prenom, nom, numRue, nomRue, ville, cp, registerDate) VALUES ('456789012', 'Sophie', 'Moreau', 456, 'Rue de la République', 'Toulouse', '31000', '2023-01-04');
insert into Client(NAS, prenom, nom, numRue, nomRue, ville, cp, registerDate) VALUES ('567890123', 'Alexandre', 'LeGrand', 567, 'Rue Royale', 'Nantes', '44000', '2023-01-05');
insert into Client(NAS, prenom, nom, numRue, nomRue, ville, cp, registerDate) VALUES ('567890124', 'Sylvie', 'Moreau', 517, 'Rue Histoire', 'Vimy', '44500', '2023-01-01');

--**************** INSERTS INTO RESERVATION *****************
INSERT INTO Reservation (status, resStart, resEnd, NASclient, numeroChambre, nomHotel, NASemployee) 
VALUES ('Confirmed', '2024-04-01', '2024-04-05', '123456789', 106, 'Drabble', NULL);
INSERT INTO Reservation (status, resStart, resEnd, NASclient, numeroChambre, nomHotel, NASemployee) 
VALUES ('Confirmed', '2024-04-10', '2024-04-15', '234567890', 102, 'Sorrel', NULL);
INSERT INTO Reservation (status, resStart, resEnd, NASclient, numeroChambre, nomHotel, NASemployee) 
VALUES ('Confirmed', '2024-05-01', '2024-05-05', '345678901', 104, 'Fasey', NULL);
INSERT INTO Reservation (status, resStart, resEnd, NASclient, numeroChambre, nomHotel, NASemployee) 
VALUES ('Confirmed', '2024-05-10', '2024-05-20', '456789012', 117, 'Le Fleming', NULL);
INSERT INTO Reservation (status, resStart, resEnd, NASclient, numeroChambre, nomHotel, NASemployee) 
VALUES ('Confirmed', '2024-06-01', '2024-06-05', '567890123', 115, 'Grayham', NULL);

