-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 24, 2021 at 07:26 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chorki`
--

-- --------------------------------------------------------

--
-- Table structure for table `actionmovies`
--

CREATE TABLE `actionmovies` (
  `id` int(11) NOT NULL,
  `movieName` varchar(255) NOT NULL,
  `movieDescription` varchar(255) NOT NULL,
  `moviePoster` varchar(255) NOT NULL,
  `movieUrl` varchar(255) NOT NULL,
  `movieRating` varchar(255) NOT NULL,
  `movieLanguage` varchar(255) NOT NULL,
  `movieCategory` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `actionmovies`
--

INSERT INTO `actionmovies` (`id`, `movieName`, `movieDescription`, `moviePoster`, `movieUrl`, `movieRating`, `movieLanguage`, `movieCategory`) VALUES
(2, 'FAST AND FURIOUS 9', 'Dom and the crew must take on an international terrorist who turns out to be Dom and Mia\'s estranged brother.', 'movie/jnIrpMpGKrI2h34XV3UiHNMNcmp41mzJVTGzPdj0.jpg', '_qyw6LC5pnE&t=62s', '5.2', 'English', 'addActionMovie'),
(3, 'Free Guy', 'A bank teller discovers that he\'s actually an NPC inside a brutal, open world video game.', 'movie/SVhXWoLF9ctpSI4SpfpQYsVcByjCqOjXl58LkSH7.jpg', 'X2m-08cOAbc', '7.3', 'English', 'addActionMovie'),
(4, 'KATE', 'A female assassin has 24 hours to get vengeance on her murderer before she dies.', 'movie/xMxRvdVSke8vF26xYCkceYzSDFEMIQfNodMoCL04.jpg', 'MysGjRS9jFU', '6.3', 'English', 'addActionMovie'),
(6, 'Snake Eyes', 'A G.I. Joe spin-off centered around the character of Snake Eyes.', 'movie/KcPaSfXizQL2U4VcSbNJ0N78dGM5MLl6vRWqOTh8.jpg', 'Vd2sm63Xwfw', '5.4', 'English', 'addActionMovie'),
(7, 'VENOM', 'A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it.', 'movie/c0s15u0MGCf8gRIQz3oCMnYwNAyqNVjttFQyaXaY.jpg', 'u9Mv98Gr5pY', '6.7', 'English', 'addActionMovie'),
(8, 'VENOM - Extended', 'Eddie Brock attempts to reignite his career by interviewing serial killer Cletus Kasady, who becomes the host of the symbiote Carnage and escapes prison after a failed execution.', 'movie/7bB7csVRgDPci5XiLQaJSiOBJG9Q5j6hbHAwXEiq.jpg', 'Worz_qCsYvU', '6.6', 'English', 'addActionMovie'),
(9, 'MR. ROBOT', 'Elliot, a brilliant but highly unstable young cyber-security engineer and vigilante hacker, becomes a key figure in a complex game of global dominance when he and his shadowy allies try to take down the corrupt corporation he works for.', 'movie/BEwF1jSGA96hr5OIGHWMNIbE4IhNxbCQIkMjNS3J.jpg', 'xIBiJ_SzJTA', '8.5', 'English', 'addActionMovie'),
(10, 'Snowden', 'The NSA\'s illegal surveillance techniques are leaked to the public by one of the agency\'s employees, Edward Snowden, in the form of thousands of classified documents distributed to the press.', 'movie/MuCzIiUYKED0jLywxJJIqTKwISxdSNZKeYbUkhHM.jpg', 'QlSAiI3xMh4', '7.3', 'English', 'addActionMovie'),
(11, 'Passengers', 'A malfunction in a sleeping pod on a spacecraft traveling to a distant colony planet wakes one passenger 90 years early.', 'movie/XGlT3sm2YAzphFBBBfZ6Eefaj5D3D7WcGD373LIR.jpg', '7BWWWQzTpNU', '7.0', 'English', 'addActionMovie'),
(12, 'Who Am I', 'Benjamin, a young German computer whiz, is invited to join a subversive hacker group that wants to be noticed on the world\'s stage.', 'movie/LTpq75JzbNODtlYUmnxglZAg486PMRU03oZvr8ca.png', '5vnjheCqRIs', '7.5', 'English', 'addActionMovie'),
(13, 'The Social Network', 'As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea, and by the co-founder who was later squeezed out of the business.', 'movie/vm1SHwClCD3cd7pIE0OrOZPCe6KYMSxc36z1kHtS.png', 'lB95KLmpLR4', '7.7', 'English', 'addActionMovie'),
(14, 'The Great Hack', 'The Cambridge Analytica scandal is examined through the roles of several affected persons.', 'movie/IoUqU9G9hiUvGsncgXf2GUrNBttXrCg7vz7Lg2RZ.jpg', 'iX8GxLP1FHo', '7.1', 'English', 'addActionMovie'),
(15, 'We Are Legion: The Story of the Hacktivists', 'A documentary on the workings and beliefs of the self-described \"hacktivist\" collective, Anonymous.', 'movie/C8xmwuxgAqG8kT9ShhLAHz7stGbB1Cplu8YIYDAA.jpg', 'N0IDkzhBQMg', '7.3', 'English', 'addActionMovie'),
(16, 'The Internship', 'Two salesmen whose careers have been torpedoed by the digital age find their way into a coveted internship at Google, where they must compete with a group of young, tech-savvy geniuses for a shot at employment.', 'movie/IyetLKXOmspsoMNYtJmKRfNzzoSK3qyMU3W9gos4.jpg', 'jir62_ptloI', '6.3', 'English', 'addActionMovie');

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `roadNo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `houseNo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `areaName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `chorkioriginals`
--

CREATE TABLE `chorkioriginals` (
  `id` int(11) NOT NULL,
  `movieName` varchar(255) NOT NULL,
  `movieDescription` varchar(255) NOT NULL,
  `moviePoster` varchar(255) NOT NULL,
  `movieUrl` varchar(255) NOT NULL,
  `movieRating` varchar(255) NOT NULL,
  `movieLanguage` varchar(255) NOT NULL,
  `movieCategory` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `chorkioriginals`
--

INSERT INTO `chorkioriginals` (`id`, `movieName`, `movieDescription`, `moviePoster`, `movieUrl`, `movieRating`, `movieLanguage`, `movieCategory`) VALUES
(2, 'Alice in Borderland', 'A group of bored delinquents are transported to a parallel wasteland as part of a survival game.', 'movie/brRyQWsK3AsXhUfyCx6flO4tMlJx6Mm4kwn5N2yt.jpg', '49_44FFKZ1M', '7.7', 'English', 'addMovieChorkiOriginal'),
(3, 'Baki', 'A group of bored delinquents are transported to a parallel wasteland as part of a survival game.', 'movie/s1Pz7d37pTIP9ogHp7CqCbOR8ZKfEM8yDV5Dfj2L.jpg', '4-YNrsiWikM', '7.7', 'English', 'addMovieChorkiOriginal'),
(4, 'Bangkok Breaking', 'Newly arrived in Bangkok, Wanchai joins the road rescue service and unravels a city-wide conspiracy with the help of a journalist.', 'movie/HRdo2279bN2t5Vxckq7fHSqGFVhTaWGYkLPygLBI.jpg', 'JAfHOxm2Xhs', '6.1', 'English', 'addMovieChorkiOriginal'),
(5, 'Cobra Kai', 'Decades after their 1984 All Valley Karate Tournament bout, a middle-aged Daniel LaRusso and Johnny Lawrence find themselves martial-arts rivals again.', 'movie/d0tqtzUIVuOhUrC67DrZCpys7V0MN60iFRggQK8B.jpg', 'xCwwxNbtK6Y', '8.6', 'English', 'addMovieChorkiOriginal'),
(6, 'El Origen', 'In Cali during the \'60s and \'70s, two brothers juggle family, romance and the joint pursuit of a burning ambition: to rule Colombia\'s drug industry.', 'movie/pM9QCuQ0Hxi5yNQNSpznj9bOrpKs1qziEW5YD8r1.jpg', 'RV9L7ui9Cn8', '5.6', 'English', 'addMovieChorkiOriginal'),
(7, 'Elite', 'When three working-class teenagers begin attending an exclusive private school in Spain, the clash between them and the wealthy students leads to murder.', 'movie/2AXKWNzMgbRJk3LHJYKXhJdFxViJKeNxDiIYBXsW.jpg', 'QNwhAdrdwp0', '7.5', 'English', 'addMovieChorkiOriginal'),
(8, 'LUCIFER', 'Lucifer Morningstar has decided he\'s had enough of being the dutiful servant in Hell and decides to spend some time on Earth to better understand humanity. He settles in Los Angeles - the City of Angels.', 'movie/6cqwBaGA8FQFiaBij5whXlMvmBaOjND8t47CMH5d.jpg', 'X4bF_quwNtw', '8.1', 'English', 'addMovieChorkiOriginal'),
(9, 'Ragnarok', 'A small Norwegian town experiencing warm winters and violent downpours seems to be headed for another Ragnarok -- unless someone intervenes in time.', 'movie/xI4h8hiTM3vH7JrO6i4pib0JMnG3UoGSClCBeA7b.jpg', '7H9AaiBLHCo', '7.5', 'English', 'addMovieChorkiOriginal'),
(10, 'Rapinatori', 'Mehdi, a qualified robber, and Liana, an apprentice thief, get involved in a turf war between drug dealers, and have to collaborate in order to save their loved ones.', 'movie/BOCrTq3DbCaQW2IJcaRGyeNDsoYe4h4nIlUB5U1c.jpg', 'yuP7vkYERks', '6.7', 'English', 'addMovieChorkiOriginal'),
(11, 'Squid Game', 'Hundreds of cash-strapped players accept a strange invitation to compete in children\'s games. Inside, a tempting prize awaits with deadly high stakes. A survival game that has a whopping 45.6 billion-won prize at stake.', 'movie/6CCDmLBKy7gfvCwH5MkmlSsllvG15rBI9Qv5jC9O.jpg', 'oqxAJKy0ii4', '8.3', 'Language', 'addMovieChorkiOriginal'),
(12, 'Stranger Things 3', 'Stranger Things 3: The Game is the official companion game to Season 3 of the hit original series, Play through familiar events from the series while also uncovering never-before-seen quests, character interactions, and secrets.', 'movie/izML2fNfH3EWE3JSnuqDiXUwGnyIdHNg7JEQ2OwC.jpg', 'e4XvO7DItmc', '7.6', 'Language', 'addMovieChorkiOriginal'),
(13, 'The Chestnut Man', 'A young woman is found brutally murdered in a playground and one of her hands is missing. Above her hangs a small man made of chestnuts.', 'movie/xrcelV1o7BDfCg7apCCw3KYCCMJ1RyDsI3ImQKlI.jpg', 'LE0jZnMuAQE', '8.1', 'English', 'addMovieChorkiOriginal'),
(14, 'The Umbrella Academy', 'A family of former child heroes, now grown apart, must reunite to continue to protect the world.', 'movie/r6jQa75NNhTslWuo1Qxfin2TRzA8IIhtF4wtxApr.jpg', '0DAmWHxeoKw', '8.0', 'English', 'addMovieChorkiOriginal');

-- --------------------------------------------------------

--
-- Table structure for table `comedies`
--

CREATE TABLE `comedies` (
  `id` int(11) NOT NULL,
  `movieName` varchar(255) NOT NULL,
  `movieDescription` varchar(255) NOT NULL,
  `moviePoster` varchar(255) NOT NULL,
  `movieUrl` varchar(255) NOT NULL,
  `movieRating` varchar(255) NOT NULL,
  `movieLanguage` varchar(255) NOT NULL,
  `movieCategory` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comedies`
--

INSERT INTO `comedies` (`id`, `movieName`, `movieDescription`, `moviePoster`, `movieUrl`, `movieRating`, `movieLanguage`, `movieCategory`) VALUES
(2, 'Confessions of an Invisible Girl', 'When the clever but socially-awkward Tetê joins a new school, she\'ll do anything to fit in. But the queen bee among her classmates has other ideas.', 'movie/8G4Bj4x26umi34h5WX5m0xuCdNVDYhIiQfJku0eZ.jpg', 'uGJBHueplss', '5.2', 'English', 'addMovieComedy'),
(4, 'Cruella', 'A live-action prequel feature film following a young Cruella de Vil.', 'movie/N1ZPonyLse8emSQZEZBGmWW8a6EIjKBrC4UPayq8.jpg', 'gmRKv7n2If8', '7.4', 'English', 'romance'),
(5, 'Friendship Featurette', 'A live-action prequel feature film following a young Cruella de Vil.', 'movie/tG4j92DlI31yh5dfHstcs9zcfU94ulGdPkSAx1gc.jpg', 'N6DY_IkzPCI&t=32s', '7.4', 'English', 'romance'),
(6, 'Hotel Transylvania', 'Dracula, who operates a high-end resort away from the human world, goes into overprotective mode when a boy discovers the resort and falls for the count\'s teenaged daughter.', 'movie/55k6rlSHVLiRszvVLv53Y6codCoHryeO0FaG2vrw.jpg', '7AP86CYeR30', '7.4', 'English', 'addMovieComedy'),
(7, 'How I Became a Superhero', 'While superheroes have assimilated into Parisian society, a new drug gives super powers to mere mortals.', 'movie/eQlzvkkcHZ3MwwxGEFWIz4f8ZsOWEUTAQCkUvtWS.jpg', 'CI6MV7ZTCbg', '5.8', 'English', 'addMovieComedy'),
(8, 'JOLT', 'A bouncer with a slightly murderous anger-management problem that she controls with the help of an electrode-lined vest she uses to shock herself back to normalcy whenever she gets homicidal.', 'movie/FoIk9gUpW9ViR6cnz6Jo4La5PZfXYqnkBXfAYd7Y.jpg', '3BSSoD73TSk', '5.6', 'English', 'addMovieComedy'),
(9, 'My Little Pony', 'After the time of the Mane 6, Sunny--a young Earth Pony--and her new Unicorn friend Izzy explore their world and strive to restore Harmony to Equestria.', 'movie/0m8aQ475xmRfsiqftsQoqkpAbr0BmavBQgvP4F70.jpg', 'Pa_PRDVpjSk', '7.1', 'English', 'addMovieComedy'),
(10, 'PAW Patrol', 'Ryder and the pups are called to Adventure City to stop Mayor Humdinger from turning the bustling metropolis into a state of chaos.', 'movie/gYUIvpZYGKA8EDZcCMTKY8F78CK5VNMibwPVkF6U.jpg', 'LRMTr2VZcr8', '6.2', 'English', 'addMovieComedy'),
(11, 'Straight Outta Nowhere', 'The movie involves Scooby-Doo and his friends finding a strange object in the middle of Nowhere, Kansas, the backwoods hometown of Courage and his owners, Eustace and Muriel Bagge.', 'movie/xGCIrkCs8gQasjXJekYPcuOOwAQHltG6R0FwMs0C.jpg', '2vnTvMK3vVc', '6.6', 'English', 'addMovieComedy'),
(12, 'The Boss Baby', 'The Templeton brothers have become adults and drifted away from each other, but a new boss baby with a cutting-edge approach is about to bring them together again - and inspire a new family business.', 'movie/lXkeTySkTArOdPxrm4UQ2BuBAClr5pnU8E1yxK28.jpg', 'k397HRbTtWI', '5.9', 'English', 'addMovieComedy'),
(13, 'The Last Mercenary', 'A mysterious former secret service agent must urgently return to France when his estranged son is falsely accused of arms and drug trafficking by the government, following a blunder by an overzealous bureaucrat and a mafia operation.', 'movie/wMndlqo06Y3A3cpFYhto7n5JUjn7KHOOy7thm4t6.jpg', 'G4_ULVw5L04', '5.3', 'English', 'addMovieComedy');

-- --------------------------------------------------------

--
-- Table structure for table `customeraddtowatchlaterlists`
--

CREATE TABLE `customeraddtowatchlaterlists` (
  `id` int(11) NOT NULL,
  `customerId` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `profileImage` varchar(255) NOT NULL,
  `movieName` varchar(255) NOT NULL,
  `movieDescription` varchar(255) NOT NULL,
  `moviePoster` varchar(255) NOT NULL,
  `movieTrailer` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customeraddtowatchlaterlists`
--

INSERT INTO `customeraddtowatchlaterlists` (`id`, `customerId`, `name`, `email`, `profileImage`, `movieName`, `movieDescription`, `moviePoster`, `movieTrailer`) VALUES
(33, 2, 'Khalid', 'mdkhalidmahmud1010@gmail.com', 'movie/j9nUO8X4OA0KdbrxZ7rq32HGBcRZSYfEaz5F3P6m.jpg', 'Parasite', 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.', 'movie/2dfVokOS30vGdRMwbISmv8wuUhFOsxuj1L3HM1Kh.jpg', '5xH0HfJHsaY'),
(38, 2, 'Khalid', 'mdkhalidmahmud1010@gmail.com', 'movie/j9nUO8X4OA0KdbrxZ7rq32HGBcRZSYfEaz5F3P6m.jpg', '12 Angry Men', 'A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.', 'movie/VFusOpUTETvsVxUETR7ZgYXdxRKl4r5mYvkXG4ZL.jpg', '_13J_9B5jEk'),
(39, 2, 'Khalid', 'mdkhalidmahmud1010@gmail.com', 'movie/j9nUO8X4OA0KdbrxZ7rq32HGBcRZSYfEaz5F3P6m.jpg', 'Money Heist', 'An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.', 'movie/pUN9MreSnGIKrp77QW3nC9KIe1JJS4n1gEBfPlC5.jpg', 'htqXL94Rza4'),
(40, 2, 'Khalid', 'mdkhalidmahmud1010@gmail.com', 'movie/j9nUO8X4OA0KdbrxZ7rq32HGBcRZSYfEaz5F3P6m.jpg', 'MR. ROBOT', 'Elliot, a brilliant but highly unstable young cyber-security engineer and vigilante hacker, becomes a key figure in a complex game of global dominance when he and his shadowy allies try to take down the corrupt corporation he works for.', 'movie/BEwF1jSGA96hr5OIGHWMNIbE4IhNxbCQIkMjNS3J.jpg', 'xIBiJ_SzJTA'),
(41, 2, 'Khalid', 'mdkhalidmahmud1010@gmail.com', 'movie/j9nUO8X4OA0KdbrxZ7rq32HGBcRZSYfEaz5F3P6m.jpg', 'A Quiet Place Part II', 'Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize the creatures that hunt by sound are not the only threats lurking beyond the sand path.', 'movie/naOwDVrDFKxHfz37CyApym4C6d2yV1Rg78JmxJbR.jpg', 'BpdDN9d9Jio'),
(42, 2, 'Khalid', 'mdkhalidmahmud1010@gmail.com', 'movie/j9nUO8X4OA0KdbrxZ7rq32HGBcRZSYfEaz5F3P6m.jpg', 'Pulp Fiction', 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.', 'movie/oUIE49s3M393n715E0foemJdDDdvxVvuFHULuO35.jpg', '5ZAhzsi1ybM'),
(43, 2, 'Khalid', 'mdkhalidmahmud1010@gmail.com', 'movie/j9nUO8X4OA0KdbrxZ7rq32HGBcRZSYfEaz5F3P6m.jpg', 'Black Beauty', 'A wild horse and a teenage girl forge an unbreakable bond which keeps them connected for a lifetime.', 'movie/FZiAkb9LSVIqApqVprmbgCOP5OddbyFWl3S8O7id.jpg', 'DpZ3yZhsWZE'),
(44, 2, 'Khalid', 'mdkhalidmahmud1010@gmail.com', 'movie/j9nUO8X4OA0KdbrxZ7rq32HGBcRZSYfEaz5F3P6m.jpg', 'Dilwale Dulhania Le Jayenge', 'When Raj meets Simran in Europe, it isn\'t love at first sight but when Simran moves to India for an arranged marriage, love makes its presence felt.', 'movie/Axd1e34RkcrN2wF7TEenvWZJqYgDUuSW5IkGGnst.jpg', 'cmax1C1p660'),
(45, 2, 'Khalid', 'mdkhalidmahmud1010@gmail.com', 'movie/j9nUO8X4OA0KdbrxZ7rq32HGBcRZSYfEaz5F3P6m.jpg', 'Black Beauty', 'A wild horse and a teenage girl forge an unbreakable bond which keeps them connected for a lifetime.', 'movie/FZiAkb9LSVIqApqVprmbgCOP5OddbyFWl3S8O7id.jpg', 'DpZ3yZhsWZE'),
(46, 2, 'Khalid', 'mdkhalidmahmud1010@gmail.com', 'movie/j9nUO8X4OA0KdbrxZ7rq32HGBcRZSYfEaz5F3P6m.jpg', 'KATE', 'A female assassin has 24 hours to get vengeance on her murderer before she dies.', 'movie/xMxRvdVSke8vF26xYCkceYzSDFEMIQfNodMoCL04.jpg', 'MysGjRS9jFU'),
(47, 2, 'Khalid', 'mdkhalidmahmud1010@gmail.com', 'movie/j9nUO8X4OA0KdbrxZ7rq32HGBcRZSYfEaz5F3P6m.jpg', 'Gabriel\'s Inferno', 'An intriguing exploration of seduction, forbidden love, and redemption, a captivating and passionate tale of one man\'s escape from his own personal hell as he tries to earn the impossible: forgiveness and love.', 'movie/xR6lHzQp0srnong3YgpyYuP6DvxvNMUYvb2DdvIt.jpg', 'kgWFjmiqHmQ'),
(48, 2, 'Khalid', 'mdkhalidmahmud1010@gmail.com', 'movie/j9nUO8X4OA0KdbrxZ7rq32HGBcRZSYfEaz5F3P6m.jpg', 'How I Became a Superhero', 'While superheroes have assimilated into Parisian society, a new drug gives super powers to mere mortals.', 'movie/eQlzvkkcHZ3MwwxGEFWIz4f8ZsOWEUTAQCkUvtWS.jpg', 'CI6MV7ZTCbg'),
(49, 2, 'Khalid', 'mdkhalidmahmud1010@gmail.com', 'movie/j9nUO8X4OA0KdbrxZ7rq32HGBcRZSYfEaz5F3P6m.jpg', 'Shang-Chi and the Legend of the Ten Rings', 'Shang-Chi, the master of weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.', 'movie/EvMswMNHSaqhwRrYLKySRDnScTSd9CJmlo2LGhMI.jpg', '8YjFbMbfXaQ'),
(50, 2, 'Khalid', 'mdkhalidmahmud1010@gmail.com', 'movie/j9nUO8X4OA0KdbrxZ7rq32HGBcRZSYfEaz5F3P6m.jpg', 'Money Heist', 'An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.', 'movie/pUN9MreSnGIKrp77QW3nC9KIe1JJS4n1gEBfPlC5.jpg', 'htqXL94Rza4'),
(51, 2, 'Khalid', 'mdkhalidmahmud1010@gmail.com', 'movie/j9nUO8X4OA0KdbrxZ7rq32HGBcRZSYfEaz5F3P6m.jpg', 'Free Guy', 'A bank teller discovers that he\'s actually an NPC inside a brutal, open world video game.', 'movie/SVhXWoLF9ctpSI4SpfpQYsVcByjCqOjXl58LkSH7.jpg', 'X2m-08cOAbc'),
(52, 4, 'Abhi', 'abhikhan1010@gmail.com', 'movie/zJrs1OGvyOcnWkA2fcKCEru1rDjgUEPjIDq961Rx.jpg', 'Gabriel\'s Inferno', 'An intriguing exploration of seduction, forbidden love, and redemption, a captivating and passionate tale of one man\'s escape from his own personal hell as he tries to earn the impossible: forgiveness and love.', 'movie/xR6lHzQp0srnong3YgpyYuP6DvxvNMUYvb2DdvIt.jpg', 'kgWFjmiqHmQ'),
(54, 2, 'Khalid', 'mdkhalidmahmud1010@gmail.com', 'movie/j9nUO8X4OA0KdbrxZ7rq32HGBcRZSYfEaz5F3P6m.jpg', 'Squid Game', 'Hundreds of cash-strapped players accept a strange invitation to compete in children\'s games. Inside, a tempting prize awaits with deadly high stakes. A survival game that has a whopping 45.6 billion-won prize at stake.', 'movie/6CCDmLBKy7gfvCwH5MkmlSsllvG15rBI9Qv5jC9O.jpg', 'oqxAJKy0ii4'),
(56, 5, 'Abhi', 'abhikhan1010@gmail.com', 'movie/6Ca09l81arotTPumW9Y029JQ1QWqR2aaEK8DlPwb.jpg', 'FAST AND FURIOUS 9', 'Dom and the crew must take on an international terrorist who turns out to be Dom and Mia\'s estranged brother.', 'movie/RkVRSCjCswh10JVRIhsgEhwdo5Fm7oLWZTT27jbH.jpg', 'qyw6LC5pnE'),
(57, 5, 'Abhi', 'abhikhan1010@gmail.com', 'movie/6Ca09l81arotTPumW9Y029JQ1QWqR2aaEK8DlPwb.jpg', 'KATE', 'A female assassin has 24 hours to get vengeance on her murderer before she dies.', 'movie/xMxRvdVSke8vF26xYCkceYzSDFEMIQfNodMoCL04.jpg', 'MysGjRS9jFU');

-- --------------------------------------------------------

--
-- Table structure for table `customerchatlists`
--

CREATE TABLE `customerchatlists` (
  `id` int(255) NOT NULL,
  `customerName` varchar(255) NOT NULL,
  `custoemrEmail` varchar(255) NOT NULL,
  `customerProfileImage` varchar(255) NOT NULL,
  `customerMessage` varchar(255) NOT NULL,
  `activestatus` int(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customerchatlists`
--

INSERT INTO `customerchatlists` (`id`, `customerName`, `custoemrEmail`, `customerProfileImage`, `customerMessage`, `activestatus`, `created_at`, `updated_at`) VALUES
(2, 'Khalid', 'mdkhalidmahmud1010@gmail.com', 'movie/j9nUO8X4OA0KdbrxZ7rq32HGBcRZSYfEaz5F3P6m.jpg', 'gvasfdf', 1, '2021-10-28 08:45:01', '2021-11-03 22:05:48'),
(5, 'Abhi', 'abhikhan1010@gmail.com', 'movie/6Ca09l81arotTPumW9Y029JQ1QWqR2aaEK8DlPwb.jpg', 'hello I am abhi', 1, '2021-10-28 08:53:27', '2021-10-29 11:36:51');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `profileImage` varchar(255) NOT NULL,
  `activestatus` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `name`, `email`, `password`, `profileImage`, `activestatus`) VALUES
(2, 'Khalid', 'mdkhalidmahmud1010@gmail.com', '$2y$10$fgAkBq4jQcP6xJ7xKPCreul1RPFbJZfTLfpi.HOjGubTZG16CrgQW', 'movie/j9nUO8X4OA0KdbrxZ7rq32HGBcRZSYfEaz5F3P6m.jpg', 1),
(5, 'Abhi', 'abhikhan1010@gmail.com', '$2y$10$Ml0NrLE64zeMmcQI/mdEjuBjU.MrjDzgtiWPbAIIenn89DadEzxWO', 'movie/6Ca09l81arotTPumW9Y029JQ1QWqR2aaEK8DlPwb.jpg', 1);

-- --------------------------------------------------------

--
-- Table structure for table `districts`
--

CREATE TABLE `districts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `district_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `districts`
--

INSERT INTO `districts` (`id`, `district_name`, `created_at`, `updated_at`) VALUES
(1, 'Dhaka', NULL, NULL),
(2, 'Rajshahi', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `horrors`
--

CREATE TABLE `horrors` (
  `id` int(11) NOT NULL,
  `movieName` varchar(255) NOT NULL,
  `movieDescription` varchar(255) NOT NULL,
  `moviePoster` varchar(255) NOT NULL,
  `movieUrl` varchar(255) NOT NULL,
  `movieRating` varchar(255) NOT NULL,
  `movieLanguage` varchar(255) NOT NULL,
  `movieCategory` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `horrors`
--

INSERT INTO `horrors` (`id`, `movieName`, `movieDescription`, `moviePoster`, `movieUrl`, `movieRating`, `movieLanguage`, `movieCategory`) VALUES
(1, 'A Quiet Place Part II', 'Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize the creatures that hunt by sound are not the only threats lurking beyond the sand path.', 'movie/naOwDVrDFKxHfz37CyApym4C6d2yV1Rg78JmxJbR.jpg', 'BpdDN9d9Jio', '7.3', 'English', 'addMovieHorror'),
(2, 'Army of the Dead', 'Following a zombie outbreak in Las Vegas, a group of mercenaries take the ultimate gamble, venturing into the quarantine zone to pull off the greatest heist ever attempted.', 'movie/iz35C3fOyoh9J4LDrX0laxy7tImHBbenoMHhWMlB.jpg', 'tI1JGPhYBS8', '5.8', 'English', 'addMovieHorror'),
(3, 'Black Water', 'A terrifying tale of survival in the mangrove swamps of Northern Australia', 'movie/59roXDIoLsTmJADJCSaLqixIFe330J36JZpZuzbz.jpg', '8yBWq-75DX0', '5.9', 'English', 'addMovieHorror'),
(4, 'Carriers', 'As a lethal virus spreads globally, four friends seek a reputed plague-free haven. But while avoiding the infected, the travelers turn on one another.', 'movie/bq9OsyqNedsUCByEIGONyaQm1ZaH4YDcaQ5woAEd.jpg', 'oNb6-yIED0Q', '6.0', 'English', 'addMovieHorror'),
(5, 'DON’T BREATHE 2', 'The sequel is set in the years following the initial deadly home invasion, where Norman Nordstrom (Stephen Lang) lives in quiet solace until his past sins catch up to him.', 'movie/qsCdsCgS8tHqWEs8g0KMdnTjYZNnIRpyrYa4amXI.jpg', 'gRbG2tjHYCA', '6.1', 'English', 'addMovieHorror'),
(6, 'Dragon Fury', 'team of experts travels deep into the mountains to find a dangerous creature.', 'movie/6J1WociQUbngvpVrc4EYh8I6Bl2Gv35A8Z50VHbb.jpg', 'kp_iCBrjeKA', '4.9', 'English', 'addMovieHorror'),
(7, 'ESCAPE ROOM', 'Six people unwillingly find themselves locked in another series of escape rooms, slowly uncovering what they have in common to survive. Joining forces with two of the original survivors, they soon discover they\'ve all played the game before.', 'movie/aPevczocSnnzHoCCitLfYSueevI4TcxP7tTHQxm0.jpg', '6dSKUoV0SNI&t=2s', '5.8', 'English', 'addMovieHorror'),
(8, 'Fairytale', 'Lucy, an aspiring Celestial Wizard, becomes a friend and ally to powerful wizards Natsu, Gray, and Erza, who are part of the (in)famous wizard guild, Fairy Tail.', 'movie/67Meww8wRl1VzWMiBaW1LAacY9JysNKoeu304lRM.jpg', 'CIAO4yAeIDA', '8.0', 'English', 'addMovieHorror'),
(9, 'Host', 'Six friends hire a medium to hold a seance via Zoom during lockdown, but they get far more than they bargained for as things quickly go wrong.', 'movie/gyKaY1RnkZ4swJectygsn6zlgwHkZMsbAai4NI32.jpg', 'SNlKbqHqGcY', '6.5', 'English', 'addMovieHorror'),
(10, 'Nightbooks', 'Follows Alex, a boy obsessed with scary stories who is imprisoned by an evil young witch in her contemporary New York City apartment.', 'movie/rHmduwSYxrVI9RT1SVlE05Lbo6LkBGyzmF3fVMTp.jpg', 'aQO16k5Vdow', '5.8', 'English', 'addMovieHorror'),
(11, 'Swim', 'A family gets trapped in their storm flooded vacation rental, tries to escape from a hungry shark that made it\'s way into the house.', 'movie/Hw2JsUy2Cc8vO98bFRv2IAAh7UdB3OTEyyq8WYJT.jpg', '9ts6uJ_ze_8', '3.3', 'English', 'addMovieHorror'),
(12, 'The Conjuring', 'Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.', 'movie/G1nGKvEn5JnR5Dw5Sjcmi9JnHcCULE8yaRsXMpC4.jpg', 'k10ETZ41q5o', '7.5', 'English', 'addMovieHorror'),
(13, 'The Forever Purge', 'All the rules are broken as a sect of lawless marauders decides that the annual Purge does not stop at daybreak and instead should never end.', 'movie/mqI6hwzOKCYRpBdqVYz4eGjWbj1hXTahvNmWCIZk.jpg', 'xOrXpK-rUaI', '5.4', 'English', 'addMovieHorror'),
(14, 'THE UNHOLY', 'A hearing-impaired girl is visited by the Virgin Mary and can suddenly hear, speak, and heal the sick. As people flock to witness her miracles, terrifying events unfold. Are they the work of the Virgin Mary or something much more sinister?', 'movie/cZfJaFTItmLhB0lIXJfTtoEhcfNd4cvy657VvrLL.jpg', 'NmQiJPLYzPI', '5.1', 'English', 'addMovieHorror');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `linebarareachartdatas`
--

CREATE TABLE `linebarareachartdatas` (
  `id` int(255) NOT NULL,
  `monthName` varchar(255) NOT NULL,
  `yearName` varchar(255) NOT NULL,
  `monthlyNewUser` varchar(255) NOT NULL,
  `monthLostUser` varchar(255) NOT NULL,
  `yearlyNewUser` varchar(255) NOT NULL,
  `yearlyLostUser` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `linebarareachartdatas`
--

INSERT INTO `linebarareachartdatas` (`id`, `monthName`, `yearName`, `monthlyNewUser`, `monthLostUser`, `yearlyNewUser`, `yearlyLostUser`) VALUES
(2, 'January', '2016', '430', '20', '1270', '345'),
(3, 'February', '2017', '650', '120', '965', '650'),
(4, 'March', '2018', '260', '56', '1240', '350'),
(5, 'April', '2019', '360', '60', '1280', '450'),
(6, 'May', '2020', '460', '64', '1300', '400'),
(7, 'June', '2021', '560', '70', '1350', '450'),
(8, 'July', '2021', '660', '77', '1370', '490'),
(9, 'August', '2022', '690', '97', '1570', '690'),
(10, 'September', '2023', '790', '120', '1970', '890'),
(11, 'October', '2024', '890', '140', '2970', '990'),
(12, 'November', '2024', '990', '240', '3970', '1990'),
(13, 'December', '2024', '1990', '340', '5970', '3990');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2021_10_21_131326_create_jobs_table', 1),
(6, '2021_10_27_062250_create_address_table', 2),
(8, '2021_10_30_130941_create_districts_table', 3),
(9, '2021_10_30_134113_create_sims_table', 4),
(10, '2021_10_30_134502_create_user_sim_table', 5);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `piechartdatas`
--

CREATE TABLE `piechartdatas` (
  `id` int(255) NOT NULL,
  `countryName` varchar(255) NOT NULL,
  `noOfUser` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `piechartdatas`
--

INSERT INTO `piechartdatas` (`id`, `countryName`, `noOfUser`) VALUES
(1, 'Bangladesh', 6500),
(2, 'India', 12000),
(3, 'Pakistan', 9500),
(4, 'Nepal', 3500),
(5, 'Bhutan', 3500);

-- --------------------------------------------------------

--
-- Table structure for table `romances`
--

CREATE TABLE `romances` (
  `id` int(11) NOT NULL,
  `movieName` varchar(255) NOT NULL,
  `movieDescription` varchar(255) NOT NULL,
  `moviePoster` varchar(255) NOT NULL,
  `movieUrl` varchar(255) NOT NULL,
  `movieRating` varchar(255) NOT NULL,
  `movieLanguage` varchar(255) NOT NULL,
  `movieCategory` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `romances`
--

INSERT INTO `romances` (`id`, `movieName`, `movieDescription`, `moviePoster`, `movieUrl`, `movieRating`, `movieLanguage`, `movieCategory`) VALUES
(1, 'Cinderella', 'A modern movie musical with a bold take on the classic fairy tale. Our ambitious heroine has big dreams and with the help of her fab Godmother, she perseveres to make them come true.', 'movie/s7OnzsLP9WmiS3SiRdgMz6a7GU5GMuaXPtldX562.jpg', 'T1NeHRuPpoM', '4.2', 'English', 'addMovieRomance'),
(2, 'HE\'S ALL THAT', 'A teenage girl sets out to give a nebbish classmate the ultimate high school makeover. An updated remake of the 1999 film, \'She\'s All That\'.', 'movie/OEU9lnMCEtSbD1TQhlplFxlTwxG8uRwcA4m2iIGX.jpg', 'h8m_NuIAKwA', '4.3', 'English', 'addMovieRomance'),
(3, 'Resort to Love', 'Erica, who ends up as the entertainment at her ex-fiancé\'s wedding after reluctantly taking a gig at a luxurious island resort while in the wake of a music career meltdown.', 'movie/pNCNrpx1SfheC8JPOTN04JmPAY8egaTHQL32nrpU.jpg', '6fcnG6-L4Cc', '5.7', 'English', 'addMovieRomance'),
(4, 'Sounds Like Love', 'Fashion assistant Maca has just about got her life together after a devastating breakup, when Leo, the man who broke her heart returns. Seeking support from best friends, Adriana and Jime, all three will learn love can be complicated.', 'movie/y1VWYOYarZ6RqWH7HkLJ5uBXCgiwj4qSVQG9OMfu.jpg', 'nkf5PSXIn54', '5.3', 'English', 'addMovieRomance'),
(5, 'Sweet and Sour', 'Faced with real-world opportunities and challenges, a couple endures the highs and lows of trying to make a long-distance relationship survive', 'movie/MgGXQho8zSAsZ4fE4AupoAmRXyA67Yga4piAPZ2I.jpg', '2CFeVRhzi_g&t=10s', '6.7', 'English', 'addMovieRomance'),
(6, 'The Kissing Booth', 'A high school student is forced to confront her secret crush at a kissing booth.', 'movie/Qz8MnW2GQywAgI120ZlfTHRhfAvPEUgZ08KTejkm.jpg', '7bfS6seiLhk', '6', 'English', 'addMovieRomance'),
(7, 'THE TWILIGHT SAGA', 'As a string of mysterious killings grips Seattle, Bella, whose high school graduation is fast approaching, is forced to choose between her love for vampire Edward and her friendship with werewolf Jacob.', 'movie/LBSwzcmEXF0vJXYGytwRgcuRExjX3acNr9OyR1or.jpg', 'PQNLfo-SOR4', '5', 'English', 'addMovieRomance'),
(8, 'Tune in for Love', 'In 1994 during the IMF crisis, two people meet while exchanging stories on a radio program. They fall in love, but can\'t quite seem to get the timing right', 'movie/hQfmtPuI1tgyeyh0jEqy6mjDZU7SuRRaG0u435DD.png', 'O2x8gaL5Omw', '7.2', 'English', 'addMovieRomance'),
(9, 'The Fault in Our Stars', 'Two teenage cancer patients begin a life-affirming journey to visit a reclusive author in Amsterdam.', 'movie/J6pKrd5HQcpNBLKyZotCfsmINRjYDsLKjtgCEV5a.jpg', '9ItBvH5J6ss', '7.7', 'English', 'addMovieRomance'),
(10, 'Titanic', 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.', 'movie/5dwwSDn9aOeZ1B0pgnOFcdRRobcy0xcE3woDNxSq.jpg', 'kVrqfYjkTdQ', '7.8', 'English', 'addMovieRomance'),
(11, 'Man in Love', 'A small-time gangster clumsily attempts to court a girl he has a crush on. Can he win her over and leave the underworld behind?', 'movie/I3CkoQjIM3d1hbe6aVx9TXexqQUq3SdJ2qVFPCXw.jpg', 'udr78TOy-Kg', '7.0', 'English', 'addMovieRomance'),
(12, 'Veer-Zaara', 'Veer-Zaara is a saga of love, separation, courage and sacrifice. A love story that is an inspiration and will remain a legend forever.', 'movie/08fp6fP6kO6aDpXYltIO9E3FWul3ELU9ICBwLYia.jpg', 'OSaVImLnnsw', '7.8', 'English', 'addMovieRomance'),
(13, 'Kal Ho Naa Ho', 'Naina, an introverted, perpetually depressed girl\'s life changes when she meets Aman. But Aman has a secret of his own which changes their lives forever. Embroiled in all this is Rohit, Naina\'s best friend who conceals his love for her.', 'movie/DNTGQhMG7dj1GkyS4YXOPMr6oa4l2dXHVXic7guD.jpg', 'tVMAQAsjsOU', '7.9', 'English', 'addMovieRomance');

-- --------------------------------------------------------

--
-- Table structure for table `scatterchartdatas`
--

CREATE TABLE `scatterchartdatas` (
  `id` int(255) NOT NULL,
  `subscriptionfee` varchar(255) NOT NULL,
  `userWithSubscriptionFee` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `scatterchartdatas`
--

INSERT INTO `scatterchartdatas` (`id`, `subscriptionfee`, `userWithSubscriptionFee`) VALUES
(1, '435', '3500'),
(2, '480', '6200'),
(3, '485', '6000'),
(4, '490', '6200'),
(5, '550', '4400'),
(6, '420', '8400');

-- --------------------------------------------------------

--
-- Table structure for table `sims`
--

CREATE TABLE `sims` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `sim_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sims`
--

INSERT INTO `sims` (`id`, `sim_name`, `created_at`, `updated_at`) VALUES
(1, 'gp', NULL, NULL),
(2, 'roby', NULL, NULL),
(3, 'banglalink', NULL, NULL),
(4, 'airlet', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `toprateds`
--

CREATE TABLE `toprateds` (
  `id` int(11) NOT NULL,
  `movieName` varchar(255) NOT NULL,
  `movieDescription` varchar(255) NOT NULL,
  `moviePoster` varchar(255) NOT NULL,
  `movieUrl` varchar(255) NOT NULL,
  `movieRating` varchar(255) NOT NULL,
  `movieLanguage` varchar(255) NOT NULL,
  `movieCategory` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `toprateds`
--

INSERT INTO `toprateds` (`id`, `movieName`, `movieDescription`, `moviePoster`, `movieUrl`, `movieRating`, `movieLanguage`, `movieCategory`) VALUES
(2, '12 Angry Men', 'A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.', 'movie/VFusOpUTETvsVxUETR7ZgYXdxRKl4r5mYvkXG4ZL.jpg', '_13J_9B5jEk', '9', 'English', 'addMovieTopRated'),
(3, 'Given', 'The life and loves of the rock band Given, and the romantic relationships that develops between its members.', 'movie/3OC6nkEsTkRFivaZQmGjkdXWsFPjuvDp5okYy1Z7.jpg', 'A7WdPUjYZoQ', '8.4', 'Japanese', 'addMovieTopRated'),
(4, 'Black Beauty', 'A wild horse and a teenage girl forge an unbreakable bond which keeps them connected for a lifetime.', 'movie/FZiAkb9LSVIqApqVprmbgCOP5OddbyFWl3S8O7id.jpg', 'DpZ3yZhsWZE', '6.4', 'English', 'addMovieTopRated'),
(5, 'Dilwale Dulhania Le Jayenge', 'When Raj meets Simran in Europe, it isn\'t love at first sight but when Simran moves to India for an arranged marriage, love makes its presence felt.', 'movie/Axd1e34RkcrN2wF7TEenvWZJqYgDUuSW5IkGGnst.jpg', 'cmax1C1p660', '8.1', 'Hindi', 'addMovieTopRated'),
(7, 'Gabriel\'s Inferno', 'An intriguing exploration of seduction, forbidden love, and redemption, a captivating and passionate tale of one man\'s escape from his own personal hell as he tries to earn the impossible: forgiveness and love.', 'movie/xR6lHzQp0srnong3YgpyYuP6DvxvNMUYvb2DdvIt.jpg', 'kgWFjmiqHmQ', '6.3', 'English', 'addMovieTopRated'),
(8, 'Gabriel’s Inferno Part II', 'Professor Emerson learns the truth about Julia but his realization comes too late. Julia is done waiting for him to remember her and wants nothing more to do with him. Can Gabriel win back her heart before she finds love in another\'s arms?', 'movie/uVFoo3qcOpDrnMSdFUlieS4plajlRxwpR5I0ttEc.jpg', '5g02v1oz5Y0', '6.8', 'English', 'addMovieTopRated'),
(9, 'Gabriel\'s Inferno Part III', 'Someone dark returns from Julia\'s past with bad intentions. Gabriel has secrets he needs to share, but worries that he\'ll lose everything if he does. Will their relationship weather the test of secrets revealed?', 'movie/ugyh53IiBrJcguDA1HYWBbQ2rbhmRLVw0a4JAT2U.jpg', 'mjPUGem9SaY', '6.9', 'English', 'addMovieTopRated'),
(10, 'The Godfather Part II', 'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.', 'movie/Zu1xe9NXs1WXQGbv8Gb5jTwB6y70MT8qEpbyXKDh.jpg', '9O1Iy9od7-A', '9.0', 'English', 'addMovieTopRated'),
(11, 'Parasite', 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.', 'movie/2dfVokOS30vGdRMwbISmv8wuUhFOsxuj1L3HM1Kh.jpg', '5xH0HfJHsaY', '8.6', 'Korean', 'addMovieTopRated'),
(12, 'Pulp Fiction', 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.', 'movie/oUIE49s3M393n715E0foemJdDDdvxVvuFHULuO35.jpg', '5ZAhzsi1ybM', '8.9', 'English', 'addMovieTopRated'),
(13, 'Schindler\'s List', 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.', 'movie/4etIxEyDi45zBGKoB7VigD10L47gi9hep7k6RtWO.jpg', 'gG22XNhtnoY', '8.9', 'English', 'addMovieTopRated'),
(14, 'The Shawshank Redemption', 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', 'movie/hxhFqHMhS8Jj0ljTfDS6Arkl5OPLx1bNq03sWf0W.jpg', '6hB3S9bIaco', '9.3', 'English', 'addMovieTopRated'),
(15, 'The Godfather', 'An organized crime dynasty\'s aging patriarch transfers control of his clandestine empire to his reluctant son.', 'movie/GgQDlHcB7xwQ3KohVjASPZ3xDGU0ax9L6SQUQlft.jpg', 'sY1S34973zA', '9.2', 'English', 'addMovieTopRated'),
(16, 'The Green Mile', 'The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.', 'movie/8VamWeSf81Kxn92lRbJW2tvnKDgxmMACptsdiWwy.jpg', 'Ki4haFrqSrw', '8.6', 'English', 'addMovieTopRated'),
(17, 'Wolfwalkers', 'A young apprentice hunter and her father journey to Ireland to help wipe out the last wolf pack. But everything changes when she befriends a free-spirited girl from a mysterious tribe rumored to transform into wolves by night.', 'movie/GHXQTrJZwRkH3kp2GShgepWn1SDse11BZFYBTiRa.jpg', 'd_Z_tybgPgg', '8.1', 'English', 'addMovieTopRated');

-- --------------------------------------------------------

--
-- Table structure for table `trendingnewmovies`
--

CREATE TABLE `trendingnewmovies` (
  `id` int(11) NOT NULL,
  `movieName` varchar(255) NOT NULL,
  `movieDescription` varchar(255) NOT NULL,
  `moviePoster` varchar(255) NOT NULL,
  `movieUrl` varchar(255) NOT NULL,
  `movieRating` varchar(255) NOT NULL,
  `movieLanguage` varchar(255) NOT NULL,
  `movieCategory` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `trendingnewmovies`
--

INSERT INTO `trendingnewmovies` (`id`, `movieName`, `movieDescription`, `moviePoster`, `movieUrl`, `movieRating`, `movieLanguage`, `movieCategory`) VALUES
(3, 'Captain America', 'Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a \"Super-Soldier serum\". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.', 'movie/55G8Xgt2Kjoj38LoG3kAIx1dqtlDah9rBasJZiDY.jpg', 'JerVrbLldXw', '10', 'English', 'addMovieTrendingNow'),
(4, 'Dune', 'Feature adaptation of Frank Herbert\'s science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.', 'movie/mnVL2jnoTypEZD9gBVnBqoBQMxZFyk6oJZ2En22r.jpg', '8g18jFHCLXk', '8.4', 'English', 'addMovieTrendingNow'),
(5, 'Escape Room', 'Six strangers find themselves in a maze of deadly mystery rooms and must use their wits to survive.', 'movie/UQhHn2S1ILNKhn4YIojZTQ5hPS37K2706pclb0ig.jpg', '6dSKUoV0SNI', '6.4', 'English', 'addMovieTrendingNow'),
(6, 'FAST AND FURIOUS 9', 'Dom and the crew must take on an international terrorist who turns out to be Dom and Mia\'s estranged brother.', 'movie/RkVRSCjCswh10JVRIhsgEhwdo5Fm7oLWZTT27jbH.jpg', 'qyw6LC5pnE', '5.2', 'English', 'addMovieTrendingNow'),
(7, 'MALIGNANT', 'Madison is paralyzed by shocking visions of grisly murders, and her torment worsens as she discovers that these waking dreams are in fact terrifying realities.', 'movie/7aYDzWyv3t0zbTZ0wXNqgTLFmEpWlHBgTUJjgxqe.jpg', 'Gczt0fhawDs', '6.3', 'English', 'addMovieTrendingNow'),
(8, 'Money Heist', 'An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.', 'movie/pUN9MreSnGIKrp77QW3nC9KIe1JJS4n1gEBfPlC5.jpg', 'htqXL94Rza4', '8.2', 'English', 'addMovieTrendingNow'),
(9, 'No One Gets Out Alive', 'An immigrant in search of the American dream who, after being forced to take a room in a boarding house, finds herself in a nightmare she can\'t escape', 'movie/4CTcszCblFzmADUZNf7v4yEK0aogaLuPnXFrjfrc.jpg', 'sY2TLiK27g4', '5.3', 'English', 'addMovieTrendingNow'),
(10, 'Old', 'A vacationing family discovers that the secluded beach where they\'re relaxing for a few hours is somehow causing them to age rapidly, reducing their entire lives into a single day.', 'movie/UmVBc8BigMH2zwRYqrGPsUBtdyabLHjsFTcGbf3T.jpg', 'A4U2pMRV9_k', '5.8', 'English', 'addMovieTrendingNow'),
(11, 'Black Widow', 'Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.', 'movie/FCaB6txtmUJIacK1BoH6oKupBDSYCC4kRdNGloFe.jpg', 'RxAtuMu_ph4', '6.8', 'English', 'addMovieTrendingNow'),
(12, 'Shang-Chi and the Legend of the Ten Rings', 'Shang-Chi, the master of weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.', 'movie/EvMswMNHSaqhwRrYLKySRDnScTSd9CJmlo2LGhMI.jpg', '8YjFbMbfXaQ', '7.9', 'English', 'addMovieTrendingNow'),
(13, 'THE SUICIDE SQUAD', 'Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.', 'movie/7x9u2iGrRTbyQkGh965qsD4aaLeMSdy0Mk616x2v.jpg', 'JuDLepNa7hw', '7.3', 'English', 'addMovieTrendingNow'),
(14, 'THE MANY SAINTS OF NEWARK', 'Witness the making of Tony Soprano. The story that reveals the humanity behind Tony\'s struggles and the influence his family - especially his uncle, Dickie Moltisanti - had over him becoming the most iconic mob boss of all time.', 'movie/PvGZj6Z7MNl9P4U7pmFj0Uqr8VSXz5kT1d8pXfzS.jpg', 'dHa95iy2lF0', '6.5', 'English', 'addMovieTrendingNow');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `district_id` int(11) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `verify_token` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `reset_token` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `district_id`, `name`, `email`, `verify_token`, `reset_token`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(200, 1, 'frutika', 'frutika@gmail.com', '6177ded9efb8a', NULL, '2021-10-26 04:56:41', '$2y$10$/UBP6Z3IfA5FXVWE1aTgS.qwxPIUAMPIlPgUUfSlVlaD06u5gkDlq', NULL, '2021-10-26 04:56:25', '2021-10-29 04:56:41'),
(1000, 1, 'lemon', 'lemon@gmail.com', '6177d8634bbf0', NULL, '2021-10-26 04:29:11', '$2y$10$z0fYDYdD5tS3vN/KaeSWlOb28Yz1ecb3T/revrTlkl91..FSnOcr2', NULL, '2021-10-26 04:28:51', '2021-10-30 04:29:11'),
(1002, 1, 'bananna', 'banana@gmail.com', '617834df92af2', NULL, '2021-10-26 11:03:48', '$2y$10$z9OeyQWx2ClcQArBTVNEG.GQdihbidmGJp2HuAyobgh1Jz7HL5ZhC', NULL, '2021-10-26 11:03:27', '2021-10-26 11:03:48'),
(1003, 2, 'apple', 'apple@gmail.com', '617ac048842c0', NULL, '2021-10-28 09:23:23', '$2y$10$pdhWQJu/e.J9zcno3m8KQeyT/3ybsNDZgPybgx5Car3WYxYOE620a', NULL, '2021-10-28 09:22:48', '2021-10-28 09:23:23'),
(1004, 2, 'chowdhury', 'chowdhury@gmai.com', '617b58c9a502c', NULL, '2021-10-28 20:13:45', '$2y$10$vlkQAco9YJ15CZol1orB.eDI.Ap7aU6bo24duPiMOWU4EA1Wdc.Li', NULL, '2021-10-28 20:13:29', '2021-10-28 20:13:45');

-- --------------------------------------------------------

--
-- Table structure for table `user_sim`
--

CREATE TABLE `user_sim` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `sim_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_sim`
--

INSERT INTO `user_sim` (`id`, `user_id`, `sim_id`, `created_at`, `updated_at`) VALUES
(1, 1000, 1, NULL, NULL),
(2, 1000, 2, NULL, NULL),
(3, 200, 1, NULL, NULL),
(4, 200, 3, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `actionmovies`
--
ALTER TABLE `actionmovies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chorkioriginals`
--
ALTER TABLE `chorkioriginals`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comedies`
--
ALTER TABLE `comedies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customeraddtowatchlaterlists`
--
ALTER TABLE `customeraddtowatchlaterlists`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customerchatlists`
--
ALTER TABLE `customerchatlists`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `districts`
--
ALTER TABLE `districts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `horrors`
--
ALTER TABLE `horrors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `linebarareachartdatas`
--
ALTER TABLE `linebarareachartdatas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `piechartdatas`
--
ALTER TABLE `piechartdatas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `romances`
--
ALTER TABLE `romances`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `scatterchartdatas`
--
ALTER TABLE `scatterchartdatas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sims`
--
ALTER TABLE `sims`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `toprateds`
--
ALTER TABLE `toprateds`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `trendingnewmovies`
--
ALTER TABLE `trendingnewmovies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `user_sim`
--
ALTER TABLE `user_sim`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `actionmovies`
--
ALTER TABLE `actionmovies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `chorkioriginals`
--
ALTER TABLE `chorkioriginals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `comedies`
--
ALTER TABLE `comedies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `customeraddtowatchlaterlists`
--
ALTER TABLE `customeraddtowatchlaterlists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `customerchatlists`
--
ALTER TABLE `customerchatlists`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `districts`
--
ALTER TABLE `districts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `horrors`
--
ALTER TABLE `horrors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `linebarareachartdatas`
--
ALTER TABLE `linebarareachartdatas`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `piechartdatas`
--
ALTER TABLE `piechartdatas`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `romances`
--
ALTER TABLE `romances`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `scatterchartdatas`
--
ALTER TABLE `scatterchartdatas`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `sims`
--
ALTER TABLE `sims`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `toprateds`
--
ALTER TABLE `toprateds`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `trendingnewmovies`
--
ALTER TABLE `trendingnewmovies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1005;

--
-- AUTO_INCREMENT for table `user_sim`
--
ALTER TABLE `user_sim`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
