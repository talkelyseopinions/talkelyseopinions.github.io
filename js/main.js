
var opinion = [
" i am upset that selena gomez is back with justin beiber", 'why am i such an open book', 'the name of justin timberlake’s new album is stupid', 'i am here for the bean events on fb', 'WILL THIS 7 DAYS, 7 B&W PICTURES PHENOMENON EVER END',' i love wishbone lunch', "i’m not here for elaborate proposals of any kind", "hot bagels with cream cheese are gross", 'AMANDA KNOX IS NOT GUILTY', "i dig politeness", "i think the hype over eminem’s anti-trump freestyle is silly", "kelly clarkson’s christmas album is the best one", "wonderful christmastime is pretty bad, but it’s not in the top three because the 2nd and 3rd placeholders are both alvin & the chipmunks covers", "Barbra Streisand’s cover of Jingle Bells is the worst Christmas song", "kelly clarkson’s christmas album is the best one", "david s pumpkins is like the least funny thing SNL has ever done!!!!!!", "i like white chocolate but like not a lot", "the custard cornbread makes me feel scared","microwave my ice cream until it is half melted. the best ice cream is haagen daaz chocolate peanut butter half melted", "i dont like pumpkin spice lattes", "i hate david s pumpkins and it hearts my hurt bc i love tom hanks", "I ALWAYS GET JUNIOR MINTS AT THE MOVIES. THERE IS NO OTHER OPTION.", "i love the new taylor swift single and the music video and i dont care about game of thrones", "i think that trump’s looking at the eclipse yesterday was blown way out of proportion", "dark meat all the way", "the eclipse is almost as bad as everyone posting blurry firework photos on the 4th of july", "I'm gonna put my head under the tap and wash my hair with limitless brew", "i only made it 25% through inception", "a basilisk would win in a fight between a vampire and a basilisk. vampires aren't cut out for self defense.", "no sunny side eggs. no burgers with eggs. no egg in a hole", "any sort of car decoration is an abomination. bumper stickers, stick people.", "i am really afraid of sinkholes", "movie theater with butter and salt: yes. homemade: no. garretts: yes.", "chili isn’t soup. chili is chili. stew is stew. soup is significantly more liquidy than chili or stew.", 'OMG I LOVE THAT IF I WAS INVISIBLE BY CLAY AIKEN','i dont care about moon phases','i think people are wasting my time when they ask me what sign i am and then tell me about how compatible or incompatible we are', "Kourtney is my favorite Kardashian. Khloe’s creepin’ up. Kylie is my least favorite. (Rob doesn’t count)", 'if i was on death row my last meal would 100% include little debbie brownies', 
]




function cycleOpinons(){
  var index=Math.floor(Math.random()*opinion.length).toString();
  console.log(index);
  // if (indx < opinion.length-1){
  //   indx = index + 1;
  // } else {
  //   indx = 0;
  // }
  return (opinion[index]);
  // console.log(indx)
};
 
$('#buttondiv').on('click', function(){
    var opinion = cycleOpinons();
     $('#theopinion').html(opinion);
     // $('.description').hide("slow");
      event.preventDefault();
 });




$('#buttondiv').hover(function(){
  $('#button').toggleClass('font-effect-neon')
  // $('#button').toggleClass('shimmer') 
});





// //carousel
//  var images = ['img/ethanD.png', 'img/rosemarym.png', 'img/sarahl.png','img/villiet.png'

//     ];

// var index = 0;

// //clicking the next button 
// $('#next').on('click',function(){
//   //makes the index one more
//   index = nextButton(index);  
//   console.log(index);
//   //changes image attribute to index in array
//   $('#gossipgif').attr('src',images[index]);
// });

// //clicking previous button
// $('#prev').on('click',function(){
//   index = backButton(index);  
//   $('#gossipgif').attr('src',images[index]);
// });




// function nextButton (){
//   //if the index is one less than the total length, otherwise will go to last one twice
//   var index;
//   if (index < images.length-1){
//     index = index + 1;
//   } else {
//     index = 0;
//   }
//   // console.log(index);
//   return(index);
// };


// function backButton () {
//   if (index > 0){
//     index = index - 1;
//   }
//   else {
//     index = 5;
//   }
//   // console.log(index);
//   return(index);
  
// };
// function getRandOpinionNumber(){
//    return 
// };


//print opinion
// var index=Math.floor(Math.random()*opinion.length).toString();
// console.log(index);


