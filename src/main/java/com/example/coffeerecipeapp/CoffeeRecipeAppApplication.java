package com.example.coffeerecipeapp;

import Controllers.CoffeeController;
import java.util.LinkedList;
import java.util.Queue;
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
