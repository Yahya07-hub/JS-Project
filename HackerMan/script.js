let username = prompt('Enter usernam you wanna to hack: ');

if (!username || username === null) {
  alert('Please enter a valid username');
//   return;
}

const hackingSteps = [
  "Initializing Hacking...",
  "Loaded all Hacking Tools",
  "Connecting to Instagram",
  "Connecting to server 1",
  "Connection failed. Retrying...",
  "Connecting to server 2...",
  "Connected Successfully",
  `Found Username ${username}`,
  "Trying Brute Force...",
  "500K passwords tried...",
  "Match not found",
  "Another 500K passwords tried...",
  "Match not found...",
  "Another 500K passwords tried...",
  "Match not found...",
  "Another 500K passwords tried...",
  "Match found...",
  "Accessing Account...",
  "Hack Successful...",
  "Account Hacked...",
  `https://www.instagram.com/${username}/`
];

const delay = async (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const simulateHackingProcess = async () => {
  
  for (let i = 0; i < hackingSteps.length; i++) {
    messages.innerHTML += hackingSteps[i] + "<br>";
    await delay(Math.random() * 3000 + 2000); // random delay between 2-5 seconds
  }

  let dotIndex = 0;
  // let dotInterval;

  // for (let i = 0; i < hackingSteps.length; i++) {
  //   messages.innerHTML += hackingSteps[i] + '<br>';
  //   await delay(Math.random() * 3000 + 2000); // random delay between 2-5 seconds
  //   setInterval(() => {
  //     messages.innerHTML = messages.innerHTML + "." 
  //   }, 500);

  // }

 

  
};


simulateHackingProcess();
