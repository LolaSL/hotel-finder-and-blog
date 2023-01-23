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
            TRUNCATE AVG(rating, 1) as average_rating
        from reviews
        group by hotels_id
    ) reviews on hotels.id = reviews.hotels_id;

    INSERT INTO hotels( name, location, price_range) VALUES( 'MELODY', 'Tel-Aviv', 3);
    INSERT INTO hotels( name, location, price_range) VALUES('TBA Times Square', 'New York', 4);
    INSERT INTO hotels( name, location, price_range) VALUES( 'Metropolis', 'Milano', 3);
    INSERT INTO hotels( name, location, price_range) VALUES( 'AirAstana', 'Astana', 3);

    INSERT INTO reviews( name, review, rating) VALUES( 'Carl', 'Hotel was awesome', 3);