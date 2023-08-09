let mysql = require('mysql'); 

var con = mysql.createConnection({
  host: "localhost",
  user: "...",
  password: "..."
});

con.connect(function(err) {
  
  if (err) throw err;
	console.log("Connected!");
	
	
		con.query("SELECT * FROM tabela", function (err, result) {
		if (err) throw err;
			
			for(let o of result){
				
				console.log("Result: " + o.kolumna1 +" "+ o.kolumna2);
				
			}
			
			
		});
	
	
});