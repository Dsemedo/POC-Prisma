# POC-Prisma

Basic Back-end project for a Prisma POC.

## About

That project has a purpose to organized a seats than was/will reserved in a event, with a basic register that requires only a name.

## How to run for development

1. Clone this repository
2. Install all dependencies

```bash
npm i
```

3. Create a PostgreSQL database with whatever name you want

4. Run the back-end in a development environment:

```bash
npm run dev
```

## How to use a project

```bash
Route User

Post: /users
body: {
    "name": "your_name"
    }
Used to create a new user

Get: /users
Used to show all users

Delete: /users/:id
Used to delete a user on database
```

```bash
Route Seats

Get: /seats
Used to show all seats and his status

Patch: /seats
body: {
    "id": "seat_id",
    "isAvaliable": "status_of_seat",
    "owner": "name_of_user"
    }
Used to reserved a seat, only works if you had registrate a name on Post: /users
```

```bash
Route Orders

Get: /orders
Used to show all orders
```
