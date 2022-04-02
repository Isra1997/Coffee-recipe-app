package service;

import models.Coffee;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.web.client.RestTemplate;

public class HotCoffeeDrinks {

  private final RestTemplate restTemplate;

  public HotCoffeeDrinks(RestTemplateBuilder restTemplateBuilder) {
    this.restTemplate = restTemplateBuilder.build();
  }
  public Coffee[] getHotCoffees() {
    String url = "https://api.sampleapis.com/coffee/hot";
    return this.restTemplate.getForObject(url, Coffee[].class);
  }
}
