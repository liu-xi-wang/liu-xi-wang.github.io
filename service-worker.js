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
    "revision": "8456eda0243fa92b20c3dbaefb0a8068"
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
    "url": "assets/js/13.992a6f22.js",
    "revision": "e50d8eec8f8aa4ba351f27f26bd57170"
  },
  {
    "url": "assets/js/14.2818110a.js",
    "revision": "9a5a6c14f1f32eef190e01717f08e92f"
  },
  {
    "url": "assets/js/15.6382d705.js",
    "revision": "dab462e290fe30639bd1b5111846563e"
  },
  {
    "url": "assets/js/16.b4126a68.js",
    "revision": "49bd3bfe51d19e41b4e1572f74d5cd9d"
  },
  {
    "url": "assets/js/17.6d8c550e.js",
    "revision": "ec48824028dfa0b249fb69912dfcfa31"
  },
  {
    "url": "assets/js/18.ccb1f5a6.js",
    "revision": "4618a2a9e799f30e7bb8423bdc449866"
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
    "url": "assets/js/app.60fca9b2.js",
    "revision": "f960e1e3b7fcc441bf4e0a0fb2111288"
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
    "revision": "0e9ccc37d86848b8eec8460a9e2a3227"
  },
  {
    "url": "categories/java/index.html",
    "revision": "4f59187b89be618d3984e3a6d9bb8f86"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "384148fa0706051d3db51a5760074b35"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "16c67b6dc54a149e3b47f506e9438974"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "b280de32e098d0ba21686e3d2953bed8"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "9034e04b880138e7bc2efeeba3702b91"
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
    "revision": "716b4dbc882589882628e7dcc0c002d7"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "b5d856e47e14ab572056df47588dad95"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "1723c402b921afa3d4b96787f612a7a1"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "377a279d1e94213e13cb91182b86069e"
  },
  {
    "url": "tags/js/index.html",
    "revision": "cafdbb5dcaae4ed5e3aad5eedf48ee38"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "2039d0505589e87a69037140d92088d8"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "1b75d25db624d21eda51493fa572a959"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "d352dc7a5484812abcf0e0021d2241a5"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "4512846afb43fb03496063e55bc6d311"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "15a9cb75cd4bac73753f00bd5ff3c179"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "91936823f44da083a1fb7199fc54be40"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "aa9fd1aa5160f6ccb23bd67ae9d9a0e3"
  },
  {
    "url": "timeline/index.html",
    "revision": "48e034bae5405d8c9deeeaa0122dd3fc"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "b90d0924cc3b5ed672e0983db566ee0b"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "f23b54993c87dfefa05fa735776db075"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "00968ae04292d6c59dc5667bcd528cd1"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "c392853861994a6127430215d7018b2f"
  },
  {
    "url": "生活分享/life.html",
    "revision": "d6ee9e688eff31355c52c02d8a0cf4ef"
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
