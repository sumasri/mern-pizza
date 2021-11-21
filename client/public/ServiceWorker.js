const STATIC_CACHE_NAME='static-v1';

const ASSETS=[
    '/',
    '/index.html',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/brands.min.css'
];

self.addEventListener("install",(event)=>{
    event.waitUntil(
        caches
            .open(STATIC_CACHE_NAME)
            .then((cache)=>{
                cache.addAll(ASSETS);
            })
            .then(()=>console.log('Cache static assets'))
            .catch((error)=>{console.log(error)})
    )
})

self.addEventListener("active",(event)=>{
    event.waitUntil(
        caches
            .keys()
            .then((keys)=>{
                return Promise.all(
                    keys
                        .filter((key)=>key !== STATIC_CACHE_NAME)
                        .map((key)=>caches.delete(key))

                )
            })
            .catch((error)=>{console.error(error)})
    )
})

self.addEventListener("fetch",(event)=>{
    event.respondWith(
        caches
            .match(event.request)
            .then((cacheRes)=> cacheRes || fetch(event.request))
            .catch((error)=>{console.error(error)})
    )
})