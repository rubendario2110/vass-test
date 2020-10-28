-- MySQL Script generated by MySQL Workbench
-- mié 28 oct 2020 14:38:38 -05
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema vass
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema vass
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `vass` ;
USE `vass` ;

-- -----------------------------------------------------
-- Table `vass`.`ciudad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vass`.`ciudad` (
  `idciudad` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idciudad`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `vass`.`sedes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vass`.`sedes` (
  `idsedes` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  `ciudad_idciudad` INT NOT NULL,
  PRIMARY KEY (`idsedes`, `ciudad_idciudad`),
  INDEX `fk_sedes_ciudad1_idx` (`ciudad_idciudad` ASC) VISIBLE,
  CONSTRAINT `fk_sedes_ciudad1`
    FOREIGN KEY (`ciudad_idciudad`)
    REFERENCES `vass`.`ciudad` (`idciudad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `vass`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vass`.`user` (
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `rol` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(250) NOT NULL,
  `sedes_idsedes` INT NOT NULL,
  `ciudad_idciudad` INT NOT NULL,
  PRIMARY KEY (`iduser`, `sedes_idsedes`, `ciudad_idciudad`),
  INDEX `fk_user_sedes_idx` (`sedes_idsedes` ASC) VISIBLE,
  INDEX `fk_user_ciudad1_idx` (`ciudad_idciudad` ASC) VISIBLE,
  CONSTRAINT `fk_user_sedes`
    FOREIGN KEY (`sedes_idsedes`)
    REFERENCES `vass`.`sedes` (`idsedes`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_ciudad1`
    FOREIGN KEY (`ciudad_idciudad`)
    REFERENCES `vass`.`ciudad` (`idciudad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;