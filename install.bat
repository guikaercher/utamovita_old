cd /d %~dp0
start /WAIT installation_windows_scripts\install_choco.bat
start /WAIT installation_windows_scripts\install_node.bat
start /WAIT installation_windows_scripts\install_build_tools.bat
start /WAIT installation_windows_scripts\install_app.bat
