const headerImg = document.querySelector('.header-img');
const articleImg = document.querySelector('.article-img');
const headerTitle = document.querySelector('.header-title');
const imgSmall = document.createElement('img');
const imgLarge = document.createElement('img');
const transitionAnchor = document.createElement('div');
transitionAnchor.classList.add('transition-bg-to');
let cityName = '';
const h1 = document.createElement('h1');
if (location.search.includes('tokyo')) {
  imgSmall.src = 'https://cdn.glitch.global/afc22f58-7717-45b3-9b3e-545c2c472195/tokyo.jpg';
  imgLarge.src = 'https://cdn.glitch.global/afc22f58-7717-45b3-9b3e-545c2c472195/tokyo_article.jpg';
  h1.innerText = 'Things to do in Tokyo';
  cityName = 'tokyo';
} else if (location.search.includes('kyoto')) {
  imgSmall.src = 'https://cdn.glitch.global/afc22f58-7717-45b3-9b3e-545c2c472195/kyoto.jpg';
  imgLarge.src = 'https://cdn.glitch.global/afc22f58-7717-45b3-9b3e-545c2c472195/kyoto_article.jpg';
  h1.innerText = 'Things to do in Kyoto';
  cityName = 'kyoto';
} else if (location.search.includes('yokohama')) {
  imgSmall.src = 'https://cdn.glitch.global/afc22f58-7717-45b3-9b3e-545c2c472195/yokohama.jpg';
  imgLarge.src = 'https://cdn.glitch.global/afc22f58-7717-45b3-9b3e-545c2c472195/yokohama_article.jpg';
  h1.innerText = 'Things to do in Yokohama';
  cityName = 'yokohama';
} else {
  imgSmall.src = 'https://cdn.glitch.global/afc22f58-7717-45b3-9b3e-545c2c472195/tokyo.jpg';
  imgLarge.src = 'https://cdn.glitch.global/afc22f58-7717-45b3-9b3e-545c2c472195/tokyo_article.jpg';
  h1.innerText = 'Things to do in Tokyo';
  cityName = 'tokyo';
}
headerImg.append(imgSmall, transitionAnchor);
articleImg.appendChild(imgLarge);
headerTitle.appendChild(h1);
document.documentElement.style.setProperty('--theme', `${cityName}`);
const backToTop = _ => {
  location.href = '/';
}
document.querySelector('.back').addEventListener('click', _ => {
  backToTop();
});
document.querySelector('.global-header-title').addEventListener('click', _ => {
  backToTop();
});
