@echo off

rem *** TROCAR PELO DIRETÓRIO EM QUE SEU PROJETO ESTÁ ***
set projeto=C:\Projetos\Fontes\aprenda-mais

rem *** NÃO TROCAR OS DIRETÓRIOS ABAIXO ***
set pasta_origem=%projeto%\src\main\resources\templates\dist
set pasta_destino=%projeto%\src\main\resources\static
rem *** NÃO TROCAR OS DIRETÓRIOS ACIMA ***

rem Mudar para o diretório do projeto
cd /d %projeto%

rem Executar o comando npm run build para construir o frontend
cd /d %projeto%\src\main\resources\templates
call npm run build

rem Mover os arquivos para a pasta resources/static
xcopy "%pasta_origem%\*" "%pasta_destino%\" /E /I /Y > nul
rd /s /q "%pasta_origem%"

rem Limpar a pasta de origem
del /q "%pasta_origem%\*.*"
