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
  image_url3 VARCHAR(255)
);

CREATE TABLE reviews (
  id BIGSERIAL NOT NULL PRIMARY KEY,
    hotels_id BIGINT NOT NULL REFERENCES hotels(id),
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL check(
        rating >= 1
        and rating <= 5
    )
);
select *
from hotels
    left join(
        select hotels_id,
            count(*),
            TRUNCATE(AVG(rating), 1) as average_rating
        from reviews
        group by hotels_id
    ) reviews on hotels.id = reviews.hotels_id order by hotels_id asc;


create table users(
  user_id serial primary key,
  name VARCHAR(50) NOT NULL,
  email varchar(255) unique not null,
  password varchar(255) not null,
  created_at date default current_date
);
    INSERT INTO users( name, email, password) VALUES(  'Test', 'test1@example.com', '111111');
    INSERT INTO users( name, email, password) VALUES(  'Test1', 'test2@example.com', '222222');
    INSERT INTO users( name, email, password) VALUES(  'Test3', 'test3@example.com', ''); 
    INSERT INTO users( name, email, password) VALUES(  'Test4', 'test4@example.com', '444444');
    
    INSERT INTO hotels( name, location, price_range) VALUES( 'MELODY', 'Tel-Aviv', 3);
    INSERT INTO hotels( name, location, price_range) VALUES('TBA Times Square', 'New York', 4);
    INSERT INTO hotels( name, location, price_range) VALUES( 'Metropolis', 'Milano', 3);
    INSERT INTO hotels( name, location, price_range) VALUES( 'AirAstana', 'Astana', 3);
    
    INSERT INTO places( title, where_to_stay, description, image_url1, image_url2, image_url2) VALUES( 'Celebrate holiday season whith magical spring destinations in Europe', 'Sprinkle a dash of novelty on your festivities and embrace the opportunity to celebrate more than just the holiday season this year. In our fast-paced world there is no greater gift than the memories that you create, and the places that you create them. Take the time to indulge in unique customs, inspiring cuisine and breathtaking scenery. Embark on a magical journey as you reconnect with loved ones in Europes most storied destinations this holiday season.', 'https://upload.travelawaits.com/ta/uploads/2022/05/Dutch-windmill-and-colorful-tulips-in-Keukenhof-Garden-scaled-e1651778267949.jpg', );
    INSERT INTO places( title, where_to_stay, description,image_url1, image_url2, image_url3 ) VALUES( 'Walking with Giants in Northern Thailand', 'On a jungle ridge in the Golden Triangle in northern Thailand, the resort is the perfect vantage point to gaze out over the country historic Lanna kingdom, as well as Laos and Myanmar. Lounge on your balcony shaded by lush trees, enjoy indulgent spa treatments surrounded by misty mountains, sip sundowners with a view of the Mekhong river and, all around, catch glimpses of the gentle giants that call the camp their home.');

    INSERT INTO reviews( hotels_id, name, review, rating) VALUES( 5, 'Carl', 'Hotel was awesome', 5);

    SELECT * FROM reviews;
    \d reviews;
    SET client_encoding TO 'UTF8';
    select * from hotels;
    select count(*) from reviews;
    select MIN(rating) from reviews;
    select MAX(rating) from reviews;
    select trunc(AVG(rating), 2) from reviews;
    select name, rating from reviews;
    select name as username, rating as restaurant_rating from reviews;
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
    as average_rating from reviews GROUP BY hotels_id) reviews on hotels.id = reviews.hotels_id order by hotels_id asc;
    select * from hotels left join (select hotels_id, count(*), trunc(AVG(rating), 1) 
    as average_rating from reviews GROUP BY hotels_id) reviews on hotels.id = reviews.hotels_id where hotels_id = 1;
    delete from reviews where hotels_id = 26;

    select email from users group by email;


