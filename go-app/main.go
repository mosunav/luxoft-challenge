package main

import (
	"database/sql"
	"log"
	"net/http"

	"github.com/go-chi/chi"
	"github.com/go-chi/chi/middleware"
	"github.com/go-chi/cors"
	_ "github.com/lib/pq"
)

const (
	DatabaseURL = "postgres://postgres@localhost:5432/outdoorsy?sslmode=disable"
)

func main() {
	r := chi.NewRouter()
	r.Use(middleware.Logger)

	// Basic CORS
	// for more ideas, see: https://developer.github.com/v3/#cross-origin-resource-sharing
	r.Use(cors.Handler(cors.Options{
		AllowedOrigins:   []string{"*"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
		ExposedHeaders:   []string{"Link"},
		AllowCredentials: false,
		MaxAge:           300, // Maximum value not ignored by any of major browsers
	}))

	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("welcome"))
	})

	r.Get("/ping", func(w http.ResponseWriter, r *http.Request) {

		db, err := getDatabaseConnection()
		if err != nil {
			w.Write([]byte(err.Error()))
			return
		}

		err = db.Ping()
		if err != nil {
			w.Write([]byte(err.Error()))
			return
		}

		w.Write([]byte("pong"))
	})

	http.ListenAndServe(":3000", r)
}

func getDatabaseConnection() (*sql.DB, error) {

	// Connect to the initially provided DSN
	dbConn, err := sql.Open("postgres", DatabaseURL)
	if err != nil {
		log.Println(err)
		return nil, err
	}

	return dbConn, nil
}
