# Project - CMS Restaurant 🍽️

> "You are what you eat -> You are what you code"
---------------

- Repository : Free to choose, find a nice name for your restaurant
- Type of challenge : `Learning a CMS, consolidating PHP` 
- Duration : `3 weeks`
- Deadline : `d/mm/yy H:i AM/PM`
- Deployment strategy : Free to choose
- Team challenge : `Duo`

## Learning objectives

At the end of this challenge you should be able to :

- Build your own theme for a CMS
- Create a fancy client interface with custom fields
- Follow the project manager's instructions
- Follow a design pixel perfect

## The Mission

The Chef has a pleasant restaurant with a very revolutionary concept. His concept is to combine the two extreme types of food: junk food and very healthy food ! :hamburger: + :green_apple:

He has a lot of customers in his restaurant, so it’s time for him to spread his cooking skills through the country. That’s why he will open 2 brand new branches.

To help him to become known and to implement new services for his customers, he needs a website.

To reach his objectives, he contacted a **project manager** who also is a professional designer, called Casey Ryback. After weeks of work, they finished the design and decided on the features of the future website.

It's at this moment you take action ! Casey calls your team to make the project. He provides you magnificent layouts and gives you precises instructions.

## Client's request

The Chef would like to edit the content of his website regularly because he wants to change his menus often and create new recipes with his collaborators. That’s why a CMS is the best solution to provide for him.

It does not matter what CMS you use, as long as the user interface is easy to understand, and the fields to fill in are clear.

:warning: **This project needs to be customer-oriented. The dashboard for the client has to be clear, easy to use and match the design.**

To help you, Casey Ryback gives you the license _ACF PRO_, a WordPress plugin that will provide you the possibility to create _custom fields_.

Due to the high standards of the design, the client would like you to respect it strictly.

## Resources

The design with the different formats, as well as the images and SVG's, are located inside the folder named [assets](./assets/).

### Design

The different design formats provided are in Desktop, Tablet portrait (768px) and Mobile (320px).

---

## Instructions

Here the list of instructions received.

They show the contents types (pages, posts, categories), as well as the customs fields to create.

### INFO

First of all, provide a field group so that the client can fill in the information about the **main restaurant** :

- Address
- Phone
- Email
- Links social medias : Facebook, Twitter, Instagram, Linkedin
- Open Hours

This information will be written in the **footer**. Make sure that the client will fill these fields atleast once.

### HOMEPAGE

For the homepage, use the _front-page.php_ template.

**Custom fields :**

    *** Banner top  ***
    	* Subtitle + Main Title + Img + Intern Link
    	* 3 X Icon + Title + Text
    *** Intro ***
    	* Left : Image
    	* Right : Title + Subtitle + Text + Signature (Subtitle + title)
    *** 3 Restaurants ***
    	See the posts Restaurants.
    *** Our Menu ***
    	* 4 X Img
    	* Subtitle + Title + + Text + Intern Link
    *** Testimony ***
    	* Repeater :
    		- Image
    		- Text
    		- Name
    *** Recipes Blog ***
    	See Posts Recipes

### POSTS RESTAURANTS

The restaurants are like Posts types. **Each restaurant page is a post**. In the Front-page, you will have to call the posts restaurant in order to call them.

**Custom fields :**

    *** Banner top  ***
    	Subtitle + Main Title + Img + Intern Link
    *** Banner Presentation ***
    	Subtitle + Title
    	Repeater :
    		- Image + Subtitle + Title + Wysiwig
    	(The first repeater text has to be called in the Front-page presentation)
    *** Location ***
    	Subtitle + Title
    	Map (for the map you can just copy the map image ;)), but if you're brave, you can download a plugin to set up a map and link it with Leaflet.
    *** Reservation ***
    	Subtitle + Title + Image
    *** Our Menu ***
    	Take the fields from the front-page

> ☝️ **NOTE:** There is also a form to allow customers to make reservations. There is no specific information for that part, but you're a PHP developer, you know how to deal with it.

### PAGE MENU

**Custom fields :**

    *** Banner top  ***
    	Subtitle + Main Title + Img + Intern Link
    *** The Menu ***
    	Subtitle + Title
    	Repeater :
    		- Title
    		- Repeater :
    			- Title + Text + Price

So, here, we have a double repeater.

Some of dishes are special selections from The Chef. You have to give the possibility for The Chef to select which dish he wants to highlight.

### SINGLE RECIPE

You have to create a post type called "recipes". **A recipe must have one category.** 
In the design, we write categories in front of the cutlery icon.
The client could create any category he wants.

**Custom fields :**

    *** Banner top  ***
    	Category
    	Text
    	Image
    *** Ingredients ***
    	Wysiwyg
    *** Instructions ***
    	Repeater :
    		- Wysiwyg
    		- Image (optionnal)
    	(NB: on the left of each row of the repeater, you must add a number in order to separate each step of the recipe)

On the left of this page, you have social icons which will allow to share the recipe to social medias.

### ARCHIVE RECIPES

There are no custom fields for this page. Take the information from singles recipes.

The posts have to be displayed in anti-chronological order.

This page has a pagination system. Display 5 recipes per page.

Display the categories at the top. They should be links that we can select to sort by category.

> 👉 **NOTE:** Instead of using a `archive-recipes.php` template. I advise you to use `category-recipes.php` template ([Category templates](https://codex.wordpress.org/Category_Templates)).


### MENU HEADER

- The Title "DEV RESTAURANT" has to redirect to the homepage
- The house icon has to redirect to the homepage
- "Our Restaurants" has to redirect to the homepage, at section "our restaurant"
- The link "Order" is not active for now.

### Users

You will not give your administrator access to The Chef, you have to create his **editor account**.

You must also create a special type of user, this user can only add a recipe post.

## Deployment

You can deploy this project online. The design is right free.

## BONUS

Later The Chef would like to have a e-commerce part, where the customers could order their dishes and being delivered. But this part is not in his budget right now.

## Constraints

- You don't have constraints about which CMS you have to use. It could be WordPress, Drupal, Strapi... The only advantage is that with WordPress you can benefit a _ACF Pro_ licence provided by BeCode.

## Advice :shipit:

- Begin by creating your pages, your post types (why not use the plugin CPT UI for that?) and option page in order to make the menu and the footer.
- Check the design ! You have some repetitive parts, so don't repeat yourself, keep your code in "template-parts".
- Take attention to have a good HTML structure. Think in "sections".
- When you make the CSS, think to zoom and de-zoom to see if everything is ok.
- Have fun !

![chaton](chaton.gif)

## Colors

- white :#FFF
- black : #292929
- grey : #F5F5F5

## Font

All text are in Poppins. You can dowload it on [Google fonts](https://fonts.google.com/).

There are lots of different font size, we will not give you all. Try to match with the design.

But here some indications :

- Normal text :
  - font-size: 16px
  - font-weigth: light
- Subtitles (in the page) :
  - font-size: 42px
  - font-weigth: regular
- Title (in the page) :
  - font-size: 46px
  - font-weigth: bold
- Main title at the top :
  - font-size: 100px
  - font-weigth: SemiBold
- Main subtitle at the top :
  - font-size: 60px
  - font-weigth: regular
- Menu :
  - font-size: 16px
  - font-weigth: medium
