$ -> 
	# ApiHost stores the host for API requests
	ApiHost = $ "html"
		.data().host
	console.log "API host is", ApiHost

	button = $ "button"
	
	button.click (e) -> 
		e.preventDefault()
		form = $ "form"
		button.text "Wait..."
		url = "//" + ApiHost + (form.attr "action")
		
		dataArray = form.serializeArray()
		dataJSON = {}
		createJSON = (obj) -> dataJSON[obj["name"]] = obj["value"]
		createJSON array for array in dataArray

		req = $.post url, JSON.stringify(dataJSON), success, "json"
		req.fail error
		success = ->
			button.text "Thanks"
			console.log "works! 🤘"
	error = (a) ->
		if a.status == 409
			button.text "Done 👍"
			$ "input"
				.attr "placeholder", a.responseJSON.debug
				.val("")
		else if a.status == 400
			button.text "Try again"
			$ "input"
				.attr "placeholder", a.responseJSON.debug
				.val("")
		else 
			console.log "??"
			button.text "🐛 bug 😩"
	
	do () ->
		url = "//#{ApiHost}/api/bots/userCounts"
		req = $.getJSON url, (data) ->
			$ ".community__counter"
				.text data.data.telegramCount
		
