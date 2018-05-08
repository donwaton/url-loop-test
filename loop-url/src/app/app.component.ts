import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Shares } from './domain/shares';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  i = 0;
  urlshare = "";
  shares: Shares[] = [
    {id:1,name:'SBOT'},
    {id:2,name:'DXTR'},
    {id:3,name:'TTNP'},
    {id:4,name:'XBIO'},
    {id:5,name:'EOLS'},
    {id:6,name:'CVM'},
    {id:7,name:'CWBR'},
    {id:8,name:'CASM'},
    {id:9,name:'TTPH'},
    {id:10,name:'DXR'},
    {id:11,name:'ATOS'},
    {id:12,name:'SRNE'},
    {id:13,name:'DARE'},
    {id:14,name:'OSUR'},
    {id:15,name:'ITCI'},
    {id:16,name:'DRAD'},
    {id:17,name:'SCPH'},
    {id:18,name:'VICL'},
    {id:19,name:'ACUR'},
    {id:20,name:'ODT'},
    {id:21,name:'LXRX'},
    {id:22,name:'ARWR'},
    {id:23,name:'EVOK'},
    {id:24,name:'EIGR'},
    {id:25,name:'AVGR'},
    {id:26,name:'RHE'},
    {id:27,name:'BCLI'},
    {id:28,name:'GTHX'},
    {id:29,name:'MEIP'},
    {id:30,name:'ELGX'},
    {id:31,name:'PLSE'},
    {id:32,name:'DERM'},
    {id:33,name:'AGRX'},
    {id:34,name:'NVIV'},
    {id:35,name:'NEO'},
    {id:36,name:'CSII'},
    {id:37,name:'RARE'},
    {id:38,name:'COOL'},
    {id:39,name:'SGRY'},
    {id:40,name:'PLXP'},
    {id:41,name:'ADMS'},
    {id:42,name:'NLNK'},
    {id:43,name:'ADVM'},
    {id:44,name:'HTGM'},
    {id:45,name:'AKAO'},
    {id:46,name:'TRXC'},
    {id:47,name:'BVX'},
    {id:48,name:'NVTA'},
    {id:49,name:'MLNT'},
    {id:50,name:'ALPN'},
    {id:51,name:'FBIOP'},
    {id:52,name:'ECYT'},
    {id:53,name:'ALNY'},
    {id:54,name:'ARMO'},
    {id:55,name:'TNDM'},
    {id:56,name:'KOOL'},
    {id:57,name:'AMS'},
    {id:58,name:'COLL'},
    {id:59,name:'KPTI'},
    {id:60,name:'RMTI'},
    {id:61,name:'BTAI'},
    {id:62,name:'FLGT'},
    {id:63,name:'DRNA'},
    {id:64,name:'VTVT'},
    {id:65,name:'CYTR'},
    {id:66,name:'XXII'},
    {id:67,name:'GHDX'},
    {id:68,name:'ARA'},
    {id:69,name:'ILMN'},
    {id:70,name:'CSU'},
    {id:71,name:'ZIOP'},
    {id:72,name:'MEDP'},
    {id:73,name:'MNLO'},
    {id:74,name:'RTIX'},
    {id:75,name:'HIIQ'},
    {id:76,name:'ARGS'},
    {id:77,name:'RCKT'},
    {id:78,name:'MDT'},
    {id:79,name:'PACB'},
    {id:80,name:'NVTR'},
    {id:81,name:'AYTU'},
    {id:82,name:'BCRX'},
    {id:83,name:'BLFS'},
    {id:84,name:'MYND'},
    {id:85,name:'INNT'},
    {id:86,name:'SAGE'},
    {id:87,name:'CATB'},
    {id:88,name:'CRY'},
    {id:89,name:'PAVM'},
    {id:90,name:'WMGI'},
    {id:91,name:'CYCCP'},
    {id:92,name:'TEAR'},
    {id:93,name:'ACAD'},
    {id:94,name:'OPK'},
    {id:95,name:'AGTC'},
    {id:96,name:'AKTX'},
    {id:97,name:'SYRS'},
    {id:98,name:'BPTH'},
    {id:99,name:'OCUL'},
    {id:100,name:'VKTX'},
    {id:101,name:'ITGR'},
    {id:102,name:'MRSN'},
    {id:103,name:'ATRA'},
    {id:104,name:'GKOS'},
    {id:105,name:'GBT'},
    {id:106,name:'CNAT'},
    {id:107,name:'PTX'},
    {id:108,name:'LMNX'},
    {id:109,name:'CFRX'},
    {id:110,name:'TXMD'},
    {id:111,name:'NTRA'},
    {id:112,name:'SYN'},
    {id:113,name:'GTXI'},
    {id:114,name:'NTLA'},
    {id:115,name:'PDLI'},
    {id:116,name:'ENTA'},
    {id:117,name:'ONCE'},
    {id:118,name:'PETS'},
    {id:119,name:'IVTY'},
    {id:120,name:'IMMU'},
    {id:121,name:'BIO-B'},
    {id:122,name:'SURF'},
    {id:123,name:'MNTA'},
    {id:124,name:'VTGN'},
    {id:125,name:'DEPO'},
    {id:126,name:'LJPC'},
    {id:127,name:'QHC'},
    {id:128,name:'PETX'},
    {id:129,name:'AKRX'},
    {id:130,name:'RGEN'},
    {id:131,name:'APRI'},
    {id:132,name:'PEN'},
    {id:133,name:'ABEO'},
    {id:134,name:'ONCS'},
    {id:135,name:'CDMO'},
    {id:136,name:'FATE'},
    {id:137,name:'LOXO'},
    {id:138,name:'NSTG'},
    {id:139,name:'HTBX'},
    {id:140,name:'MDCO'},
    {id:141,name:'GEN'},
    {id:142,name:'AXSM'},
    {id:143,name:'NK'},
    {id:144,name:'DVAX'},
    {id:145,name:'ARRY'},
    {id:146,name:'APLS'},
    {id:147,name:'AMAG'},
    {id:148,name:'CDXS'},
    {id:149,name:'VNDA'},
    {id:150,name:'PGNX'},
    {id:151,name:'HALO'},
    {id:152,name:'BPMX'},
    {id:153,name:'GNMK'},
    {id:154,name:'CARA'},
    {id:155,name:'CLRB'},
    {id:156,name:'HSKA'},
    {id:157,name:'ELOX'},
    {id:158,name:'KRYS'},
    {id:159,name:'ANTH'},
    {id:160,name:'CUTR'},
    {id:161,name:'ACHC'},
    {id:162,name:'ENZ'},
    {id:163,name:'AKBA'},
    {id:164,name:'OGEN'},
    {id:165,name:'ATRS'},
    {id:166,name:'KURA'},
    {id:167,name:'BABY'},
    {id:168,name:'MTNB'},
    {id:169,name:'DXCM'},
    {id:170,name:'MTEM'},
    {id:171,name:'SGEN'},
    {id:172,name:'OTIC'},
    {id:173,name:'TCMD'},
    {id:174,name:'ENSG'},
    {id:175,name:'CRBP'},
    {id:176,name:'CTXR'},
    {id:177,name:'GNCA'},
    {id:178,name:'THC'},
    {id:179,name:'SNGX'},
    {id:180,name:'XON'},
    {id:181,name:'FOLD'},
    {id:182,name:'SIEN'},
    {id:183,name:'EYEN'},
    {id:184,name:'IOVA'},
    {id:185,name:'ALGN'},
    {id:186,name:'CCXI'},
    {id:187,name:'RVNC'},
    {id:188,name:'VBIV'},
    {id:189,name:'XOMA'},
    {id:190,name:'MYOK'},
    {id:191,name:'CAPR'},
    {id:192,name:'PDEX'},
    {id:193,name:'FBIO'},
    {id:194,name:'ONS'},
    {id:195,name:'SRDX'},
    {id:196,name:'GMED'},
    {id:197,name:'RGLS'},
    {id:198,name:'XTNT'},
    {id:199,name:'XNCR'},
    {id:200,name:'SSKN'},
    {id:201,name:'CYCC'},
    {id:202,name:'NATR'},
    {id:203,name:'ICUI'},
    {id:204,name:'INSY'},
    {id:205,name:'AAC'},
    {id:206,name:'PBH'},
    {id:207,name:'ASNS'},
    {id:208,name:'CORT'},
    {id:209,name:'FCRE'},
    {id:210,name:'ACER'},
    {id:211,name:'CTIC'},
    {id:212,name:'EGLT'},
    {id:213,name:'TLGT'},
    {id:214,name:'NKTR'},
    {id:215,name:'MCRB'},
    {id:216,name:'FMI'},
    {id:217,name:'EXAS'},
    {id:218,name:'CHRS'},
    {id:219,name:'LPCN'},
    {id:220,name:'HSGX'},
    {id:221,name:'ALDR'},
    {id:222,name:'OMER'},
    {id:223,name:'BMRN'},
    {id:224,name:'CKPT'},
    {id:225,name:'VLRX'},
    {id:226,name:'JYNT'},
    {id:227,name:'USNA'},
    {id:228,name:'CYTK'},
    {id:229,name:'CUE'},
    {id:230,name:'APEN'},
    {id:231,name:'ORGS'},
    {id:232,name:'CERC'},
    {id:233,name:'EDIT'},
    {id:234,name:'CLSN'},
    {id:235,name:'PRPO'},
    {id:236,name:'ONVO'},
    {id:237,name:'VCYT'},
    {id:238,name:'MDXG'},
    {id:239,name:'OSIR'},
    {id:240,name:'RDUS'},
    {id:241,name:'ATXI'},
    {id:242,name:'MOR'},
    {id:243,name:'INO'},
    {id:244,name:'CALA'},
    {id:245,name:'AXGN'},
    {id:246,name:'DNLI'},
    {id:247,name:'ACHV'},
    {id:248,name:'TGTX'},
    {id:249,name:'MGEN'},
    {id:250,name:'CERS'},
    {id:251,name:'BRKR'},
    {id:252,name:'LPNT'},
    {id:253,name:'ICPT'},
    {id:254,name:'APVO'},
    {id:255,name:'CASI'},
    {id:256,name:'MMSI'},
    {id:257,name:'ATNX'},
    {id:258,name:'ALXN'},
    {id:259,name:'TORC'},
    {id:260,name:'SVRA'},
    {id:261,name:'LMAT'},
    {id:262,name:'NWBO'},
    {id:263,name:'LGND'},
    {id:264,name:'AGLE'},
    {id:265,name:'NAVB'},
    {id:266,name:'PTIE'},
    {id:267,name:'BSX'},
    {id:268,name:'PULM'},
    {id:269,name:'ZYNE'},
    {id:270,name:'KALA'},
    {id:271,name:'CYH'},
    {id:272,name:'ZSAN'},
    {id:273,name:'CBM'},
    {id:274,name:'MGNX'},
    {id:275,name:'CUR'},
    {id:276,name:'ABIO'},
    {id:277,name:'AGIO'},
    {id:278,name:'BOLD'},
    {id:279,name:'INCY'},
    {id:280,name:'BLCM'},
    {id:281,name:'CDTX'},
    {id:282,name:'ALRN'},
    {id:283,name:'AXDX'},
    {id:284,name:'PETQ'},
    {id:285,name:'PRPH'},
    {id:286,name:'AMPH'},
    {id:287,name:'STAA'},
    {id:288,name:'RDNT'},
    {id:289,name:'STDY'},
    {id:290,name:'PBYI'},
    {id:291,name:'ARAY'},
    {id:292,name:'EYEG'},
    {id:293,name:'SNSS'},
    {id:294,name:'ISRG'},
    {id:295,name:'CBAY'},
    {id:296,name:'FGEN'},
    {id:297,name:'BIOC'},
    {id:298,name:'VYGR'},
    {id:299,name:'CRIS'},
    {id:300,name:'USPH'},
    {id:301,name:'ABT'},
    {id:302,name:'BEAT'},
    {id:303,name:'EW'},
    {id:304,name:'SBPH'},
    {id:305,name:'OMED'},
    {id:306,name:'JAGX'},
    {id:307,name:'AIMT'},
    {id:308,name:'CNMD'},
    {id:309,name:'VRAY'},
    {id:310,name:'CVRS'},
    {id:311,name:'MD'},
    {id:312,name:'IART'},
    {id:313,name:'ANGO'},
    {id:314,name:'MDVX'},
    {id:315,name:'SCYX'},
    {id:316,name:'CMRX'},
    {id:317,name:'GLYC'},
    {id:318,name:'CI'},
    {id:319,name:'NBIX'},
    {id:320,name:'FPRX'},
    {id:321,name:'MASI'},
    {id:322,name:'OVID'},
    {id:323,name:'AIPT'},
    {id:324,name:'KALV'},
    {id:325,name:'BIO'},
    {id:326,name:'RETA'},
    {id:327,name:'CLVS'},
    {id:328,name:'ELMD'},
    {id:329,name:'BIOS'},
    {id:330,name:'JNCE'},
    {id:331,name:'PKI'},
    {id:332,name:'CPRX'},
    {id:333,name:'ARDM'},
    {id:334,name:'IONS'},
    {id:335,name:'ZTS'},
    {id:336,name:'RYTM'},
    {id:337,name:'SPHS'},
    {id:338,name:'LAKE'},
    {id:339,name:'MACK'},
    {id:340,name:'CYTX'},
    {id:341,name:'ZBH'},
    {id:342,name:'BSTC'},
    {id:343,name:'EGRX'},
    {id:344,name:'BIOL'},
    {id:345,name:'KERX'},
    {id:346,name:'SBBP'},
    {id:347,name:'HRC'},
    {id:348,name:'INGN'},
    {id:349,name:'A'},
    {id:350,name:'TECH'},
    {id:351,name:'NEOG'},
    {id:352,name:'KND'},
    {id:353,name:'SEM'},
    {id:354,name:'ACRS'},
    {id:355,name:'MBRX'},
    {id:356,name:'WAT'},
    {id:357,name:'NHC'},
    {id:358,name:'MICR'},
    {id:359,name:'ZOM'},
    {id:360,name:'KTWO'},
    {id:361,name:'SRPT'},
    {id:362,name:'STE'},
    {id:363,name:'TFX'},
    {id:364,name:'HRTX'},
    {id:365,name:'OBLN'},
    {id:366,name:'INFI'},
    {id:367,name:'ANIP'},
    {id:368,name:'EHC'},
    {id:369,name:'AVEO'},
    {id:370,name:'MRNS'},
    {id:371,name:'ANIK'},
    {id:372,name:'ZGNX'},
    {id:373,name:'ADUS'},
    {id:374,name:'BPMC'},
    {id:375,name:'RTRX'},
    {id:376,name:'MDGL'},
    {id:377,name:'EPZM'},
    {id:378,name:'MYL'},
    {id:379,name:'NVCR'},
    {id:380,name:'CBLI'},
    {id:381,name:'LCI'},
    {id:382,name:'CPIX'},
    {id:383,name:'ATRC'},
    {id:384,name:'LLY'},
    {id:385,name:'RIOT'},
    {id:386,name:'PFE'},
    {id:387,name:'CELC'},
    {id:388,name:'XBIT'},
    {id:389,name:'BDX'},
    {id:390,name:'BDXA'},
    {id:391,name:'SNDX'},
    {id:392,name:'SELB'},
    {id:393,name:'UMRX'},
    {id:394,name:'AVXS'},
    {id:395,name:'BLUE'},
    {id:396,name:'XLRN'},
    {id:397,name:'RMD'},
    {id:398,name:'INSM'},
    {id:399,name:'CORI'},
    {id:400,name:'CSBR'},
    {id:401,name:'AERI'},
    {id:402,name:'MNOV'},
    {id:403,name:'CYAN'},
    {id:404,name:'VRTX'},
    {id:405,name:'HCA'},
    {id:406,name:'ALOG'},
    {id:407,name:'AMGN'},
    {id:408,name:'RSLS'},
    {id:409,name:'FCSC'},
    {id:410,name:'IMNP'},
    {id:411,name:'INFU'},
    {id:412,name:'IPXL'},
    {id:413,name:'IRMD'},
    {id:414,name:'IDRA'},
    {id:415,name:'HEB'},
    {id:416,name:'HLTH'},
    {id:417,name:'MLSS'},
    {id:418,name:'QTRX'},
    {id:419,name:'NVAX'},
    {id:420,name:'NXTM'},
    {id:421,name:'OCX'},
    {id:422,name:'NTRP'},
    {id:423,name:'NURO'},
    {id:424,name:'MTFB'},
    {id:425,name:'ANTX'},
    {id:426,name:'ACRX'},
    {id:427,name:'ARDX'},
    {id:428,name:'VSAR'},
    {id:429,name:'VIVE'},
    {id:430,name:'VIVO'},
    {id:431,name:'TOCA'},
    {id:432,name:'SSY'},
    {id:433,name:'CGIX'},
    {id:434,name:'MTD'},
    {id:435,name:'BMY'},
    {id:436,name:'OVAS'},
    {id:437,name:'VAR'},
    {id:438,name:'ONTX'},
    {id:439,name:'BAX'},
    {id:440,name:'PTCT'},
    {id:441,name:'CRVS'},
    {id:442,name:'ALBO'},
    {id:443,name:'QDEL'},
    {id:444,name:'LH'},
    {id:445,name:'FLXN'},
    {id:446,name:'INVA'},
    {id:447,name:'MRTX'},
    {id:448,name:'DCPH'},
    {id:449,name:'OPNT'},
    {id:450,name:'PRSC'},
    {id:451,name:'ACOR'},
    {id:452,name:'BIIB'},
    {id:453,name:'SPRO'},
    {id:454,name:'RGNX'},
    {id:455,name:'NVRO'},
    {id:456,name:'REPH'},
    {id:457,name:'IVC'},
    {id:458,name:'BKD'},
    {id:459,name:'CMD'},
    {id:460,name:'SYK'},
    {id:461,name:'PODD'},
    {id:462,name:'ABAX'},
    {id:463,name:'IRIX'},
    {id:464,name:'VREX'},
    {id:465,name:'UHS'},
    {id:466,name:'NOVN'},
    {id:467,name:'MGLN'},
    {id:468,name:'SLS'},
    {id:469,name:'MYOS'},
    {id:470,name:'OPHT'},
    {id:471,name:'DGX'},
    {id:472,name:'CHE'},
    {id:473,name:'ADMA'},
    {id:474,name:'ALQA'},
    {id:475,name:'AKER'},
    {id:476,name:'UTMD'},
    {id:477,name:'COO'},
    {id:478,name:'BLPH'},
    {id:479,name:'WST'},
    {id:480,name:'PRTK'},
    {id:481,name:'FLKS'},
    {id:482,name:'ISR'},
    {id:483,name:'ATHX'},
    {id:484,name:'ALIM'},
    {id:485,name:'JNJ'},
    {id:486,name:'ABMD'},
    {id:487,name:'NAII'},
    {id:488,name:'AET'},
    {id:489,name:'FONR'},
    {id:490,name:'ALNA'},
    {id:491,name:'TMO'},
    {id:492,name:'VERU'},
    {id:493,name:'CRL'},
    {id:494,name:'CDMOP'},
    {id:495,name:'ABBV'},
    {id:496,name:'DVA'},
    {id:497,name:'UTHR'},
    {id:498,name:'LPTX'},
    {id:499,name:'MNKD'},
    {id:500,name:'AMED'},
    {id:501,name:'ADXS'},
    {id:502,name:'OPTN'},
    {id:503,name:'SGMO'},
    {id:504,name:'SENS'},
    {id:505,name:'MRK'},
    {id:506,name:'OHRP'},
    {id:507,name:'ADRO'},
    {id:508,name:'CNCE'},
    {id:509,name:'ADMP'},
    {id:510,name:'KIDS'},
    {id:511,name:'CFMS'},
    {id:512,name:'ESRX'},
    {id:513,name:'VRML'},
    {id:514,name:'VCEL'},
    {id:515,name:'CBIO'},
    {id:516,name:'STML'},
    {id:517,name:'PAHC'},
    {id:518,name:'GILD'},
    {id:519,name:'TVTY'},
    {id:520,name:'SPNE'},
    {id:521,name:'PTN'},
    {id:522,name:'CRMD'},
    {id:523,name:'TYME'},
    {id:524,name:'IQV'},
    {id:525,name:'VTL'},
    {id:526,name:'UNH'},
    {id:527,name:'AVXL'},
    {id:528,name:'REGN'},
    {id:529,name:'RVP'},
    {id:530,name:'SYBX'},
    {id:531,name:'ICCC'},
    {id:532,name:'CNC'},
    {id:533,name:'MBIO'},
    {id:534,name:'DVCR'},
    {id:535,name:'KDMN'},
    {id:536,name:'ATRI'},
    {id:537,name:'NUVA'},
    {id:538,name:'PCRX'},
    {id:539,name:'ARNA'},
    {id:540,name:'HYH'},
    {id:541,name:'SNOA'},
    {id:542,name:'TROV'},
    {id:543,name:'EXEL'},
    {id:544,name:'EVHC'},
    {id:545,name:'EKSO'},
    {id:546,name:'PRTO'},
    {id:547,name:'IMMY'},
    {id:548,name:'CEMI'},
    {id:549,name:'CTSO'},
    {id:550,name:'ESPR'},
    {id:551,name:'SYNH'},
    {id:552,name:'GNMX'},
    {id:553,name:'HUM'},
    {id:554,name:'ALDX'},
    {id:555,name:'PTGX'},
    {id:556,name:'RIGL'},
    {id:557,name:'PIRS'},
    {id:558,name:'BTX'},
    {id:559,name:'IBIO'},
    {id:560,name:'CHFS'},
    {id:561,name:'TENX'},
    {id:562,name:'IRTC'},
    {id:563,name:'ASMB'},
    {id:564,name:'CTMX'},
    {id:565,name:'SLNO'},
    {id:566,name:'AGN'},
    {id:567,name:'BHVN'},
    {id:568,name:'KIN'},
    {id:569,name:'ZFGN'},
    {id:570,name:'LHCG'},
    {id:571,name:'NERV'},
    {id:572,name:'SUPN'},
    {id:573,name:'MOH'},
    {id:574,name:'DRRX'},
    {id:575,name:'TNXP'},
    {id:576,name:'RXII'},
    {id:577,name:'WCG'},
    {id:578,name:'ANTM'},
    {id:579,name:'RTTR'},
    {id:580,name:'CIVI'},
    {id:581,name:'ATNM'},
    {id:582,name:'TPIV'},
    {id:583,name:'CTLT'},
    {id:584,name:'EBS'},
    {id:585,name:'JNP'},
    {id:586,name:'AZRX'},
    {id:587,name:'AMPE'},
    {id:588,name:'SGYP'},
    {id:589,name:'DOVA'},
    {id:590,name:'EDGE'},
    {id:591,name:'AHPI'},
    {id:592,name:'CTRV'},
    {id:593,name:'SNNA'},
    {id:594,name:'MOTS'},
    {id:595,name:'LIFE'},
    {id:596,name:'EYPT'},
    {id:597,name:'VVUS'},
    {id:598,name:'FIXX'},
    {id:599,name:'RARX'},
    {id:600,name:'CODX'},
    {id:601,name:'CVS'},
    {id:602,name:'AQB'},
    {id:603,name:'ACHN'},
    {id:604,name:'IDXX'},
    {id:605,name:'CLSD'},
    {id:606,name:'RNN'},
    {id:607,name:'HAE'},
    {id:608,name:'CLDX'},
    {id:609,name:'GALT'},
    {id:610,name:'PFNX'},
    {id:611,name:'GERN'},
    {id:612,name:'APHB'},
    {id:613,name:'HOLX'},
    {id:614,name:'HAIR'},
    {id:615,name:'CELG'},
    {id:616,name:'AKCA'},
    {id:617,name:'CDXC'},
    {id:618,name:'CATS'},
    {id:619,name:'GNPX'},
    {id:620,name:'TTOO'},
    {id:621,name:'SPPI'},
    {id:622,name:'MSON'},
    {id:623,name:'NBY'},
    {id:624,name:'NVUS'},
    {id:625,name:'OPGN'},
    {id:626,name:'ATEC'},
    {id:627,name:'KMPH'},
    {id:628,name:'TCON'},
    {id:629,name:'PRAH'},
    {id:630,name:'HBIO'},
    {id:631,name:'NEOS'},
    {id:632,name:'SRTS'},
    {id:633,name:'FENC'},
    {id:634,name:'CLBS'},
    {id:635,name:'CHMA'},
    {id:636,name:'IRWD'},
    {id:637,name:'BYSI'},
    {id:638,name:'IMGN'},
    {id:639,name:'PMD'},
    {id:640,name:'FLDM'},
    {id:641,name:'AST'},
    {id:642,name:'ARQL'},
    {id:643,name:'GEMP'},
    {id:644,name:'BDSI'},
    {id:645,name:'IMDZ'},
    {id:646,name:'PTLA'},
    {id:647,name:'RCUS'},
    {id:648,name:'FVE'},
    {id:649,name:'DPLO'},
    {id:650,name:'ARCT'},
    {id:651,name:'ALT'},
    {id:652,name:'ANAB'},
    {id:653,name:'VXRT'},
    {id:654,name:'LNTH'},
    {id:655,name:'MTP'},
    {id:656,name:'DFFN'},
    {id:657,name:'VSTM'},
    {id:658,name:'TRVN'},
    {id:659,name:'IMUC'},
    {id:660,name:'CBMG'},
    {id:661,name:'SLDB'},
    {id:662,name:'TSRO'},
    {id:663,name:'EBIO'},
    {id:664,name:'XRAY'},
    {id:665,name:'MBVX'},
    {id:666,name:'NDRA'},
    {id:667,name:'EYES'},
    {id:668,name:'AMDA'},
    {id:669,name:'BMRA'},
    {id:670,name:'DYNT'},
    {id:671,name:'NNVC'},
    {id:672,name:'MYO'},
    {id:673,name:'EVFM'},
    {id:674,name:'AGEN'},
    {id:675,name:'XENT'},
    {id:676,name:'DCTH'}
  ];

  constructor(private sanitizer : DomSanitizer) { }

  ngOnInit() {;
    this.urlshare = "https://finviz.com/quote.ashx?t="+this.shares[this.i].name+"&ty=c&ta=0&p=w&b=1";
  }

  getEmbedUrl(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.urlshare);
  }

  nextShare(){
    if(this.i<(this.shares.length-1)){
      this.i++;
    }
    this.urlshare = "https://finviz.com/quote.ashx?t="+this.shares[this.i].name+"&ty=c&ta=0&p=w&b=1";
  }
  previousShare(){
    if(this.i>0){
      this.i--;
    }
    this.urlshare = "https://finviz.com/quote.ashx?t="+this.shares[this.i].name+"&ty=c&ta=0&p=w&b=1";
  }
}
