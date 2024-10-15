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
                infoBox.innerHTML = 'Input Neuron 1 (x1): Receives input data from the dataset, such as features like pixel intensities or numeric values.';
                break;
            case 'input2':
                infoBox.innerHTML = 'Input Neuron 2 (x2): Another input data point. Neural networks can have multiple inputs corresponding to different features.';
                break;
            case 'input3':
                infoBox.innerHTML = 'Input Neuron 3 (x3): Just like x1 and x2, it is part of the input layer that sends data to the hidden layers.';
                break;
            case 'hidden1':
                infoBox.innerHTML = 'Hidden Neuron 1 (h1): Processes input data by applying weights and an activation function, transforming input into something more meaningful.';
                break;
            case 'hidden2':
                infoBox.innerHTML = 'Hidden Neuron 2 (h2): A key neuron in the hidden layer, often responsible for learning complex patterns in the data.';
                break;
            case 'hidden3':
                infoBox.innerHTML = 'Hidden Neuron 3 (h3): Further processes the input before sending it to the output layer.';
                break;
            case 'output1':
                infoBox.innerHTML = 'Output Neuron 1 (y1): Outputs the final result (e.g., classification as "cat" or "dog" in an image recognition task).';
                break;
            case 'output2':
                infoBox.innerHTML = 'Output Neuron 2 (y2): Another output, typically used when dealing with multi-class classification problems.';
                break;
            default:
                infoBox.innerHTML = 'Click on a neuron to learn more!';
        }
    }
});
