--[[
--//=======================================================================================
--//                 Author:  @fiskce / @IcezDK	 	  Date: 10/12/2020                      
--//=======================================================================================
--//                                    serverscript                  	    
--//                                   Display VRP info                             
--//                             									                                        
--//=======================================================================================
]]--

--==Variables==--
local hudEnabled = cfg.hudEnabled -- Om den skal være på lige når man joiner.
local datawalletAmount = nil
local databankAmount = nil
local datadirtymoneyAmount = nil
local datauserIdentity = nil
--==============================--

--==Threads==--
Citizen.CreateThread(function()
    while true do
        Citizen.Wait(1*5650)
        if hudEnabled then
            TriggerServerEvent('V1N:getUserData')
            Citizen.Wait(1*150)
            RegisterNetEvent('V1N:setUserData')
            AddEventHandler('V1N:setUserData', function(data)
                datas = data
            end)
            if datas then
                local datawalletAmount = datas.wallet
                local databankAmount = datas.bank
                local datadirtymoneyAmount = datas.dirtymoney
                local datauserIdentity = datas.userIdentity
                SendNUIMessage({
                    type = 'ui',
                    status = true,
                    walletAmount = ''..tostring(datawalletAmount)..'',
                    bankAmount = ''..tostring(databankAmount)..'',
                    dirtymoneyAmount = ''..tostring(datadirtymoneyAmount)..'',
                    userIdentityen = ''..tostring(datauserIdentity)..''
                })
            end
        end
    end
end)
--==============================--

--==Commands==--
RegisterCommand(cfg.commandName, function()
    if hudEnabled then
        hudEnabled = false
        SendNUIMessage({
            type = 'ui',
            status = false
        })
    else
        hudEnabled = true
        SendNUIMessage({
        type = 'ui',
        status = true
        })
    end
end)
--==============================--
