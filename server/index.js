// import "core-js/stable";
// import "regenerator-runtime";
import './sequelize';
import app from './app';

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  
  console.log(`server started on ${PORT}`);
});