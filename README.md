# News Portal (Technical challenge project)
**Developed By: Jeevan Dhakal**
This is the demo project for proshore as a part of technical challenge to fetch news and display it for end users.  All the news were fetched using https://newsapi.org/ APIs.  
It took around 7 hours to complete this project. 

# Installation Processes

 1. Clone the whole project using ssh or https.  `git clone https://github.com/jwn25/ProshoreAssignment.git`
 2. Navigate to project directory and run `composer install`
 3. Copy `.env.example` and rename it to `.env`
 4. Create your database and update credentials on .env file
 5. Run `php artisan migrate` to migrate all the tables.
 6. Run `php artisan key:generate` to generate application key.
 7. Run `php artisan jwt:secret` to intialize jwt package.
 8. Create your account on https://newsapi.org/ and generate news api key.
 9. Set api key on `.env` as `MIX_NEWS_API_KEY=YOUR_API_KEY`
 10. Run `npm install`
 11. Finally run `npm run dev`  to compile all the assets.
 


# Usage

 - Run `php artisan serve` on project directory
 - You will be able to access the system on http://127.0.0.1:8000
 

## Tools Used

 1. **Programming Language :** PHP
 2. **Framework :** Laravel (v 8)
 3. **Javascript Framework :** Vue.js
 5. **Design Framework :** Boostrap 4  

## Screenshots

![enter image description here](https://i.ibb.co/qjs4wts/Screenshot-from-2021-03-06-09-40-21.png)
<br>

![enter image description here](https://i.ibb.co/7VXkJ9S/Screenshot-from-2021-03-06-09-40-26.png)
<br>
![enter image description here](https://i.ibb.co/7tFmg9M/Screenshot-from-2021-03-06-09-41-04.png)
<br>
![enter image description here](https://i.ibb.co/ft18ZZG/Screenshot-from-2021-03-06-09-40-56.png)
<br>
![enter image description here](https://i.ibb.co/p1vHDVR/Screenshot-from-2021-03-06-09-40-42.png)
<br>
![enter image description here](https://i.ibb.co/JvJp2yZ/Screenshot-from-2021-03-06-09-40-33.png)
