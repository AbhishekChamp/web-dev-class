document.getElementById("userForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");

    const emailValue = emailInput.value;

    if (!emailValue.includes("@")) {
        emailError.textContent = "Please enter a valid email address";
        emailInput.style.border = "2px solid red";
        return;
    }

    emailError.textContent = "";
    emailInput.style.border = "2px solid green";

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const country = document.getElementById("country").value;
    const about = document.getElementById("about").value;
    const dob = document.getElementById("dob").value;

    // Radio
    const gender =
        document.querySelector('input[name="gender"]:checked')?.value ||
        "No gender selected";

    const skills = [];
    document.querySelectorAll(".skills:checked").forEach((skill) => {
        skills.push(skill.value);
    });

    const result = {
        name,
        email: emailValue,
        age,
        gender,
        skills,
        country,
        about,
        dob,
    };

    window.name = JSON.stringify(result);

    window.location.href = "result.html";
});
