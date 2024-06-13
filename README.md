# Shopping List Application

## Architektur
Die Anwendung besteht aus drei getrennten Services, die in Docker-Containern laufen:
1. Containerisierung: Docker
2. Frontend: React-basiertes Web-Frontend. Erreichbar auf Port 3000
3. Backend: Spring Boot-basiertes RESTful API-Backend. Erreichbar auf Port 8080
4. Datenbank: MongoDB-Datenbank zur Speicherung der Daten. Erreichbar auf Port 27017, Zugriff über das Terminal über folgende Befehle: 

- docker exec -it shoppinglist-mongo mongo -u shopping -p shopping --authenticationDatabase admin
- show dbs
- use einkaufsliste
- show collections
- db.items.find().pretty()
