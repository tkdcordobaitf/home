let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "315",
    width: "560",
    videoId: "weiDnCTeflM",
  });
}

function goTo(seconds) {
  if (!player) return;
  player.seekTo(seconds, true);
  player.pauseVideo();
}
