//configuration is a function (allows for advanced usage possibilities)
module.exports = function(){
	return {
		//our irc credentials
		"nick" : "nodejitsubot",
		"server" : "irc.freenode.net",
		"channels" : ["#nodejsbots"],
		
		//plugin specific options are namespaced into here
		"plugins" : {
			"twitter" : {
				//these are the terms associated with the streaming tracker
				//http://dev.twitter.com/pages/streaming_api_methods#track
				"track" : [
					"nodejs", "node js", "node.js", "node javascript"
				]
			}
		},

		//list of modules to have for triggers and extensions
		"modules" : [
			//login to freenode if available
			//since irc networks use different login schemes
			"freenode",
			
			//get the !watchtwitter, !tweet
			"twitter",
			
			//get !translate
			"translate"
		],

		//authentication credentials
		//fill these in yourself
		//  get an api key and secret via
		//  http://dev.twitter.com/apps/new
		"auth" : {
			"twitter" : {
				//twitter pin based OAuth will require pin entry on each restart
				"api-key": "...",
				"api-secret": "...",
				
				//if this is entered it will be tried before using any other method
				//it allows a bypass of the pin based login since it does not expire
				"access-token":  "...",
				"access-token-secret": "..."
			},
			"freenode" : {
				"nick" : "nodejitsubot",
				"password" : "..."
			}
		}
	}
}

