var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/recursivo/:minimo&:maximo', function(req, res, next) {
  const minimo = parseInt(req.params.minimo);
  const maximo = parseInt(req.params.maximo);
  if(minimo <= 0 || maximo<= 0)
    res.sendStatus(400);
  res.json({resultado: recursivo(minimo, maximo)});
});

router.get('/iterativo/:minimo&:maximo', function(req, res, next) {
  const minimo = parseInt(req.params.minimo);
  const maximo = parseInt(req.params.maximo);
  if(minimo <= 0 || maximo<= 0)
    res.sendStatus(400);
  res.json({resultado: iterativo(minimo, maximo)});
});

function iterativo(minimo, maximo)
{
  var total = 1;
  for (let index = minimo; index <= maximo; index++) {
    total *= index + 1/index;
  }
  return total;
}

function recursivo(minimo, maximo)
{
  if(minimo > maximo)
    return 1;
  
  return (minimo + 1/minimo) * recursivo(minimo + 1, maximo);
}

module.exports = router;
