///////////////////////////Image Slider///////////////////////////////////

(function(){
//If you want to include more images, add the link name and URL of the image in the array list below.
	let images_list = [
		{"url":"https://html-generator.com/uploads/images/2022/07/20/08238GZGQ0H2LQC.jpg","name":"08238GZGQ0H2LQC.jpg","link":""},
		{"url":"https://html-generator.com/uploads/images/2022/07/20/085728VPK1W0PPP.jpg","name":"085728VPK1W0PPP.jpg","link":""},
		{"url":"https://html-generator.com/uploads/images/2022/07/20/08945B6F43SU4ZW.jpg","name":"08945B6F43SU4ZW.jpg","link":""},
		{"url":"https://html-generator.com/uploads/images/2022/07/20/09275DH6HMF9EEJ.jpg","name":"09275DH6HMF9EEJ.jpg","link":""},
		{"url":"https://html-generator.com/uploads/images/2022/07/20/10147REOBLYTI18.png","name":"10147REOBLYTI18.png","link":""},
		{"url":"https://html-generator.com/uploads/images/2022/07/20/10496N632DF5Z0E.jpg","name":"10496N632DF5Z0E.jpg","link":""},
		{"url":"https://html-generator.com/uploads/images/2022/07/20/10802E1W_7LQTKM.jpg","name":"10802E1W_7LQTKM.jpg","link":""},
		{"url":"https://html-generator.com/uploads/images/2022/07/20/11149DDL28B9ANW.jpg","name":"11149DDL28B9ANW.jpg","link":""},
		{"url":"https://html-generator.com/uploads/images/2022/07/20/11480TM4KO6MFAI.jpg","name":"11480TM4KO6MFAI.jpg","link":""}
	];

	let slider_id = document.querySelector("#image-slider");

	// append all images
	let dots_div = "";
	let images_div = "";
	for (let i = 0; i < images_list.length; i++) {
		// if no link without href="" tag
		let href = (images_list[i].link == "" ? "":' href="'+images_list[i].link+'"');
		images_div += '<a'+href+' class="hcg-slides animated"'+(i === 0 ? ' style="display:block"':'')+'>'+
						'<span class="hcg-slide-number">'+(i+1)+'/'+images_list.length+'</span>'+
						'<img src="'+images_list[i].url+'" alt="'+images_list[i].name+'">'+
						'<span class="hcg-slide-text">'+images_list[i].name+'</span>'+
					 '</a>';
		dots_div += '<span class="hcg-slide-dot'+(i === 0 ? ' dot-active':'')+'" data-id="'+i+'"></span>';
	}
	slider_id.querySelector(".hcg-slider-body").innerHTML = images_div;
	slider_id.querySelector(".hcg-slide-dot-control").innerHTML = dots_div;

	let slide_index = 0;

	let images = slider_id.querySelectorAll(".hcg-slides");
	let dots = slider_id.querySelectorAll(".hcg-slide-dot");
	let prev_button = slider_id.querySelector(".hcg-slide-prev");
	let next_button = slider_id.querySelector(".hcg-slide-next");

	function showSlides() {
		if (slide_index > images.length-1) {
			slide_index = 0;
		}
		if (slide_index < 0) {
			slide_index = images.length-1;
		}
		for (let i = 0; i < images.length; i++) {
			images[i].style.display = "none";
			dots[i].classList.remove("dot-active");
			if (i == slide_index) {
				images[i].style.display = "block";
				dots[i].classList.add("dot-active");
			}
		}
	}

	prev_button.addEventListener("click", function(event) {
		event.preventDefault();
		slide_index--;
		showSlides();
	}, false);

	next_button.addEventListener("click", function(event){
		event.preventDefault();
		slide_index++;
		showSlides();
	}, false);

	function dot_click(event) {
		slide_index = event.target.dataset.id;
		showSlides();
	}

	for (let i = 0; i < dots.length; i++) {
		dots[i].addEventListener("click", dot_click, false);
	}
})();

