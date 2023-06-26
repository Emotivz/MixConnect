# MixConnect

## Overview

Mix Connect is a marketplace platform for DJs to showcase their skills, genres, and experience on their profiles and event organisers can browse and hire the ideal DJ for their events.

## Developer Instructions

Follows these steps to install and run this project in a dev enviroment.

prerequisites:

- Ensure you have cloned both [client side](https://github.com/Emotivz/mixconnect) repo & [server side](https://github.com/Emotivz/mixconnect-api) repo respectively
- Create a MYSQL database schema for this project using workbench. Remember name for schema as this will need to be inserted into server .env file

Server Instalation Steps:

- Open server repo and run `npm install` this will install the required node_modules
- Create a file in the root directory called `.env` use `.env.example` for guidance on required fields. Note: please use PORT=8080 as images path in db are saved here.
- Run the following commands in order `npm run db:migrate` & `npm run db:seed` this will setup database with some mock data
- To start backend server run `npm start`

Client Instalation Steps:

- Open client repo and run `npm install` this will install the required node_modules
- Create a file in the root directory called `.env` use `.env.example` for guidance on required fields. REACT_APP_API_URL should be the the url that is returned on the server in terminal e.g. http://localhost:8080 then /api e.g. http://localhost:8080/api
- To start client app run `npm start`
- Feel free to use the signup flow to create an account for testing otherwise use mock user details to sign in from seeds file `01_users`

### Problem

As a DJ I know it can be quite difficult to promote yourself to get bookings. Currently social media platforms like Facebook are used but because these platforms are not built specifically for this purpose its missing much needed functionality that does not address these cases. My project aims to address the following:

- Availability: Finding a DJ who is available in your specific location for when your event is happening can often be difficult. My project should match event organisers with local DJs.
- Criteria: Each event organiser has a specific set of requirements of what they expect from their DJ. Because these vary so much it can be hard to find DJs who match this criteria. The project can take DJs preferences of type of events they are open to taking, what genres they enjoy playing, location preferences, price, equipment etc. The application can then match up organisers & DJs.
- Reviews: DJs currently heavily rely on word of mouth for recommendations and future bookings Event organisers also rely on this for reliability. Having a place where event organisers can post reviews of their experience working with a particular DJ allows DJs to build their presence up as well as providing event organisers some confidence in the DJs ability for the job.
- Pricing: DJs can have a wide range of pricing structures depending on factors such as experience, reputation, demand, equipment, and the nature of the event. This can make it difficult for organisers to find DJs based on their budget. The project should be able to match people’s needs and budget with appropriate DJs.
- Last minute booking: A DJ may have double booked, cancelled due to illness or car/van broken down. Life happens but this project could provide a platform for people who find themselves in this unfortunate situation and allows them to quickly find a replacement DJ.

### User Profile

- DJs: Create profile (Register), Edit profile, Login, Search & Apply for events

- Event organisers: Create event job post, Search for DJs for events, View DJ profiles, Request quotes, Book Djs for events

### Features

**MVP:**

- As a DJ, I want to create a profile showcasing my skills, experience, and music style.

  - Feature: DJ profile creation with sections for bio, genres, experience, equipment, and samples of mixes/tracks.

- As an event organiser, I want to search for DJs based on specific criteria, such as location, genre, availability & price.

  - Feature: Search filters for DJs, e.g. location, genre, price range, availability, and reviews/ratings etc

- As an event organiser, I want to be able to post my event details without having to search through DJs myself. The post should notify DJs that match my criteria with the option for them to apply their interest.

  - Feature: Event post creation form. With selectors for the criteria the DJ needs to meet for the event.

- As an event organiser, I want to listen to samples of DJs' work before making a booking decision.

  - Feature: Integrate ability listen to samples of DJ mixes on DJ profiles

- As an event organiser, I want to view DJs' profiles and learn more about their background, experience, and equipment.

  - Feature: DJ profiles with sections for bio, experience, equipment, pricing, photos/videos, and social media links.

- As a DJ, I want to receive inquiries and booking requests from event organisers.

  - Feature: Contact form/messaging system for event organisers to send inquiries and booking requests to DJs.

See Nice-to-haves section for future phase ideas.

### Tech Stack

- HTML5
- CSS & SCSS
- JavaScript
- React.js
- Node.js
- Express.js
- Knex/MongoDB/MySQL
- oAuth/JWT/bcrypt
- Git
- AWS

### APIs

- Google Maps API
- Mapbox
- Stripe / PayPal (nice to have)

## Implementation

### Sitemap

- Home

  - Register
  - Login

- DJ List

  - Browse DJs
  - DJ Profile

    - About
    - Experience
    - Equipment
    - Sample Mixes/Tracks
    - Reviews/Ratings
    - Contact/Booking Form

- Search DJs

  - Filter by Location (distance)
  - Filter by Genre
  - Filter by price range
  - etc

- Events

  - Event List
  - Create Event Form
    - DJ reccomendations

- About Us
- Pricing/Tiers

### Mockups

Embedded:

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F21aX1wvHxTdeXkLaCEKkTe%2FMixConnect---Mockup-v1%3Ftype%3Ddesign%26node-id%3D811%253A2%26t%3DgCHOTBipbikJAeAC-1" allowfullscreen></iframe>

[Direct Link](https://www.figma.com/file/21aX1wvHxTdeXkLaCEKkTe/MixConnect---Mockup-v1?type=design&node-id=811%3A2&t=gCHOTBipbikJAeAC-1)

### Endpoints

**POST /api/register**

Registration

Parameters:

- name: User's name
- email: User's email address
- password: User's password

Response:

```
{ "message": "User registered successfully" }
```

**POST /api/login**

Login

Parameters:

- email: User's email address
- password: User's password

Response:

```
{ "token": "<token>" }
```

**GET /api/djs**

Get list of DJs

Parameters:

- None

Response:

```
[{ "id": 1,
"name": "DJ Name",
"genres": ["Electronic", "House", "Afrobeats", "LoFi"],
"location": "London" }, ...]

```

**GET /api/djs/:djId**

DJ profile page

Parameters:

- djId

Response:

```
{ "id": 1,
"name": "DJ Name",
"genres": ["Electronic", "House", "Afrobeats", "LoFi"],
"experience": "5 years",
"location": "London",
"equipment": {"decks": true, "djbooth": false, "microphone": true, ...},
"avergage price": 250, ...}
```

**POST /api/djs/**

Post a new DJ profile

Parameters:

- none

Response:

```
{"message": "DJ profile created successfully"}
```

**GET /api/events/**

Get list of events

Parameters:

- none

Response:

```
[{ "id": 1,
"name": "Event Name",
"date": "1255845855000",
"location": "London",
"organiser": "John Doe" }, ...]
```

**GET /api/events/:eventId**

Get details of event

Parameters:

- eventId

Response:

```
{ "id": 1,
"name": "Event Name",
"date": "1255845855000",
"location": "London",
"organiser": "John Doe",
"reviews": [{"name": "comment", "rating": 5}], ... }
```

**POST /api/events/**

Create a new event

Parameters:

- name: Event's name
- date: Event date
- location: Event location
- criteria
- budget

Response:

```
{ "message": "Event created successfully" }
```

You will also be able to edit & delete DJ profiles & events

### Database

Embedded:

<iframe width="100%" height="500px" style="box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); border-radius:15px;" allowtransparency="true" allowfullscreen="true" scrolling="no" title="Embedded DrawSQL IFrame" frameborder="0" src="https://drawsql.app/teams/my-team-916/diagrams/mixconnect/embed"></iframe>

[Direct Link](https://drawsql.app/teams/my-team-916/diagrams/mixconnect/embed)

### Auth

My project will have user registration and login via oAuth and will utilise tokens so users do not need to constantly login.

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.

| Task                                      | Time Frames |
| :---------------------------------------- | :---------: |
| Create database                           |    1 day    |
| create server boilerplate & link to db    |   .5 day    |
| Create react app structure and components |   .5 day    |
| build home page front end                 |   1.5 day   |
| build registration/login front end        |   1.5 day   |
| build DJ profile page front end           |    2 day    |
| build DJ profile page back end            |    1 day    |
| build DJ List front end                   |    2 day    |
| build DJ List back end                    |    1 day    |
| build Event List front end                |    2 day    |
| build Event List back end                 |    1 day    |
| build reviews page front end              |    2 day    |
| build review page back end                |    1 day    |
| build about page                          |   .5 day    |

## Nice-to-haves

- As a DJ, I want to receive reviews and ratings from event organisers to showcase my reputation and professionalism.

  - Feature: Review and rating system where event organisers can provide feedback and rate DJs based on their performance.

- As an event organiser, I want to communicate directly with DJs to discuss event details, negotiate terms, and finalize bookings.

  - Feature: Messaging system or direct contact information provided on DJ profiles for event organisers to communicate with DJs.

- As a DJ, I want to manage my availability and update my schedule for potential bookings.

  - Feature: Availability calendar or scheduling tool for DJs to indicate their open dates and update their schedule accordingly.

- As an event organiser, I want to make secure online payments for booking a DJ.

  - Feature: Integration of a secure payment system to make payments for DJ bookings.

- As a DJ, I want to track and manage my bookings, including details of events, payment status, and client information.
  - Feature: Booking management system for DJs to keep track of their confirmed bookings, event details, and payment status.
