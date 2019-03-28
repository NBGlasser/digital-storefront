var inquirer = require("inquirer");
var mysql = require("mysql");
var quantity;


var input = function () {
            connection.query("SELECT * FROM items", function (err, res) {
                //var allProducts = [];
                for(var j = 0; j < res.length; j++){
                    //allProducts.push()
                    console.log(res[j].id + ") | Item: " + res[j].name + " | Price: " + res[j].price + "ℳ")
                    console.log("=============================================")
                }
                
                
                if (err) throw err;
                inquirer.prompt([
                    {
                        name: "product",
                        message: "Welcome to the Weimar-ket, your one stop shop for low, low prices(for now). What would you like to buy?",
                        type: "rawlist",
                        choices: res
                    },
                    {
                        name: "quantity",
                        message: "how many would you like?",
                        type: "input",
                        validate: function (input){
                            if(parseInt(input)){
                                return true
                            }
                            else{
                                return false
                            }
                        }
                    }
                    
                ]).then(function (response) {
                    for(var i = 0; i < res.length; i++){
                        if(response.product === res[i].name){
                            quantity = (res[i].quantity)
                        }
                    }
                    
                    var place = (response.product)
                    
                    if (parseInt(response.quantity) < quantity) {
                         connection.query(
                             "UPDATE items SET ? WHERE ?",
                             [
                                 {
                                     quantity: (quantity - parseInt(response.quantity))
                                 },
                                 {
                                     name: place

                                 }

                             ],
                             
                             )
                             
                    

                    }
                    else {
                        console.log("Sorry, we don't have enough")
                    }
                    for(var k = 0; k < res.length; k++){
                        connection.query(
                            "UPDATE items SET ? WHERE ?",
                            [
                                {
                                    price: (res[k].price * 1.5)
                                },
                                {
                                    name: res[k].name

                                }
    
                            ],
                            
                            )
                    }
                    console.log("Have a nice day!")
                    connection.end();
                })
                 
            });
        }
        
        
    
var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "password",
    database: "store_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    input();
});
