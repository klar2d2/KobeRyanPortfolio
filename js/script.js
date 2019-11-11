let centerHead = document.getElementById('center-head')
let centerPara = document.getElementById('center-para')
let centerLink = document.getElementById('center-link')

function handleClick() {
  let subject = event.target.id
  if (subject === 'contact') {
    centerHead.innerHTML =  'Contact',
    centerPara.innerHTML = 'The best way to contact me is via email at koberyan@comcast.net. Always happy to chat!'
  }
  if (subject === 'about-me') {
    centerHead.innerHTML =  'About Me',
    centerPara.innerHTML = 'Fullstack Developer with a knack for producing ideas and collaborating.'
  }
  if (subject === 'resume') {

  }
  if (subject === 'met-museum') {
    centerHead.innerHTML = 'Met Museum Artwork Organizer',
    centerPara.innerHTML = 'An idea I came up with working at the Seattle Art Museum, this app allows you to look up your favorite art from the MET&#39s archives, collect your favorites into a personal list, and see if they are currently on display. Noteable technologies are Express.js, Node.js and JavaScript.'
    centerLink.innerHTML = 'https://met-collection-creator.herokuapp.com/'
  }
  if (subject === 'shoe-lace-simulator') {
    centerHead.innerHTML = 'Shoe Lace Simulator',
    centerPara.innerHTML = 'Inspired by the frustration of games like QWOP and Getting Over It with Bennett Foddy, I implemented a basic shoe tying simulator. Notabele technologies user are Phaser.io, HTML, CSS'
    centerLink.innerHTML = 'https://klar2d2.github.io/shoe-project/'
  }
  if (subject === 'inkline') {
    centerHead.innerHTML = 'Inkline',
    centerPara.innerHTML = 'My first group project, Inkline is an app that connects with Facebook Oauth and grabs images off of our user&#39s Instagram to display. Noteable technologies used were TypeScript, Facebook Oauth and Material-UI'
    centerLink.innerHTML = 'https://inkline-gtol.herokuapp.com/'
  }
  if (subject === 'munch-my-lawn') {
    centerHead.innerHTML = 'Munch My Lawn',
    centerPara.innerHTML = 'Originating as a group project to practice Socket.io, Munch My Lawn is a CMS to connect homeowners to goats, skipping the hassle of a middle man farmer. Notable technologies used were React,Socket and SASS.'
    centerLink.innerHTML = 'https://munchmylawn.herokuapp.com/'
  }
}
