let postUsersArray = [
  {
    user: "makima32",
    options: "IA",
    image: "/img/imagenes-usuarios-subidas/sukuna-AI.png"
  },
  {
    user: "Satoru Gojo 69",
    options: "IA",
    image: "/img/imagenes-usuarios-subidas/vivy-ruined-AI.png"
  },
  {
    user: "Turboabuela777",
    options: "IA",
    image: "/img/imagenes-usuarios-subidas/makima-AI.png"
  },
  {
    user: "Viktor",
    options: "IA",
    image: "/img/imagenes-usuarios-subidas/vivy-AI.png"
  }
];

function showPostUsers() {
  const POST_USER_DIV = document.getElementById("user-art-div");

  let allUploadUsers = "";
  for (let i = 0; i < postUsersArray.length; i++) {
    allUploadUsers += `
      <div>
        <h2>${postUsersArray[i].user}</h2>
        <p>${postUsersArray[i].options}</p>
        <img class="treatment-image" src="${postUsersArray[i].image}" alt="Uploaded Image" />
      </div>
    `;
  }

  POST_USER_DIV.innerHTML = allUploadUsers;
}

function listenForLinkSubmit() {
  const UPLOAD_FORM = document.getElementById("upload-form");
  UPLOAD_FORM.addEventListener("submit", insertPostInArrayAndShow);
}

function insertPostInArray(e) {
  e.preventDefault();

  const USER = document.getElementById("user").value;
  const OPTIONS = document.getElementById("options").value;
  const IMAGE_UPLOAD = document.getElementById("image-upload").files[0];

  const READER = new FileReader();

  READER.onload = function (event) {
    const IMAGE_URL = event.target.result;

    postUsersArray.push({
      user: USER,
      options: OPTIONS,
      image: IMAGE_URL
    });

    showPostUsers();
  };

  READER.readAsDataURL(IMAGE_UPLOAD);
}

function insertPostInArrayAndShow(e) {
  insertPostInArray(e);
}

function listenForDeleteButton() {
  const DELETE_BUTTON = document.getElementById("delete-all-img-button");
  DELETE_BUTTON.addEventListener("click", deleteAllImages);
}

function deleteAllImages() {
  postUsersArray = [];
  showPostUsers();
}

// Start functions
showPostUsers();
listenForLinkSubmit();
listenForDeleteButton();
