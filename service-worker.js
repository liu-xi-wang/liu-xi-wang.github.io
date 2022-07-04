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
    "revision": "773b38007646aa6e4357ed1b73359619"
  },
  {
    "url": "assets/css/0.styles.cfc0c72b.css",
    "revision": "5a60c1a9440d3859f89d35b14adaae61"
  },
  {
    "url": "assets/img/auto.65b382d8.png",
    "revision": "65b382d89e7ae99c4f0c6349dd7443fe"
  },
  {
    "url": "assets/img/closure.bdf6f822.png",
    "revision": "bdf6f822178bdd15d20596c9f456e4cf"
  },
  {
    "url": "assets/img/commonPoint.87fde1d3.png",
    "revision": "87fde1d35a259e291a9ad2c8ddad9acb"
  },
  {
    "url": "assets/img/constructingFunction.ed66bf43.png",
    "revision": "ed66bf437b148158a0588a6759a19931"
  },
  {
    "url": "assets/img/differentia.3b7afe75.png",
    "revision": "3b7afe75f556d8cb1b443e8e0e4803c5"
  },
  {
    "url": "assets/img/dynamic.37009008.png",
    "revision": "37009008349faba20f1891cd3f700ab9"
  },
  {
    "url": "assets/img/flex.180e65e9.png",
    "revision": "180e65e9342fc969219f04a249076e7e"
  },
  {
    "url": "assets/img/functionCall.cb3b1906.png",
    "revision": "cb3b1906bd501686c13ad6805581bd97"
  },
  {
    "url": "assets/img/height.0fe4aa17.png",
    "revision": "0fe4aa176dc744a8041db2390f8de8c1"
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
    "url": "assets/img/instance.2a940a2f.png",
    "revision": "2a940a2f3ca5368d108c36089415ea92"
  },
  {
    "url": "assets/img/markSweeping.6033a3de.png",
    "revision": "6033a3deebcb30f68996346a640ccf43"
  },
  {
    "url": "assets/img/methodInvocation.1ffcfc8a.png",
    "revision": "1ffcfc8a20c25fba800a999fe0b450fa"
  },
  {
    "url": "assets/img/position.3dd662e0.png",
    "revision": "3dd662e0bbfe4bb077711f5ad2aa84d2"
  },
  {
    "url": "assets/img/proto.d3294f21.png",
    "revision": "d3294f213a29a1ea7b034092c48c3da4"
  },
  {
    "url": "assets/img/textAlign.32071459.png",
    "revision": "32071459a59c9e73e67140294ee3a59f"
  },
  {
    "url": "assets/img/tryCatch.2faf0665.png",
    "revision": "2faf06658816ba8c75908b3f555aec2c"
  },
  {
    "url": "assets/js/1.6c3174d9.js",
    "revision": "a5ccc1ee114b38d98965cf28f7c8a4f0"
  },
  {
    "url": "assets/js/10.4acb7136.js",
    "revision": "b702d982e936080baa521eda1a2b46a1"
  },
  {
    "url": "assets/js/11.5b01af7b.js",
    "revision": "e7d7a8889a7b7265036bea790b930513"
  },
  {
    "url": "assets/js/12.5f318419.js",
    "revision": "a4ecbd38482053844375d52b9a6f45f0"
  },
  {
    "url": "assets/js/13.d4d7b842.js",
    "revision": "92e8daec8bb1f8bb887f43c4d08db0b0"
  },
  {
    "url": "assets/js/14.e16b570c.js",
    "revision": "2da5b9b999cd015915edeeb6214f2c22"
  },
  {
    "url": "assets/js/15.2b94f078.js",
    "revision": "1ff33d6fcf35c609b89a83b632c11603"
  },
  {
    "url": "assets/js/16.96c53bdb.js",
    "revision": "52f516461d544f867c1d79cd54037ae9"
  },
  {
    "url": "assets/js/17.d3a78799.js",
    "revision": "b7bb70f4b81f4817a1a12b8ad77e3bd1"
  },
  {
    "url": "assets/js/4.1192e997.js",
    "revision": "963be4093a7b84ea975248a7f4e128e7"
  },
  {
    "url": "assets/js/5.64cc54fd.js",
    "revision": "01082cf704a4ea375232360be4fb1244"
  },
  {
    "url": "assets/js/6.579f0ada.js",
    "revision": "0593bd88ac8d6b834e52fdfc5be386c5"
  },
  {
    "url": "assets/js/7.3521cdaa.js",
    "revision": "4f05ae9ba262a6118dfd85c245d1e9a0"
  },
  {
    "url": "assets/js/8.c3276f8f.js",
    "revision": "19c389dc7c6710a99d084d3893bd0824"
  },
  {
    "url": "assets/js/9.57b23a16.js",
    "revision": "6e4c9c1abac64b9f81b55e949de59fda"
  },
  {
    "url": "assets/js/app.7bc2f806.js",
    "revision": "f5f2b0def9c960d0070faba697bd6664"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.57ab61e6.js",
    "revision": "46b4416c6a6f685d3412db5a7a7c5d1f"
  },
  {
    "url": "avatar.png",
    "revision": "fcd2f966dc7ad388501483ed7eb62f6a"
  },
  {
    "url": "categories/css知识/index.html",
    "revision": "3c5d0c96874a3a547589564c0a9150af"
  },
  {
    "url": "categories/index.html",
    "revision": "8cc60f28d707da3229ab71d4849bd24f"
  },
  {
    "url": "categories/js知识/index.html",
    "revision": "0c5afab8789051f0f5975e7d3414838e"
  },
  {
    "url": "categories/优化/index.html",
    "revision": "2e6988442162b57a4de6c7ee72eaf109"
  },
  {
    "url": "categories/前端基础/index.html",
    "revision": "33b434f01d52c0f31f5b0d54aacc4474"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "a083b3a09992e31bafd9d2d91c4bff87"
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
    "revision": "6e071f6762877ff1f167af0b43a12cbc"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "917876773edabfbe6449910118739f77"
  },
  {
    "url": "tags/css知识/index.html",
    "revision": "a2009fffc561e7a24bdadf75a8c07d7e"
  },
  {
    "url": "tags/js知识/index.html",
    "revision": "09ac467d9e9032a3341764fabc10e568"
  },
  {
    "url": "tags/优化/index.html",
    "revision": "c987d6c6718a23f2e1136e65ec7921fb"
  },
  {
    "url": "tags/前端基础/index.html",
    "revision": "e555c0c84fb84d0c3a85aa0d3a52108f"
  },
  {
    "url": "tags/性能优化/index.html",
    "revision": "90f47966b0fba8c1aa69df1e106ffbcf"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "191e3ad7e197ff6a5e466e056265918e"
  },
  {
    "url": "timeline/index.html",
    "revision": "31385190415747d1c7fcc85e4ab1b770"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "性能优化/performanceOptimization.html",
    "revision": "309dc6c68d5fccada7f79376b8050238"
  },
  {
    "url": "技术分享/css.html",
    "revision": "97d055c52864246cdfb500a9765e100e"
  },
  {
    "url": "技术分享/index.html",
    "revision": "118728fb883ba2f3b3e8fc4419d6e9ac"
  },
  {
    "url": "技术分享/js.html",
    "revision": "2c76f2fa27dd2cf493dc279d82a5d188"
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
