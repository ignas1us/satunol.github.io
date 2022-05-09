'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "7d1a9bb3a0a076535ad7c00ec2397d85",
"assets/assets/angkasa.png": "670f6d8c4092b888a8ae6fea89bf8cc9",
"assets/assets/background.jpeg": "984cf10d0aa798c5bc541acd74b574ed",
"assets/assets/backup_icon.png": "d1800daa9e7b76de730b83306c6992cc",
"assets/assets/cctv.jpg": "654832e07f39ebef924b84f7c621c1f5",
"assets/assets/code.jpg": "c0def57f80b440957899b834f2c82059",
"assets/assets/company.jpg": "e1a5eb99d89aaf3605fa41d2f7c5a4f4",
"assets/assets/crabs.jpg": "ce36d62dfa7279385b89ba45d2c24a5f",
"assets/assets/data.png": "79a4ecc17c9c4c7de810791d49d07d18",
"assets/assets/dcim.jpg": "73e120c3f7f93e2ca31b22a672b4cb49",
"assets/assets/dcim2.png": "0ec94d79481068de288b5d8c16ab3c25",
"assets/assets/emergency.png": "5dccc41fa8e84022d3a2d3a5a7a65f57",
"assets/assets/energy.png": "eda0f2dd89353ce27318a1e44a768d59",
"assets/assets/energy2.png": "2ddbc67f4b7e495a662ef2c780e2b52a",
"assets/assets/envi.jpg": "23c7a8dfc592b8bd223625ca41cec55f",
"assets/assets/environment.png": "42414a698c058fc9b7a6b044b3f5dbd3",
"assets/assets/envi_icon.png": "fd627ae9a61787132c6d6fba1336e649",
"assets/assets/equipment.png": "676882fb1985c098613e85258688d088",
"assets/assets/equipment2.png": "0ec94d79481068de288b5d8c16ab3c25",
"assets/assets/equipment_bg.jpg": "684204afef73944c4ec64b1452c9a31a",
"assets/assets/ericsson.png": "1ce1c7b182249ae3c4af4944d7c52ab2",
"assets/assets/e_m_icon.png": "f6cd6317ac62e23fd048a113cedb53fe",
"assets/assets/fb.jpg": "03b6e4580724356b162fa0475a7cc852",
"assets/assets/fb.png": "e790c25db5e52838040686612b1a732c",
"assets/assets/fb2.png": "77d199c5b5fc1a2f7fa8683b5cfd67b6",
"assets/assets/fireworks.jpg": "e793295d36c2f32c644e503f2e1485a9",
"assets/assets/gmail.jpg": "5927685db81c679eb25158e00496e50e",
"assets/assets/gmail.png": "598d07e7761f5bca3a3f78e95b6db422",
"assets/assets/google.png": "ff629c02385f2f3a199b7e0b3065d077",
"assets/assets/haccp.png": "bbe782587d1a757a06c7160016783bc5",
"assets/assets/haccp2.png": "e306f322a681b1de18c9626b59b62afd",
"assets/assets/haccp_bg.jpg": "71a7414a28e83c065e8c1568f543055b",
"assets/assets/huawei.png": "a649ce47c93db990f806909f2d2e925a",
"assets/assets/lampung.png": "e9b70d9fbd5b7eec90f47380b495dbbc",
"assets/assets/login.jpg": "e2dc0ca7b7e33c30f812caadff6d6aef",
"assets/assets/logo_satunol.png": "4c4a30dd2d37a63dfc6e1b36235c4436",
"assets/assets/machine.png": "b25dbd522578cbdd40822bacef6a0ba8",
"assets/assets/nokia.png": "96547e8f13e1e81171f21c10a91563c2",
"assets/assets/penghargaan1.jpg": "5fd1fe68abafed58068a48cdfb820003",
"assets/assets/penghargaan2.jpg": "2b2ae0ddc6a15b447ae47e7be867bc1b",
"assets/assets/penghargaan3.jpg": "a6922ec15be90e93f3ea34b326bf3d7e",
"assets/assets/penghargaan4.jpg": "d67c696ef8abd80a4f1e7e6ff981c86d",
"assets/assets/penghargaan5.jpg": "63a7a7eb27551225313a9df90238e8e2",
"assets/assets/penghargaan6.jpg": "9347525196fa8290305141ab400ae0c1",
"assets/assets/penghargaan7.jpg": "9371ff297be1d1541314ad0abb2ba913",
"assets/assets/perimeter.png": "c268e75fb84090b1f7c836f4509035fe",
"assets/assets/perimeter2.png": "19d7044897e644cefd42e4b493a417b0",
"assets/assets/pos.png": "4dd24749ab7003a63d512099c4dffb80",
"assets/assets/power.jpg": "e62e1cdddab9e612d88b8dedf875d397",
"assets/assets/property.jpg": "69d9dc38d8b9df8e2e7748fa7556e131",
"assets/assets/property2.png": "0ec94d79481068de288b5d8c16ab3c25",
"assets/assets/quality.png": "91bca283f0e9ac088a56f7e1665263ea",
"assets/assets/quality_audit.jpg": "2558c237c2ab94e7e5b0e33f7fa383f7",
"assets/assets/refrigeration.png": "99484b03b48ab75b406fa011a13edd78",
"assets/assets/refrigeration2.png": "146896168340c09bd669c352ee58590b",
"assets/assets/satunol.png": "7911b175f21c28ba79732e3d162059f4",
"assets/assets/satunol2.png": "22a1fbcde29d5ba0e5e191e1c6d906da",
"assets/assets/service2.png": "1581f6ca7b7ed6accf3d8854ec4fdcc4",
"assets/assets/siemens.png": "63f0329e7ef8d3909dbeb9206a62b30c",
"assets/assets/site.jpg": "8315338045feec3b11c3472b27239211",
"assets/assets/siteaccess.png": "f5895ac52fb74799c8c5c6f3c9eb0af9",
"assets/assets/site_icon.png": "25c6be1dbc8d5e27f4c701107d958016",
"assets/assets/slide1.jpg": "c9933240e529daba8ff64322087013fe",
"assets/assets/Slide2.jpg": "474b73cb464ccee38765ad04de934dd1",
"assets/assets/Slide3.jpg": "7d8249479488c505621e4a45dda8580f",
"assets/assets/slide4.jpg": "e9e1651698fde48c0621a20f31444392",
"assets/assets/slide5.jpg": "c20979d5a31742e55280d90e945cedbc",
"assets/assets/slide6.jpg": "f5597450207533ffc731980e9cfaa73c",
"assets/assets/slide7.jpg": "272a01607539f493464dff8deb22889c",
"assets/assets/telkomsel.png": "242bc6e2a21e42f451a01305d36333ad",
"assets/assets/twitter.jpg": "5f8d8b0e8662929dfd05aafa4bc32363",
"assets/assets/twitter.png": "ccbdcf67ef7fb2b1e674d0912119dcde",
"assets/assets/twitter2.png": "c392533a08b018470d57864b9cbef743",
"assets/assets/vibration.jpg": "a6e84eb47be8f732b62b6972a4a4f86a",
"assets/assets/vibration2.png": "90584f38652913d061df7cd213f6d600",
"assets/assets/visitor.jpg": "a98b90b86e3416631845524b38988dc5",
"assets/assets/visitor.png": "25d44809ea0315b3df3b342decbd06e0",
"assets/assets/visitor2.png": "9c0edcfab150c99e9d9eedeb5c289e86",
"assets/assets/zte.png": "332a2723778ce2f0d7434340f58e4918",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "58358f37dfa4c41ec14ac7e820b694f1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9c29294fee2b2dd84951a686a9abf506",
"/": "9c29294fee2b2dd84951a686a9abf506",
"main.dart.js": "8f0f4c87cdf67072c2fec1f87b51fd65",
"manifest.json": "f4681b661c0a688dfa99699721329124",
"version.json": "ab82ec57fe01c049bdba6ac7c97a64b7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
