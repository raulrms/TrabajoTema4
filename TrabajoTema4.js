//1. Crea cada uno de los diez documentos en una collection llamada libros en la base de datos biblioteca; 
db.libros.insert({"titulo":"MongoDB: The definitive guide","autores":[{"nombre":"Kristina","apellidos":"Chodorow"},{"nombre":"Michael","apellidos":"Dirolf"}],"anio":2010,"prestamo":false})
db.libros.insert({"titulo":"MongoDB in Action","autores":[{"nombre":"Kyle","apellidos":"Banker"}],"anio":2012,"prestamo":false})
db.libros.insert({"titulo":"Professional NoSQL","autores":[{"nombre":"Shashank","apellidos":"Tiwari"}],"anio":2011,"prestamo":true})
db.libros.insert({"titulo":"MongoDB Applied Design Patterns","autores":[{"nombre":"Rick","apellidos":"Copeland"}],"anio":2013,"prestamo":true})
db.libros.insert({"titulo":"NoSQL Distilled","autores":[{"nombre":"Pramod J.","apellidos":"Sadalage"},{"nombre":"Martin","apellidos":"Fowler"}],"anio":2013,"prestamo":false})
db.libros.insert({"titulo":"Algorithms","autores":[{"nombre":"Robert","apellidos":"Sedgewick"}],"anio":1983,"prestamo":true})
db.libros.insert({"titulo":"Algorithms in a Nutshell","autores":[{"nombre":"George","apellidos":"Heineman"}],"anio":2008,"prestamo":true})
db.libros.insert({"titulo":"Introduction to Algorithms","autores":[{"nombre":"Thomas H.","apellidos":"Cormen"}],"anio":1990,"prestamo":true})
db.libros.insert({"titulo":"Algorithms Unlocked","autores":[{"nombre":"Thomas H.","apellidos":"Cormen"}],"anio":2013,"prestamo":false})
db.libros.insert({"titulo":"Compilers: Principles, Techniques, and Tools","autores":[{"nombre":"Alfred V.","apellidos":"Aho"}],"anio":1986,"prestamo":true})
//2. Crea una consulta que muestre la información de todos los documentos en la collection libros;
db.libros.find({})
