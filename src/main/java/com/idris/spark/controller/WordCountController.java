package com.idris.spark.controller;

import com.idris.spark.service.WordCountService;
import org.apache.spark.sql.DataFrameReader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import org.apache.spark.sql.SparkSession;
import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;

@RestController
public class WordCountController {

    @Autowired
    WordCountService service;

    @RequestMapping(method = RequestMethod.POST, path = "/wordcount")
    public Map<String, Long> count(@RequestParam(required = true) String words) {
        List<String> wordList = Arrays.asList(words.split("\\|"));
        return service.getCount(wordList);
    }

    @RequestMapping(method = RequestMethod.GET, path = "/wordcount")
    public  String countt() {
        SparkSession spark = SparkSession
                .builder()
                .appName("My application name")
                .config("option name", "option value")
                .master("dse://1.1.1.1?connection.host=1.1.2.2,1.1.3.3")
                .getOrCreate();
//        Dataset<Row> df = spark.read().json("./people.json");
//        df.show();
        Dataset personnes=spark.sql(("select * from personne.personne"));

        System.out.println("okk");

        return "okk";

    }

}
