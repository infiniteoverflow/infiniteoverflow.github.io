'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "57d4c7fb90edbd9c4973a79b47f7a851",
"index.html": "86b511ad69bc753af4eb2645fc201668",
"/": "86b511ad69bc753af4eb2645fc201668",
"main.dart.js": "14af8fe6400d0e81764d4299029bff69",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"me.jpeg": "1a139d1ace47e2dd41a618cf4614293f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1cdbe6a016a17adefd935a6e66dd2fee",
".git/config": "9a374762dcb82456a0b85ba1dd712ae5",
".git/objects/92/e140726f8550344cc60dffa4b0ee2aa120356b": "d0ba9ef6f6efbf1696c103815e33ac84",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/9ece6307d95dbd156d77917fdf965ec2bc1f11": "037ce0251c530d59eae3c81e247fca32",
".git/objects/3d/21cb1337a9b5c52e17ef5ca24f17dc6548bd1b": "38a01065343e589f6380f966a0943c5a",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/93/8cae3ac31e6ccca2a39acfd5151b03a60aa108": "674c39d077340ac7a583eed4ae7f44e9",
".git/objects/9d/14cfe5160811461fdcdf1514062d4f0d62ca29": "bb83d38c9da8efaee814fe8424c9766b",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/a6f624fba12099b6939dfef45b39a39f737b3b": "de3ca697ebbb769ac963254097965af6",
".git/objects/d8/044191cc765985d56eab614e60710488edcb9b": "956442365aceb1e988d8958d49b75789",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/a7625e46941e29389ec2b077a0ab2e09cc3b71": "ddf3d5fcfdd0e7a04dbb70bea151af83",
".git/objects/c7/7f2fd00cec654cb57a9e99a9f97558dbef539b": "8bc34582ab704a4afbc0289847033395",
".git/objects/c9/8622c589077016379b8e246cc25344afe99c43": "7518177405bd73c5afcaf3df17525dbb",
".git/objects/cf/79e8d9962809a30565b2f657472a6ca6a6c4f7": "1261a6987e2e814efe60ea817a801158",
".git/objects/fb/2c5e3c34134c35af4377122f5f48f6130e0c83": "fa1c429f1ae8f18b7f72b175f9d6ea29",
".git/objects/c1/eabe512e3d83ad6396077e4d9b83729da9790f": "cde9200f8b4a5e6df70216c326bb0df9",
".git/objects/20/a63ab45a861f122652453d3fd6c6d8f8952947": "8dcad0ed9534b6eb7014793ab40aa335",
".git/objects/7d/d7cbccc71a1a0c10cc8338f32e294a043beba4": "0796626069a349f13c0e9b1f01969185",
".git/objects/42/9439eb9e1a68fb42d483d43d56660c944809b2": "0de5c2a478c3c6776574dca90183faa4",
".git/objects/89/e2ee781304cc9775bc7babaa7ccc928f00c5c8": "c2b8a3988c6e6f0dfd4c8c4348f44e5d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/7b7c3c760646649b8d9ba81b155fb70894d6de": "405cbebfc429150d85aafd8eed999fff",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/4c/1e64135f176d9dc149e7cef5d06db8142f463d": "5d8a074439f75b6394215fafd1e75576",
".git/objects/75/1e68de050e7941221671883925619a74c1f2db": "26a41efd5713ead560e984602fcc697f",
".git/objects/75/9b0873504ad1a5b7268134b38ac77188836520": "668ed0192b4be531d9ee3bacf3871f41",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/91/9981736feba785a2d728ccdaa73a0707b8f1f6": "daa9eaf45fe36ccc43305b60aa68e2ee",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/06/716023d7db6a9ba548928914eb04aab5a90afc": "004b7506e7042596e85f1e9517a0fbc2",
".git/objects/63/bb428f68d0d7344255ba5bf026583f3f09fe14": "a81cb2893914bf50be458dd3bf8662d4",
".git/objects/64/5545a0f8acfd28fe19493acd46d2396d99a62f": "6f5222fa7d2695330e2f81179267ffb5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/109c73a27311d34286d7efba3080594a169b52": "1320f9ed7ffc1444dea6489f939178dc",
".git/objects/b1/a651daad33391e96ecb1b44ddb8f227b2c34da": "bc6d6bb4639e27d063a2f2f6a4719ca5",
".git/objects/dd/db79bc52498566ddacce157706d86b9a039f84": "110d66f11c4704d0da10994a1a3d494c",
".git/objects/dc/e92cb971100a6ac01df35af2969f248addccfa": "d17f2f0c8330dccaa60c93f1ac444761",
".git/objects/a9/314b517e7463a387e3ef0317a579c64b4d7fea": "5d9828a6052d6abfcfd505605a384f62",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b0/4dcfe85ce75d5e7d29f300e698e133cbc9a819": "4d901e31b04947d5e5afa98fd228cbd7",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/2bbe7e68a86e87f4d3654cc48b3e38b6e2aa12": "80a36e2ca6a813e222525d870fe0a2f2",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e1/6ccb45089f381aedd61c8bbb92a2e4ef905b66": "257b0add3ec836b6d1f1c12cb8c120c3",
".git/objects/f7/4dc35417ef761a0b0d31df5930dc3784b6643f": "0cdff0bfb0874290bc4d941fdcc25a98",
".git/objects/c5/c61aa0b9891680d6d6fa7b6f5d72603d4e21b6": "e12be9478303079563c06d0ab2b66b55",
".git/objects/e0/292a83b140de3b0e03b3be03d88932fa2db515": "2d15413a46c7e2db1f418305e9cb1511",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ec1f32247279aeab4253a3b64e2561454596ed": "12d254dd5172fcdaeb112f8f1bd9e068",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/48/bdf71edb609e44a8cdd54660993d3c38581fd4": "b924245d6180f5a2b74a935836b3b30d",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/4a/cd92da3d6f8ae6a690f0e5f76a406e11dfae19": "38aaded8d24a1e972540005dbd9fdd72",
".git/objects/4f/a5ceeee07421c1be611a5293454888f51e7c85": "c3132f4694c3a9d40d8ca515589e08b1",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/78/a675e8253b9960f47b8f6bd6c7c9610c1a475c": "033f4ebe9d1d75a804b45038862d0e8f",
".git/objects/13/ad7719fdc41a85a02b1b4009bfb2bf7f60fb69": "5c7512bae6ac69d17cca44a8040eb3fd",
".git/objects/8e/978324abffa7e68b22aa030625556bcfa1c842": "e336d4e32d50aabdc068eb569c703169",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4e2dc60e9b6a0374e775da9016d200d5",
".git/logs/refs/heads/main": "4e2dc60e9b6a0374e775da9016d200d5",
".git/logs/refs/remotes/origin/main": "0771360eff63fd61015f5b5d8112025c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "b1cd92703855610a45d33914fd2800a8",
".git/refs/remotes/origin/main": "b1cd92703855610a45d33914fd2800a8",
".git/index": "eafa922db5635a1f4c21960af6b77275",
".git/COMMIT_EDITMSG": "9d6afc75a39eab08b134cdccb4348782",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "65927a9256022709295bd07d61a17fc5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "a3d922a0b0bb96200631d1d9f758ce7d",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
