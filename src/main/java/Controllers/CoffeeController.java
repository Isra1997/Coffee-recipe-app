package Controllers;

import models.Coffee;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import service.ColdCoffeeDrinks;
import service.HotCoffeeDrinks;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/coffee")
public class CoffeeController {
  @GetMapping("/hot")
  public Coffee[] getHotCoffees(){
    HotCoffeeDrinks hotCoffeeDrinks = new HotCoffeeDrinks(new RestTemplateBuilder());
    return  hotCoffeeDrinks.getHotCoffees();
  }


  @GetMapping("/cold")
  public Coffee[] getIcedCoffees(){
    ColdCoffeeDrinks coldCoffeeDrinks = new ColdCoffeeDrinks(new RestTemplateBuilder());
    return  coldCoffeeDrinks.getIceCoffees();
  }
}
