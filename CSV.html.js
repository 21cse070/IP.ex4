<!DOCTYPE html>
<!--
Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
Click nbfs://nbhost/SystemFileSystem/Templates/Other/html.html to edit this template
-->
<html>
    <head>
        <title>TODO supply a title</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <script>
            var array2D = [
					[ "a" , "2"] ,
					[ "c" ,"d" ]
				];
	
	
	var csv = array2D
	.map((item) => {
	
		
		var row = item;
		
		
		return row.join(",");
	}
        ) 
	.join("\n");
	
		console.log(csv);
            
        <div>TODO write content</div>
        </script>
    </body>
</html>
