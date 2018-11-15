var count = 0

var words = []

function Card() {
	this.width = "50px";
	this.height = "50px";
	this.order = 0;
}

Card.prototype.create = function(text,i) {
	var x = document.createElement("span");
    x.setAttribute("class","card");
    x.setAttribute("id",i)
	$('#container').append(x);
    $("#" + i).text(text)
}

Card.prototype.select = function(id){
	if(id == count) {
		console.log('boom')
	} else {
		console.log('sad trombone')
	}
}


createCard = function() {
	var text = prompt("Anything To Say?")
	var moreText = text.split(" ")
	for(var i=0; i < moreText.length; i++) {
		words.push({
			key: moreText[i],
			number: i
		})
	}
	var k = words.length
	const newWords = words
	console.log(newWords)
	for(var i=0 ; i < k; i ++) {
		j = Math.floor(Math.random() * (words.length));
		var card = new Card();
		console.log(words[j])
		card.create(words[j].key,words[j].number);
		words.splice(j,1)
		console.log(newWords)
	}
	$('button').remove()
}

// $('#demo').click(createCard())