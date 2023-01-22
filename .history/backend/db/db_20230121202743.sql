CREATE TABLE hotels(
id BIGSERIAL NOT NULL PRIMARY KEY,
name VARCHAR(100) NOT NULL,
location VARCHAR(100) NOT NULL,
price_range INTEGER NOT NULL
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
            TRUNC(AVG(rating, 1)) as average_rating
        from reviews
        group by hotel_id
    ) reviews on hotels.id = reviews.hotel_id;

    INSERT INTO hotels(hotel_id, name, location, price_range) VALUES(1, 'MELODY', 'Tel',3)