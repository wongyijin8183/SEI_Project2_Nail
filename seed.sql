INSERT INTO menu (service, price, time) VALUES ('Express Manicure', 18, 30);
INSERT INTO menu (service, price, time) VALUES ('Express Pedicure', 20, 30);
INSERT INTO menu (service, price, time) VALUES ('Classic Manicure', 30, 60);
INSERT INTO menu (service, price, time) VALUES ('Classic Pedicure', 40, 60);
INSERT INTO menu (service, price, time) VALUES ('French Polish', 15, 30);
INSERT INTO menu (service, price, time) VALUES ('Gel Express Manicure', 50, 30);
INSERT INTO menu (service, price, time) VALUES ('Gel Express Pedicure', 50, 30);
INSERT INTO menu (service, price, time) VALUES ('Gel Classic Manicure', 85, 60);
INSERT INTO menu (service, price, time) VALUES ('Gel Classic Pedicure', 95, 60);

INSERT INTO menu (service, price, time) VALUES ('Gel Soak-off (set)', 22, 30);
INSERT INTO menu (service, price, time) VALUES ('Gel Soak-off (each)', 3, 5);
INSERT INTO menu (service, price, time) VALUES ('Acrylic Removal', 60, 60);
INSERT INTO menu (service, price, time) VALUES ('Hand Spa', 45, 40);
INSERT INTO menu (service, price, time) VALUES ('Foot Spa', 55, 60);
INSERT INTO menu (service, price, time) VALUES ('Callus Treatment', 38, 30);
INSERT INTO menu (service, price, time) VALUES ('Lava Heat Hands Therapy', 38, 30);
INSERT INTO menu (service, price, time) VALUES ('Extension Manicure (set)', 160, 90);
INSERT INTO menu (service, price, time) VALUES ('Extension Pedicure (set)', 170, 90);
INSERT INTO menu (service, price, time) VALUES ('Presto Clear Gel', 45, 30);
INSERT INTO menu (service, price, time) VALUES ('Presto Infill Gel (set)', 160, 45);
INSERT INTO menu (service, price, time) VALUES ('Scrub-A-Dub-Dub', 8, 10);
INSERT INTO menu (service, price, time) VALUES ('Nail Repair (Clear Gel)', 15, 20);


insert into bookings (date, time, menu_id, user_id, confirmed, show) values ('2019-11-15', '11:30:00', 4, 4, 'No', 'not_yet');
insert into bookings (date, time, menu_id, user_id, confirmed, show) values ('2019-11-12', '13:00:00', 11, 4, 'Yes', 'not_yet');
insert into bookings (date, time, menu_id, user_id, confirmed, show) values ('2019-10-31', '17:30:00', 5, 4, 'Yes', 'not_yet');
insert into bookings (date, time, menu_id, user_id, confirmed, show) values ('2019-7-15', '12:30:00', 4, 4, 'Yes', 'attended');
insert into bookings (date, time, menu_id, user_id, confirmed, show) values ('2019-9-20', '16:00:00', 10, 4, 'Yes', 'attended');
insert into bookings (date, time, menu_id, user_id, confirmed, show) values ('2019-10-25', '15:00:00', 3, 4, 'Yes', 'absent');
insert into bookings (date, time, menu_id, user_id, confirmed, show) values ('2019-10-19', '14:00:00', 12, 4, 'Yes', 'attended');
insert into bookings (date, time, menu_id, user_id, confirmed, show) values ('2019-10-15', '11:00:00', 7, 4, 'Yes', 'attended');
insert into bookings (date, time, menu_id, user_id, confirmed, show) values ('2019-10-15', '11:00:00', 7, 4, 'Yes', 'attended');

