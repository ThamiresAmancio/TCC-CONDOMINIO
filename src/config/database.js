module.exports = {

  url:process.env.DATABASE_URL || "mysql://root:bcd12726@db-tcc-condominio.czwdp2zctpj4.us-east-1.rds.amazonaws.com:3306/condominio",
  config: {
    dialect: "mysql",
    define: {
      timestamp: true,
      underscored: true,
    },
  },
};
