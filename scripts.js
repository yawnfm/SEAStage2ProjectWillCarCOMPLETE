/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

const heros = [
  { name: "Ana", role: "Support", pickRate: 21.4, winRate: 45.7, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/985b06beae46b7ba3ca87d1512d0fc62ca7f206ceca58ef16fc44d43a1cc84ed.png", color: "#48699e" },
  { name: "Anran", role: "Damage", pickRate: 12.5, winRate: 53.5, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/2c38b41d79a1ce9a08b9ad8eb7edf3ff819bd448af16a5815be8c7fdb7203aa0.png", color: "#e81a05" },
  { name: "Ashe", role: "Damage", pickRate: 8.5, winRate: 49.3, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4076bbaa2eb52a0bfe612434071e56e7702d5454473dbbea2f9e392a9d997a94.png", color: "#3e3c3a" },
  { name: "Baptiste", role: "Support", pickRate: 5.1, winRate: 44.5, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d4e6f1ca45d9f88fa89260787397f141a6f007b14e5b26698883b6a17bab9680.png", color: "#28a5c3" },
  { name: "Bastion", role: "Damage", pickRate: 9.5, winRate: 47.6, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4ede795c2a681aaccfa72d0c901cba0cb8a2c292fd6a97b2ba9faed161c2d184.png", color: "#5b7351" },
  { name: "Brigitte", role: "Support", pickRate: 5.9, winRate: 54.3, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/795fba91376d87d441a7f359ae12a3175dfa95825ccc4414cc6b95b129fc4cb0.png", color: "#72332a" },
  { name: "Cassidy", role: "Damage", pickRate: 10.5, winRate: 47.3, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/9240cd64cc8ef58df9acbf55204ab1b5d8578f743fda5931f0dbccbd75ab841b.png", color: "#a62927" },
  { name: "D.Va", role: "Tank", pickRate: 9.9, winRate: 47.3, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/df5a5532862d9292634fb3dc0e51a4705aa601de65e5e815513ccc663d84de56.png", color: "#fc79bd" },
  { name: "Domina", role: "Tank", pickRate: 8.5, winRate: 50.5, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1161c112292c56c052c0ae711792fcde06e3251b98bc9709e582dd7585b5dcd6.png", color: "#69deef" },
  { name: "Doomfist", role: "Tank", pickRate: 6.2, winRate: 49.3, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ff5c54f43ad253c7faeda9c4ed31d42582ea6b19205d197866f3dd0c0aa14c16.png", color: "#661e0f" },
  { name: "Echo", role: "Damage", pickRate: 4.7, winRate: 49.3, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d4f2d5b0c2b7e82d61353186c5f23152ccba9d3569b50839aa580dca3e9114ba.png", color: "#89c8ff" },
  { name: "Emre", role: "Damage", pickRate: 10.1, winRate: 48.1, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/c51e2f698138861c0e3b6cfab3c3ca9d67fd709be175e7c397aa6f2649712a30.png", color: "#c70c0c" },
  { name: "Freja", role: "Damage", pickRate: 3.8, winRate: 45.0, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/811963897c352d9f178bec882d94bd0281074feee7c429c5145b6b8ea8ebe862.png", color: "#3f93ff" },
  { name: "Genji", role: "Damage", pickRate: 11.5, winRate: 51.3, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/156b12c20b1aea872c1eeb5bb37a7de1047b2ab30ecefd0663a8925badde1ea8.png", color: "#80fb00" },
  { name: "Hanzo", role: "Damage", pickRate: 6.2, winRate: 48.4, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/78b61c3e806fb26b02b8980fba62189155074fc15bd865b0883268e546030be5.png", color: "#b2a865" },
  { name: "Hazard", role: "Tank", pickRate: 4.5, winRate: 52.3, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ca48b96dbae6ea7f58ce8a5e73513c8c62b1685bdbf258020fb78bb21a008b5f.png", color: "#985ec0" },
  { name: "Illari", role: "Support", pickRate: 9.3, winRate: 52.5, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ce42d1455e03e79f321345fea84b27a8918b5db8bd7ab9b2ca9e569606ede9e4.png", color: "#a58c54" },
  { name: "Jetpack Cat", role: "Support", pickRate: 11.1, winRate: 48.5, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/03a184cd0de27091e0099ac22635ad9615a8f6997881a5c25cc5f2444764f729.png", color: "#c9cdd1" },
  { name: "Junker Queen", role: "Tank", pickRate: 5.0, winRate: 52.2, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/06eeecb359f311f43a8f5121d4f9f3a93c565d70b30e94ef543c05596c9a39dc.png", color: "#579fcf" },
  { name: "Junkrat", role: "Damage", pickRate: 7.9, winRate: 50.4, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7660b9fc6f25f30858fdd8797fe0d52b2306f1e78fef99843f58a274e69af046.png", color: "#f7b217" },
  { name: "Juno", role: "Support", pickRate: 21.2, winRate: 50.7, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/c0167d251e57b0aa2b1e16c37d87f0e7c77263db9dd0503d77b5f2589bf3e4a0.png", color: "#721fa3" },
  { name: "Kiriko", role: "Support", pickRate: 22.3, winRate: 48.3, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/408603fe037e8576078eaac5eab2fb251489ced4003b11f5f522776d43d0b83d.png", color: "#d04656" },
  { name: "Lifeweaver", role: "Support", pickRate: 14.8, winRate: 50.6, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3376515cebed0904012e67e956f6d1b9c12e03da642845eeaf787b7e4c7b339d.png", color: "#e1a5ba" },
  { name: "Lúcio", role: "Support", pickRate: 8.4, winRate: 52.4, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/040bb13f5123ab93faad2f95627ba184608aef4b2469a4d3003859c7087df044.png", color: "#67c519" },
  { name: "Mauga", role: "Tank", pickRate: 6.3, winRate: 50.2, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/33d39bb439c08975197fc52eff4874716839711b5356c4fdc174f9c24bac1d0e.png", color: "#db4216" },
  { name: "Mei", role: "Damage", pickRate: 5.2, winRate: 52.5, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4a55ced3bd597fb08e0fde9dc007f8543ac616ba98ca3db9b0e4d871a8ae17f8.png", color: "#469af0" },
  { name: "Mercy", role: "Support", pickRate: 23.8, winRate: 48.8, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3bfb8bd8ec827e53d870f1238ab73d8aa1f5dbfbcfaaf7f96ffcd35b5c6102ab.png", color: "#faf2ad" },
  { name: "Mizuki", role: "Support", pickRate: 15.9, winRate: 52.3, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a9733c2367e0cbd70b9316fd2e1e17028653ec56d0051ea6ff098531dc4f99fc.png", color: "#9affc7" },
  { name: "Moira", role: "Support", pickRate: 20.6, winRate: 50.2, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f48f8485056d5d00dad195859188d23e50f7126b8b08b5646f46ef1b42f5e1de.png", color: "#804be5" },
  { name: "Orisa", role: "Tank", pickRate: 9.8, winRate: 46.5, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a73958a28551f5254f3ab3f97c5f5f8d698a95c0b6a515d1a2b1caac169205a6.png", color: "#106f04" },
  { name: "Pharah", role: "Damage", pickRate: 3.6, winRate: 53.4, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/60ac2d5de4a6d34644d8872233da402f1436c87f804bb11a21661bb30bf4a51f.png", color: "#58bcff" },
  { name: "Ramattra", role: "Tank", pickRate: 10.4, winRate: 51.9, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ddef7c9fb8ce4256e8508196b486f81950efe7aaa6cf27fec4668beb4cd15774.png", color: "#7d55c7" },
  { name: "Reaper", role: "Damage", pickRate: 8.5, winRate: 54.1, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/dc6ff07ac790c00dc95a40882449617bb6e0e38906b353a630cffe0c815270a9.png", color: "#5e001a" },
  { name: "Reinhardt", role: "Tank", pickRate: 10.9, winRate: 54.2, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/551fbe070c16fdfcc17f7f1de63af22c53e7d2f1340fc2f3172441504527bc4e.png", color: "#7c8b8c" },
  { name: "Roadhog", role: "Tank", pickRate: 8.2, winRate: 45.7, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/89ddf07e4b619ed96169042e296a1b8856d102746f35add88284b44a9a5a6a03.png", color: "#ae6f1c" },
  { name: "Sierra", role: "Damage", pickRate: 55.6, winRate: 51.9, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4bfd3d8b95844231115cb5bf4db03344c71bc3e865189c52403b2dc51438e63a.png", color: "#fe8da8" },
  { name: "Sigma", role: "Tank", pickRate: 8.5, winRate: 50.5, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a4c032fa466c9a6d9c6974747635d7ef910027f91cd58892af0c899db565f92d.png", color: "#7c8b8c" },
  { name: "Sojourn", role: "Damage", pickRate: 5.2, winRate: 43.3, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/82b8c1b8765dcb9a0ba16e343c3516bf324c771ac81e9878473280216e70a889.png", color: "#d73e2c" },
  { name: "Soldier: 76", role: "Damage", pickRate: 11.6, winRate: 49.1, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/c93b5f0a528c40473188f77cc2a267aee7d5b6cf5c9e104105d634b4388674e2.png", color: "#445275" },
  { name: "Sombra", role: "Damage", pickRate: 4.0, winRate: 46.7, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/47727b02a16e3bd7b2447d86ae1edf11587bc320b2aecb4f2f16a7ca4ad4e8a0.png", color: "#5128a9" },
  { name: "Symmetra", role: "Damage", pickRate: 2.2, winRate: 54.1, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ebec57e8bd68b3d4383edfeb34f8f52dd0b94a6467d594c2fee722e8a97c32aa.png", color: "#76b4c9" },
  { name: "Torbjörn", role: "Damage", pickRate: 3.3, winRate: 55.2, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ce17118cedc29b0d2ac1e059666bed36b9531c85079b0b894bb402d12c917ba9.png", color: "#ba4c3f" },
  { name: "Tracer", role: "Damage", pickRate: 4.3, winRate: 50.0, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4504f6f15cb3feaa92ecd38e01dcf751cb5abdac2e0bb52d0555727e53277502.png", color: "#de7a00" },
  { name: "Vendetta", role: "Damage", pickRate: 3.8, winRate: 47.1, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/cf8ffb52b6f315546d5e94e9d6defad5a2c570798776956de23f47536f9529da.png", color: "#961a1c" },
  { name: "Venture", role: "Damage", pickRate: 2.6, winRate: 52.6, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/dcab9123f5f55df22e54d4e797de43c71b917e0149dd059a7fd6136f48464cd0.png", color: "#79614e" },
  { name: "Widowmaker", role: "Damage", pickRate: 5.1, winRate: 45.1, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/6e4702b45f196aaf51555cf57327322721f45458b17f5f0643ed008a88378259.png", color: "#8b3f8f" },
  { name: "Winston", role: "Tank", pickRate: 4.6, winRate: 53.3, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/46a10db3aa908c590ddc4e7606376a88143d1f1306ecfbea043263040f9529a5.png", color: "#8f92ae" },
  { name: "Wrecking Ball", role: "Tank", pickRate: 3.0, winRate: 50.7, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/9ef1d58867136e0b26f928d896000b9dab216118f6e2f59e53f2e975e1e27afa.png", color: "#e2790a" },
  { name: "Wuyang", role: "Support", pickRate: 9.0, winRate: 50.0, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4959500b495b35c0908be2abda56b53f2601b2c5cc39a1cfde8df1bffd38d66d.png", color: "#4c7fef" },
  { name: "Zarya", role: "Tank", pickRate: 4.3, winRate: 46.8, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/9b6f63cc66ddf9d5e0862173c733cc0d2e574c5c89357798d91b93b2f95a7080.png", color: "#f65ea6" },
  { name: "Zenyatta", role: "Support", pickRate: 11.1, winRate: 54.5, portrait: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7d1546b1541a8afc39353f9337a408d6275a141b0432b7e560ef61579996b0fc.png", color: "#fcee5a" },
];
//important needs to be #1
let displayedHeros =  heros;

function sortHeros(stat) {
  displayedHeros.sort(function(a,b) {
     return b[stat] - a[stat]
});

  showCards()
}

//function filters through differnt heros based on role
function filterRole(role) {
//step 1: filter the heros array 
let filtered = heros.filter(function(hero) 
 {
  return hero.role === role;  
 });

//step 2: show only those cards
if (role === "All") {
  displayedHeros = heros
} else {
  displayedHeros = filtered;
}
showCards();
}

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card-template .card");

  for (let i = 0; i < displayedHeros.length; i++) {
    let hero = displayedHeros[i]

    const nextCard = templateCard.cloneNode(true); // Copy the template card

    nextCard.style.display = "block";

    nextCard.querySelector(".hero-name").textContent = hero.name; 
    nextCard.querySelector(".role-tag").textContent = hero.role
    nextCard.querySelector(".hero-portrait").src = hero.portrait;

    nextCard.querySelector(".win-rate").textContent = hero.winRate + "%";
        nextCard.querySelector(".win-bar").style.width = hero.winRate + "%"
        nextCard.querySelector(".win-bar").style.backgroundColor = hero.color

    nextCard.querySelector(".pick-rate").textContent = hero.pickRate + "%";
      nextCard.querySelector(".pick-bar").style.width = hero.pickRate + "%"
      nextCard.querySelector(".pick-bar").style.backgroundColor = hero.color

    cardContainer.appendChild(nextCard);
  }
}

function editCardContent(card, newTitle, newImageURL) {
  nextCard.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "Boop!",
  );
}

function removeLastCard() {
  displayedHeros.pop(); // Remove last item in heros array
  showCards(); // Call showCards again to refresh
}
