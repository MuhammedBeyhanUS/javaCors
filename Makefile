all: run-backend run-frontend

run-frontend:
	npm --prefix ./frontend install ./frontend
	cd frontend && npx nx serve

run-backend:
	mvn clean package -DskipTests;
	java -jar target/cors-0.0.1-SNAPSHOT.jar &

down:
	./kill-server

	

