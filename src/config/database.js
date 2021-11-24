module.exports = {

  url:process.env.DATABASE_URL || "mysql://root:bcd127@localhost:3306/condominio",
  config: {
    dialect: "mysql",
    define: {
      timestamp: true,
      underscored: true,
    },
  },
};
