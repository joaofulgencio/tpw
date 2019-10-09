var express = require('express');
var router = express.Router();
const api_helper = require('../gateway/cep');

/* GET users listing. */
router.get('/:cep', function(req, res, next) {
  var cep = req.params.cep;
  api_helper.make_API_call('http://api.postmon.com.br/v1/cep/'+ cep).then(response => {
    var bairro = response.bairro;
    var cidade = response.cidade;
    var teste = {
      bairro: bairro,
      cidade: cidade
    };

    res.render ('index', {teste: teste});
  })
      .catch(error => {
        res.send(error);
      });
});

module.exports = router;
