# language: pt
Funcionalidade: Compra de produto no Sauce Demo
  Como cliente da loja
  Quero concluir um pedido
  Para receber a confirmação da compra

  Cenário: Comprar a mochila Sauce Labs com sucesso
    Dado que acesso a loja Sauce Demo
    Quando faço login com o usuário "standard_user" e a senha "secret_sauce"
    E adiciono a mochila ao carrinho
    E finalizo a compra com os dados "Ricardo", "Costa" e "01001000"
    Então vejo a mensagem "Thank you for your order!"
