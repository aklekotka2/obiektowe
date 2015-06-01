
function User(mail,password,url) {
    this.mail = mail;
    this.url = url;
    this.password = password;
}



var userList= {
	allUsers: [],

    addUser: function(user){
    	if(user instanceof User){
    	this.allUsers.push(user);
        }
    },

    login: function(email,password){
    	var currentUser;
    	for(var i=0; i<this.allUsers.length;i++){
    		currentUser=this.allUsers[i];
    	  if(email===currentUser.mail&&password===currentUser.password){
    		  return true;
    	    }    	  
          }
        return false;
      },

    uniqUser: function(email){
    	var currentName;
    	for(var i=0; i<this.allUsers.length;i++){
    		currentName=this.allUsers[i];
    	  if(email===currentName.mail){
    		  return true;
    	    }    	  
          }
        return false;
      }      
}

var form=document.forms[0];
form.addEventListener('submit', function(e){
	e.preventDefault();
	if(userList.login(form.email.value,form.password.value)){
		alert('Zalogowałeś się!');
	}
	else{
		alert('Nie zalogowałeś się!!');
	}
});

var form1=document.forms[1];
form1.addEventListener('submit', function(e){
	e.preventDefault();
	 if(!userList.uniqUser(form1.adresEmail.value)){
		if((form1.newPassword.value===form1.checkPassword.value)&&(form1.newPassword.value!=='')){
			var nowyUzytkownik=new User(form1.adresEmail.value,form1.newPassword.value,form1.avatar.value);
			userList.addUser(nowyUzytkownik);
			alert('Zostałeś dodany');
		}
		else{
			alert('Powtórz hasło!!');
		}
	 }
	 else{
	 	alert('Ten użytkownik już istnieje!!');
	 }
	
});

var zosia=new User('zosia@samosia.pl', '123', 'http:///');
var michal=new User('michal@samosia.pl', 'lala', 'http:///');
var newUser=new User('aklekotka@interia.pl','url:jhj','testowe');
userList.addUser(zosia);
userList.addUser(michal);
userList.addUser(newUser);
