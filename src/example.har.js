export default {
    "log": {
        "version": "1.1",
            "creator": {
            "name": "WebPagetest",
                "version": "2.18"
        },
        "pages": [
            {
                "startedDateTime": "2015-12-26T13:52:12.000+00:00",
                "title": "Run 1, First View for https://github.com/",
                "id": "page_1_0",
                "pageTimings": {
                    "onLoad": 3592,
                    "onContentLoad": -1,
                    "_startRender": 2007
                },
                "_URL": "https://github.com/",
                "_loadTime": 3592,
                "_TTFB": 410,
                "_bytesOut": 22381,
                "_bytesOutDoc": 11684,
                "_bytesIn": 1678192,
                "_bytesInDoc": 1665105,
                "_connections": 10,
                "_requests": 16,
                "_requestsFull": 16,
                "_requestsDoc": 13,
                "_responses_200": 15,
                "_responses_404": 0,
                "_responses_other": 1,
                "_result": 0,
                "_render": 2007,
                "_fullyLoaded": 4927,
                "_cached": 0,
                "_docTime": 3592,
                "_domTime": 0,
                "_score_cache": 90,
                "_score_cdn": 100,
                "_score_gzip": 100,
                "_score_cookies": -1,
                "_score_keep-alive": 100,
                "_score_minify": -1,
                "_score_combine": 100,
                "_score_compress": -1,
                "_score_etags": -1,
                "_gzip_total": 4585,
                "_gzip_savings": 0,
                "_minify_total": 0,
                "_minify_savings": 0,
                "_image_total": 0,
                "_image_savings": 0,
                "_optimization_checked": 1,
                "_aft": 0,
                "_domElements": 212,
                "_pageSpeedVersion": "1.9",
                "_title": "GitHub · Where software is built",
                "_titleTime": 602,
                "_loadEventStart": 4144,
                "_loadEventEnd": 4149,
                "_domContentLoadedEventStart": 2191,
                "_domContentLoadedEventEnd": 2195,
                "_lastVisualChange": 6904,
                "_browser_name": "Google Chrome",
                "_browser_version": "47.0.2526.106",
                "_server_count": 1,
                "_server_rtt": 0,
                "_base_page_cdn": "",
                "_adult_site": 0,
                "_fixed_viewport": 1,
                "_score_progressive_jpeg": -1,
                "_firstPaint": 2759,
                "_docCPUms": 2293.215,
                "_fullyLoadedCPUms": 2433.616,
                "_docCPUpct": 55,
                "_fullyLoadedCPUpct": 32,
                "_isResponsive": -1,
                "_date": 1451137932,
                "_SpeedIndex": 2006,
                "_visualComplete": 2300,
                "_run": 1,
                "_effectiveBps": 371528,
                "_effectiveBpsDoc": 523288
            }
        ],
            "browser": {
            "name": "Google Chrome",
                "version": "47.0.2526.106"
        },
        "entries": [
            {
                "pageref": "page_1_0",
                "startedDateTime": "2015-12-26T13:52:12.272+00:00",
                "time": 296,
                "request": {
                    "method": "GET",
                    "url": "https://github.com/",
                    "headersSize": 375,
                    "bodySize": -1,
                    "cookies": [],
                    "headers": [
                        {
                            "name": "Host",
                            "value": "github.com"
                        },
                        {
                            "name": "Connection",
                            "value": "keep-alive"
                        },
                        {
                            "name": "Accept",
                            "value": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"
                        },
                        {
                            "name": "Upgrade-Insecure-Requests",
                            "value": "1"
                        },
                        {
                            "name": "User-Agent",
                            "value": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36 PTST/255"
                        },
                        {
                            "name": "Accept-Encoding",
                            "value": "gzip, deflate, sdch"
                        },
                        {
                            "name": "Accept-Language",
                            "value": "en-US,en;q=0.8"
                        }
                    ],
                    "httpVersion": "1.1",
                    "queryString": []
                },
                "response": {
                    "status": 200,
                    "statusText": "",
                    "headersSize": 1951,
                    "bodySize": 7298,
                    "headers": [
                        {
                            "name": "Server",
                            "value": "GitHub.com"
                        },
                        {
                            "name": "Date",
                            "value": "Sat, 26 Dec 2015 13:52:13 GMT"
                        },
                        {
                            "name": "Content-Type",
                            "value": "text/html; charset=utf-8"
                        },
                        {
                            "name": "Transfer-Encoding",
                            "value": "chunked"
                        },
                        {
                            "name": "Status",
                            "value": "200 OK"
                        },
                        {
                            "name": "Cache-Control",
                            "value": "no-cache"
                        },
                        {
                            "name": "Vary",
                            "value": "X-PJAX"
                        },
                        {
                            "name": "X-UA-Compatible",
                            "value": "IE=Edge,chrome=1"
                        },
                        {
                            "name": "Set-Cookie",
                            "value": "logged_in=no; domain=.github.com; path=/; expires=Wed, 26 Dec 2035 13:52:13 -0000; secure; HttpOnly"
                        },
                        {
                            "name": "Set-Cookie",
                            "value": "_gh_sess=eyJzZXNzaW9uX2lkIjoiYWNmODg2NmMyZmUwMTUxZGUzYTYyNTNmYTVjOTY1OTYiLCJfY3NyZl90b2tlbiI6IjdaSjRJQmtldXJXQm5ucGhSRW1XRVFlNXJDczZENktjdTF0QzVjUHNVMDQ9In0%3D--4521c5d4aaa6de11493f69d00c83e41d9f9ba97d; path=/; secure; HttpOnly"
                        },
                        {
                            "name": "X-Request-Id",
                            "value": "ab724cea1080da9045e4d83a0b85d263"
                        },
                        {
                            "name": "X-Runtime",
                            "value": "0.008182"
                        },
                        {
                            "name": "Content-Security-Policy",
                            "value": "default-src *; base-uri 'self'; connect-src 'self' live.github.com wss://live.github.com uploads.github.com status.github.com api.github.com www.google-analytics.com api.braintreegateway.com client-analytics.braintreegateway.com github-cloud.s3.amazonaws.com; font-src assets-cdn.github.com; form-action 'self' github.com gist.github.com; frame-src 'self' render.githubusercontent.com gist.github.com www.youtube.com player.vimeo.com checkout.paypal.com; img-src 'self' data: assets-cdn.github.com identicons.github.com www.google-analytics.com checkout.paypal.com collector.githubapp.com *.githubusercontent.com *.gravatar.com *.wp.com; media-src 'none'; object-src assets-cdn.github.com; script-src assets-cdn.github.com; style-src 'self' 'unsafe-inline' 'unsafe-eval' assets-cdn.github.com"
                        },
                        {
                            "name": "Strict-Transport-Security",
                            "value": "max-age=31536000; includeSubdomains; preload"
                        },
                        {
                            "name": "Public-Key-Pins",
                            "value": "max-age=300; pin-sha256=\"WoiWRyIOVNa9ihaBciRSC7XHjliYS9VwUGOIud4PB18=\"; pin-sha256=\"JbQbUG5JMJUoI6brnx0x3vZF6jilxsapbXGVfjhN8Fg=\"; includeSubDomains"
                        },
                        {
                            "name": "X-Content-Type-Options",
                            "value": "nosniff"
                        },
                        {
                            "name": "X-Frame-Options",
                            "value": "deny"
                        },
                        {
                            "name": "X-XSS-Protection",
                            "value": "1; mode=block"
                        },
                        {
                            "name": "Vary",
                            "value": "Accept-Encoding"
                        },
                        {
                            "name": "X-Served-By",
                            "value": "7d2a2d05162492046d9960cdbc326796"
                        },
                        {
                            "name": "Content-Encoding",
                            "value": "gzip"
                        },
                        {
                            "name": "X-GitHub-Request-Id",
                            "value": "341C539A:448A:29E92431:567E9B8D"
                        }
                    ],
                    "httpVersion": "1.1",
                    "redirectURL": "",
                    "content": {
                        "size": 7298,
                        "mimeType": "text/html"
                    },
                    "cookies": []
                },
                "cache": {},
                "timings": {
                    "blocked": -1,
                    "dns": -1,
                    "connect": 130,
                    "ssl": 130,
                    "send": 0,
                    "wait": 138,
                    "receive": 28
                },
                "_method": "GET",
                "_host": "github.com",
                "_url": "/",
                "_responseCode": "200",
                "_load_ms": "166",
                "_ttfb_ms": "138",
                "_load_start": "272",
                "_bytesOut": "377",
                "_bytesIn": "7298",
                "_objectSize": "7298",
                "_cacheControl": "no-cache",
                "_contentType": "text/html",
                "_contentEncoding": "gzip",
                "_type": "3",
                "_socket": "1000254",
                "_score_cache": "-1",
                "_score_cdn": "-1",
                "_score_gzip": "100",
                "_score_cookies": "-1",
                "_score_keep-alive": "-1",
                "_score_minify": "-1",
                "_score_combine": "-1",
                "_score_compress": "-1",
                "_score_etags": "-1",
                "_is_secure": "1",
                "_dns_ms": "-1",
                "_connect_ms": "-1",
                "_ssl_ms": 130,
                "_gzip_total": "1953",
                "_gzip_save": "0",
                "_minify_total": "0",
                "_minify_save": "0",
                "_image_total": "0",
                "_image_save": "0",
                "_cache_time": "-1",
                "_dns_start": "0",
                "_dns_end": "0",
                "_connect_start": "0",
                "_connect_end": "142",
                "_ssl_start": "142",
                "_ssl_end": "272",
                "_server_count": "1",
                "_client_port": "0",
                "_jpeg_scan_count": "0",
                "_full_url": "https://github.com/",
                "_score_progressive_jpeg": -1,
                "_load_end": 438,
                "_ttfb_start": "272",
                "_ttfb_end": 410,
                "_download_start": 410,
                "_download_end": 438,
                "_download_ms": 28,
                "_all_start": "142",
                "_all_end": 438,
                "_all_ms": 296,
                "_index": 0,
                "_number": 1
            },
            {
                "pageref": "page_1_0",
                "startedDateTime": "2015-12-26T13:52:12.676+00:00",
                "time": 789,
                "request": {
                    "method": "GET",
                    "url": "http://assets-cdn.github.com/assets/github-46ac4202cb3c472c54a367e85742188d9f18080f1a0f770de0df1718b8b6e657.css",
                    "headersSize": 440,
                    "bodySize": -1,
                    "cookies": [],
                    "headers": [
                        {
                            "name": "Host",
                            "value": "assets-cdn.github.com"
                        },
                        {
                            "name": "Connection",
                            "value": "keep-alive"
                        },
                        {
                            "name": "Accept",
                            "value": "text/css,*/*;q=0.1"
                        },
                        {
                            "name": "Origin",
                            "value": "https://github.com"
                        },
                        {
                            "name": "User-Agent",
                            "value": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36 PTST/255"
                        },
                        {
                            "name": "Referer",
                            "value": "https://github.com/"
                        },
                        {
                            "name": "Accept-Encoding",
                            "value": "gzip, deflate, sdch"
                        },
                        {
                            "name": "Accept-Language",
                            "value": "en-US,en;q=0.8"
                        }
                    ],
                    "httpVersion": "1.1",
                    "queryString": []
                },
                "response": {
                    "status": 200,
                    "statusText": "",
                    "headersSize": 648,
                    "bodySize": 46597,
                    "headers": [
                        {
                            "name": "Server",
                            "value": "GitHub.com"
                        },
                        {
                            "name": "Content-Type",
                            "value": "text/css"
                        },
                        {
                            "name": "Last-Modified",
                            "value": "Fri, 25 Dec 2015 20:09:42 GMT"
                        },
                        {
                            "name": "Expires",
                            "value": "Sat, 24 Dec 2016 20:10:28 GMT"
                        },
                        {
                            "name": "Cache-Control",
                            "value": "max-age=31536000, public"
                        },
                        {
                            "name": "Access-Control-Allow-Origin",
                            "value": "*"
                        },
                        {
                            "name": "Timing-Allow-Origin",
                            "value": "*"
                        },
                        {
                            "name": "Content-Encoding",
                            "value": "gzip"
                        },
                        {
                            "name": "X-GitHub-Request-Id",
                            "value": "B91F1118:448B:2C3FCFD6:567DA2B4"
                        },
                        {
                            "name": "Content-Length",
                            "value": "46597"
                        },
                        {
                            "name": "Accept-Ranges",
                            "value": "bytes"
                        },
                        {
                            "name": "Date",
                            "value": "Sat, 26 Dec 2015 13:52:13 GMT"
                        },
                        {
                            "name": "Via",
                            "value": "1.1 varnish"
                        },
                        {
                            "name": "Age",
                            "value": "63705"
                        },
                        {
                            "name": "Connection",
                            "value": "keep-alive"
                        },
                        {
                            "name": "X-Served-By",
                            "value": "cache-fra1227-FRA"
                        },
                        {
                            "name": "X-Cache",
                            "value": "HIT"
                        },
                        {
                            "name": "X-Cache-Hits",
                            "value": "10672"
                        },
                        {
                            "name": "X-Timer",
                            "value": "S1451137933.569497,VS0,VE0"
                        },
                        {
                            "name": "Vary",
                            "value": "Accept-Encoding"
                        },
                        {
                            "name": "X-Fastly-Request-ID",
                            "value": "59ef76ea13f629e14dec9012430d45acde930f30"
                        }
                    ],
                    "httpVersion": "1.1",
                    "redirectURL": "",
                    "content": {
                        "size": 46597,
                        "mimeType": "text/css"
                    },
                    "cookies": []
                },
                "cache": {},
                "timings": {
                    "blocked": -1,
                    "dns": 38,
                    "connect": 87,
                    "ssl": 49,
                    "send": 0,
                    "wait": 130,
                    "receive": 534
                },
                "_method": "GET",
                "_host": "assets-cdn.github.com",
                "_url": "/assets/github-46ac4202cb3c472c54a367e85742188d9f18080f1a0f770de0df1718b8b6e657.css",
                "_responseCode": "200",
                "_load_ms": "664",
                "_ttfb_ms": "130",
                "_load_start": "676",
                "_bytesOut": "442",
                "_bytesIn": "47247",
                "_objectSize": "46597",
                "_expires": "Sat, 24 Dec 2016 20:10:28 GMT",
                "_cacheControl": "max-age=31536000, public",
                "_contentType": "text/css",
                "_contentEncoding": "gzip",
                "_type": "3",
                "_socket": "1000304",
                "_score_cache": "100",
                "_score_cdn": "100",
                "_score_gzip": "100",
                "_score_cookies": "-1",
                "_score_keep-alive": "100",
                "_score_minify": "-1",
                "_score_combine": "-1",
                "_score_compress": "-1",
                "_score_etags": "-1",
                "_is_secure": "1",
                "_dns_ms": 38,
                "_connect_ms": 38,
                "_ssl_ms": 49,
                "_gzip_total": "650",
                "_gzip_save": "0",
                "_minify_total": "0",
                "_minify_save": "0",
                "_image_total": "0",
                "_image_save": "0",
                "_cache_time": "31472295",
                "_cdn_provider": "Fastly",
                "_dns_start": "551",
                "_dns_end": "589",
                "_connect_start": "589",
                "_connect_end": "627",
                "_ssl_start": "627",
                "_ssl_end": "676",
                "_initiator": "https://github.com/",
                "_initiator_line": "78",
                "_server_count": "1",
                "_client_port": "0",
                "_jpeg_scan_count": "0",
                "_full_url": "https://assets-cdn.github.com/assets/github-46ac4202cb3c472c54a367e85742188d9f18080f1a0f770de0df1718b8b6e657.css",
                "_score_progressive_jpeg": -1,
                "_load_end": 1340,
                "_ttfb_start": "676",
                "_ttfb_end": 806,
                "_download_start": 806,
                "_download_end": 1340,
                "_download_ms": 534,
                "_all_start": "551",
                "_all_end": 1340,
                "_all_ms": 789,
                "_index": 1,
                "_number": 2
            },
            {
                "pageref": "page_1_0",
                "startedDateTime": "2015-12-26T13:52:12.678+00:00",
                "time": 434,
                "request": {
                    "method": "GET",
                    "url": "https://assets-cdn.github.com/assets/github2-451ab63ad67fa9af580e5d9a3b2b7de911ce2e4b2437638f26fe8cb3879e67d8.css",
                    "headersSize": 441,
                    "bodySize": -1,
                    "cookies": [],
                    "headers": [
                        {
                            "name": "Host",
                            "value": "assets-cdn.github.com"
                        },
                        {
                            "name": "Connection",
                            "value": "keep-alive"
                        },
                        {
                            "name": "Accept",
                            "value": "text/css,*/*;q=0.1"
                        },
                        {
                            "name": "Origin",
                            "value": "https://github.com"
                        },
                        {
                            "name": "User-Agent",
                            "value": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36 PTST/255"
                        },
                        {
                            "name": "Referer",
                            "value": "https://github.com/"
                        },
                        {
                            "name": "Accept-Encoding",
                            "value": "gzip, deflate, sdch"
                        },
                        {
                            "name": "Accept-Language",
                            "value": "en-US,en;q=0.8"
                        }
                    ],
                    "httpVersion": "1.1",
                    "queryString": []
                },
                "response": {
                    "status": 300,
                    "statusText": "",
                    "headersSize": 647,
                    "bodySize": 61861,
                    "headers": [
                        {
                            "name": "Server",
                            "value": "GitHub.com"
                        },
                        {
                            "name": "Content-Type",
                            "value": "text/css"
                        },
                        {
                            "name": "Last-Modified",
                            "value": "Fri, 25 Dec 2015 20:09:42 GMT"
                        },
                        {
                            "name": "Expires",
                            "value": "Sat, 24 Dec 2016 20:10:28 GMT"
                        },
                        {
                            "name": "Access-Control-Allow-Origin",
                            "value": "*"
                        },
                        {
                            "name": "Timing-Allow-Origin",
                            "value": "*"
                        },
                        {
                            "name": "X-GitHub-Request-Id",
                            "value": "B91F1128:4486:D0337C4:567DA2B4"
                        },
                        {
                            "name": "Content-Length",
                            "value": "61861"
                        },
                        {
                            "name": "Accept-Ranges",
                            "value": "bytes"
                        },
                        {
                            "name": "Date",
                            "value": "Sat, 26 Dec 2015 13:52:13 GMT"
                        },
                        {
                            "name": "Via",
                            "value": "1.1 varnish"
                        },
                        {
                            "name": "Age",
                            "value": "63704"
                        },
                        {
                            "name": "Connection",
                            "value": "keep-alive"
                        },
                        {
                            "name": "X-Served-By",
                            "value": "cache-fra1235-FRA"
                        },
                        {
                            "name": "X-Cache",
                            "value": "HIT"
                        },
                        {
                            "name": "X-Cache-Hits",
                            "value": "11348"
                        },
                        {
                            "name": "X-Timer",
                            "value": "S1451137933.574421,VS0,VE0"
                        },
                        {
                            "name": "Vary",
                            "value": "Accept-Encoding"
                        },
                        {
                            "name": "X-Fastly-Request-ID",
                            "value": "6d13a220145b85e65e1839b09f6495603973671d"
                        }
                    ],
                    "httpVersion": "1.1",
                    "redirectURL": "",
                    "content": {
                        "size": 61861,
                        "mimeType": "text/css"
                    },
                    "cookies": []
                },
                "cache": {},
                "timings": {
                    "blocked": -1,
                    "dns": 33,
                    "connect": 90,
                    "ssl": 52,
                    "send": 0,
                    "wait": 175,
                    "receive": 136
                },
                "_method": "GET",
                "_host": "assets-cdn.github.com",
                "_url": "/assets/github2-451ab63ad67fa9af580e5d9a3b2b7de911ce2e4b2437638f26fe8cb3879e67d8.css",
                "_responseCode": "300",
                "_load_ms": "311",
                "_ttfb_ms": "175",
                "_load_start": "678",
                "_bytesOut": "443",
                "_bytesIn": "62510",
                "_objectSize": "61861",
                "_expires": "Sat, 24 Dec 2016 20:10:28 GMT",
                "_cacheControl": "max-age=31536000, public",
                "_contentType": "text/css",
                "_contentEncoding": "gzip",
                "_type": "3",
                "_socket": "1000305",
                "_score_cache": "100",
                "_score_cdn": "100",
                "_score_gzip": "100",
                "_score_cookies": "-1",
                "_score_keep-alive": "100",
                "_score_minify": "-1",
                "_score_combine": "-1",
                "_score_compress": "-1",
                "_score_etags": "-1",
                "_is_secure": "1",
                "_dns_ms": 33,
                "_connect_ms": 38,
                "_ssl_ms": 52,
                "_gzip_total": "649",
                "_gzip_save": "0",
                "_minify_total": "0",
                "_minify_save": "0",
                "_image_total": "0",
                "_image_save": "0",
                "_cache_time": "31472295",
                "_cdn_provider": "Fastly",
                "_dns_start": "555",
                "_dns_end": "588",
                "_connect_start": "588",
                "_connect_end": "626",
                "_ssl_start": "626",
                "_ssl_end": "678",
                "_initiator": "https://github.com/",
                "_initiator_line": "79",
                "_server_count": "1",
                "_client_port": "0",
                "_jpeg_scan_count": "0",
                "_full_url": "https://assets-cdn.github.com/assets/github2-451ab63ad67fa9af580e5d9a3b2b7de911ce2e4b2437638f26fe8cb3879e67d8.css",
                "_score_progressive_jpeg": -1,
                "_load_end": 989,
                "_ttfb_start": "678",
                "_ttfb_end": 853,
                "_download_start": 853,
                "_download_end": 989,
                "_download_ms": 136,
                "_all_start": "555",
                "_all_end": 989,
                "_all_ms": 434,
                "_index": 2,
                "_number": 3
            },
            {
                "pageref": "page_1_0",
                "startedDateTime": "2015-12-26T13:52:12.684+00:00",
                "time": 533,
                "request": {
                    "method": "GET",
                    "url": "https://assets-cdn.github.com/images/modules/home/gh-enterprise-code.png",
                    "headersSize": 404,
                    "bodySize": -1,
                    "cookies": [
                        {
                            "name": "logged_in",
                            "value": "no"
                        }
                    ],
                    "headers": [
                        {
                            "name": "Host",
                            "value": "assets-cdn.github.com"
                        },
                        {
                            "name": "Connection",
                            "value": "keep-alive"
                        },
                        {
                            "name": "Accept",
                            "value": "image/webp,image/*,*/*;q=0.8"
                        },
                        {
                            "name": "User-Agent",
                            "value": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36 PTST/255"
                        },
                        {
                            "name": "Referer",
                            "value": "https://github.com/"
                        },
                        {
                            "name": "Accept-Encoding",
                            "value": "gzip, deflate, sdch"
                        },
                        {
                            "name": "Accept-Language",
                            "value": "en-US,en;q=0.8"
                        },
                        {
                            "name": "Cookie",
                            "value": "logged_in=no"
                        }
                    ],
                    "httpVersion": "1.1",
                    "queryString": []
                },
                "response": {
                    "status": 404,
                    "statusText": "",
                    "headersSize": 559,
                    "bodySize": 89017,
                    "headers": [
                        {
                            "name": "Server",
                            "value": "GitHub.com"
                        },
                        {
                            "name": "Content-Type",
                            "value": "image/png"
                        },
                        {
                            "name": "Last-Modified",
                            "value": "Tue, 16 Jun 2015 01:36:05 GMT"
                        },
                        {
                            "name": "Expires",
                            "value": "Tue, 12 Jul 2016 06:27:37 GMT"
                        },
                        {
                            "name": "Cache-Control",
                            "value": "max-age=31536000, public"
                        },
                        {
                            "name": "Timing-Allow-Origin",
                            "value": "https://github.com"
                        },
                        {
                            "name": "Content-Length",
                            "value": "89017"
                        },
                        {
                            "name": "Accept-Ranges",
                            "value": "bytes"
                        },
                        {
                            "name": "Date",
                            "value": "Sat, 26 Dec 2015 13:52:13 GMT"
                        },
                        {
                            "name": "Via",
                            "value": "1.1 varnish"
                        },
                        {
                            "name": "Age",
                            "value": "14369076"
                        },
                        {
                            "name": "Connection",
                            "value": "keep-alive"
                        },
                        {
                            "name": "X-Served-By",
                            "value": "cache-fra1246-FRA"
                        },
                        {
                            "name": "X-Cache",
                            "value": "HIT"
                        },
                        {
                            "name": "X-Cache-Hits",
                            "value": "10870"
                        },
                        {
                            "name": "X-Timer",
                            "value": "S1451137933.581367,VS0,VE0"
                        },
                        {
                            "name": "Vary",
                            "value": "Accept-Encoding"
                        },
                        {
                            "name": "X-Fastly-Request-ID",
                            "value": "961266a72174f1fbcc059b833f3dba730cf3d003"
                        }
                    ],
                    "httpVersion": "1.1",
                    "redirectURL": "",
                    "content": {
                        "size": 89017,
                        "mimeType": "image/png"
                    },
                    "cookies": []
                },
                "cache": {},
                "timings": {
                    "blocked": -1,
                    "dns": 15,
                    "connect": 95,
                    "ssl": 56,
                    "send": 0,
                    "wait": 218,
                    "receive": 205
                },
                "_method": "GET",
                "_host": "assets-cdn.github.com",
                "_url": "/images/modules/home/gh-enterprise-code.png",
                "_responseCode": "404",
                "_load_ms": "423",
                "_ttfb_ms": "218",
                "_load_start": "684",
                "_bytesOut": "406",
                "_bytesIn": "89578",
                "_objectSize": "89017",
                "_expires": "Tue, 12 Jul 2016 06:27:37 GMT",
                "_cacheControl": "max-age=31536000, public",
                "_contentType": "image/png",
                "_type": "3",
                "_socket": "1000306",
                "_score_cache": "100",
                "_score_cdn": "100",
                "_score_gzip": "-1",
                "_score_cookies": "-1",
                "_score_keep-alive": "100",
                "_score_minify": "-1",
                "_score_combine": "-1",
                "_score_compress": "-1",
                "_score_etags": "-1",
                "_is_secure": "1",
                "_dns_ms": 15,
                "_connect_ms": 39,
                "_ssl_ms": 56,
                "_gzip_total": "0",
                "_gzip_save": "0",
                "_minify_total": "0",
                "_minify_save": "0",
                "_image_total": "0",
                "_image_save": "0",
                "_cache_time": "17166924",
                "_cdn_provider": "Fastly",
                "_dns_start": "574",
                "_dns_end": "589",
                "_connect_start": "589",
                "_connect_end": "628",
                "_ssl_start": "628",
                "_ssl_end": "684",
                "_initiator": "https://github.com/",
                "_initiator_line": "205",
                "_server_count": "1",
                "_client_port": "0",
                "_jpeg_scan_count": "0",
                "_full_url": "https://assets-cdn.github.com/images/modules/home/gh-enterprise-code.png",
                "_score_progressive_jpeg": -1,
                "_load_end": 1107,
                "_ttfb_start": "684",
                "_ttfb_end": 902,
                "_download_start": 902,
                "_download_end": 1107,
                "_download_ms": 205,
                "_all_start": "574",
                "_all_end": 1107,
                "_all_ms": 533,
                "_index": 3,
                "_number": 4
            },
            {
                "pageref": "page_1_0",
                "startedDateTime": "2015-12-26T13:52:12.699+00:00",
                "time": 585,
                "request": {
                    "method": "GET",
                    "url": "https://assets-cdn.github.com/assets/frameworks-ef8eb4a89ee9f3c8b7613307fe589a8f5705817f7cee27bec51ce5e963234abf.js",
                    "headersSize": 428,
                    "bodySize": -1,
                    "cookies": [],
                    "headers": [
                        {
                            "name": "Host",
                            "value": "assets-cdn.github.com"
                        },
                        {
                            "name": "Connection",
                            "value": "keep-alive"
                        },
                        {
                            "name": "Accept",
                            "value": "*/*"
                        },
                        {
                            "name": "Origin",
                            "value": "https://github.com"
                        },
                        {
                            "name": "User-Agent",
                            "value": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36 PTST/255"
                        },
                        {
                            "name": "Referer",
                            "value": "https://github.com/"
                        },
                        {
                            "name": "Accept-Encoding",
                            "value": "gzip, deflate, sdch"
                        },
                        {
                            "name": "Accept-Language",
                            "value": "en-US,en;q=0.8"
                        }
                    ],
                    "httpVersion": "1.1",
                    "queryString": []
                },
                "response": {
                    "status": 200,
                    "statusText": "",
                    "headersSize": 664,
                    "bodySize": 76859,
                    "headers": [
                        {
                            "name": "Server",
                            "value": "GitHub.com"
                        },
                        {
                            "name": "Content-Type",
                            "value": "application/javascript"
                        },
                        {
                            "name": "Last-Modified",
                            "value": "Wed, 16 Dec 2015 19:23:49 GMT"
                        },
                        {
                            "name": "Expires",
                            "value": "Thu, 15 Dec 2016 19:25:05 GMT"
                        },
                        {
                            "name": "Cache-Control",
                            "value": "max-age=31536000, public"
                        },
                        {
                            "name": "Access-Control-Allow-Origin",
                            "value": "*"
                        },
                        {
                            "name": "Timing-Allow-Origin",
                            "value": "*"
                        },
                        {
                            "name": "Content-Encoding",
                            "value": "gzip"
                        },
                        {
                            "name": "X-GitHub-Request-Id",
                            "value": "B91F111A:35CC:1395E1E7:5671BA91"
                        },
                        {
                            "name": "Content-Length",
                            "value": "76859"
                        },
                        {
                            "name": "Accept-Ranges",
                            "value": "bytes"
                        },
                        {
                            "name": "Date",
                            "value": "Sat, 26 Dec 2015 13:52:13 GMT"
                        },
                        {
                            "name": "Via",
                            "value": "1.1 varnish"
                        },
                        {
                            "name": "Age",
                            "value": "844028"
                        },
                        {
                            "name": "Connection",
                            "value": "keep-alive"
                        },
                        {
                            "name": "X-Served-By",
                            "value": "cache-fra1235-FRA"
                        },
                        {
                            "name": "X-Cache",
                            "value": "HIT"
                        },
                        {
                            "name": "X-Cache-Hits",
                            "value": "207475"
                        },
                        {
                            "name": "X-Timer",
                            "value": "S1451137933.592809,VS0,VE0"
                        },
                        {
                            "name": "Vary",
                            "value": "Accept-Encoding"
                        },
                        {
                            "name": "X-Fastly-Request-ID",
                            "value": "ff545bf2d27474196c35d20ed88230a74a9a28c7"
                        }
                    ],
                    "httpVersion": "1.1",
                    "redirectURL": "",
                    "content": {
                        "size": 76859,
                        "mimeType": "application/javascript"
                    },
                    "cookies": []
                },
                "cache": {},
                "timings": {
                    "blocked": -1,
                    "dns": 1,
                    "connect": 110,
                    "ssl": 71,
                    "send": 0,
                    "wait": 356,
                    "receive": 118
                },
                "_method": "GET",
                "_host": "assets-cdn.github.com",
                "_url": "/assets/frameworks-ef8eb4a89ee9f3c8b7613307fe589a8f5705817f7cee27bec51ce5e963234abf.js",
                "_responseCode": "200",
                "_load_ms": "474",
                "_ttfb_ms": "356",
                "_load_start": "699",
                "_bytesOut": "430",
                "_bytesIn": "77525",
                "_objectSize": "76859",
                "_expires": "Thu, 15 Dec 2016 19:25:05 GMT",
                "_cacheControl": "max-age=31536000, public",
                "_contentType": "application/javascript",
                "_contentEncoding": "gzip",
                "_type": "3",
                "_socket": "1000307",
                "_score_cache": "100",
                "_score_cdn": "100",
                "_score_gzip": "100",
                "_score_cookies": "-1",
                "_score_keep-alive": "100",
                "_score_minify": "-1",
                "_score_combine": "-1",
                "_score_compress": "-1",
                "_score_etags": "-1",
                "_is_secure": "1",
                "_dns_ms": 1,
                "_connect_ms": 39,
                "_ssl_ms": 71,
                "_gzip_total": "666",
                "_gzip_save": "0",
                "_minify_total": "0",
                "_minify_save": "0",
                "_image_total": "0",
                "_image_save": "0",
                "_cache_time": "30691972",
                "_cdn_provider": "Fastly",
                "_dns_start": "588",
                "_dns_end": "589",
                "_connect_start": "589",
                "_connect_end": "628",
                "_ssl_start": "628",
                "_ssl_end": "699",
                "_initiator": "https://github.com/",
                "_initiator_line": "314",
                "_server_count": "1",
                "_client_port": "0",
                "_jpeg_scan_count": "0",
                "_full_url": "https://assets-cdn.github.com/assets/frameworks-ef8eb4a89ee9f3c8b7613307fe589a8f5705817f7cee27bec51ce5e963234abf.js",
                "_score_progressive_jpeg": -1,
                "_load_end": 1173,
                "_ttfb_start": "699",
                "_ttfb_end": 1055,
                "_download_start": 1055,
                "_download_end": 1173,
                "_download_ms": 118,
                "_all_start": "588",
                "_all_end": 1173,
                "_all_ms": 585,
                "_index": 4,
                "_number": 5
            },
            {
                "pageref": "page_1_0",
                "startedDateTime": "2015-12-26T13:52:13.114+00:00",
                "time": 925,
                "request": {
                    "method": "GET",
                    "url": "https://assets-cdn.github.com/assets/github-4b6b8e7d11ebb7bce85126d3b4130c80041f2ae6d5d6ef8901a8c0c3f7cb80d2.js",
                    "headersSize": 424,
                    "bodySize": -1,
                    "cookies": [],
                    "headers": [
                        {
                            "name": "Host",
                            "value": "assets-cdn.github.com"
                        },
                        {
                            "name": "Connection",
                            "value": "keep-alive"
                        },
                        {
                            "name": "Accept",
                            "value": "*/*"
                        },
                        {
                            "name": "Origin",
                            "value": "https://github.com"
                        },
                        {
                            "name": "User-Agent",
                            "value": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36 PTST/255"
                        },
                        {
                            "name": "Referer",
                            "value": "https://github.com/"
                        },
                        {
                            "name": "Accept-Encoding",
                            "value": "gzip, deflate, sdch"
                        },
                        {
                            "name": "Accept-Language",
                            "value": "en-US,en;q=0.8"
                        }
                    ],
                    "httpVersion": "1.1",
                    "queryString": []
                },
                "response": {
                    "status": 500,
                    "statusText": "",
                    "headersSize": 665,
                    "bodySize": 129103,
                    "headers": [
                        {
                            "name": "Server",
                            "value": "GitHub.com"
                        },
                        {
                            "name": "Content-Type",
                            "value": "application/javascript"
                        },
                        {
                            "name": "Last-Modified",
                            "value": "Fri, 18 Dec 2015 17:40:45 GMT"
                        },
                        {
                            "name": "Expires",
                            "value": "Sat, 17 Dec 2016 17:41:49 GMT"
                        },
                        {
                            "name": "Cache-Control",
                            "value": "max-age=31536000, public"
                        },
                        {
                            "name": "Access-Control-Allow-Origin",
                            "value": "*"
                        },
                        {
                            "name": "Timing-Allow-Origin",
                            "value": "*"
                        },
                        {
                            "name": "Content-Encoding",
                            "value": "gzip"
                        },
                        {
                            "name": "X-GitHub-Request-Id",
                            "value": "B91F111A:2F45:1BEF738F:5674455D"
                        },
                        {
                            "name": "Content-Length",
                            "value": "129103"
                        },
                        {
                            "name": "Accept-Ranges",
                            "value": "bytes"
                        },
                        {
                            "name": "Date",
                            "value": "Sat, 26 Dec 2015 13:52:14 GMT"
                        },
                        {
                            "name": "Via",
                            "value": "1.1 varnish"
                        },
                        {
                            "name": "Age",
                            "value": "677424"
                        },
                        {
                            "name": "Connection",
                            "value": "keep-alive"
                        },
                        {
                            "name": "X-Served-By",
                            "value": "cache-fra1235-FRA"
                        },
                        {
                            "name": "X-Cache",
                            "value": "HIT"
                        },
                        {
                            "name": "X-Cache-Hits",
                            "value": "148254"
                        },
                        {
                            "name": "X-Timer",
                            "value": "S1451137934.018221,VS0,VE0"
                        },
                        {
                            "name": "Vary",
                            "value": "Accept-Encoding"
                        },
                        {
                            "name": "X-Fastly-Request-ID",
                            "value": "80b133d30c071a902d5ee71a592bd2a1a0f71b96"
                        }
                    ],
                    "httpVersion": "1.1",
                    "redirectURL": "",
                    "content": {
                        "size": 129103,
                        "mimeType": "application/javascript"
                    },
                    "cookies": []
                },
                "cache": {},
                "timings": {
                    "blocked": -1,
                    "dns": -1,
                    "connect": -1,
                    "ssl": -1,
                    "send": 0,
                    "wait": 95,
                    "receive": 830
                },
                "_method": "GET",
                "_host": "assets-cdn.github.com",
                "_url": "/assets/github-4b6b8e7d11ebb7bce85126d3b4130c80041f2ae6d5d6ef8901a8c0c3f7cb80d2.js",
                "_responseCode": "500",
                "_load_ms": "925",
                "_ttfb_ms": "95",
                "_load_start": "1114",
                "_bytesOut": "426",
                "_bytesIn": "129770",
                "_objectSize": "129103",
                "_expires": "Sat, 17 Dec 2016 17:41:49 GMT",
                "_cacheControl": "max-age=31536000, public",
                "_contentType": "application/javascript",
                "_contentEncoding": "gzip",
                "_type": "3",
                "_socket": "1000305",
                "_score_cache": "100",
                "_score_cdn": "100",
                "_score_gzip": "100",
                "_score_cookies": "-1",
                "_score_keep-alive": "100",
                "_score_minify": "-1",
                "_score_combine": "-1",
                "_score_compress": "-1",
                "_score_etags": "-1",
                "_is_secure": "1",
                "_dns_ms": "-1",
                "_connect_ms": "-1",
                "_ssl_ms": "-1",
                "_gzip_total": "667",
                "_gzip_save": "0",
                "_minify_total": "0",
                "_minify_save": "0",
                "_image_total": "0",
                "_image_save": "0",
                "_cache_time": "30858575",
                "_cdn_provider": "Fastly",
                "_dns_start": "0",
                "_dns_end": "0",
                "_connect_start": "0",
                "_connect_end": "0",
                "_ssl_start": "0",
                "_ssl_end": "0",
                "_initiator": "https://github.com/",
                "_initiator_line": "315",
                "_server_count": "1",
                "_client_port": "0",
                "_jpeg_scan_count": "0",
                "_full_url": "https://assets-cdn.github.com/assets/github-4b6b8e7d11ebb7bce85126d3b4130c80041f2ae6d5d6ef8901a8c0c3f7cb80d2.js",
                "_score_progressive_jpeg": -1,
                "_load_end": 2039,
                "_ttfb_start": "1114",
                "_ttfb_end": 1209,
                "_download_start": 1209,
                "_download_end": 2039,
                "_download_ms": 830,
                "_all_start": "1114",
                "_all_end": 2039,
                "_all_ms": "925",
                "_index": 5,
                "_number": 6
            },
            {
                "pageref": "page_1_0",
                "startedDateTime": "2015-12-26T13:52:13.421+00:00",
                "time": 2054,
                "request": {
                    "method": "GET",
                    "url": "https://assets-cdn.github.com/images/modules/home/desktop-mac.png?v=1",
                    "headersSize": 401,
                    "bodySize": -1,
                    "cookies": [
                        {
                            "name": "logged_in",
                            "value": "no"
                        }
                    ],
                    "headers": [
                        {
                            "name": "Host",
                            "value": "assets-cdn.github.com"
                        },
                        {
                            "name": "Connection",
                            "value": "keep-alive"
                        },
                        {
                            "name": "Accept",
                            "value": "image/webp,image/*,*/*;q=0.8"
                        },
                        {
                            "name": "User-Agent",
                            "value": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36 PTST/255"
                        },
                        {
                            "name": "Referer",
                            "value": "https://github.com/"
                        },
                        {
                            "name": "Accept-Encoding",
                            "value": "gzip, deflate, sdch"
                        },
                        {
                            "name": "Accept-Language",
                            "value": "en-US,en;q=0.8"
                        },
                        {
                            "name": "Cookie",
                            "value": "logged_in=no"
                        }
                    ],
                    "httpVersion": "1.1",
                    "queryString": [
                        {
                            "name": "v",
                            "value": "1"
                        }
                    ]
                },
                "response": {
                    "status": 200,
                    "statusText": "",
                    "headersSize": 557,
                    "bodySize": 516094,
                    "headers": [
                        {
                            "name": "Server",
                            "value": "GitHub.com"
                        },
                        {
                            "name": "Content-Type",
                            "value": "image/png"
                        },
                        {
                            "name": "Last-Modified",
                            "value": "Wed, 12 Aug 2015 15:12:59 GMT"
                        },
                        {
                            "name": "Expires",
                            "value": "Wed, 24 Aug 2016 04:08:13 GMT"
                        },
                        {
                            "name": "Cache-Control",
                            "value": "max-age=31536000, public"
                        },
                        {
                            "name": "Timing-Allow-Origin",
                            "value": "https://github.com"
                        },
                        {
                            "name": "Content-Length",
                            "value": "516094"
                        },
                        {
                            "name": "Accept-Ranges",
                            "value": "bytes"
                        },
                        {
                            "name": "Date",
                            "value": "Sat, 26 Dec 2015 13:52:14 GMT"
                        },
                        {
                            "name": "Via",
                            "value": "1.1 varnish"
                        },
                        {
                            "name": "Age",
                            "value": "10662240"
                        },
                        {
                            "name": "Connection",
                            "value": "keep-alive"
                        },
                        {
                            "name": "X-Served-By",
                            "value": "cache-fra1246-FRA"
                        },
                        {
                            "name": "X-Cache",
                            "value": "HIT"
                        },
                        {
                            "name": "X-Cache-Hits",
                            "value": "16"
                        },
                        {
                            "name": "X-Timer",
                            "value": "S1451137934.320228,VS0,VE0"
                        },
                        {
                            "name": "Vary",
                            "value": "Accept-Encoding"
                        },
                        {
                            "name": "X-Fastly-Request-ID",
                            "value": "b33cd43fbe80e95ea56237635131afee5a42e281"
                        }
                    ],
                    "httpVersion": "1.1",
                    "redirectURL": "",
                    "content": {
                        "size": 516094,
                        "mimeType": "image/png"
                    },
                    "cookies": []
                },
                "cache": {},
                "timings": {
                    "blocked": -1,
                    "dns": -1,
                    "connect": -1,
                    "ssl": -1,
                    "send": 0,
                    "wait": 66,
                    "receive": 1988
                },
                "_method": "GET",
                "_host": "assets-cdn.github.com",
                "_url": "/images/modules/home/desktop-mac.png?v=1",
                "_responseCode": "200",
                "_load_ms": "2054",
                "_ttfb_ms": "66",
                "_load_start": "1421",
                "_bytesOut": "403",
                "_bytesIn": "516653",
                "_objectSize": "516094",
                "_expires": "Wed, 24 Aug 2016 04:08:13 GMT",
                "_cacheControl": "max-age=31536000, public",
                "_contentType": "image/png",
                "_type": "3",
                "_socket": "1000306",
                "_score_cache": "100",
                "_score_cdn": "100",
                "_score_gzip": "-1",
                "_score_cookies": "-1",
                "_score_keep-alive": "100",
                "_score_minify": "-1",
                "_score_combine": "-1",
                "_score_compress": "-1",
                "_score_etags": "-1",
                "_is_secure": "1",
                "_dns_ms": "-1",
                "_connect_ms": "-1",
                "_ssl_ms": "-1",
                "_gzip_total": "0",
                "_gzip_save": "0",
                "_minify_total": "0",
                "_minify_save": "0",
                "_image_total": "0",
                "_image_save": "0",
                "_cache_time": "20873759",
                "_cdn_provider": "Fastly",
                "_dns_start": "0",
                "_dns_end": "0",
                "_connect_start": "0",
                "_connect_end": "0",
                "_ssl_start": "0",
                "_ssl_end": "0",
                "_initiator": "https://github.com/",
                "_initiator_line": "262",
                "_server_count": "1",
                "_client_port": "0",
                "_jpeg_scan_count": "0",
                "_full_url": "https://assets-cdn.github.com/images/modules/home/desktop-mac.png?v=1",
                "_score_progressive_jpeg": -1,
                "_load_end": 3475,
                "_ttfb_start": "1421",
                "_ttfb_end": 1487,
                "_download_start": 1487,
                "_download_end": 3475,
                "_download_ms": 1988,
                "_all_start": "1421",
                "_all_end": 3475,
                "_all_ms": "2054",
                "_index": 6,
                "_number": 7
            },
            {
                "pageref": "page_1_0",
                "startedDateTime": "2015-12-26T13:52:13.448+00:00",
                "time": 729,
                "request": {
                    "method": "GET",
                    "url": "https://assets-cdn.github.com/static/fonts/octicons/octicons.woff?v=6f0908ee5b07e503e10c6040adaebd65ea4f4c0e",
                    "headersSize": 514,
                    "bodySize": -1,
                    "cookies": [],
                    "headers": [
                        {
                            "name": "Host",
                            "value": "assets-cdn.github.com"
                        },
                        {
                            "name": "Connection",
                            "value": "keep-alive"
                        },
                        {
                            "name": "Origin",
                            "value": "https://github.com"
                        },
                        {
                            "name": "User-Agent",
                            "value": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36 PTST/255"
                        },
                        {
                            "name": "Accept",
                            "value": "*/*"
                        },
                        {
                            "name": "Referer",
                            "value": "https://assets-cdn.github.com/assets/github-46ac4202cb3c472c54a367e85742188d9f18080f1a0f770de0df1718b8b6e657.css"
                        },
                        {
                            "name": "Accept-Encoding",
                            "value": "gzip, deflate, sdch"
                        },
                        {
                            "name": "Accept-Language",
                            "value": "en-US,en;q=0.8"
                        }
                    ],
                    "httpVersion": "1.1",
                    "queryString": [
                        {
                            "name": "v",
                            "value": "6f0908ee5b07e503e10c6040adaebd65ea4f4c0e"
                        }
                    ]
                },
                "response": {
                    "status": 200,
                    "statusText": "",
                    "headersSize": 640,
                    "bodySize": 16740,
                    "headers": [
                        {
                            "name": "Server",
                            "value": "GitHub.com"
                        },
                        {
                            "name": "Content-Type",
                            "value": "application/x-font-woff"
                        },
                        {
                            "name": "Last-Modified",
                            "value": "Fri, 13 Nov 2015 00:09:59 GMT"
                        },
                        {
                            "name": "Expires",
                            "value": "Sat, 17 Dec 2016 06:46:42 GMT"
                        },
                        {
                            "name": "Cache-Control",
                            "value": "max-age=31536000, public"
                        },
                        {
                            "name": "Access-Control-Allow-Origin",
                            "value": "*"
                        },
                        {
                            "name": "Timing-Allow-Origin",
                            "value": "*"
                        },
                        {
                            "name": "X-GitHub-Request-Id",
                            "value": "B91F1130:6924:192A59F6:5673ABD2"
                        },
                        {
                            "name": "Content-Length",
                            "value": "16740"
                        },
                        {
                            "name": "Accept-Ranges",
                            "value": "bytes"
                        },
                        {
                            "name": "Date",
                            "value": "Sat, 26 Dec 2015 13:52:14 GMT"
                        },
                        {
                            "name": "Via",
                            "value": "1.1 varnish"
                        },
                        {
                            "name": "Age",
                            "value": "716732"
                        },
                        {
                            "name": "Connection",
                            "value": "keep-alive"
                        },
                        {
                            "name": "X-Served-By",
                            "value": "cache-fra1235-FRA"
                        },
                        {
                            "name": "X-Cache",
                            "value": "HIT"
                        },
                        {
                            "name": "X-Cache-Hits",
                            "value": "93906"
                        },
                        {
                            "name": "X-Timer",
                            "value": "S1451137934.341937,VS0,VE0"
                        },
                        {
                            "name": "Vary",
                            "value": "Accept-Encoding"
                        },
                        {
                            "name": "X-Fastly-Request-ID",
                            "value": "2a9d8c15f62585e7c2f4d98c43229f5c3f60df6e"
                        }
                    ],
                    "httpVersion": "1.1",
                    "redirectURL": "",
                    "content": {
                        "size": 16740,
                        "mimeType": "application/x-font-woff"
                    },
                    "cookies": []
                },
                "cache": {},
                "timings": {
                    "blocked": -1,
                    "dns": -1,
                    "connect": -1,
                    "ssl": -1,
                    "send": 0,
                    "wait": 96,
                    "receive": 633
                },
                "_method": "GET",
                "_host": "assets-cdn.github.com",
                "_url": "/static/fonts/octicons/octicons.woff?v=6f0908ee5b07e503e10c6040adaebd65ea4f4c0e",
                "_responseCode": "200",
                "_load_ms": "729",
                "_ttfb_ms": "96",
                "_load_start": "1448",
                "_bytesOut": "516",
                "_bytesIn": "17382",
                "_objectSize": "16740",
                "_expires": "Sat, 17 Dec 2016 06:46:42 GMT",
                "_cacheControl": "max-age=31536000, public",
                "_contentType": "application/x-font-woff",
                "_type": "3",
                "_socket": "1000305",
                "_score_cache": "100",
                "_score_cdn": "-1",
                "_score_gzip": "-1",
                "_score_cookies": "-1",
                "_score_keep-alive": "100",
                "_score_minify": "-1",
                "_score_combine": "-1",
                "_score_compress": "-1",
                "_score_etags": "-1",
                "_is_secure": "1",
                "_dns_ms": "-1",
                "_connect_ms": "-1",
                "_ssl_ms": "-1",
                "_gzip_total": "0",
                "_gzip_save": "0",
                "_minify_total": "0",
                "_minify_save": "0",
                "_image_total": "0",
                "_image_save": "0",
                "_cache_time": "30819268",
                "_cdn_provider": "Fastly",
                "_dns_start": "0",
                "_dns_end": "0",
                "_connect_start": "0",
                "_connect_end": "0",
                "_ssl_start": "0",
                "_ssl_end": "0",
                "_initiator": "https://assets-cdn.github.com/assets/frameworks-ef8eb4a89ee9f3c8b7613307fe589a8f5705817f7cee27bec51ce5e963234abf.js",
                "_initiator_line": "1",
                "_initiator_column": "833",
                "_server_count": "1",
                "_client_port": "0",
                "_jpeg_scan_count": "0",
                "_full_url": "https://assets-cdn.github.com/static/fonts/octicons/octicons.woff?v=6f0908ee5b07e503e10c6040adaebd65ea4f4c0e",
                "_score_progressive_jpeg": -1,
                "_load_end": 2177,
                "_ttfb_start": "1448",
                "_ttfb_end": 1544,
                "_download_start": 1544,
                "_download_end": 2177,
                "_download_ms": 633,
                "_all_start": "1448",
                "_all_end": 2177,
                "_all_ms": "729",
                "_index": 7,
                "_number": 8
            },
            {
                "pageref": "page_1_0",
                "startedDateTime": "2015-12-26T13:52:13.543+00:00",
                "time": 2043,
                "request": {
                    "method": "GET",
                    "url": "https://assets-cdn.github.com/images/modules/home/desktop-windows.png?v=1",
                    "headersSize": 405,
                    "bodySize": -1,
                    "cookies": [
                        {
                            "name": "logged_in",
                            "value": "no"
                        }
                    ],
                    "headers": [
                        {
                            "name": "Host",
                            "value": "assets-cdn.github.com"
                        },
                        {
                            "name": "Connection",
                            "value": "keep-alive"
                        },
                        {
                            "name": "Accept",
                            "value": "image/webp,image/*,*/*;q=0.8"
                        },
                        {
                            "name": "User-Agent",
                            "value": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36 PTST/255"
                        },
                        {
                            "name": "Referer",
                            "value": "https://github.com/"
                        },
                        {
                            "name": "Accept-Encoding",
                            "value": "gzip, deflate, sdch"
                        },
                        {
                            "name": "Accept-Language",
                            "value": "en-US,en;q=0.8"
                        },
                        {
                            "name": "Cookie",
                            "value": "logged_in=no"
                        }
                    ],
                    "httpVersion": "1.1",
                    "queryString": [
                        {
                            "name": "v",
                            "value": "1"
                        }
                    ]
                },
                "response": {
                    "status": 200,
                    "statusText": "",
                    "headersSize": 610,
                    "bodySize": 667518,
                    "headers": [
                        {
                            "name": "Server",
                            "value": "GitHub.com"
                        },
                        {
                            "name": "Content-Type",
                            "value": "image/png"
                        },
                        {
                            "name": "Last-Modified",
                            "value": "Tue, 01 Sep 2015 20:29:05 GMT"
                        },
                        {
                            "name": "Expires",
                            "value": "Tue, 13 Dec 2016 20:52:22 GMT"
                        },
                        {
                            "name": "Cache-Control",
                            "value": "max-age=31536000, public"
                        },
                        {
                            "name": "Timing-Allow-Origin",
                            "value": "https://github.com"
                        },
                        {
                            "name": "X-GitHub-Request-Id",
                            "value": "B91F111A:448C:1158C3A3:566F2C03"
                        },
                        {
                            "name": "Content-Length",
                            "value": "667518"
                        },
                        {
                            "name": "Accept-Ranges",
                            "value": "bytes"
                        },
                        {
                            "name": "Date",
                            "value": "Sat, 26 Dec 2015 13:52:14 GMT"
                        },
                        {
                            "name": "Via",
                            "value": "1.1 varnish"
                        },
                        {
                            "name": "Age",
                            "value": "1011593"
                        },
                        {
                            "name": "Connection",
                            "value": "keep-alive"
                        },
                        {
                            "name": "X-Served-By",
                            "value": "cache-fra1234-FRA"
                        },
                        {
                            "name": "X-Cache",
                            "value": "HIT"
                        },
                        {
                            "name": "X-Cache-Hits",
                            "value": "55"
                        },
                        {
                            "name": "X-Timer",
                            "value": "S1451137934.437116,VS0,VE0"
                        },
                        {
                            "name": "Vary",
                            "value": "Accept-Encoding"
                        },
                        {
                            "name": "X-Fastly-Request-ID",
                            "value": "94932667e659978d0d3110b77164eae6d7b893d8"
                        }
                    ],
                    "httpVersion": "1.1",
                    "redirectURL": "",
                    "content": {
                        "size": 667518,
                        "mimeType": "image/png"
                    },
                    "cookies": []
                },
                "cache": {},
                "timings": {
                    "blocked": -1,
                    "dns": -1,
                    "connect": 116,
                    "ssl": 82,
                    "send": 0,
                    "wait": 129,
                    "receive": 1798
                },
                "_method": "GET",
                "_host": "assets-cdn.github.com",
                "_url": "/images/modules/home/desktop-windows.png?v=1",
                "_responseCode": "200",
                "_load_ms": "1927",
                "_ttfb_ms": "129",
                "_load_start": "1543",
                "_bytesOut": "407",
                "_bytesIn": "668130",
                "_objectSize": "667518",
                "_expires": "Tue, 13 Dec 2016 20:52:22 GMT",
                "_cacheControl": "max-age=31536000, public",
                "_contentType": "image/png",
                "_type": "3",
                "_socket": "1000346",
                "_score_cache": "100",
                "_score_cdn": "100",
                "_score_gzip": "-1",
                "_score_cookies": "-1",
                "_score_keep-alive": "100",
                "_score_minify": "-1",
                "_score_combine": "-1",
                "_score_compress": "-1",
                "_score_etags": "-1",
                "_is_secure": "1",
                "_dns_ms": "-1",
                "_connect_ms": 34,
                "_ssl_ms": 82,
                "_gzip_total": "0",
                "_gzip_save": "0",
                "_minify_total": "0",
                "_minify_save": "0",
                "_image_total": "0",
                "_image_save": "0",
                "_cache_time": "30524408",
                "_cdn_provider": "Fastly",
                "_dns_start": "0",
                "_dns_end": "0",
                "_connect_start": "1427",
                "_connect_end": "1461",
                "_ssl_start": "1461",
                "_ssl_end": "1543",
                "_initiator": "https://github.com/",
                "_initiator_line": "263",
                "_server_count": "1",
                "_client_port": "0",
                "_jpeg_scan_count": "0",
                "_full_url": "https://assets-cdn.github.com/images/modules/home/desktop-windows.png?v=1",
                "_score_progressive_jpeg": -1,
                "_load_end": 3470,
                "_ttfb_start": "1543",
                "_ttfb_end": 1672,
                "_download_start": 1672,
                "_download_end": 3470,
                "_download_ms": 1798,
                "_all_start": "1427",
                "_all_end": 3470,
                "_all_ms": 2043,
                "_index": 8,
                "_number": 9
            },
            {
                "pageref": "page_1_0",
                "startedDateTime": "2015-12-26T13:52:13.658+00:00",
                "time": 771,
                "request": {
                    "method": "GET",
                    "url": "https://assets-cdn.github.com/images/modules/home/octicons-bg.png",
                    "headersSize": 490,
                    "bodySize": -1,
                    "cookies": [
                        {
                            "name": "logged_in",
                            "value": "no"
                        }
                    ],
                    "headers": [
                        {
                            "name": "Host",
                            "value": "assets-cdn.github.com"
                        },
                        {
                            "name": "Connection",
                            "value": "keep-alive"
                        },
                        {
                            "name": "Accept",
                            "value": "image/webp,image/*,*/*;q=0.8"
                        },
                        {
                            "name": "User-Agent",
                            "value": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36 PTST/255"
                        },
                        {
                            "name": "Referer",
                            "value": "https://assets-cdn.github.com/assets/github-46ac4202cb3c472c54a367e85742188d9f18080f1a0f770de0df1718b8b6e657.css"
                        },
                        {
                            "name": "Accept-Encoding",
                            "value": "gzip, deflate, sdch"
                        },
                        {
                            "name": "Accept-Language",
                            "value": "en-US,en;q=0.8"
                        },
                        {
                            "name": "Cookie",
                            "value": "logged_in=no"
                        }
                    ],
                    "httpVersion": "1.1",
                    "queryString": []
                },
                "response": {
                    "status": 200,
                    "statusText": "",
                    "headersSize": 558,
                    "bodySize": 7292,
                    "headers": [
                        {
                            "name": "Server",
                            "value": "GitHub.com"
                        },
                        {
                            "name": "Content-Type",
                            "value": "image/png"
                        },
                        {
                            "name": "Last-Modified",
                            "value": "Mon, 16 Mar 2015 03:03:13 GMT"
                        },
                        {
                            "name": "Expires",
                            "value": "Wed, 17 Aug 2016 21:53:17 GMT"
                        },
                        {
                            "name": "Cache-Control",
                            "value": "max-age=31536000, public"
                        },
                        {
                            "name": "Timing-Allow-Origin",
                            "value": "https://github.com"
                        },
                        {
                            "name": "Content-Length",
                            "value": "7292"
                        },
                        {
                            "name": "Accept-Ranges",
                            "value": "bytes"
                        },
                        {
                            "name": "Date",
                            "value": "Sat, 26 Dec 2015 13:52:14 GMT"
                        },
                        {
                            "name": "Via",
                            "value": "1.1 varnish"
                        },
                        {
                            "name": "Age",
                            "value": "11203137"
                        },
                        {
                            "name": "Connection",
                            "value": "keep-alive"
                        },
                        {
                            "name": "X-Served-By",
                            "value": "cache-fra1221-FRA"
                        },
                        {
                            "name": "X-Cache",
                            "value": "HIT"
                        },
                        {
                            "name": "X-Cache-Hits",
                            "value": "15016"
                        },
                        {
                            "name": "X-Timer",
                            "value": "S1451137934.553642,VS0,VE0"
                        },
                        {
                            "name": "Vary",
                            "value": "Accept-Encoding"
                        },
                        {
                            "name": "X-Fastly-Request-ID",
                            "value": "aaf3e7eaa34fd1731dd921a02e8be35194f99402"
                        }
                    ],
                    "httpVersion": "1.1",
                    "redirectURL": "",
                    "content": {
                        "size": 7292,
                        "mimeType": "image/png"
                    },
                    "cookies": []
                },
                "cache": {},
                "timings": {
                    "blocked": -1,
                    "dns": -1,
                    "connect": 172,
                    "ssl": 83,
                    "send": 0,
                    "wait": 122,
                    "receive": 477
                },
                "_method": "GET",
                "_host": "assets-cdn.github.com",
                "_url": "/images/modules/home/octicons-bg.png",
                "_responseCode": "200",
                "_load_ms": "599",
                "_ttfb_ms": "122",
                "_load_start": "1658",
                "_bytesOut": "492",
                "_bytesIn": "7852",
                "_objectSize": "7292",
                "_expires": "Wed, 17 Aug 2016 21:53:17 GMT",
                "_cacheControl": "max-age=31536000, public",
                "_contentType": "image/png",
                "_type": "3",
                "_socket": "1000366",
                "_score_cache": "100",
                "_score_cdn": "100",
                "_score_gzip": "-1",
                "_score_cookies": "-1",
                "_score_keep-alive": "100",
                "_score_minify": "-1",
                "_score_combine": "-1",
                "_score_compress": "-1",
                "_score_etags": "-1",
                "_is_secure": "1",
                "_dns_ms": "-1",
                "_connect_ms": 89,
                "_ssl_ms": 83,
                "_gzip_total": "0",
                "_gzip_save": "0",
                "_minify_total": "0",
                "_minify_save": "0",
                "_image_total": "0",
                "_image_save": "0",
                "_cache_time": "20332863",
                "_cdn_provider": "Fastly",
                "_dns_start": "0",
                "_dns_end": "0",
                "_connect_start": "1485",
                "_connect_end": "1574",
                "_ssl_start": "1574",
                "_ssl_end": "1657",
                "_initiator": "https://assets-cdn.github.com/assets/frameworks-ef8eb4a89ee9f3c8b7613307fe589a8f5705817f7cee27bec51ce5e963234abf.js",
                "_initiator_line": "1",
                "_initiator_column": "833",
                "_server_count": "1",
                "_client_port": "0",
                "_jpeg_scan_count": "0",
                "_full_url": "https://assets-cdn.github.com/images/modules/home/octicons-bg.png",
                "_score_progressive_jpeg": -1,
                "_load_end": 2257,
                "_ttfb_start": "1658",
                "_ttfb_end": 1780,
                "_download_start": 1780,
                "_download_end": 2257,
                "_download_ms": 477,
                "_all_start": "1485",
                "_all_end": 2257,
                "_all_ms": 771,
                "_index": 9,
                "_number": 10
            },
            {
                "pageref": "page_1_0",
                "startedDateTime": "2015-12-26T13:52:15.284+00:00",
                "time": 664,
                "request": {
                    "method": "GET",
                    "url": "https://www.google-analytics.com/r/collect?v=1&_v=j30&a=887757544&t=pageview&_s=1&dl=https%3A%2F%2Fgithub.com%2F&ul=en-us&de=UTF-8&dt=GitHub%20%C2%B7%20Where%20software%20is%20built&sd=24-bit&sr=1280x1024&vp=998x634&je=0&fl=20.0%20r0&_u=eEAAAAQBM~&jid=1081465847&cid=407202660.1451137935&tid=UA-3769691-2&_r=1&cd1=Logged%20Out&z=185416030",
                    "headersSize": 1007,
                    "bodySize": -1,
                    "cookies": [],
                    "headers": [
                        {
                            "name": "Host",
                            "value": "www.google-analytics.com"
                        },
                        {
                            "name": "accept",
                            "value": "image/webp,image/*,*/*;q=0.8"
                        },
                        {
                            "name": "accept-encoding",
                            "value": "gzip, deflate, sdch"
                        },
                        {
                            "name": "accept-language",
                            "value": "en-US,en;q=0.8"
                        },
                        {
                            "name": "referer",
                            "value": "https://github.com/"
                        },
                        {
                            "name": "user-agent",
                            "value": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36 PTST/255"
                        }
                    ],
                    "httpVersion": "me:",
                    "queryString": [
                        {
                            "name": "v",
                            "value": "1"
                        },
                        {
                            "name": "_v",
                            "value": "j30"
                        },
                        {
                            "name": "a",
                            "value": "887757544"
                        },
                        {
                            "name": "t",
                            "value": "pageview"
                        },
                        {
                            "name": "_s",
                            "value": "1"
                        },
                        {
                            "name": "dl",
                            "value": "https://github.com/"
                        },
                        {
                            "name": "ul",
                            "value": "en-us"
                        },
                        {
                            "name": "de",
                            "value": "UTF-8"
                        },
                        {
                            "name": "dt",
                            "value": "GitHub · Where software is built"
                        },
                        {
                            "name": "sd",
                            "value": "24-bit"
                        },
                        {
                            "name": "sr",
                            "value": "1280x1024"
                        },
                        {
                            "name": "vp",
                            "value": "998x634"
                        },
                        {
                            "name": "je",
                            "value": "0"
                        },
                        {
                            "name": "fl",
                            "value": "20.0 r0"
                        },
                        {
                            "name": "_u",
                            "value": "eEAAAAQBM~"
                        },
                        {
                            "name": "jid",
                            "value": "1081465847"
                        },
                        {
                            "name": "cid",
                            "value": "407202660.1451137935"
                        },
                        {
                            "name": "tid",
                            "value": "UA-3769691-2"
                        },
                        {
                            "name": "_r",
                            "value": "1"
                        },
                        {
                            "name": "cd1",
                            "value": "Logged Out"
                        },
                        {
                            "name": "z",
                            "value": "185416030"
                        }
                    ]
                },
                "response": {
                    "status": 200,
                    "statusText": "",
                    "headersSize": 421,
                    "bodySize": 35,
                    "headers": [
                        {
                            "name": "access-control-allow-origin",
                            "value": "*"
                        },
                        {
                            "name": "alt-svc",
                            "value": "quic=\":443\"; ma=604800; v=\"30,29,28,27,26,25\""
                        },
                        {
                            "name": "alternate-protocol",
                            "value": "443:quic,p=1"
                        },
                        {
                            "name": "cache-control",
                            "value": "no-cache, no-store, must-revalidate"
                        },
                        {
                            "name": "content-length",
                            "value": "35"
                        },
                        {
                            "name": "content-type",
                            "value": "image/gif"
                        },
                        {
                            "name": "date",
                            "value": "Sat, 26 Dec 2015 13:52:16 GMT"
                        },
                        {
                            "name": "expires",
                            "value": "Fri, 01 Jan 1990 00:00:00 GMT"
                        },
                        {
                            "name": "last-modified",
                            "value": "Sun, 17 May 1998 03:00:00 GMT"
                        },
                        {
                            "name": "pragma",
                            "value": "no-cache"
                        },
                        {
                            "name": "server",
                            "value": "Golfe2"
                        },
                        {
                            "name": "x-content-type-options",
                            "value": "nosniff"
                        }
                    ],
                    "httpVersion": "2 2",
                    "redirectURL": "",
                    "content": {
                        "size": 35,
                        "mimeType": "image/gif"
                    },
                    "cookies": []
                },
                "cache": {},
                "timings": {
                    "blocked": -1,
                    "dns": 183,
                    "connect": 339,
                    "ssl": 204,
                    "send": 0,
                    "wait": 141,
                    "receive": 1
                },
                "_method": "GET",
                "_host": "www.google-analytics.com",
                "_url": "/r/collect?v=1&_v=j30&a=887757544&t=pageview&_s=1&dl=https%3A%2F%2Fgithub.com%2F&ul=en-us&de=UTF-8&dt=GitHub%20%C2%B7%20Where%20software%20is%20built&sd=24-bit&sr=1280x1024&vp=998x634&je=0&fl=20.0%20r0&_u=eEAAAAQBM~&jid=1081465847&cid=407202660.1451137935&tid=UA-3769691-2&_r=1&cd1=Logged%20Out&z=185416030",
                "_responseCode": "200",
                "_load_ms": "142",
                "_ttfb_ms": "141",
                "_load_start": "3284",
                "_bytesOut": "1009",
                "_bytesIn": "285",
                "_objectSize": "35",
                "_expires": "Fri, 01 Jan 1990 00:00:00 GMT",
                "_cacheControl": "no-cache, no-store, must-revalidate",
                "_contentType": "image/gif",
                "_type": "3",
                "_socket": "1000417",
                "_score_cache": "-1",
                "_score_cdn": "-1",
                "_score_gzip": "-1",
                "_score_cookies": "-1",
                "_score_keep-alive": "100",
                "_score_minify": "-1",
                "_score_combine": "-1",
                "_score_compress": "-1",
                "_score_etags": "-1",
                "_is_secure": "1",
                "_dns_ms": 183,
                "_connect_ms": 135,
                "_ssl_ms": 204,
                "_gzip_total": "0",
                "_gzip_save": "0",
                "_minify_total": "0",
                "_minify_save": "0",
                "_image_total": "0",
                "_image_save": "0",
                "_cache_time": "-1",
                "_cdn_provider": "Google",
                "_dns_start": "2761",
                "_dns_end": "2944",
                "_connect_start": "2944",
                "_connect_end": "3079",
                "_ssl_start": "3079",
                "_ssl_end": "3283",
                "_server_count": "6",
                "_client_port": "0",
                "_jpeg_scan_count": "0",
                "_full_url": "https://www.google-analytics.com/r/collect?v=1&_v=j30&a=887757544&t=pageview&_s=1&dl=https%3A%2F%2Fgithub.com%2F&ul=en-us&de=UTF-8&dt=GitHub%20%C2%B7%20Where%20software%20is%20built&sd=24-bit&sr=1280x1024&vp=998x634&je=0&fl=20.0%20r0&_u=eEAAAAQBM~&jid=1081465847&cid=407202660.1451137935&tid=UA-3769691-2&_r=1&cd1=Logged%20Out&z=185416030",
                "_score_progressive_jpeg": -1,
                "_load_end": 3426,
                "_ttfb_start": "3284",
                "_ttfb_end": 3425,
                "_download_start": 3425,
                "_download_end": 3426,
                "_download_ms": 1,
                "_all_start": "2761",
                "_all_end": 3426,
                "_all_ms": 664,
                "_index": 10,
                "_number": 11
            },
            {
                "pageref": "page_1_0",
                "startedDateTime": "2015-12-26T13:52:15.284+00:00",
                "time": 147,
                "request": {
                    "method": "POST",
                    "url": "https://www.google-analytics.com/collect",
                    "headersSize": 497,
                    "bodySize": -1,
                    "cookies": [],
                    "headers": [
                        {
                            "name": "Host",
                            "value": "www.google-analytics.com"
                        },
                        {
                            "name": "accept",
                            "value": "*/*"
                        },
                        {
                            "name": "accept-encoding",
                            "value": "gzip, deflate"
                        },
                        {
                            "name": "accept-language",
                            "value": "en-US,en;q=0.8"
                        },
                        {
                            "name": "cache-control",
                            "value": "max-age=0"
                        },
                        {
                            "name": "content-length",
                            "value": "321"
                        },
                        {
                            "name": "content-type",
                            "value": "text/plain;charset=UTF-8"
                        },
                        {
                            "name": "origin",
                            "value": "https://github.com"
                        },
                        {
                            "name": "referer",
                            "value": "https://github.com/"
                        },
                        {
                            "name": "user-agent",
                            "value": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36 PTST/255"
                        }
                    ],
                    "httpVersion": "me:",
                    "queryString": [],
                    "postData": {
                        "mimeType": "",
                        "text": ""
                    }
                },
                "response": {
                    "status": 200,
                    "statusText": "",
                    "headersSize": 478,
                    "bodySize": 35,
                    "headers": [
                        {
                            "name": "access-control-allow-credentials",
                            "value": "true"
                        },
                        {
                            "name": "access-control-allow-origin",
                            "value": "https://github.com"
                        },
                        {
                            "name": "alt-svc",
                            "value": "quic=\":443\"; ma=604800; v=\"30,29,28,27,26,25\""
                        },
                        {
                            "name": "alternate-protocol",
                            "value": "443:quic,p=1"
                        },
                        {
                            "name": "cache-control",
                            "value": "no-cache, no-store, must-revalidate"
                        },
                        {
                            "name": "content-length",
                            "value": "35"
                        },
                        {
                            "name": "content-type",
                            "value": "image/gif"
                        },
                        {
                            "name": "date",
                            "value": "Sat, 26 Dec 2015 13:52:16 GMT"
                        },
                        {
                            "name": "expires",
                            "value": "Fri, 01 Jan 1990 00:00:00 GMT"
                        },
                        {
                            "name": "last-modified",
                            "value": "Sun, 17 May 1998 03:00:00 GMT"
                        },
                        {
                            "name": "pragma",
                            "value": "no-cache"
                        },
                        {
                            "name": "server",
                            "value": "Golfe2"
                        },
                        {
                            "name": "x-content-type-options",
                            "value": "nosniff"
                        }
                    ],
                    "httpVersion": "2 2",
                    "redirectURL": "",
                    "content": {
                        "size": 35,
                        "mimeType": "image/gif"
                    },
                    "cookies": []
                },
                "cache": {},
                "timings": {
                    "blocked": -1,
                    "dns": -1,
                    "connect": -1,
                    "ssl": -1,
                    "send": 0,
                    "wait": 146,
                    "receive": 1
                },
                "_method": "POST",
                "_host": "www.google-analytics.com",
                "_url": "/collect",
                "_responseCode": "200",
                "_load_ms": "147",
                "_ttfb_ms": "146",
                "_load_start": "3284",
                "_bytesOut": "499",
                "_bytesIn": "514",
                "_objectSize": "35",
                "_expires": "Fri, 01 Jan 1990 00:00:00 GMT",
                "_cacheControl": "no-cache, no-store, must-revalidate",
                "_contentType": "image/gif",
                "_type": "3",
                "_socket": "1000417",
                "_score_cache": "-1",
                "_score_cdn": "-1",
                "_score_gzip": "-1",
                "_score_cookies": "-1",
                "_score_keep-alive": "100",
                "_score_minify": "-1",
                "_score_combine": "-1",
                "_score_compress": "-1",
                "_score_etags": "-1",
                "_is_secure": "1",
                "_dns_ms": "-1",
                "_connect_ms": "-1",
                "_ssl_ms": "-1",
                "_gzip_total": "0",
                "_gzip_save": "0",
                "_minify_total": "0",
                "_minify_save": "0",
                "_image_total": "0",
                "_image_save": "0",
                "_cache_time": "-1",
                "_cdn_provider": "Google",
                "_dns_start": "0",
                "_dns_end": "0",
                "_connect_start": "0",
                "_connect_end": "0",
                "_ssl_start": "0",
                "_ssl_end": "0",
                "_initiator": "https://assets-cdn.github.com/assets/github-4b6b8e7d11ebb7bce85126d3b4130c80041f2ae6d5d6ef8901a8c0c3f7cb80d2.js",
                "_initiator_line": "4",
                "_initiator_column": "614",
                "_server_count": "6",
                "_client_port": "0",
                "_jpeg_scan_count": "0",
                "_full_url": "https://www.google-analytics.com/collect",
                "_score_progressive_jpeg": -1,
                "_load_end": 3431,
                "_ttfb_start": "3284",
                "_ttfb_end": 3430,
                "_download_start": 3430,
                "_download_end": 3431,
                "_download_ms": 1,
                "_all_start": "3284",
                "_all_end": 3431,
                "_all_ms": "147",
                "_index": 11,
                "_number": 12
            },
            {
                "pageref": "page_1_0",
                "startedDateTime": "2015-12-26T13:52:15.526+00:00",
                "time": 905,
                "request": {
                    "method": "GET",
                    "url": "https://collector.githubapp.com/github/page_view?dimensions[page]=https%3A%2F%2Fgithub.com%2F&dimensions[title]=GitHub%20%C2%B7%20Where%20software%20is%20built&dimensions[referrer]=&dimensions[user_agent]=Mozilla%2F5.0%20(Windows%20NT%206.1%3B%20WOW64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F47.0.2526.106%20Safari%2F537.36%20PTST%2F255&dimensions[screen_resolution]=1280x1024&dimensions[pixel_ratio]=1&dimensions[browser_resolution]=1014x650&dimensions[tz_seconds]=0&dimensions[timestamp]=1451137935352&dimensions[request_id]=341C539A%3A448A%3A29E92431%3A567E9B8D&&measures[performance_timing]=1-755-483--2195-2191-2191-910-483-483-0---0---755-905-893-625--&&&dimensions[cid]=118622446.1451137935",
                    "headersSize": 1030,
                    "bodySize": -1,
                    "cookies": [],
                    "headers": [
                        {
                            "name": "Host",
                            "value": "collector.githubapp.com"
                        },
                        {
                            "name": "Connection",
                            "value": "keep-alive"
                        },
                        {
                            "name": "Accept",
                            "value": "image/webp,image/*,*/*;q=0.8"
                        },
                        {
                            "name": "User-Agent",
                            "value": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36 PTST/255"
                        },
                        {
                            "name": "Referer",
                            "value": "https://github.com/"
                        },
                        {
                            "name": "Accept-Encoding",
                            "value": "gzip, deflate, sdch"
                        },
                        {
                            "name": "Accept-Language",
                            "value": "en-US,en;q=0.8"
                        }
                    ],
                    "httpVersion": "1.1",
                    "queryString": []
                },
                "response": {
                    "status": 200,
                    "statusText": "",
                    "headersSize": 508,
                    "bodySize": 35,
                    "headers": [
                        {
                            "name": "Cache-Control",
                            "value": "no-store, no-cache, must-revalidate, private"
                        },
                        {
                            "name": "Content-Type",
                            "value": "image/gif; charset=utf-8"
                        },
                        {
                            "name": "Date",
                            "value": "Sat, 26 Dec 2015 13:52:16 GMT"
                        },
                        {
                            "name": "Expires",
                            "value": "Sat, 25 Nov 2000 05:00:00 GMT"
                        },
                        {
                            "name": "Last-Modified",
                            "value": "Sat, 26 Dec 2015 13:52:16 GMT"
                        },
                        {
                            "name": "Pragma",
                            "value": "no-cache"
                        },
                        {
                            "name": "Server",
                            "value": "GitHub.com"
                        },
                        {
                            "name": "Status",
                            "value": "200 OK"
                        },
                        {
                            "name": "Strict-Transport-Security",
                            "value": "max-age=31536000"
                        },
                        {
                            "name": "X-Rack-Cache",
                            "value": "miss"
                        },
                        {
                            "name": "X-Request-Id",
                            "value": "5e810ed6cce58c4240f54a12aced381f"
                        },
                        {
                            "name": "X-Runtime",
                            "value": "0.004153"
                        },
                        {
                            "name": "X-UA-Compatible",
                            "value": "IE=Edge,chrome=1"
                        },
                        {
                            "name": "Content-Length",
                            "value": "35"
                        },
                        {
                            "name": "Connection",
                            "value": "keep-alive"
                        }
                    ],
                    "httpVersion": "1.1",
                    "redirectURL": "",
                    "content": {
                        "size": 35,
                        "mimeType": "image/gif"
                    },
                    "cookies": []
                },
                "cache": {},
                "timings": {
                    "blocked": -1,
                    "dns": 198,
                    "connect": 573,
                    "ssl": 352,
                    "send": 0,
                    "wait": 132,
                    "receive": 2
                },
                "_method": "GET",
                "_host": "collector.githubapp.com",
                "_url": "/github/page_view?dimensions[page]=https%3A%2F%2Fgithub.com%2F&dimensions[title]=GitHub%20%C2%B7%20Where%20software%20is%20built&dimensions[referrer]=&dimensions[user_agent]=Mozilla%2F5.0%20(Windows%20NT%206.1%3B%20WOW64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F47.0.2526.106%20Safari%2F537.36%20PTST%2F255&dimensions[screen_resolution]=1280x1024&dimensions[pixel_ratio]=1&dimensions[browser_resolution]=1014x650&dimensions[tz_seconds]=0&dimensions[timestamp]=1451137935352&dimensions[request_id]=341C539A%3A448A%3A29E92431%3A567E9B8D&&measures[performance_timing]=1-755-483--2195-2191-2191-910-483-483-0---0---755-905-893-625--&&&dimensions[cid]=118622446.1451137935",
                "_responseCode": "200",
                "_load_ms": "134",
                "_ttfb_ms": "132",
                "_load_start": "3526",
                "_bytesOut": "1032",
                "_bytesIn": "545",
                "_objectSize": "35",
                "_expires": "Sat, 25 Nov 2000 05:00:00 GMT",
                "_cacheControl": "no-store, no-cache, must-revalidate, private",
                "_contentType": "image/gif",
                "_type": "3",
                "_socket": "1000419",
                "_score_cache": "-1",
                "_score_cdn": "-1",
                "_score_gzip": "-1",
                "_score_cookies": "-1",
                "_score_keep-alive": "100",
                "_score_minify": "-1",
                "_score_combine": "-1",
                "_score_compress": "-1",
                "_score_etags": "-1",
                "_is_secure": "1",
                "_dns_ms": 198,
                "_connect_ms": 221,
                "_ssl_ms": 352,
                "_gzip_total": "0",
                "_gzip_save": "0",
                "_minify_total": "0",
                "_minify_save": "0",
                "_image_total": "0",
                "_image_save": "0",
                "_cache_time": "-1",
                "_dns_start": "2755",
                "_dns_end": "2953",
                "_connect_start": "2953",
                "_connect_end": "3174",
                "_ssl_start": "3174",
                "_ssl_end": "3526",
                "_server_count": "3",
                "_client_port": "0",
                "_jpeg_scan_count": "0",
                "_full_url": "https://collector.githubapp.com/github/page_view?dimensions[page]=https%3A%2F%2Fgithub.com%2F&dimensions[title]=GitHub%20%C2%B7%20Where%20software%20is%20built&dimensions[referrer]=&dimensions[user_agent]=Mozilla%2F5.0%20(Windows%20NT%206.1%3B%20WOW64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F47.0.2526.106%20Safari%2F537.36%20PTST%2F255&dimensions[screen_resolution]=1280x1024&dimensions[pixel_ratio]=1&dimensions[browser_resolution]=1014x650&dimensions[tz_seconds]=0&dimensions[timestamp]=1451137935352&dimensions[request_id]=341C539A%3A448A%3A29E92431%3A567E9B8D&&measures[performance_timing]=1-755-483--2195-2191-2191-910-483-483-0---0---755-905-893-625--&&&dimensions[cid]=118622446.1451137935",
                "_score_progressive_jpeg": -1,
                "_load_end": 3660,
                "_ttfb_start": "3526",
                "_ttfb_end": 3658,
                "_download_start": 3658,
                "_download_end": 3660,
                "_download_ms": 2,
                "_all_start": "2755",
                "_all_end": 3660,
                "_all_ms": 905,
                "_index": 12,
                "_number": 13
            },
            {
                "pageref": "page_1_0",
                "startedDateTime": "2015-12-26T13:52:15.718+00:00",
                "time": 48,
                "request": {
                    "method": "GET",
                    "url": "https://assets-cdn.github.com/favicon.ico",
                    "headersSize": 422,
                    "bodySize": -1,
                    "cookies": [
                        {
                            "name": "logged_in",
                            "value": "no"
                        },
                        {
                            "name": "_octo",
                            "value": "GH1.1.118622446.1451137935"
                        },
                        {
                            "name": "_ga",
                            "value": "GA1.2.407202660.1451137935"
                        },
                        {
                            "name": "_gat",
                            "value": "1"
                        }
                    ],
                    "headers": [
                        {
                            "name": "Host",
                            "value": "assets-cdn.github.com"
                        },
                        {
                            "name": "Connection",
                            "value": "keep-alive"
                        },
                        {
                            "name": "User-Agent",
                            "value": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36 PTST/255"
                        },
                        {
                            "name": "Accept",
                            "value": "*/*"
                        },
                        {
                            "name": "Referer",
                            "value": "https://github.com/"
                        },
                        {
                            "name": "Accept-Encoding",
                            "value": "gzip, deflate, sdch"
                        },
                        {
                            "name": "Accept-Language",
                            "value": "en-US,en;q=0.8"
                        },
                        {
                            "name": "Cookie",
                            "value": "logged_in=no; _octo=GH1.1.118622446.1451137935; _ga=GA1.2.407202660.1451137935; _gat=1"
                        }
                    ],
                    "httpVersion": "1.1",
                    "queryString": []
                },
                "response": {
                    "status": 200,
                    "statusText": "",
                    "headersSize": 562,
                    "bodySize": 6518,
                    "headers": [
                        {
                            "name": "Server",
                            "value": "GitHub.com"
                        },
                        {
                            "name": "Content-Type",
                            "value": "image/x-icon"
                        },
                        {
                            "name": "Last-Modified",
                            "value": "Mon, 16 Mar 2015 03:03:13 GMT"
                        },
                        {
                            "name": "Expires",
                            "value": "Wed, 28 Sep 2016 18:00:14 GMT"
                        },
                        {
                            "name": "Cache-Control",
                            "value": "max-age=31536000, public"
                        },
                        {
                            "name": "Timing-Allow-Origin",
                            "value": "https://github.com"
                        },
                        {
                            "name": "Content-Length",
                            "value": "6518"
                        },
                        {
                            "name": "Accept-Ranges",
                            "value": "bytes"
                        },
                        {
                            "name": "Date",
                            "value": "Sat, 26 Dec 2015 13:52:16 GMT"
                        },
                        {
                            "name": "Via",
                            "value": "1.1 varnish"
                        },
                        {
                            "name": "Age",
                            "value": "7588322"
                        },
                        {
                            "name": "Connection",
                            "value": "keep-alive"
                        },
                        {
                            "name": "X-Served-By",
                            "value": "cache-fra1246-FRA"
                        },
                        {
                            "name": "X-Cache",
                            "value": "HIT"
                        },
                        {
                            "name": "X-Cache-Hits",
                            "value": "1553241"
                        },
                        {
                            "name": "X-Timer",
                            "value": "S1451137936.611716,VS0,VE0"
                        },
                        {
                            "name": "Vary",
                            "value": "Accept-Encoding"
                        },
                        {
                            "name": "X-Fastly-Request-ID",
                            "value": "6866fe1ba1c7980050113ce9bf102e84110e7168"
                        }
                    ],
                    "httpVersion": "1.1",
                    "redirectURL": "",
                    "content": {
                        "size": 6518,
                        "mimeType": "image/x-icon"
                    },
                    "cookies": []
                },
                "cache": {},
                "timings": {
                    "blocked": -1,
                    "dns": -1,
                    "connect": -1,
                    "ssl": -1,
                    "send": 0,
                    "wait": 47,
                    "receive": 1
                },
                "_method": "GET",
                "_host": "assets-cdn.github.com",
                "_url": "/favicon.ico",
                "_responseCode": "200",
                "_load_ms": "48",
                "_ttfb_ms": "47",
                "_load_start": "3718",
                "_bytesOut": "424",
                "_bytesIn": "7082",
                "_objectSize": "6518",
                "_expires": "Wed, 28 Sep 2016 18:00:14 GMT",
                "_cacheControl": "max-age=31536000, public",
                "_contentType": "image/x-icon",
                "_type": "3",
                "_socket": "1000306",
                "_score_cache": "100",
                "_score_cdn": "100",
                "_score_gzip": "-1",
                "_score_cookies": "-1",
                "_score_keep-alive": "100",
                "_score_minify": "-1",
                "_score_combine": "-1",
                "_score_compress": "-1",
                "_score_etags": "-1",
                "_is_secure": "1",
                "_dns_ms": "-1",
                "_connect_ms": "-1",
                "_ssl_ms": "-1",
                "_gzip_total": "0",
                "_gzip_save": "0",
                "_minify_total": "0",
                "_minify_save": "0",
                "_image_total": "0",
                "_image_save": "0",
                "_cache_time": "23947678",
                "_cdn_provider": "Fastly",
                "_dns_start": "0",
                "_dns_end": "0",
                "_connect_start": "0",
                "_connect_end": "0",
                "_ssl_start": "0",
                "_ssl_end": "0",
                "_server_count": "1",
                "_client_port": "0",
                "_jpeg_scan_count": "0",
                "_full_url": "https://assets-cdn.github.com/favicon.ico",
                "_score_progressive_jpeg": -1,
                "_load_end": 3766,
                "_ttfb_start": "3718",
                "_ttfb_end": 3765,
                "_download_start": 3765,
                "_download_end": 3766,
                "_download_ms": 1,
                "_all_start": "3718",
                "_all_end": 3766,
                "_all_ms": "48",
                "_index": 13,
                "_number": 14
            },
            {
                "pageref": "page_1_0",
                "startedDateTime": "2015-12-26T13:52:16.457+00:00",
                "time": 417,
                "request": {
                    "method": "OPTIONS",
                    "url": "https://api.github.com/_private/browser/stats",
                    "headersSize": 445,
                    "bodySize": -1,
                    "cookies": [],
                    "headers": [
                        {
                            "name": "Host",
                            "value": "api.github.com"
                        },
                        {
                            "name": "Connection",
                            "value": "keep-alive"
                        },
                        {
                            "name": "Access-Control-Request-Method",
                            "value": "POST"
                        },
                        {
                            "name": "Origin",
                            "value": "https://github.com"
                        },
                        {
                            "name": "User-Agent",
                            "value": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36 PTST/255"
                        },
                        {
                            "name": "Access-Control-Request-Headers",
                            "value": "content-type"
                        },
                        {
                            "name": "Accept",
                            "value": "*/*"
                        },
                        {
                            "name": "Referer",
                            "value": "https://github.com/"
                        },
                        {
                            "name": "Accept-Encoding",
                            "value": "gzip, deflate, sdch"
                        },
                        {
                            "name": "Accept-Language",
                            "value": "en-US,en;q=0.8"
                        }
                    ],
                    "httpVersion": "1.1",
                    "queryString": []
                },
                "response": {
                    "status": 204,
                    "statusText": "",
                    "headersSize": 1875,
                    "bodySize": 0,
                    "headers": [
                        {
                            "name": "Server",
                            "value": "GitHub.com"
                        },
                        {
                            "name": "Date",
                            "value": "Sat, 26 Dec 2015 13:52:17 GMT"
                        },
                        {
                            "name": "Status",
                            "value": "204 No Content"
                        },
                        {
                            "name": "Access-Control-Allow-Credentials",
                            "value": "true"
                        },
                        {
                            "name": "Access-Control-Expose-Headers",
                            "value": "ETag, Link, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval"
                        },
                        {
                            "name": "Access-Control-Max-Age",
                            "value": "86400"
                        },
                        {
                            "name": "Access-Control-Allow-Headers",
                            "value": "Authorization, Content-Type, If-Match, If-Modified-Since, If-None-Match, If-Unmodified-Since, X-GitHub-OTP, X-Requested-With"
                        },
                        {
                            "name": "Access-Control-Allow-Methods",
                            "value": "GET, POST, PATCH, PUT, DELETE"
                        },
                        {
                            "name": "Access-Control-Allow-Origin",
                            "value": "*"
                        },
                        {
                            "name": "Content-Security-Policy",
                            "value": "default-src *; base-uri 'self'; connect-src 'self' live.github.com wss://live.github.com uploads.github.com status.github.com api.github.com www.google-analytics.com api.braintreegateway.com client-analytics.braintreegateway.com github-cloud.s3.amazonaws.com; font-src assets-cdn.github.com; form-action 'self' github.com gist.github.com; frame-src 'self' render.githubusercontent.com gist.github.com www.youtube.com player.vimeo.com checkout.paypal.com; img-src 'self' data: assets-cdn.github.com identicons.github.com www.google-analytics.com checkout.paypal.com collector.githubapp.com *.githubusercontent.com *.gravatar.com *.wp.com; media-src 'none'; object-src assets-cdn.github.com; script-src assets-cdn.github.com; style-src 'self' 'unsafe-inline' 'unsafe-eval' assets-cdn.github.com"
                        },
                        {
                            "name": "Strict-Transport-Security",
                            "value": "max-age=31536000; includeSubdomains; preload"
                        },
                        {
                            "name": "Public-Key-Pins",
                            "value": "max-age=300; pin-sha256=\"WoiWRyIOVNa9ihaBciRSC7XHjliYS9VwUGOIud4PB18=\"; pin-sha256=\"JbQbUG5JMJUoI6brnx0x3vZF6jilxsapbXGVfjhN8Fg=\"; includeSubDomains"
                        },
                        {
                            "name": "X-Content-Type-Options",
                            "value": "nosniff"
                        },
                        {
                            "name": "X-Frame-Options",
                            "value": "deny"
                        },
                        {
                            "name": "X-XSS-Protection",
                            "value": "1; mode=block"
                        },
                        {
                            "name": "Vary",
                            "value": "Accept-Encoding"
                        },
                        {
                            "name": "X-Served-By",
                            "value": "01d096e6cfe28f8aea352e988c332cd3"
                        },
                        {
                            "name": "X-GitHub-Request-Id",
                            "value": "341C539A:1D261:1B6279A9:567E9B91"
                        }
                    ],
                    "httpVersion": "1.1",
                    "redirectURL": "",
                    "content": {
                        "size": 0,
                        "mimeType": ""
                    },
                    "cookies": []
                },
                "cache": {},
                "timings": {
                    "blocked": -1,
                    "dns": 35,
                    "connect": 253,
                    "ssl": 134,
                    "send": 0,
                    "wait": 128,
                    "receive": 1
                },
                "_method": "OPTIONS",
                "_host": "api.github.com",
                "_url": "/_private/browser/stats",
                "_responseCode": "204",
                "_load_ms": "129",
                "_ttfb_ms": "128",
                "_load_start": "4457",
                "_bytesOut": "447",
                "_bytesIn": "1877",
                "_objectSize": "0",
                "_type": "3",
                "_socket": "1000484",
                "_score_cache": "0",
                "_score_cdn": "-1",
                "_score_gzip": "-1",
                "_score_cookies": "-1",
                "_score_keep-alive": "-1",
                "_score_minify": "-1",
                "_score_combine": "-1",
                "_score_compress": "-1",
                "_score_etags": "-1",
                "_is_secure": "1",
                "_dns_ms": 35,
                "_connect_ms": 119,
                "_ssl_ms": 134,
                "_gzip_total": "0",
                "_gzip_save": "0",
                "_minify_total": "0",
                "_minify_save": "0",
                "_image_total": "0",
                "_image_save": "0",
                "_cache_time": "0",
                "_dns_start": "4169",
                "_dns_end": "4204",
                "_connect_start": "4204",
                "_connect_end": "4323",
                "_ssl_start": "4323",
                "_ssl_end": "4457",
                "_initiator": "https://assets-cdn.github.com/assets/github-4b6b8e7d11ebb7bce85126d3b4130c80041f2ae6d5d6ef8901a8c0c3f7cb80d2.js",
                "_initiator_line": "2",
                "_initiator_column": "8536",
                "_server_count": "1",
                "_client_port": "0",
                "_jpeg_scan_count": "0",
                "_full_url": "https://api.github.com/_private/browser/stats",
                "_score_progressive_jpeg": -1,
                "_load_end": 4586,
                "_ttfb_start": "4457",
                "_ttfb_end": 4585,
                "_download_start": 4585,
                "_download_end": 4586,
                "_download_ms": 1,
                "_all_start": "4169",
                "_all_end": 4586,
                "_all_ms": 417,
                "_index": 14,
                "_number": 15
            },
            {
                "pageref": "page_1_0",
                "startedDateTime": "2015-12-26T13:52:16.608+00:00",
                "time": 319,
                "request": {
                    "method": "POST",
                    "url": "https://api.github.com/_private/browser/stats",
                    "headersSize": 407,
                    "bodySize": -1,
                    "cookies": [],
                    "headers": [
                        {
                            "name": "Host",
                            "value": "api.github.com"
                        },
                        {
                            "name": "Connection",
                            "value": "keep-alive"
                        },
                        {
                            "name": "Content-Length",
                            "value": "8927"
                        },
                        {
                            "name": "Origin",
                            "value": "https://github.com"
                        },
                        {
                            "name": "User-Agent",
                            "value": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36 PTST/255"
                        },
                        {
                            "name": "content-type",
                            "value": "application/json"
                        },
                        {
                            "name": "Accept",
                            "value": "*/*"
                        },
                        {
                            "name": "Referer",
                            "value": "https://github.com/"
                        },
                        {
                            "name": "Accept-Encoding",
                            "value": "gzip, deflate"
                        },
                        {
                            "name": "Accept-Language",
                            "value": "en-US,en;q=0.8"
                        }
                    ],
                    "httpVersion": "1.1",
                    "queryString": [],
                    "postData": {
                        "mimeType": "",
                        "text": ""
                    }
                },
                "response": {
                    "status": 200,
                    "statusText": "",
                    "headersSize": 793,
                    "bodySize": 5,
                    "headers": [
                        {
                            "name": "Server",
                            "value": "GitHub.com"
                        },
                        {
                            "name": "Date",
                            "value": "Sat, 26 Dec 2015 13:52:17 GMT"
                        },
                        {
                            "name": "Content-Type",
                            "value": "application/json; charset=utf-8"
                        },
                        {
                            "name": "Content-Length",
                            "value": "5"
                        },
                        {
                            "name": "Status",
                            "value": "200 OK"
                        },
                        {
                            "name": "Cache-Control",
                            "value": "no-cache"
                        },
                        {
                            "name": "X-GitHub-Media-Type",
                            "value": "github.v3"
                        },
                        {
                            "name": "Access-Control-Allow-Credentials",
                            "value": "true"
                        },
                        {
                            "name": "Access-Control-Expose-Headers",
                            "value": "ETag, Link, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval"
                        },
                        {
                            "name": "Access-Control-Allow-Origin",
                            "value": "*"
                        },
                        {
                            "name": "Content-Security-Policy",
                            "value": "default-src 'none'"
                        },
                        {
                            "name": "Strict-Transport-Security",
                            "value": "max-age=31536000; includeSubdomains; preload"
                        },
                        {
                            "name": "X-Content-Type-Options",
                            "value": "nosniff"
                        },
                        {
                            "name": "X-Frame-Options",
                            "value": "deny"
                        },
                        {
                            "name": "X-XSS-Protection",
                            "value": "1; mode=block"
                        },
                        {
                            "name": "Vary",
                            "value": "Accept-Encoding"
                        },
                        {
                            "name": "X-Served-By",
                            "value": "7f48e2f7761567e923121f17538d7a6d"
                        },
                        {
                            "name": "X-GitHub-Request-Id",
                            "value": "341C539A:1D261:1B6279C9:567E9B91"
                        }
                    ],
                    "httpVersion": "1.1",
                    "redirectURL": "",
                    "content": {
                        "size": 5,
                        "mimeType": "application/json"
                    },
                    "cookies": []
                },
                "cache": {},
                "timings": {
                    "blocked": -1,
                    "dns": -1,
                    "connect": -1,
                    "ssl": -1,
                    "send": 0,
                    "wait": 318,
                    "receive": 1
                },
                "_method": "POST",
                "_host": "api.github.com",
                "_url": "/_private/browser/stats",
                "_responseCode": "200",
                "_load_ms": "319",
                "_ttfb_ms": "318",
                "_load_start": "4608",
                "_bytesOut": "409",
                "_bytesIn": "800",
                "_objectSize": "5",
                "_cacheControl": "no-cache",
                "_contentType": "application/json",
                "_type": "3",
                "_socket": "1000484",
                "_score_cache": "-1",
                "_score_cdn": "-1",
                "_score_gzip": "-1",
                "_score_cookies": "-1",
                "_score_keep-alive": "100",
                "_score_minify": "-1",
                "_score_combine": "-1",
                "_score_compress": "-1",
                "_score_etags": "-1",
                "_is_secure": "1",
                "_dns_ms": "-1",
                "_connect_ms": "-1",
                "_ssl_ms": "-1",
                "_gzip_total": "0",
                "_gzip_save": "0",
                "_minify_total": "0",
                "_minify_save": "0",
                "_image_total": "0",
                "_image_save": "0",
                "_cache_time": "-1",
                "_dns_start": "0",
                "_dns_end": "0",
                "_connect_start": "0",
                "_connect_end": "0",
                "_ssl_start": "0",
                "_ssl_end": "0",
                "_server_count": "1",
                "_client_port": "0",
                "_jpeg_scan_count": "0",
                "_full_url": "https://api.github.com/_private/browser/stats",
                "_score_progressive_jpeg": -1,
                "_load_end": 4927,
                "_ttfb_start": "4608",
                "_ttfb_end": 4926,
                "_download_start": 4926,
                "_download_end": 4927,
                "_download_ms": 1,
                "_all_start": "4608",
                "_all_end": 4927,
                "_all_ms": "319",
                "_index": 15,
                "_number": 16
            }
        ]
    }
};