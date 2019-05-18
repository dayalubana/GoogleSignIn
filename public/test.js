document.getElementById('data').style.display='none';
function onSignIn(googleUser){
  var profile=googleUser.getBasicProfile();
  console.log(profile);
  console.log(profile.getEmail());
  console.log(profile.getImageUrl());
  // document.getElementsByClassName('data').innerHTML='asdkjlk'
}
