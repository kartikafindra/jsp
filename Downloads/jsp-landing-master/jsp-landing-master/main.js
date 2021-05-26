const toggleNav = document.querySelector('.hamburger');
const links = document.querySelector('.links');

toggleNav.addEventListener('click', function () {
	links.classList.toggle('active');
});
if (window.location.pathname === '/pages/about.html') {
	const img = document.querySelector('.img img');
	if (img != null) {
		let i = 1;
		setInterval(() => {
			if (i == 4) i = 1;
			img.setAttribute('src', `/assets/slide${i}.jfif`);
			img.classList.add('slider');
			setTimeout(() => {
				img.classList.remove('slider');
			}, 1000);
			i++;
		}, 2500);
	}
}

if (
	window.location.pathname === '/index.html' ||
	window.location.pathname === '/'
) {
	const overlay = document.querySelector('#overlay');
	const closeAd = document.querySelector('.buttonOverlayClose');
	const modal = document.querySelector('.modal');

	overlay.addEventListener('click', () => {
		overlay.classList.remove('active');
		modal.classList.remove('active');
	});

	closeAd.addEventListener('click', () => {
		overlay.classList.remove('active');
		modal.classList.remove('active');
	});
}

if (window.location.pathname === '/pages/content.html') {
	const contentContainer = document.querySelector('.contentContent');
	let contentData = [
		(lelaki = {
			image: 'lelaki.png',
			title: 'Lelaki Penjaga Rumah-Mu',
			link: 'https://www.youtube.com/channel/UCxjgZVq2A8FKJFDRbPBD2Nw',
		}),
		(trailer = {
			image: 'trailer.png',
			title: 'Trailer Penantian Cinta di Telaga Menjer',
			link: 'https://www.youtube.com/watch?v=nJCZtt7fefA',
		}),
		(pcdtm = {
			image: 'pcdtm.jpg',
			title: 'Series Penantian Cinta di Telaga Menjer',
			link: 'https://okeflix.com/series/penantian-cinta-di-telaga-menjer/',
		}),
		(tutorial = {
			image: 'tutorial.png',
			title: 'Tutorial Pembelian Tiket di Okeflix',
			link: 'https://www.youtube.com/watch?v=oEAxqVXw-9M',
		}),
		(perguliran = {
			image: 'postprod.jpeg',
			title: 'Launching Film Penantian Cinta di Telaga Menjer',
			link: 'https://okeflix.com/series/penantian-cinta-di-telaga-menjer/',
		}),
		(postProd = {
			image: 'perguliran.JPG',
			title: 'Perjalanan ke Wonosobo Post Production Film Penantian Cinta di Telaga Menjer',
			link: 'https://okeflix.com/series/penantian-cinta-di-telaga-menjer/',
		}),
		(postLama = {
			image: 'filmbaru.png',
			title: 'Perjalanan ke Wonosobo Post Production Film Penantian Cinta di Telaga Menjer',
			link: 'https://okeflix.com/series/penantian-cinta-di-telaga-menjer/',
		}),
		(post = {
			image: 'film.png',
			title: 'Perjalanan ke Wonosobo Post Production Film Penantian Cinta di Telaga Menjer',
			link: 'https://okeflix.com/series/penantian-cinta-di-telaga-menjer/',
		}),
	];

	contentData.forEach((content) => {
		contentContainer.innerHTML += `
      <div>
         <div class="card" data-aos="zoom-in" data-aos-duration="1000">
            <img src="/assets/${content.image}" alt="${content.img}" />
               <a
                  href="${content.link}"
                  target="_blank"
                  ><div class="overlay">
                     <div class="text">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="60"
                           height="60"
                           fill="currentColor"
                           class="bi bi-play-fill"
                           viewBox="0 0 16 16"
                        >
                           <path
                              d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                           />
                        </svg>
                     </div></div
               ></a>
               </div>
         <h3 class="cardTitle">${content.title}</h3>
      </div>
      
      `;
	});
}
