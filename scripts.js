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

var words = []

createCard = function() {
	var text = prompt("Anything To Say?")
	var moreText = text.split(" ")
	for(var i=0; i < moreText.length; i++) {
		words.push(moreText[i])
	}
	var k = words.length
	for(var i=0 ; i < k; i ++) {
		j = Math.floor(Math.random() * (words.length));
		console.log(j)
		var card = new Card();
		console.log(words[j])
		card.create(words[j],i);
		words.splice(j,1)
		console.log(words)
	}
}

// $('#demo').click(createCard())