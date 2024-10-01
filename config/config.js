require('dotenv').config(); // Pastikan ini ada di paling atas

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT
  },
  production: {
    use_env_variable: 'DATABASE_URL', // Gunakan nama variabel yang sesuai
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
};

console.log(process.env.DATABASE_URL); // Untuk debugging
