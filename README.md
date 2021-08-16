### Folder Structure

It is important to keep the existing folder structure to keep our code organized

1. config:
   This folder is meant for specific config files that go with certain pages. You can place them all in config.

2. controllers
   These are the files that take care of your logic and communicate with your models and database, and sends back a response

3. routes
   this is where you define the different api endpoints that are available and connect your requests with the necessary controllers

4. middleware
   these are all logics that would go between your requests and responses. For example, authentication with JWT would go in here.

5. tests
   All unit tests need to be placed in here

6. utils
   Any javascript code that will be used across the application can be placed here and exported as modules.

7. templates
   These are html/ejs/pug templates we used to include in mailers, rendering some h5 etc.

### Creating Models

In order to create models you will need to make adjustments to the schema.prisma file.

run the prisma migrate command:
`npx prisma migrate dev --name init `

This will check the schema.prisma file and create migrations if there are changes

### Creating Migrations

Creating migrations are very easy in prisma. All you need to do is to make changes
to schema.prisma and run the migration command
`npx prisma migrate dev --name init`
