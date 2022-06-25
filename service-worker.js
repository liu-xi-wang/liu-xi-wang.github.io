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
    "revision": "7e0f81bcaa67764dd7fb0795d49a1046"
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
    "url": "assets/js/15.6ff5bfa8.js",
    "revision": "63a1157a67f9588bcc18ea4d3ac865b9"
  },
  {
    "url": "assets/js/16.8e0f4520.js",
    "revision": "49762c174af33daf53b3b8225c5730f8"
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
    "url": "assets/js/app.5e55b407.js",
    "revision": "a91d99f7ee3115e20a20a6324a54a8e9"
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
    "revision": "fcd2f966dc7ad388501483ed7eb62f6a"
  },
  {
    "url": "categories/index.html",
    "revision": "599343f6d40cdc5242929811ab453baa"
  },
  {
    "url": "categories/java/index.html",
    "revision": "418a628c8ae2dd4c4944bde58f5c7712"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "4acde01c71044bf18ed219d0773bdb3a"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "5b5fa2f217e65f9d3b5e5c3f422c20ae"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "2632a3b4886831e0fd72d36a0d6a4f1d"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "8d352b77dbf3e199fc129175cb18d414"
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
    "revision": "152b4863fa82d0a9baf169d54cebf375"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "2a70bed519b19c9c52db98a517e59a95"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "dbfbcd481902aa2f74e1643b247ad6b8"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "25dadfdf97ab0cc6b3de9ff7c45e617f"
  },
  {
    "url": "tags/js/index.html",
    "revision": "1730bdedb713037815ed798bcf5978ab"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "97b09af2b19cc8fbbf55f5a888c25305"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "7b707726c29b93b8d6f70a9dc7717a29"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "9f9edbbfd6cc3579888b36be8d22c15a"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "47f0c5aea22491a88e7dddeb90a72464"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "acd5fd6f3a0c749a21aea4f9294de9f9"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "8be86f00c9231d2f64ad380217c3ba5c"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "fd802c804b060dc4292b0e1f2e5e97cc"
  },
  {
    "url": "timeline/index.html",
    "revision": "d7f7c028848b7366debd19990765e425"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "aece45e9882ef901b7637950f4fdc524"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "90a50e2f7aedf4d92ec1060333f1f6db"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "0548412d0bd9f8576316d02c17706661"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "78eed3021995bf4049e29c603e2ed066"
  },
  {
    "url": "生活分享/life.html",
    "revision": "d9f0b7fde8d8c1a395db219dac2bf5c0"
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
