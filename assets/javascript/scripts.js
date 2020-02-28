$(document).ready(function(){
  console.log("ready");

  function Character(name, healthPoints, image){
    this.name = name;
    this.healthPoints = healthPoints;
    this.image = image;
  }

  var obi = new Character("Obi-Wan Kenobs", 120,"https://www.indiewire.com/wp-content/uploads/2017/09/ewan-mcgregor-as-obi-wan-014.jpg?w=780" )
  var luke = new Character("Luke", 100, "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/luke-anakin-star-war-1565875142.jpg?crop=0.495xw:0.990xh;0,0&resize=480:*" )
  var characterArray = [obi, luke];
  console.log(characterArray)

  $(".characters").append("<div class=\"card\">")

  for(var i = 0; i < characterArray.length; i++){
    var img = $("<img/>", {
      class: "card-img-top",
      src: characterArray[i].image,
      alt: characterArray[i].name
     });
  $(".card").append(img)
  }

})