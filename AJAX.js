//创建对象 
var xhr = new XMLHttpRequest();
// 构建配置
xhr.open('GET', 'https://v-75a9702b.71edge.com/videos/vts/20200323/2c/76/5fc435c3541c840aa253a3e5251a44c7.ts?key=0a683c6f391b24931ca14346ba9baf8ef&dis_k=206ec5ba5a032bd6afcb774a58909c294&dis_t=1585042841&dis_dz=CMNET-JiangXi&dis_st=49&src=iqiyi.com&dis_hit=1&uuid=27a85c8d-5e79d599-221&sgti=14_34e2238b71420735481a1f2ae6127ac0_1585042844239&mss=1&pv=0.1&qd_tm=1585042841291&start=34546688&cross-domain=1&qd_ip=0&sd=0&dfp=&contentlength=2059264&qd_vip=1&qd_p=0&qd_k=ece8aae5ae640ef6cb52b49de40ae802&ve=&qd_tvid=14183767700&qd_src=01010031010000000000&stauto=1&end=36605952&qd_uid=1499170888&ori=pcw&num=1585042884644');
// 监听请求过程
xhr.onreadystatechage = function(xhr) {
    console.log(xhr)
};
// 正式发送数据
xhr.send();
// 打印
xhr()