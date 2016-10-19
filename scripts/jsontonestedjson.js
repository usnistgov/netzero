var fs = require('fs');
var jsonfile = require('jsonfile');

// var srcPath = '../all_data_sample.json';
// var wrPath = '../all_data_sample_formatted.json';


function changeJSON(srcPath, wrPath) {
	jsonfile.readFile(srcPath, function(err,data) {
		if (err) throw err;
		// var dataArray = data;

		var newData = [];

			for (var i = 0; i < data.length; i++) {
				// newData.push(data[i]);
				var objec = {};
				objec['DHW'] = {};
				objec['LOAD'] = {};
				objec['ELEC'] = {};
				objec['Timestamp'] = {};
				objec['HVAC'] = {};
				objec['IndEnv'] = {};
				objec['MISC'] = {};
				objec['OutEnv'] = {};
				objec['PV'] = {};
				objec['SHW'] = {};
				objec['TimeStampOthers'] = {};
				objec['VENT'] = {};
				for (key in data[i]) {
					
					if (key.includes('Elec_')) {
						objec['ELEC'][key] = data[i][key];
					}
					else if (key.includes('DHW_')) {
						objec['DHW'][key] = data[i][key];			
					}
					else if (key.includes('Load_')) {
						objec['LOAD'][key] = data[i][key];
					}
					else if (key.includes('HVAC_')) {
						objec['HVAC'][key] = data[i][key];
					}
					else if (key.includes('IndEnv_')) {
						objec['IndEnv'][key] = data[i][key];
					}
					else if (key.includes('Misc_')) {
						objec['MISC'][key] = data[i][key];
					}
					else if (key.includes('OutEnv_')) {
						objec['OutEnv'][key] = data[i][key];
					}
					else if (key.includes('PV_')) {
						objec['PV'][key] = data[i][key];
					}
					else if (key.includes('SHW_')) {
						objec['SHW'][key] = data[i][key];
					}
					else if (key.includes('TimeStamp_')) {
						objec['TimeStampOthers'][key] = data[i][key];
					}
					else if (key.includes('Vent_')) {
						objec['VENT'][key] = data[i][key];
					}
					else if (key.includes('DayOf')) {
						objec['TimeStampOthers'][key] = data[i][key];
					}
					else if (key.includes('Timestamp')) {
						objec[key] = data[i][key];
					}
					else if (key ==='id') {
						objec[key] = data[i][key];
					}
		
					else {
						console.log(key);
					}
				}
				newData.push(objec);
			}
		// console.log(newData);
		jsonfile.writeFile(wrPath, newData, {spaces: 2}, function(err) {
			if (err) throw err;
		})
	})
}

changeJSON('../all_data_sample2.json', '../all_data_sample_formatted.json');