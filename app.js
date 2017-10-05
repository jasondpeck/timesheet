var config = {
	apiKey: "AIzaSyCnQfbekdieiMaIzu8dvUpZqdqErwPoEAQ",
	authDomain: "team-ramrod-employee-sheet.firebaseapp.com",
	databaseURL: "https://team-ramrod-employee-sheet.firebaseio.com",
	projectId: "team-ramrod-employee-sheet",
	storageBucket: "",
	messagingSenderId: "350826711043"
};

firebase.initializeApp(config);

var database = firebase.database();

var timeSheet = {
	start: () => {
		$('#submitButton').on('click', function () {
			var name = $('#employeeName').val().trim();
			var role = $('#role').val().trim();
			var startDate = $('#startDate').val().trim();
			var monthlyRate = $('#monthlyRate').val().trim();
			console.log(name, role, startDate, monthlyRate);
			database.ref().push({
				name,
				role,
				startDate,
				monthlyRate
			});
		});
	}
}

timeSheet.start();