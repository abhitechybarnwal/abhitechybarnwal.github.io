// script.js

document.addEventListener('DOMContentLoaded', function() {
    const neurons = document.querySelectorAll('.neuron');
    const infoBox = document.getElementById('info-text');

    // Add click event listeners to neurons
    neurons.forEach(neuron => {
        neuron.addEventListener('click', function() {
            displayNeuronInfo(neuron.id);
        });
    });

    // Function to display information about the clicked neuron
    function displayNeuronInfo(neuronId) {
        switch(neuronId) {
            case 'input1':
                infoBox.innerHTML = 'Input Brain x1: This brain receives information like "How sunny is it?" and sends it to the hidden brains!';
                break;
            case 'input2':
                infoBox.innerHTML = 'Input Brain x2: This brain might know "What temperature is it?" and works with other brains to make decisions.';
                break;
            case 'input3':
                infoBox.innerHTML = 'Input Brain x3: Like its friends, this brain takes in cool info and helps the whole team learn!';
                break;
            case 'hidden1':
                infoBox.innerHTML = 'Hidden Brain h1: This brain takes the info from x1, x2, and x3 and makes it more useful for the final decision!';
                break;
            case 'hidden2':
                infoBox.innerHTML = 'Hidden Brain h2: Another brain in the middle! It helps the network learn by figuring out patterns.';
                break;
            case 'hidden3':
                infoBox.innerHTML = 'Hidden Brain h3: This brain is super smart! It helps the network understand complex things like if it\'s a sunny day!';
                break;
            case 'output1':
                infoBox.innerHTML = 'Output Brain y1: "Hmm, I think today is a good day to play outside!" This brain makes the final decision.';
                break;
            case 'output2':
                infoBox.innerHTML = 'Output Brain y2: "Maybe we should stay indoors." It helps decide based on all the info from other brains.';
                break;
            default:
                infoBox.innerHTML = 'Click on a brain to find out what it does!';
        }
    }
});
