CREATE TABLE hotels(
id BIGSERIAL NOT NULL PRIMARY KEY,
name VARCHAR(100) NOT NULL,
location VARCHAR(100) NOT NULL,
price_range INTEGER NOT NULL check(
        price_range >= 1
        and price_range <= 5
    )
);

CREATE TABLE places (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  where_to_stay VARCHAR(255),
  description TEXT NOT NULL,
  image_url1 VARCHAR(255),
  image_url2 VARCHAR(255),
  image_url3 VARCHAR(255),
  created_at date default current_date,
  destination VARCHAR(255)
);

CREATE TABLE reviews (
  id BIGSERIAL NOT NULL PRIMARY KEY,
    hotels_id BIGINT NOT NULL REFERENCES hotels(id) ON DELETE CASCADE ON UPDATE CASCADE,
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL check(
        rating >= 1
        and rating <= 5
    )
);


create table users(
  user_id serial primary key,
  name VARCHAR(50) NOT NULL,
  email varchar(255) unique not null,
  password varchar(255) not null,
  created_at date default current_date

);
    INSERT INTO users( name, email, password) VALUES(  'Test', 'test1@example.com', '111111');
    INSERT INTO users( name, email, password) VALUES(  'Test1', 'test2@example.com', '222222');
    INSERT INTO users( name, email, password) VALUES(  'Test3', 'test3@example.com', '333333'); 
    INSERT INTO users( name, email, password) VALUES(  'Test4', 'test4@example.com', '444444');
     INSERT INTO users( name, email, password, is_admin) VALUES(  'Admin', 'admin@example.com', '9090909090', 'admin');
    
    INSERT INTO hotels( name, location, price_range) VALUES( 'MELODY', 'Tel-Aviv, Israel', 3);
    INSERT INTO hotels( name, location, price_range) VALUES('TBA Times Square', 'New York, USA', 4);
    INSERT INTO hotels( name, location, price_range) VALUES( 'Metropolis', 'Milano, Italy', 4);
    INSERT INTO hotels( name, location, price_range) VALUES( 'AirAstana', 'Astana, Kazakhstan', 3);
    INSERT INTO hotels( name, location, price_range) VALUES( 'Paris Casino', 'Las Vegas, USA', 5);
    INSERT INTO hotels( name, location, price_range) VALUES( 'Amari', 'Phuket, Thailand', 5);
    
    INSERT INTO places( title, where_to_stay, description, image_url1, image_url2, image_url3) VALUES( 'Celebrate holiday season whith magical spring destinations in Europe', 'Find the nearby hotels and check hotel availability by date and prices.', 'Sprinkle a dash of novelty on your festivities and embrace the opportunity to celebrate more than just the holiday season this year. In our fast-paced world there is no greater gift than the memories that you create, and the places that you create them. Take the time to indulge in unique customs, inspiring cuisine and breathtaking scenery. Embark on a magical journey as you reconnect with loved ones in Europes most storied destinations this holiday season.', 'https://upload.travelawaits.com/ta/uploads/2022/05/Dutch-windmill-and-colorful-tulips-in-Keukenhof-Garden-scaled-e1651778267949.jpg', 'https://www.smartertravel.com/wp-content/uploads/2020/02/amsterdam-canal-bike-spring.jpg', 'https://wallpaperaccess.com/full/3632356.jpg');
    INSERT INTO places( title, where_to_stay, description, image_url1, image_url2, image_url3 ) VALUES( 'Walking with Giants in Northern Thailand', 'Find the nearby hotels and check hotel availability by date and prices.', 'On a jungle ridge in the Golden Triangle in northern Thailand, the resort is the perfect vantage point to gaze out over the country historic Lanna kingdom, as well as Laos and Myanmar. Lounge on your balcony shaded by lush trees, enjoy indulgent spa treatments surrounded by misty mountains, sip sundowners with a view of the Mekhong river and, all around, catch glimpses of the gentle giants that call the camp their home.', 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Ayutthaya%2C_Elephants%2C_Thailand.jpg', 'https://assets3.thrillist.com/v1/image/3127246/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70', 'https://lp-cms-production.imgix.net/2021-03/GettyRF_178111904.jpg' );
    INSERT INTO places( title, where_to_stay, description, image_url1, image_url2, image_url3 ) VALUES( 'Amazing solo vacation to Madeira in the 2023 year.', 'If you are looking for a holiday accommodation in Madeira, we show you our top recommended Hotels, Apartments, Resorts, Villas and Hostels, which you can book online. Plus, a car hire will help you get around.', 'Whatever your taste, you will find something that interests you! From wonderful parks and gardens with exotic flowers, seascapes with blue ocean and towering cliffs to rustic villages in quiet valleys to seriously good views and sheer mountains whose lofty peaks are higher than Scotlands — we show you all the places to go!', 'https://images.squarespace-cdn.com/content/v1/5b676719697a98ab3d92e200/1558374586991-1UPK5OPHVWFKOJ3ENZLX/tomas_havel_madeira_blog_3.jpg', 'https://globalgrasshopper.com/wp-content/uploads/2014/01/Top-10-places-to-visit-in-Madeira.jpg', 'https://static.euronews.com/articles/stories/05/99/86/84/1440x810_cmsv2_e365819d-9e49-5d8e-98e3-478bf9a5a2f7-5998684.jpg');
    INSERT INTO places( title, where_to_stay, description, image_url1, image_url2, image_url3 ) VALUES( 'Trip from Paris To Mont Saint Michel', 'Find the nearby hotels and check hotel availability by date and prices.', 'Mont-Saint-Michel is a tidal island and mainland commune positioned in Normandy, France. Welcoming nearly 3 million visitors every year, this striking village boasts oodles of religious and historical importance. Mont Saint-Michel and its bay got designated as a UNESCO World Heritage site in 1979 owing to its commendable value for humanity. Embellished with cobbled streets, quaint shops, ancient buildings, and numerous insta-worthy landscapes Mont Saint Michel is a treat for everyone. The place lies around 358.2 km from Paris that makes it a perfect spot for a day trip. The trip from Paris to Mont Saint Michel could be highly rewarding if you are sorted enough with the itinerary and other essential preparations.', 'https://bigseventravel.com/wp-content/uploads/2020/11/52833015_2522091817819575_4671529116317515776_o-1920x1079.jpg', 'https://citywonders.com/media/20929/paris-mont-st-michel-abbey.jpg', 'https://traveladdicts.net/wp-content/uploads/2009/08/France-Normandy-Mont-St-Michel-town.jpg');
    INSERT INTO places( title, where_to_stay, description, image_url1, image_url2, image_url3 ) VALUES( 'Petra: Inside The Lost City', 'Find the nearby hotels in Petra and check hotel availability by date and prices.', 'The lost city of Petra Jordan is emerging as one of the most popular places to visit in the Middle East. It is relatively safe and affordable, and there are some amazing things to see. Petra was named one of the New 7 Wonders of the World by UNESCO in 2007. The organization described the historic site as “one of the most precious cultural properties of human cultural heritage." Petra also goes by the name  “Red Rose City.” This name stems from the pink color of the stone that the Nabateans carved to build the city. Petra has been a popular film location in Jordan  and is iconic around the world. The "Mummy Returns" and "Indiana Jones" and "Transformers" (second part) and the "Last Crusade" both had their crews shoot a few scenes at Petra. Petra is an incredibly ancient city carved into the rocks in southern Jordan, and the ruins inside Petra Jordan can be explored by walking on foot or riding a camel. or donkey.', 'https://s3.amazonaws.com/factinformer.com/subjects/37/coverPhoto.1&auto=format&fit=crop&w=1350&q=80', 'https://www.atlasandboots.com/wp-content/uploads/2016/04/Visiting-Petra-PW-15.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Petra_Siq%2C_entrance_to_the_ancient_Nabatean_city_of_Petra%2C_Jordan.jpg/2560px-Petra_Siq%2C_entrance_to_the_ancient_Nabatean_city_of_Petra%2C_Jordan.jpg');
    
    
    INSERT INTO reviews( hotels_id, name, review, rating) VALUES( 5, 'Carl', 'Hotel was awesome', 5);
    
    \d reviews;
    SET client_encoding TO 'UTF8';
    
    SELECT * FROM reviews;
    select * from hotels;
    select count(*) from reviews;
    select MIN(rating) from reviews;
    select MAX(rating) from reviews;
    select trunc(AVG(rating), 2) from reviews;
    select name, rating from reviews;
    select name as username, rating as hotel_rating from reviews;
    select AVG(rating) from reviews where hotels_id = 1;
    select trunc(AVG(rating), 2) as avg_rating from reviews where hotels_id = 1;
    select count(rating) from reviews where hotels_id = 1;
    select location, count(location) from hotels group by location;
    select hotels_id, count(hotels_id) from reviews group by hotels_id;
    select hotels_id, AVG(rating), count(rating) from reviews group by hotels_id;
    select * from hotels inner join reviews on hotels.id = reviews.hotels_id;
    select * from hotels  left join reviews on hotels.id = reviews.hotels_id;
    select * from hotels  full outer join reviews on hotels.id = reviews.hotels_id;
    select * from hotels left join (select hotels_id, count(*), trunc(AVG(rating), 1) 
    as average_rating from reviews GROUP BY hotels_id) reviews on hotels.id = reviews.hotels_id order by hotels_id DESC;
    select * from hotels left join (select hotels_id, count(*), trunc(AVG(rating), 1) 
    as average_rating from reviews GROUP BY hotels_id) reviews on hotels.id = reviews.hotels_id where hotels_id = 1;
    delete from reviews where hotels_id = 26;

    select email from users group by email;


select * from hotels where hotels.id not in (select id from reviews);
select destination from places;
SELECT destination FROM places ORDER BY id ASC;
SELECT destination FROM places ORDER BY destination ASC;
 SELECT destination FROM places ORDER BY created_at ASC;
 select distinct destination from places

 ALTER TABLE users ADD COLUMN is_admin BOOLEAN NOT NULL DEFAULT FALSE;