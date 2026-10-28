const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullnameInput = document.getElementById("inp1");
    const emailInput = document.getElementById("inp2");
    const passwordInput = document.getElementById("inp3"); // or "id3" if that's your actual HTML

    console.log("Full name:", fullnameInput.value);
    console.log("Email:", emailInput.value);
    console.log("Password:", passwordInput.value);

    signupForm.reset();
});
