
var opinion = [
" i am upset that selena gomez is back with justin beiber", 'i am here for the bean events on fb', 'WILL THIS `7 DAYS, 7 B&W PICTURES` PHENOMENON EVER END',' i love wishbone lunch', "i’m not here for elaborate proposals of any kind", "i hate the `7 days, 7 black & white photos of your life` thing that’s taking over my fb feed", "hot bagels with cream cheese are gross", "i dig politeness", "i think the hype over eminem’s anti-trump freestyle is silly", "kelly clarkson’s christmas album is the best one", "wonderful christmastime is pretty bad, but it’s not in the top three because the 2nd and 3rd placeholders are both alvin & the chipmunks covers", "Barbra Streisand’s cover of Jingle Bells is the worst Christmas song", "kelly clarkson’s christmas album is the best one", "david s pumpkins is like the least funny thing SNL has ever done!!!!!!", "i like white chocolate but like not a lot", "the custard cornbread makes me feel scared","microwave my ice cream until it is half melted. the best ice cream is haagen daaz chocolate peanut butter half melted", "i dont like pumpkin spice lattes", "i hate david s pumpkins and it hearts my hurt bc i love tom hanks", "I ALWAYS GET JUNIOR MINTS AT THE MOVIES. THERE IS NO OTHER OPTION.", "i love the new taylor swift single and the music video and i dont care about game of thrones", "i think that trump’s looking at the eclipse yesterday was blown way out of proportion", "dark meat all the way", "the eclipse is almost as bad as everyone posting blurry firework photos on the 4th of july", "I'm gonna put my head under the tap and wash my hair with limitless brew", "i only made it 25% through inception", "a vampire would win in a fight between a vampire and a basilisk", "no sunny side eggs. no burgers with eggs. no egg in a hole", "any sort of car decoration is an abomination. bumper stickers, stick people.", "i am really afraid of sinkholes", "movie theater with butter and salt: yes. homemade: no. garretts: yes."
]
//actually make it cycle thru an array instead 
// it doesn't need to be random

function getRandOpinion(){
   return (opinion[Math.floor(Math.random()*opinion.length)]).toString();
};


function toTitleCase(str)
{
    return getRandOpinion().replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      ;
    }
    );
}

$('.itsbookname').hide();

 $('#button a').on('click', function(){
   	// $('#bookname').html("the "+getRandJob()+"'s "+getRandRelation());
   	 $('#bookname').html(toTitleCase());
     $('.description').hide("slow");
     $('.itsbookname').show("slow");
     // how to make this have a larger margin??
    // $('#buttondiv').css("margin-top","10%");
 });