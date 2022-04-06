package main

import (
	"fmt"

	"github.com/amati-tiru-modifikasi/todolist/database"
	"github.com/amati-tiru-modifikasi/todolist/models"
	"github.com/gofiber/fiber/v2"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func initDatabase() {
	var err error
	dsn := "host=localhost user=postgres password=toor dbname=todos port=5432 sslmode=disable TimeZone=Asia/Jakarta"
	database.DBConn, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("Gagal koneksi")
	}
	fmt.Println("Database terkoneksi")
	database.DBConn.AutoMigrate(&models.Todo{})
	fmt.Println("Migrated DB")
}

func setupRoutes(app *fiber.App) {
	app.Get("/todos", models.GetTodos)
	app.Post("/todos", models.CrateTodo)
	app.Get("/todos/:id", models.GetTodoById)
	app.Put("/todos/:id", models.UpdateTodo)
}

func main() {
	app := fiber.New()
	initDatabase()
	setupRoutes(app)
	app.Listen(":8000")
}
