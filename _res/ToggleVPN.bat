@echo off

for /F "tokens=3 delims=: " %%H in ('sc query "OpenVPNService" ^| findstr "        STATE"') do (
    if /I "%%H" NEQ "RUNNING" (
        net start "OpenVPNService"
        rename "%HOMEDRIVE%%HOMEPATH%\Desktop\Start VPN.lnk" "Stop VPN.lnk"
    ) else (
        net stop "OpenVPNService"
        rename "%HOMEDRIVE%%HOMEPATH%\Desktop\Stop VPN.lnk" "Start VPN.lnk"
    )
)

echo "The window will be closed in 1 second"
sleep 1
