 // Get the necessary elements from the DOM
 const incrementButton = document.querySelector('.increment-button');
 const decrementButton = document.querySelector('.decrement-button');
 const counterInput = document.getElementById('counter-input');

 // Initialize the counter value
 let counter = 0;

 // Event listener for the increment button
 incrementButton.addEventListener('click', () => {
     counter++;
     counterInput.value = counter;
 });

 // Event listener for the decrement button
 decrementButton.addEventListener('click', () => {
     if (counter > 0) {
         counter--;
         counterInput.value = counter;
     }
 });

 // Event listener for the reset button
 document.querySelector('.reset-button').addEventListener('click', () => {
     counter = 0;
     counterInput.value = counter;
 });

 // Event listener for the input change
 counterInput.addEventListener('input', () => {
     const inputValue = parseInt(counterInput.value);
     if (!isNaN(inputValue)) {
         counter = inputValue;
     }
 });
