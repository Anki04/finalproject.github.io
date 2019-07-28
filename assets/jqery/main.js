
	$(document).ready(function(){
		$(".submit-btn").click(function()
	{
        //Get the value from table and store in vairable
		var namf = $("#fstname").val();
		var naml = $("#lstname").val();
		var eml = $("#email").val();
        var num = $("#number").val();
        var nal = $("#nationality").val();
        var stat = $("#state").val();
        var city = $("#city").val();
        var pin = $("#pincode").val();
        var address = $("#adr").val();
       //define vairable for email
        var atposition=eml.indexOf("@");  
		var dotposition=eml.lastIndexOf(".");
        //error messages
         $('#fstnamecheck').hide();
         $('#lstnamecheck').hide();
         $('#emailcheck').hide();
         $('#numbercheck').hide();
         $('#natinalcheck').hide();
         $('#statecheck').hide();
         $('#citycheck').hide();
         $('#pincheck').hide();
         $('#adcheck').hide();
         
        
         //first Name
		 if(namf == "" || namf.length<=1)
		 {
            
            $('#fstnamecheck').show();
            $('#fstnamecheck').html("Please enter your First Name");
            $('#fstnamecheck').addClass('errorMessage');
            $("#fstname").focus();
            return false;               
         }
         else
         {
            $('#fstnamecheck').hide();    
         }
        //Last Name
         if(naml == "" || naml.length<=1) 
         { 
            $('#lstnamecheck').show();
            $('#lstnamecheck').html("Please enter your Last Name");
            $('#lstnamecheck').addClass('errorMessage');
            $("#lstname").focus();
            return false;                            
         }
         else
         {
            $('#lstnamecheck').hide();    
         }
        //Email
         if(atposition<1 || dotposition<atposition+2 || dotposition+2>=eml.length) 
         {
            
            $('#emailcheck').show();
            $('#emailcheck').html("Please enter a valid e-mail address");
            $('#emailcheck').addClass('errorMessage');
            $("#email").focus();
            return false;                            
         }
         else
         {
            $('#emailcheck').hide();    
         }
        //Number
         if(isNaN(num) || num.length<10) 
         {
            
            $('#numbercheck').show();
            $('#numbercheck').html("Please enter a valid number");
            $('#numbercheck').addClass('errorMessage');
            $("#number").focus();
            return false;                            
         }
         else
         {
            $('#numbercheck').hide();    
         }
        //Nationality drop-down 
         if(nal == null) 
         {
            
            $('#natinalcheck').show();
            $('#natinalcheck').html("Please Choose any one option");
            $('#natinalcheck').addClass('errorMessage');
            $("#nationality").focus();
            return false;                 
         }
         else
         {
            $('#natinalcheck').hide();    
         }
         //State drop-down 
         if(stat == null) 
         {
            
           $('#statecheck').show();
           $('#statecheck').html("Please Choose any one option");
           $('#statecheck').addClass('errorMessage');
            $("#state").focus();
            return false;                            
         }
         else
         {
            $('#statecheck').hide();    
         }
        //City drop-down 
         if(city == null) 
         {
            
           $('#citycheck').show();
           $('#citycheck').html("Please Choose any one option");
           $('#citycheck').addClass('errorMessage');
            $("#city").focus();
            return false;                            
         }
         else
         {
            $('#citycheck').hide();    
         }
        //Pincode
        if(isNaN(pin) || pin.length<6) 
         {
            $('#pincheck').show();
            $('#pincheck').html("Please enter a valid Pincode");
            $('#pincheck').addClass('errorMessage');
            $("#pincode").focus();
            return false;                            
         }
         else
         {
            $('#pincheck').hide();    
         }
        //Address
        if(address == "" || address.length<10) 
         {
              
           $('#adcheck').show();
           $('#adcheck').html("Please enter a valid Address");
           $('#adcheck').addClass('errorMessage');
            $("#adr").focus();
            return false;                            
         }
         //table row
		 else 
		 {
            $('#adcheck').hide(); 
            $('#emptyMessage').hide();
			 $("#tblform").append(
      		"<tr>" +
        	 "<td>" + namf + " " + naml + "</td>" + 
        		"<td>" + eml + "</td>" +
                "<td>" + num + "</td>" +
                "<td>" + nal + " " + stat + " " + city + " " + pin + " " + address +  "</td>" + 
              "</tr>"
              
            );
            $("#myform").trigger("reset"); 
            $('#exampleModalCenter').modal('hide');           
            }           			
        });
              
        //search
        $(".search-icon").click(function()
        {
            $(".search-box").toggle();
            $("input[type='text']").focus();
    });
});



   