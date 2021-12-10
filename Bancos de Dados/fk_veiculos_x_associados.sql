ALTER TABLE `bd_vector_registration`.`veiculos` 
ADD INDEX `fk_associados_idx` (`id_associado` ASC) VISIBLE;
;
ALTER TABLE `bd_vector_registration`.`veiculos` 
ADD CONSTRAINT `fk_associados`
  FOREIGN KEY (`id_associado`)
  REFERENCES `bd_vector_registration`.`associados` (`id_associado`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
