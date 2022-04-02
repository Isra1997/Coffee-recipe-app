package com.example.coffeerecipeapp;

import Controllers.CoffeeController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackageClasses = CoffeeController.class)
public class CoffeeRecipeAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(CoffeeRecipeAppApplication.class, args);
	}

}
