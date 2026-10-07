@echo off
setlocal
cd /d "%~dp0"

if not exist ".venv\Scripts\python.exe" (
  echo Preparando o ambiente da Cantina Horizonte...
  py -m venv .venv 2>nul || python -m venv .venv
  if errorlevel 1 goto :erro
)

call ".venv\Scripts\activate.bat"
python -m pip install -r requirements.txt
if errorlevel 1 goto :erro

echo.
echo Cantina Horizonte iniciada.
echo Abra no navegador: http://127.0.0.1:8000
echo Para encerrar, volte a esta janela e pressione Ctrl+C.
echo.
python -m uvicorn backend.app:app --reload
goto :fim

:erro
echo.
echo Nao foi possivel iniciar automaticamente. Consulte o README.md.
pause

:fim
endlocal
