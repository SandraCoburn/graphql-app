# The Midnight Bakery

## Project Overview

The Midnight Bakery is an online store where users can select from a variaty of cakes, order and pay.

## Tech Stack

### Frontend built using:

- React.js
- Next.js
  - Next Router
  - Next Link
- Styled Components
- NProgress.js

### Backend built using:

- GraphQL
  - Prisma - Improves your database workflows and saves you from wirting complex SQL queries or the intricacies of working with NoSQL APIs.
    - Prisma turns your database into a GraphQL API and enables the use of GraphQL as a universal query language for all databases. Instead of writing SQL or using a NoSQL API, you can query your database with GraphQL.
    - Supports MySQL, Postgress and MongoDB
    - Simple API for joins, mutations, filters & pagination.
    - Prisma uses GraphQL SDL as a tool for defining the data model in your application. The data model is then translated into an actual database schema. This aproach makes migration flows for your database easy.
    - You can set up your own intance of Prisma with Docker. We use demo server for Prisma in this application.
- KeystoneJs is a layer that sits on top of a number of databases like MongoDB and Prisma
- MongoDB Atlas - Multi-cloud database service for MongoDB. Available on AWS, Google Cloud and Azure.

### Start the server

```
npm run dev
```
