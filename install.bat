@echo off
set "NODE_PATH=C:\Program Files\nodejs"
set "PATH=%NODE_PATH%;%PATH%"
cd /d "%~dp0"
call npm.cmd install
echo.
echo Listo. Para arrancar el servidor: npm run server
echo En otra terminal: npm run dev
pause
