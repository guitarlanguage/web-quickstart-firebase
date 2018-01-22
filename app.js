(function(){

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyA54uwjRP7ZlRD5giVg6p5IVOCofMvDXwE",
      authDomain: "web-quickstart-474db.firebaseapp.com",
      databaseURL: "https://web-quickstart-474db.firebaseio.com",
      projectId: "web-quickstart-474db",
      storageBucket: "",
      messagingSenderId: "760374629085"
    };
    firebase.initializeApp(config);

    // Get Elements
    const txtEmail = $("#txtEmail");
    const txtPassword = $("#txtPassword");
    const btnLogin = $("#btnLogin");
    const btnSignUp = $("#btnSignUp");
    const btnLogout = $("#btnLogout");

    //add login event
    btnLogin.on("click", function(event){
        event.preventDefault();
        // Get email and password
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        // Sign In
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));

    });

    // add event for sign up button
    btnSignUp.on("click", function(event){
        event.preventDefault();
        // Get email and password
        //TODO: Check for real email!!!
        const email = txtEmail.val();
        const pass = txtPassword.val();
        const auth = firebase.auth();
        // Sign In
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));

    });

    btnLogout.on("click", function(){
        firebase.auth().signOut();
    });

    // Add a real time listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
            console.log(firebaseUser);
            btnLogout.classList.remove('hide');
        } else {
            console.log("not logged in");
            btnLogout.classList.add('hide')
        }
    });


    // var bigOne = document.getElementById('big-one');
    // // var bigOne = $('#big-one');
    // var dbRef = firebase.databse().ref().child('text');
    // dbRef.on("value", snap => bigOne.innerText = snap.val());

}());
