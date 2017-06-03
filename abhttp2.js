// Server Software:
// 	Server Hostname:        47.94.95.52
// Server Port:            8081
// SSL/TLS Protocol:       TLSv1.2,ECDHE-RSA-AES128-GCM-SHA256,4096,128
//
// Document Path:          /http2.html
// Document Length:        24862 bytes  页面大小
//
// Concurrency Level:      100 测试的并发数
// Time taken for tests:   126.506 seconds  整个测试持续的时间
// Complete requests:      510  完成的请求数量
// Failed requests:        0
// Total transferred:      13211238 bytes   网络总传输量
// HTML transferred:       13072836 bytes   HTML内容传输量
// Requests per second:    4.03 [#/sec] (mean)  吞吐量-每秒请求数
// Time per request:       24805.138 [ms] (mean)  服务器收到请求，响应页面要花费的时间
// Time per request:       248.051 [ms] (mean, across all concurrent requests)  并发的每个请求平均消耗时间
//
// Transfer rate:          101.98 [Kbytes/sec] received    平均每秒网络上的流量，可以帮助排除是否存在网络流量过大导致响应时间延长的问题
//
// Connection Times (ms)
// min  mean[+/-sd] median   max
// Connect:       13 3463 9680.9    649  104876
// Processing:   440 14771 15422.7   9319   97057
// Waiting:        3   87 1157.4      4   25996
// Total:       1320 18235 18555.4  11932  119754
//
// Percentage of the requests served within a certain time (ms)
// 50%  11932 // 就是有50%的请求都是在11932ms内完成的
// 66%  18250
// 75%  22495
// 80%  28569
// 90%  38110
// 95%  62403
// 98%  75501
// 99%  86505
// 100%  119754 (longest request)