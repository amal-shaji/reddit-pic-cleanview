if(window.location.search) {
  // Fetch
      const query = window.location.search;
      const subreddit = query.replace(/[^a-zA-Z0-9 ]/g, "");
      fetch(`https://www.reddit.com/r/${subreddit}/new.json?limit=9`)
        .then(res => res.json())
        .then(data => {
            let results = data.data.children.map(data => data.data)
            
            document.querySelector('#top').style.display = 'none'
            results.forEach(post => {
                
                // Check for image
                let div = document.createElement('div');
                div.classList.add('cards','container');
                let image = post.preview
                  ? post.preview.images[0].source.url
                  : 'https://pbs.twimg.com/profile_images/1197561676393926656/KUZlGyLX_400x400.jpg';
                div.innerHTML = `
                <div class="content-wrap section" data-aos="fade-left">
                  <div class="content content--layout content--layout-1" >
                      <div id='imagewrapper'>
                        <img class="content__img" src="${image}" alt="Some image" />
                      </div>
                      <h3 class="content__title">${post.title}</h3>
                      <p class="content__author">u/${post.author}</p>
                      <p class="content__desc"></p>
                      <a href="https://reddit.com${post.permalink}" class="content__link" target="blank">Discover</a>
                  </div>
                </div>
                `;
                document.getElementById('fullpage').prepend(div)
              });
                // document.getElementById('threebottom').innerHTML = div;
        })
        const fullpage = document.querySelector('#fullpage')
        document.body.addEventListener('scroll', function() {
          if (fullpage.scrollTop + fullpage.clientHeight >= fullpage.scrollHeight) {
              loadMore();
              console.log('efedt')
            }
            });
}

// The Anime.js

// var h1 = {};
// h1.opacityIn = [0,1];
// h1.scaleIn = [0.2, 1];
// h1.scaleOut = 3;
// h1.durationIn = 800;
// h1.durationOut = 600;
// h1.delay = 500;

// var fade = anime.timeline({loop: true})
// fade.add({
//     targets: '.h1 .letters-1',
//     opacity: h1.opacityIn,
//     scale: h1.scaleIn,
//     duration: h1.durationIn
//   }).add({
//     targets: '.h1 .letters-1',
//     opacity: 0,
//     scale: h1.scaleOut,
//     duration: h1.durationOut,
//     easing: "easeInExpo",
//     delay: h1.delay
//   }).add({
//     targets: '.h1 .letters-2',
//     opacity: h1.opacityIn,
//     scale: h1.scaleIn,
//     duration: h1.durationIn
//   }).add({
//     targets: '.h1 .letters-2',
//     opacity: 0,
//     scale: h1.scaleOut,
//     duration: h1.durationOut,
//     easing: "easeInExpo",
//     delay: h1.delay
//   }).add({
//     targets: '.h1 .letters-3',
//     opacity: h1.opacityIn,
//     scale: h1.scaleIn,
//     duration: h1.durationIn
//   }).add({
//     targets: '.h1 .letters-3',
//     opacity: 0,
//     scale: h1.scaleOut,
//     duration: h1.durationOut,
//     easing: "easeInExpo",
//     delay: h1.delay
//   }).add({
//     targets: '.h1',
//     opacity: 0,
//     duration: 500,
//     delay: 500
//   });
