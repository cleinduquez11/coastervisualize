'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c19670a1c1e7ca2d49b61f6cbf7490ea",
"assets/AssetManifest.bin.json": "aace52f9531cf855ff752e6829ee0cb4",
"assets/AssetManifest.json": "e2fed1d5be97d1375c8b97738d87ab96",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "89eaca4f1be122f1d05a8a78319b4703",
"assets/lib/Assets/images/1.png": "f3231a8a6a429a3be651a160ed07155c",
"assets/lib/Assets/images/10.png": "f3231a8a6a429a3be651a160ed07155c",
"assets/lib/Assets/images/100.png": "2312972b04f1f9b7e1b4d909bc1b26db",
"assets/lib/Assets/images/101.png": "1a26ccd6f1ca2494c24f189b1e6b1f48",
"assets/lib/Assets/images/102.png": "2bbdca2edb0a36edb062c1435e0a08e4",
"assets/lib/Assets/images/103.png": "bcd19fcf4629cb3f10070292362ef983",
"assets/lib/Assets/images/104.png": "2e6b70f126d432e8e9d99c47357e4873",
"assets/lib/Assets/images/105.png": "63aa9fc281499f8b8ab8a283b508b06b",
"assets/lib/Assets/images/106.png": "ad7bf7c69d0d75e86fc18bca51d6f7aa",
"assets/lib/Assets/images/107.png": "f533cee82b2102b578bfbafd74f7720a",
"assets/lib/Assets/images/108.png": "28f56bb0a8f9408e5c5cbd7b03a90e13",
"assets/lib/Assets/images/109.png": "eaf9851e3c5ba8a690020279a2a2ddb2",
"assets/lib/Assets/images/11.png": "f3231a8a6a429a3be651a160ed07155c",
"assets/lib/Assets/images/110.png": "4bc5beeffb2e46676019da8f78b7dfbb",
"assets/lib/Assets/images/111.png": "885f93882976ea864398c7a7a050cffd",
"assets/lib/Assets/images/112.png": "1ac2b7a1dd9e99e3f4833428502d8613",
"assets/lib/Assets/images/113.png": "4a636e381433fad48ba94dcdb0a84ed2",
"assets/lib/Assets/images/114.png": "751072729a301f9d2db62a0972c7d11f",
"assets/lib/Assets/images/115.png": "5e78290e92734fa171a0711f2c8ba851",
"assets/lib/Assets/images/116.png": "a7fe3cba0241130a4b02ff25bd9b791a",
"assets/lib/Assets/images/117.png": "5ddb9a55d4d45cbd4d2b6f6c16a81dda",
"assets/lib/Assets/images/118.png": "3eb118065d8cd9dbef55e15bbc2d186e",
"assets/lib/Assets/images/119.png": "5c8df41369cc90ffa126a3c4d750d2f2",
"assets/lib/Assets/images/12.png": "f3231a8a6a429a3be651a160ed07155c",
"assets/lib/Assets/images/120.png": "29c5e98dafaf4af8d4504bf2ef6e93be",
"assets/lib/Assets/images/121.png": "6549c28d3999fb5a4dfae109f82be1ee",
"assets/lib/Assets/images/122.png": "163fb3c017e57d2c6b29ed3b3930846e",
"assets/lib/Assets/images/123.png": "e0c43140e0f303a4c852b2929448ef05",
"assets/lib/Assets/images/124.png": "042ee43a4594f91f5e1311b63419f1ac",
"assets/lib/Assets/images/125.png": "220c5a6ccbe6e0520b8710fd96fd1179",
"assets/lib/Assets/images/126.png": "9e233a3929b5bfda0cd70cfa3c4d22dc",
"assets/lib/Assets/images/127.png": "85c440718527b3678bb0b22f7dfc80f5",
"assets/lib/Assets/images/128.png": "face25c860f37e918d05cbe206bb706d",
"assets/lib/Assets/images/129.png": "73e6823ae97d8ee928751853c6be5703",
"assets/lib/Assets/images/13.png": "f3231a8a6a429a3be651a160ed07155c",
"assets/lib/Assets/images/130.png": "e03057837abbf700a13b941a03265bf9",
"assets/lib/Assets/images/131.png": "2744158ef90a8a762a6aebb71c04681b",
"assets/lib/Assets/images/132.png": "1512be04ec3b9bb5f0e9a2023b6ce4c1",
"assets/lib/Assets/images/133.png": "2275fea7855758f60e7dca92dc904d74",
"assets/lib/Assets/images/134.png": "44a10360b235bbae9bd540bd5a1ba1e8",
"assets/lib/Assets/images/135.png": "a261a6abb05cb918c9e05d3e3a0cf314",
"assets/lib/Assets/images/136.png": "b29e95983563891de0b9d86089fae276",
"assets/lib/Assets/images/137.png": "6d1bf69d0eee18a30e6e7200757dda7d",
"assets/lib/Assets/images/138.png": "5f618f704a18eed7e7ee76228d58f338",
"assets/lib/Assets/images/139.png": "aa67c4aa9fc5f6c4caba913a94d2ed5a",
"assets/lib/Assets/images/14.png": "f3231a8a6a429a3be651a160ed07155c",
"assets/lib/Assets/images/140.png": "ef8550e8af1f7a8681c1da5bd628da9e",
"assets/lib/Assets/images/141.png": "21a68e9020dabff41cc6a7763aa1a2c6",
"assets/lib/Assets/images/142.png": "82477ff0329f92d6f6852450b5dcfb94",
"assets/lib/Assets/images/143.png": "ce0128c39279620a98caaa6e651e1aef",
"assets/lib/Assets/images/144.png": "df8e66d0e1462101a5ca415653254dd2",
"assets/lib/Assets/images/145.png": "3757a4d23514031f2682647a4d36d82d",
"assets/lib/Assets/images/146.png": "509a544e51849ac6f48f3a4607ae2a4a",
"assets/lib/Assets/images/147.png": "955e641c81d4fc2d3e9eb4853e3e717b",
"assets/lib/Assets/images/148.png": "e06d2159d66cef112c4726d05c20899a",
"assets/lib/Assets/images/149.png": "f6caa0e3aac5e6c88fc2e873bded62fb",
"assets/lib/Assets/images/15.png": "f3231a8a6a429a3be651a160ed07155c",
"assets/lib/Assets/images/150.png": "3ad1b8a93b96ad3c4c9db9ab7de3f564",
"assets/lib/Assets/images/151.png": "bead46c636f966b9571c5770a37c2dee",
"assets/lib/Assets/images/152.png": "4fcd740a1e8b8adc76277fbb38302785",
"assets/lib/Assets/images/153.png": "1078b85e59f792e8f28ecf5533d25022",
"assets/lib/Assets/images/154.png": "2c6721a665215def48c4f1673c7bf4bc",
"assets/lib/Assets/images/155.png": "dc44c9b2e75ca80b98208ed1fa2304ce",
"assets/lib/Assets/images/156.png": "2cb38f3414c5f732c0275dbe2cb59bed",
"assets/lib/Assets/images/157.png": "2e13d76fda66613394f1b0426c501e91",
"assets/lib/Assets/images/158.png": "71c2b0e24fbdba0eb999e490e5a6c322",
"assets/lib/Assets/images/159.png": "fa1a47bf585ee332ec7607ef4acbe0a2",
"assets/lib/Assets/images/16.png": "f3231a8a6a429a3be651a160ed07155c",
"assets/lib/Assets/images/160.png": "6bbadaa77f3d4a3d995eab5f2316a95b",
"assets/lib/Assets/images/161.png": "fb15d4b95d2bd10c7f6a64b82fbde9d7",
"assets/lib/Assets/images/162.png": "43160bf499bb11675a7f66c0de7616e9",
"assets/lib/Assets/images/163.png": "50169a64a2de355f7b5d54a26ca5ca73",
"assets/lib/Assets/images/164.png": "6c47b89435868f3886f1cf0b5c851b03",
"assets/lib/Assets/images/165.png": "4f77c2d2842e9ae70cbb38e6df73b97c",
"assets/lib/Assets/images/166.png": "b7845e1b52dd2f07cd59728c621912a2",
"assets/lib/Assets/images/167.png": "f02f71f02789e44aeb214147bb02150d",
"assets/lib/Assets/images/168.png": "284e87ded93b39b24d8e2dd1b4b0f94f",
"assets/lib/Assets/images/169.png": "0d2d7ab40ffd69478f906ff49ef60ef2",
"assets/lib/Assets/images/17.png": "f3231a8a6a429a3be651a160ed07155c",
"assets/lib/Assets/images/170.png": "cf4fb69679591d57a27c5f87c7efcabb",
"assets/lib/Assets/images/171.png": "58297e9f3b25376280aedec3357c816a",
"assets/lib/Assets/images/172.png": "ec68340fd434db335e4863825abd93e0",
"assets/lib/Assets/images/173.png": "88c732a95a7d8ecccbbc7f9866113933",
"assets/lib/Assets/images/174.png": "13df6ba833dfed6fb5bcf5209ee140a1",
"assets/lib/Assets/images/175.png": "c0d68e746182ee66750ce92d6443fb81",
"assets/lib/Assets/images/176.png": "a979c47aa78a72624d47093d95cb489f",
"assets/lib/Assets/images/177.png": "53bc5f18aa4209cfcca92eb29d35dc8a",
"assets/lib/Assets/images/178.png": "54a1392bdec151ae9b22b4d884b062fd",
"assets/lib/Assets/images/179.png": "36070255c875bd45eab2ca8f83fbfcce",
"assets/lib/Assets/images/18.png": "f3231a8a6a429a3be651a160ed07155c",
"assets/lib/Assets/images/180.png": "85e1b61958493cc0353c1ce001bff964",
"assets/lib/Assets/images/181.png": "0f1f6ca0db1300fb4ed922cb827392da",
"assets/lib/Assets/images/182.png": "f689864754eaf88b713e05526ce1e957",
"assets/lib/Assets/images/183.png": "5734884f16f73e385ee97ee74dbefa57",
"assets/lib/Assets/images/184.png": "7d971879a047fe3e0f256b53bf7229e9",
"assets/lib/Assets/images/185.png": "b28712e0dffbda82c6680b5e973eda39",
"assets/lib/Assets/images/186.png": "b657ce88a52b296b28d5fc8f41dc2176",
"assets/lib/Assets/images/187.png": "f3231a8a6a429a3be651a160ed07155c",
"assets/lib/Assets/images/19.png": "f3231a8a6a429a3be651a160ed07155c",
"assets/lib/Assets/images/2.png": "f3231a8a6a429a3be651a160ed07155c",
"assets/lib/Assets/images/20.png": "f3231a8a6a429a3be651a160ed07155c",
"assets/lib/Assets/images/21.png": "f3231a8a6a429a3be651a160ed07155c",
"assets/lib/Assets/images/22.png": "f3231a8a6a429a3be651a160ed07155c",
"assets/lib/Assets/images/23.png": "eb6b999971f5e5a612b5bb7ee501da33",
"assets/lib/Assets/images/24.png": "16f9a5686344f9fe14f0545286b9716f",
"assets/lib/Assets/images/25.png": "84513cb3927430708fcb6f27d4cb4ffe",
"assets/lib/Assets/images/26.png": "6cea4b2f7d5b09e26f5063d78c6b1021",
"assets/lib/Assets/images/27.png": "800da0c9f01e07dfb58912d1fe1274ac",
"assets/lib/Assets/images/28.png": "a4177822f1cca641afacb55fe447e1fc",
"assets/lib/Assets/images/29.png": "a282578a8991be1b20d346df1576e0f6",
"assets/lib/Assets/images/3.png": "f3231a8a6a429a3be651a160ed07155c",
"assets/lib/Assets/images/30.png": "f468bd5d31fb9b4dd07dc8db55c60c7f",
"assets/lib/Assets/images/31.png": "4b4872ac0ad7feb7a83d5a4a0bd017cd",
"assets/lib/Assets/images/32.png": "5c25c67d96b998c9a00e4f6d05543075",
"assets/lib/Assets/images/33.png": "b132289c0979ab3c62ad2bf11e4236b0",
"assets/lib/Assets/images/34.png": "9c6e81a60b509edb8161d549da253285",
"assets/lib/Assets/images/35.png": "843b0a7e6ab57faaa676c9b7dd7bca57",
"assets/lib/Assets/images/36.png": "8aaecaa4f8ea77dbdc0130d7d47f5973",
"assets/lib/Assets/images/37.png": "ed6962b64b76cf2a7db545db4c1516a7",
"assets/lib/Assets/images/38.png": "a0d2c0667b93ab6d382208c2f3e0eeaf",
"assets/lib/Assets/images/39.png": "27afeb5b306fff5d8b605d805b8bfdf8",
"assets/lib/Assets/images/4.png": "f3231a8a6a429a3be651a160ed07155c",
"assets/lib/Assets/images/40.png": "1a8cf61d717ad5bb5a95a3a3acebc148",
"assets/lib/Assets/images/41.png": "07f2da97f9dc3acd7a26341b6ad2480f",
"assets/lib/Assets/images/42.png": "ad12c86d4eb48c46b141253d85737840",
"assets/lib/Assets/images/43.png": "de65793892faf5cbbebb2f6b651fcb65",
"assets/lib/Assets/images/44.png": "2e0e2e8cdee70432be44594df9232509",
"assets/lib/Assets/images/45.png": "83de8417075093914272197331d63698",
"assets/lib/Assets/images/46.png": "c7aa5318ceb8bf39c9355688f0c0ce42",
"assets/lib/Assets/images/47.png": "8f1ec156808f0478e25cb15ecb1bd28c",
"assets/lib/Assets/images/48.png": "c7a31227ab2efd4a4a175c1d649378cd",
"assets/lib/Assets/images/49.png": "d0e3d35c9ecda6373630cc881354d84f",
"assets/lib/Assets/images/5.png": "f3231a8a6a429a3be651a160ed07155c",
"assets/lib/Assets/images/50.png": "35a25f92efc0de0ede26c5dc743cfe64",
"assets/lib/Assets/images/51.png": "cd2967a35e98004df448193659fa58b2",
"assets/lib/Assets/images/52.png": "dc946382fef7f1da83a8356c49efe650",
"assets/lib/Assets/images/53.png": "34bc2c8b4703f7a7b12a99057bd2265e",
"assets/lib/Assets/images/54.png": "662b77e28dce5e8fb0d2d87b31fe0088",
"assets/lib/Assets/images/55.png": "956733fc73a89c5d783e69d2905ea478",
"assets/lib/Assets/images/56.png": "6b191c8c1ad61385f850ae3fda316882",
"assets/lib/Assets/images/57.png": "c95447d5fbd638da3122c8d39a86566d",
"assets/lib/Assets/images/58.png": "f824bd98283e8e39c9a5b958f67eb93a",
"assets/lib/Assets/images/59.png": "76cc2cb9872756c01c897bed83c3e431",
"assets/lib/Assets/images/6.png": "f3231a8a6a429a3be651a160ed07155c",
"assets/lib/Assets/images/60.png": "4e1a3256e36d91c14cce50e9df5b7951",
"assets/lib/Assets/images/61.png": "76abab2f52e485cb3babb878deafb2d7",
"assets/lib/Assets/images/62.png": "26e7dfb01cda90d078e12874dfcc5201",
"assets/lib/Assets/images/63.png": "7f2f6134931e83597223e47e9412c187",
"assets/lib/Assets/images/64.png": "8404a5ed63508170b91b7404d473c70b",
"assets/lib/Assets/images/65.png": "d785be3700be6e3f1f0bb84977f14e3d",
"assets/lib/Assets/images/66.png": "8b2e03b0ed28767f0c2fae7ce04a23c9",
"assets/lib/Assets/images/67.png": "9686385e22f9c6e588a4a0a1577ffd2d",
"assets/lib/Assets/images/68.png": "bd8d851cbaa9d61175636bd4c0fdb392",
"assets/lib/Assets/images/69.png": "6a4c3d51e39364d4789caefd77334d03",
"assets/lib/Assets/images/7.png": "f3231a8a6a429a3be651a160ed07155c",
"assets/lib/Assets/images/70.png": "cb28b10b6080c5a9760893a73c4ac396",
"assets/lib/Assets/images/71.png": "66b9b20ff925e9295036376de6e1f503",
"assets/lib/Assets/images/72.png": "ac53b7af7da39abbb53b2d378cba4d4f",
"assets/lib/Assets/images/73.png": "7570a035695907d57b881ea0ca24a885",
"assets/lib/Assets/images/74.png": "5922b21456674521d6cf108a25bedaa6",
"assets/lib/Assets/images/75.png": "801cdf230d0f3697e5d27a84df88114a",
"assets/lib/Assets/images/76.png": "54ce52ee0eb14abf7eb10d2da87446f1",
"assets/lib/Assets/images/77.png": "afd48e9f2dabc9da715f3a970cf3c8f0",
"assets/lib/Assets/images/78.png": "6f867fc9db7187a3d0a81f28616cf40a",
"assets/lib/Assets/images/79.png": "74b175e98071bffe6a4b2bfeeba4e352",
"assets/lib/Assets/images/8.png": "f3231a8a6a429a3be651a160ed07155c",
"assets/lib/Assets/images/80.png": "1a740962ba90dfd8b97688c375337284",
"assets/lib/Assets/images/81.png": "1e1652c1f08587ed9613c2ae71c57d1b",
"assets/lib/Assets/images/82.png": "201b6442d4b5de15c037cd562cec5cbd",
"assets/lib/Assets/images/83.png": "902a852a3a76e418363cdd2d07d1d9f1",
"assets/lib/Assets/images/84.png": "5b47974febe8c29f321a4e09ebfde3d0",
"assets/lib/Assets/images/85.png": "f452d008a382409612985117f5c15763",
"assets/lib/Assets/images/86.png": "e47bbfec2ee069f405df4da493ed0f6c",
"assets/lib/Assets/images/87.png": "9786b42670629461a39014cb2b3f5392",
"assets/lib/Assets/images/88.png": "84d53a6e88c24e666fa0b8b32d4c800d",
"assets/lib/Assets/images/89.png": "56e2c5247cce4f788f6e592816a4fb64",
"assets/lib/Assets/images/9.png": "f3231a8a6a429a3be651a160ed07155c",
"assets/lib/Assets/images/90.png": "35d1634690406c47e708955b64ca2cca",
"assets/lib/Assets/images/91.png": "82fc7bc33bddf1e5bc43836f65673602",
"assets/lib/Assets/images/92.png": "47cabd8a082be730ac31a49935a10931",
"assets/lib/Assets/images/93.png": "e773e47cd14a926bfbddd0bd833ff73b",
"assets/lib/Assets/images/94.png": "f46a8deb54e12aa11905ca6fd2d5ce27",
"assets/lib/Assets/images/95.png": "233234afff26bdffd87ca1c1d8be6390",
"assets/lib/Assets/images/96.png": "30578e41291a0816b501280dc47a6e9f",
"assets/lib/Assets/images/97.png": "6b82dc2cc12e18914fb83411e6c7f522",
"assets/lib/Assets/images/98.png": "b8370e7f213de63c746719c01319702f",
"assets/lib/Assets/images/99.png": "d7a8160e460fb894b64147017111d16b",
"assets/NOTICES": "9caf96b0332361c3793d96b09a152d01",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "cca139ef978f3cdc030be45bcccfebfa",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1db9bf66df6f9c72b96ae870eaa36886",
"/": "1db9bf66df6f9c72b96ae870eaa36886",
"main.dart.js": "82348cd7bfde65166557820631e4e32c",
"manifest.json": "0d4b986a7f1b552eabf095c039aa7303",
"version.json": "87a329525ea44b363f812fcbd166fa13"};
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
