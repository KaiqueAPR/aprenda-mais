# Aprenda+

# Descrição:
O projeto 'Aprenda+' é voltado para todos aqueles que contém algum tipo de necessidade quando estamos falando de tecnologia básica. Todos aqueles se enquadram na camada de vulnerabilidade social são o foco do projeto, onde o nosso propósito é conseguir entregar uma interface (UI/UX) limpa e fácil de utilizar e um conteúdo sólido sobre ferramentas que muitas vezes, por falta de acesso, as pessoas nem se quer conhecem (ou ouviram falar).

# Exemplos:
## Request:
```
curl --location 'http://localhost:8080/usuario/novo' \
--header 'Content-Type: application/json' \
--data-raw '{
    "nome": "Kaique Araujo Pinholato Ribeiro",
    "cpf" : 11155522266,
    "telefone" : 999999999,
    "ddd" : 13,
    "email" : "kaiquepinho2010@hotmail.com",
    "dtNascimento" : "2003-03-26",
    "cep" : 11325060,
    "logradouro" : "Rua Teste da Silva Junior 1",
    "senha" : "Teste"
}'
```

## Response:
```
{
    "nome": "Kaique Araujo Pinholato Ribeiro",
    "cpf": "11155522266",
    "telefone": 999999999,
    "ddd": 13,
    "email": "kaiquepinho2010@hotmail.com",
    "dtNascimento": "2003-03-26",
    "cep": 11325060,
    "logradouro": "Rua Teste da Silva Junior 1"
}
```
 
# Participantes do projeto (USJT - UNIMONTE):
- Kaique Araujo
- Augusto Freitas
- Lucca Nunes
- Douglas Sousa
