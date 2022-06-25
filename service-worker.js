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
    "revision": "d3776206a702348c9fed37d8010f3be5"
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
    "url": "assets/js/12.e27bd8a3.js",
    "revision": "d4b9c17cf52793adf90c8fb3af72e8d9"
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
    "url": "assets/js/15.7a99cfb9.js",
    "revision": "7446a6fe51e17d7d4e61aca1636cda06"
  },
  {
    "url": "assets/js/16.7f11be97.js",
    "revision": "ba3010d9662bb74f485e8fbe736c5863"
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
    "url": "assets/js/app.9d69bda2.js",
    "revision": "46769e1251dab8bed5a579c46c6f5ee8"
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
    "revision": "3f92ae201bb211fc7c6f9bfb607a9df8"
  },
  {
    "url": "categories/java/index.html",
    "revision": "f577530f8e0e32d423243038e3b8824e"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "fe1790725b5ea00a52eaa2e02163742f"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "b42940fbea3bacdd8c1a9aba6bb92b3b"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "b0655e258146ef331fdbdc6f4c91af71"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "9b082bab5585d9d8234bc616f729c959"
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
    "revision": "cac75b0303607e87d0c712771462c18c"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "11c15d647e27257fbaf252fe8ea78f47"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "5b1f67caa784315b04289b21135b915f"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "17e5259bf7e89c00995b225cff7ec579"
  },
  {
    "url": "tags/js/index.html",
    "revision": "def4482326707daf3e5f7ca8909db7ab"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "1b8a46c9f64a41f10ed55d59f5454695"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "d5ae06fc525d62d2e5db8f6f557bfa7f"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "542f2faa9a378aea9e023e5bdb5e5576"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "232a557d59879d1866f0471e1c7e1640"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "dae0d5635684bf25b1929ed68941175e"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "15568585fde3bda671d2ff4cc9cee778"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "4009426f82b6eb9899621e13168cfb0b"
  },
  {
    "url": "timeline/index.html",
    "revision": "f77e15f6683c43fec51733d84a069145"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "086d76904e1d3ebbc3628570e4f7eabe"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "d6ca3ec8315382ea5580169e7cbb45ec"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "ae2c08845862df75bfe4a5ea17a00435"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "516d5521941b72c48e226dfb7a46b3e4"
  },
  {
    "url": "生活分享/life.html",
    "revision": "3bfb53ee0ec7f0584bf72f26c8bf62bd"
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
