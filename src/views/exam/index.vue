<template>
  <q-layout view="hHh lpR fFf">
    <!-- <q-header reveal elevated class="bg-white text-black" height-hint="98">
      <q-toolbar>
        <q-icon :name="symOutlinedArrowBackIos" size="32px" />

        <q-toolbar-title>
          <img src="@/assets/logo.png" />
        </q-toolbar-title>
      </q-toolbar>
    </q-header> -->
    <q-header reveal elevated class="bg-white text-black" height-hint="98">
      <q-toolbar>
        <q-icon name="arrow_back_ios" size="32px" />
        <div style="width: 10%; padding: 0 10px">
          <div style="font-size: 20px; font-weight: bold">1레벨 1레슨</div>
          <div style="font-size: 10px">비문학-인문</div>
        </div>
        <div style="width: 40%; padding: 0 10px">
          <div style="font-size: 12px; font-weight: bold">
            지문1 - 윤리의 기원
          </div>
          <q-linear-progress stripe rounded size="16px" :value="value" color="warning" class="q-mt-sm" />
        </div>
        <div style="width: 40%">
          <div style="font-size: 12px; font-weight: bold">
            지문2 - 수요와 공급에 따른 가격 결정
          </div>
          <q-linear-progress stripe rounded size="16px" :value="value" color="warning" class="q-mt-sm" />
        </div>
        <div style="width: 10%; text-align: end">
          <q-chip>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            김제니
          </q-chip>
        </div>
        <!-- <q-toolbar-title>
              <img src="../assets/logo.png" />
            </q-toolbar-title> -->
      </q-toolbar>
    </q-header>
    <q-page-container>
      <!-- <router-view /> -->

      <q-page class="q-pa-md">
        <div class="row">
          <div class="col">
            <q-scroll-area style="height: 90vh; max-width: 50vw; padding: 30px">
              <p style="font-size: 1.12em; text-align: justify;" data-ke-size="size16">&nbsp;</p>
              <p style="font-size: 1.12em; text-align: justify;" data-ke-size="size16"><b>모밀꽃 필 무렵 </b><br /><b>이효석</b>
              </p>
              <p style="font-size: 1.12em; text-align: justify;" data-ke-size="size16">&nbsp;</p>
              <p style="font-size: 1.12em; text-align: justify;" data-ke-size="size16">
                여름&nbsp;장이란&nbsp;애시당초에&nbsp;글러서,&nbsp;해는&nbsp;아직&nbsp;중천에&nbsp;있건만&nbsp;장판은&nbsp;벌써&nbsp;쓸쓸하고,&nbsp;더운&nbsp;햇발이&nbsp;벌여놓은&nbsp;전&nbsp;휘장으로&nbsp;등줄기를&nbsp;훅훅&nbsp;볶는다.&nbsp;마을&nbsp;사람들은&nbsp;거지반&nbsp;돌아간&nbsp;뒤요,&nbsp;팔리지&nbsp;못한&nbsp;나뭇군&nbsp;패가&nbsp;길거리에&nbsp;궁싯거리고&nbsp;있으나,&nbsp;석유병이나&nbsp;받고&nbsp;고깃&nbsp;마리나&nbsp;사면&nbsp;족할&nbsp;이&nbsp;축들을&nbsp;바라고&nbsp;언제까지든지&nbsp;버티고&nbsp;있을&nbsp;법은&nbsp;없다.&nbsp;
                <br /><br />춥춥스럽게&nbsp;날아드는&nbsp;파리&nbsp;떼도&nbsp;장난꾼&nbsp;각다귀들도&nbsp;귀치&nbsp;않다.&nbsp;얼금뱅이요,&nbsp;왼손잡이인&nbsp;드팀전의&nbsp;허생원은&nbsp;기어이&nbsp;동업의&nbsp;조선달을&nbsp;나꾸어&nbsp;보았다.&nbsp;
                <br /><br />"그만&nbsp;거둘까?"&nbsp; <br /><br />"잘 생각했네. 봉평장에서 한 번이나 흐뭇하게 사 본일 있을까? 내일 대화장에서나 한 몫
                벌어야겠네."&nbsp;
                <br /><br />"오늘밤은&nbsp;밤을&nbsp;새서&nbsp;걸어야&nbsp;될걸."&nbsp; <br /><br />"달이&nbsp;뜨렷다?"&nbsp;
                <br /><br />절렁절렁&nbsp;소리를&nbsp;내며&nbsp;조선달이&nbsp;그날&nbsp;산&nbsp;돈을&nbsp;따지는&nbsp;것을&nbsp;보고&nbsp;허생원은&nbsp;말뚝에서&nbsp;넓은&nbsp;휘장을&nbsp;걷고&nbsp;벌여놓았던&nbsp;물건을&nbsp;거두기&nbsp;시작하였다.&nbsp;무명필과&nbsp;주단바리가&nbsp;두고리짝에&nbsp;꼭&nbsp;찼다.&nbsp;멍석&nbsp;위에는&nbsp;천&nbsp;조각이&nbsp;어수선하게&nbsp;남았다.&nbsp;
                <br /><br />다른&nbsp;축들도&nbsp;벌써&nbsp;거진&nbsp;전들을&nbsp;걷고&nbsp;있었다.&nbsp;약빠르게&nbsp;떠나는&nbsp;패도&nbsp;있었다.&nbsp;어물장수도,&nbsp;땜쟁이도,&nbsp;엿장수도,&nbsp;생강장수도,&nbsp;꼴들이&nbsp;보이지&nbsp;않았다.&nbsp;내일은&nbsp;진부와&nbsp;대화에&nbsp;장이&nbsp;선다.&nbsp;축들은&nbsp;그&nbsp;어느&nbsp;쪽으로든지&nbsp;밤을&nbsp;새며&nbsp;육칠십리&nbsp;밤길을&nbsp;타박거리지&nbsp;않으면&nbsp;안된다.&nbsp;장판은&nbsp;잔치&nbsp;뒷마당같이&nbsp;어수선하게&nbsp;벌어지고&nbsp;술집에서는&nbsp;싸움이&nbsp;터져&nbsp;있었다.&nbsp;주정꾼&nbsp;욕지거리에&nbsp;섞여&nbsp;계집의&nbsp;앙칼진&nbsp;목소리가&nbsp;찢어졌다.&nbsp;장날&nbsp;저녁은&nbsp;정해&nbsp;놓고&nbsp;계집의&nbsp;고함소리로&nbsp;시작되는&nbsp;것이다.&nbsp;
              </p>
              <p style="font-size: 1.12em; text-align: justify;" data-ke-size="size16">&nbsp;</p>
              <p style="font-size: 1.12em; text-align: justify;" data-ke-size="size16">
                <br />"생원,&nbsp;시침을&nbsp;떼두&nbsp;다아네......&nbsp;충주집&nbsp;말야."&nbsp;
                <br /><br />계집&nbsp;목소리로&nbsp;문득&nbsp;생각&nbsp;난&nbsp;듯이&nbsp;조선달은&nbsp;비죽이&nbsp;웃는다.&nbsp;
                <br /><br />"화중지병이지.&nbsp;연소패들을&nbsp;적수로&nbsp;하구야&nbsp;대거리가&nbsp;돼야&nbsp;말이지."&nbsp;
                <br /><br />"그렇지두&nbsp;않을&nbsp;걸.&nbsp;축들이&nbsp;사족을&nbsp;못쓰는&nbsp;것두&nbsp;사실은&nbsp;사실이나,&nbsp;아무리&nbsp;그렇다.&nbsp;군&nbsp;해두&nbsp;왜&nbsp;그&nbsp;동이&nbsp;말일세.&nbsp;감쪽같이&nbsp;충줏집을&nbsp;후린&nbsp;눈치거든."&nbsp;
                <br /><br />"무어&nbsp;그&nbsp;애숭이가&nbsp;?&nbsp;물건&nbsp;가지고&nbsp;나꾸었나부지.&nbsp;착실한&nbsp;녀석인&nbsp;줄&nbsp;알았더니."&nbsp;
                <br /><br />"그&nbsp;길만은&nbsp;알&nbsp;수&nbsp;있나.....&nbsp;궁리&nbsp;말구&nbsp;가보세나&nbsp;그려.&nbsp;내&nbsp;한&nbsp;턱&nbsp;씀세."&nbsp;
                <br /><br />그다지 마음이 당기지 않는 것을 좇아갔다. 허생원은 계집과는 연분이 멀었다.&nbsp;
                <br />얼음뱅이&nbsp;상판을&nbsp;쳐들고&nbsp;대어설&nbsp;숫기는&nbsp;없었으나,&nbsp;계집&nbsp;편에서&nbsp;정을&nbsp;보낸&nbsp;일도&nbsp;없었고,&nbsp;쓸쓸하고&nbsp;뒤틀린&nbsp;반생이었다.&nbsp;충줏집을&nbsp;생각만&nbsp;하여도&nbsp;철없이&nbsp;얼굴이&nbsp;붉어지고,&nbsp;발밑이&nbsp;떨리고&nbsp;그&nbsp;자리에&nbsp;소스라쳐&nbsp;버린다.&nbsp;충줏집&nbsp;문을&nbsp;들어서서&nbsp;술좌석에서&nbsp;짜장&nbsp;동이를&nbsp;만났을&nbsp;때에는&nbsp;어찌&nbsp;된&nbsp;서슬인지&nbsp;발끈&nbsp;화가&nbsp;나&nbsp;버렸다.&nbsp;상&nbsp;위에&nbsp;붉은&nbsp;얼굴을&nbsp;쳐들고&nbsp;제법&nbsp;계집과&nbsp;농탕치는&nbsp;것을&nbsp;보고서야&nbsp;견딜&nbsp;수&nbsp;없었던&nbsp;것이다.&nbsp;녀석이&nbsp;제법&nbsp;난질꾼인데,&nbsp;꼴사납다.&nbsp;머리에&nbsp;피도&nbsp;안마른&nbsp;녀석이&nbsp;낮부터&nbsp;술&nbsp;처먹고&nbsp;계집과&nbsp;농탕이야.장돌뱅이&nbsp;망신만&nbsp;시키고&nbsp;돌아다니누나.&nbsp;그&nbsp;꼴에&nbsp;우리들과&nbsp;한몫&nbsp;보자는&nbsp;셈이지.&nbsp;동이&nbsp;앞에&nbsp;막아서면서&nbsp;부터&nbsp;책망이었다.&nbsp;걱정두&nbsp;팔자요&nbsp;하는&nbsp;듯이&nbsp;빤히&nbsp;쳐다보는&nbsp;상기된&nbsp;눈망울에&nbsp;부딪칠&nbsp;때,&nbsp;결&nbsp;김에&nbsp;따귀를&nbsp;하나&nbsp;갈겨&nbsp;주지&nbsp;않고는&nbsp;배길&nbsp;수&nbsp;없었다.&nbsp;동이도&nbsp;화를&nbsp;쓰고&nbsp;팩하게&nbsp;일어서기는&nbsp;하였으나&nbsp;허생원은&nbsp;조금도&nbsp;동색하는&nbsp;법없이&nbsp;마음먹은&nbsp;대로&nbsp;다&nbsp;지껄였다.&nbsp;
                <br /><br /><br />어디서&nbsp;주워먹은&nbsp;선머슴인지는&nbsp;모르겠으나,&nbsp;네게도&nbsp;아비&nbsp;어미&nbsp;있겠지.&nbsp;그&nbsp;사나운&nbsp;꼴보면&nbsp;맘&nbsp;좋겠다.&nbsp;장사란&nbsp;탐탁하게&nbsp;해야&nbsp;되지.&nbsp;계집이&nbsp;다&nbsp;무어야&nbsp;나가라,&nbsp;냉큼&nbsp;꼴치워.&nbsp;
                <br /><br />그러나&nbsp;한&nbsp;마디도&nbsp;대거리하지&nbsp;않고&nbsp;하염없이&nbsp;나가는&nbsp;꼴을&nbsp;보려니,도리어&nbsp;측은히&nbsp;여겨졌다.&nbsp;아직도&nbsp;서름서름한&nbsp;사인데&nbsp;너무&nbsp;과하지&nbsp;않았을까&nbsp;하고&nbsp;마음이&nbsp;섬짓해졌다.&nbsp;주제도&nbsp;넘지,&nbsp;같은&nbsp;술손님이면서두&nbsp;아무리&nbsp;젊다구&nbsp;자식&nbsp;낳게&nbsp;된&nbsp;것을&nbsp;붙들고&nbsp;치고&nbsp;닦아셀&nbsp;것은&nbsp;무어야&nbsp;원.&nbsp;충줏집은&nbsp;입술을&nbsp;쭝긋하고&nbsp;술&nbsp;붓는&nbsp;솜씨도&nbsp;거칠었으나,&nbsp;젊은&nbsp;애들한테는&nbsp;그것이&nbsp;약이된다고&nbsp;하고&nbsp;그&nbsp;자리는&nbsp;조선달이&nbsp;얼버무려&nbsp;넘겼다.&nbsp;너&nbsp;녀석한테&nbsp;반했지,&nbsp;애숭이를&nbsp;빨면&nbsp;죄&nbsp;된다.&nbsp;한참&nbsp;법석을&nbsp;친&nbsp;후이다.&nbsp;담도&nbsp;생긴&nbsp;데다가&nbsp;웬일인지&nbsp;흠뻑&nbsp;취해&nbsp;보고&nbsp;싶은&nbsp;생각도&nbsp;있어서&nbsp;허생원은&nbsp;주는&nbsp;술잔이면&nbsp;거의&nbsp;다&nbsp;들이켰다.&nbsp;거나&nbsp;해짐을&nbsp;따라&nbsp;계집&nbsp;생각보다도&nbsp;동이의&nbsp;뒷일이&nbsp;한결같이&nbsp;궁금해졌다.&nbsp;내&nbsp;꼴에&nbsp;계집을&nbsp;가로채서는&nbsp;어떡헐&nbsp;작정이었누&nbsp;하고,&nbsp;어리석은&nbsp;꼬락서니를&nbsp;모질게&nbsp;책망하는&nbsp;마음도&nbsp;한편에&nbsp;있었다.&nbsp;그렇기&nbsp;때문에,얼마나&nbsp;지난&nbsp;뒤인지&nbsp;동이가&nbsp;헐레벌떡거리며&nbsp;황급히&nbsp;부르러&nbsp;왔을&nbsp;때에는,&nbsp;마시던&nbsp;잔을&nbsp;그&nbsp;자리에&nbsp;던지고&nbsp;정신없이&nbsp;허덕이며&nbsp;충주집을&nbsp;뛰어나간&nbsp;것이었다.&nbsp;
                <br /><br /><br />"생원&nbsp;당나귀가&nbsp;바를&nbsp;끊구&nbsp;야단이예요."&nbsp;
                <br /><br />"각다귀들&nbsp;장난이지&nbsp;필연코."&nbsp;
                <br /><br />짐승이도&nbsp;짐승이려니와&nbsp;동이의&nbsp;마음씨가&nbsp;가슴을&nbsp;울렸다.&nbsp;뒤를&nbsp;따라&nbsp;장판을&nbsp;달음질하려니&nbsp;거슴츠레한&nbsp;눈이&nbsp;뜨거워질&nbsp;것&nbsp;같다.&nbsp;
                <br /><br />"부락스런&nbsp;녀석들이라&nbsp;어쩌는수&nbsp;있어야죠."&nbsp;
                <br /><br />"나귀를&nbsp;몹시&nbsp;구는&nbsp;녀석들은&nbsp;그냥&nbsp;두지&nbsp;않을걸."&nbsp;
                <br /><br />반평생을&nbsp;같이&nbsp;지내온&nbsp;짐승이었다.&nbsp;같은&nbsp;주막에서&nbsp;잠자고&nbsp;같은&nbsp;달빛에&nbsp;젖으면서&nbsp;장에서&nbsp;장으로&nbsp;걸어다니는&nbsp;동안에&nbsp;이십년의&nbsp;세월이&nbsp;사람과&nbsp;짐승을&nbsp;함께&nbsp;늙게&nbsp;하였다.&nbsp;가스러진&nbsp;목&nbsp;뒤&nbsp;털은&nbsp;주인의&nbsp;머리털과도&nbsp;같이&nbsp;바스러지고,개진개진&nbsp;젖은&nbsp;눈은&nbsp;주인의&nbsp;눈과&nbsp;같이&nbsp;눈꼽을&nbsp;흘렸다.&nbsp;몽당비처럼&nbsp;짧게&nbsp;슬리운&nbsp;꼬리는&nbsp;파리를&nbsp;쫓으려고&nbsp;기껏&nbsp;휘저어&nbsp;보아야&nbsp;벌써&nbsp;다리까지는&nbsp;닿지&nbsp;않았다.&nbsp;닳아없어진&nbsp;굽을&nbsp;몇&nbsp;번이나&nbsp;도려내고&nbsp;새&nbsp;철을&nbsp;신겼는지&nbsp;모른다.&nbsp;굽은&nbsp;벌써&nbsp;더&nbsp;자라나기는&nbsp;틀렸고&nbsp;닳아버린&nbsp;철&nbsp;사이로는&nbsp;피가&nbsp;빼짓이&nbsp;흘렀다.&nbsp;냄새만&nbsp;맡고도&nbsp;주인을&nbsp;분간하였다.&nbsp;호소하는&nbsp;목소리로&nbsp;야단스럽게&nbsp;울며&nbsp;반겨한다.&nbsp;
                <br /><br /><br />어린아이를&nbsp;달래듯이&nbsp;목덜미를&nbsp;어루만져&nbsp;주니&nbsp;나귀는&nbsp;코를&nbsp;벌름거리고&nbsp;입을&nbsp;투르르거렸다.&nbsp;콧물이&nbsp;튀었다.&nbsp;허생원은&nbsp;짐승&nbsp;때문에&nbsp;속도&nbsp;무던히는&nbsp;썩었다.&nbsp;아이들의&nbsp;장난이&nbsp;심한&nbsp;눈치여서&nbsp;땀&nbsp;밴&nbsp;몸둥아리가&nbsp;부들부들&nbsp;떨리고&nbsp;좀체&nbsp;흥분이&nbsp;식지&nbsp;않는&nbsp;모양이었다.&nbsp;굴레가&nbsp;벗어지고&nbsp;안장도&nbsp;떨어졌다.&nbsp;요&nbsp;몹쓸&nbsp;자식들,&nbsp;하고&nbsp;허생원은&nbsp;호령을&nbsp;하였으나&nbsp;패들은&nbsp;벌써&nbsp;줄행랑을&nbsp;논&nbsp;뒤요&nbsp;몇&nbsp;남지&nbsp;않은&nbsp;아이들이&nbsp;호령에&nbsp;놀래&nbsp;비슬비슬&nbsp;멀어졌다.&nbsp;
                <br /><br /><br />"&nbsp;우리들&nbsp;장난이&nbsp;아니우.&nbsp;암놈을&nbsp;보고&nbsp;저&nbsp;혼자&nbsp;발광이지."&nbsp;
                <br /><br />코흘리개&nbsp;한&nbsp;녀석이&nbsp;멀리서&nbsp;소리를&nbsp;쳤다.&nbsp;
                <br /><br />"고&nbsp;녀석&nbsp;말투가.-----"&nbsp;
                <br /><br />"김첨지&nbsp;당나귀가&nbsp;가&nbsp;버리니까&nbsp;온통&nbsp;흙을&nbsp;차고&nbsp;거품을&nbsp;흘리면서&nbsp;미친소같이&nbsp;날뛰는걸.&nbsp;꼴이&nbsp;우스워&nbsp;우리는&nbsp;보고만&nbsp;있었다우.&nbsp;배를&nbsp;좀&nbsp;보지."&nbsp;
                <br /><br />아이들은&nbsp;앙돌아진&nbsp;투로&nbsp;소리를&nbsp;치며&nbsp;깔깔&nbsp;웃었다.&nbsp;허생원은&nbsp;모르는&nbsp;결에&nbsp;낯이&nbsp;뜨거워졌다.&nbsp;뭇&nbsp;시선을&nbsp;막으려고&nbsp;그는&nbsp;짐승의&nbsp;배&nbsp;앞을&nbsp;가리워&nbsp;서지&nbsp;않으면&nbsp;안되었다.&nbsp;
              </p>
              <p style="font-size: 1.12em; text-align: justify;" data-ke-size="size16">
                <br />"늙은&nbsp;주제에&nbsp;암샘을&nbsp;내는&nbsp;셈야.&nbsp;저놈의&nbsp;짐승이."&nbsp;
                <br /><br />아이의&nbsp;웃음소리에&nbsp;허생원은&nbsp;주춤하면서&nbsp;기어코&nbsp;견딜&nbsp;수&nbsp;없어&nbsp;채칙을&nbsp;들더니&nbsp;아이들을&nbsp;쫓았다.&nbsp;
                <br /><br />"쫓으려거든&nbsp;쫓아보지.&nbsp;왼손잡이가&nbsp;사람을&nbsp;때려."&nbsp;
                <br /><br /><br />줄달음에&nbsp;달아나는&nbsp;각다귀에는&nbsp;당하는&nbsp;재주가&nbsp;없었다.&nbsp;왼손잡이는&nbsp;아이&nbsp;하나도&nbsp;후릴수&nbsp;없다.&nbsp;그만&nbsp;채찍을&nbsp;던졌다.&nbsp;술기도&nbsp;돌아&nbsp;몸이&nbsp;유난스럽게&nbsp;화끈거렸다.&nbsp;
                <br /><br />"그만&nbsp;떠나세.&nbsp;녀석들과&nbsp;어울리다가는&nbsp;한이&nbsp;없어.&nbsp;장판의&nbsp;각다귀들이란&nbsp;어른보다도&nbsp;더&nbsp;무서운&nbsp;것들인걸."&nbsp;
                <br /><br />조선달과&nbsp;동이는&nbsp;각각&nbsp;제&nbsp;나귀에&nbsp;안장을&nbsp;얹고&nbsp;짐을&nbsp;싣기&nbsp;시작하였다.&nbsp;해가&nbsp;꽤&nbsp;많이&nbsp;기울어진&nbsp;모양이었다.&nbsp;
                <br /><br />드팀전&nbsp;장돌림을&nbsp;시작한&nbsp;지&nbsp;이십년이나&nbsp;되어도&nbsp;허생원은&nbsp;봉평장을&nbsp;빼논적은&nbsp;드물었다.&nbsp;충주,&nbsp;제천&nbsp;등의&nbsp;이웃&nbsp;군에도&nbsp;가고,&nbsp;멀리&nbsp;영남지방도&nbsp;헤매기는&nbsp;하였으나&nbsp;강릉&nbsp;쯤에&nbsp;물건&nbsp;하러&nbsp;가는&nbsp;외에는&nbsp;처음부터&nbsp;끝까지&nbsp;군내를&nbsp;돌아다녔다.&nbsp;닷새만큼씩의&nbsp;장날에는&nbsp;달보다도&nbsp;확실하게&nbsp;면에서&nbsp;면으로&nbsp;건너간다.&nbsp;고향이&nbsp;청주라고&nbsp;자랑삼아&nbsp;말하였으나&nbsp;고향에&nbsp;돌보러&nbsp;간&nbsp;일도&nbsp;있는&nbsp;것&nbsp;같지는&nbsp;않았다.&nbsp;장에서&nbsp;장으로&nbsp;가는&nbsp;길의&nbsp;아름다운&nbsp;강산이&nbsp;그대로&nbsp;그에게는&nbsp;그리운&nbsp;고향이었다.&nbsp;반날&nbsp;동안이나&nbsp;뚜벅뚜벅&nbsp;걷고&nbsp;장터있는&nbsp;마을에&nbsp;거의&nbsp;가까왔을&nbsp;때,&nbsp;거친&nbsp;나귀가&nbsp;한바탕&nbsp;우렁차게&nbsp;울면&nbsp;-&nbsp;더구나&nbsp;그것이&nbsp;저녁녘이어서&nbsp;등불들이&nbsp;어둠속에&nbsp;깜박거릴&nbsp;무렵이면,&nbsp;늘&nbsp;당하는&nbsp;것이건만&nbsp;허생원은&nbsp;변치&nbsp;않고&nbsp;언제든지&nbsp;가슴이&nbsp;뛰놀았다.&nbsp;
                <br /><br />젊은&nbsp;시절에는&nbsp;알뜰하게&nbsp;벌어&nbsp;돈&nbsp;푼이나&nbsp;모아&nbsp;본&nbsp;적도&nbsp;있기는&nbsp;있었으나,&nbsp;읍내에&nbsp;백중이&nbsp;열린&nbsp;해&nbsp;호탕스럽게&nbsp;놀고&nbsp;투전을&nbsp;하고&nbsp;하여&nbsp;사흘&nbsp;동안에&nbsp;다&nbsp;털어&nbsp;버렸다.&nbsp;
                <br /><br />나귀까지 팔게 된 판이었으나 애끊는 정분에 그것만은 이를 물고 단념하였다. 결국 도로아미타불로 장돌림을 다시 시작할 수 밖에는 없었다. 짐승을 데리고 읍내를 도망해
                나왔을 때에는, 너를 팔지
                않기 다행이었다고 길가에서 울면서 짐승의 등을 어루만졌던 것이었다. 빚을 지기 시작하니 재산을 모을염은 당초에 틀리고,간신히 입에 풀칠 하러 장에서 장으로 돌아다니게 되었다.&nbsp;
                <br /><br /><br />호탕스럽게&nbsp;놀았다고는&nbsp;하여도&nbsp;계집&nbsp;하나&nbsp;후려보지도&nbsp;못하였다.&nbsp;계집이란&nbsp;쌀쌀하고&nbsp;매정한&nbsp;것이었다.&nbsp;평생&nbsp;인연이&nbsp;없는&nbsp;것이라고&nbsp;신세가&nbsp;서글퍼졌다.&nbsp;일신에&nbsp;가까운&nbsp;것이라고는&nbsp;언제나&nbsp;변함없는&nbsp;한&nbsp;필의&nbsp;당나귀였다.&nbsp;
                <br /><br />그렇다고는 하여도 꼭 한번의 첫일을 잊을 수는 없었다. 뒤에도 처음에도 없는 단 한번의 괴이한 인연! 봉평에 다니기 시작한 젊은 시절의 일이었으나 그것을 생각할적만은
                그도 산 보람을
                느꼈다.&nbsp;
                <br /><br />"달밤이었으나&nbsp;어떻게&nbsp;해서&nbsp;그렇게&nbsp;됐는지&nbsp;지금&nbsp;생각해두&nbsp;도무지&nbsp;알&nbsp;수&nbsp;없어."&nbsp;
                <br /><br /><br />허생원은&nbsp;오늘밤도&nbsp;또&nbsp;그&nbsp;이야기를&nbsp;끄집어&nbsp;내려는&nbsp;것이다.&nbsp;조선달은&nbsp;친구가&nbsp;된&nbsp;이래&nbsp;귀에&nbsp;못이&nbsp;박히도록&nbsp;들어왔다.&nbsp;그렇다고&nbsp;싫증을&nbsp;낼&nbsp;수도&nbsp;없었으나,&nbsp;허생원은&nbsp;시치미를&nbsp;떼고&nbsp;되풀이할&nbsp;대로는&nbsp;되풀이하고야&nbsp;말았다.&nbsp;
                <br /><br />
              </p>
              <p style="font-size: 1.12em; text-align: justify;" data-ke-size="size16">&nbsp;</p>
              <p style="font-size: 1.12em; text-align: justify;" data-ke-size="size16">&nbsp;</p>
              <p style="font-size: 1.12em; text-align: justify;" data-ke-size="size16">"달밤에는 그런 이야기가 격에 맞거든."&nbsp;
                <br /><br />
              </p>
              <p style="font-size: 1.12em; text-align: justify;" data-ke-size="size16">조선달 편을 바라는 보았으나 물론 미안해서가 아니라 달빛에
                감동하여서였다. 이지러는
                졌으나 보름을 갓 지난 달은 부드러운 빛을 흐뭇이 흘리고 있다. 대화까지는 팔십리의 밤길, 고개를 둘이나 넘고 개울을 하나 건너고 벌판과 산길을 걸어야 된다.&nbsp;
                <br /><br />길은 지금 긴
                산허리에 걸려 있다. 밤중을 지난 무렵인지 죽은 듯이 고요한 속에서 짐승같은 달의 숨소리가 손에 잡힐 듯이 들리며, 콩포기와 옥수수 잎새가 한층 달에 푸르게 젖었다. 산허리는 온통
                메밀밭이어서 피기 시작한 꽃이
                소금을 뿌린 듯이 흐뭇한 달빛에 숨이 막힐 지경이다. 붉은 대궁이 향기같이 애잔하고 나귀들의 걸음도 시원하다. 길이 좁은 까닭에, 세 사람은 나귀를 타고 외줄로 늘어섰다. 방울소리가
                시원스럽게 딸랑딸랑 메밀밭께로
                흘러간다. 앞장선 허생원의 이야기소리는 꽁무니에 선 동이에게는 확적히는 안들렸으나, 그는 그대로 서운한 제멋에 적적하지는 않았다.&nbsp; <br /><br />"장 선 꼭 이런 날
                밤이었네. 객주집 토방이란
                무더워서 잠이 들어야지. 밤중은 돼서 혼자 일어나 개울가에 목욕하러 나갔지. 봉평은 지금이나 그제나 마찬가지지. 보이는 곳마다 메밀밭이어서 개울가가 어디 없이 하얀 꽃이야. 돌밭에 벗어도
                좋을 것을, 달이 너무도
                밝은 까닭에 옷을 벗으러 물방앗간으로 들어가지 않았나, 이상한 일도 많지. 거기서 난데없는 성서방네 처녀와 마주쳤단 말이네. 봉평서야 제일가는 일색이었지 팔자에 있었나 부지."&nbsp;
                <br /><br /><br />아무렴!&nbsp;하고&nbsp;응답하면서&nbsp;말머리를&nbsp;아끼는&nbsp;듯이&nbsp;한참이나&nbsp;담배를&nbsp;빨&nbsp;뿐이었다.&nbsp;
                <br /><br />구수한&nbsp;자주빛&nbsp;연기가&nbsp;밤기운&nbsp;속에&nbsp;흘러서는&nbsp;녹았다.&nbsp;
                <br /><br />"날&nbsp;기다리는&nbsp;것은&nbsp;아니었으나&nbsp;그렇다고&nbsp;달리&nbsp;기다리는&nbsp;놈팽이가&nbsp;있은&nbsp;것두&nbsp;아니었네.&nbsp;처녀는&nbsp;울고&nbsp;있단&nbsp;말야.&nbsp;짐작은&nbsp;대고&nbsp;있으나&nbsp;성서방네는&nbsp;한창&nbsp;어려워서&nbsp;들고&nbsp;날&nbsp;판인&nbsp;때였지.&nbsp;한&nbsp;집안&nbsp;일이니&nbsp;딸에겐들&nbsp;걱정이&nbsp;없을리&nbsp;있겠나?&nbsp;좋은&nbsp;데만&nbsp;있으면&nbsp;시집도&nbsp;보내련만&nbsp;시집은&nbsp;죽어도&nbsp;싫다지&middot;&middot;&middot;&middot;&middot;&middot;.&nbsp;그러나&nbsp;처녀란&nbsp;울&nbsp;때&nbsp;같이&nbsp;정을&nbsp;끄는&nbsp;때가&nbsp;있을까!&nbsp;처음에는&nbsp;놀라기도&nbsp;한&nbsp;눈치였으나&nbsp;걱정&nbsp;있을&nbsp;때는&nbsp;누그러지기도&nbsp;쉬운&nbsp;듯해서&nbsp;이럭저럭&nbsp;이야기가&nbsp;되었네---&nbsp;생각하면&nbsp;무섭고도&nbsp;기막힌&nbsp;밤이었어."&nbsp;
              </p>
              <p style="font-size: 1.12em; text-align: justify;" data-ke-size="size16">&nbsp;</p>
              <p style="font-size: 1.12em; text-align: justify;" data-ke-size="size16">
                <br />"제천인지로&nbsp;줄행랑을&nbsp;놓은&nbsp;건&nbsp;그&nbsp;다음날이렷다."&nbsp;
                <br /><br />"다음&nbsp;장도막에는&nbsp;벌써&nbsp;온&nbsp;집안이&nbsp;사라진&nbsp;뒤였네.&nbsp;장판은&nbsp;소문에&nbsp;발끈&nbsp;뒤집혀&nbsp;오죽해야&nbsp;술집에&nbsp;팔려가기가&nbsp;상수라고&nbsp;처녀의&nbsp;뒷&nbsp;공론이&nbsp;자자들&nbsp;하단&nbsp;말이야.&nbsp;제천&nbsp;장판을&nbsp;몇&nbsp;번이나&nbsp;뒤졌겠나?&nbsp;하나&nbsp;처녀의&nbsp;꼴은&nbsp;꿩&nbsp;궈먹은&nbsp;자리야.&nbsp;첫날밤이&nbsp;마지막&nbsp;밤이었지.&nbsp;그때부터&nbsp;봉평이&nbsp;마음에&nbsp;든&nbsp;것이&nbsp;반평생을&nbsp;두고&nbsp;다니게&nbsp;되었네.&nbsp;평생인들&nbsp;잊을&nbsp;수&nbsp;있겠나."&nbsp;
                <br /><br />"수 좋았지. 그렇게 신통한 일이란 쉽지 않어. 항용 못난 것 얻어 새끼 낳고 걱정늘고, 생각만 해두 진저리가 나지&middot;&middot;&middot; 그러나
                늙으막바지까지 장돌뱅이로
                지내기도 힘드는 노릇 아닌가? 난 가을까지만 하구 이 생애와두 하직하려네. 대화쯤에 조그만 전방이나 하나 벌이구 식구들을 부르겠어. 사시장천 뚜벅뚜벅 걷기란 여간이래야지."&nbsp;
                <br /><br />"옛
                처녀나 만나면 같이나 살까&middot;&middot;&middot;. 난 거꾸러질 때까지 이 길 걷고 저 달 볼테야."&nbsp; <br /><br />산길을 벗어나니 큰 길로
                틔어졌다. 꽁무니의 동이도 앞으로
                나서 나귀들은 가로 늘어섰다.&nbsp;
                <br /><br />"총각두&nbsp;젊겠다,&nbsp;지금이&nbsp;한창&nbsp;시절이렷다.충주집에서는&nbsp;그만&nbsp;실수를&nbsp;해서&nbsp;그&nbsp;꼴이&nbsp;되었으나&nbsp;설게&nbsp;생각&nbsp;말게."&nbsp;
                <br /><br />
              </p>
              <p style="font-size: 1.12em; text-align: justify;" data-ke-size="size16">"처,천만에요. 되려 부끄러워요. 계집이란 지금 웬
                제격인가요. 자나 깨나
                어머니생각뿐인데요."&nbsp; <br /><br />허생원의 이야기로 실심해 한 끝이라 동이의 어조는 한 풀 수그러진 것이었다.&nbsp; <br /><br /></p>
              <p style="font-size: 1.12em; text-align: justify;" data-ke-size="size16">&nbsp;</p>
              <p style="font-size: 1.12em; text-align: justify;" data-ke-size="size16">"아비 어미란 말에 가슴이 터지는 것도 같았으나 제겐
                아버지가 없어요. 피붙이라고는
                어머니 하나뿐인 걸요."&nbsp; <br /><br />"돌아&nbsp;가셨나?"&nbsp; <br /><br />"당초부터&nbsp;없어요."&nbsp;
                <br /><br />"그런&nbsp;법이&nbsp;세상에......."&nbsp;
                <br /><br /><br />생원과&nbsp;선달이&nbsp;야단스럽게&nbsp;껄껄들&nbsp;웃으니,&nbsp;동이는&nbsp;정색하고&nbsp;우길&nbsp;수밖에&nbsp;없었다."&nbsp;
                <br /><br /><br />"부끄러워서&nbsp;말하지&nbsp;않으랴&nbsp;했으나&nbsp;정말이예요.&nbsp;제천&nbsp;촌에서&nbsp;달도&nbsp;차지&nbsp;않은&nbsp;아이를&nbsp;낳고&nbsp;어머니는&nbsp;집을&nbsp;쫓겨났죠.&nbsp;우스운&nbsp;이야기나,&nbsp;그러기&nbsp;때문에&nbsp;지금까지&nbsp;아버지&nbsp;얼굴도&nbsp;본&nbsp;적&nbsp;없고&nbsp;있는&nbsp;고장도&nbsp;모르고&nbsp;지내와요."&nbsp;
                <br /><br />고개가&nbsp;앞에&nbsp;놓인&nbsp;까닭에&nbsp;세&nbsp;사람은&nbsp;나귀를&nbsp;내렸다.&nbsp;둔덕은&nbsp;험하고&nbsp;입을&nbsp;벌리기도&nbsp;대견하여&nbsp;이야기는&nbsp;한동안&nbsp;끊겼다.&nbsp;나귀는&nbsp;건뜻하면&nbsp;미끄러졌다.&nbsp;허생원은&nbsp;숨이&nbsp;차&nbsp;몇번이고&nbsp;다리를&nbsp;쉬지&nbsp;않으면&nbsp;안되었다.&nbsp;고개를&nbsp;넘을&nbsp;때마다&nbsp;나이가&nbsp;알렷다.&nbsp;동이&nbsp;같이젊은&nbsp;축이&nbsp;그지없이&nbsp;부러웠다.&nbsp;땀이&nbsp;등을&nbsp;한바탕&nbsp;쭉&nbsp;씻어&nbsp;내렸다.&nbsp;
                <br /><br />고개&nbsp;너머는&nbsp;바로&nbsp;개울이었다.&nbsp;장마에&nbsp;흘러버린&nbsp;널다리가&nbsp;아직도&nbsp;걸리지&nbsp;않은채로&nbsp;있는&nbsp;까닭에&nbsp;벗고&nbsp;건너야&nbsp;되었다.고의를&nbsp;벗어&nbsp;띠로&nbsp;등에&nbsp;얽어매고&nbsp;반&nbsp;벌거숭이의&nbsp;우스꽝스런&nbsp;꼴로&nbsp;물속에&nbsp;뛰어들었다.&nbsp;금방&nbsp;땀을&nbsp;흘린&nbsp;뒤였으나&nbsp;밤&nbsp;물은&nbsp;뼈를&nbsp;찔렀다.&nbsp;
                <br /><br />"그래&nbsp;대체&nbsp;기르긴&nbsp;누가&nbsp;기르구?"&nbsp;
                <br /><br />"어머니는&nbsp;하는&nbsp;수&nbsp;없이&nbsp;의부를&nbsp;얻어가서&nbsp;술장사를&nbsp;시작했죠.&nbsp;술이&nbsp;고주래서&nbsp;전망나니예요.&nbsp;철들어서부터&nbsp;맞기&nbsp;시작한&nbsp;것이&nbsp;하룬들&nbsp;편할&nbsp;날&nbsp;있었을까&nbsp;어머니는&nbsp;말리다가&nbsp;채이고&nbsp;맞고&nbsp;칼부림을&nbsp;당하고&nbsp;하니&nbsp;집꼴이&nbsp;무어겠소.&nbsp;열여덟&nbsp;살&nbsp;때&nbsp;집을&nbsp;뛰쳐나서&nbsp;부터&nbsp;이&nbsp;짓이죠."&nbsp;
                <br /><br />"총각&nbsp;낫세론&nbsp;동이&nbsp;무던하다고&nbsp;생각했더니&nbsp;듣고&nbsp;보니&nbsp;딱한&nbsp;신세로군."&nbsp;
                <br /><br />물은&nbsp;깊어&nbsp;허리까지&nbsp;찼다.&nbsp;속&nbsp;물살도&nbsp;어지간히&nbsp;센데다가&nbsp;발에&nbsp;채이는&nbsp;돌맹이도&nbsp;미끄러워&nbsp;금시에&nbsp;훌칠&nbsp;듯하였다.&nbsp;나귀와&nbsp;조선달은&nbsp;재빨리&nbsp;거의&nbsp;건넜으나&nbsp;동이는&nbsp;허생원을&nbsp;붙드느라고&nbsp;두&nbsp;사람은&nbsp;헐씬&nbsp;떨어졌다.&nbsp;
                <br /><br /><br />"모친의&nbsp;친정은&nbsp;원래부터&nbsp;제천이었던가?"&nbsp;
                <br /><br />"웬걸요.&nbsp;시원스리&nbsp;말은&nbsp;안해&nbsp;주나&nbsp;봉평이라는&nbsp;것만은&nbsp;들었죠."&nbsp;
                <br /><br /><br />"봉평 ? 그래 그
                아비 성은 무엇이구 ?"&nbsp; <br /><br />"알&nbsp;수&nbsp;있나요.&nbsp;도무지&nbsp;듣지를&nbsp;못했으니까."&nbsp;
                <br /><br />"그,&nbsp;그렇겠지"&nbsp;하고&nbsp;중얼거리며&nbsp;흐려지는&nbsp;눈을&nbsp;까물까물&nbsp;하다가&nbsp;허생원은&nbsp;경망하게도&nbsp;발을&nbsp;빗디었다.&nbsp;
                <br /><br /><br />앞으로 꼬구라지기가 바쁘게 몸째 풍덩 빠져버렸다. 허비적거릴수록 몸은 걷잡을 수 없어 동이가 소리를 치며 가까이 왔을 때에는 벌써 퍽이나 흘렀었다. 옷째
                쫄딱 젖으니 물에 젖은
                개보다도 참혹한 꼴이었다. 동이는 물 속에서 어른을 해깝게 업을 수 있었다. 젖었다고는 하여도 여윈 몸이라 장정 등에는 오히려 가벼웠다.&nbsp;
                <br /><br />"이렇게까지&nbsp;해서&nbsp;안됐네.&nbsp;내&nbsp;오늘은&nbsp;정신이&nbsp;빠진&nbsp;모양이야."&nbsp;
                <br /><br />"염여하실&nbsp;것&nbsp;없어요."&nbsp; <br /><br />"그래 모친은 아비를 찾지는 않는 눈치지 ?"&nbsp;
                <br /><br />"늘&nbsp;한&nbsp;번&nbsp;만나고&nbsp;싶다고는&nbsp;하는데요."&nbsp;
                <br /><br />"지금&nbsp;어디&nbsp;계신가&nbsp;?"&nbsp;
                <br /><br />"의부와도&nbsp;갈라져&nbsp;제천에&nbsp;있죠.&nbsp;가을에는&nbsp;봉평에&nbsp;모셔&nbsp;오려고&nbsp;생각&nbsp;중인데요.&nbsp;이를&nbsp;물고&nbsp;벌면&nbsp;이럭저럭&nbsp;살아갈&nbsp;수&nbsp;있겠죠."&nbsp;
                <br /><br />"아무렴, 기특한 생각이야. 가을이랫다?"&nbsp; <br /><br />동이의 탐탁한 등어리가 뼈에 사무쳐 따뜻하다. 물을 다건넜을 때에는 도리어&nbsp;
                <br />서글픈&nbsp;생각에&nbsp;좀&nbsp;더&nbsp;업혔으면도&nbsp;하였다.&nbsp;
                <br /><br />"진종일&nbsp;실수만&nbsp;하니&nbsp;웬일이요?&nbsp;생원."&nbsp;
                <br /><br />조선달은&nbsp;바라보며&nbsp;기어이&nbsp;웃음이&nbsp;터졌다.&nbsp;
                <br /><br />"나귀야,&nbsp;나귀&nbsp;생각하다&nbsp;실족을&nbsp;했어.&nbsp;말&nbsp;안했던가?&nbsp;저&nbsp;꼴에&nbsp;제법&nbsp;새끼를&nbsp;얻었단&nbsp;말이지.&nbsp;읍내&nbsp;강릉집&nbsp;피마에게&nbsp;말일세.&nbsp;귀를&nbsp;쭝긋&nbsp;세우고&nbsp;달랑달랑&nbsp;뛰는&nbsp;것이&nbsp;나&nbsp;귀새끼&nbsp;같이&nbsp;귀여운&nbsp;것이&nbsp;있을까!&nbsp;그것&nbsp;보러&nbsp;나는&nbsp;일부러&nbsp;읍내를&nbsp;도는&nbsp;때가&nbsp;있&nbsp;다네."&nbsp;
                <br /><br />"사람을&nbsp;물에&nbsp;빠치울&nbsp;젠&nbsp;딴은&nbsp;대단한&nbsp;나귀새끼군!"&nbsp;
                <br /><br />허생원은&nbsp;젖은&nbsp;옷을&nbsp;웬만큼&nbsp;짜서&nbsp;입었다.&nbsp;이가&nbsp;덜덜&nbsp;갈리고&nbsp;가슴이&nbsp;떨리며&nbsp;몹시도&nbsp;추웠으나&nbsp;마음은&nbsp;알&nbsp;수&nbsp;없이&nbsp;둥실둥실&nbsp;가벼웠다.&nbsp;
                <br /><br />"주막까지&nbsp;부지런히들&nbsp;가세나.&nbsp;뜰에&nbsp;불을&nbsp;피우고,&nbsp;훗훗이&nbsp;쉬어.&nbsp;나귀에겐&nbsp;더운&nbsp;물&nbsp;을&nbsp;끓여주고.&nbsp;내일&nbsp;대화장&nbsp;보고는&nbsp;제천이다."&nbsp;
                <br /><br />"생원도&nbsp;제천으로......?"&nbsp;
                <br /><br />"오래간만에&nbsp;가보고&nbsp;싶어.&nbsp;동행하려나,&nbsp;동이?"&nbsp;
                <br /><br />나귀가&nbsp;걷기&nbsp;시작하였을&nbsp;때,&nbsp;동이의&nbsp;채찍은&nbsp;왼손에&nbsp;있었다.&nbsp;오랫동안&nbsp;아둑신이&nbsp;같이&nbsp;눈이&nbsp;어둡던&nbsp;허생원도&nbsp;요번만은&nbsp;동이의&nbsp;왼손잡이가&nbsp;눈에&nbsp;띄지&nbsp;않을&nbsp;수&nbsp;없었다.&nbsp;
              </p>
              <p style="font-size: 1.12em; text-align: justify;" data-ke-size="size16">&nbsp;</p>
              <p style="font-size: 1.12em; text-align: justify;" data-ke-size="size16">&nbsp;</p>
              <p style="font-size: 1.12em; text-align: justify;" data-ke-size="size16">
                <br />걸음도&nbsp;해깝고&nbsp;방울소리가&nbsp;밤&nbsp;벌판에&nbsp;한층&nbsp;청청하게&nbsp;울렸다.&nbsp;
              </p>
              <p style="font-size: 1.12em; text-align: justify;" data-ke-size="size16">&nbsp;</p>
              <p style="font-size: 1.12em; text-align: justify;" data-ke-size="size16"><br />달도&nbsp;어지간히&nbsp;기울어졌다.
                <br /><br /><br />
              </p>
              <hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style5" />
              <p style="font-size: 1.12em; text-align: justify;" data-ke-size="size16">
                <br /><br /><i>이&nbsp;아래&nbsp;글은,&nbsp;단어의&nbsp;뜻이&nbsp;풀어져&nbsp;있는&nbsp;'직역'&nbsp;버전입니다.&nbsp;원작&nbsp;문장의&nbsp;맛을&nbsp;느껴보셨다면,&nbsp;아래&nbsp;버전을&nbsp;읽어보세요.&nbsp;^^&nbsp;아예&nbsp;요즘&nbsp;소설처럼&nbsp;풀어진&nbsp;건&nbsp;맨&nbsp;밑에&nbsp;있습니다.
                </i><br /><br /><br />
              </p>
              <p style="font-size: 1.12em; text-align: justify;" data-ke-size="size16">&nbsp;</p>
              <p style="font-size: 1.12em; text-align: center;" data-ke-size="size16"><b>모밀꽃 필 무렵</b></p>
              <p style="font-size: 1.12em; text-align: right;" data-ke-size="size16"><b>이효석</b></p>
              <p style="font-size: 1.12em; text-align: justify;" data-ke-size="size16">&nbsp;</p>
              <p style="font-size: 1.12em; text-align: justify;" data-ke-size="size16">
                <br />&nbsp;여름&nbsp;장이란&nbsp;원래&nbsp;잘&nbsp;되지&nbsp;않아서&nbsp;해는&nbsp;쨍쨍하지만&nbsp;장이&nbsp;선&nbsp;곳은&nbsp;벌써&nbsp;쓸쓸하고&nbsp;더운&nbsp;햇발이,&nbsp;벌려놓은&nbsp;여러&nbsp;천막&nbsp;밑으로&nbsp;등줄기를&nbsp;훅훅&nbsp;덥고&nbsp;뜨끈뜨끈하게&nbsp;만든다.&nbsp;마을&nbsp;사람들은&nbsp;거의&nbsp;대부분&nbsp;돌아간&nbsp;뒤요,&nbsp;팔리지&nbsp;못한&nbsp;나무꾼&nbsp;무리가&nbsp;길거리에&nbsp;별일&nbsp;없이&nbsp;머뭇머뭇&nbsp;거리고&nbsp;있으나&nbsp;석유병이나&nbsp;받고&nbsp;고깃마리나&nbsp;사면&nbsp;족할&nbsp;이&nbsp;무리들을&nbsp;바라고&nbsp;언제까지든지&nbsp;버티고&nbsp;있을&nbsp;필요는&nbsp;없다.&nbsp;매우&nbsp;귀찮고&nbsp;염치없게&nbsp;날아드는&nbsp;파리떼도&nbsp;모기랑&nbsp;똑&nbsp;닮아서는&nbsp;크기는&nbsp;훨씬&nbsp;큰&nbsp;장난꾼&nbsp;각다귀들도&nbsp;귀찮다.&nbsp;어릴적&nbsp;걸린&nbsp;수두&nbsp;자국&nbsp;때문에&nbsp;얼굴이&nbsp;얼금얼금&nbsp;파인&nbsp;자국이&nbsp;있고&nbsp;왼손잡이인&nbsp;허선생,&nbsp;이&nbsp;책에서는&nbsp;허생원이라&nbsp;부르겠다.&nbsp;허생원,&nbsp;그는&nbsp;드팀전을&nbsp;담당하는&nbsp;장사꾼이었다.&nbsp;드팀전은&nbsp;무명,&nbsp;삼베,&nbsp;비단&nbsp;등&nbsp;온갖&nbsp;옷감&nbsp;뭉치들을&nbsp;둘둘&nbsp;말아&nbsp;파는&nbsp;곳을&nbsp;말하는데,&nbsp;사람이&nbsp;하도&nbsp;없으니&nbsp;장터를&nbsp;보던&nbsp;허생원은&nbsp;결국&nbsp;같은&nbsp;일을&nbsp;하는&nbsp;친구&nbsp;조씨,&nbsp;조선배를&nbsp;낚으려고&nbsp;시도했다.&nbsp;여기서는&nbsp;조선달이라고&nbsp;부르겠다.
                <br /><br /><br />"그만 할까?"
                <br /><br />"잘&nbsp;생각했네.&nbsp;봉평&nbsp;장에서&nbsp;한번이나&nbsp;만족스럽게&nbsp;물건을&nbsp;팔아&nbsp;본&nbsp;일&nbsp;있었을까.&nbsp;내일&nbsp;대화&nbsp;장에서나&nbsp;잔뜩&nbsp;벌어야겠네."
                <br /><br />"오늘&nbsp;밤은&nbsp;밤을&nbsp;새서&nbsp;걸어야&nbsp;될걸." <br /><br />"달이&nbsp;뜨겠구만."
                <br /><br />절렁절렁&nbsp;소리를&nbsp;내며&nbsp;조선달이&nbsp;그&nbsp;날&nbsp;번&nbsp;돈을&nbsp;따지는&nbsp;것을&nbsp;보고&nbsp;허생원은&nbsp;말뚝에서&nbsp;넓은&nbsp;천막을&nbsp;걷고&nbsp;벌여놓았던&nbsp;물건을&nbsp;거두기&nbsp;시작하였다.&nbsp;무명&nbsp;천과&nbsp;주단&nbsp;몇&nbsp;킬로그램&nbsp;커다란&nbsp;상자&nbsp;두&nbsp;개에&nbsp;꼭&nbsp;찼다.&nbsp;멍석&nbsp;위에는&nbsp;천&nbsp;조각이&nbsp;정신없이&nbsp;지저분하게&nbsp;남았다.
                <br /><br /><br />다른&nbsp;무리들도&nbsp;벌써&nbsp;거의&nbsp;장사를&nbsp;정리하고&nbsp;있었다.&nbsp;얄밉도록&nbsp;재빠르게&nbsp;떠나는&nbsp;무리도&nbsp;있었다.&nbsp;생선장수도&nbsp;구멍난&nbsp;냄비를&nbsp;고쳐주는&nbsp;땜장이도&nbsp;엿장수도&nbsp;생강장수도&nbsp;모습들이&nbsp;보이지&nbsp;않았다.&nbsp;내일은&nbsp;강원도&nbsp;평창의&nbsp;두&nbsp;지역,&nbsp;진부와&nbsp;대화에&nbsp;장이&nbsp;선다.&nbsp;먼저&nbsp;간&nbsp;무리들은&nbsp;그&nbsp;어느&nbsp;쪽으로든지&nbsp;밤을&nbsp;새며&nbsp;육칠십&nbsp;리&nbsp;밤길을&nbsp;힘없이&nbsp;천천히&nbsp;걸어가지&nbsp;않으면&nbsp;안&nbsp;된다.장터마다&nbsp;돌아다니며&nbsp;물건을&nbsp;팔아&nbsp;돈벌어야&nbsp;하는&nbsp;걸&nbsp;장돌뱅이라&nbsp;부른다.&nbsp;장돌뱅이라면&nbsp;이&nbsp;지역&nbsp;저&nbsp;지역&nbsp;돌아다니는&nbsp;운명을&nbsp;피할&nbsp;수&nbsp;없다.&nbsp;장터는&nbsp;잔치&nbsp;뒷마당같이&nbsp;어수선하게&nbsp;되어있고&nbsp;술집에서는&nbsp;싸움이&nbsp;터져&nbsp;있었다.&nbsp;술취한&nbsp;놈&nbsp;욕설에&nbsp;섞여&nbsp;계집의&nbsp;몹시&nbsp;악을&nbsp;쓰며&nbsp;덤벼드는&nbsp;목소리가&nbsp;찢어졌다.&nbsp;장날&nbsp;저녁은&nbsp;늘&nbsp;계집의&nbsp;고함&nbsp;소리로&nbsp;시작되는&nbsp;것이다.
                <br /><br /><br />"허선생, 시침을 떼두 다 아네&hellip;&hellip; 충주에 사는 그 여인.. 말야."
                <br /><br />충주에&nbsp;사는&nbsp;여인을&nbsp;충줏댁이라&nbsp;부르던&nbsp;조선달은&nbsp;계집&nbsp;목소리를&nbsp;듣고&nbsp;갑자기&nbsp;생각난&nbsp;듯이&nbsp;허생원을&nbsp;보며&nbsp;웃는다.
                <br /><br />"화중지병(그림의&nbsp;떡)이지.&nbsp;나도&nbsp;관심이야&nbsp;있지만&nbsp;젊은&nbsp;패거리들을&nbsp;라이벌로&nbsp;생각해봐야&nbsp;상대가&nbsp;되겠나."
                <br /><br />"그렇지두&nbsp;않을걸.&nbsp;무리들이&nbsp;어쩔&nbsp;줄&nbsp;몰라하는&nbsp;것두&nbsp;사실은&nbsp;사실이나,&nbsp;아무리&nbsp;그렇다곤&nbsp;해두&nbsp;왜&nbsp;그&nbsp;동이라는&nbsp;녀석말일세,&nbsp;감쪽같이&nbsp;충주댁을&nbsp;그럴듯한&nbsp;방법으로&nbsp;꼬셔낸&nbsp;것&nbsp;같거든."
                <br /><br />"뭐&nbsp;그&nbsp;어려보이는&nbsp;놈이?&nbsp;물건으로&nbsp;꼬셨나&nbsp;보지.&nbsp;착실한&nbsp;녀석인&nbsp;줄&nbsp;알았더니&hellip;"
                <br /><br />"자세히&nbsp;알&nbsp;수&nbsp;있겠나&hellip;&hellip;&nbsp;고민&nbsp;말구&nbsp;가보세나&nbsp;그려.&nbsp;내&nbsp;한턱&nbsp;쏘겠네."
                <br /><br />그다지&nbsp;가고싶은&nbsp;생각이&nbsp;들지&nbsp;않지만&nbsp;쫓아갔다.&nbsp;허생원은&nbsp;계집과는&nbsp;인연이&nbsp;별로&nbsp;없었다.&nbsp;얼금뱅이&nbsp;얼굴을&nbsp;쳐들고&nbsp;들이댈&nbsp;숫기도&nbsp;없는,&nbsp;수줍은&nbsp;사람이었고&nbsp;계집&nbsp;쪽에서&nbsp;맘에&nbsp;들어한&nbsp;적도&nbsp;없었으나,&nbsp;인생의&nbsp;절반을&nbsp;쓸쓸하고&nbsp;꼬이게&nbsp;살아왔다.&nbsp;충주댁을&nbsp;생각만&nbsp;해도&nbsp;철없이&nbsp;얼굴이&nbsp;붉어지고&nbsp;발밑이&nbsp;떨리고&nbsp;그&nbsp;자리에서&nbsp;부들부들&nbsp;떨어버린다.&nbsp;충주댁&nbsp;집&nbsp;문을&nbsp;열고&nbsp;들어가보니&nbsp;술집&nbsp;자리에서&nbsp;진짜로&nbsp;동이를&nbsp;만났을&nbsp;때에는&nbsp;날카로운&nbsp;기분이&nbsp;어찌&nbsp;들었는지&nbsp;모르겠지만&nbsp;발끈&nbsp;화가&nbsp;나버렸다.&nbsp;상&nbsp;위에서&nbsp;붉은&nbsp;얼굴을&nbsp;쳐들고&nbsp;제법&nbsp;계집과&nbsp;서로&nbsp;좋다고&nbsp;만지작거리며&nbsp;노는&nbsp;것을&nbsp;보고서야&nbsp;견딜&nbsp;수&nbsp;없었던&nbsp;것이다.&nbsp;녀석이&nbsp;제법&nbsp;술과&nbsp;여자에&nbsp;빠져&nbsp;하는&nbsp;짓이&nbsp;좋지&nbsp;않은&nbsp;인간이라&nbsp;꼴사납다.&nbsp;머리에&nbsp;피도&nbsp;안&nbsp;마른&nbsp;어린&nbsp;녀석이&nbsp;낮부터&nbsp;술&nbsp;처먹고&nbsp;계집과&nbsp;희롱질이야.&nbsp;장돌뱅이&nbsp;망신만&nbsp;시키고&nbsp;돌아다니는구먼.&nbsp;그&nbsp;꼴을&nbsp;하고는&nbsp;우리들과&nbsp;같이&nbsp;장사를&nbsp;해보자는&nbsp;이거야?&nbsp;동이&nbsp;앞에&nbsp;막아서면서부터&nbsp;꾸짖고&nbsp;타일렀다.&nbsp;별&nbsp;쓸데없는&nbsp;걱정을&nbsp;한다는&nbsp;듯이&nbsp;빤히&nbsp;쳐다보는&nbsp;흥분한&nbsp;눈망울을&nbsp;마주쳤을&nbsp;때,&nbsp;그&nbsp;참에&nbsp;뺨따귀를&nbsp;한&nbsp;대&nbsp;갈겨&nbsp;주지&nbsp;않고는&nbsp;참을&nbsp;수&nbsp;없었다.&nbsp;동이도&nbsp;화를&nbsp;내고&nbsp;팩&nbsp;일어서기는&nbsp;하였으나,&nbsp;허생원은&nbsp;조금도&nbsp;얼굴&nbsp;표정이&nbsp;변하지&nbsp;않고&nbsp;마음먹은&nbsp;대로&nbsp;말해버렸다&nbsp;
                <br /><br /><br />―&nbsp;어디서&nbsp;주워&nbsp;온&nbsp;덜&nbsp;자란&nbsp;놈인지는&nbsp;모르겠으나,&nbsp;너에게도&nbsp;아비&nbsp;어미&nbsp;있겠지.&nbsp;그&nbsp;사나운&nbsp;꼴&nbsp;보면&nbsp;퍽이나&nbsp;기분이&nbsp;좋겠다.&nbsp;장사란&nbsp;믿음직스럽게&nbsp;해야&nbsp;되지,&nbsp;계집이&nbsp;다&nbsp;무슨&nbsp;필요야,&nbsp;나가거라,&nbsp;니&nbsp;꼴&nbsp;볼일&nbsp;없게&nbsp;당장&nbsp;내&nbsp;앞에서&nbsp;사라져.
                <br /><br /><br />그러나&nbsp;한마디도&nbsp;말대꾸나&nbsp;반항하지&nbsp;않고&nbsp;가만히&nbsp;나가는&nbsp;꼴을&nbsp;보려니,&nbsp;도리어&nbsp;동이가&nbsp;안타깝게&nbsp;생각됐다.&nbsp;아직도&nbsp;서먹한&nbsp;사이인데&nbsp;너무&nbsp;심하게&nbsp;한&nbsp;게&nbsp;아닐까&nbsp;하고&nbsp;마음이&nbsp;섬뜩해졌다.&nbsp;내가&nbsp;오버를&nbsp;했구나.&nbsp;같은&nbsp;술손님이면서도&nbsp;아무리&nbsp;젊다고&nbsp;자식&nbsp;나이&nbsp;쯤&nbsp;되는&nbsp;것을&nbsp;붙들고&nbsp;치고&nbsp;몰아세우고&nbsp;나무랄&nbsp;것은&nbsp;무어야,&nbsp;원..&nbsp;충주댁은&nbsp;입술을&nbsp;쫑긋하고&nbsp;술&nbsp;따르는&nbsp;솜씨도&nbsp;거칠었으나,&nbsp;젊은애들한테는&nbsp;그렇게&nbsp;한&nbsp;번쯤&nbsp;혼나는&nbsp;것이&nbsp;약이&nbsp;된다고&nbsp;하며&nbsp;그&nbsp;자리는&nbsp;조&nbsp;선달이&nbsp;대충&nbsp;얼버무려&nbsp;넘겼다.
                <br /><br />너&nbsp;녀석한테&nbsp;반했지?&nbsp;어린&nbsp;젊은이를&nbsp;유혹하는&nbsp;것은&nbsp;죄&nbsp;짓는&nbsp;것이야.
                <br /><br />한참&nbsp;난리를&nbsp;친&nbsp;후이다.
                <br /><br />깡도&nbsp;생긴데다가&nbsp;웬일인지&nbsp;흠뻑&nbsp;취해&nbsp;보고&nbsp;싶은&nbsp;생각도&nbsp;있어서&nbsp;허&nbsp;생원은&nbsp;주는&nbsp;술잔마다&nbsp;거의&nbsp;다&nbsp;들이켰다.&nbsp;술에&nbsp;얼큰하게&nbsp;취하자&nbsp;계집&nbsp;생각보다도&nbsp;동이가&nbsp;나가서&nbsp;어떻게&nbsp;하고&nbsp;있을지&nbsp;한결같이&nbsp;궁금해졌다.&nbsp;내&nbsp;꼴에&nbsp;계집을&nbsp;뺏어서&nbsp;어떡하려고&nbsp;했나&nbsp;하고,&nbsp;어리석은&nbsp;내&nbsp;꼬락서니를&nbsp;냉정하게&nbsp;꾸중하는&nbsp;마음도&nbsp;한&nbsp;편에&nbsp;있었다.&nbsp;그러기&nbsp;때문에&nbsp;얼마나&nbsp;지났는지&nbsp;모르지만&nbsp;동이가&nbsp;헐레벌떡거리며&nbsp;황급히&nbsp;나를&nbsp;부르러&nbsp;왔을&nbsp;때에는,&nbsp;마시던&nbsp;잔을&nbsp;그&nbsp;자리에&nbsp;던지고&nbsp;정신&nbsp;없이&nbsp;허덕이며&nbsp;충주댁의&nbsp;집을&nbsp;뛰어나간&nbsp;것이었다.
                <br /><br /><br />"허생원&nbsp;아저씨&nbsp;당나귀가&nbsp;묶어놓은&nbsp;줄을&nbsp;끊구&nbsp;야단이&nbsp;났어요."
                <br /><br />"각다귀&nbsp;같은&nbsp;장난꾸러기&nbsp;짓이지&nbsp;분명히."
                <br /><br /><br />짐승도&nbsp;짐승이지만&nbsp;아까&nbsp;나&nbsp;때문에&nbsp;험한&nbsp;꼴을&nbsp;당해놓고&nbsp;나에게&nbsp;당나귀&nbsp;일을&nbsp;알려주러&nbsp;온&nbsp;동이의&nbsp;마음씨가&nbsp;가슴을&nbsp;울렸다.&nbsp;뒤를&nbsp;따라&nbsp;장터를&nbsp;달려가려니&nbsp;게슴츠레하게&nbsp;뜬&nbsp;눈이&nbsp;괜히&nbsp;눈물로&nbsp;뜨거워질&nbsp;것&nbsp;같다.
                <br /><br />"말려보려&nbsp;했지만&nbsp;말을&nbsp;잘&nbsp;듣지&nbsp;않는&nbsp;녀석들이라&nbsp;어쩔&nbsp;수&nbsp;없었어요."
                <br /><br />"나귀를&nbsp;몹시&nbsp;귀찮게&nbsp;구는&nbsp;녀석들은&nbsp;항상&nbsp;그냥&nbsp;두지&nbsp;않더라고."
              </p>
              <p style="font-size: 1.12em; text-align: justify;" data-ke-size="size16">&nbsp;</p>
              <p style="font-size: 1.12em; text-align: justify;" data-ke-size="size16"><br />허생원과 반평생을 같이 지내 온 짐승이었다. 같은
                술집에서 잠자고, 같은
                달빛에 젖으면서 장터에서 장터로 걸어다니는 동안에 이십 년의 세월이 사람과 짐승을 함께 늙게 하였다. 거칠거칠한 목 뒤 털은 주인 허생원의 머리털처럼 쉽게 조각조각 바스러지고, 없어보이게
                물기가 엉겨붙어있는 젖은
                눈은 주인의 눈과 같이 눈꼽이 흘렀다. 끝이 닳아서 털이 다 없어지고 자루만 남은 빗자루처럼 짧게 쓸려 말려올라간 꼬리는, 파리를 쫓으려고 기껏 휘저어 봤자 어차피 다리까지는 닿지
                않았다. 닳아 없어진 발굽을 몇
                번이나 도려내고 새 철로 신발을 신겼는지 모른다. 굽은 벌써 더 자라나기는 틀렸고 닳아 버린 철 사이로는 피가 조금씩 스며 흘렀다. 냄새만 맡고도 주인을 알아보았다. 간절히 부탁하는 듯한
                목소리로 야단스럽게 울며
                반가워한다.
                <br /><br />어린아이를&nbsp;달래듯이&nbsp;목덜미를&nbsp;어루만져&nbsp;주니&nbsp;나귀는&nbsp;코를&nbsp;벌름거리고&nbsp;입을&nbsp;약간&nbsp;벌린채&nbsp;투르르거렸다.&nbsp;콧물이&nbsp;튀었다.&nbsp;허생원은&nbsp;짐승&nbsp;때문에&nbsp;속도&nbsp;꽤&nbsp;썩었다.&nbsp;아이들의&nbsp;장난이&nbsp;심했는지&nbsp;땀에&nbsp;쩔은&nbsp;나귀의&nbsp;몸뚱어리가&nbsp;부들부들&nbsp;떨리고&nbsp;도저히&nbsp;흥분이&nbsp;식지&nbsp;않는&nbsp;모양이었다.&nbsp;목에&nbsp;묶은&nbsp;줄이&nbsp;벗겨지고&nbsp;허생원이&nbsp;올라타던&nbsp;안장도&nbsp;떨어졌다.&nbsp;요&nbsp;몹쓸&nbsp;자식들,&nbsp;하고&nbsp;허생원은&nbsp;버럭&nbsp;소리를&nbsp;질렀으나&nbsp;무리들은&nbsp;벌써&nbsp;도망을&nbsp;친&nbsp;뒤고,&nbsp;몇&nbsp;명&nbsp;남지&nbsp;않은&nbsp;아이들이&nbsp;소리에&nbsp;놀라&nbsp;조심조심&nbsp;힘없이&nbsp;멀어졌다.
                <br /><br />"우리가&nbsp;장난쳐서&nbsp;그런게&nbsp;아니에요.&nbsp;암놈을&nbsp;보고&nbsp;저&nbsp;혼자&nbsp;미친놈처럼&nbsp;저런거지."
                <br /><br />코흘리개&nbsp;한&nbsp;녀석이&nbsp;멀리서&nbsp;소리를&nbsp;쳤다. <br /><br />"고&nbsp;녀석&nbsp;말투가&nbsp;쯔쯔."
                <br /><br />"김씨&nbsp;당나귀가&nbsp;가버리니까&nbsp;하루종일&nbsp;흙을&nbsp;차고&nbsp;입에서&nbsp;거품을&nbsp;흘리면서&nbsp;미친&nbsp;소같이&nbsp;날뛰는걸.&nbsp;꼴이&nbsp;우스워&nbsp;우리는&nbsp;보고만&nbsp;있었다고요.&nbsp;배쪽을&nbsp;좀&nbsp;보시지.&nbsp;아저씨&nbsp;나귀&nbsp;고추가&nbsp;섰다고요."
                <br /><br />아이는&nbsp;못마땅하게&nbsp;삐진듯한&nbsp;투로&nbsp;소리를&nbsp;치며&nbsp;깔깔&nbsp;웃었다.&nbsp;허생원은&nbsp;자신도&nbsp;모르게&nbsp;얼굴이&nbsp;뜨거워졌다.&nbsp;마치&nbsp;긴&nbsp;시간&nbsp;여자와&nbsp;인연이&nbsp;없어서&nbsp;외로웠던&nbsp;자신의&nbsp;모습같았다.&nbsp;다른&nbsp;사람들&nbsp;시선을&nbsp;막으려고&nbsp;그는&nbsp;짐승의&nbsp;배&nbsp;앞을&nbsp;가려&nbsp;설&nbsp;수&nbsp;밖에&nbsp;없었다.
                <br /><br />"늙은&nbsp;주제에&nbsp;암컷에게&nbsp;흥분하는&nbsp;셈이야,&nbsp;저놈의&nbsp;짐승이." <br /><br />아이의 웃음소리에 허 생원은
                주춤하면서 결국 견딜 수
                없어 채찍을 들더니 아이를 내쫓았다. <br /><br />"쫓으려거든&nbsp;쫓아&nbsp;보지.&nbsp;왼손잡이가&nbsp;사람을&nbsp;때려."
                <br /><br />냉큼&nbsp;달아나는&nbsp;각다귀&nbsp;같은&nbsp;놈들에게는&nbsp;당할&nbsp;방법이&nbsp;없었다.&nbsp;왼손잡이는&nbsp;아이&nbsp;하나도&nbsp;휘둘러&nbsp;때릴&nbsp;수&nbsp;없다.&nbsp;결국&nbsp;채찍을&nbsp;던졌다.&nbsp;술기운도&nbsp;돌아&nbsp;몸이&nbsp;다른&nbsp;날과&nbsp;달리&nbsp;심각하게&nbsp;화끈거렸다.
                <br /><br />"그만&nbsp;떠나세.&nbsp;녀석들과&nbsp;어울리다가는&nbsp;끝이&nbsp;없어.&nbsp;장터의&nbsp;각다귀&nbsp;녀석들이란&nbsp;어른보다도&nbsp;더&nbsp;무서운&nbsp;것들인걸."
                <br />&nbsp; &nbsp; &nbsp;
                &nbsp;<br />조&nbsp;선달과&nbsp;동이는&nbsp;각각&nbsp;제&nbsp;나귀에&nbsp;안장을&nbsp;얹고&nbsp;짐을&nbsp;싣기&nbsp;시작하였다.&nbsp;해가&nbsp;꽤&nbsp;많이&nbsp;기울어진&nbsp;모양이었다.
                <br /><br />드팀전 장을 돌면 물건을 팔기 시작한 지 이십 년이나 되어도 허생원은 봉평 장을 빼논 적은 거의 없었다. 충주 제천 등의 이웃 쪽에도 가고, 멀리 영남 지방도
                헤매기는 하였으나 강릉 쯤에
                물건 하러 갈 때 빼고는 처음부터 끝까지 동네를 뱅뱅 돌아다녔다. 5일 동안 장날에는 달뜨는 속도보다도 빠르게 이 지역에서 저 지역으로 건너간다. 고향이 청주라고 자랑삼아 말하였으나
                고향을 살펴보러 간 일도 별로
                없었다. 장에서 장으로 가는 길의 아름다운 강산이 그대로 그에게는 그리운 고향이었다. 반날 동안이나 뚜벅뚜벅 걷고 장터 있는 마을에 거의 도착했을 때, 거친 나귀가 한바탕 우렁차게 울면
                ― 게다가 그것이 저녁
                쯤이어서 등불들이 어둠 속에 깜박거릴 무렵이면 늘 겪는 것이건만 허 생원은 변치 않고 언제든지 가슴이 두근거렸다.
                <br /><br />젊은&nbsp;시절에는&nbsp;알뜰하게&nbsp;벌어&nbsp;돈을&nbsp;꽤&nbsp;모아&nbsp;본&nbsp;적도&nbsp;있기는&nbsp;있었으나,&nbsp;동네에&nbsp;음력&nbsp;7월&nbsp;보름날&nbsp;기운넘치고&nbsp;절제하지&nbsp;못하며&nbsp;놀고&nbsp;투전이라는&nbsp;도박을&nbsp;하고&nbsp;또&nbsp;하여&nbsp;3일&nbsp;동안에&nbsp;돈을&nbsp;다&nbsp;잃었다.&nbsp;나귀까지&nbsp;팔게&nbsp;된&nbsp;판이었으나&nbsp;정이&nbsp;끓어넘치는&nbsp;애틋한&nbsp;마음에&nbsp;그것만은&nbsp;이를&nbsp;악물고&nbsp;단념하였다.&nbsp;결국&nbsp;애써&nbsp;번&nbsp;돈이&nbsp;효과없이&nbsp;도로&nbsp;날아가버려&nbsp;장돌이를&nbsp;다시&nbsp;시작할&nbsp;수밖에는&nbsp;없었다.&nbsp;짐승을&nbsp;데리고&nbsp;동네를&nbsp;도망쳐&nbsp;나왔을&nbsp;때에는&nbsp;너를&nbsp;팔지&nbsp;않기&nbsp;다행이었다고&nbsp;길가에서&nbsp;울면서&nbsp;짐승의&nbsp;등을&nbsp;어루만졌던&nbsp;것이었다.&nbsp;빚을&nbsp;지기&nbsp;시작하니&nbsp;재산을&nbsp;모을&nbsp;생각은&nbsp;할&nbsp;수도&nbsp;없었고,&nbsp;간신히&nbsp;입에&nbsp;풀칠을&nbsp;하며&nbsp;장에서&nbsp;장으로&nbsp;돌아다니게&nbsp;되었다.
                <br /><br />겁대가리없이&nbsp;시원시원하게&nbsp;놀았다고는&nbsp;해도&nbsp;계집&nbsp;하나&nbsp;옆에&nbsp;두지는&nbsp;못하였다.&nbsp;계집이란&nbsp;좀&nbsp;쌀쌀하고&nbsp;냉정한&nbsp;것이었다.&nbsp;평생&nbsp;인연이&nbsp;없는&nbsp;것이라고&nbsp;생각하니&nbsp;꼴이&nbsp;슬퍼졌다.&nbsp;자기&nbsp;몸에&nbsp;가까운&nbsp;것이라고는&nbsp;언제나&nbsp;변함&nbsp;없는&nbsp;한&nbsp;필의&nbsp;당나귀였다.
                <br /><br />그렇다고는&nbsp;하여도&nbsp;딱&nbsp;한&nbsp;번있었던&nbsp;첫&nbsp;일을&nbsp;잊을&nbsp;수는&nbsp;없었다.&nbsp;그&nbsp;뒤에도&nbsp;처음에도&nbsp;없는&nbsp;단&nbsp;한&nbsp;번의&nbsp;괴상하고&nbsp;묘한&nbsp;인연!&nbsp;봉평에&nbsp;다니기&nbsp;시작한&nbsp;젊은&nbsp;시절의&nbsp;일이었으나&nbsp;그것을&nbsp;생각할&nbsp;때만은&nbsp;그도&nbsp;살아있는&nbsp;보람을&nbsp;느꼈다.
                <br /><br />"달밤이었지만&nbsp;어떻게&nbsp;해서&nbsp;그렇게&nbsp;됐는지&nbsp;지금&nbsp;생각해도&nbsp;도무지&nbsp;알&nbsp;수&nbsp;없어."
                <br /><br />허 생원은 오늘 밤도 또 그 이야기를 꺼내려는 것이다. 조 선달은 그와 친구가 되고 나서 지겹도록 들어 왔다. 그렇다고 싫증을 낼 수도 없었으니 허 생원은 시침을
                떼고 반복할 만큼 반복하고
                말았다. <br /><br />"달밤에는&nbsp;그런&nbsp;이야기가&nbsp;딱&nbsp;어울리거든."
                <br /><br />조&nbsp;선달&nbsp;쪽을&nbsp;바라는&nbsp;보았으나&nbsp;물론&nbsp;미안해서가&nbsp;아니라&nbsp;달빛에&nbsp;감동하여서였다.&nbsp;한쪽이&nbsp;찌그러져있기는&nbsp;했으나&nbsp;보름을&nbsp;살짝&nbsp;지난&nbsp;달은&nbsp;부드러운&nbsp;빛을&nbsp;흐뭇하게&nbsp;흘리고&nbsp;있다.&nbsp;대화&nbsp;지역까지는&nbsp;칠십&nbsp;리의&nbsp;밤길,&nbsp;산고개를&nbsp;둘이나&nbsp;넘고&nbsp;개울을&nbsp;하나&nbsp;건너고&nbsp;벌판과&nbsp;산길을&nbsp;걸어야&nbsp;된다.&nbsp;산중턱에&nbsp;구부러져&nbsp;난&nbsp;길이다.&nbsp;밤을&nbsp;지난&nbsp;때인지&nbsp;죽은&nbsp;듯이&nbsp;고요한&nbsp;분위기에에서&nbsp;달이&nbsp;마치&nbsp;짐승처럼&nbsp;살아있는&nbsp;숨소리가&nbsp;손에&nbsp;잡힐&nbsp;듯이&nbsp;들리며,&nbsp;콩무더기와&nbsp;옥수수&nbsp;잎새가&nbsp;한층&nbsp;달에&nbsp;푸르게&nbsp;젖었다.&nbsp;산허리는&nbsp;온통&nbsp;메밀밭이어서&nbsp;피기&nbsp;시작한&nbsp;꽃이&nbsp;소금을&nbsp;뿌린&nbsp;듯이&nbsp;흐뭇한&nbsp;달빛에&nbsp;숨이&nbsp;막힐&nbsp;지경이다.&nbsp;붉은&nbsp;식물&nbsp;줄기&nbsp;향기같이&nbsp;그&nbsp;상태가&nbsp;여리여리하니&nbsp;슬픔을&nbsp;느끼게&nbsp;하여&nbsp;나귀들의&nbsp;걸음도&nbsp;시원하다.&nbsp;길이&nbsp;좁은&nbsp;까닭에&nbsp;세&nbsp;사람은&nbsp;나귀를&nbsp;타고&nbsp;한줄로&nbsp;가기&nbsp;시작했다.&nbsp;방울&nbsp;소리가&nbsp;시원스럽게&nbsp;딸랑딸랑&nbsp;메밀밭&nbsp;쪽으로&nbsp;흘러간다.&nbsp;앞장선&nbsp;허&nbsp;생원의&nbsp;이야기&nbsp;소리는&nbsp;뒤꽁무니에&nbsp;선&nbsp;동이에게는&nbsp;확실히는&nbsp;안&nbsp;들렸으나,&nbsp;그는&nbsp;그대로&nbsp;기분이&nbsp;상쾌해&nbsp;심심하지는&nbsp;않았다.
                <br /><br />"장이 열린 꼭 이런 날 밤이었네. 상인이 물건을 받아 사거나 파는 집 흙마루는 무더워서 잠을 잘 수가 있어야지. 밤중은 돼서 혼자 일어나 개울가에 목욕하러 나갔지.
                봉평 지역은 지금이나
                그때나 마찬가지로 보이는 곳마다 메밀밭이어서 개울가가 어딜가나 하얀 꽃이야. 돌밭에 벗어도 좋을 것을, 달이 너무도 밝은 까닭에 어쩐지 누군가 볼 것만 같아서 옷을 벗으러 물레방앗간으로
                들어간거야. 이상한 일도
                많아. 거기서 난데없는 성서방의 딸과 마주쳤단 말이네. 봉평에서 제일가는 빛나는 외모였지." <br /><br />"만날&nbsp;운명이었나보지." <br /><br />물론이지 하고
                답하면서 말을 아끼는 듯이
                한참이나 담배를 빨 뿐이었다. 구수한 자줏빛 연기가 밤기운 속에 흘러서는 녹았다.
                <br /><br />"날&nbsp;기다린&nbsp;것은&nbsp;아니었으나&nbsp;그렇다고&nbsp;딱히&nbsp;기다리는&nbsp;놈이&nbsp;있는&nbsp;것두&nbsp;아니었네.&nbsp;처녀는&nbsp;울고&nbsp;있었단&nbsp;말야.&nbsp;짐작은&nbsp;됐는데,&nbsp;성&nbsp;서방네는&nbsp;한창&nbsp;어려워서&nbsp;집에&nbsp;있는&nbsp;물건을&nbsp;팔고&nbsp;나가기에&nbsp;바빴던&nbsp;때였지.&nbsp;한&nbsp;집안&nbsp;일이니&nbsp;딸에게도&nbsp;걱정이&nbsp;없을&nbsp;리&nbsp;있겠나.&nbsp;좋은&nbsp;데만&nbsp;있으면&nbsp;시집이라도&nbsp;보낼텐데&nbsp;시집은&nbsp;죽어도&nbsp;싫다고하지&hellip;&hellip;&nbsp;그런데&nbsp;말야,&nbsp;처녀가&nbsp;울&nbsp;때처럼&nbsp;정을&nbsp;느끼는&nbsp;순간이&nbsp;잘&nbsp;없지.&nbsp;처음에는&nbsp;놀라기도&nbsp;한&nbsp;것&nbsp;같았는데&nbsp;걱정거리가&nbsp;있을&nbsp;때는&nbsp;두려움이&nbsp;사라지기도&nbsp;쉬운&nbsp;듯해.&nbsp;이래저래&nbsp;이야기가&nbsp;되었네&hellip;&hellip;&nbsp;생각하면&nbsp;무섭고도&nbsp;기막힌&nbsp;밤이었어."
                <br /><br />"제천인가 어딘가로 도망을 간 건 그 다음날이었나?" <br /><br />"다음 장날과 다음 장날 사잇기간에는 벌써 성서방네 집안이 사라진 뒤였네. 장터판은 소문에
                발칵 뒤집혀서, 어차피
                술집에 팔려갈 운명이라고 처녀의 뒷담화를 엄청들 하더란 말이야. 내가 제천 장터판을 몇 번이나 뒤졌겠나. 그러나 처녀의 모습은 꿩 구워먹은 자리처럼 아무것도 흔적없이 안 보이더군.
                첫날밤이 결국 마지막 밤이었지.
                그때부터 봉평 지역이 마음에 들어서 반평생을 두고 다니게 되었네. 평생토록 잊을 수 있었겠나." <br /><br />"자네가 재수 좋은거지. 그렇게 신기한 일이란 쉽지 않어. 항상
                평범하게 못난 짝 얻어 새끼
                낳고, 걱정거리 늘고 생각만 해두 지긋지긋하지&hellip;&hellip; 그러나 늙을 때까지 장돌뱅이로 지내기도 힘들지 않겠는가? 난 가을까지만 하구 이 일도 그만두려네. 대화 장터
                근처에 조그만 가게나 하나
                열고 식구들을 부르겠어. 사계절 내내 뚜벅뚜벅 걷기란 너무 힘든일이란말이야." <br /><br />"그때 그 추억의 처녀나 만나면 같이 살아볼까&hellip;&hellip; 난 죽을
                때까지 장돌뱅이로 살면서 이
                길 걷고 저 달을 볼 테야."
                <br /><br />산길을&nbsp;벗어나니&nbsp;큰길이&nbsp;나타났다.&nbsp;맨&nbsp;끝에&nbsp;따라오던&nbsp;동이도&nbsp;앞으로&nbsp;나서&nbsp;나귀들은&nbsp;옆으로&nbsp;늘어섰다.
                <br /><br />"총각두&nbsp;젊잖아,&nbsp;지금이&nbsp;한창&nbsp;좋을&nbsp;때인데.&nbsp;충주댁에서는&nbsp;그만&nbsp;실수를&nbsp;해서&nbsp;내가&nbsp;그렇게&nbsp;행동했으나&nbsp;너무&nbsp;서운하게&nbsp;생&nbsp;말게."
                <br /><br />"처,천만에요.&nbsp;오히려&nbsp;부끄러워요.&nbsp;계집이&nbsp;지금&nbsp;왜&nbsp;필요하겠어요.&nbsp;자나깨나&nbsp;어머니&nbsp;생각뿐인데요."
                <br /><br />허생원이 장터에서 했던 말로 힘이 좀 빠져있던 후라 동이의 말투는 꽤 기운없이 가라앉아있었다.
                <br /><br />"애비&nbsp;에미란&nbsp;말씀을&nbsp;아까&nbsp;하셔서&nbsp;가슴이&nbsp;터질&nbsp;것도&nbsp;같았지만&nbsp;제겐&nbsp;아버지가&nbsp;없어요.&nbsp;핏줄이라고는&nbsp;어머니&nbsp;하나뿐인걸요."
                <br /><br /><br />"돌아가셨나?" <br /><br /><br />"원래부터&nbsp;없어요."
                <br /><br />"그런&nbsp;법이&nbsp;세상에&nbsp;어디있겠나."
                <br /><br /><br />허&nbsp;생원과&nbsp;조&nbsp;선달이&nbsp;야단스럽게&nbsp;껄껄들&nbsp;웃으니,&nbsp;동이는&nbsp;정색하고&nbsp;우길&nbsp;수밖에&nbsp;없었다.
                <br /><br />"부끄러워서&nbsp;말하지&nbsp;않으려&nbsp;했으나&nbsp;정말이에요.&nbsp;제천&nbsp;지역에서&nbsp;낳을&nbsp;때가&nbsp;되기도&nbsp;전에&nbsp;일찍&nbsp;아이를&nbsp;낳고&nbsp;어머니는&nbsp;집을&nbsp;쫓겨났죠.&nbsp;우스운&nbsp;이야기지만&nbsp;그렇기&nbsp;때문에&nbsp;지금까지&nbsp;아버지&nbsp;얼굴도&nbsp;본&nbsp;적&nbsp;없고,&nbsp;어디&nbsp;있는지도&nbsp;모르고&nbsp;지내왔어요."
                <br /><br />산고개가&nbsp;앞에&nbsp;있어서&nbsp;세&nbsp;사람은&nbsp;나귀를&nbsp;잠시&nbsp;쉬게&nbsp;했다.&nbsp;산&nbsp;언덕은&nbsp;험하고&nbsp;입을&nbsp;벌리기도&nbsp;힘들정도로&nbsp;만만치&nbsp;않아서&nbsp;이야기는&nbsp;한동안&nbsp;끊겼다.&nbsp;나귀는&nbsp;툭하면&nbsp;미끄러졌다.&nbsp;허&nbsp;생원은&nbsp;숨이&nbsp;차&nbsp;몇&nbsp;번이고&nbsp;걸음을&nbsp;멈추고&nbsp;쉬어야&nbsp;했다.&nbsp;산고개를&nbsp;넘을&nbsp;때마다&nbsp;나이&nbsp;든게&nbsp;느껴졌다.&nbsp;동이&nbsp;같은&nbsp;젊은&nbsp;무리가&nbsp;너무나도&nbsp;부러웠다.&nbsp;땀이&nbsp;등을&nbsp;한바탕&nbsp;쪽&nbsp;씻어&nbsp;내릴만큼&nbsp;많이&nbsp;흘렀다.
                <br /><br />산고개&nbsp;너머는&nbsp;바로&nbsp;개울물이었다.&nbsp;장마에&nbsp;흘러가&nbsp;버린&nbsp;나무판&nbsp;다리가&nbsp;아직도&nbsp;고쳐지지&nbsp;않아서&nbsp;옷을&nbsp;벗고&nbsp;건너가야&nbsp;했다.&nbsp;남자들이&nbsp;더울&nbsp;때&nbsp;입는&nbsp;얇은&nbsp;바지를&nbsp;벗어&nbsp;띠로&nbsp;등에&nbsp;매고&nbsp;반&nbsp;벌거숭이의&nbsp;우스운&nbsp;꼴로&nbsp;물&nbsp;속에&nbsp;뛰어들었다.&nbsp;금방&nbsp;땀을&nbsp;흘린&nbsp;뒤였으나&nbsp;밤&nbsp;물은&nbsp;뼈를&nbsp;찌를&nbsp;것&nbsp;처럼&nbsp;차가웠다.
                <br /><br />"그래, 대체 자네를 길러준 건 누구였어?" <br /><br />"어머니는 하는 수 없이 새아버지와 결혼하고 술장사를 시작했죠. 술을 아주 지독하게 많이 마시는
                사람이라서 새아버지란 인간이
                완전히 개망나니예요. 철들면서부터 제가 새아버지에게 맞기 시작했으니 하루라도 편했겠습니까. 어머니는 그걸 말리다가 발에 채이고 맞고 새아버지가 칼을 휘두르는 행동도 겪곤 하니 집 꼴이
                어떻겠어요. 열여덟 살 때
                집을 뛰쳐나와서부터 이 장돌뱅이 짓을 하고 있죠." <br /><br />"총각이 나이치고는 굉장히 너그럽고 털털하다고 생각했더니 듣고 보니 안타까운 신세로군."
                <br /><br />물은 깊어서 허리까지 찼다.
                속 물살도 어지간히 센 데다가 발에 채이는 돌멩이도 미끄러워 금방 물살에 쓸려가버릴 것 같았다. 나귀와 조 선달은 재빨리 거의 건넜으나 동이는 허 생원을 붙잡아주느라고 두 사람은 훨씬
                멀리 떨어졌다.
                <br /><br />"어머니의&nbsp;고향은&nbsp;원래부터&nbsp;제천이었나?" <br /><br />"아이고 말도 마세요, 시원하게 말은 안 해주지만 봉평이라는 얘기는
                들었죠."
                <br /><br />"봉평?&nbsp;그래&nbsp;그&nbsp;아버지의&nbsp;성은&nbsp;뭔가?"
                <br /><br />"알&nbsp;수&nbsp;있겠습니까.&nbsp;도무지&nbsp;듣지를&nbsp;못했으니." <br /><br />"그,그렇겠지."
                <br /><br />하고&nbsp;중얼거리며&nbsp;어쩐지&nbsp;흐릿해지는&nbsp;눈을&nbsp;까물까물&nbsp;떴다&nbsp;감았다가&nbsp;허&nbsp;생원은&nbsp;어리석게도&nbsp;발을&nbsp;잘못&nbsp;디뎠다.&nbsp;앞으로&nbsp;고꾸라지자마자&nbsp;온몸이&nbsp;풍덩&nbsp;빠져&nbsp;버렸다.&nbsp;허우적거릴수록&nbsp;몸을&nbsp;어찌할&nbsp;수&nbsp;없어서&nbsp;동이가&nbsp;소리를&nbsp;치며&nbsp;가까이&nbsp;왔을&nbsp;때에는&nbsp;벌써&nbsp;많이&nbsp;흘러갔다.&nbsp;옷이&nbsp;쫄딱&nbsp;젖으니&nbsp;물에&nbsp;젖은&nbsp;개보다도&nbsp;딱한&nbsp;꼴이었다.&nbsp;동이는&nbsp;물&nbsp;속에서&nbsp;어른을&nbsp;가볍게&nbsp;업을&nbsp;수&nbsp;있었다.&nbsp;젖었다고는&nbsp;하여도&nbsp;비쩍&nbsp;마른&nbsp;몸이라&nbsp;덩치&nbsp;큰&nbsp;젊은이&nbsp;등에는&nbsp;오히려&nbsp;가벼웠다.
                <br /><br />"이렇게까지&nbsp;해서&nbsp;미안하네.&nbsp;내가&nbsp;오늘은&nbsp;정신이&nbsp;빠진&nbsp;모양이야." <br /><br />"걱정마세요."
                <br /><br />"그래&nbsp;어머니는&nbsp;아버지를&nbsp;찾지는&nbsp;않는&nbsp;것&nbsp;같던가?"
                <br /><br />"늘&nbsp;한번&nbsp;만나고&nbsp;싶다고는&nbsp;하는데요." <br /><br />"지금&nbsp;어디&nbsp;계신가?"
                <br /><br />"새아버지와도&nbsp;갈라져서&nbsp;제천에&nbsp;있죠.&nbsp;가을에는&nbsp;봉평에&nbsp;모셔&nbsp;오려고&nbsp;생각&nbsp;중인데요.&nbsp;이를&nbsp;악물고&nbsp;벌면&nbsp;어떻게든&nbsp;살아갈&nbsp;수&nbsp;있겠죠."
                <br /><br />"아무렴, 기특한 생각이야. 가을이라고 했나?"
                <br /><br />동이의&nbsp;믿음직스러운&nbsp;등허리가&nbsp;뼈에&nbsp;사무치도록&nbsp;따뜻하다.&nbsp;물을&nbsp;다&nbsp;건넜을&nbsp;때에는&nbsp;도리어&nbsp;서글픈&nbsp;생각에&nbsp;좀더&nbsp;업혀있기를&nbsp;바랐다.
                <br /><br />"하루종일&nbsp;실수만&nbsp;하니&nbsp;웬일이오,&nbsp;생원."
                <br /><br />조&nbsp;선달은&nbsp;허생원을&nbsp;바라보다&nbsp;결국&nbsp;웃음이&nbsp;터졌다. <br /><br /><br />"나귀 때문이야. 나귀
                생각하다가 발을 헛디뎠어. 말
                안 했던가. 저 늙은 꼴에 제법 암놈을 만나 새끼를 얻었단 말이지. 동네 강릉집 다큰 암놈 말에게 말일세. 귀를 쫑긋 세우고 달랑달랑 뛰는 것이 나귀 새끼같이 귀여운 게 없단 말이야.
                그걸 보러 나는 일부러
                동네를 도는 때가 있다네." <br /><br />"사람을 물에 빠뜨릴 정도면 아닌게 아니라 대단한 나귀 새끼구만." <br /><br />허생원은 젖은 옷을 웬만큼 짜서 입었다. 이가
                덜덜 갈리고 가슴이 떨리며
                몹시도 추웠으나 마음은 알 수 없이 둥실둥실 가벼웠다. <br /><br />"주막까지 부지런히들 가자고. 뜰에 불을 피우고 훈훈하게 쉬어. 나귀에겐 더운 물을 끓여 주고. 내일 대화
                장터 보고는 제천으로
                갈테다." <br /><br />"허생원&nbsp;자네도&nbsp;제천으로&nbsp;가나?" <br /><br />"오래간만에 가보고 싶어. 함께 가겠나, 동이?"
                <br /><br />나귀가&nbsp;걷기&nbsp;시작하였을&nbsp;때&nbsp;동이의&nbsp;채찍은&nbsp;왼손에&nbsp;쥐어져&nbsp;있었다.&nbsp;오랫동안&nbsp;어둠의&nbsp;귀신같이&nbsp;눈이&nbsp;어둡던&nbsp;허생원도&nbsp;요번만은&nbsp;동이의&nbsp;왼손잡이가&nbsp;눈에&nbsp;띌&nbsp;수밖에&nbsp;없었다.
                <br /><br />발걸음도 가볍고 방울 소리가 밤 벌판에 한층 맑고 시원하게 울렸다.
              </p>
              <p style="font-size: 1.12em; text-align: justify;" data-ke-size="size16">&nbsp;</p>
              <p style="font-size: 1.12em; text-align: justify;" data-ke-size="size16">
                <br /><br />달이&nbsp;평소보다&nbsp;더&nbsp;기울어졌다.
                <br /><br /><br /><br />
              </p>
            </q-scroll-area>
          </div>
          <div class="col" style="padding: 30px;">
            <div>
              <h4>이글의 핵심어를 찾아 써 보세요.</h4>
              <textarea style="width: 100%" rows="10"></textarea>
              <q-btn label="Alert" color="primary" @click="alert = true" />

            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>

    <!-- <q-footer reveal elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer> -->
  </q-layout>
  <q-dialog v-model="alert">
    <q-card style="width: 1200px!important; max-width:1200px!important">
      <q-card-section>
        <div class="text-h6">비문학 지문</div>
      </q-card-section>
      <q-card-section class="q-pt-none"
        style="color:#7ab4e7; width:100%;display: inline-flex;justify-content: center;font-size: 30px;">
        <div>Kread </div>
        <div style="background-color: #7ab4e7;color: white; border-radius: 16px;margin-left: 10px; padding:0 20px ;">
          1356</div>
      </q-card-section>
      <q-card-section class="q-pt-none" style="color:black; width:100%;justify-content: center;font-size: 30px;">
        <div style="text-align: center;">윤리의 기원</div>
        <div style="font-size: 16px;text-align: center;">
          이번지문을 읽기 위해 권장되는 시간은 <span style="color:#7ab4e7">1분 32초</span>입니다.</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <div class="hello" ref="chartdiv" style="width:100%"></div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import * as am5 from '@amcharts/amcharts5';
import * as am5wc from '@amcharts/amcharts5/wc';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { ref } from 'vue'


export default {
  name: 'HelloWorld',
  data() {
    return {
      value: 0.2,
      alert: ref(false)
    };
  },

  mounted() {
  },
  updated() {
    if (alert) {
      setTimeout(() => {
        let root = am5.Root.new(this.$refs.chartdiv);

        root.setThemes([am5themes_Animated.new(root)]);

        let series = root.container.children.push(am5wc.WordCloud.new(root, {
          maxCount: 100,
          minWordLength: 2,
          maxFontSize: am5.percent(35),
          text: `다문화학습자의 교육을 위해서는 한국어 교육이 이루어져야 기초학습 부진과 학습결손을 면할 수 있으므로 한국어능력향상이 우선 과제이며 이를 해결하기 위해서는 다문화학습자의 한국어 교육을 위한 교수학습 방법과 교재 개발이 필요하다.
      문학지문을 활용한 중학교 한국어 교육은 다문화학습자의 학습동기와 흥미를 유발해주는 효과적인 교수학습 방법이다. 가치 있는 문학 작품을 선별하여 중학생의 가치관 형성에 도움을 주는 다문화 관련 문학지문을 선정하고, 작품을 읽고 중요한 낱말의 뜻을 익혀 어휘력을 길러주어, 문장 속에서 단어의 다양한 의미를 이해하여 글의 내용을 파악하는 기초 한국어 교육을 실시한다.
      이와 같은 한국어 교육은 문학 작품을 감상하고 내면화하여 느낌을 말하고 글로 표현하는 과정 속에서 가치관 교육까지 아울러 가능하며, 문학지문 속에 담긴 이야기와 그림을 통해 나라마다 다양한 문화를 비교함으로써 쉽고 재미있는 다문화 교육을 병행할 수 있다.`,
        }));

        // Configure labels
        series.labels.template.setAll({
          paddingTop: 5,
          paddingBottom: 5,
          paddingLeft: 5,
          paddingRight: 5,
          fontFamily: "Courier New",
          fill: '#7ab4e7'
        });
      }, 500)
    }

  },
  beforeDestroy() {
    if (this.root) {
      this.root.dispose();
    }
  }
}
</script>

<style scoped>
.hello {
  width: 100%;
  height: 500px;
}

.read-the-docs {
  color: #888;
}
</style>
