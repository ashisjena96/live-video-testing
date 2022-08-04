Stream = require("node-rtsp-stream");
stream = new Stream({
  name: "Bunny",
  // streamUrl: "rtsp://YOUR_IP:PORT",
  // streamUrl: "rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov",
  streamUrl: "rtsp://admin:888888ab@103.248.29.141:80/cam/realmonitor?channel=4&subtype=1",
  wsPort: 6789,
  ffmpegOptions: { // options ffmpeg flags
    "-f": "mpegts", // output file format.
    "-codec:v": "mpeg1video", // video codec
    "-b:v": "1000k", // video bit rate
    "-stats": "",
    "-r": 25, // frame rate
    "-s": "640x480", // video size
    "-bf": 0,
    // audio
    "-codec:a": "mp2", // audio codec
    "-ar": 44100, // sampling rate (in Hz)(in Hz)
    "-ac": 1, // number of audio channels
    "-b:a": "128k", // audio bit rate
  },
});
