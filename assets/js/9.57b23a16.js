(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{615:function(t,i,e){t.exports=e.p+"assets/img/flex.180e65e9.png"},616:function(t,i,e){t.exports=e.p+"assets/img/textAlign.32071459.png"},617:function(t,i,e){t.exports=e.p+"assets/img/height.0fe4aa17.png"},618:function(t,i,e){t.exports=e.p+"assets/img/auto.65b382d8.png"},619:function(t,i,e){t.exports=e.p+"assets/img/position.3dd662e0.png"},655:function(t,i,e){"use strict";e.r(i);var n=e(4),s=Object(n.a)({},(function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),n("p",[t._v("个人认为js值得分享的一些细节，当然你也可以在这里寻找自己的答案")]),t._v(" "),n("ol",[n("li",[t._v("关于flex布局高度继承的问题")]),t._v(" "),n("li",[t._v("关于文字对齐的")]),t._v(" "),n("li",[t._v("高度的继承")]),t._v(" "),n("li",[t._v("margin：auto失效的问题")]),t._v(" "),n("li",[t._v("z-index层级")])])]),t._v(" "),n("h2",{attrs:{id:"关于flex布局高度继承的问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关于flex布局高度继承的问题"}},[t._v("#")]),t._v(" 关于flex布局高度继承的问题")]),t._v(" "),n("p",[t._v("如果不设置align-items的属性值的话，flex容器内会默认继承容器的高度，\n使用场景：可以这个特性做一些响应式的布局\n"),n("img",{attrs:{src:e(615),alt:"flex.png",title:"flex.png"}})]),t._v(" "),n("h2",{attrs:{id:"关于文字对齐的"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关于文字对齐的"}},[t._v("#")]),t._v(" 关于文字对齐的")]),t._v(" "),n("p",[t._v("inline-block，就是会受到一切inline属性影响，不光是vertical-align 影响，也会受text-align影响，甚至line-height 和letter-spacing都会影响，有时候用inline-block 做区块，发现 margin 莫名其妙的变多了，八成是line-height 或letter-spacing搞的鬼，把line-height 设为 1、letter-spacing 设为0就解决了\n或者使用 "),n("strong",[t._v("display：block")]),t._v(" "),n("img",{attrs:{src:e(616),alt:"textAlign.png",title:"textAlign.png"}})]),t._v(" "),n("h2",{attrs:{id:"高度的继承"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#高度的继承"}},[t._v("#")]),t._v(" 高度的继承")]),t._v(" "),n("p",[t._v("如果想要继承高度，但是父级又没有真正的高度不是写死，可以使用定位来实现\n"),n("img",{attrs:{src:e(617),alt:"height.png",title:"height.png"}})]),t._v(" "),n("h2",{attrs:{id:"margin-auto失效的问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#margin-auto失效的问题"}},[t._v("#")]),t._v(" margin：auto失效的问题")]),t._v(" "),n("p",[t._v("必须是块级元素才可以真的实现，左右剧中对齐\n"),n("img",{attrs:{src:e(618),alt:"auto.png",title:"auto.png"}})]),t._v(" "),n("h2",{attrs:{id:"z-index层级"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#z-index层级"}},[t._v("#")]),t._v(" z-index层级")]),t._v(" "),n("p",[t._v("每给一个元素position就会新建一个层级叠（桌子），  每张  桌子 的层级取决于最外层的z-index 。 更里面的元素没有关系\n"),n("img",{attrs:{src:e(619),alt:"position.png",title:"position.png"}})])])}),[],!1,null,null,null);i.default=s.exports}}]);