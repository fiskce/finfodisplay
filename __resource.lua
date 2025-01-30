--[[
--//=======================================================================================
--//                 Author:  @fiskce / @IcezDK	 	  Date: 10/12/2020                      
--//=======================================================================================
--//                                    serverscript                  	    
--//                                   Display VRP info                             
--//                             									                                        
--//=======================================================================================
]]--

client_scripts {
    'lib/Proxy.lua',
    'lib/Tunnel.lua',
    'config.lua',
    'client/client.lua'
}

server_scripts {
    '@vrp/lib/utils.lua',
    'config.lua',
    'server/server.lua'
}

ui_page 'client/html/index.html'

files {
    'client/html/index.html',
    'client/html/index.css',
    'client/html/index.js',
    'client/html/img/*.png'
}

dependency 'vrp'