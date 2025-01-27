import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'Users API',
    version: "1.0.0",
    description: 'Users Docs'
  },
  host: 'localhost:3000',
  basePath: "/api/users"
};
// host: "surveys-5jvt.onrender.com",

const outputFile = '../users-swagger-doc.json';
const routes = ['../routes/users.js'];

swaggerAutogen()(outputFile, routes, doc);