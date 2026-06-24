import{v4 as e}from"https://jspm.dev/uuid";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=[{handle:`@TrollBot66756542 💎`,profilePic:`/images/troll.jpg`,likes:27,retweets:10,tweetText:`Buy Bitcoin, ETH Make 💰💰💰 low low prices. 
            Guaranteed return on investment. HMU DMs open!!`,replies:[],isLiked:!1,isRetweeted:!1,uuid:`4b161eee-c0f5-4545-9c4b-8562944223ee`},{handle:`@Elon ✅`,profilePic:`/images/musk.png`,likes:6500,retweets:234,tweetText:`I need volunteers for a one-way mission to Mars 🪐. No experience necessary🚀`,replies:[{handle:`@TomCruise ✅`,profilePic:`/images/tcruise.png`,tweetText:`Yes! Sign me up! 😎🛩`},{handle:`@ChuckNorris ✅`,profilePic:`/images/chucknorris.jpeg`,tweetText:`I went last year😴`}],isLiked:!1,isRetweeted:!1,uuid:`3c23454ee-c0f5-9g9g-9c4b-77835tgs2`},{handle:`@NoobCoder12`,profilePic:`/images/flower.png`,likes:10,retweets:3,tweetText:`Are you a coder if you only know HTML?`,replies:[{handle:`@StackOverflower ☣️`,profilePic:`/images/overflow.png`,tweetText:`No. Obviosuly not. Go get a job in McDonald's.`},{handle:`@YummyCoder64`,profilePic:`/images/love.png`,tweetText:`You are wonderful just as you are! ❤️`}],isLiked:!1,isRetweeted:!1,uuid:`8hy671sff-c0f5-4545-9c4b-1237gyys45`}];document.addEventListener(`click`,function(e){e.target.dataset.like?n(e.target.dataset.like):e.target.dataset.retweet?r(e.target.dataset.retweet):e.target.dataset.reply?i(e.target.dataset.reply):e.target.id===`tweet-btn`&&a()});function n(e){let n=t.filter(function(t){return t.uuid===e})[0];n.isLiked?n.likes--:n.likes++,n.isLiked=!n.isLiked,s()}function r(e){let n=t.filter(function(t){return t.uuid===e})[0];n.isRetweeted?n.retweets--:n.retweets++,n.isRetweeted=!n.isRetweeted,s()}function i(e){document.getElementById(`replies-${e}`).classList.toggle(`hidden`)}function a(){let n=document.getElementById(`tweet-input`);n.value&&=(t.unshift({handle:`@Scrimba`,profilePic:`images/scrimbalogo.png`,likes:0,retweets:0,tweetText:n.value,replies:[],isLiked:!1,isRetweeted:!1,uuid:e()}),s(),``)}function o(){let e=``;return t.forEach(function(t){let n=``;t.isLiked&&(n=`liked`);let r=``;t.isRetweeted&&(r=`retweeted`);let i=``;t.replies.length>0&&t.replies.forEach(function(e){i+=`
<div class="tweet-reply">
    <div class="tweet-inner">
        <img src="${e.profilePic}" class="profile-pic">
            <div>
                <p class="handle">${e.handle}</p>
                <p class="tweet-text">${e.tweetText}</p>
            </div>
        </div>
</div>
`}),e+=`
<div class="tweet">
    <div class="tweet-inner">
        <img src="${t.profilePic}" class="profile-pic">
        <div>
            <p class="handle">${t.handle}</p>
            <p class="tweet-text">${t.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                    <i class="fa-regular fa-comment-dots"
                    data-reply="${t.uuid}"
                    ></i>
                    ${t.replies.length}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-heart ${n}"
                    data-like="${t.uuid}"
                    ></i>
                    ${t.likes}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-retweet ${r}"
                    data-retweet="${t.uuid}"
                    ></i>
                    ${t.retweets}
                </span>
            </div>   
        </div>            
    </div>
    <div class="hidden" id="replies-${t.uuid}">
        ${i}
    </div>   
</div>
`}),e}function s(){document.getElementById(`feed`).innerHTML=o()}s();