const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: 'Uptown Funk',
        artist: 'Mark Ronson/Bruno Mars',
        url: 'http://www.ytmp3.cn/down/38433.mp3',
        cover: '/images/covers/UptownFunk.jpg',
      },{
        name: '光年之外',
        artist: 'G.E.M.邓紫棋',
        url: 'http://www.ytmp3.cn/down/55362.mp3',
        cover: '/images/covers/光年之外.jpg',
      }
    ]
});