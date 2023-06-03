-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 03, 2023 at 09:52 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_seru`
--

-- --------------------------------------------------------

--
-- Table structure for table `pricelists`
--

CREATE TABLE `pricelists` (
  `id` int(11) NOT NULL,
  `year_id` int(11) NOT NULL,
  `model_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pricelists`
--

INSERT INTO `pricelists` (`id`, `year_id`, `model_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, '2023-06-03 12:34:32', '2023-06-03 12:34:32'),
(2, 2, 2, '2023-06-03 12:34:32', '2023-06-03 12:34:32'),
(3, 3, 3, '2023-06-03 12:34:32', '2023-06-03 12:34:32'),
(4, 4, 4, '2023-06-03 12:34:32', '2023-06-03 12:34:32'),
(5, 5, 5, '2023-06-03 12:34:32', '2023-06-03 12:34:32');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `is_admin` tinyint(1) DEFAULT 0,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `is_admin`, `created_at`, `updated_at`, `email`, `password`) VALUES
(3, 'Iqsan', 1, '2023-06-02 12:53:09', '2023-06-02 12:53:09', 'iqsan@gmail.com', '$2b$10$7GeAFzMKn9fmIyd8Y7kN8OWaJMozYvojP7vXaq4PbcPKRUSpt4uNK'),
(4, 'Samsul', 0, '2023-06-03 07:21:58', '2023-06-03 07:21:58', 'samsul@gmail.com', '$2b$10$t9PURiGjkwiD/KouWqyY8eav/RgDrNShfMEzaayCpGP/v4Lb7IDdy');

-- --------------------------------------------------------

--
-- Table structure for table `vehiclebrands`
--

CREATE TABLE `vehiclebrands` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vehiclebrands`
--

INSERT INTO `vehiclebrands` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'SUV', '2023-06-03 12:32:12', '2023-06-03 12:32:12'),
(2, 'Sedan', '2023-06-03 12:32:12', '2023-06-03 12:32:12'),
(3, 'Honda', '2023-06-03 12:32:12', '2023-06-03 12:32:12'),
(4, 'MPV', '2023-06-03 12:32:12', '2023-06-03 12:32:12'),
(5, 'BMW', '2023-06-03 12:32:12', '2023-06-03 12:32:12');

-- --------------------------------------------------------

--
-- Table structure for table `vehiclemodels`
--

CREATE TABLE `vehiclemodels` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vehiclemodels`
--

INSERT INTO `vehiclemodels` (`id`, `name`, `type_id`, `created_at`, `updated_at`) VALUES
(1, 'RAV4', 1, '2023-06-03 12:32:12', '2023-06-03 12:32:12'),
(2, 'Camry', 2, '2023-06-03 12:32:12', '2023-06-03 12:32:12'),
(3, 'Civic', 3, '2023-06-03 12:32:12', '2023-06-03 12:32:12'),
(4, 'Accord', 4, '2023-06-03 12:32:12', '2023-06-03 12:32:12'),
(5, 'GT-R', 5, '2023-06-03 12:32:12', '2023-06-03 12:32:12');

-- --------------------------------------------------------

--
-- Table structure for table `vehicletypes`
--

CREATE TABLE `vehicletypes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `brand_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vehicletypes`
--

INSERT INTO `vehicletypes` (`id`, `name`, `brand_id`, `created_at`, `updated_at`) VALUES
(1, 'SUV', 1, '2023-06-03 12:32:12', '2023-06-03 12:32:12'),
(2, 'Sedan', 1, '2023-06-03 12:32:12', '2023-06-03 12:32:12'),
(3, 'Honda', 2, '2023-06-03 12:32:12', '2023-06-03 12:32:12'),
(4, 'MPV', 2, '2023-06-03 12:32:12', '2023-06-03 12:32:12'),
(5, 'BMW', 3, '2023-06-03 12:32:12', '2023-06-03 12:32:12');

-- --------------------------------------------------------

--
-- Table structure for table `vehicleyears`
--

CREATE TABLE `vehicleyears` (
  `id` int(11) NOT NULL,
  `year` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vehicleyears`
--

INSERT INTO `vehicleyears` (`id`, `year`, `created_at`, `updated_at`) VALUES
(1, '2020', '2023-06-03 12:33:04', '2023-06-03 12:33:04'),
(2, '2021', '2023-06-03 12:33:04', '2023-06-03 12:33:04'),
(3, '2022', '2023-06-03 12:33:04', '2023-06-03 12:33:04'),
(4, '2023', '2023-06-03 12:33:04', '2023-06-03 12:33:04'),
(5, '2024', '2023-06-03 12:33:04', '2023-06-03 12:33:04');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pricelists`
--
ALTER TABLE `pricelists`
  ADD PRIMARY KEY (`id`),
  ADD KEY `year_id` (`year_id`),
  ADD KEY `model_id` (`model_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `email_2` (`email`),
  ADD UNIQUE KEY `email_3` (`email`),
  ADD UNIQUE KEY `email_4` (`email`),
  ADD UNIQUE KEY `email_5` (`email`),
  ADD UNIQUE KEY `email_6` (`email`),
  ADD UNIQUE KEY `email_7` (`email`),
  ADD UNIQUE KEY `email_8` (`email`),
  ADD UNIQUE KEY `email_9` (`email`),
  ADD UNIQUE KEY `email_10` (`email`),
  ADD UNIQUE KEY `email_11` (`email`),
  ADD UNIQUE KEY `email_12` (`email`),
  ADD UNIQUE KEY `email_13` (`email`),
  ADD UNIQUE KEY `email_14` (`email`);

--
-- Indexes for table `vehiclebrands`
--
ALTER TABLE `vehiclebrands`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vehiclemodels`
--
ALTER TABLE `vehiclemodels`
  ADD PRIMARY KEY (`id`),
  ADD KEY `type_id` (`type_id`);

--
-- Indexes for table `vehicletypes`
--
ALTER TABLE `vehicletypes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `brand_id` (`brand_id`);

--
-- Indexes for table `vehicleyears`
--
ALTER TABLE `vehicleyears`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pricelists`
--
ALTER TABLE `pricelists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `vehiclebrands`
--
ALTER TABLE `vehiclebrands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `vehiclemodels`
--
ALTER TABLE `vehiclemodels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `vehicletypes`
--
ALTER TABLE `vehicletypes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `vehicleyears`
--
ALTER TABLE `vehicleyears`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `pricelists`
--
ALTER TABLE `pricelists`
  ADD CONSTRAINT `pricelists_ibfk_1` FOREIGN KEY (`year_id`) REFERENCES `vehicleyears` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pricelists_ibfk_2` FOREIGN KEY (`model_id`) REFERENCES `vehiclemodels` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `vehiclemodels`
--
ALTER TABLE `vehiclemodels`
  ADD CONSTRAINT `vehiclemodels_ibfk_1` FOREIGN KEY (`type_id`) REFERENCES `vehicletypes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `vehicletypes`
--
ALTER TABLE `vehicletypes`
  ADD CONSTRAINT `vehicletypes_ibfk_1` FOREIGN KEY (`brand_id`) REFERENCES `vehiclebrands` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
