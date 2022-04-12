module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '31e213ebe4e232b007f26173dab439cf'),
  },
});
