const readyButton = document.getElementById('readyButton')
readyButton.addEventListener('click', playIntro);

const videoContainer = document.getElementById('videoContainer')

const videoElement = document.getElementById('currentVideo')
const questionTitle = document.getElementById('questionTitle')
const welcomeSection = document.getElementById('welcome')

function playIntro() {
  welcomeSection.classList.add('d-none')
  videoContainer.classList.remove('d-none')
  questionTitle.classList.remove('d-none')
  // videoElement.addEventListener('ended', loadIdleVideo);
  videoElement.play()
}

const questions = document.querySelectorAll('.videoQuestion');
const path = 'videos/'

questions.forEach(element => element.addEventListener('click', event => {
  const newVideo = event.target.getAttribute('data-file')
  questionTitle.innerHTML = event.target.getAttribute('data-title')
  videoElement.src = `${path}${newVideo}`
  videoElement.play()
}));

function loadIdleVideo() {
  const idleVideos = ['coffee.mp4', 'look_left.mp4', 'smile.mp4']
  const videoFile = idleVideos[Math.floor(Math.random() * idleVideos.length)];

  console.log(`Playing file ${videoFile}`)

  videoElement.src = `${path}${videoFile}`
  videoElement.play()
}