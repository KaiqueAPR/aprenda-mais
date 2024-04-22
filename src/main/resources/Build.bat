@echo off

rem Execute o comando npm run build para construir o frontend
cd C:\Projetos\Fontes\aprenda-mais\src\main\resources\templates
npm run build

rem Mova os arquivos para a pasta resources/static
move C:\Projetos\Fontes\aprenda-mais\src\main\resources\templates\dist* C:\Projetos\Fontes\aprenda-mais\src\main\resources\static\
