// Sample Faculty Data with Image URLs
const facultyData = [
  {
      name: "Dr. Birmohan Singh",
      experience: "30 years in Computer Science",
      expertise: "System Analysis and Design,Computer Graphics",
      availableSlots: ["10:00 AM", "11:00 AM", "2:00 PM"],
      profileClass: "profile-1", // Class for styling
      image: "http://sliet.ac.in/wp-content/uploads/avatars/5/6fc17d6735998f4f22a0e91fbf43b75c-bpfull.jpg" // Placeholder image
  },
  {
      name: "Dr. Damanpreet Singh",
      experience: "25 years in Software Engineering",
      expertise: "Data Analysis, Big Data",
      availableSlots: ["9:00 AM", "1:00 PM","2:00PM"],
      profileClass: "profile-2", // Class for styling
      image: "http://sliet.ac.in/wp-content/uploads/avatars/4/65783e7db0473-bpfull.jpg" // Placeholder image
  },
  {
      name: "Dr. Major Singh Goraya",
      experience: "15 years in Data Structure",
      expertise: "Data Structure and algroithm",
      availableSlots: ["9:00 PM", "10:00 PM","11:30 PM"],
      profileClass: "profile-3", // Class for styling
      image: "http://sliet.ac.in/wp-content/uploads/avatars/35/5e69c6be20c7e-bpfull.jpg" // Placeholder image
  },
  {
    name: "Dr. Manoj Sachan",
    experience: "16 years in Operating System",
    expertise: "Object oriented programming",
    availableSlots: ["12:00 PM", "3:00 PM","4:00 PM"],
    profileClass: "profile-4", // Class for styling
    image: "http://sliet.ac.in/wp-content/uploads/avatars/6/605c66bd3e3bc-bpfull.jpg"
  },
  
  {
    name: "Dr. Gurjinder Kaur",
    experience: "8 years in Cloud Computing",
    expertise: "Cloud Computing,web develpoment",
    availableSlots: ["10:00 PM", "1:00 PM","3:00 PM"],
    profileClass: "profile-5", // Class for styling
    image: "http://sliet.ac.in/wp-content/uploads/avatars/14/5f2245e7a7f1bde5dee5bda48e09d411-bpfull.jpg"
  },
  {
    name: "Dr. Amar Nath",
    experience: "14 years in Machine Learning",
    expertise: "ML,Data Science,AI",
    availableSlots: ["8:00 PM", "10:00 PM","2:00 PM"],
    profileClass: "profile-6", // Class for styling
    image: "http://sliet.ac.in/wp-content/uploads/avatars/467/66b8bb350cc46-bpfull.jpg"
  },
  {
    name: "Dr. Jagdeep Singh",
    experience: "15 years in web development",
    expertise: "Machine Learning,Development",
    availableSlots: ["11:00 PM", "3:00 PM","4:30 PM"],
    profileClass: "profile-7", // Class for styling
    image: "http://sliet.ac.in/wp-content/uploads/avatars/466/66f81ca30f4ff-bpfull.jpg"
  },
  {
    name: "Dr. Jatinder Pal Singh",
    experience: "15 years in Deep Learning",
    expertise: "Machine Learning,Deep Learning",
    availableSlots: ["9:30 PM", "11:30 PM","4:30 PM"],
    profileClass: "profile-8", // Class for styling
    image: "http://sliet.ac.in/wp-content/uploads/avatars/344/64edd5a68d11b-bpfull.jpg"
  },
  {
    name: "Dr. Tajinder Singh",
    experience: "15 years in Cyber Security",
    expertise: "Computer Network,Cyber Security",
    availableSlots: ["11:00 PM", "2:00 PM","4:30 PM"],
    profileClass: "profile-9", // Class for styling
    image: "http://sliet.ac.in/wp-content/uploads/avatars/468/64e3532d30fac-bpfull.jpg"
  },
  {
    name: "Dr. Manminder Singh",
    experience: "12 years in Distributed Operating Systems",
    expertise: "Computer Architecture,Operating Systems",
    availableSlots: ["12:00 PM", "1:00 PM","2:30 PM"],
    profileClass: "profile-10", // Class for styling
    image: "http://sliet.ac.in/wp-content/uploads/avatars/16/66693282b6269-bpfull.jpg"
  },
  {
    name: "Dr. Preetpal Kaur Buttar",
    experience: "10 years in Natural Language Processing.",
    expertise: "Image Processing, Remote Sensing",
    availableSlots: ["1:00 PM", "3:00 PM","4:30 PM"],
    profileClass: "profile-11", // Class for styling
    image: "http://sliet.ac.in/wp-content/uploads/avatars/349/632d98c75d80f-bpfull.jpg"
  },
  {
    name: "Dr. Utkarsh",
    experience: "12 years in Web development",
    expertise: "App development",
    availableSlots: ["10:00 PM", "1:30 PM","4:30 PM"],
    profileClass: "profile-12", // Class for styling
    image: "http://sliet.ac.in/wp-content/uploads/avatars/493/6165aace595a1-bpfull.jpg"
  },
];

// Render Faculty Profiles
const profileContainer = document.getElementById('profileContainer');
facultyData.forEach(faculty => {
  const profileDiv = document.createElement('div');
  profileDiv.classList.add('profile', faculty.profileClass);
  profileDiv.innerHTML = `
      <img src="${faculty.image}" alt="${faculty.name}" class="profile-image">
      <h3>${faculty.name}</h3>
      <p><strong>Experience:</strong> ${faculty.experience}</p>
      <p><strong>Expertise:</strong> ${faculty.expertise}</p>
  `;
  profileContainer.appendChild(profileDiv);
});

// Render Booking Slots
const bookingSlotContainer = document.getElementById('bookingSlotContainer');
facultyData.forEach(faculty => {
  faculty.availableSlots.forEach(slot => {
      const slotDiv = document.createElement('div');
      slotDiv.classList.add('slot', 'available');
      slotDiv.textContent = `${faculty.name}: ${slot}`;
      slotDiv.onclick = () => bookSlot(slotDiv, faculty.name);
      bookingSlotContainer.appendChild(slotDiv);
  });
});

// Book Slot Function
function bookSlot(slotElement, facultyName) {
  if (slotElement.classList.contains('available')) {
      slotElement.classList.remove('available');
      slotElement.classList.add('booked');
      slotElement.textContent += ' (Booked)';
      alert(`You have successfully booked a session with ${facultyName} at ${slotElement.textContent.split(': ')[1].split(' (Booked)')[0]}`);
  }
}
