function onchange(){
    console.log("vishwas")
}
        var x = document.getElementById("Step1");
        var y = document.getElementById("Step2");
        var z = document.getElementById("Step3");

        function formIsValid() {
            let stack = [];
            let a = document.getElementsByClassName("form1");
            let errors = document.querySelectorAll(".form1 .error");
            let arr = document.querySelectorAll(".form1 input");

            for (let i = 0; i < arr.length; i++) {
                if (arr[i].value == "") {
                    errors[i].innerHTML = "This is required !";
                    errors[i].style.display = "block";
                    stack.push(false);
                }
                else {
                    errors[i].innerHTML = "";
                    errors[i].style.display = "none";
                    stack.push(true);
                }
            }

            for (let i = 0; i < stack.length; i++) {
                if (stack[i] == false)
                    return false;
            }
            return true;
        }
        
        function nextbtn() {

            if (formIsValid(true)) {
                console.log("vishwas");
                x.style.display = "none";
                y.style.display = "block";
                z.style.display = "none";
                document.getElementById("prev").style.display = "inline";
                
            }

        }

        function previous() {
            x.style.display = "";
            y.style.display = "none";
            z.style.display = "none";

        }
        function formIsValid2() {
            let stack = [];

            let errors = document.querySelectorAll(".form2 .error");
            let arr = document.querySelectorAll(".form2 input");

            for (let i = 0; i < arr.length; i++) {
                if (arr[i].value == "") {
                    errors[i].innerHTML = "This is required !";
                    errors[i].style.display = "block";
                    stack.push(false);
                }
                else {
                    errors[i].innerHTML = "";
                    errors[i].style.display = "none";
                    stack.push(true);
                }
            }

            for (let i = 0; i < stack.length; i++) {
                if (stack[i] == false)
                    return false;
            }
            return true;
        }
       

        function nextbn() {
            if (formIsValid2()) {
                x.style.display = "none";
                y.style.display = "none";
                z.style.display = "block";
            }
            document.getElementById("submit").style.display = "block";
        }
        function back() {
            x.style.display = "none";
            y.style.display = "block";
            z.style.display = "none";
        }
        function submitin() {
            let user = document.getElementById("user0");
            let password = document.getElementById("pass-d");
            let blood = document.getElementById("bldgrp");
            let qualif = document.getElementById("qualify");
            let name = document.getElementById("noname");
            let Dob = document.getElementById("datee");
            let addr = document.getElementById("adres");

            let erors = document.querySelectorAll("#Step3 .error");

            if (user.value == "") {
                erors[0].innerHTML = "this field is required";
                erors[0].style.display = "block";
            }

            if (password.value == "") {
                erors[1].innerHTML = "this field is required";
                erors[1].style.display = "block";
            }


            if (password.value != "" && user.value != "") {
                erors[0].innerHTML = "";
                erors[0].style.display = "none";
                erors[1].innerHTML = "";
                erors[1].style.display = "none";

                document.getElementsByClassName("boxcard")[0].style.display = "none";

                document.getElementsByClassName("Alldetails")[0].style.display = "block";

                let str = "";
                str += "<div>";
                str += "<div>" + "<span>Email:-</span>  " + user.value + "</div>";

                str += "<div>" + "<span>Password:-</span>  " + password.value + "</div>";
                str += "<div>" + "<span>Blood Group:-</span>  " + blood.value + "</div>";
                str += "<div>" + "<span>Qualification:-</span>  " + qualif.value + "</div>";
                str += "<div>" + "<span>Name</span>  " + name.value + "</div>";
                str += "<div>" + "<span>Date of birth:-</span>  " + Dob.value + "</div>";
                str += "<div>" + "<span>Address:-</span>  " + addr.value + "</div>";


                str += "</div>"

                document.getElementsByClassName("Alldetails")[0].innerHTML = str;
            }
        }

    