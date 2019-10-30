# SEI_Project2_Nail


## Summary
    - This site is meant to be a supplement to an existing website of a nail salon (www.manicurious.sg), providing a means for existing customers to send appointment booking enquiries to the salon's reception, as well as providing a consolidated platform for reception staff to track daily appointment bookings.
    - The ultimate objective of this site is to record customer behavior to do with appointment bookings and fulfilments, rewarding customers displaying positive behavior, opposed to customers who habitually no-show on appointments despite repeated reminders. 
    - The site will also provide the salon with a centralised storage solution of customer data for marketing purposes, with promotions crafted alongside individual consumption habits.
    
## Technologies Adopted
    - MVC was used to manage various database models, which will come in useful as the site scales in information stored, as well as different targetted marketing methods are implemented.
    - PSQL was used to store and manage data, which is easy to adjust as data administration needs change.
    - Javascript, Node, and React were used as the backbone of the entire site, and have proven themselves versatile enough to scale the site to include payment systems and customized marketing pages.
    - Method Override was required for both users and administrators to update and maintain booking records and status.
    - SHA256 and Cookie Parser were used to hash passwords before storage in databases, and provide increased security to each user's individual profile page, which is planned to include past payment records and personal information.

## Approach Taken
    - This site is focused on user experience, prioritising convenient flow for users toward making informed and decisive commitments by the time a booking is confirmed.
    - The insistence that a booking can only be made by users with registered accounts deters users from making rash bookings. In return, the site is meant to reward users for using the site for bookings, instead of through phone or email.
    - The site captures information about customers in bite-sized chunks at a time, as opposed to all at once on the registration page. The site is also meant to distill information to what is needed for administrative purposes at the time, ommitting unnecessary, albeit possibly handy, information to handle, for example, bookings of that day alone. 

## Unsolved Problems
    - Most unsolved issues are due to time constraint (and personal ability limitations).
    - Had hoped to include tabs in the admin profile page to segregate bookings according to different purposes (eg. bookings today, bookings pending confirmation, bookings awaiting status update, inactive users, highest spending user per period etc.)
    - Had hoped to also include more graphical charts to make each user profile page SEEM more interactive, such as month-to-month spending charts, a day counter since a user's last visit, pictures of past nail art designs that users had done etc.
    - Lastly, the ultimate goal is to device a system to reward user engagement with the site ie. points exchangeable for services with every online booking, positive behavior, friend referral, returning before "too long".

## Installation
    - This site is posted on HeroKu: https://boiling-dawn-89574.herokuapp.com/
    and on GitHub: https://github.com/wongyijin8183/SEI_Project2_Nail
    - To work further on this site, the dependencies are as follows:
    "cookie-parser": "^1.4.3",
    "express": "^4.16.3",
    "express-react-views": "^0.10.5",
    "js-sha256": "^0.9.0",
    "method-override": "^2.3.10",
    "pg": "^7.4.3",
    "react": "^16.3.2",
    "react-dom": "^16.3.2"