@echo off
setlocal
cd /d "%~dp0"
if exist ".venv\Scripts\python.exe" (
  ".venv\Scripts\python.exe" resetar_dados.py
) else (
  py resetar_dados.py 2>nul || python resetar_dados.py
)
pause
endlocal
