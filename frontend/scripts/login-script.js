$(document).ready(function () {
<<<<<<< HEAD
    $('.main').on('click', '#login', async function(){      
        let username = $('#username').val();
        let passWord = $('#password').val();
        let result  = await axios({
            method: 'POST',
            url: 'http://localhost:3000/account/login',
            data: {
                    "name": username,
                    "pass": passWord,
            }
        });  
        console.log(result.data.jwt);
        
        localStorage.setItem("jwt", result.data.jwt);
        //window.location.replace("../index.html");
=======
    $('.main').on('click', '#signIn', async function(){      
        let emailAddress = $('#loginUser').val();
        let password = $('#loginPass').val();
        let match = false;
        let result  = await axios({
            method: 'GET',
            url: 'http://localhost:3000/account/login',
            withCredentials: true,
        });
        
        for(let i  = 0; i < result.data.length; i++) {
            if(result.data[i].name == emailAddress) {
                match = true;
                if(result.data[i].password == password) console.log("success!");
                else console.log("wrong password");
            }
        }
        if(!match) console.log("user not found");
>>>>>>> 7bf74f67f8f6dc700c7b0789dce2d70c76a8949b
    });
});