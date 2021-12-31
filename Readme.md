# Objetivo do desafio:
O objetivo era criar um servidor nginx que acessa uma aplicação node que manipula um banco de dados mysql.
<br/>O nginx deve escutar a porta 8080 e retornar uma página html escrito **Full Cycle Rocks!** e uma lista de nomes "cadastrados"
<br/>Toda vez que alguém entra na página, é adicionado um nome a tabela.

<br/>Tudo isso deve ficar pronto e sem erros após digitarmos `docker-compose up -d` <br />

# Resolução
Para isso, podemos usar o dockerize para esperar por uma conexão ser sucedida e após isso iniciar de fato a aplicação. <br/>
Então o que eu fiz foi utilizar o dockerize tanto na aplicação node como nginx, ambos esperando por suas dependências ficarem prontas.
