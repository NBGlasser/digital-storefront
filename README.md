# digital-storefront
![]](screen.png)
## What I set out to do
For this assignment I was trying to make a digital storefront that dynamically updates and logs user input.

## Tools used
* Node
* MySQL

## What I did
To start off, I made an SQL scheme that logged various items' name, department, price, and quantity to a singular table and populated it with products. Then to start out with my JavaScript I initialized variables requiring MySQL and Inquirer, then I initialized a connection to the SQL database. After that I looped through the database to console log all the products and then used Inquirer to ask the user which one and how much they wanted. If quantity of items the user selected was lower than the number of items in stock, the items would be subtracted from the database, if not the user would be informed that there weren't enough items in stock. Lastly, I set it up so that the prices would spike after every transaction attempt because the store is the Weimar-ket and that sounded funny to me when I started the project.

## Issues and bugs
Most of the bugs I encountered on this assignment were either scoping related, or incorrect dot notation.
