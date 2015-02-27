# simple-catalog

## Notes

My goal was to create a product catalog with no more than 1,000 products.  I decided to have a little fun with
some performance optimizations.  I certainly would write this differently if I had so many products I couldn't easily 
fit them in the browser memory, or download them quickly enough.

## Non Goals

This was a fun sample project to do quickly, so therefore I left out a number of items I would normally address
in a real world application.

- security
- authentication
- support for a catalog greater than 1,000 products
- search engine optimization
- unit testing
- functional testing
- optimizing initial load time by setting up a front end build with gulp
- continuous integration
- continuous deployment
- authorization
- data validation
- exception handling
- responsive design
- styling
- serialized dto size optimization
- database indexes
- non evergreen browser support
- a loading indicator
- utf-8 or any non default encoding consideration
- gzip compression
- rest api modularity
- minification safe dependency injection
- templates inlined into the built app
- paging
- sorting
- searching

## Installation

I tried to run npm and bower using --save, but if I missed any dependencies you can run
`npm install` 
and
`bower install` 
to get them.

To start the front end static file server, run:

`cd frontend`
`node server.js`

To start the rest api, run:
`cd rest`
`node api.js`

Make sure to install the mysql database schema in:

`database/schema.sql`

