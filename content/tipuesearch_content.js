var tipuesearch = {"pages": [{'title': 'About', 'text': '此為第5組的小組網站:以下是名單 \n 40923123 \n 40923151 \n 40923142 \n 40923139 \n 40923134 \n 40923135 \n 40923133 \n 40923131 \n 接下來本組會採用每個頁面用pull requrest的方式進行協同，就是會將須改造的內容以記事本的方式來進行修改至於功課的網頁則會在每周日由組長進行合併 \n', 'tags': '', 'url': 'About.html'}, {'title': 'w11', 'text': '', 'tags': '', 'url': 'w11.html'}, {'title': 'w11s1', 'text': '[23] \n -------------------- \n 大組倉儲更新步驟 \n 這一頁會講解應該如何更新大組倉儲步驟跟必須知道的東西 \n 首先在開始之前大家其實可以觀察一下你每次在更新網站也就是利用cmsimde時就竟都更改些什麼東西呢? \n \n 其實更改的檔案通常有三個其中兩個html檔事記錄你所有網頁的檔案，一個是現在一個是之前，然後還有一個js黨是老師的搜尋系統會自動抓取字串的程式，所以其實在更改之前你會發現如果要進行協同只要處理這三個檔案衝突即可，而js黨則是必須想辦法更改它程式再擷取字串的步驟或這手動暴力應改等之類的，簡單來說是這樣再來以下還有必須注意的。 \n 協同問題篇 \n 須注意同時的問題由於上述所說的主要是js黨的問題導致今天不管是同時修改同一頁資料或不同頁又或者不同頁的資料(是有不同差異的，另解說)都必須解決檔案相衝問題，在github上若檔案相衝github會幫忙用一個特殊格是把兩個相衝的部分框起來並告知，其實只要修改符合合併就能合併了。 \n 步驟解說篇 \n 在步驟前必須先完成以下步驟 \n 1.必須每個成員先將大組倉儲給 fork ，這樣就能獲得一個 自己帳號 的大組倉儲 \n 2.clone 自己帳號 的大組倉儲 \n 3.將倉儲內推送時的person key或者使用ssh的小夥伴必須將.git裡的內容修改成如同自己倉出一樣 \n 這樣就算完成了前置步驟了 \n 再來以下正式進入步驟 \n 1.更改完自己想要的內容後先用正常手續將內容推送至 自己帳號 下的大組倉儲 \n 2.在github上選擇Pull requests的按鍵 \n 3.將merge的消息傳回給組長的大組倉儲(綠綠的給他按下去就對了 \n 4.組長查驗確認沒問題即可merge \n 以上即是正常流程下最順利的狀況，接下來會稍微說明版本同步問題以及merge的衝突問題以及如何解決 \n 首先當近端及遠端的部分不同步 \n 因當先將github上的版本給同步，在觀察commit那一欄要是組長倉儲有更新那裏就可以更新版本 \n 變成和組長一樣，再來在近端用git pull將資料從遠端給抓下來做合併，這樣就完成了最簡單的更新自己的倉儲了。 \n 那如果在github上無法合併可以怎麼做呢? 那說明一件事你在進行merge時跟別人衝突到或者格是有問題之類的，簡單來說就是有問題之後沒更改之後又繼續更新所導致的，那可以試試以下的方法 \n \n 前面有說道能使用git pull進行同步，但是如果自己帳號下github的資料就不對了就算git pull也沒辦法那就使用 git pull 組長大組倉儲網址.git main \n 將正確內容最新版本同步下來後重新push一次到 自己帳號 下的大組倉儲，這樣就可以將遠端成功更新成正確的版本了 \n w10_block_ui \n 第一部加上一些註解的影片 \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n midterm \n 這禮拜主要是先畫圖再進行組立然後放置coppeliasim進行模擬，再加上3軸UI介面進行控制 \n 在進行coppeliasim模擬有以下幾點要注意 \n 1軸在模擬時需增加轉速和扭力給他 \n 2中間相互連結且有移動的零件都必須把碰撞打開 \n 3UI介面的程式是加在最一開始的零件上的 \n 4若軸與兩組以上會動的零件相連需另用一個dummy去限制他 \n 操作流程如下 \n 1 先將組合圖匯入 \n 2 將組合圖零件炸開 \n 3 先定義基礎邊 \n 4 將軸開始從基礎邊一一接上去 \n 5 等都接完之後依上述說的將dummy加上去並進行限制，若遇到有街兩邊以上的軸藥劑的再多加dummy \n 6 將碰撞和軸的速度及扭力都打開 \n 7執行 \n 模擬的組立影片在此 影片 \n 結果 \n \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n 心得: 目前學到比較多的都是關於協同之間會發生的問題或者是衝突的問題處理，再來還有關於未來如果將開發與協同綁在一起的話該如何運作的狀況，目前對於協同的概念已經有初步了解了，在遇到問題也開始知道該如何解決而不是什麼都不知道這樣。 \n -------------------- \n [51] \n -------------------- \n 第8週我是負責coppeliasim的模擬 \n 模擬檔案 : 下載 \n 心得: \n 這個模擬跟上學期的幾乎一樣 \n 有差的地方大概只有零件不太一樣 \n 所以在模擬上沒甚麼太大的難度 \n 但如果要像老師說的需要更改尺寸 \n 可以讓程式自動組立 \n 讓模擬自動生成 \n 這個部分就還需要多多研究 \n 還需要學習更多程式語言 \n 像是c++、python、c之類的 \n 第10週我是做了老師wink影片的註解 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n ---分隔線--- \n \n \n \n \n   \n \n \n \n \n \n \n \n \n ---分隔線--- \n \n \n \n \n   \n \n \n \n \n \n \n \n \n 心得: \n 模擬的部分跟上學期的幾乎一樣 \n 有差的地方大概只有零件不太一樣 \n 所以在模擬上沒甚麼太大的難度 \n 但如果要像老師說的需要更改尺寸 \n 可以讓程式自動組立 \n 讓模擬自動生成 \n 這個部分就還需要多多研究 \n 還需要學習更多程式語言 \n 像是c++、python、c之類的 \n w10的加入註解任務 \n 讓我更清楚老師上課時所講的內容 \n 對於nx如何用UI介面調整零件尺寸有更進一步的了解 \n 還有如何調整nx啟動檔的過程跟ssh的設置都有所認識 \n 至於大組協同的部分也有介於這事的功課內容有更深的認識 \n 如果同時push會有那些檔案衝突 \n 要如何解決衝突 \n 要如何做才不會有衝突 \n 讓我認識了不少程式方面的限制和設定 \n 這對未來應該會很有幫助(在職場方面) \n -------------------- \n', 'tags': '', 'url': 'w11s1.html'}, {'title': 'w11s2', 'text': '[33] \n -------------------- \n \n w11s1 \n task1 \n 在task1依照步驟編譯simExtMtb plugin專案，最後 在 release 目錄中取得 simExtMtb.dll, 啟動前放入 Coppeliasim 根目錄，不清楚這個步驟所得到的結果是甚麼，其他皆依照步驟完成。 \n task2 \n 在task2我負責的是部分uArm的零件，並透過solvespace繪製，零件因為我們是先透過小組成員事先簡化過，所以繪製過程中不會有太大的麻煩，也順利的完成此任務。 \n w11s2 \n 在w10任務中，我學習到如何使用Nx的NXOpen API對零件的尺寸進行控制，讓我對機械設計有近一步的了解。並且在w10_nx_integ和w10_ssh了解nx啟動檔以及ssh設定 \n -------------------- \n [35] \n -------------------- \n \n 編譯 \xa0 simExtMtb \xa0 plugin: \n 針對 simExtMtb.pro: \n \n CoppeliaSim 4.1.0 原始碼編譯專案 \xa0 (登入 @gm OneDrive 後下載). \n E:\\downloads\\cop410\\programming\\simExtMTB>qmake -o Makefile simExtMtb.pro \n E:\\downloads\\cop410\\programming\\simExtMTB>mingw32-make -f Makefile.Release \n 在 release 目錄中取得 simExtMtb.dll, 啟動前放入 Coppeliasim 根目錄. \n \n 任務二: 請各組依照下列零件檔案, 將組員分為三組, 分別以 Solvespace, NX (12, 1980 或 2008) 及 Onshape, 完成各零件 工程圖 與 組合圖 後, 將 uarm 組合件轉為 \xa0 STL 格式後轉入 CoppeliaSim , 並安排以 GUI Slider 方式 控制前三軸作動 . 各組員需將零組件繪製過程與 CoppeliaSim 操控流程及心得, 寫為 Pelican Blog 與 Reveal.js 簡報, 並在期中考週將個人與分組網誌與簡報流程透過 Wink 製作為 mp4 影片嵌入個人與分組網頁, 流程中的 cmsimde H1 頁面命名為 \xa0 midterm , 而網誌命名為 \xa0 midterm.html , \xa0 簡報 則採 index.html 命名. \n 查驗項目: \n \n uarm 各零件工程圖 \n uarm 組合圖 \n uarm 組合圖 STL 格式轉入 CoppeliaSim \n GUI slider 控制前三軸作動 \n cmsimde 中第一階頁面, 標題為 midterm \n 網誌名稱為 midterm.html \n 流程與心得簡報 \n \n 5 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n \n --------------------------------------------- \n 8 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n \n --------------------------- \n 16 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n ---------------------- \n 21 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n ----------------------------- \n 32 \n \n \n \n \n   \n \n \n \n \n \n over \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n \n   \n \n \n \n \n \n', 'tags': '', 'url': 'w11s2.html'}, {'title': 'w11s3', 'text': '[42] \n -------------------- \n \n \n \n \n   \n \n \n \n \n \n \n \n \n -------------------------- \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n -------------------------- \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n -------------------------- \n STL連結: 零件 \n 流程與心得簡報: \n 我們分組工作，分配到繪圖零件及工程圖組裝，我把零件簡化，把100多個小零件分成15個零件，再組裝起來。 \n', 'tags': '', 'url': 'w11s3.html'}, {'title': 'w11s4', 'text': '', 'tags': '', 'url': 'w11s4.html'}, {'title': 'W8進度跟開會', 'text': '這周目標詳細狀況請看這篇  網站 \n 此為w8各組成員進度分配部分以及紀錄將會在這裡紀錄 \n 今天已到同學 \n \n 這周我們組分配的是以6人繪圖2人模擬的部份去分配，我們模擬的uram是直接使用老師原本的檔案去用的，並在coppeliasim理進行三軸控制這樣以下會導入到各個學員網站進行觀看 \n 40923123 \xa0  blog \n 40923151 \n 40923142 \n 40923139 \n 40923134 \n 40923135 \n 40923133 \n 40923131 \n', 'tags': '', 'url': 'W8進度跟開會.html'}, {'title': '開會', 'text': '開會網址: https://meet.google.com/qwz-ozsr-qzz \n 時間:2022/4/17 10:00~11:30 \n 有到成員: \n 40923123 \n 40923151 \n 40923142 \n 40923139 \n 40923134 \n 40923135 \n 未到成員: \n 40923133 \n 40923131 \n 檢視 \n 40923123 整理資料，使用coppeliasim模擬uram三軸介面 \n 40923151\xa0 使用coppeliasim模擬uram三軸介面 \n 40923142 使用繪圖軟體畫出uram的零件 \n 40923139\xa0 使用繪圖軟體畫出uram的零件 \n 40923134\xa0 使用繪圖軟體畫出uram的零件 \n 40923135\xa0 使用繪圖軟體畫出uram的零件 \n \n', 'tags': '', 'url': '開會.html'}, {'title': 'w7進度跟開會', 'text': '開會時間 2022/4/9 晚上8點至9點 \n 主辦人:40923123 \n 開會網址:\xa0https://meet.google.com/eej-jygq-mmh \n \n 到場人員: \n 40923123 \n 40923151 \n 40923142 \n 40923139 \n 40923134 \n 40923133 \n 未到人員 \n 40923135 \n 40923131 \n 檢視 \n 40923123 將模擬軟體打開還未更動程式去調整衝突，處理小組blog網站錯誤 \n 40923151\xa0 用onshape繪製圈圈叉叉的機械手臂，blog新增wink \n 40923142\xa0 blog有建成，把nx介紹的影片剩餘補齊 \n 40923139\xa0 將模擬軟體打開還未更新到個人網站上 \n 40923134\xa0 這禮拜做了老師給的w7任務的步驟做，做到了啟動scarysim.exe 後面的步驟還在研究 \n 40923135\xa0 暫時無進度 \n 40923133\xa0 暫時無進度 \n 40923131 暫時無進度 \n 問題 \n 1.小組blog轉檔一直說原始代碼有空字節 \n \n \n \n', 'tags': '', 'url': 'w7進度跟開會.html'}, {'title': 'W3', 'text': '下表為各自學生負責支影片: \n 23: 1 9 14 19 31 51: 4 11 13 23 36 42: 6 12 26 35 25 39: 15 17 24 28 35: 5 8 16 21 32 34: 7 27 33 34 38 31: 3 10 30 37 29 33: 2 18 20 22 \n 接下來本組學生將會以此表進行對照來將NX1980的影片進行解析，至此將會把每隔學員的網站合併至此 \n \n', 'tags': '', 'url': 'W3.html'}, {'title': '組員網站', 'text': '', 'tags': '', 'url': '組員網站.html'}, {'title': '40923123', 'text': '測試推送 \n', 'tags': '', 'url': '40923123.html'}, {'title': '40923151', 'text': 'test \n \n test1 \n 頁面內容如下，可以使用 \xa0control + f\xa0\xa0 搜尋 \n { NX影片 }{ 硬碟知識 } \n -------------------- -------------------- \n NX影片 \n 第4部(基礎3D繪製) \n \n \n \n \n   \n \n \n \n \n \n \n \n \n -------------------- -------------------- \n 第11部(繪製圓形球體) \n \n \n \n \n   \n \n \n \n \n \n \n \n \n -------------------- -------------------- \n 第13部(繪製曲柄) \n \n \n \n \n   \n \n \n \n \n \n \n \n \n -------------------- -------------------- \n 第23部(繪製碟煞盤) \n \n \n \n \n   \n \n \n \n \n \n \n \n \n -------------------- -------------------- \n 第36部(繪製金屬壓製薄板) \n \n \n \n \n   \n \n \n \n \n \n \n \n \n -------------------- -------------------- \n 硬碟知識 \n 操作步驟請按這裡 \n 硬碟的儲存空間跟" 配置單位大小 "很有關聯 \n 可以把 " 配置單位大小 "想像成一個櫃子的大小 \n 一個檔案就需要一個櫃子來裝 \n 但是如果  檔案大小<櫃子儲存容量\xa0 那就會導致 一個很小的檔案佔據了很大的空間 \n 所以在格式化時可以盡量挑選最小的 \n \n -------------------- -------------------- \n 檔案系統  盡量選擇  exFAT  或是  NTFS \n 這會攸關於檔案讀寫的上限 \n 詳細的資料如下 \n \n', 'tags': '', 'url': '40923151.html'}, {'title': '40923142', 'text': '', 'tags': '', 'url': '40923142.html'}, {'title': '40923139', 'text': '', 'tags': '', 'url': '40923139.html'}, {'title': '40923134', 'text': '', 'tags': '', 'url': '40923134.html'}, {'title': '40923135', 'text': '自己網站 \n https://40923135.github.io/cd2022/ \n 參與人網站 \n https://40923133.github.io/cd2022/content/%E6%9C%9F%E6%9C%AB%E8%80%83%E9%80%B1.html', 'tags': '', 'url': '40923135.html'}, {'title': '40923133', 'text': '40923133 網站 \n 參與人員40923135 網站 \n 題目4\xa0\xa0 影片連結 \n 心得 : 我們透過remote api，將控制端的畫面，能讓客戶端來觀看，並參考了其他同學的方式，使用vpn來連線。 \n 題目5\xa0 影片連結1 \xa0 影片連結2 \n 心得 : 這個題目是接續題目四，並且要能夠操控suctionpad，上面影片1、2中，第1部後半另一位成員無法成功從遠端觀看所以拍了第2部，在第2部的前30秒能夠成功從遠端觀看，但是後面突然出現連接錯誤，後面試了很多次也無法完成，也找不到原因以及解決辦法。 \n 題目6\xa0 影片連結 \n 心得 : 接續題目5，要能從客戶端控制，控制端的coppeliasim，利用老師提供的uarm_tkinder_control並修改ip位置和連結vpn就能夠完成，雖然期間處處碰壁，但在參考其他同學後最後也順利完成。', 'tags': '', 'url': '40923133.html'}, {'title': '40923131', 'text': '', 'tags': '', 'url': '40923131.html'}, {'title': '期末考週', 'text': '', 'tags': '', 'url': '期末考週.html'}, {'title': '40923133 期末考週', 'text': '40923133 網站 \n 參與人員40923135 網站 \n 題目4\xa0\xa0 影片連結 \n 心得 : 我們透過remote api，將控制端的畫面，能讓客戶端來觀看，並參考了其他同學的方式，使用vpn來連線。 \n 題目5\xa0 影片連結1 \xa0 影片連結2 \n 心得 : 這個題目是接續題目四，並且要能夠操控suctionpad，上面影片1、2中，第1部後半另一位成員無法成功從遠端觀看所以拍了第2部，在第2部的前30秒能夠成功從遠端觀看，但是後面突然出現連接錯誤，後面試了很多次也無法完成，也找不到原因以及解決辦法。 \n 題目6\xa0 影片連結 \n 心得 : 接續題目5，要能從客戶端控制，控制端的coppeliasim，利用老師提供的uarm_tkinder_control並修改ip位置和連結vpn就能夠完成，雖然期間處處碰壁，但在參考其他同學後最後也順利完成。', 'tags': '', 'url': '40923133 期末考週.html'}, {'title': '40923135 期末考週', 'text': '自己網站 \n https://40923135.github.io/cd2022/ \n 參與人網站 \n https://40923133.github.io/cd2022/content/%E6%9C%9F%E6%9C%AB%E8%80%83%E9%80%B1.html', 'tags': '', 'url': '40923135 期末考週.html'}]};