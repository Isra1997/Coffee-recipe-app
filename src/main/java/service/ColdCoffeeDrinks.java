package service;

import models.Coffee;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.web.client.RestTemplate;

public class ColdCoffeeDrinks {
  private final RestTemplate restTemplate;

  public ColdCoffeeDrinks(RestTemplateBuilder restTemplateBuilder) {
    this.restTemplate = restTemplateBuilder.build();
  }

  public Coffee[] getIceCoffees(){
    String url = "https://api.sampleapis.com/coffee/iced";
    return this.restTemplate.getForObject(url, Coffee[].class);
  }
}
