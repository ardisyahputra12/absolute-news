-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 22 Jan 2022 pada 08.20
-- Versi server: 10.4.19-MariaDB
-- Versi PHP: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `absolute_news`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `logins`
--

CREATE TABLE `logins` (
  `id` int(11) NOT NULL,
  `user_name` varchar(255) DEFAULT 'Unknown',
  `user_email` varchar(255) DEFAULT NULL,
  `user_password` varchar(255) DEFAULT NULL,
  `admin` tinyint(1) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `logins`
--

INSERT INTO `logins` (`id`, `user_name`, `user_email`, `user_password`, `admin`, `createdAt`, `updatedAt`) VALUES
(1, 'Admin01', 'admin01@gmail.com', 'admin01', 1, '2022-01-21 07:57:54', '2022-01-21 07:57:54'),
(2, 'Ardi Saputra', 'ardi@gmail.com', 'ardi', 0, '2022-01-21 08:00:49', '2022-01-21 08:00:49'),
(3, 'Indra Gunawan Gulo', 'indra@gmail.com', 'indra', 0, '2022-01-21 08:01:20', '2022-01-21 08:01:20'),
(4, 'Fitrah P.U Bangun', 'fitrah@gmail.com', 'fitrah', 0, '2022-01-21 08:01:59', '2022-01-21 08:01:59'),
(10, 'Neymar', 'neymar@gmail.com', 'neymar', 0, '2022-01-21 17:48:40', '2022-01-21 17:48:40');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `logins`
--
ALTER TABLE `logins`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `logins`
--
ALTER TABLE `logins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
