package com.idris.spark.service;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class test {
    public static void  main(String args[]) throws ClassNotFoundException, SQLException {
        Class.forName("org.apache.hive.jdbc.HiveDriver");
        Connection conn= DriverManager.getConnection("jdbc:hive2://localhost:10000/","IDRIS","IDRIS");
        System.out.println("okkk");


    }
}

