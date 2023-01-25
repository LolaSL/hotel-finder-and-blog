CREATE TABLE hotels(
id BIGSERIAL NOT NULL PRIMARY KEY,
name VARCHAR(100) NOT NULL,
location VARCHAR(100) NOT NULL,
price_range INTEGER NOT NULL check(
        price_range >= 1
        and price_range <= 5
    )
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


CREATE TABLE users(
id BIGSERIAL NOT NULL PRIMARY KEY,
name VARCHAR(200) NOT NULL,
email VARCHAR(200) NOT NULL,
passwords VARCHAR(200) NOT NULL,

price_range INTEGER NOT NULL check(
        price_range >= 1
        and price_range <= 5
    )
);

    INSERT INTO hotels( name, location, price_range) VALUES( 'MELODY', 'Tel-Aviv', 3);
    INSERT INTO hotels( name, location, price_range) VALUES('TBA Times Square', 'New York', 4);
    INSERT INTO hotels( name, location, price_range) VALUES( 'Metropolis', 'Milano', 3);
    INSERT INTO hotels( name, location, price_range) VALUES( 'AirAstana', 'Astana', 3);

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


