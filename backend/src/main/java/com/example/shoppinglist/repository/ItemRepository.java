package com.example.shoppinglist.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.shoppinglist.model.Item;

public interface ItemRepository extends MongoRepository<Item, String> {
}
