var x, y;
var s;
var sumOfPointsInS;
var n = 100.0; 		
var i;
		sumOfPointsInS = 0.0;

		for (i = 0; i < n; i++) {
          
			x = Math.random();
			y = Math.random();
			console.log(i, x, y);
          
			if( ((x > 0.1 && x < 0.2) && (y > 0.7 && y < 0.8)) ||			
			    ((x > 0.2 && x < 0.4) && (y > 0.2 && y < 0.9)) ||			
			    ((x > 0.4 && x < 0.5) && (y > 0.1 && y < 0.2)) ||			
			    ((x > 0.4 && x < 0.9) && (y > 0.2 && y < 0.3)) ||				
		        ((x > 0.7 && x < 0.8) && (y > 0.3 && y < 0.4)) ) {sumOfPointsInS++;}			
			console.log("  sumOfPointInS = " + sumOfPointsInS);
		}
		
		s = sumOfPointsInS / n;
		console.log(s);
        alert(s);
