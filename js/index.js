$(document).ready(function() {
	// register a click listener/handler on the submit button
	$("#submit").click(function() {
		// Use .val jQuery function to get value from input element
		var searchTerms = $("#searchTerms").val();
		// URL from API, including callback AND default json format
		var url =
			"https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
			searchTerms +
			"&callback=?";

		$.ajax({
			// Get or POST
			type: "GET",
			// Where data is coming from
			url: url,
			// False
			async: false,
			// Data type to handle, JSON
			dataType: "json",
			// On success
			success: function(data) {
				//console.log(data);
				// Clear old results before showing new ones
				$("#output").html(' ');
				for (var i = 0; i < data[1].length; i++) {
					// select the output page and prepend to the first index or append to the last.
					$("#output").prepend(
						"<li> <a href=" +
							data[3][i] +
							"> <strong>" +
							data[1][i] +
							"</li></a></strong>" +
							"<p><em>" +
							data[2][i] +
							"</p></em>"
					);
					// Clear the search terms inside of the input element
				} $("#searchTerms").val(' ');
				
			},
			// On error
			error: function(errMsg) {
				alert("Error");
			}
		});
	});
});
