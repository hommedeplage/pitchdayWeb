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
		console.log dataJSON
		console.log dataArray
		# for input in dataArray[0]
		# for (var i = 0; i < formArray.length; i++){
		#   returnArray[formArray[i]['name']] = formArray[i]['value'];
		# }
		# return returnArray


		$.post url, dataJSON, success, "json"
			.fail error()
	success = (form,url) ->
		console.log "works! 🤘"
	error = ->
		button.text "🐛 bug 😩"





			