$ -> 
	button = $ "button"
	button.click (e) -> 
		e.preventDefault()
		form = $ "form"
		button.text "Wait..."
		url = form.attr "action"
		
		dataArray = form.serializeArray()
		dataJSON = {}
		createJSON = (obj) -> dataJSON[obj["name"]] = obj["value"]
		createJSON array for array in dataArray

		$.post url, dataJSON, success, "json"
			.fail error()
	success = (form,url) ->
		console.log "works! 🤘"
	error = ->
		button.text "🐛 bug 😩"





			