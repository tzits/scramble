var count = 0

var total = 0

var words = []

var placed = []

function Card() {

}

Card.prototype.create = function(text,i) {
	var x = document.createElement("span");
    x.setAttribute("class","card");
    x.setAttribute("id",i);
    x.setAttribute("val",i)
	$('#cont1').append(x);
    $("#" + i).text(text);
    $("#" + i).bind('click',selectCard);
}


createCard = function() {
	$('#cont2').empty()
	var text = prompt("Words to Scramble?")
	var moreText = text.split(" ")
	for(var i=0; i < moreText.length; i++) {
		words.push({
			key: moreText[i],
			number: i
		})
	}
	var k = words.length
	total = words.length
	for(var i=0 ; i < k; i ++) {
		j = Math.floor(Math.random() * (words.length));
		var card = new Card();
		card.create(words[j].key,words[j].number);
		words.splice(j,1)
	}
	$('button').css('opacity',"0")
}

selectCard = function() {
	var order = $(this).attr('val')
	if(order == count) {
		count += 1
		$(this).css('opacity',".5")
		$('#cont2').append(this)
		placed.push(order)
		if (count == total) {
			alert("Well Done!")
			count = 0
			$('button').css('opacity',"1")
			$('button').text('Go Again?')

		}
	} else {
		console.log('sad trombone')
		alert('Try Again')
		for(var i = 0; i < placed.length; i++) {
			var x = $('#' + i)
			x.css('opacity','1')
			$('#cont1').append(x)
		}
		count = 0
	} 
}
