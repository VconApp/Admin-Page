'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "df15e93f3d9f8f14c46d85ab446cd3ee",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/06/6725901e935b089b69956bbf2b82a0b87a1697": "a7c54f561f8a19fbcf0ed7bd3da85133",
".git/objects/08/70c3b7480fb8f0c9dc1342843ed22b91f18fff": "c8a4307b853b7b4907875254616b1678",
".git/objects/14/b9a48a72381e7c2932c5f168c84807ca53bed8": "7083c80a0d9d7de3ff0b35aa851bc646",
".git/objects/14/d497fac8a5e59bbcdd366f9c52f809501413b4": "bbbae0d98d030c83c28604de07c45533",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/18/62bbe7a887cc61596c278e5b3b776bf59079c8": "d63ca1ab6d494d82812b50a333dc2b66",
".git/objects/1a/20e2311ed810801947081370a9fd4b1a726bfc": "6605d06783a062b818189b0784d33ec1",
".git/objects/1a/39ed0ee95fb040497c117b43e25d38c8d95c5b": "fbb08244ec166103b7777f28c681a90d",
".git/objects/1e/25fb4841dbfcbc6e4fa75d9417a4113ba250bc": "e91280155bc02e320c2a664e7fefc7b5",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/27/a1e9700cb2d9c21b57a8b04540920cf837a997": "ce015d778de358e31455353646d0f65f",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3e/0ef6f2a70b8df42aa91e2e2733828d944a80ac": "132b774c0efeeb97003b4c356b630fe5",
".git/objects/46/1369f0fb561aabc30b7b2a2e964a88cdb3188a": "4b505f56da3b0c382c8787d2254d25eb",
".git/objects/51/f079427b15f8606cce23de84471873a1aa2652": "d8fe4614db7bb4a7d559fe304116a77a",
".git/objects/57/7705f25a076d2caf44b1b2af21c278c2075e73": "7e51619b32d3040866e74c17698f03ff",
".git/objects/59/49bc606ef71b243768365ef0ef48263d2c93af": "7bef28d7d9a8e27add14c1939355dd32",
".git/objects/5a/c083f4544dfec01cf121e1ca3999f9fc340624": "e2f8d32ea2c0deb02019e934547e443a",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/5e/f42f2e339956ce2f8f668d07760933c7742f18": "cc78f8efab3086a055721d8defd046ff",
".git/objects/5f/adb7f53356c210734436ac1958df5322a4e808": "daf186928bb1fc948e1715c38c053217",
".git/objects/60/793297b257ed8f32af90851221851be7b702d5": "3e970692b5e09658ca2e47854ed9257f",
".git/objects/68/04a4db732b794029ac25398e7ff9bce2983420": "666184c15b45cdb2694a4b18596bdb43",
".git/objects/6a/63b25c7a5d7cbc7f3a4e15b50456eff8a61207": "94dfc72f7c718cad89630ced7849d815",
".git/objects/6a/789289fd81f2e0f062defcc2fc3d6d752e4f13": "70a1f33918d6dfc2da3a24a5a722f41e",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6e/0d29f3d78edcbaef1a5f1506f3d35dfbcac3cc": "e72bcb54df165f0f421ef68be5093f8b",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/9d0fa89cd7b58bdbab234da41949fc9aec32c9": "34be44f259e4b5adc42dc22810733fbf",
".git/objects/9b/dbfb0313ec3b28481174257fdf9043ca29916c": "424e367bd1e01770cec6c476c2c52367",
".git/objects/9f/9735756d6278a3844d8a3fab1d04c7cf053979": "9ba13479d6c44b2799e27cb9e4a28893",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a5/3efdf92300d180241adcd14d81d15a734c4e08": "cdce04155deb291d95d5b2a8a45a186e",
".git/objects/ae/e65cadb9bac07bcaea043e9918de7a29c91177": "dd5d00a7515fb5688d9f5f1239970d50",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c1/9bf7a97a67f4ac4dff4362e95c79992e28e179": "b02ec4328edaa4627b5fefc7f5266de9",
".git/objects/c7/03dd3b2eca0a40cbdc4af7f60b7a54bb8eb247": "89900ad3b30bc75e84ac7530e3e98820",
".git/objects/ca/b58364760f9087c1dd2b801147b7d3e79dee1b": "a019277d14eff47d86e1a40381edb953",
".git/objects/cb/0df4fffd7359a77380eae6e3d25e06a699116c": "dbba21d7c2e15e642aba049451089acf",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/2b65f858f69985e09f0a3c9993fdd2c7f5cf1e": "c27b304cf8bacafc117042e317b78aae",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/7b985a630ead6df39b8feeb655b845272528b3": "c8564984ae1df43dadf56a9f117bd2b8",
".git/objects/e1/f246ece81a9fd5554cd1585b7483f1be9f3b28": "e464966b829bcd941ad8dabd781f4c7a",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e9/5646892b535a786e8a88003ad1e054dcd9fbd3": "ceb4a391910c782954eae7650c41a05a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/f5/c3dd4663b371c910a41fe8a3bf09d47d56ce84": "5634982e36f45c4b2fc6aea3a1117aff",
".git/objects/f6/2d27f30ed01148157e818b2846e417b97bbfe8": "feb490d63e0b9aaba61115d47c728138",
".git/objects/f7/7b8b9d4100acb4b87a62d0ec859da621b2cfaa": "76c674f5ba463d40b60cdfc0f0aef6a3",
".git/objects/f9/690c9defa0790f6c4f4e2c8d7f00989b20e9d3": "ab3f56e67e2e3e2ded6ac2977e5c92e3",
".git/objects/fc/3428ce79ce21dd598802e1ce78b882dae6ac15": "a29409528a670d94ce9cd73ed33289df",
"assets/AssetManifest.bin": "9e5ced14ae66c08f7dcfe744daab54a6",
"assets/AssetManifest.bin.json": "665acaf7a5131f220232f9e10b76903a",
"assets/AssetManifest.json": "3ca72fd1f865903ea2367133ac554853",
"assets/assets/lang/ar.json": "114b19af04c704a927d592185c99abc2",
"assets/assets/lang/en.json": "6c66e7dcb20272d0ff5045ac0eba69f1",
"assets/assets/lang/es.json": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/lang/fr.json": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/lang/hi.json": "d8776c87d98a12c9e14670a99d6904be",
"assets/assets/lang/id.json": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/lang/km.json": "6b691cd73896f377a294b247966712c3",
"assets/assets/lang/ms.json": "e3e061f3847156e20d67e92c0f352693",
"assets/assets/lang/ru.json": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/lang/th.json": "cdf4fbbbc4704d055d18d46b7d88f482",
"assets/assets/lang/tl.json": "3e4896f3f7f3614ca8e121c60ff82236",
"assets/assets/lang/vi.json": "197d882ca2c97c5e9ad2e7822347362e",
"assets/assets/lang/zh.json": "b9c3f36d05b0897615dbfe0e37001b59",
"assets/FontManifest.json": "209e66e2f71c646cc7eb744ea1cea0dc",
"assets/fonts/MaterialIcons-Regular.otf": "0aae49adf17d12bc08a418e52c3de77c",
"assets/NOTICES": "32dea3ae1da1418c7056b188599c674c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_charts/google_fonts/Comforter-Regular.ttf": "cff123ea94f9032380183b8bbbf30ec1",
"assets/packages/model_viewer_plus/assets/model-viewer.min.js": "a9dc98f8bf360be897a0898a7395f905",
"assets/packages/model_viewer_plus/assets/template.html": "8de94ff19fee64be3edffddb412ab63c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "9918ff38b996a16dbc6616a8d98bc537",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c36c5df5195472a8ceb0d837a9d4f413",
"/": "c36c5df5195472a8ceb0d837a9d4f413",
"main.dart.js": "034715e832a51f81ac29c30f683f97f8",
"manifest.json": "d9437f39725ad8b4da2389d4af0db776",
"version.json": "8748f90b149150dd6622a8dce7a1a21b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
