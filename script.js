function calculateAge() {
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value) - 1; // JavaScript months are 0-indexed
    const year = parseInt(document.getElementById("year").value);
    
    if (!day || !month || !year) {
      document.getElementById("result").textContent = "Please enter a valid date.";
      return;
    }
  
    const birthDate = new Date(year, month, day);
    const today = new Date();
  
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();
  
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      age--;
    }
  
    document.getElementById("result").textContent = `Your age is ${age} years.`;
  }
  