/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f17c5d482159bd8971a314193cd38194"
  },
  {
    "url": "assets/css/0.styles.cfc0c72b.css",
    "revision": "5a60c1a9440d3859f89d35b14adaae61"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.6c3174d9.js",
    "revision": "a5ccc1ee114b38d98965cf28f7c8a4f0"
  },
  {
    "url": "assets/js/10.33f76f26.js",
    "revision": "220f65ea638281da19c0b0a7cdd4a305"
  },
  {
    "url": "assets/js/11.25089477.js",
    "revision": "4ef4bceb3f3fbc91dbae4f1f03563e71"
  },
  {
    "url": "assets/js/12.8daec512.js",
    "revision": "abef476360cee8a93e81ce167e48015d"
  },
  {
    "url": "assets/js/13.9422b4fc.js",
    "revision": "db1d989744ef17f4d6e062658e9f4508"
  },
  {
    "url": "assets/js/14.795a1ecc.js",
    "revision": "fadbf5bb18a68e25d3e4ad57655eb146"
  },
  {
    "url": "assets/js/15.6ff5bfa8.js",
    "revision": "63a1157a67f9588bcc18ea4d3ac865b9"
  },
  {
    "url": "assets/js/16.b4126a68.js",
    "revision": "49bd3bfe51d19e41b4e1572f74d5cd9d"
  },
  {
    "url": "assets/js/17.51d35a3e.js",
    "revision": "55481fc8883194f5debcff1a4647ed4a"
  },
  {
    "url": "assets/js/18.0dcebe79.js",
    "revision": "5d3da8e42f8901487960079e1f92d613"
  },
  {
    "url": "assets/js/4.032ccc2a.js",
    "revision": "c026ea6cc971d554f4321bf7de725e62"
  },
  {
    "url": "assets/js/5.431e16ef.js",
    "revision": "9b9cb82a6d53d3683a2ebbff85546d54"
  },
  {
    "url": "assets/js/6.7790d4de.js",
    "revision": "f18fd80e5f56592edbe12939cb258275"
  },
  {
    "url": "assets/js/7.d51dfeed.js",
    "revision": "0c87ed99af5b16be211472c8f40f98cd"
  },
  {
    "url": "assets/js/8.c32581b2.js",
    "revision": "75bbb0b04f31e38bddf06c1e7f804ec4"
  },
  {
    "url": "assets/js/9.e3ab4b27.js",
    "revision": "191efa8a41a08a4cb0bcebed53f83171"
  },
  {
    "url": "assets/js/app.13e48df0.js",
    "revision": "8b88190e8ff80067c6df372f2d1891bb"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.c6937b0c.js",
    "revision": "81ef84d370addbda5a2e08aa6861f5f8"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "5287767e7f905cc329ed3353de3bde4b"
  },
  {
    "url": "categories/java/index.html",
    "revision": "0a319dfa578da16c0122090036d81dca"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "a5e65a1f15f922d50a530f213b7fd43b"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "20072db1640b01086ac59705e8914788"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "28d95b74fd835ef43b1bd0344a43b1f1"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "ed606499efdfe5e579d142263166a9d6"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "1831cdc3a8c6d4a314ce9f956202b1e6"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "8c71e80822dc999a7c630651e1b0cc50"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "bfffbbfee6f44cec11611ac752054a83"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "c594c163720bdd9dfbeff57fbcb4c372"
  },
  {
    "url": "tags/js/index.html",
    "revision": "d77fad59752249ee13fb1e4ad75673fc"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "7d35190e5f7d0ea76db99a2a7d6db36d"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "e761f263c68ac387f01e3947138eb05d"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "8cead32b73f6e89873e5b26ef2416d57"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "c8baadb0a7a37ce44025a6f145f0dace"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "4a57f6d01ae5f95676db085f14f5900a"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "a88899f290a2f9ab7bddda35c574e9e2"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "d250816ad45e7fe2b96e21ef19a1aeda"
  },
  {
    "url": "timeline/index.html",
    "revision": "1d1bd1780c316ad91b46b7f59ead4cae"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "0745eb2d2c0eb4287ecacb06e5a348fc"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "8f0a6bf90982c929d95d4ef536944902"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "715c510cb877207dbf5134753f4c5d63"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "4f878e68f8af76736fa2633b308966ea"
  },
  {
    "url": "生活分享/life.html",
    "revision": "0d8eca12b01ffc71c9ff66d763425637"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
