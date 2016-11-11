import express from 'express'

 const app =express();

 app.get('/', (reg, res) => {
   const a = reg.query.a || 0;
   const b = reg.query.b || 0;
   const sum = +a + +b;
   res.send(sum.toString());
 }
);

app.listen(3000, ()=>{
  console.log('Сервер запущен');
});
