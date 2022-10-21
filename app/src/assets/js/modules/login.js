export default () => { 
    //console.log(userdetails());

    const phone_txtBox = document.querySelector('.phoneNumber');
    const usrName_txtBox = document.querySelector('.username');
    const pword_txtBox = document.querySelector('.password');

    //const logindetails = userdetails;
    var logindetails = [
        {"phoneNumber":"07454463442","username":"John", "password":"12345678"},
        {"phoneNumber":"07454463443","username":"Anna", "password":"12345678"},
        {"phoneNumber":"07454463444","username":"Peter", "password":"12345678"}
    ];

    document.querySelector('.login_btn').addEventListener('click',_=>{
        let correct = false;
        for(var i = 0; i < logindetails.length; i++) {
            // check fields aren't empty
            if(phone_txtBox.value == "" &&  usrName_txtBox.value == "" && pword_txtBox.value == "") {
                alert('Fields are empty');

                return;
            }
            // check if username and password are inserted without phone number in
            if(phone_txtBox.value == "" && usrName_txtBox.value == logindetails[i].username && pword_txtBox.value == logindetails[i].password) {
                    alert(logindetails[i].username + " is logged in!");
                    correct = true; //set boolean to true
                    return;
                    // stop the function if this is found to be true
            } 
            //check when user uses name and phone number
            else if (phone_txtBox.value == logindetails[i].phoneNumber && pword_txtBox.value == logindetails[i].password){
                alert(logindetails[i].username + " is logged in!!!");
                correct = true; //set boolean to true
                return;
            } 
        }
        //if the password isn't correct
        if (!correct) {
            //alert the user there's an issue
            alert('incorrect phone, username or password');
        }


    });
}