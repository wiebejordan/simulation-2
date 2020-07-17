create table house(
    id serial primary key,
    name varchar(30),
    address varchar(100),
    city varchar(100),
    state varchar(2),
    zip integer,
    img text,
    mortgage decimal,
    rent decimal
);

insert into house
(name, address, city, state, zip, img, mortgage, rent)
values
('Jordo', '1234 Main St', 'SLC', 'UT', 84104, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXgY-v-Rx5yfrNoKiZNIUfAtjBS4JihC78Ng&usqp=CAU', 150000, 1200),
('Wiebo', '3333 State St', 'Bristol', 'OH', 44420, 'https://i.ytimg.com/vi/qhpAQPHcdKE/hqdefault.jpg', 3000000, 2000);