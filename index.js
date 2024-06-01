// index.js

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-primary');

    const votes = {
        'Mr. Cute': 0,
        'Mx. Monkey': 0,
        'Ms. Zebra': 0,
        'Dr. Lion': 0,
        'Me. Panda': 0
    };

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const animalName = event.target.value || event.target.innerText;
            votes[animalName]++;
            alert(`${animalName}: ${votes[animalName]} votes`);
        });
    });
});



 

   



 