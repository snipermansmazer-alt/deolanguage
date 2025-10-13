// Lingua Deonic Translator Script — Deonicized, deduped, sacred terms preserved
document.addEventListener("DOMContentLoaded",()=>{
  document.getElementById("translateBtn").addEventListener("click",translateText);
});

const dictionary={
  "abandon":"reliquon","able":"potenton","about":"de","above":"super","accept":"suscipion",
  "act":"agion","after":"post","again":"iterion","against":"contron","age":"aetation",
  "air":"aerion","all":"omnion","alone":"solon","altar":"altarion","always":"semprion",
  "am":"sum","among":"inter","ancient":"antiqion","angel":"angelion","anger":"irion",
  "animal":"animalon","apply":"applicareon","appear":"apparereon","armor":"loricion",
  "army":"exercition","ask":"rogareon","at":"ad","attack":"impetion","author":"auctorion",
  "awake":"expergiscion",

  "bad":"pravon","battle":"pugnion","beautiful":"pulcheron","because":"quia","become":"fierion",
  "before":"ante","beginning":"initium","believe":"credereon","beneath":"sub","bird":"avion",
  "birth":"nativition","black":"nigeron","blanket":"tegmenon","blessing":"benedictio",
  "blood":"sanguion","blocks":"lapidion","body":"carion","book":"liber","book-holy":"scripturion",
  "bread":"panion","brother":"fratrion","burn":"arderon","by":"per",

  "call":"vocareon","can":"possum","care":"curion","carry":"portareon","change":"mutareon",
  "child":"puer","city":"civiton","clear":"clarion","cloud":"nubeson","cold":"frigidon",
  "cold-iron":"ferrum-frigidon","come":"venireon","combat":"pugnareon","command":"imperion",
  "comrades":"socion","condemned":"damnation","conflict":"discordion","conquer":"vincereon",
  "convert":"convertereon","courage":"virtusion","create":"creareon","created":"creavion",
  "creation":"initum","craig":"craigus","cracked":"fracton","cried":"clamavion",
  "curse":"malediction","dark":"obscurion","dark-evil":"tenebrion","dark-spiritual":"malignion",
  "darkness":"tenebrae","days":"diesae","death":"mori","defend":"defendereon","deliver":"liberareon",
  "demons":"daemonae","deny":"negareon","desire":"desiderion","desperate":"desperation",
  "destiny":"fatum","destroy":"deleron","devil":"daemon","die":"mori","divine":"divinion",
  "doctor":"medicion","dog":"canion","door":"porta","dragon":"draco","dragon-great":"dracion-magnion",
  "duty":"officion",

  "earth":"terra","east":"oriention","eat":"ederon","elder":"seniorion","element":"elementon",
  "empire":"imperion","empty":"vacuum","end":"finition","enemy":"inimicion","energy":"virtuson",
  "enjoy":"gauderon","enter":"intrareon","envy":"invidion","equal":"aequalion","escape":"fugeron",
  "eternal":"aeternion","eternal-curse":"aeternion-malediction","evening":"vesperion",
  "every":"omnion","evil":"malon","example":"exemplion","exist":"exsistereon",
  "expedition":"expedition","eye":"oculion",

  "face":"facieson","faith":"fidelis","fallen":"lapsion","faction":"faction","father":"pater",
  "fear":"timorion","feast":"convivion","feel":"sentireon","field":"ageron","fight":"pugnareon",
  "film":"pelliculion","find":"invenireon","fire":"ignis","first":"primion","fish":"piscion",
  "flame":"flamion","floating":"fluctuansion","flesh":"caro","flower":"florion","follow":"sequion",
  "food":"cibus","for":"pro","forest":"silvion","forgive":"remittereon","form":"formion",
  "former":"priorion","freedom":"libertasion","friend":"amicus","friends":"amiciae",
  "from":"ex","fruit":"fructusion","future":"futurion",

  "gain":"lucrion","garden":"hortusion","gate":"porton","generation":"generation","gift":"donion",
  "give":"dareon","god":"deo","gold":"aurion","good":"beneon","good-divine":"benedicton",
  "grace":"gratia","gray":"canon","gray-hue":"canus-color","great":"magnion","grow":"crescereon",
  "guard":"custosion","guide":"duceron","habit":"consuetudion","hand":"manus","happy":"laetion",
  "hard":"durion","harvest":"messision","hate":"odion","have":"habereon","he":"ille","head":"capution",
  "heal":"sanareon","heart":"cor","heaven":"caelum","heavenly":"coelestion",
  "hell":"infernum","hell-spiritual":"gehennon","help":"auxilion","here":"hic","hero":"heron",
  "high":"altion","hill":"collision","his":"suus","holy":"sanction","holy-fire":"ignis-sacrion",
  "hold":"teneron","home":"domus","hope":"spesion","horse":"equusion","hour":"horion","house":"domion",
  "human":"homo","humanity":"humanitasion","humble":"humilion","hunger":"famion","hunt":"venarion",
  "idea":"notion","idol":"idolion","if":"si","image":"imagion","immortal":"immortalion",
  "important":"magnion","in":"in","increase":"augmention","initum":"initum",
  "initum-terra":"initum-terra","innocent":"innocension","inspire":"inspirareon",
  "invasion":"invasion","iron":"ferrum","is":"est","island":"insulion","it":"id",

  "joy":"gaudion","judge":"iudexion","justice":"iustition","keep":"servareon","kill":"occideron",
  "king":"rex","kingdom":"regnion","knowledge":"sciention",

  "land":"terron","language":"linguion","law":"lex","lead":"duceron","learn":"discereon",
  "leave":"relinquereon","led":"duxion","life":"viton","light":"lux","light-divine":"lux-sancton",
  "like":"similion","listen":"audireon","live":"viveron","longer":"diution","lord":"dominion",
  "lose":"amittereon","love":"amorion","love-divine":"caritasion","luck":"fortunion",
  "luesium":"luesium","made":"faction","man":"hominon","many":"multion","matter":"materion",
  "meal":"cibion","meat":"carune","memory":"memoriion","metal":"metallion","mind":"mension",
  "monsters":"monstrion","moon":"lunon","mori":"mori","mortal":"mortalion","mountain":"monsion",
  "move":"moveron","much":"multumon","music":"musicion","must":"debereon","mystery":"mysterion",

  "name":"nomenon","nation":"genson","nature":"naturion","need":"necessitasion",
  "never":"numquam","new":"novion","night":"noxion","no":"non","north":"septentrion",
  "nothing":"nihilion","now":"nunc","number":"numerion",

  "obedience":"oboediention","obey":"oboedireon","obscurus-silva":"obscurus-silva",
  "offer":"offerreon","office":"officion","off":"separion","old":"vetusion","once":"semel",
  "one":"unusion","only":"tantion","ones":"illion","open":"aperireon","order":"ordon",
  "ordum":"ordum","our":"noster","out":"foris","outraged":"iration","over":"super","own":"propriion",

  "pain":"dolor","parent":"parenion","part":"parsion","pass":"transireon","past":"praeterition",
  "pastoris":"pastoris","path":"semiton","patience":"patiention","peace":"paxion",
  "people":"populion","perfect":"perfecton","person":"personion","pillage":"diriperon",
  "place":"locusion","plant":"plantion","pleading":"supplicansion","pray":"orareon",
  "preach":"praedicarion","primitive":"rudision","prophet":"propheton",
  "prophets":"prophetae","protect":"protegeron","protecting":"protegenson","pure":"purion",
  "purpose":"proposition","queen":"reginion","quiet":"quieton","race":"gensaon","rain":"pluvion",
  "raise":"suscitarion","reach":"attingerion","read":"legereon","ready":"paratusion",
  "reason":"ration","redeem":"redimeron","repent":"paeniteron","rest":"requieson",
  "return":"redituson","reveal":"revelareon","reward":"praemion","righteous":"iuston",
  "ripped":"laceration","river":"flumenon","road":"viaron","rock":"petrion","rose":"rosion",
  "rule":"regulion","ruler":"rectorion",

  "sacred":"sacron","sacrifice":"sacrificion","safe":"tution","saint":"sanctionis",
  "salvation":"salvation","same":"idemon","sandstone":"arenarion","save":"servareon",
  "say":"diceron","school":"scholion","sea":"mareon","search":"quaereron","see":"videron",
  "seed":"semenon","seek":"peteron","self":"ipson","send":"mitteron","servant":"servion",
  "serve":"servireon","shadow":"umbrion","shall":"erit","shape":"formion","she":"illa",
  "sheep":"ovision","shepherd":"pastorion","shield":"scution","shine":"splenderon",
  "ship":"navision","short":"brevion","show":"monstrarion","silva":"silva","sin":"peccation",
  "sing":"canerion","sister":"sororion","sky":"caelion","slay":"interficerion",
  "sleep":"dormireon","small":"parvion","snow":"nixion","so":"ita","soft":"mollion",
  "soldier":"milesion","some":"aliquion","son":"filiusion","song":"canticion",
  "sorrow":"dolorae","soul":"animae","speak":"loqueron","spend":"consumeron","spirit":"spiritus",
  "spirits":"spirituae","split":"division","star":"stellion","stars":"stellae","steady":"stabilion",
  "stealing":"furarion","storm":"tempestation","strong":"fortion","sun":"solion","sweet":"dulcion",
  "sword":"gladion",

  "table":"menson","take":"caperon","teach":"docerion","teacher":"doctorion",
  "tear":"lacrimation","tell":"narrarion","temple":"templum","terra":"terra",
  "thank":"gratias-ageron","thanks":"gratiae","thanksgiving":"eulogia","their":"eorum",
  "them":"eos","then":"tunc","there":"ibi","they":"illi","thing":"resion","think":"cogitarion",
  "this":"hic","three":"tres","through":"per","time":"tempusion","to":"ad","together":"simul",
  "tongue":"linguion","town":"urbion","transformed":"mutation","tree":"arborion","true":"veron",
  "trust":"fiduciation","truth":"veritation","two":"duon",

  "under":"sub","understand":"intellegereon","unite":"unirion","universe":"universion",
  "until":"donec","up":"sur","upon":"super","use":"ution","used":"usitation","useful":"utilion",
  "valiant":"fortilis","valley":"vallision","value":"valorion","vengeance":"ultion",
  "verse":"versusion","very":"valde","victory":"victorion","virtue":"virtusion",
  "vision":"vision","visit":"visitarion","voice":"voxion","void":"vacuation","vita":"vita",

  "walk":"ambularion","war":"bellion","warm":"calidion","warned":"monuion","water":"aquion",
  "way":"via","we":"nos","weapon":"armion","west":"occidension","what":"quid","when":"quando",
  "where":"ubi","which":"quod","white":"albusion","who":"quision","whole":"totusion","why":"cur",
  "wild":"ferion","will":"voluntasion","wind":"vention","wisdom":"sapiention","woman":"muliera",
  "wonder":"miraculon","wondering":"wonderium","word":"verbum","work":"opusion",
  "world":"mundus","world-dark":"mundus-obscurion","worship":"adorarion","write":"scriberon",
  "wrong":"iniustion",

  "year":"annusion","yes":"ita-vere","you":"tu","young":"iuvenion","your":"tuus",
  "yekumalesh":"yekumalesh","zeal":"zelion","zealous":"zelation"
};

// Translator
function translateText(){
  const input=document.getElementById("inputWord").value.trim();
  const output=document.getElementById("output");
  if(!input){
    output.innerHTML="Please enter or paste text to translate.";
    return;
  }
  const cleaned=input.replace(/[.,!?;:()"']/g,"").replace(/\r?\n|\r/g,"\n");
  const words=cleaned.split(/\s+/);
  const translated=words.map(w=>dictionary[w.toLowerCase()]||`[${w}]`).join(" ");
  output.innerHTML=`<strong>Original Text:</strong>\n${input}\n\n<strong>Deonic Translation:</strong>\n${translated}`;
}
