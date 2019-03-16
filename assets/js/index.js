// import {add} from './add';
import './../stylesheet/main.scss';

// https://www.reddit.com/r/Android/

const main = document.querySelector(".main-section");
const postContainer = document.querySelector(".post-container");


const mainData = fetch('https://www.reddit.com/r/Android/.json')
	.then(function(response){
		return response.json()
			.then(d => {
				document.querySelector(".post-container").innerHTML = d.data.children.map(post => `
						<div class="post">
							<div class="votes">
								<i class="fas fa-long-arrow-alt-up text-center"></i>
								<span class="vote-count text-center">${post.data.ups}</span>
								<i class="fas fa-long-arrow-alt-down text-center"></i>
							</div>
							<div class="post-content">
								<div>
									<span class=posted-by>Posted by u/${post.data.author} ${post.data.created_utc}</span>
									<p class="title">${post.data.title}</p>
									<a href=${post.data.url}>${post.data.url.substring(12, 25)}</a>
								</div>
								<div class="post-action">
									<i class="fas fa-comment-alt"></i>
									<span class="comment-number">${post.data.num_comments} Comments</span>
									<span><i class="fas fa-share"></i>Share</span>
									<span><i class="fas fa-bookmark"></i>Save</span>
									<i class="fas fa-ellipsis-h"></i>
								</div>
							</div>
							<div>
								<img src=${post.data.thumbnail}>
							</div>
						</div>
						</div>
					`
				).join('');
				sidebarHTML(d.data.children[0]);
			});	
		})

function sidebarHTML({data}){
	document.querySelector('.side-container').innerHTML = `<div class="side-first side-box">
	<div class="side-header">
		<h4>Community Details</h4>
	</div>
	<span class="subreddit">
		<i class="fab fa-reddit"></i>
		<a href="https://www.reddit.com/r/Android/">r/Android</a>
	</span>
	<div class="subreddit-details">
		<span class="subreddit-count">
			<p class="counts">${data.subreddit_subscribers}</p>
			<p>Subscribers</p>
		</span>
		<span class="subreddit-online">
			<p class="counts">1.6K</p>
			<p>Online</p>
		</span>
	</div>
	<div class="user-description">
		<p>Android news, reviews, tips, and discussions about rooting, tutorials, and apps. Generic discussion about phones/tablets is allowed, but technical-support and carrier-related issues should be asked in their respective subreddits!</p>
		<div class="user-button-side">
			<button class="subcreate button">Subscribe</button>
			<button class="subcreate button">Create Post</button>
		</div>
	</div>
</div>

<div class="side-second side-box">
	<div class="side-header">
		<h4>Content Philosophy</h4>
	</div>
	<div class="content-philosophy">
		<p>Content which benefits the community (news, rumors, and discussions) is valued over content which benefits only the individual (technical questions, help buying/selling, rants, self-promotion, etc.).
		</p>
	</div>
</div>

<div>
	<a href="#"><img src="https://styles.redditmedia.com/t5_2qlqh/styles/image_widget_l8h7m6apyv921.jpg?format=pjpg&amp;s=c560445a99edcb29814890cc04731775ad0eeb2d" height="300px" width="300px"></a>
</div>
<div>
	<button onclick="topFunction()" id="myBtn" class="button back-top">Back to top</button>
</div>`;
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}

	// console.log(mainData);