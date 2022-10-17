import errorMsg from './errorMsg';

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
        console.log('login btn clicked');

        for(var i = 0; i < logindetails.length; i++) {
            // check is user input matches username and password of a current index of the objPeople array
            if(phone_txtBox.value == "" && usrName_txtBox.value == logindetails[i].username && pword_txtBox.value == logindetails[i].password) {
                    alert(logindetails[i].username + " is logged in!!!");

                    return;
                    // stop the function if this is found to be true
            } else if(phone_txtBox.value == "" &&  usrName_txtBox.value == "" && pword_txtBox.value == "") {
                pword_txtBox.insertAdjacentHTML('afterend', errorMsg('Fields are empty'));
                //alert('Fields are empty');

                return;
            }
            else if (phone_txtBox.value == logindetails[i].phoneNumber && pword_txtBox.value == logindetails[i].password){
                alert(logindetails.username + " is logged in!!!");
                return;
            } 
            else if (phone_txtBox.value == logindetails[i].phoneNumber || pword_txtBox.value == logindetails[i].password) {
                pword_txtBox.insertAdjacentHTML('afterend', errorMsg('Phone Number or Password incorrect'));
                //alert('wrong username or password');
                return;
            }
            else if (usrName_txtBox.value == logindetails[i].username || pword_txtBox.value == logindetails[i].password) {
                pword_txtBox.insertAdjacentHTML('afterend', errorMsg('Name or Password incorrect'));
                //alert('wrong username or password');
                return;
            }

        }

    });
}