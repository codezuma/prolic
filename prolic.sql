-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 17, 2022 at 02:51 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `prolic`
--

-- --------------------------------------------------------

--
-- Table structure for table `otp`
--

CREATE TABLE `otp` (
  `email` varchar(255) DEFAULT NULL,
  `otp` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `otp`
--

INSERT INTO `otp` (`email`, `otp`, `type`) VALUES
('patidarchandresh21@gmail.com', '9348', 'signup'),
('patidarchandre54@gmail.com', '5248', 'signup'),
('vikaspatidarbadgi@gmail.com', '5731', 'signup'),
('puspitaadak9876@gmail.com', '6866', 'signup');

-- --------------------------------------------------------

--
-- Table structure for table `untitled_table`
--

CREATE TABLE `untitled_table` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `storage_used` int(255) DEFAULT NULL,
  `storage_available` varchar(255) DEFAULT NULL,
  `subscription` varchar(255) DEFAULT NULL,
  `creataed_time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user1`
--

CREATE TABLE `user1` (
  `id` int(11) NOT NULL,
  `file_name` varchar(255) NOT NULL,
  `type` varchar(10) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `upload_date` date DEFAULT curdate(),
  `opened_times` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user2`
--

CREATE TABLE `user2` (
  `id` int(11) NOT NULL,
  `file_name` varchar(255) NOT NULL,
  `type` varchar(10) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `upload_date` date DEFAULT curdate(),
  `opened_times` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user2`
--

INSERT INTO `user2` (`id`, `file_name`, `type`, `path`, `size`, `upload_date`, `opened_times`) VALUES
(1, 'Screenshot (14).png', 'image/png', './drive/user_2/Screenshot (14).png', 858742, '2021-12-12', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user3`
--

CREATE TABLE `user3` (
  `id` int(11) NOT NULL,
  `file_name` varchar(255) NOT NULL,
  `type` varchar(10) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `upload_date` date DEFAULT curdate(),
  `opened_times` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user3`
--

INSERT INTO `user3` (`id`, `file_name`, `type`, `path`, `size`, `upload_date`, `opened_times`) VALUES
(1, 'IMG_20200901_121127.jpg', 'image/jpeg', './drive/user_3/IMG_20200901_121127.jpg', 1966291, '2021-12-12', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user4`
--

CREATE TABLE `user4` (
  `id` int(11) NOT NULL,
  `file_name` varchar(255) NOT NULL,
  `type` varchar(10) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `upload_date` date DEFAULT curdate(),
  `opened_times` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `created_time` timestamp NOT NULL DEFAULT current_timestamp(),
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `storage_used` varchar(255) DEFAULT NULL,
  `storage_available` int(255) DEFAULT NULL,
  `subscription` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `created_time`, `email`, `password`, `name`, `storage_used`, `storage_available`, `subscription`) VALUES
(1, '2021-12-07 09:50:38', 'patidarchandresh21@gmail.com', 'iamchanp', NULL, NULL, NULL, NULL),
(2, '2021-12-12 13:20:19', 'patidarchandre54@gmail.com', 'Inamkjbsdf', NULL, NULL, NULL, NULL),
(3, '2021-12-12 13:23:52', 'vikaspatidarbadgi@gmail.com', '123456', NULL, NULL, NULL, NULL),
(4, '2021-12-13 11:26:36', 'puspitaadak9876@gmail.com', '123456', NULL, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `untitled_table`
--
ALTER TABLE `untitled_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user1`
--
ALTER TABLE `user1`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user2`
--
ALTER TABLE `user2`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user3`
--
ALTER TABLE `user3`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user4`
--
ALTER TABLE `user4`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `untitled_table`
--
ALTER TABLE `untitled_table`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user1`
--
ALTER TABLE `user1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user2`
--
ALTER TABLE `user2`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user3`
--
ALTER TABLE `user3`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user4`
--
ALTER TABLE `user4`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
