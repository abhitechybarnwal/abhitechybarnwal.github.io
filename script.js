// script.js
document.addEventListener("DOMContentLoaded", function() {
    const neurons = document.querySelectorAll('.neuron');
    
    neurons.forEach((neuron, index) => {
        neuron.addEventListener('click', () => {
            neuron.classList.add('active');
            setTimeout(() => {
                neuron.classList.remove('active');
            }, 1000);
        });
    });
});
