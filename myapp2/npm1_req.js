const request = require('request');
// 岩手県立大学にアクセス
request.get('https://www.iwate-pu.ac.jp/', function(err, res, body)
{
    // エラーの場合、エラー内容の表示
    if (err)
    {
        console.log('Error: '+err.message);
        return;
    }
    // Webページのコードを表示
    console.log(body);
});
<script src="js/myscript.js" charset="uft-8"></script>
/*
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="shortcut icon" href="/favicon.png">
<link rel="start" href="/" title="Home" />
<meta name="keywords" content="岩手,県立,大学,入試" />
<meta name="description" content="公立大学法人岩手県立大学の公式ウェブサイトです。大学案内、学部・大学院、入試、研究などの情報をご覧いただけます。4つの学部・大学院、2つの短大を設置。1998年開学、2018年に開学20周年を迎えます。" />
<link rel="alternate" type="application/atom+xml" title="Recent Entries" href="/atom.xml" />
<!-- 2017版用CSS -->
<link href="/css/bootstrap.css" rel="stylesheet">
<link href="/css/bootstrap-print.css" rel="stylesheet">
<link href="/css/style.css" rel="stylesheet">
<!-- 2017版用CSS -->
<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
<script defer src="https://use.fontawesome.com/releases/v5.0.1/js/all.js"></script>
<script src="js/jquery-1.11.3.min.js"></script>
<script src="js/bootstrap.js"></script>
<script src="js/bootstrap-tabcollapse.js"></script>

<link rel="EditURI" type="application/rsd+xml" title="RSD" href="/rsd.xml" />
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-98701307-1', 'auto');
  ga('send', 'pageview');

</script>
<title>公立大学法人 岩手県立大学</title>
<!-- User Heat Tag -->
<script type="text/javascript">
(function(add, cla){window['UserHeatTag']=cla;window[cla]=window[cla]||function(){(window[cla].q=window[cla].q||[]).push(arguments)},window[cla].l=1*new Date();var ul=document.createElement('script');var tag = document.getElementsByTagName('script')[0];ul.async=1;ul.src=add;tag.parentNode.insertBefore(ul,tag);})('//uh.nakanohito.jp/uhj2/uh.js', '_uhtracker');_uhtracker({id:'uhsRDA4WuK'});
</script>
<!-- End User Heat Tag -->
</head>
<body>
<div id="wrapper"></div>
<!-- 上部お問合せや検索など　-->
<nav class="container-fluid">
   <div class="row">
        <nav class="navbar navbar-default navbar-small">
            <div id="navbar-top" class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-small navbar-right">
                    <li><a href="/en/">English</a></li>
                    <li><a href="/access/">交通アクセス</a></li>
                    <li><a href="/sitemap/">サイトマップ</a></li>
                    <li><a href="/inquiry/">お問合せ</a></li>
                    <li><p class="sp-hidden">サイト内検索</p></li>
                    <form class="navbar-form navbar-left sp-hidden head_search" method="get" action="/mt/mt-search.cgi" >
                        <div class="form-group">
                        <input type="text" id="search"  name="search" value="" class="head_txt form-control input-sm" placeholder="検索キーワード">
                        <input type="hidden" name="IncludeBlogs" value="2,11,4" />
                        </div>
                        <button type="submit" class="btn btn-default btn-sm head_btn">検索</button>
                    </form>
                    <li class="brand"><a href="https://twitter.com/Iwate_puPR" target="_blank"><i class="fab fa-twitter"></i></a></li>
                    <li class="brand"><a href="https://www.facebook.com/iwateprefuniversity/" target="_blank"><i class="fab fa-facebook-square"></i></a></li>
                    <li class="brand"><a href="https://www.youtube.com/channel/UC1Xf-V1WZzs3pZqqtiYP_Vw" target="_blank"><i class="fab fa-youtube"></i></a></li>
                </ul>  
            </div>
        </nav>
   </div>
</nav>
<!-- 上部お問合せや検索など　-->    
<!--　グローバルメニュー　-->
<nav class="container-fluid sticky">
   <div class="row">
    <!-- Grid demo navbar -->
        <div class="navbar navbar-ipu yamm">
            <div class="navbar-header">
                <button type="button" data-toggle="collapse" data-target="#navbar-top" class="navbar-toggle"><i class="fas fa-2x fa-angle-double-up"></i></button>                
                <button type="button" data-toggle="collapse" data-target="#navbar-collapse-grid" class="navbar-toggle"><i class="fas fa-2x fa-list-alt"></i></button><a href="/" class="navbar-brand"></a>
            </div>
            <div id="navbar-collapse-grid" class="navbar-collapse collapse navbar-right">
                <ul class="nav navbar-nav">
                <!-- 大学案内 -->
                    <li class="dropdown yamm-fw"><a href="/information/" data-toggle="dropdown" class="dropdown-toggle">大学案内<br><b class="caret"></b></a>
                        <ul class="dropdown-menu">
                          <li class="grid-demo">
                            <div class="row">
                                <div class="col-sm-3 list-group">
                                <!--<img src="/images/tittle/bnr-20th.png" class="img-responsive center-block"alt="20th">-->
                                <a href="/examination/siryou.html"><img src="/images/tittle/bnr-inq.png" class="img-responsive center-block" alt="入試資料請求"></a>
                                <a href="/web-ipu/index.html?20180330"><img src="/images/tittle/bnr-arch.png" class="img-responsive center-block" alt="広報誌"></a>
                                <a href="/web-ipu/mini.html"><img src="/images/tittle/bnr-arch-mini.png" class="img-responsive center-block"></a>
                                <!--a href="/enquete.html"><img src="/images/tittle/bnr-enquete.png" class="img-responsive center-block" alt="岩手県立大学公式ウェブサイトに関するアンケート実施中"></a-->
                            </div>
                                <div class="col-sm-3 list-group">
                                  <p class="list-group-item">大学基本情報</p>
                                  <a href="/information/message/messagefull.html" class="list-group-item list-group-item-ipu">学長挨拶</a>
                                  <a href="/information/abstract.html" class="list-group-item list-group-item-ipu">大学概要</a>
                                  <a href="/information/info/index.html" class="list-group-item list-group-item-ipu">情報公開</a>
                                  <a href="/information/publicrelations.html" class="list-group-item list-group-item-ipu">広報・メディア</a>
                                </div>
                                <div class="col-sm-3 list-group">
                                  <p class="list-group-item list-group-item-ipu">&nbsp;</p>
                                  <a href="/information/recruit.html" class="list-group-item list-group-item-ipu">採用情報</a>
                                  <a href="/information/disaster/index.html" class="list-group-item list-group-item-ipu">震災関連情報</a>
                                  <a href="/coc/index.html" class="list-group-item list-group-item-ipu">地（知）の拠点大学による地方創生推進事業（COC+事業）</a>
                                  <a href="/information/post_71.html" class="list-group-item list-group-item-ipu">岩手県立大学未来創造基金</a>
                                  <a href="/information/kanzai/mitsumori.html" class="list-group-item list-group-item-ipu">定例見積り及び入札情報</a>
                                </div>
                                <div class="col-sm-3 list-group">
                                  <p class="list-group-item list-group-item-ipu">&nbsp;</p>
                                  <a href="/access/" class="list-group-item list-group-item-ipu">交通機関</a>
                                  <a href="/information/map.html" class="list-group-item list-group-item-ipu">キャンパス・マップ</a>
                                  <a href="/outside/media/flower/top.html" class="list-group-item list-group-item-ipu">フラワーマップ</a>
                                  <a href="/outside/media/ipuartmap/artmap.htm" class="list-group-item list-group-item-ipu">アートマップ</a>
                                  <a href="/inquiry/" class="list-group-item list-group-item-ipu">お問合せ一覧</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            <!--学部・大学院等 -->
                <li class="dropdown yamm-fw"><a href="/faculty/" data-toggle="dropdown" class="dropdown-toggle">学部・大学院等<br><b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li class="grid-demo">
                            <div class="row">
                                <div class="col-sm-3 list-group">
                                  <!--<img src="/images/tittle/bnr-20th.png" class="img-responsive center-block" alt="20th">-->
                                  <a href="/examination/siryou.html"><img src="/images/tittle/bnr-inq.png" class="img-responsive center-block" alt="入試資料請求"></a>
                                  <a href="/web-ipu/index.html?20180330"><img src="/images/tittle/bnr-arch.png" class="img-responsive center-block" alt="広報誌"></a>
                                  <a href="/web-ipu/mini.html"><img src="/images/tittle/bnr-arch-mini.png" class="img-responsive center-block"></a>
                                <!--a href="/enquete.html"><img src="/images/tittle/bnr-enquete.png" class="img-responsive center-block" alt="岩手県立大学公式ウェブサイトに関するアンケート実施中"></a-->
                                </div>
                                <div class="col-sm-3 list-group">
                                  <p class="list-group-item">学部</p>
                                  <a href="http://www-nurs.iwate-pu.ac.jp/" class="list-group-item list-group-item-ipu">看護学部</a>
                                  <a href="http://www-welf.iwate-pu.ac.jp/" class="list-group-item list-group-item-ipu">社会福祉学部</a>
                                  <a href="http://www.soft.iwate-pu.ac.jp/" class="list-group-item list-group-item-ipu">ソフトウェア情報学部</a>
                                  <a href="http://www-poly.iwate-pu.ac.jp/" class="list-group-item list-group-item-ipu">総合政策学部</a>
                                  <p class="list-group-item">短期大学部</p>
                                  <a href="/jc/" class="list-group-item list-group-item-ipu">盛岡短期大学部</a>
                                  <a href="http://www-myk.iwate-pu.ac.jp/" class="list-group-item list-group-item-ipu">宮古短期大学部</a>
                                </div>
                                <div class="col-sm-3 list-group">
                                  <p class="list-group-item">大学院</p>
                                  <a href="http://www-nurs.iwate-pu.ac.jp/" class="list-group-item list-group-item-ipu">看護学研究科</a>
                                  <a href="http://www-welf.iwate-pu.ac.jp/pg" class="list-group-item list-group-item-ipu">社会福祉学研究科</a>
                                  <a href="http://www.soft.iwate-pu.ac.jp/grad_school/index.html" class="list-group-item list-group-item-ipu">ソフトウェア情報学研究科</a>
                                  <a href="http://www-poly.iwate-pu.ac.jp/daigakuin/index_daigakuin.html" class="list-group-item list-group-item-ipu">総合政策研究科</a>
                                  <p class="list-group-item">基盤教育</p>
                                  <a href="/cahe/" class="list-group-item list-group-item-ipu">高等教育推進センター</a>
                                </div>
                                <div class="col-sm-3 list-group">
                                  <p class="list-group-item">その他関連施設</p>
                                  <a href="/outside/aina/toppage.html" class="list-group-item list-group-item-ipu">アイーナキャンパス</a>
                                  <a href="https://libipu.iwate-pu.ac.jp/drupal/" class="list-group-item list-group-item-ipu">メディアセンター（図書館）</a>
                                  <a href="/living/guesthouse.html" class="list-group-item list-group-item-ipu">ゲストハウス</a>
                                  <a href="http://i-mos.iwate-pu.ac.jp/" class="list-group-item list-group-item-ipu">いわてものづくり・ソフトウェア融合テクノロジーセンター（i-MOS）</a>
                                  <a href="/contribution/chiseiken.html" class="list-group-item list-group-item-ipu">地域政策研究センター</a>
                                  <p class="list-group-item">施設利用案内</p>
                                  <a href="/information/kanzai/shisetsu.html" class="list-group-item list-group-item-ipu">体育施設利用案内</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            <!--入試・高大連携 -->
                <li class="dropdown yamm-fw"><a href="/examination/" data-toggle="dropdown" class="dropdown-toggle">入試・高大連携<br><b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li class="grid-demo">
                            <div class="row">
                                <div class="col-sm-3 list-group">
                                  <!--<img src="/images/tittle/bnr-20th.png" class="img-responsive center-block" alt="20th">-->
                                  <a href="/examination/siryou.html"><img src="/images/tittle/bnr-inq.png" class="img-responsive center-block" alt="入試資料請求"></a>
                                  <a href="/web-ipu/index.html?20180330"><img src="/images/tittle/bnr-arch.png" class="img-responsive center-block" alt="広報誌"></a>
                                  <a href="/web-ipu/mini.html"><img src="/images/tittle/bnr-arch-mini.png" class="img-responsive center-block"></a>
                                <!--a href="/enquete.html"><img src="/images/tittle/bnr-enquete.png" class="img-responsive center-block" alt="岩手県立大学公式ウェブサイトに関するアンケート実施中"></a-->
                                </div>
                                <div class="col-sm-3 list-group">
                                  <p class="list-group-item">入試情報</p>
                                  <a href="/examination/" class="list-group-item list-group-item-ipu">入試インフォメーション</a>
                                  <a href="/examination/gakubu.html" class="list-group-item list-group-item-ipu">学部入試案内</a>
                                  <a href="/examination/tandai.html" class="list-group-item list-group-item-ipu">盛岡短期大学部入試案内</a>
                                  <a href="http://www-myk.iwate-pu.ac.jp/examination/index.html" class="list-group-item list-group-item-ipu">宮古短期大学部入試案内</a>
                                  <a href="/examination/daigakuin.html" class="list-group-item list-group-item-ipu">大学院入試案内</a>
                                  <a href="/examination/hennyugaku.html" class="list-group-item list-group-item-ipu">編入学入試案内</a>
                                  <a href="/examination/all.html" class="list-group-item list-group-item-ipu">入試日程一覧</a>
                                  <a href="/examination/siryou.html" class="list-group-item list-group-item-ipu">入試資料請求</a>
                                </div>
                                <div class="col-sm-3 list-group">
                                  <p class="list-group-item">過去問題・合格発表・出願状況・入試統計</p>
                                  <a href="/examination/kakomonindex.html" class="list-group-item list-group-item-ipu">過去問題</a>
                                  <a href="/examination/goukaku.html" class="list-group-item list-group-item-ipu">合格発表</a>
                                  <a href="/examination/senbatu.html" class="list-group-item list-group-item-ipu">出願状況</a>
                                  <a href="/examination/toukei.html" class="list-group-item list-group-item-ipu">入試統計</a>
                                </div>
                                <div class="col-sm-3 list-group">
                                  <p class="list-group-item">出張講義・大学見学・入試相談会</p>
                                  <a href="/examination/kougi-kengaku.html" class="list-group-item list-group-item-ipu">出張講義</a>
                                  <a href="/examination/nyusi-setumeikai.html" class="list-group-item list-group-item-ipu">オープンキャンパス・入試相談会</a>
                                  <a href="/examination/summerseminar.html" class="list-group-item list-group-item-ipu">サマーセミナー</a>
                                  <a href="/campus-attendant/" class="list-group-item list-group-item-ipu">キャンパス・アテンダント(CA)</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
              <!--学生生活 -->
              <li class="dropdown yamm-fw"><a href="/living/" data-toggle="dropdown" class="dropdown-toggle">学生生活<br><b class="caret"></b></a>
                <ul class="dropdown-menu">
                  <li class="grid-demo">
                    <div class="row">
                                <div class="col-sm-3 list-group">
                                  <!--<img src="/images/tittle/bnr-20th.png" class="img-responsive center-block" alt="20th">-->
                                  <a href="/examination/siryou.html"><img src="/images/tittle/bnr-inq.png" class="img-responsive center-block" alt="入試資料請求"></a>
                                  <a href="/web-ipu/index.html?20180330"><img src="/images/tittle/bnr-arch.png" class="img-responsive center-block" alt="広報誌"></a>
                                  <a href="/web-ipu/mini.html"><img src="/images/tittle/bnr-arch-mini.png" class="img-responsive center-block"></a>
                                <!--a href="/enquete.html"><img src="/images/tittle/bnr-enquete.png" class="img-responsive center-block" alt="岩手県立大学公式ウェブサイトに関するアンケート実施中"></a-->
                                </div>
                                <div class="col-sm-3 list-group">
                                  <p class="list-group-item">学生生活に必要な情報・手続き</p>
                                  <a href="/living/gslife/index.html" class="list-group-item list-group-item-ipu">Web学生便覧（学生生活・授業概要等）</a>
                                  <a href="/living/gslife/study/calendar.html" class="list-group-item list-group-item-ipu">学年暦</a>
                                  <a href="/living/gslife/study/syllabus.html" class="list-group-item list-group-item-ipu">シラバス</a>
                                  <a href="/living/gslife/other/tograd.html" class="list-group-item list-group-item-ipu">証明書の交付申請方法(卒業生含む)</a>
                                  <a href="/living/gslife/other/to-society.html" class="list-group-item list-group-item-ipu">科目等履修生、聴講生、研究生</a>
                                  <a href="http://www2.iwate-pu.ac.jp/" class="list-group-item list-group-item-ipu">学内ページ</a>
                                </div>
                                <div class="col-sm-3 list-group">
                                  <p class="list-group-item">学生生活支援</p>
                                  <a href="/living/health.html" class="list-group-item list-group-item-ipu">健康サポートセンター</a>
                                  <a href="/living/supportsalon.html" class="list-group-item list-group-item-ipu">学生サポートサロン</a>
                                  <a href="/living/gslife/support/counselling.html" class="list-group-item list-group-item-ipu">学生相談室</a>
                                  <a href="/living/tokubetsushien.html" class="list-group-item list-group-item-ipu">障がい学生支援</a>
                                </div>
                                <div class="col-sm-3 list-group">
                                  <p class="list-group-item">サークル活動等</p>
                                  <a href="/living/gslife/extra/circle.html" class="list-group-item list-group-item-ipu">サークル紹介</a>
                                  <a href="http://circle.iwate-pu.jp/~vol-cen/" class="list-group-item list-group-item-ipu">学生ボランティアセンター</a>
                                  <a href="http://www.ipu-soshin.jp/" class="list-group-item list-group-item-ipu">同窓会</a>
                                  <a href="http://www.ipu.u-coop.or.jp/" class="list-group-item list-group-item-ipu">アルバイト求人情報（生協ホームページ）</a>  
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
<!--キャリア　就職 -->
              <li class="dropdown yamm-fw"><a href="/career/" data-toggle="dropdown" class="dropdown-toggle">キャリア　就職<br><strong class="caret"></strong></a>
                <ul class="dropdown-menu">
                  <li class="grid-demo">
                    <div class="row">
                                <div class="col-sm-3 list-group">
                                  <!--<img src="/images/tittle/bnr-20th.png" class="img-responsive center-block" alt="20th">-->
                                  <a href="/examination/siryou.html"><img src="/images/tittle/bnr-inq.png" class="img-responsive center-block" alt="入試資料請求"></a>
                                  <a href="/web-ipu/index.html?20180330"><img src="/images/tittle/bnr-arch.png" class="img-responsive center-block" alt="広報誌"></a>
                                  <a href="/web-ipu/mini.html"><img src="/images/tittle/bnr-arch-mini.png" class="img-responsive center-block"></a>
                                <!--a href="/enquete.html"><img src="/images/tittle/bnr-enquete.png" class="img-responsive center-block" alt="岩手県立大学公式ウェブサイトに関するアンケート実施中"></a-->
                                </div>
                                <div class="col-sm-3 list-group">
                                  <p class="list-group-item">就職支援</p>
                                  <a href="/career/syusyokusaki.html" class="list-group-item list-group-item-ipu">岩手県立大学の就職内定状況</a>
                                  <a href="/career/center.html" class="list-group-item list-group-item-ipu">キャリアセンターの紹介</a>
                                  <a href="/career/inquiry.html" class="list-group-item list-group-item-ipu">お問合せ</a>
                                </div>
                                <div class="col-sm-3 list-group">
                                  <p class="list-group-item list-group-item-ipu">&nbsp;</p>
                                  <a href="/career/announce.html" class="list-group-item list-group-item-ipu">在学生の皆さま</a>
                                  <a href="/career/alumini.html" class="list-group-item list-group-item-ipu">卒業生の皆さま</a>
                                  <a href="/career/company.html" class="list-group-item list-group-item-ipu">企業の皆さま</a>
                                </div>
                                <div class="col-sm-3 list-group">

                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
<!--研究・地域連携 -->
              <li class="dropdown yamm-fw"><a href="/research/" data-toggle="dropdown" class="dropdown-toggle">研究・地域連携<br><b class="caret"></b></a>
                <ul class="dropdown-menu">
                  <li class="grid-demo">
                    <div class="row">
                                <div class="col-sm-3 list-group">
                                  <!--<img src="/images/tittle/bnr-20th.png" class="img-responsive center-block" alt="20th">-->
                                  <a href="/examination/siryou.html"><img src="/images/tittle/bnr-inq.png" class="img-responsive center-block" alt="入試資料請求"></a>
                                  <a href="/web-ipu/index.html?20180330"><img src="/images/tittle/bnr-arch.png" class="img-responsive center-block" alt="広報誌"></a>
                                  <a href="/web-ipu/mini.html"><img src="/images/tittle/bnr-arch-mini.png" class="img-responsive center-block"></a>
                                <!--a href="/enquete.html"><img src="/images/tittle/bnr-enquete.png" class="img-responsive center-block" alt="岩手県立大学公式ウェブサイトに関するアンケート実施中"></a-->
                                </div>
                                <div class="col-sm-3 list-group">
                                  <p class="list-group-item">研究・地域連携情報</p>
                                  <a href="/contribution/" class="list-group-item list-group-item-ipu">研究・地域連携のニュース・トピックス</a>
                                  <a href="/contribution/renkeihonbu.html" class="list-group-item list-group-item-ipu">研究・地域連携本部の紹介</a>
                                  <p class="list-group-item">研究関連</p>
                                  <a href="/research/" class="list-group-item list-group-item-ipu">研究紹介（研究成果・研究シーズ等）</a>
                                  <a href="/contribution/chizai.html" class="list-group-item list-group-item-ipu">知財情報</a>
                                  <a href="/contribution/gaibusikin.html" class="list-group-item list-group-item-ipu">外部資金受入状況</a>
                                  <a href="http://souran.iwate-pu.ac.jp/search?m=home&l=ja" class="list-group-item list-group-item-ipu">教育研究者総覧（教員・研究者紹介）</a>
                                  <a href="https://iwate-pu.repo.nii.ac.jp/" class="list-group-item list-group-item-ipu">機関リポジトリ</a>
                                  <a href="/research/huseiboushi.html" class="list-group-item list-group-item-ipu">不正防止の取組</a>
                                </div>
                                <div class="col-sm-3 list-group">
                                  <p class="list-group-item">地域貢献</p>
                                  <a href="/contribution/2011koukaikouza.html" class="list-group-item list-group-item-ipu">公開講座</a>
                                  <a href="/contribution/kyotei.html" class="list-group-item list-group-item-ipu">自治体等との協定</a>
                                  <a href="/contribution/chiseiken.html" class="list-group-item list-group-item-ipu">地域政策研究センター</a>
                                  <a href="https://iwate-nprc.com/" target="_blank" class="list-group-item list-group-item-ipu">看護実践研究センター</a>
                                </div>
                                <div class="col-sm-3 list-group">
                                  <p class="list-group-item">産学公連携</p>
                                  <a href="http://i-mos.iwate-pu.ac.jp/about/" class="list-group-item list-group-item-ipu">いわてものづくり・ソフトウェア融合テクノロジーセンター（i-MOS）</a>
                                  <a href="/contribution/syoseido2.html" class="list-group-item list-group-item-ipu">共同研究・受託研究・奨学寄附金制度</a>
                                  <a href="http://www.soft.iwate-pu.ac.jp/enpit/" class="list-group-item list-group-item-ipu">enPiT事業</a>
                                  <a href="http://www.tiic.jp/" class="list-group-item list-group-item-ipu">滝沢市IPUイノベーションセンター</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
<!--国際交流-->
              <li class="dropdown yamm-fw"><a href="/internationalexchange/top.html" data-toggle="dropdown" class="dropdown-toggle">国際交流<br><b class="caret"></b></a>
                <ul class="dropdown-menu">
                  <li class="grid-demo">
                    <div class="row">
                                <div class="col-sm-3 list-group">
                                  <!--<img src="/images/tittle/bnr-20th.png" class="img-responsive center-block" alt="20th">-->
                                  <a href="/examination/siryou.html"><img src="/images/tittle/bnr-inq.png" class="img-responsive center-block" alt="入試資料請求"></a>
                                  <a href="/web-ipu/index.html?20180330"><img src="/images/tittle/bnr-arch.png" class="img-responsive center-block" alt="広報誌"></a>
                                  <a href="/web-ipu/mini.html"><img src="/images/tittle/bnr-arch-mini.png" class="img-responsive center-block"></a>
                                <!--a href="/enquete.html"><img src="/images/tittle/bnr-enquete.png" class="img-responsive center-block" alt="岩手県立大学公式ウェブサイトに関するアンケート実施中"></a-->
                                </div>
                                <div class="col-sm-3 list-group">
                                  <p class="list-group-item">国際交流情報</p>
                                  <a href="/internationalexchange/aboutipu.html" class="list-group-item list-group-item-ipu">岩手県立大学について</a>

                                </div>
                                  <div class="col-sm-3 list-group">
                                  <p class="list-group-item list-group-item-ipu">&nbsp;</p>
                                  <a href="/internationalexchange/prospectivestudents.html" class="list-group-item list-group-item-ipu">岩手県立大学に留学を希望する皆さんへ</a>
                                  <a href="/internationalexchange/japanesestudents.html" class="list-group-item list-group-item-ipu">日本人学生の皆さんへ</a>
                                  <a href="/internationalexchange/currentinternationalstudents.html" class="list-group-item list-group-item-ipu">留学生の皆さんへ</a>
                                </div>
                                <div class="col-sm-3 list-group">
                                  <p class="list-group-item list-group-item-ipu">&nbsp;</p>
                                  <a href="/internationalexchange/interaction.html" class="list-group-item list-group-item-ipu">留学生の派遣依頼について</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
          </div>
        </div>
   </div>
</nav>
<!-- グローバルメニュー -->    
<!-- スライドショー -->
<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <!--<ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
    </ol>-->
      <div class="container-fluid">
        <div class="row">
          <div class="carousel-inner" role="listbox">
            <div class="item active">
              <a href="/web-ipu2020/vol79/index.html"><img src="/images/slide/doc2020_01.png" width="100%" alt="デジタルオープンキャンパス2020"></a>
            </div>
  
            <div class="item">
              <a href="/information/abstract.html"><img src="/images/slide/slide1.png" width="100%" alt="その先をつくる大学"></a>
            </div>
            <div class="item">
              <a href="/faculty/"><img src="/images/slide/slide3.png" width="100%" alt="各学部・短期大学部"></a>
            </div>
    
    <!--過去に使ったスライド等-->
            <!--
            <div class="item">
              <a href="/examination/nyusi-setumeikai.html"><img src="/images/slide/takizawa2019.jpg" width="100%" alt="岩手県立大学 大学祭"></a>
            </div>
            <div class="item">
              <a href="http://www-myk.iwate-pu.ac.jp/whatsnew/2019/10/post-6.html"><img src="/images/slide/miyako2019.jpg" width="100%" alt="岩手県立大学　宮古短期大学部　学園祭"></a>
            </div>
            <div class="item">
              <a href="/examination/nyusi-setumeikai.html"><img src="/images/slide/OC2019_2.png" width="100%" alt="岩手県立大学オープンキャンパス2019"></a>
            </div>
            <div class="item">
              <a href="/examination/nyusi-setumeikai.html"><img src="/images/slide/OC2019_1.png" width="100%" alt="岩手県立大学オープンキャンパス2019"></a>
            </div>
            <div class="item">
              <a href="/examination/2018.html"><img src="/images/slide/2018festa1.png" width="100%" alt="岩手県立大学オープンキャンパス2018"></a>
            </div>
            <div class="item">
              <a href="/examination/2018.html"><img src="/images/slide/2018festa2.png" width="100%" alt="岩手県立大学鷲風祭"></a>
            </div>
            <div class="item">
              <a href="/examination/2018.html"><img src="/images/slide/2018festa3.png" width="100%" alt="岩手県立大学オープンキャンパス2018"></a>
            </div>
            <div class="item">
              <a href="/examination/2018.html"><img src="/images/slide/2018festa4.png" width="100%" alt="岩手県立大学鷲風祭"></a>
            </div-->
            <!--div class="item">
              <a href="/20th/"><img src="/images/slide/slide5.png" width="100%" alt="岩手県立大学20周年記念サイト"></a>
            </div>
            <div class="item">
              <a href="http://www-myk.iwate-pu.ac.jp/whatsnew/2019/07/2019721.html"><img src="/images/slide/miyako.png" width="100%" alt="宮古短期大学部オープンキャンパス"></a>
            </div>-->
    </div>
            <!-- Controls -->
            <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
              <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
              <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- スライドショー -->
<div class="container-fluid bg-blue1">
<div class="row">
<div class="container" style="padding-top: 30px;">
<a href="/coronavirus.html"><img src="images/banner/20200226_banner.png" class="img-responsive center-block" alt="新型コロナウイルス感染症への対応について"></a>
    </div>
<div class="container" style="padding-top: 30px;">
<a href="/whatsnew/2020/09/post-496.html"><img src="images/banner/20200923_banner.png" class="img-responsive center-block" alt="後期授業について"></a>
    </div>
<div class="container" style="padding-top: 30px;">
<a href="/examination/digitaloc_online_consult.html"><img src="images/banner/20201012_consult_banner.png" class="img-responsive center-block" alt="秋の入試オンライン相談会・CAなんでも相談会について"></a>
    </div>
<!--div class="container first_20th">
      <a href="/20th/"><img src="images/20th.png" class="img-responsive" alt="岩手県立大学20周年記念サイト"></a>
    </div-->
<!-- News&Event --> 
<div class="container news_event">
  <h1><img src="/images/tittle/news_events.png" class="img-responsive center-block" alt="ニュースアンドトピックス"></h1>
  <section class="panel panel-default">
   <ul id="newstab" class="nav nav-tabs nav-justified">
    <li class="tab1 active"><a href="#whatnew" data-toggle="tab" class="tab1" title="新着情報tab">新着情報</a></li>
    <li class="tab2"><a href="#pu_event" data-toggle="tab" class="tab2" title="イベントtab">イベント</a></li>
    <li class="tab3"><a href="#exam" data-toggle="tab" class="tab3" title="入試tab">入試</a></li>
    <li class="tab4"><a href="#collabo" data-toggle="tab" class="tab4" title="高大連携tab">高大連携</a></li>
    <li class="tab5"><a href="#research" data-toggle="tab" class="tab5" title="研究・地域貢献tab">研究・地域貢献</a></li>
    <li class="tab6"><a href="#bid" data-toggle="tab" class="tab6" title="入札・採用tab">入札・採用</a></li>
    <li class="tab7"><a href="#other" data-toggle="tab" class="tab7" title="その他tab">その他</a></li>   
   </ul>
   <div class="tab-content">
    <div class="tab-pane fade in active" id="whatnew">
     <div class="tab_contents">


<div class="contents">
<table>
<tr>





<td class="week" style="background-color: #686868; color: #fff;">2020</td>
<td class="padding-left"><a href="javascript:void(0)" onclick="location.href='/mt/mt-search.cgi?IncludeBlogs=4&amp;tag=%E3%81%9D%E3%81%AE%E4%BB%96&amp;limit=20';return false;" rel="tag" class="btn btn-other btn-xs">その他</a><a href="javascript:void(0)" onclick="location.href='/mt/mt-search.cgi?IncludeBlogs=4&amp;tag=%E3%82%B3%E3%83%AD%E3%83%8A%E3%82%A6%E3%82%A4%E3%83%AB%E3%82%B9&amp;limit=20';return false;" rel="tag" class="btn btn-other btn-xs">コロナウイルス</a></td>
</tr>
<tr>
<td class="date" style="background-color:#ACAB9F; color:#000;">
11/<span>02</span></td>
<td class="perm_link"><a href="/whatsnew/2020/11/post-504.html">公立大学法人岩手県立大学第２回修学支援給付金について</a></td>


</tr>
</table>
</div>

<div class="contents">
<table>
<tr>

<td class="week" style="background-color: #798700; color: #fff;">2020</td>
<td class="padding-left"><a href="javascript:void(0)" onclick="location.href='/mt/mt-search.cgi?IncludeBlogs=4&amp;tag=%E5%85%A5%E8%A9%A6&amp;limit=20';return false;" rel="tag" class="btn btn-exam btn-xs">入試</a></td>
</tr>
<tr>
<td class="date" style="background-color: #B7CA00; color: #000;">
11/<span>02</span></td>
<td class="perm_link"><a href="/whatsnew/2020/11/22-2.html">【合格発表】令和3年度岩手県立大学総合型選抜（AO入試）第2次選考について</a></td>






</tr>
</table>
</div>

<div class="contents">
<table>
<tr>




<td class="week" style="background-color: #933000; color: #fff;">2020</td>
<td class="padding-left"><a href="javascript:void(0)" onclick="location.href='/mt/mt-search.cgi?IncludeBlogs=4&amp;tag=%E5%85%A5%E6%9C%AD%E3%83%BB%E6%8E%A1%E7%94%A8&amp;limit=20';return false;" rel="tag" class="btn btn-bid btn-xs">入札・採用</a></td>
</tr>
<tr>
<td class="date" style="background-color:#EA5514; color:#000;">
11/<span>02</span></td>
<td class="perm_link"><a href="/whatsnew/2020/11/-r21215r341.html">【採用情報】高等教育推進センター 教員募集（R2/12/15締切、R3/4/1着任）</a></td>



</tr>
</table>
</div>

<div class="contents">
<table>
<tr>




<td class="week" style="background-color: #933000; color: #fff;">2020</td>
<td class="padding-left"><a href="javascript:void(0)" onclick="location.href='/mt/mt-search.cgi?IncludeBlogs=4&amp;tag=%E5%85%A5%E6%9C%AD%E3%83%BB%E6%8E%A1%E7%94%A8&amp;limit=20';return false;" rel="tag" class="btn btn-bid btn-xs">入札・採用</a></td>
</tr>
<tr>
<td class="date" style="background-color:#EA5514; color:#000;">
11/<span>02</span></td>
<td class="perm_link"><a href="/whatsnew/2020/11/2209001600-oa-0-240-1-227.html">【入札情報】定例見積のお知らせ</a></td>



</tr>
</table>
</div>

<div class="contents">
<table>
<tr>





<td class="week" style="background-color: #686868; color: #fff;">2020</td>
<td class="padding-left"><a href="javascript:void(0)" onclick="location.href='/mt/mt-search.cgi?IncludeBlogs=4&amp;tag=%E3%81%9D%E3%81%AE%E4%BB%96&amp;limit=20';return false;" rel="tag" class="btn btn-other btn-xs">その他</a></td>
</tr>
<tr>
<td class="date" style="background-color:#ACAB9F; color:#000;">
10/<span>30</span></td>
<td class="perm_link"><a href="/whatsnew/2020/10/20201030-1.html">本学Webサイトの「メールフォーム」機能に係る不具合について</a></td>


</tr>
</table>
</div>


<p class="text-right"><a href="/whatsnew/cat1/">新着情報一覧</a></p>

</div>


    </div>
    <div class="tab-pane fade" id="pu_event">
     <div class="tab_contents">


<div class="contents">
<table>
<tr>



<td class="week" style="background-color: #9B7111; color: #fff;">2020</td>
<td class="padding-left"><a href="javascript:void(0)" onclick="location.href='/mt/mt-search.cgi?IncludeBlogs=4&amp;tag=%E7%A0%94%E7%A9%B6%E3%83%BB%E5%9C%B0%E5%9F%9F%E8%B2%A2%E7%8C%AE&amp;limit=20';return false;" rel="tag" class="btn btn-research btn-xs">研究・地域貢献</a></td>
</tr>
<tr>
<td class="date" style="background-color:#F8B62D; color:#000;">
10/<span>28</span></td>
<td class="perm_link"><a href="/whatsnew/2020/10/2020-kaggle.html">【2020.11.18】高度技術者養成講習会　「Kaggleによるデータサイエンス入門演習」開催について</a></td>



</tr>
</table>
</div>

<div class="contents">
<table>
<tr>



<td class="week" style="background-color: #9B7111; color: #fff;">2020</td>
<td class="padding-left"><a href="javascript:void(0)" onclick="location.href='/mt/mt-search.cgi?IncludeBlogs=4&amp;tag=%E7%A0%94%E7%A9%B6%E3%83%BB%E5%9C%B0%E5%9F%9F%E8%B2%A2%E7%8C%AE&amp;limit=20';return false;" rel="tag" class="btn btn-research btn-xs">研究・地域貢献</a></td>
</tr>
<tr>
<td class="date" style="background-color:#F8B62D; color:#000;">
10/<span>23</span></td>
<td class="perm_link"><a href="/whatsnew/2020/10/r2-gis-kousyu-1113.html">【2020.11.13】高度技術者養成講習会　「QGISによる位置情報の作成・可視化・解析体験」開催について</a></td>



</tr>
</table>
</div>

<div class="contents">
<table>
<tr>


<td class="week" style="background-color: #407611; color: #fff;">2020</td>
<td class="padding-left"><a href="javascript:void(0)" onclick="location.href='/mt/mt-search.cgi?IncludeBlogs=4&amp;tag=%E9%AB%98%E5%A4%A7%E9%80%A3%E6%90%BA&amp;limit=20';return false;" rel="tag" class="btn btn-collabo btn-xs">高大連携</a></td>
</tr>
<tr>
<td class="date" style="background-color: #67AF28; color: #000;">
10/<span>22</span></td>
<td class="perm_link"><a href="/whatsnew/2020/10/post-485.html">【高大連携】秋の入試オンライン相談会 申込受付中です。</a></td>




</tr>
</table>
</div>

<div class="contents">
<table>
<tr>



<td class="week" style="background-color: #9B7111; color: #fff;">2020</td>
<td class="padding-left"><a href="javascript:void(0)" onclick="location.href='/mt/mt-search.cgi?IncludeBlogs=4&amp;tag=%E7%A0%94%E7%A9%B6%E3%83%BB%E5%9C%B0%E5%9F%9F%E8%B2%A2%E7%8C%AE&amp;limit=20';return false;" rel="tag" class="btn btn-research btn-xs">研究・地域貢献</a></td>
</tr>
<tr>
<td class="date" style="background-color:#F8B62D; color:#000;">
10/<span>16</span></td>
<td class="perm_link"><a href="/whatsnew/2020/10/2020-dronichinohe-nyumon.html">【2020.11.4】高度技術者養成講習会　「ドローン実用入門（一戸）」開催について</a></td>



</tr>
</table>
</div>

<div class="contents">
<table>
<tr>



<td class="week" style="background-color: #9B7111; color: #fff;">2020</td>
<td class="padding-left"><a href="javascript:void(0)" onclick="location.href='/mt/mt-search.cgi?IncludeBlogs=4&amp;tag=%E7%A0%94%E7%A9%B6%E3%83%BB%E5%9C%B0%E5%9F%9F%E8%B2%A2%E7%8C%AE&amp;limit=20';return false;" rel="tag" class="btn btn-research btn-xs">研究・地域貢献</a></td>
</tr>
<tr>
<td class="date" style="background-color:#F8B62D; color:#000;">
10/<span>16</span></td>
<td class="perm_link"><a href="/whatsnew/2020/10/liaisoni2020.html">【2020.11.5】「リエゾンIマッチングフェア～新技術説明会～」で発表を行います！</a></td>



</tr>
</table>
</div>


<p class="text-right"><a href="/whatsnew/cat2/">イベント情報一覧</a></p>
</div>


    </div>
    <div class="tab-pane fade" id="exam">
     <div class="tab_contents">


<div class="contents">
<table>
<tr>
<td class="week">2020</td>
<td rowspan="2" class="perm_link"><a href="/whatsnew/2020/11/22-2.html">【合格発表】令和3年度岩手県立大学総合型選抜（AO入試）第2次選考について</a></td>
</tr>
<tr>
<td class="date">11/<span>02</span></td>
</tr>
</table>
</div>

<div class="contents">
<table>
<tr>
<td class="week">2020</td>
<td rowspan="2" class="perm_link"><a href="/whatsnew/2020/10/2-8.html">【入試情報】令和3年度岩手県立大学学生募集要項（一般選抜）について</a></td>
</tr>
<tr>
<td class="date">10/<span>21</span></td>
</tr>
</table>
</div>

<div class="contents">
<table>
<tr>
<td class="week">2020</td>
<td rowspan="2" class="perm_link"><a href="/whatsnew/2020/10/22-1.html">【出願状況】令和3年度岩手県立大学総合型選抜（AO入試）第2次選考について</a></td>
</tr>
<tr>
<td class="date">10/<span>12</span></td>
</tr>
</table>
</div>

<div class="contents">
<table>
<tr>
<td class="week">2020</td>
<td rowspan="2" class="perm_link"><a href="/whatsnew/2020/09/2-7.html">岩手県立大学、盛岡短期大学部及び宮古短期大学部の令和3年度学生募集要項について</a></td>
</tr>
<tr>
<td class="date">09/<span>24</span></td>
</tr>
</table>
</div>

<div class="contents">
<table>
<tr>
<td class="week">2020</td>
<td rowspan="2" class="perm_link"><a href="/whatsnew/2020/09/21-2.html">【出願状況】令和3年度岩手県立大学総合型選抜（AO入試）第1次選考について</a></td>
</tr>
<tr>
<td class="date">09/<span>17</span></td>
</tr>
</table>
</div>


</div>


    </div>
    <div class="tab-pane fade" id="collabo">
     <div class="tab_contents">


<div class="contents">
<table>
<tr>
<td class="week">2020</td>
<td rowspan="2" class="perm_link"><a href="/whatsnew/2020/10/post-485.html">【高大連携】秋の入試オンライン相談会 申込受付中です。</a></td>
</tr>
<tr>
<td class="date">10/<span>22</span></td>
</tr>
</table>
</div>

<div class="contents">
<table>
<tr>
<td class="week">2020</td>
<td rowspan="2" class="perm_link"><a href="/whatsnew/2020/10/2020no.html">2020年　いわて高校生小論文コンクールの結果発表について</a></td>
</tr>
<tr>
<td class="date">10/<span>12</span></td>
</tr>
</table>
</div>

<div class="contents">
<table>
<tr>
<td class="week">2020</td>
<td rowspan="2" class="perm_link"><a href="/whatsnew/2020/09/-web-weburl-httpswwwiwate-puacjpweb-ipu2020vol79indexhtml.html">秋のオープンキャンパスの中止のお知らせ</a></td>
</tr>
<tr>
<td class="date">09/<span>25</span></td>
</tr>
</table>
</div>

<div class="contents">
<table>
<tr>
<td class="week">2020</td>
<td rowspan="2" class="perm_link"><a href="/whatsnew/2020/09/post-494.html">【高大連携】業者主催入試相談会 情報を更新しました。</a></td>
</tr>
<tr>
<td class="date">09/<span>12</span></td>
</tr>
</table>
</div>

<div class="contents">
<table>
<tr>
<td class="week">2020</td>
<td rowspan="2" class="perm_link"><a href="/whatsnew/2020/07/81-1.html">【予定どおり開催します】【高大連携】入試説明会を開催します（8/1(土)・県内高３対象）</a></td>
</tr>
<tr>
<td class="date">07/<span>31</span></td>
</tr>
</table>
</div>


</div>


    </div>
    <div class="tab-pane fade" id="research">
     <div class="tab_contents">


<div class="contents">
<table>
<tr>
<td class="week">2020</td>
<td rowspan="2" class="perm_link"><a href="/whatsnew/2020/10/2020-kaggle.html">【2020.11.18】高度技術者養成講習会　「Kaggleによるデータサイエンス入門演習」開催について</a></td>
</tr>
<tr>
<td class="date">10/<span>28</span></td>
</tr>
</table>
</div>

<div class="contents">
<table>
<tr>
<td class="week">2020</td>
<td rowspan="2" class="perm_link"><a href="/whatsnew/2020/10/r2-gis-kousyu-1113.html">【2020.11.13】高度技術者養成講習会　「QGISによる位置情報の作成・可視化・解析体験」開催について</a></td>
</tr>
<tr>
<td class="date">10/<span>23</span></td>
</tr>
</table>
</div>

<div class="contents">
<table>
<tr>
<td class="week">2020</td>
<td rowspan="2" class="perm_link"><a href="/whatsnew/2020/10/2020-dronichinohe-nyumon.html">【2020.11.4】高度技術者養成講習会　「ドローン実用入門（一戸）」開催について</a></td>
</tr>
<tr>
<td class="date">10/<span>16</span></td>
</tr>
</table>
</div>

<div class="contents">
<table>
<tr>
<td class="week">2020</td>
<td rowspan="2" class="perm_link"><a href="/whatsnew/2020/10/liaisoni2020.html">【2020.11.5】「リエゾンIマッチングフェア～新技術説明会～」で発表を行います！</a></td>
</tr>
<tr>
<td class="date">10/<span>16</span></td>
</tr>
</table>
</div>

<div class="contents">
<table>
<tr>
<td class="week">2020</td>
<td rowspan="2" class="perm_link"><a href="/whatsnew/2020/10/2020-dronmizusawa-nyumon.html">【2020.10.28】高度技術者養成講習会　「ドローン実用入門（水沢）」開催について</a></td>
</tr>
<tr>
<td class="date">10/<span>12</span></td>
</tr>
</table>
</div>


</div>


    </div>
    <div class="tab-pane fade" id="bid">
     <div class="tab_contents">


<div class="contents">
<table>
<tr>
<td class="week">2020</td>
<td rowspan="2" class="perm_link"><a href="/whatsnew/2020/11/-r21215r341.html">【採用情報】高等教育推進センター 教員募集（R2/12/15締切、R3/4/1着任）</a></td>
</tr>
<tr>
<td class="date">11/<span>02</span></td>
</tr>
</table>
</div>

<div class="contents">
<table>
<tr>
<td class="week">2020</td>
<td rowspan="2" class="perm_link"><a href="/whatsnew/2020/11/2209001600-oa-0-240-1-227.html">【入札情報】定例見積のお知らせ</a></td>
</tr>
<tr>
<td class="date">11/<span>02</span></td>
</tr>
</table>
</div>

<div class="contents">
<table>
<tr>
<td class="week">2020</td>
<td rowspan="2" class="perm_link"><a href="/whatsnew/2020/10/post-503.html">【入札情報】物品調達の一般競争入札の公告について</a></td>
</tr>
<tr>
<td class="date">10/<span>30</span></td>
</tr>
</table>
</div>

<div class="contents">
<table>
<tr>
<td class="week">2020</td>
<td rowspan="2" class="perm_link"><a href="/whatsnew/2020/10/post-340.html">【12/1採用】岩手県立大学任期付職員の募集について</a></td>
</tr>
<tr>
<td class="date">10/<span>20</span></td>
</tr>
</table>
</div>

<div class="contents">
<table>
<tr>
<td class="week">2020</td>
<td rowspan="2" class="perm_link"><a href="/whatsnew/2020/10/11-24.html">社会福祉学部「ソーシャルワーク（高齢者福祉）」分野教員募集期間延長（11 /24必着）について</a></td>
</tr>
<tr>
<td class="date">10/<span>13</span></td>
</tr>
</table>
</div>


</div>


    </div>
    <div class="tab-pane fade" id="other">
     <div class="tab_contents">


<div class="contents">
<table>
<tr>
<td class="week">2020</td>
<td rowspan="2" class="perm_link"><a href="/whatsnew/2020/11/post-504.html">公立大学法人岩手県立大学第２回修学支援給付金について</a></td>
</tr>
<tr>
<td class="date">11/<span>02</span></td>
</tr>
</table>
</div>

<div class="contents">
<table>
<tr>
<td class="week">2020</td>
<td rowspan="2" class="perm_link"><a href="/whatsnew/2020/10/20201030-1.html">本学Webサイトの「メールフォーム」機能に係る不具合について</a></td>
</tr>
<tr>
<td class="date">10/<span>30</span></td>
</tr>
</table>
</div>

<div class="contents">
<table>
<tr>
<td class="week">2020</td>
<td rowspan="2" class="perm_link"><a href="/whatsnew/2020/10/post-501.html">令和２年度学内合同企業等説明会の受付を終了しました</a></td>
</tr>
<tr>
<td class="date">10/<span>23</span></td>
</tr>
</table>
</div>

<div class="contents">
<table>
<tr>
<td class="week">2020</td>
<td rowspan="2" class="perm_link"><a href="/whatsnew/2020/10/-117.html">「岩手県立大学社会福祉学部 第７回学術講演会・県大フォーラムいわて 『今、求められる障害者雇用』」の開催について（11/7開催）</a></td>
</tr>
<tr>
<td class="date">10/<span>13</span></td>
</tr>
</table>
</div>

<div class="contents">
<table>
<tr>
<td class="week">2020</td>
<td rowspan="2" class="perm_link"><a href="/whatsnew/2020/09/post-500.html">新型コロナウイルス感染防止に関する注意喚起（在学生の皆さんへ）</a></td>
</tr>
<tr>
<td class="date">09/<span>28</span></td>
</tr>
</table>
</div>


</div>


    </div>    
   </div>
  </section>
</div>
<script>
$('#newstab').tabCollapse();
</script>
<!-- News&Event --> 
<!--$mt:Include module="mod_topics(2017)"$-->
</div>
</div>
<!-- 学部・大学院の紹介 -->    
<div class="container-fluid introduction">
<h1><img src="/images/tittle/introduction.png" class="img-responsive center-block" alt="学部・大学院・施設の紹介"></h1>
    <div class="row row-eq-height">
       <div class="col-md-1 col-xs-4 col-disable-padding text-center">
        <a href="http://www-nurs.iwate-pu.ac.jp/">
        <img src="images/kango.png" alt="看護学部・研究科" class="img-responsive center-block rotate">
        <p class="text-small">看護学部<br>看護学研究科</p></a>
      </div>
      <div class="col-md-1 col-xs-4 col-disable-padding text-center">
        <a href="http://www-welf.iwate-pu.ac.jp/">
        <img src="images/syakai.png" alt="社会福祉学部・研究科" class="img-responsive center-block rotate">
        <p class="text-small">社会福祉学部<br>社会福祉学研究科</p></a>
      </div>
      <div class="col-md-1 col-xs-4 col-disable-padding text-center">
        <a href="http://www.soft.iwate-pu.ac.jp/">
        <img src="images/soft.png" alt="ソフトウェア情報学部・研究科" class="img-responsive center-block rotate">
        <p class="text-small">ソフトウェア情報学部<br>ソフトウェア情報学研究科</p></a>
      </div>
      <div class="col-md-1 col-xs-4 col-disable-padding text-center">
        <a href="http://www-poly.iwate-pu.ac.jp/">
        <img src="images/seisaku.png" alt="総合政策学部・研究科" class="img-responsive center-block rotate">
        <p class="text-small">総合政策学部<br>総合政策研究科</p></a>
      </div>
      <div class="col-md-1 col-xs-4 col-disable-padding text-center">
        <a href="/jc/">
        <img src="images/jc.png" alt="盛岡短期大学部" class="img-responsive center-block rotate">
        <p class="text-small">盛岡短期大学部</p></a>
      </div>
      <div class="col-md-1 col-xs-4 col-disable-padding text-center">
        <a href="http://www-myk.iwate-pu.ac.jp/">
        <img src="images/mjc.png" alt="宮古短期大学部" class="img-responsive center-block rotate">
        <p class="text-small">宮古短期大学部</p></a>
      </div>
      <div class="col-md-1 col-xs-4 col-disable-padding text-center">
        <a href="/cahe/">
        <img src="images/Higher.png" alt="高等教育推進センター" class="img-responsive center-block rotate">
        <p class="text-small">高等教育推進センター</p></a>
      </div>
    </div>
</div>
<!-- 学部・大学院の紹介 --> 
<!-- 施設紹介 -->    
<div class="container container-facility">
 <div class="row">
 <div class="col-sm-4 col-md-4 col-lg-4 col-xs-12 col-disable-padding">
  <div class="img-position link_box">
   <a href="https://libipu.iwate-pu.ac.jp/drupal/">メディアセンター（図書館）</a>
   <img src="images/media.png" alt="メディアセンター（図書館）" style="width:100%;" class="center-block">
   <h3>メディアセンター（図書館）</h3>
  </div>
</div>
    <div class="col-sm-4 col-md-4 col-lg-4 col-xs-12 col-disable-padding">
  <div class="img-position link_box">
<a href="http://i-mos.iwate-pu.ac.jp/">地域連携棟(i-Mos、地政研)</a>
   <img src="images/i-mos.png" alt="i-mos" style="width:100%;" class="center-block">
   <h3>地域連携棟(i-Mos、地政研)</h3>
  </div>
  </div>
    <div class="col-sm-4 col-md-4 col-lg-4 col-xs-12 col-disable-padding">
  <div class="img-position link_box">
<a href="/living/guesthouse.html">ゲストハウス</a>
   <img src="images/guest.png" alt="ゲストハウス" style="width:100%;" class="center-block">
   <h3>ゲストハウス</h3>
</div>
  </div>
 </div>
</div>
<!-- 施設紹介 --> 
<!-- 広報・メディア -->
<div class="container-media">
  <h1><img src="/images/tittle/media.png" class="img-responsive center-block" alt="広報・メディア"></h1>
  <div class="container" style="padding-top: 60px;">
    <div class="row">
      <div class="col-xs-12 col-lg-6 col-md-6 col-sm-6">
      <a href="/web-ipu/index.html?20180330" target="_blank"><img src="/images/tittle/arch.png" class="img-responsive center-block"></a>
      </div>
      <div class="col-xs-12 col-lg-6 col-md-6 col-sm-6">
        <ul class="list-inline text-center row-eq-height space-betw" style="padding: 50px 0;">
          <li class="fa-twcolor fa-stack"><a href="https://twitter.com/Iwate_puPR" target="_blank"><i class="fa fa-circle fa-stack-2x"></i><i class="fab fa-stack-1x fa-inverse fa-twitter"></i></a></li>
          <li class="fa-fbcolor fa-stack"><a href="https://www.facebook.com/iwateprefuniversity/" target="_blank"><i class="fa fa-circle fa-stack-2x"></i><i class="fab fa-stack-1x  fa-inverse fa-facebook-square"></i></a></li>
          <li class="fa-ytcolor fa-stack"><a href="https://www.youtube.com/channel/UC1Xf-V1WZzs3pZqqtiYP_Vw" target="_blank"><i class="fa fa-circle fa-stack-2x"></i><i class="fab fa-stack-1x  fa-inverse fa-youtube"></i></a></li>
       </ul>
     </div>
     <div class="col-md-6 col-lg-6 col-sm-6 col-xs-12">
       <div class="pc-embed">
         <div class="embed-responsive embed-responsive-16by9">
           <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Gj8mX0KPEQM" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
         </div>
       </div>
     </div>
     <div class="hidden-xs col-md-6 col-lg-6 col-sm-6">
       <a class="twitter-timeline" width="100%" height="300px" href="https://twitter.com/Iwate_puPR?ref_src=twsrc%5Etfw">Tweets by Iwate_puPR</a>
       <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
     </div>
  </div>
</div>
</div>
<!-- 広報・メディア -->

<!-- 2018-20th -->
<!--    <div class="container first_20th">
      <img src="images/2018-20.png" class="img-responsive" alt="一期生アーカイブ">
    </div>-->
<!-- 2018-20th -->
<!-- 所在情報 -->
<div class="container-fluid container-address bg-blue2" style="margin-bottom:100px;">
<h1><img src="/images/tittle/campus.png" class="img-responsive center-block" alt="キャンパス"></h1>
 <div class="row" style="padding-bottom:20px; padding-top:80px;">       
  <div class="col-md-4 col-sm-4 col-xs-12 col-disable-padding center-block">
   <figure>
   <a href="/access/index.html"><img src="images/iwate-pu.png" alt="滝沢キャンパス" width="100%" class="img-responsive"></a>
  <figcaption>
    <a href="/access/index.html"><p class="campus_name">滝沢キャンパス</p>
    <p>〒020-0693<br>岩手県滝沢市巣子152-52<br>TEL. 019-694-2000（代）<br>FAX. 019-694-2001</p></a>
  </figcaption>
</figure>
</div>
<div class="col-md-4 col-sm-4 col-xs-12 col-disable-padding center-block">
   <figure>
   <a href="/access/index.html#miyako"><img src="images/miyako-jc.png" alt="宮古キャンパス" width="100%" class="img-responsive"></a>
  <figcaption>
    <a href="/access/index.html#miyako"><p class="campus_name">宮古キャンパス<span style="font-size:60%;">(宮古短期大学部）</span></p>
    <p>〒027-0039<br>岩手県宮古市河南1丁目5番1号<br>TEL. 0193-64-2230（代）<br>FAX. 0193-64-2234</p></a>
  </figcaption>
</figure>
  </div>
  <div class="col-md-4 col-sm-4 col-xs-12 col-disable-padding center-block">
   <figure>
   <a href="/access/index.html#aiina"><img src="images/aiina-campus.png" alt="アイーナキャンパス" width="100%" class="img-responsive"></a>
  <figcaption>
    <a href="/access/index.html#aiina"><p class="campus_name">アイーナキャンパス<span style="font-size:60%;">（サテライトキャンパス）</span></p>
    <p>〒020-0045<br>岩手県盛岡市盛岡駅西通1-7-1<br>いわて県民情報交流センター(アイーナ)7階<br>TEL. 019-606-1770 FAX. 019-606-1771</p></a>
  </figcaption>
</figure>
  </div>
 </div>
</div>
<!-- 所在情報 -->
<!-- footer -->
<footer class="container-fluid">
    <div class="text-center">   
        <ul class="foot_navigation">
            <li><a href="/sitepolicy/">このサイトについて</a>｜</li>
            <li><a href="/privacy/">プライバシーポリシー</a>｜</li>
            <li><a href="http://www2.iwate-pu.ac.jp/">学内専用サイト</a></li>
        </ul>
    </div>
    <div class="row">
        <div class="col-md-6 col-md-offset-3 col-xs-offset-1 col-lg-offset-4 col-lg-5 col-sm-8 col-sm-offset-2 col-xs-10">          
            <div class="sdBnar_ssl">
               <form action="https://www.login.secomtrust.net/customer/customer/pfw/CertificationPage.do" name="CertificationPageForm" method="post" target="_blank" style="margin:0;">
<input type="image" src="/images/banner/B1180620.svg" width="56" height="88" name="Sticker" alt="クリックして証明書の内容をご確認ください" oncontextmenu="return false;" />
<input type="hidden" name="Req_ID" value="0790847613" /></form>
                <p class="sdBnar_ssl_r">このサイトはセコムトラストシステムズ社により認証されています。<br />SSL対応ページからの情報送信は暗号化により保護されます。</p><br class="clearfix" />
            </div>
        </div>
    </div>
  <p class="text-center">公立大学法人岩手県立大学　〒020-0693　岩手県滝沢市巣子152-52</p>
<div class="row"> 
  <p class="copyright text-center">Copyright&copy; 2018 Iwate Prefectural University. ALL RIGHT RESERVED.</p>
  </div>
</footer>
<!-- footer -->
<script src="js/stickyfill.min.js"></script>
<script>
var elements = document.querySelectorAll('.sticky');
Stickyfill.add(elements);
</script>
<script>
$('.navbar .dropdown-toggle').hover(function() {
  if (document.documentElement.clientWidth > 769) { $(this).addClass('disabled');}
  else { $(this).removeClass('disabled'); }
});
</script>
</body>
</html>
*/