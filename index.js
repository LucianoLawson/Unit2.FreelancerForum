const names = ["Alice", "Bob", "Carol", /* Add more names */];
const occupations = ["Writer", "Teacher", "Programmer", /* Add more occupations */];

const freelancers = [
  { name: "Alice", occupation: "Writer", price: 30 },
  { name: "Bob", occupation: "Teacher", price: 50 },
  // Add more initial freelancers here if needed
];

function renderFreelancers() {
  const freelancerList = document.getElementById("freelancer-list");

  // Clear the existing list
  freelancerList.innerHTML = "";

  // Loop through the freelancers array and create HTML elements to display them
  freelancers.forEach((freelancer) => {
    const freelancerItem = document.createElement("div");
    freelancerItem.classList.add("freelancer-item");

    // Create elements for name, occupation, and price
    const nameElement = document.createElement("span");
    nameElement.textContent = freelancer.name;

    const occupationElement = document.createElement("span");
    occupationElement.textContent = freelancer.occupation;

    const priceElement = document.createElement("span");
    priceElement.textContent = `$${freelancer.price}`;

    // Append elements to the freelancer item
    freelancerItem.appendChild(nameElement);
    freelancerItem.appendChild(occupationElement);
    freelancerItem.appendChild(priceElement);

    // Append the freelancer item to the list
    freelancerList.appendChild(freelancerItem);
  });
}

// Call the renderFreelancers function to display the initial data
renderFreelancers();

function calculateAverageStartingPrice() {
  const totalPrices = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
  const averagePrice = totalPrices / freelancers.length;

  // Display the average price on the page
  const averagePriceMessage = document.getElementById("average-price-message");
  averagePriceMessage.textContent = `Average Starting Price: $${averagePrice.toFixed(2)}`;
}

// Call the calculateAverageStartingPrice function to display the initial average
calculateAverageStartingPrice();

function generateRandomFreelancer() {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
  const randomPrice = Math.floor(Math.random() * 100) + 1; // Generate a random price between 1 and 100

  const newFreelancer = {
    name: randomName,
    occupation: randomOccupation,
    price: randomPrice,
  };

  freelancers.push(newFreelancer);
  renderFreelancers(); // Re-render the updated list of freelancers
  calculateAverageStartingPrice(); // Recalculate and update the average price
}

// Call the generateRandomFreelancer function using an interval (e.g., every 5 seconds)
setInterval(generateRandomFreelancer, 5000); // Adjust the interval duration as needed

