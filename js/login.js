document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("sem").addEventListener("click",function(e){
        e.preventDefault();
        let email=document.getElementById("email").value;
        let password=document.getElementById("password").value;
        let emailValue = document.getElementById("email");
        let passwordValue = document.getElementById("password");

        if("people" in localStorage){
         let  AllPeople=JSON.parse(localStorage.people);
          if("length" in AllPeople){
              let res=0;
                for(f of AllPeople){
                    if(f.email==email && f.password==password){
                        setSuccessFor(emailValue);
                        setSuccessFor(passwordValue);
                        res=1;
                        let obj={
                            name: f.name,
                            surname: f.surname
                        };
                        sessionStorage["user"]=JSON.stringify(obj);
                        break;
                    }
                }
                if(res){
                    sessionStorage["login"]="ok";
                    document.location.href="home.html";
                }
                else{
                    alert("Unfortunately,your password or email is false");
                }
          }
          else{
             if(AllPeople.email==email && AllPeople.password==password){
                setSuccessFor(emailValue);
                setSuccessFor(passwordValue);

                let obj={
                    name: AllPeople.name,
                    surname: AllPeople.surname
                };
                sessionStorage["user"]=JSON.stringify(obj);
               document.location.href="home.html";
             }
             else{
                alert("Unfortunately,your password or email is false");
            }
          }

        }
        else{
            alert("There are no any account on server. Please return to Register page");
        }
        function setSuccessFor(input) {
            let formControl = input.parentElement;
            formControl.className = 'form-group success';
        }

    })

})