package com.idris.spark.service;

import com.fasterxml.jackson.core.type.TypeReference;
/*Importation des packages Spark*/
/* Lorsque vous exécutez SQL à partir d'un autre langage de programmation, les résultats seront renvoyés
 sous forme de Dataset/DataFrame.Vous pouvez également interagir avec l'interface SQL en utilisant la
 ligne de commande ou via JDBC/ODBC..
--> les utilisateurs doivent utiliser Dataset<Row> pour représenter un DataFrame donc importer cette API*/
import org.apache.spark.sql.Dataset;
/* org.apache.spark.sql.Row est un StructType(champs) : fields est une suite de StructFields. Aussi, 
deux champs avec le même nom ne sont pas autorisés.C'est la meme chose que les base de donées structurées.*/
import org.apache.spark.sql.Row;
/* org.apache.spark.sql.SparkSession:SparkSession dans Spark  fournit un support intégré pour les 
fonctionnalités du répertoire de stockage, y compris la possibilité d'écrire des requêtes en utilisant HiveQL,
l'accès aux UDF du répertoire de stockage et la possibilité de lire les données des tables du répertoire de stockage.
Pour utiliser ces fonctions, vous n'avez pas besoin d'avoir une configuration existante du répertoire de stockage
*/
/*tous le reste est pour la configuration de spring boot*/
import org.apache.spark.sql.SparkSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import org.json.simple.JSONObject;
import scala.collection.JavaConverters;
import scala.collection.Seq;


import java.util.*;
//Autoriser l'appel de cette API part les adresses suivantes .
@CrossOrigin(origins = { "http://localhost:3000","http://localhost:3001", "http://localhost:3002",  "http://localhost:4200" })
@RestController
public class EmployeRestService {


    @GetMapping(value = "test")
    public ArrayList<JSONObject> get() {
        JSONObject obj = new JSONObject();
        //Création l'object Json à tronsformer au frond End.
        ArrayList<JSONObject> objj = new ArrayList<JSONObject>();
        //Creér Une session Spark
        SparkSession spark = SparkSession
                .builder()
                .appName("Java Spark SQL basic example")
                .config("spark.master", "local[2]")
                .getOrCreate();
        Dataset<Row> df = spark.read().json("src/main/resources/people.json");
        List<Row> rows = df.collectAsList();
        //Création de la view  employes 
        df.createOrReplaceTempView("people");
        //Retourner le liste des tous les employes
        Dataset<Row> sqlDF = spark.sql("SELECT * FROM people where id=1");
        //Visualiser les données de la table dans le console.
        sqlDF.show();
        int i=0;
        //Transformation des colonnes en objets json qui sont comprise par le frond end
        for(Row row: rows) {
            JSONObject objjj = new JSONObject();
            String stt= ""+row;
            stt=stt.substring(1,stt.length() - 1);
            String[] list=stt.split(",");

            objjj.put("name",list[3]);
            objjj.put("id",list[2]);
            objjj.put("prenom",list[4]);
            objjj.put("dept",list[0]);
            objjj.put("fonction",list[1]);
            objjj.put("salaire",list[5]);
            System.out.println("idris"+objjj);
            objj.add(objjj);
            i++;

        }

        // Displays the content of the DataFrame to stdout
        df.show();
        System.out.println("oooookkkk");


        String str="";


        return  objj;

    }
    //Création de service de filtrage des données avec le type et mot à chercher.
    @GetMapping(value = "test/{type}/{id}")
    public ArrayList<JSONObject> gett(@PathVariable("type") String type,@PathVariable("id") String id) {
        JSONObject obj = new JSONObject();
        ArrayList<JSONObject> objj = new ArrayList<JSONObject>();e
        //Créer une session Spark
        SparkSession spark = SparkSession
                .builder()
                .appName("Java Spark SQL basic example")
                .config("spark.master", "local[2]")
                .getOrCreate();
        Dataset<Row> df = spark.read().json("src/main/resources/people.json");
        //Création de la view  employes 
        df.createOrReplaceTempView("people");
        Dataset<Row> sqlDF = spark.sql("SELECT * FROM people where "+type+" like '%"+id+"%'");
        //Création de la view  employes après le filre
        sqlDF.show();
        List<Row> rows = sqlDF.collectAsList();
        int i=0;
        for(Row row: rows) {
            JSONObject objjj = new JSONObject();
            String stt= ""+row;
            stt=stt.substring(1,stt.length() - 1);
            String[] list=stt.split(",");

            objjj.put("name",list[3]);
            objjj.put("id",list[2]);
            objjj.put("prenom",list[4]);
            objjj.put("dept",list[0]);
            objjj.put("fonction",list[1]);
            objjj.put("salaire",list[5]);
            System.out.println("idris"+objjj);
            objj.add(objjj);
            i++;

        }

         //Création de la view  employes 
        df.show();
        System.out.println("kiiiiii");


        String str="";


        return  objj;

    }



    }



