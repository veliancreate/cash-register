![Build Status](https://travis-ci.org/veliancreate/cash-register.svg?branch=master) [![Code Climate](https://codeclimate.com/github/veliancreate/cash-register/badges/gpa.svg)](https://codeclimate.com/github/veliancreate/cash-register)

I built this till as part of a tech-test challenge at Makers Academy. I decided to use Sinatra to practice my Sinatra and Ruby skills.

Technology Used
---------------

Sinatra, Ruby, JSON, JQuery, RSpec, Capybara, Rubocop, Travis CI, Hound.

## Lessons learned

I completed this challenge by using mainly server-side techniques to update the view. However, in hindsight it would have been preferable to use two-way data binding technology with Angular JS, or even websockets. 

Screenshot
----------

![screenshot](screenshot.png)

Till tech test
==============

We want to sell tills to local hipster coffee shop who are finally embracing the 21st century. We need a new till to replace their vintage machines - unfortunately, hipster staff are too cool to learn a new system, so we need you to build something that they will understand.

Specification
-------------

This is what a sample receipt looks like:

![a receipt](public/images/receipt.jpg)


Version 1
---------

Implement a system that contains the business logic to produce receipts similar to this, based on a `json` price list and test orders. A sample `.json` file has been provided with the list of products sold at this particular coffee shop. 

Here are some sample orders you can try - whether you use this information is up to you:

> **Jane**  
> 2 x Cafe Latte  
> 1 x Blueberry Muffin  
> 1 x Choc Mudcake  
>
> **John**  
> 4 x Americano  
> 2 x Tiramisu  
> 5 x Blueberry Muffin  

Your receipt must calculate and show the correct amount of tax (in this shop's case, 8.64%), as well as correct line totals and total amount. Do not worry about calculating discounts or change yet. Consider what output formats may be suitable.

Version 2
---------

- Add functionality to take payment and calculate correct change.  
- Add functionality to handle discounts - in this example, a 5% discount on orders over $50, and a 10% muffin discount.

Version 3
---------

Implement an user interface that can actually be used as a till.

You may use whatever technologies you see fit.
