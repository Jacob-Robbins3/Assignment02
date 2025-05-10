document.addEventListener('DOMContentLoaded', function () {
    // Data for pets
const pets = [
  {
    name: "Bella",
    type: "Dog",
    breed: "Golden",
    age: "3 years",
    gender: "Female",
    fertile: "Spayed",
    image: "https://www.goldenrescue.com/wp-content/uploads/2023/03/7.jpg",
    id: "9876543210",
    status: [
      "Health checked",
      "Vaccinations up to date",
      "Regularly dewormed",
      "Microchipped"
    ],
    description: "I'm an energetic, playful pup who loves running around at the park and getting belly rubs! I enjoy playing fetch and making new friends."
  },
  {
    name: "Max",
    type: "Cat",
    breed: "Maine Coon",
    age: "4 years",
    gender: "Male",
    fertile: "",
    image: "https://www.trupanion.com/images/trupanionwebsitelibraries/bg/maine-coon-cat-faceba48d957-7593-4955-a699-cc65f2deaf6a.jpg?sfvrsn=3b3bcced_5",
    id: "987654321",
    status: [
      "Vaccinated and healthy",
      "Recently treated for ear mites",
      "No known allergies",
      "Healthy weight, regular vet visits"
    ],
    description: "I’m a playful and independent cat who enjoys some quiet time, but I also love a good game with feather toys. Once I get comfortable, I’m affectionate and will curl up next to you for some petting!"
  },
  {
    name: "Roscoe",
    type: "Dog",
    breed: "Shepherd/Labrador",
    age: "8 years",
    gender: "Male",
    fertile: "Spayed",
    image: "https://dogwizard.com/wp-content/uploads/2024/08/pexels-irina-zhur-5306735-9862786-1-scaled.jpg",
    id: "1029384756",
    status: [
      "Vaccinated and healthy",
      "Flea-free",
      "Chronic hip issues (managed with meds)",
      "No current health concerns"
    ],
    description: "I'm an energetic and loyal companion who loves to run and play. I’m a bit cautious around strangers but quickly warm up when I feel safe. I’d love a home with a yard to run around in!"
  },
  {
    name: "Sam",
    type: "Cat",
    breed: "Siamese",
    age: "1 years",
    gender: "Female",
    fertile: "Spayed",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRiATys1PJLKNKDx89oBWWMoimN19x_e3ABQ&s",
    id: "5678901234",
    status: [
      "Vaccinated and healthy",
      "Healthy kidneys (recently checked)",
      "No fleas or ticks",
      "Adapts well to change"
    ],
    description: "I’m a vocal, loving little lady who will tell you exactly what I want. I like to follow you around and cuddle on my own terms, but I’m very independent at the same time. I’m a great companion for someone who likes a chatty kitty!"
  },
  {
    name: "Charlie",
    type: "Dog",
    breed: "Beagle/Basset Hound Mix",
    age: "2 years",
    gender: "Male",
    fertile: "Neutered",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTimInTH6HnJwfqFjvKB8m4N5BdIhmL-VXulg&s",
    id: "5432109876",
    status: [
      "Vaccinated and healthy",
      "Slightly overweight (on a weight-loss plan)",
      "Has a mild case of hip dysplasia",
      "No serious health issues at this time"
    ],
    description: "I’m a friendly, laid-back dog with a nose for sniffing out snacks! I’m a bit of a couch potato but love going for walks or short runs. I’m also a big fan of belly rubs."
  },
  {
    name: "Tiger",
    type: "Cat",
    breed: "Orange Tabby",
    age: "10 years",
    gender: "Male",
    fertile: "Neutered",
    image: "https://theperrynews.com/wp-content/uploads/2020/01/hulgan-cat.jpg",
    id: "1294712320",
    status: [
      "Vaccinated and healthy",
      "No known allergies",
      "Excellent health overall",
      "Moderate anxiety (responds well to training)"
    ],
    description: "I'm a chill, friendly guy who enjoys lounging in sunbeams and watching the world go by. I’m low-maintenance and would love a quiet home where I can nap and cuddle up on the couch."
  },
  {
    name: "Baxter",
    type: "Dog",
    breed: "Beagle",
    age: "5 years",
    gender: "Male",
    fertile: "Spayed",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLOL3KKagfr3xGq05sYNxclr3gqC9hlGnK-A&s",
    id: "9820000364",
    status: [
      "Health checked",
      "Vaccinations up to date",
      "Regularly dewormed",
      "Microchipped"
    ],
    description: "I'm a lovable Beagle with a knack for sniffing out fun! I was rescued from a shelter and have blossomed into a friendly and outgoing boy. I love long walks and have a keen sense of smell. I'm great with kids and other dogs which makes me a perfect family pet!"
  },
  {
    name: "Whiskers",
    type: "Cat",
    breed: "Persian",
    age: "4 years",
    gender: "Male",
    fertile: "Neutered",
    image: "https://geniusvets.s3.amazonaws.com/gv-cat-breeds/Persian-1.jpg",
    id: "9820124921",
    status: [
      "Health checked",
      "Vaccinations up to date",
      "Regularly dewormed",
      "Microchipped"
    ],
    description: "I'm a majestic Persian cat with a fluffy coat and a calm demeanor. I'm the epitome of relaxation, and I enjoy spending my days lounging by the window, watching birds, and occasionally chasing a feather toy. I have a quiet personality and am perfect for someone looking for a laid-back companion."
  },
  {
    name: "Sadie",
    type: "Dog",
    breed: "Labrador Retriever",
    age: "3 years",
    gender: "Female",
    fertile: "Spayed",
    image: "https://static.wikia.nocookie.net/animals/images/5/53/Image-1462053992.jpeg/revision/latest?cb=20160430220632",
    id: "9283040212",
    status: [
      "Health checked",
      "Vaccinations up to date",
      "Regularly dewormed",
      "Microchipped"
    ],
    description: "I'm a sweet and energetic Labrador Retriever who loves to play fetch and swim! I'm a social butterfly and enjoy being around people and other dogs. I was rescued from an animal shelter and am looking for a family to call my own. I love going on adventures and have a playful spirit."
  },
  {
    name: "Luna",
    type: "Dog",
    breed: "Siberian Husky",
    age: "2 years",
    gender: "Female",
    fertile: "Spayed",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd34abYkePp2ARaitNVHLeAheeRg_NLaHttQ&amp;s",
    id: "1000000010",
    status: [
      "Health checked",
      "Vaccinated",
      "No hip issues",
      "Energetic and active"
    ],
    description: "I'm a beautiful Siberian Husky with a love for the snow and long runs. I thrive with active families and enjoy pulling sleds or playing fetch!"
  },
  {
    name: "Oliver",
    type: "Cat",
    breed: "British Shorthair",
    age: "6 years",
    gender: "Male",
    fertile: "Neutered",
    image: "https://dbw3zep4prcju.cloudfront.net/animal/63988ea7-1f0b-4ea9-959f-7d6d5d30fe5c/image/6274f6be-1454-4e2d-97c0-60fbb593bfb3.jpg?versionId=VL_ob4e2hKNrPJfguTq35cclbuVLa36K&amp;bust=1735059408&amp;width=720",
    id: "1000000011",
    status: [
      "Vaccinated",
      "Indoor trained",
      "Low maintenance",
      "Healthy appetite"
    ],
    description: "I'm a dignified British Shorthair who loves to lounge. I’m affectionate but not clingy, making me the perfect companion for a peaceful home."
  },
  {
    name: "Rocky",
    type: "Dog",
    breed: "Pitbull Mix",
    age: "4 years",
    gender: "Male",
    fertile: "Neutered",
    image: "https://breedatlas.net/wp-content/uploads/2024/04/pitbull-mixes-728x410.jpg.webp",
    id: "1000000012",
    status: [
      "Fully vaccinated",
      "Trained in basic commands",
      "Loves fetch",
      "Gentle with kids"
    ],
    description: "Don’t let my strong build fool you — I'm a big softie who loves cuddles. I’m eager to please and ready for a forever home."
  },
  {
    name: "Mittens",
    type: "Cat",
    breed: "Tuxedo Cat",
    age: "5 years",
    gender: "Female",
    fertile: "Spayed",
    image: "https://www.thesprucepets.com/thmb/e4neS1OT0x2DK2qrKb26eJMnxKs=/1080x0/filters:no_upscale():strip_icc()/35616731_1598735883572052_5494475739635908608_n-5b45332ec9e77c0037110989.jpg",
    id: "1000000013",
    status: [
      "House trained",
      "Friendly with other cats",
      "Healthy",
      "Recently groomed"
    ],
    description: "I'm a stylish and sweet tuxedo cat who enjoys lap time and string toys. I get along well with other cats and love sunbathing by the window."
  },
  {
    name: "Duke",
    type: "Dog",
    breed: "Doberman Pinscher",
    age: "7 years",
    gender: "Male",
    fertile: "Neutered",
    image: "https://static.wikia.nocookie.net/dogs/images/3/3f/Dobermann.png/revision/latest?cb=20230122041248",
    id: "1000000014",
    status: [
      "Vaccinated and microchipped",
      "Protective instincts",
      "Obedience trained",
      "Needs regular exercise"
    ],
    description: "I’m a loyal and alert Doberman who takes guarding seriously. I love my humans fiercely and enjoy structured play and training."
  },
  {
    name: "Cleo",
    type: "Cat",
    breed: "Calico",
    age: "3 years",
    gender: "Female",
    fertile: "Spayed",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Taiwanese_Dominantly_Black_Calico_Cat.jpg/250px-Taiwanese_Dominantly_Black_Calico_Cat.jpg",
    id: "1000000015",
    status: [
      "Vaccinated",
      "No known health issues",
      "Playful and vocal",
      "Well-groomed coat"
    ],
    description: "I'm a feisty Calico who enjoys attention and climbing adventures. I bring a splash of color and personality to any home!"
  },
  {
    name: "Zeus",
    type: "Dog",
    breed: "Great Dane",
    age: "6 years",
    gender: "Male",
    fertile: "Neutered",
    image: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/07141952/Great-Dane-standing-in-profile-outdoors1.jpg",
    id: "1000000016",
    status: [
      "Vaccinated",
      "Large breed experience recommended",
      "Calm indoors",
      "Gentle giant"
    ],
    description: "Though I’m a giant, I’m gentle and friendly. I love lounging around and being with my family — I just need space for my big heart!"
  },
  {
    name: "Snowball",
    type: "Cat",
    breed: "Ragdoll",
    age: "2 years",
    gender: "Male",
    fertile: "Neutered",
    image: "https://yourfemininecharm.com/wp-content/uploads/2021/06/cd1bfb73-39fa-4e60-a007-1222c5b4ef1e-2.jpg?w=1024",
    id: "1000000017",
    status: [
      "Fully vaccinated",
      "Very cuddly",
      "Soft and hypoallergenic coat",
      "Great with kids"
    ],
    description: "I’m a fluffy Ragdoll who loves to be held like a baby. I’m gentle, calm, and perfect for anyone who wants a cuddly feline companion."
  },
  {
    name: "Bailey",
    type: "Dog",
    breed: "Cocker Spaniel",
    age: "3 years",
    gender: "Female",
    fertile: "Spayed",
    image: "https://cdn.mos.cms.futurecdn.net/x68vVqdoaizkravdRSZYi8.jpg",
    id: "1000000018",
    status: [
      "Spayed",
      "House trained",
      "Friendly with kids and pets",
      "Enjoys grooming"
    ],
    description: "I’m a cheerful and elegant Cocker Spaniel who loves being pampered. I have a wagging tail for everyone and would love a home to call my own!"
  }
];

	const petContainer = document.getElementById('petContainer');
    const loadMoreBtn = document.getElementById('loadMoreBtn');

    // Modal elements
    const petModal = new bootstrap.Modal(document.getElementById('petModal'));
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalAge = document.getElementById('modalAge');
    const modalGender = document.getElementById('modalGender');
    const modalType = document.getElementById('modalType');
    
    // Initialize Create Modal Button (you mentioned a .btn-primary button)
    document.querySelector('.btn-primary').addEventListener('click', function () {
        var myModal = new bootstrap.Modal(document.getElementById('createModal'));
        myModal.show();
    });

    // State to keep track of how many pets are loaded
    let currentIndex = 0;
    const petsPerPage = 9;

    // Load pets in batches of 9
    function loadPets() {
        const nextPets = pets.slice(currentIndex, currentIndex + petsPerPage);
        nextPets.forEach(pet => {
            const card = createPetCard(pet);
            petContainer.appendChild(card);
        });
        currentIndex += petsPerPage;

        // Hide the button if no more pets
        if (currentIndex >= pets.length) {
            loadMoreBtn.style.display = 'none';
        }
    }

    // Create a pet card with event listener for View Details
    function createPetCard(pet) {
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'mb-4');

        card.innerHTML = `
            <div class="card h-100">
                <img src="${pet.image}" class="card-img-top" alt="${pet.name}">
                <div class="card-body">
                    <h5 class="card-title">${pet.name}</h5>
                    <p class="card-text">Age: ${pet.age}, Gender: ${pet.gender}, Type: ${pet.type}</p>
                    <button class="btn btn-primary view-details-btn">View Details</button>
                    <button class="btn btn-danger delete-btn">Delete</button>
                </div>
            </div>
        `;

        const button = card.querySelector('.view-details-btn');
        button.addEventListener('click', () => showPetDetails(pet.id));

        // Delete button functionality
        const deleteButton = card.querySelector('.delete-btn');
        deleteButton.addEventListener('click', () => {
            deletePet(pet.id);
        });

        return card;
    }

    // Show pet details in modal
    function showPetDetails(petId) {
        const pet = pets.find(p => p.id === petId);
        if (pet) {
            modalTitle.textContent = pet.name;
            modalImage.src = pet.image;
            modalImage.alt = pet.name;
            modalAge.textContent = `Age: ${pet.age}`;
            modalGender.textContent = `Gender: ${pet.gender}`;
            modalType.textContent = `Type: ${pet.type}`;
            document.getElementById('modalDescription').textContent = `Description: ${pet.description}`;

            // Populate the status list in the modal
            const statusList = document.getElementById('modalStatus');
            statusList.innerHTML = ''; // Clear any previous status items
            pet.status.forEach(statusItem => {
                const li = document.createElement('li');
                li.textContent = statusItem;
                statusList.appendChild(li);
            });

            // Show the modal
            petModal.show();
        }
    }

    // Event listener for Load More button
    loadMoreBtn.addEventListener('click', loadPets);

    // Delete pet
    function deletePet(petId) {
        const petIndex = pets.findIndex(p => p.id === petId);
        if (petIndex !== -1) {
            pets.splice(petIndex, 1); // Remove the pet from the array
            refreshPets();
        }
    }

    // Refresh pet cards after delete or add
    function refreshPets() {
        petContainer.innerHTML = ''; // Clear current pet cards
        currentIndex = 0; // Reset the page index
        loadPets(); // Reload the first batch of pets
    }

    // Add a pet
    document.getElementById('addPetForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const newPet = {
            name: document.getElementById('petName').value,
            type: document.getElementById('petType').value,
            breed: document.getElementById('petBreed').value,
            age: document.getElementById('petAge').value,
            gender: document.getElementById('petGender').value,
            image: document.getElementById('petImage').value,
            description: document.getElementById('petDescription').value,
            id: Date.now().toString(), // Unique ID based on timestamp
            status: [] // Empty status list for now
        };

        pets.push(newPet); // Add the new pet to the list
        refreshPets(); // Refresh the pet cards to include the new pet

        // Reset the form
        document.getElementById('addPetForm').reset();
        var myModal = bootstrap.Modal.getInstance(document.getElementById('createModal'));
        myModal.hide(); // Close the modal
    });

    // Initial load
    loadPets();
});