/* --------------------전역 변수부----------------------- */
const $wrap = document.querySelector("#wrap");
const $list = document.querySelector("#list");
const $btn = document.querySelector(".btnSearch");
const $input = document.querySelector("#search");

const url = "https://www.flickr.com/services/rest/?"; 
const key = "15e154c15e2c96d8a7341f607f8f6b2c"; 
const per_page = 30; 
const tagmode = "any"; 
const privacy_filter = 5; 
const format = "json"; 
const nojsoncallback = 1;
const interest = "flickr.interestingness.getList";
const search = "flickr.photos.search";

const base_url = `${url}api_key=${key}&per_page=${per_page}&tagmode=${this.tagmode}&privacy_filter=${privacy_filter}&format=${format}&nojsoncallback=${nojsoncallback}`;
let result_url = `${base_url}&method=${interest}`;



/*-----------------------이벤트 연결부------------------------------ */
//브라우저 로딩시
fetchData(result_url)
.catch( err => {
	console.error(err);
})
.then( result => {	
	return createDOM(result, $list);
})
.then( result => {
	console.log(result);
	isoLayout($list);
});

//검색 버튼 클릭시
$btn.onclick = () => {
	let tag = $input.value;
	if(tag == "") {
		alert("검색어를 입력하세요!!");
		return;
	}
	result_url = `${base_url}&method=${search}&tags=${tag}`;

	fetchData(result_url)
	.catch( err => {
		console.error(err);
	})
	.then( result => {	
		return createDOM(result, $list);
	})
	.then( result => {
		console.log(result);
		isoLayout($list);
	});
}



/*----------------------함수 정의부---------------------------- */
function fetchData(url){
	return fetch(url)	
	.then( data => {		
		let result = data.json();	
		return result;
	})	
	.then( json => {		
		return new Promise( (resolve, reject) => {
			(json) ? resolve(json) : reject();			
		})	
	})
}

async function createDOM(data, parentEl){
	//기존의 DOM을 지워서 초기화
	parentEl.innerHTML = "";
	$wrap.style.transitionDuration = "0s";
	$wrap.classList.remove("on");

	const item = data.photos.photo;
	
	item.map( data => {
		console.log(data);
		let new_li = document.createElement("li");
		let new_div = document.createElement("div");
		let new_a = document.createElement("a");
		let new_p = document.createElement("p");
		let new_img = document.createElement("img");
		let new_src = document.createAttribute("src");
		let new_href = document.createAttribute("href");
		new_src.value = `https://farm${data.farm}.staticflickr.com/${data.server}/${data.id}_${data.secret}_m.jpg`;
		new_href.value = `https://farm${data.farm}.staticflickr.com/${data.server}/${data.id}_${data.secret}_b.jpg`;
		new_a.setAttributeNode(new_href);
		new_img.setAttributeNode(new_src);
		new_p.innerText = data.title;

		new_li.classList.add("item");

		parentEl.appendChild(new_li);
		new_li.appendChild(new_div);
		new_div.appendChild(new_a);
		new_div.appendChild(new_p);
		new_a.appendChild(new_img);
	});
	
	await delay(1000);

	//새로운 DOM이 추가 완료되면 "on"붙여서 활성화 모션 추가
	$wrap.style.transitionDuration ="1s";
	$wrap.classList.add("on");

	return new Promise((resolve, reject) => {
		resolve("test");
	});
}

function delay(time){
	return new Promise((resolve,reject) => {
		setTimeout(()=>{
			resolve();
		},time);
	});
}

function isoLayout(el){
	new Isotope(el, {
		itemSelctor : ".item",
		columnWidth : ".item",
		transitionDuration : "0.5s",
		percentPosition : true
	})
}

