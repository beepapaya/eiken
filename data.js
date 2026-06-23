const wordData = [
    {
        "en":  "last",
        "ja":  "続く、持続する、(天候・体力・食品などが)持ちこたえる"
    },
    {
        "en":  "affect",
        "ja":  "に影響を及ぼす；を感動させる"
    },
    {
        "en":  "claim",
        "ja":  "と主張する；を（自分のものとして）要求する"
    },
    {
        "en":  "ship",
        "ja":  "を出荷する、を輸送する"
    },
    {
        "en":  "issue",
        "ja":  "問題（点）；発行（物）；発表"
    },
    {
        "en":  "purchase",
        "ja":  "を購入する"
    },
    {
        "en":  "occur",
        "ja":  "起こる；心に浮かぶ；現れる"
    },
    {
        "en":  "deal",
        "ja":  "を処理する；を商う；を分配する"
    },
    {
        "en":  "consume",
        "ja":  "を消費する；を食べる，飲む"
    },
    {
        "en":  "present",
        "ja":  "を提示する、を進呈する"
    },
    {
        "en":  "fire",
        "ja":  "を解雇する、を首にする"
    },
    {
        "en":  "regard",
        "ja":  "を見なす；を見る；を評価する"
    },
    {
        "en":  "fine",
        "ja":  "に罰金を科す"
    },
    {
        "en":  "transfer",
        "ja":  "を移す；を伝える；移る；乗り換える"
    },
    {
        "en":  "decline",
        "ja":  "減少する；衰退する；を断る"
    },
    {
        "en":  "eliminate",
        "ja":  "を取り除く"
    },
    {
        "en":  "indicate",
        "ja":  "を指し示す；を述べる"
    },
    {
        "en":  "ensure",
        "ja":  "を確実にする（≒make sure）；を守る"
    },
    {
        "en":  "expand",
        "ja":  "（を）拡大する；（を）詳説する"
    },
    {
        "en":  "address",
        "ja":  "（問題など）に対処する；に演説する；（手紙など）を（～宛てに）出す（to）"
    },
    {
        "en":  "identify",
        "ja":  "を特定する；を（～と）同一視する（with）"
    },
    {
        "en":  "construct",
        "ja":  "を建設する（＝build）；を構成する"
    },
    {
        "en":  "invest",
        "ja":  "（を）投資する；に（～を）与える（with）"
    },
    {
        "en":  "obtain",
        "ja":  "を得る"
    },
    {
        "en":  "struggle",
        "ja":  "闘い；懸命の努力"
    },
    {
        "en":  "counter",
        "ja":  "～と反論する、～に反対する"
    },
    {
        "en":  "associate",
        "ja":  "を結び付けて考える；（～と）交際する（with）"
    },
    {
        "en":  "register",
        "ja":  "を記録する，登録する；（～に）登録する（for）"
    },
    {
        "en":  "reveal",
        "ja":  "を明らかにする；を見せる"
    },
    {
        "en":  "species",
        "ja":  "（生物の）種；種類"
    },
    {
        "en":  "diet",
        "ja":  "(日常の)食べ物、療養食"
    },
    {
        "en":  "site",
        "ja":  "用地，場所；跡地；（ウェブ）サイト"
    },
    {
        "en":  "cell",
        "ja":  "細胞；独房；電池"
    },
    {
        "en":  "facility",
        "ja":  "施設，設備；機能；才能"
    },
    {
        "en":  "practice",
        "ja":  "実践，実行；（社会の）慣習；練習"
    },
    {
        "en":  "resident",
        "ja":  "居住者；滞在者"
    },
    {
        "en":  "option",
        "ja":  "選択（の自由）；選択肢"
    },
    {
        "en":  "organ",
        "ja":  "器官，臓器；組織；（パイプ）オルガン"
    },
    {
        "en":  "critic",
        "ja":  "批判する人、批評家"
    },
    {
        "en":  "region",
        "ja":  "地域；領域；部位"
    },
    {
        "en":  "tax",
        "ja":  "税金、税"
    },
    {
        "en":  "access",
        "ja":  "利用，入手；接近（の機会・方法・権利）"
    },
    {
        "en":  "virus",
        "ja":  "ウイルス；（感染症の）病原体"
    },
    {
        "en":  "bill",
        "ja":  "請求書；【英】勘定書（≒【米】check）；法案"
    },
    {
        "en":  "evidence",
        "ja":  "証拠"
    },
    {
        "en":  "attempt",
        "ja":  "を試みる，企てる"
    },
    {
        "en":  "account",
        "ja":  "説明；勘定；口座"
    },
    {
        "en":  "theory",
        "ja":  "学説；理論；原理；推測"
    },
    {
        "en":  "factor",
        "ja":  "要因、要素"
    },
    {
        "en":  "stock",
        "ja":  "在庫品；蓄え；株"
    },
    {
        "en":  "chemical",
        "ja":  "化学の，化学的な"
    },
    {
        "en":  "media",
        "ja":  "マスメディア、マスコミ"
    },
    {
        "en":  "income",
        "ja":  "収入；所得"
    },
    {
        "en":  "supply",
        "ja":  "を供給する"
    },
    {
        "en":  "shortage",
        "ja":  "不足、欠如"
    },
    {
        "en":  "poverty",
        "ja":  "貧困、欠乏"
    },
    {
        "en":  "criminal",
        "ja":  "犯人、犯罪者"
    },
    {
        "en":  "budget",
        "ja":  "予算；経費"
    },
    {
        "en":  "authority",
        "ja":  "〔通例 the ～ties〕（関係）当局；権威；権限"
    },
    {
        "en":  "genome",
        "ja":  "ゲノム"
    },
    {
        "en":  "atmosphere",
        "ja":  "〔the ～〕大気；雰囲気"
    },
    {
        "en":  "aid",
        "ja":  "を援助する，助ける（≒help）"
    },
    {
        "en":  "measure",
        "ja":  "措置、程度、基準"
    },
    {
        "en":  "subject",
        "ja":  "話題；科目；主題；被験者"
    },
    {
        "en":  "decade",
        "ja":  "10年間"
    },
    {
        "en":  "weapon",
        "ja":  "兵器，武器（≒arms）"
    },
    {
        "en":  "nutrient",
        "ja":  "栄養分、栄養になるもの"
    },
    {
        "en":  "expense",
        "ja":  "〔～s〕経費；費用；犠牲"
    },
    {
        "en":  "structure",
        "ja":  "構造；体系；構造物"
    },
    {
        "en":  "adolescent",
        "ja":  "青年"
    },
    {
        "en":  "procedure",
        "ja":  "手順、手続き"
    },
    {
        "en":  "minimum",
        "ja":  "最小限度"
    },
    {
        "en":  "fuel",
        "ja":  "燃料；勢いを増加させるもの"
    },
    {
        "en":  "resource",
        "ja":  "〔通例～s〕資源；〔通例～s〕資金；才覚"
    },
    {
        "en":  "regulation",
        "ja":  "規則、規制"
    },
    {
        "en":  "contract",
        "ja":  "契約（書）；協定"
    },
    {
        "en":  "insurance",
        "ja":  "保険；保険料；保険金"
    },
    {
        "en":  "employment",
        "ja":  "雇用、職"
    },
    {
        "en":  "ban",
        "ja":  "を（法的に）禁止する；を締め出す"
    },
    {
        "en":  "vehicle",
        "ja":  "車、(特に陸上の)乗り物、輸送機関、伝達手段"
    },
    {
        "en":  "soil",
        "ja":  "土地，土壌；（悪事などの）温床"
    },
    {
        "en":  "cargo",
        "ja":  "(主に船・飛行機の)積荷、貨物"
    },
    {
        "en":  "aircraft",
        "ja":  "航空機、飛行機"
    },
    {
        "en":  "current",
        "ja":  "現在の；現代の；通用している"
    },
    {
        "en":  "political",
        "ja":  "政治（上）の"
    },
    {
        "en":  "significant",
        "ja":  "重要な，重大な；意義深い"
    },
    {
        "en":  "effective",
        "ja":  "効果的な、有効な"
    },
    {
        "en":  "military",
        "ja":  "軍の，軍事（用）の"
    },
    {
        "en":  "due",
        "ja":  "予定された；（支払）期日で；しかるべき"
    },
    {
        "en":  "essential",
        "ja":  "（～に）必要不可欠な（to/for）；本質的な"
    },
    {
        "en":  "illegal",
        "ja":  "違法の、非合法の"
    },
    {
        "en":  "immune",
        "ja":  "（～に対して）免疫を持つ（to）；（～を）免れた（from）"
    },
    {
        "en":  "numerous",
        "ja":  "非常に数の多い"
    },
    {
        "en":  "extreme",
        "ja":  "極端な；極度の，過激な"
    },
    {
        "en":  "general",
        "ja":  "全体の、一般的な"
    },
    {
        "en":  "agricultural",
        "ja":  "農業の、農耕の"
    },
    {
        "en":  "overall",
        "ja":  "総合的な；全体的な"
    },
    {
        "en":  "additional",
        "ja":  "追加の、付加的な"
    },
    {
        "en":  "entire",
        "ja":  "全体の，全部の（≒whole）；完全な"
    },
    {
        "en":  "severe",
        "ja":  "（人・規律・事態・天気などが）厳しい；猛烈な"
    },
    {
        "en":  "alter",
        "ja":  "を変える；変わる（≒change）"
    },
    {
        "en":  "adopt",
        "ja":  "を採用する；（態度など）をとる；を養子にする"
    },
    {
        "en":  "vote",
        "ja":  "投票；投票結果；〔the ～〕選挙権"
    },
    {
        "en":  "determine",
        "ja":  "を決定する；を正確に知る"
    },
    {
        "en":  "enable",
        "ja":  "（人）が...できるようにする；を可能にする"
    },
    {
        "en":  "conduct",
        "ja":  "（調査・実験など）を実施する；を導く"
    },
    {
        "en":  "direct",
        "ja":  "を案内する、を指揮する"
    },
    {
        "en":  "absorb",
        "ja":  "を吸収する；を併合する；を夢中にさせる"
    },
    {
        "en":  "imply",
        "ja":  "を暗に意味する；を必然的に伴う"
    },
    {
        "en":  "operate",
        "ja":  "を操作する；機能する；手術する"
    },
    {
        "en":  "demonstrate",
        "ja":  "を論証［証明］する；デモをする"
    },
    {
        "en":  "boost",
        "ja":  "を押し上げる；を増加させる"
    },
    {
        "en":  "prove",
        "ja":  "を証明する；判明する，わかる"
    },
    {
        "en":  "monitor",
        "ja":  "を監視する；を傍受する"
    },
    {
        "en":  "defeat",
        "ja":  "を負かす（≒beat）；を失敗させる"
    },
    {
        "en":  "protest",
        "ja":  "（に）抗議する；を主張する"
    },
    {
        "en":  "target",
        "ja":  "（到達・攻撃）目標；的"
    },
    {
        "en":  "preserve",
        "ja":  "を保存する；を保持する；を保護する"
    },
    {
        "en":  "oppose",
        "ja":  "に反対する；を対抗［対比］させる"
    },
    {
        "en":  "migrate",
        "ja":  "移住する；（鳥などが）渡る"
    },
    {
        "en":  "analyze",
        "ja":  "を分析する"
    },
    {
        "en":  "discourage",
        "ja":  "（人）にやる気をなくさせる；を落胆させる"
    },
    {
        "en":  "confirm",
        "ja":  "を確認する；を裏づける"
    },
    {
        "en":  "intend",
        "ja":  "を意図する"
    },
    {
        "en":  "predict",
        "ja":  "を予言［予測］する"
    },
    {
        "en":  "extend",
        "ja":  "を伸［延］ばす；伸びる；及ぶ"
    },
    {
        "en":  "figure",
        "ja":  "数字；姿；人物；図表"
    },
    {
        "en":  "transportation",
        "ja":  "交通[輸送]機関、輸送"
    },
    {
        "en":  "institution",
        "ja":  "機関；協会；施設；制度"
    },
    {
        "en":  "theft",
        "ja":  "窃盗（罪）"
    },
    {
        "en":  "candidate",
        "ja":  "（～の）候補（者）（for）；志願者"
    },
    {
        "en":  "mammal",
        "ja":  "哺乳動物"
    },
    {
        "en":  "economist",
        "ja":  "経済学者"
    },
    {
        "en":  "protein",
        "ja":  "たんぱく質"
    },
    {
        "en":  "immigrant",
        "ja":  "(外国からの)移住者、移民"
    },
    {
        "en":  "property",
        "ja":  "不動産、財産、特性"
    },
    {
        "en":  "fund",
        "ja":  "〔しばしば～s〕基金，資金"
    },
    {
        "en":  "habitat",
        "ja":  "生息地；（人の）居住地"
    },
    {
        "en":  "symptom",
        "ja":  "症状；兆候（≒sign）"
    },
    {
        "en":  "eruption",
        "ja":  "勃発、噴火"
    },
    {
        "en":  "quantity",
        "ja":  "量；分量"
    },
    {
        "en":  "ad",
        "ja":  "広告"
    },
    {
        "en":  "saving",
        "ja":  "節約、倹約、預金(額)、蓄え"
    },
    {
        "en":  "territory",
        "ja":  "領土；（活動の）領域；（動物の）テリトリー"
    },
    {
        "en":  "threat",
        "ja":  "脅威；（悪い）兆し；脅迫"
    },
    {
        "en":  "sufferer",
        "ja":  "苦しむ人、被災者、病人"
    },
    {
        "en":  "emission",
        "ja":  "排気、放出(物)"
    },
    {
        "en":  "executive",
        "ja":  "重役、幹部、経営者"
    },
    {
        "en":  "strategy",
        "ja":  "戦略"
    },
    {
        "en":  "riot",
        "ja":  "暴動"
    },
    {
        "en":  "district",
        "ja":  "地区；行政区"
    },
    {
        "en":  "election",
        "ja":  "選挙"
    },
    {
        "en":  "medication",
        "ja":  "(医師が処方した)薬、医薬品、薬物治療"
    },
    {
        "en":  "breed",
        "ja":  "を繁殖させる，育てる；繁殖する"
    },
    {
        "en":  "conflict",
        "ja":  "争い；論争；不一致"
    },
    {
        "en":  "productivity",
        "ja":  "生産性"
    },
    {
        "en":  "organism",
        "ja":  "有機体、生物"
    },
    {
        "en":  "representative",
        "ja":  "代表者、代理人"
    },
    {
        "en":  "warehouse",
        "ja":  "倉庫"
    },
    {
        "en":  "refund",
        "ja":  "返金、払い戻し(金)"
    },
    {
        "en":  "tuition",
        "ja":  "【主に米】 授業料；（個人）指導"
    },
    {
        "en":  "range",
        "ja":  "範囲、領域"
    },
    {
        "en":  "victim",
        "ja":  "犠牲（者），被害者"
    },
    {
        "en":  "dose",
        "ja":  "（薬の1回分の）服用量；放射線の1回の照射量"
    },
    {
        "en":  "mainland",
        "ja":  "本土"
    },
    {
        "en":  "waterfall",
        "ja":  "滝"
    },
    {
        "en":  "satellite",
        "ja":  "人工衛星、衛星"
    },
    {
        "en":  "evolution",
        "ja":  "進化、発展、展開"
    },
    {
        "en":  "prey",
        "ja":  "獲物；犠牲者"
    },
    {
        "en":  "bystander",
        "ja":  "傍観者"
    },
    {
        "en":  "creature",
        "ja":  "生き物、(特に人以外の)動物"
    },
    {
        "en":  "civilization",
        "ja":  "文明"
    },
    {
        "en":  "tribe",
        "ja":  "部族；仲間"
    },
    {
        "en":  "permission",
        "ja":  "許可、承認"
    },
    {
        "en":  "barrier",
        "ja":  "（～に対する）障壁（against/to）；防壁"
    },
    {
        "en":  "wage",
        "ja":  "賃金、給料"
    },
    {
        "en":  "drone",
        "ja":  "ドローン、(無線操作の)無人機"
    },
    {
        "en":  "appearance",
        "ja":  "外観、出現"
    },
    {
        "en":  "embassy",
        "ja":  "大使館；大使一行"
    },
    {
        "en":  "skeleton",
        "ja":  "骨格；骨組み；概略"
    },
    {
        "en":  "wildlife",
        "ja":  "野生生物"
    },
    {
        "en":  "potential",
        "ja":  "潜在的な；可能性を秘めた"
    },
    {
        "en":  "limited",
        "ja":  "限定された、わずかの"
    },
    {
        "en":  "rural",
        "ja":  "田舎の（⇔urban），田園の"
    },
    {
        "en":  "advanced",
        "ja":  "進歩した、前進した、上級の"
    },
    {
        "en":  "beneficial",
        "ja":  "有益な、有利な"
    },
    {
        "en":  "genetic",
        "ja":  "遺伝子の"
    },
    {
        "en":  "radical",
        "ja":  "急進的な；根本的な"
    },
    {
        "en":  "hostile",
        "ja":  "敵意のある（⇔friendly 友好的な）"
    },
    {
        "en":  "fit",
        "ja":  "健康な、元気な、ふさわしい"
    },
    {
        "en":  "long-term",
        "ja":  "長期にわたる、長期的な"
    },
    {
        "en":  "Arctic",
        "ja":  "北極の"
    },
    {
        "en":  "minor",
        "ja":  "重要でない；小さい"
    },
    {
        "en":  "risky",
        "ja":  "危険な"
    },
    {
        "en":  "complex",
        "ja":  "複雑な、複合(体)の"
    },
    {
        "en":  "competitive",
        "ja":  "競争力のある、格安の、競争の"
    },
    {
        "en":  "immediate",
        "ja":  "即座の；当面の；すぐそばの；直接の"
    },
    {
        "en":  "religious",
        "ja":  "宗教(上)の、信仰があつい"
    },
    {
        "en":  "related",
        "ja":  "関連した、関係のある"
    },
    {
        "en":  "affordable",
        "ja":  "手頃な、安価な"
    },
    {
        "en":  "donate",
        "ja":  "を寄付する；（臓器・血液）を提供する"
    },
    {
        "en":  "lessen",
        "ja":  "を減らす"
    },
    {
        "en":  "manufacture",
        "ja":  "を製造する；をでっち上げる"
    },
    {
        "en":  "commute",
        "ja":  "通勤［通学］する"
    },
    {
        "en":  "exaggerate",
        "ja":  "（を）誇張する；を強調する"
    },
    {
        "en":  "suspect",
        "ja":  "ではないかと思う；（人）を疑う"
    },
    {
        "en":  "acquire",
        "ja":  "を得る；を習得する"
    },
    {
        "en":  "reintroduce",
        "ja":  "(動植物など)をかつての分布域に再導入する、(制度など)を復活させる"
    },
    {
        "en":  "reschedule",
        "ja":  "の日時を変更する"
    },
    {
        "en":  "adapt",
        "ja":  "適応する；を（～に）適合させる（to）"
    },
    {
        "en":  "generate",
        "ja":  "を生み出す；（電気など）を発生させる"
    },
    {
        "en":  "guarantee",
        "ja":  "を保証する"
    },
    {
        "en":  "dump",
        "ja":  "を投棄する；をどさっと落とす"
    },
    {
        "en":  "update",
        "ja":  "を最新のものにする；をアップデートする"
    },
    {
        "en":  "classify",
        "ja":  "を分類する；を機密扱いにする"
    },
    {
        "en":  "acknowledge",
        "ja":  "（事実など）を認める（≒admit, accept）；に謝意を表す"
    },
    {
        "en":  "enforce",
        "ja":  "を施行［実施］する；を（～に）強制する（on/upon）"
    },
    {
        "en":  "renew",
        "ja":  "を更新する；（資源）を再生する"
    },
    {
        "en":  "overlook",
        "ja":  "を見落とす；を大目に見る；を見渡す"
    },
    {
        "en":  "evaluate",
        "ja":  "を評価する；を査定する"
    },
    {
        "en":  "commit",
        "ja":  "献身する；（罪など）を犯す；を投入する"
    },
    {
        "en":  "argument",
        "ja":  "議論、口論"
    },
    {
        "en":  "archaeologist",
        "ja":  "考古学者"
    },
    {
        "en":  "reputation",
        "ja":  "評判；名声"
    },
    {
        "en":  "fossil",
        "ja":  "化石；時代遅れの人［物］"
    },
    {
        "en":  "status",
        "ja":  "地位；状態"
    },
    {
        "en":  "contrast",
        "ja":  "（～との）対照（with/to）"
    },
    {
        "en":  "workplace",
        "ja":  "職場"
    },
    {
        "en":  "equality",
        "ja":  "平等"
    },
    {
        "en":  "colleague",
        "ja":  "（職場の）同僚"
    },
    {
        "en":  "assistance",
        "ja":  "援助、支援"
    },
    {
        "en":  "luxury",
        "ja":  "ぜいたく（品）；〔形容詞的に〕豪華な"
    },
    {
        "en":  "outbreak",
        "ja":  "発生，勃発"
    },
    {
        "en":  "council",
        "ja":  "（地方）議会；評議会；（公の）会議"
    },
    {
        "en":  "pottery",
        "ja":  "陶器類、焼き物類"
    },
    {
        "en":  "assignment",
        "ja":  "任務、宿題、割り当て"
    },
    {
        "en":  "particle",
        "ja":  "（微）粒子；ほんのわずか"
    },
    {
        "en":  "radiation",
        "ja":  "放射能，放射線"
    },
    {
        "en":  "priority",
        "ja":  "優先（事項）"
    },
    {
        "en":  "content",
        "ja":  "内容，中身；コンテンツ"
    },
    {
        "en":  "destination",
        "ja":  "(旅行などの)目的地、行き先"
    },
    {
        "en":  "mine",
        "ja":  "鉱山、地雷"
    },
    {
        "en":  "injury",
        "ja":  "傷害、けが"
    },
    {
        "en":  "lottery",
        "ja":  "宝くじ、抽選"
    },
    {
        "en":  "feature",
        "ja":  "特徴、特集記事"
    },
    {
        "en":  "labor",
        "ja":  "労働、労働力"
    },
    {
        "en":  "diabetes",
        "ja":  "糖尿病"
    },
    {
        "en":  "bulb",
        "ja":  "電球、球根"
    },
    {
        "en":  "résumé",
        "ja":  "履歴書[≒CV]、要約"
    },
    {
        "en":  "mud",
        "ja":  "ぬかるみ、泥"
    },
    {
        "en":  "psychology",
        "ja":  "心理学；心理（状態）"
    },
    {
        "en":  "corporation",
        "ja":  "（大）企業；法人"
    },
    {
        "en":  "ecosystem",
        "ja":  "生態系"
    },
    {
        "en":  "promotion",
        "ja":  "昇進、促進、販売促進"
    },
    {
        "en":  "administration",
        "ja":  "管理（部）；行政；政府（機関）"
    },
    {
        "en":  "complaint",
        "ja":  "苦情、不平"
    },
    {
        "en":  "debt",
        "ja":  "借金，負債；恩義"
    },
    {
        "en":  "requirement",
        "ja":  "必要条件、必需品"
    },
    {
        "en":  "workforce",
        "ja":  "労働人口，総労働力；全従業員（数）"
    },
    {
        "en":  "preference",
        "ja":  "他より好むこと、好み"
    },
    {
        "en":  "refugee",
        "ja":  "難民、亡命者"
    },
    {
        "en":  "inhabitant",
        "ja":  "居住者、住民"
    },
    {
        "en":  "subscription",
        "ja":  "予約購読(料)、寄付(金)"
    },
    {
        "en":  "recipient",
        "ja":  "受け取る人；（臓器などの）被提供者"
    },
    {
        "en":  "shift",
        "ja":  "を変える，移す；変わる；移動する"
    },
    {
        "en":  "vessel",
        "ja":  "船舶；容器；（体液が通る）脈管"
    },
    {
        "en":  "ingredient",
        "ja":  "材料，成分；（成功の）要因"
    },
    {
        "en":  "qualified",
        "ja":  "有能な、資格のある、適任の"
    },
    {
        "en":  "widespread",
        "ja":  "広範囲にわたる；広く普及した"
    },
    {
        "en":  "alternative",
        "ja":  "代替の、どちらか一方の"
    },
    {
        "en":  "harsh",
        "ja":  "厳しい；（光・色・味などが）不快な"
    },
    {
        "en":  "enormous",
        "ja":  "莫大な，巨大な"
    },
    {
        "en":  "specific",
        "ja":  "明確な、特定の"
    },
    {
        "en":  "artificial",
        "ja":  "人工の（⇔natural 自然の）；不自然な"
    },
    {
        "en":  "toxic",
        "ja":  "有毒な；中毒性の"
    },
    {
        "en":  "flexible",
        "ja":  "融通の利く，柔軟な"
    },
    {
        "en":  "latest",
        "ja":  "最新の、最近の"
    },
    {
        "en":  "former",
        "ja":  "以前の、元の"
    },
    {
        "en":  "capable",
        "ja":  "能力がある；有能な"
    },
    {
        "en":  "practical",
        "ja":  "実践的な、実際的な"
    },
    {
        "en":  "mechanical",
        "ja":  "機械の；機械的な"
    },
    {
        "en":  "federal",
        "ja":  "連邦（政府）の"
    },
    {
        "en":  "aggressive",
        "ja":  "攻撃的な；意欲的な"
    },
    {
        "en":  "adequate",
        "ja":  "十分な；適切な"
    },
    {
        "en":  "unexpected",
        "ja":  "思いがけない，不意の"
    },
    {
        "en":  "attractive",
        "ja":  "魅力的な"
    },
    {
        "en":  "sufficient",
        "ja":  "十分な（for ～に, to do ～するのに）"
    },
    {
        "en":  "costly",
        "ja":  "費用のかかる、高価な、犠牲[損失、労力]の大きな"
    },
    {
        "en":  "eventually",
        "ja":  "ついに(は)、結局(は)"
    },
    {
        "en":  "otherwise",
        "ja":  "そうでなければ、そのほかの点では"
    },
    {
        "en":  "previously",
        "ja":  "以前に"
    },
    {
        "en":  "relatively",
        "ja":  "比較的(に)、相対的に"
    },
    {
        "en":  "consequently",
        "ja":  "その結果(として)、従って"
    },
    {
        "en":  "constantly",
        "ja":  "絶えず、常に"
    },
    {
        "en":  "typically",
        "ja":  "通常、概して、典型的に"
    },
    {
        "en":  "barely",
        "ja":  "かろうじて、ほとんど～ない"
    },
    {
        "en":  "despite",
        "ja":  "～にもかかわらず"
    },
    {
        "en":  "per",
        "ja":  "～につき、～ごとに"
    },
    {
        "en":  "beneath",
        "ja":  "～の下に[の]"
    },
    {
        "en":  "whereas",
        "ja":  "～するのに（対し），～する一方"
    },
    {
        "en":  "post",
        "ja":  "(インターネットで)(情報・メッセージ)を投稿する、(ビラなど)を張る"
    },
    {
        "en":  "reject",
        "ja":  "を拒否する"
    },
    {
        "en":  "consult",
        "ja":  "（に）相談する；を参照する"
    },
    {
        "en":  "obey",
        "ja":  "に従う；に服従する"
    },
    {
        "en":  "engage",
        "ja":  "を従事させる；を（～として）雇う（as）；（～に）従事する（in/with）"
    },
    {
        "en":  "restore",
        "ja":  "を回復させる；を修復する"
    },
    {
        "en":  "colonize",
        "ja":  "を植民地化する、を入植させる"
    },
    {
        "en":  "interact",
        "ja":  "影響し合う；相互に作用する"
    },
    {
        "en":  "inspire",
        "ja":  "（人）を奮起させる；を喚起する"
    },
    {
        "en":  "sue",
        "ja":  "を告訴する；（～を求めて）訴訟を起こす（for）"
    },
    {
        "en":  "estimate",
        "ja":  "～と推定する、を見積もる"
    },
    {
        "en":  "strengthen",
        "ja":  "を(より)強くする"
    },
    {
        "en":  "carve",
        "ja":  "を彫る；を切り開く；（肉）を切り分ける"
    },
    {
        "en":  "convince",
        "ja":  "を納得［確信］させる"
    },
    {
        "en":  "propose",
        "ja":  "を提案する；をもくろむ；結婚を申し込む"
    },
    {
        "en":  "blame",
        "ja":  "を責める；の責任を負わせる"
    },
    {
        "en":  "collapse",
        "ja":  "崩壊する；（人が）倒れる；を折り畳む"
    },
    {
        "en":  "import",
        "ja":  "を輸入する；を取り込む"
    },
    {
        "en":  "load",
        "ja":  "に積む；に負わせる"
    },
    {
        "en":  "pollute",
        "ja":  "を汚染する"
    },
    {
        "en":  "spot",
        "ja":  "(特定の)場所、斑点、しみ"
    },
    {
        "en":  "prescription",
        "ja":  "処方箋、処方"
    },
    {
        "en":  "duty",
        "ja":  "義務；〔しばしば～ties〕職務；関税"
    },
    {
        "en":  "union",
        "ja":  "組合、統合、団結"
    },
    {
        "en":  "concept",
        "ja":  "概念"
    },
    {
        "en":  "root",
        "ja":  "根本、源、(植物の)根"
    },
    {
        "en":  "survival",
        "ja":  "生き残ること、生き延びること"
    },
    {
        "en":  "maintenance",
        "ja":  "保守、整備、維持"
    },
    {
        "en":  "formation",
        "ja":  "形成；構成（物）；隊列"
    },
    {
        "en":  "educator",
        "ja":  "教育者、教師"
    },
    {
        "en":  "kidney",
        "ja":  "腎臓"
    },
    {
        "en":  "nutrition",
        "ja":  "栄養（の摂取）"
    },
    {
        "en":  "brand",
        "ja":  "ブランド、銘柄"
    },
    {
        "en":  "storage",
        "ja":  "保管、貯蔵(法)、収容力"
    },
    {
        "en":  "firm",
        "ja":  "確固たる；堅固な；安定した"
    },
    {
        "en":  "statistics",
        "ja":  "統計；統計学"
    },
    {
        "en":  "toll",
        "ja":  "損害（の程度）；死傷者数；通行料"
    },
    {
        "en":  "tip",
        "ja":  "助言，秘訣；チップ；先端"
    },
    {
        "en":  "CEO",
        "ja":  "最高経営責任者"
    },
    {
        "en":  "circumstance",
        "ja":  "〔通例～s〕状況，事情；境遇"
    },
    {
        "en":  "outsider",
        "ja":  "部外者、門外漢"
    },
    {
        "en":  "reduction",
        "ja":  "減少、削減"
    },
    {
        "en":  "settlement",
        "ja":  "開拓地、解決、合意"
    },
    {
        "en":  "divorce",
        "ja":  "離婚；分離"
    },
    {
        "en":  "likelihood",
        "ja":  "可能性、見込み"
    },
    {
        "en":  "livestock",
        "ja":  "(牛・羊・豚などの)家畜(類)"
    },
    {
        "en":  "possession",
        "ja":  "所有物、財産、所有"
    },
    {
        "en":  "plot",
        "ja":  "（小説などの）筋；陰謀"
    },
    {
        "en":  "category",
        "ja":  "部類，区分；範疇"
    },
    {
        "en":  "welfare",
        "ja":  "福祉，幸福"
    },
    {
        "en":  "moisture",
        "ja":  "水分；湿気"
    },
    {
        "en":  "obesity",
        "ja":  "（病的な)肥満"
    },
    {
        "en":  "grant",
        "ja":  "（人）に（許可・権利など）を与える；を認める"
    },
    {
        "en":  "layer",
        "ja":  "層"
    },
    {
        "en":  "secretary",
        "ja":  "秘書"
    },
    {
        "en":  "anxiety",
        "ja":  "不安、心配"
    },
    {
        "en":  "ownership",
        "ja":  "所有権、所有者であること"
    },
    {
        "en":  "foundation",
        "ja":  "基礎、基盤"
    },
    {
        "en":  "division",
        "ja":  "不和、分割、部門、仕切り"
    },
    {
        "en":  "establishment",
        "ja":  "設立、制定、組織"
    },
    {
        "en":  "conservation",
        "ja":  "（動植物などの）保護；保存"
    },
    {
        "en":  "murder",
        "ja":  "殺人"
    },
    {
        "en":  "presence",
        "ja":  "存在；出席；面前"
    },
    {
        "en":  "paradox",
        "ja":  "逆説；矛盾"
    },
    {
        "en":  "prisoner",
        "ja":  "囚人"
    },
    {
        "en":  "surgeon",
        "ja":  "外科医"
    },
    {
        "en":  "frequency",
        "ja":  "頻度、しばしば起こること"
    },
    {
        "en":  "port",
        "ja":  "港"
    },
    {
        "en":  "reception",
        "ja":  "反応；宴会；受付；受信（状態）"
    },
    {
        "en":  "coworker",
        "ja":  "同僚、仕事仲間"
    },
    {
        "en":  "rust",
        "ja":  "さび"
    },
    {
        "en":  "athletics",
        "ja":  "スポーツ、運動競技"
    },
    {
        "en":  "voyage",
        "ja":  "(ゆったりした長い)旅、船旅"
    },
    {
        "en":  "ecologist",
        "ja":  "生態学者、環境保護論者"
    },
    {
        "en":  "soul",
        "ja":  "精神；魂，霊魂；生気"
    },
    {
        "en":  "isolated",
        "ja":  "孤立した、孤独な"
    },
    {
        "en":  "biased",
        "ja":  "偏った、偏見を持った"
    },
    {
        "en":  "multiple",
        "ja":  "多様な；種々雑多な"
    },
    {
        "en":  "critical",
        "ja":  "批判的な、重大な"
    },
    {
        "en":  "remote",
        "ja":  "（～から）遠く離れた（from）；かけ離れた"
    },
    {
        "en":  "encouraging",
        "ja":  "勇気づける、望みを持たせる"
    },
    {
        "en":  "underground",
        "ja":  "地下の、秘密の"
    },
    {
        "en":  "stable",
        "ja":  "安定した；動じない"
    },
    {
        "en":  "domestic",
        "ja":  "家庭の；国内の；（動物が）飼いならされた"
    },
    {
        "en":  "shallow",
        "ja":  "浅い（⇔deep 深い）；浅薄な"
    },
    {
        "en":  "willing",
        "ja":  "～するのをいとわない、快く～する"
    },
    {
        "en":  "superior",
        "ja":  "よりすぐれた"
    },
    {
        "en":  "profitable",
        "ja":  "利益になる、有益な"
    },
    {
        "en":  "solid",
        "ja":  "しっかりした；硬い；固体の"
    },
    {
        "en":  "tremendous",
        "ja":  "途方もない，莫大な；すばらしい"
    },
    {
        "en":  "intellectual",
        "ja":  "知的な、知性の"
    },
    {
        "en":  "chief",
        "ja":  "主な、最高位の"
    },
    {
        "en":  "steady",
        "ja":  "着実な，一定の；安定した"
    },
    {
        "en":  "evil",
        "ja":  "邪悪な；有害な"
    },
    {
        "en":  "coastal",
        "ja":  "沿岸(地方)の"
    },
    {
        "en":  "dairy",
        "ja":  "〔集合的に〕乳製品；乳製品加工所［販売者］"
    },
    {
        "en":  "digestive",
        "ja":  "消化の"
    },
    {
        "en":  "loyal",
        "ja":  "（～に）忠実な（to）；誠実な"
    },
    {
        "en":  "sensory",
        "ja":  "感覚の"
    },
    {
        "en":  "fancy",
        "ja":  "（気まぐれな）好み；空想；思いつき"
    },
    {
        "en":  "spoil",
        "ja":  "を台無しにする；を甘やかす；だめになる"
    },
    {
        "en":  "stimulate",
        "ja":  "を刺激する"
    },
    {
        "en":  "distract",
        "ja":  "（注意など）をそらす"
    },
    {
        "en":  "bargain",
        "ja":  "買い得品；取引；契約"
    },
    {
        "en":  "emerge",
        "ja":  "明らかになる、現れる"
    },
    {
        "en":  "browse",
        "ja":  "（を）拾い読みする；（を）閲覧する；（商品など）を見て歩く"
    },
    {
        "en":  "define",
        "ja":  "を定義する、を明確に示す"
    },
    {
        "en":  "adjust",
        "ja":  "を調整する；を適合させる；順応する"
    },
    {
        "en":  "deserve",
        "ja":  "に値する"
    },
    {
        "en":  "undergo",
        "ja":  "を経験する；（手術など）を受ける；に耐える"
    },
    {
        "en":  "contradict",
        "ja":  "と矛盾する；に反対意見を言う"
    },
    {
        "en":  "withdraw",
        "ja":  "を引き出す；を撤回する；撤退する"
    },
    {
        "en":  "accompany",
        "ja":  "に同行する；に付随する"
    },
    {
        "en":  "infect",
        "ja":  "(人)を感染させる、を汚染する"
    },
    {
        "en":  "rebel",
        "ja":  "反逆者"
    },
    {
        "en":  "convert",
        "ja":  "を変える；を改宗［転向］させる；を交換する"
    },
    {
        "en":  "calculate",
        "ja":  "を計算する；を予測する"
    },
    {
        "en":  "utilize",
        "ja":  "を利用する（≒make use of）"
    },
    {
        "en":  "admit",
        "ja":  "～と(しぶしぶ)認める、を中に入れる"
    },
    {
        "en":  "punish",
        "ja":  "を罰する；に損傷を与える"
    },
    {
        "en":  "approve",
        "ja":  "賛成する；を承認する"
    },
    {
        "en":  "owe",
        "ja":  "に借りがある；のおかげである"
    },
    {
        "en":  "proceed",
        "ja":  "進む，進行する；（～を）続行する（with）"
    },
    {
        "en":  "navigate",
        "ja":  "（を）誘導する；（を）操縦する；（を）航行する"
    },
    {
        "en":  "postpone",
        "ja":  "を延期する（≒put off）"
    },
    {
        "en":  "swallow",
        "ja":  "（を）飲み込む；をうのみにする；に耐える"
    },
    {
        "en":  "tailor",
        "ja":  "を合わせて作る"
    },
    {
        "en":  "overhear",
        "ja":  "を偶然耳にする"
    },
    {
        "en":  "consequence",
        "ja":  "結果、重要さ"
    },
    {
        "en":  "application",
        "ja":  "申請書、申し込み、適用"
    },
    {
        "en":  "workout",
        "ja":  "運動、(運動競技の)練習"
    },
    {
        "en":  "obstacle",
        "ja":  "（～に対する）障害（物）（to）"
    },
    {
        "en":  "treaty",
        "ja":  "（国家間の）条約；協定"
    },
    {
        "en":  "deforestation",
        "ja":  "森林伐採"
    },
    {
        "en":  "infrastructure",
        "ja":  "基本的施設；（経済）基盤"
    },
    {
        "en":  "contribution",
        "ja":  "貢献、寄付(金)"
    },
    {
        "en":  "congestion",
        "ja":  "混雑"
    },
    {
        "en":  "exposure",
        "ja":  "身をさらすこと、暴露"
    },
    {
        "en":  "blow",
        "ja":  "強打、打撃、災難"
    },
    {
        "en":  "participation",
        "ja":  "参加"
    },
    {
        "en":  "crisis",
        "ja":  "危機、難局"
    },
    {
        "en":  "ancestor",
        "ja":  "先祖、祖先"
    },
    {
        "en":  "architect",
        "ja":  "建築家、設計者"
    },
    {
        "en":  "existence",
        "ja":  "存在、生存"
    },
    {
        "en":  "deposit",
        "ja":  "を置く；を預ける；を堆積させる"
    },
    {
        "en":  "finance",
        "ja":  "金融、財政(学)"
    },
    {
        "en":  "awareness",
        "ja":  "認識、意識"
    },
    {
        "en":  "intake",
        "ja":  "摂取量；受け入れ数；取り入れること"
    },
    {
        "en":  "witness",
        "ja":  "目撃者；証人；証拠，証言"
    },
    {
        "en":  "coverage",
        "ja":  "報道、(保険の)補償範囲、適用範囲"
    },
    {
        "en":  "lawsuit",
        "ja":  "(民事)訴訟"
    },
    {
        "en":  "session",
        "ja":  "集まり；（議会の）会期；（開会中の）議会"
    },
    {
        "en":  "means",
        "ja":  "〔単数・複数扱い〕手段；〔複数扱い〕資力，収入"
    },
    {
        "en":  "pioneer",
        "ja":  "先駆者、草分け、(未開地の)開拓者"
    },
    {
        "en":  "satisfaction",
        "ja":  "満足"
    },
    {
        "en":  "basis",
        "ja":  "根拠、基礎"
    },
    {
        "en":  "element",
        "ja":  "(構成)要素、成分"
    },
    {
        "en":  "phenomenon",
        "ja":  "現象、事象"
    },
    {
        "en":  "scale",
        "ja":  "規模、程度"
    },
    {
        "en":  "journal",
        "ja":  "(専門)雑誌、日刊[週刊]新聞"
    },
    {
        "en":  "grain",
        "ja":  "穀物；粒；きめ"
    },
    {
        "en":  "continent",
        "ja":  "大陸、(イギリスから見て)ヨーロッパ大陸"
    },
    {
        "en":  "headquarters",
        "ja":  "本社、(軍・警察・会社などの)本部"
    },
    {
        "en":  "globalization",
        "ja":  "国際化"
    },
    {
        "en":  "brochure",
        "ja":  "パンフレット、小冊子"
    },
    {
        "en":  "inspection",
        "ja":  "検査、点検"
    },
    {
        "en":  "attendance",
        "ja":  "出席[入場]者数、出席"
    },
    {
        "en":  "copper",
        "ja":  "銅"
    },
    {
        "en":  "dozen",
        "ja":  "12(個)、１ダース"
    },
    {
        "en":  "flu",
        "ja":  "インフルエンザ"
    },
    {
        "en":  "burial",
        "ja":  "埋葬"
    },
    {
        "en":  "mold",
        "ja":  "鋳型；鋳物；性格；かび"
    },
    {
        "en":  "patch",
        "ja":  "（～の）部分，斑点；継ぎ；貼り薬"
    },
    {
        "en":  "diagram",
        "ja":  "図(表)"
    },
    {
        "en":  "placement",
        "ja":  "(就職先・学校・里親などの)斡旋、配置"
    },
    {
        "en":  "shame",
        "ja":  "恥；残念なこと"
    },
    {
        "en":  "wheelchair",
        "ja":  "車椅子"
    },
    {
        "en":  "experienced",
        "ja":  "熟練した"
    },
    {
        "en":  "initial",
        "ja":  "初めの"
    },
    {
        "en":  "mainstream",
        "ja":  "（活動・思潮などの）主流；大勢"
    },
    {
        "en":  "appropriate",
        "ja":  "適切な"
    },
    {
        "en":  "fake",
        "ja":  "偽の；見せかけだけの"
    },
    {
        "en":  "alert",
        "ja":  "警戒して；敏速な"
    },
    {
        "en":  "fatal",
        "ja":  "致命的な、破滅的な"
    },
    {
        "en":  "nutritious",
        "ja":  "栄養になる"
    },
    {
        "en":  "sophisticated",
        "ja":  "高性能の，精巧な；洗練された"
    },
    {
        "en":  "automatic",
        "ja":  "自動の"
    },
    {
        "en":  "raw",
        "ja":  "生の；未加工の"
    },
    {
        "en":  "slight",
        "ja":  "わずかな；取るに足らない"
    },
    {
        "en":  "man-made",
        "ja":  "(物質などが)合成の、人工の"
    },
    {
        "en":  "aging",
        "ja":  "高齢化が進む、老朽化している"
    },
    {
        "en":  "spiritual",
        "ja":  "精神の（⇔material）；霊的な"
    },
    {
        "en":  "endangered",
        "ja":  "(動植物が)絶滅の危機にある"
    },
    {
        "en":  "sticky",
        "ja":  "ねばねばの、粘着性の"
    },
    {
        "en":  "fertile",
        "ja":  "肥沃な（⇔barren 不毛の）；多産の"
    },
    {
        "en":  "elsewhere",
        "ja":  "どこかほかのところへ[に、へ]"
    },
    {
        "en":  "altogether",
        "ja":  "完全に"
    },
    {
        "en":  "strictly",
        "ja":  "厳格に、厳しく"
    },
    {
        "en":  "beforehand",
        "ja":  "前もって、あらかじめ"
    },
    {
        "en":  "likewise",
        "ja":  "同様に（≒in the same way）"
    },
    {
        "en":  "detect",
        "ja":  "を感知する；を見つけ出す；に気づく"
    },
    {
        "en":  "combat",
        "ja":  "戦闘；対立"
    },
    {
        "en":  "pose",
        "ja":  "（危険）を引き起こす；（問題など）を提起する；（～を）装う（as）"
    },
    {
        "en":  "emphasize",
        "ja":  "を強調する；を重視する"
    },
    {
        "en":  "highlight",
        "ja":  "を目立たせる，強調する"
    },
    {
        "en":  "resist",
        "ja":  "に抵抗する；〔通例否定文で〕を我慢する"
    },
    {
        "en":  "exceed",
        "ja":  "を超える；に勝る"
    },
    {
        "en":  "relocate",
        "ja":  "(住居・事務所・住民など)を移転[移動]させる"
    },
    {
        "en":  "disprove",
        "ja":  "の誤りを証明する、の反証を挙げる"
    },
    {
        "en":  "crawl",
        "ja":  "はう；ゆっくり進む"
    },
    {
        "en":  "foster",
        "ja":  "をはぐくむ；を養育する；を心に抱く"
    },
    {
        "en":  "harass",
        "ja":  "を絶えず悩ます、を苦しめる"
    },
    {
        "en":  "magnify",
        "ja":  "を拡大する、を誇張する"
    },
    {
        "en":  "sneak",
        "ja":  "こっそり動く"
    },
    {
        "en":  "stray",
        "ja":  "はぐれる，（道に）迷う"
    },
    {
        "en":  "worsen",
        "ja":  "を悪化させる；悪化する（≒deteriorate）"
    },
    {
        "en":  "advocate",
        "ja":  "を主張する；を擁護する"
    },
    {
        "en":  "evacuate",
        "ja":  "を避難させる、から立ち退く"
    },
    {
        "en":  "verify",
        "ja":  "の正しさを証明［確認］する"
    },
    {
        "en":  "abuse",
        "ja":  "乱用；虐待"
    },
    {
        "en":  "scatter",
        "ja":  "をまき散らす；分散する"
    },
    {
        "en":  "endorse",
        "ja":  "を推奨する"
    },
    {
        "en":  "modify",
        "ja":  "を修正する；を緩和する"
    },
    {
        "en":  "penetrate",
        "ja":  "（に）浸透する；（に）進出する；（を）貫く；（を）見抜く"
    },
    {
        "en":  "conform",
        "ja":  "順応する；一致する"
    },
    {
        "en":  "leave",
        "ja":  "休暇"
    },
    {
        "en":  "tissue",
        "ja":  "（生物の）組織"
    },
    {
        "en":  "gut",
        "ja":  "腸、消化管、内臓"
    },
    {
        "en":  "lightning",
        "ja":  "雷、稲妻"
    },
    {
        "en":  "camel",
        "ja":  "ラクダ、黄褐色"
    },
    {
        "en":  "antioxidant",
        "ja":  "抗酸化物質、酸化防止剤"
    },
    {
        "en":  "disorder",
        "ja":  "障害，（心身の）不調；混乱"
    },
    {
        "en":  "cattle",
        "ja":  "〔集合的に〕牛"
    },
    {
        "en":  "oath",
        "ja":  "誓い、誓約"
    },
    {
        "en":  "monument",
        "ja":  "記念碑，遺跡；金字塔"
    },
    {
        "en":  "heating",
        "ja":  "暖房(装置)"
    },
    {
        "en":  "germ",
        "ja":  "細菌、病原菌"
    },
    {
        "en":  "legend",
        "ja":  "伝説、言い伝え、伝説的な人物"
    },
    {
        "en":  "auditorium",
        "ja":  "(学校の)講堂、公会堂"
    },
    {
        "en":  "therapy",
        "ja":  "療法；心理療法"
    },
    {
        "en":  "heritage",
        "ja":  "遺産"
    },
    {
        "en":  "invasion",
        "ja":  "侵害、侵入"
    },
    {
        "en":  "instruction",
        "ja":  "(製品の)使用書、指示、教育"
    },
    {
        "en":  "extinction",
        "ja":  "(家系・種などの)絶滅、消滅"
    },
    {
        "en":  "creativity",
        "ja":  "創造性、独創性"
    },
    {
        "en":  "plantation",
        "ja":  "(熱帯・亜熱帯の)(大)農園"
    },
    {
        "en":  "drought",
        "ja":  "干ばつ；（慢性的な）不足"
    },
    {
        "en":  "wealth",
        "ja":  "財産、富、豊富"
    },
    {
        "en":  "reminder",
        "ja":  "思い出させるもの、記念物[品]"
    },
    {
        "en":  "inquiry",
        "ja":  "問い合わせ、質問、調査"
    },
    {
        "en":  "investigation",
        "ja":  "(詳しい)調査、研究"
    },
    {
        "en":  "boundary",
        "ja":  "境界（線）；〔通例～ries〕限界"
    },
    {
        "en":  "compartment",
        "ja":  "(列車・客室などの仕切った)区画[部屋]"
    },
    {
        "en":  "substitute",
        "ja":  "を代わりに使う；（～の）代理をする（for）"
    },
    {
        "en":  "hybrid",
        "ja":  "雑種の；混成の"
    },
    {
        "en":  "characteristic",
        "ja":  "特徴"
    },
    {
        "en":  "routine",
        "ja":  "決まり切った仕事；いつもの手順"
    },
    {
        "en":  "edge",
        "ja":  "優勢、刃、端"
    },
    {
        "en":  "incident",
        "ja":  "出来事，事件；紛争"
    },
    {
        "en":  "clue",
        "ja":  "（～の）手がかり（to/about）；（パズルの）ヒント"
    },
    {
        "en":  "removal",
        "ja":  "除去、移動"
    },
    {
        "en":  "outcome",
        "ja":  "結果"
    },
    {
        "en":  "altitude",
        "ja":  "高度，標高"
    },
    {
        "en":  "closure",
        "ja":  "(工場・学校などの)閉鎖"
    },
    {
        "en":  "compound",
        "ja":  "を悪化させる；を合成する；を混合する"
    },
    {
        "en":  "surplus",
        "ja":  "余剰（⇔shortage 不足），過剰；黒字"
    },
    {
        "en":  "vaccine",
        "ja":  "ワクチン"
    },
    {
        "en":  "reference",
        "ja":  "言及、参照"
    },
    {
        "en":  "obligation",
        "ja":  "義務、責任"
    },
    {
        "en":  "ritual",
        "ja":  "儀式；（日常の）習慣的行為"
    },
    {
        "en":  "mean",
        "ja":  "意地の悪い、不親切な"
    },
    {
        "en":  "coral",
        "ja":  "サンゴ(製)の"
    },
    {
        "en":  "novel",
        "ja":  "斬新な、目新しい"
    },
    {
        "en":  "relevant",
        "ja":  "関係がある；適切な"
    },
    {
        "en":  "efficient",
        "ja":  "効率的な、有能な"
    },
    {
        "en":  "fragile",
        "ja":  "壊れやすい；虚弱な"
    },
    {
        "en":  "impressive",
        "ja":  "印象的な、感動的な"
    },
    {
        "en":  "offensive",
        "ja":  "不快な、攻撃的な"
    },
    {
        "en":  "distinct",
        "ja":  "明らかに異なる；明瞭な"
    },
    {
        "en":  "temporary",
        "ja":  "一時的な（⇔permanent）"
    },
    {
        "en":  "arrogant",
        "ja":  "横柄な，傲慢な"
    },
    {
        "en":  "spacious",
        "ja":  "広々とした"
    },
    {
        "en":  "reasonable",
        "ja":  "筋の通った、分別のある、(値段などが)手ごろな"
    },
    {
        "en":  "substantial",
        "ja":  "(数量などが)かなりの、重要な、実質的な"
    },
    {
        "en":  "disabled",
        "ja":  "障害のある；障害者用の"
    },
    {
        "en":  "straightforward",
        "ja":  "単純な；率直な"
    },
    {
        "en":  "tame",
        "ja":  "飼いならされた，人に慣れた；退屈な"
    },
    {
        "en":  "mandatory",
        "ja":  "義務的な、強制的な、命令の"
    },
    {
        "en":  "edible",
        "ja":  "食用の，食べられる"
    },
    {
        "en":  "outstanding",
        "ja":  "際立った；未払いの；未解決の"
    },
    {
        "en":  "deadly",
        "ja":  "致命的な、命にかかわる"
    },
    {
        "en":  "petty",
        "ja":  "低級の、心の狭い、取るに足らない"
    },
    {
        "en":  "definitely",
        "ja":  "間違いなく、確かに"
    },
    {
        "en":  "roughly",
        "ja":  "おおよそ、乱暴に"
    },
    {
        "en":  "virtually",
        "ja":  "ほとんど、実質的に"
    },
    {
        "en":  "apparently",
        "ja":  "(真偽のほどはともかく)聞いた[見た]ところでは、どうやら"
    },
    {
        "en":  "unfairly",
        "ja":  "不当に、不公平に"
    },
    {
        "en":  "briefly",
        "ja":  "少しの間に、簡潔に"
    },
    {
        "en":  "aside",
        "ja":  "わきに、別にして、考慮に入れないで"
    },
    {
        "en":  "legally",
        "ja":  "法的に、合法的に"
    },
    {
        "en":  "resort",
        "ja":  "（好ましくない手段に）訴える，頼る（to）"
    },
    {
        "en":  "submit",
        "ja":  "を提出する；（～に）従う（to）"
    },
    {
        "en":  "originate",
        "ja":  "由来する、生じる、始まる"
    },
    {
        "en":  "regret",
        "ja":  "を後悔する、を遺憾に思う"
    },
    {
        "en":  "cooperate",
        "ja":  "協力する"
    },
    {
        "en":  "revise",
        "ja":  "を修正する；を改訂する"
    },
    {
        "en":  "restrict",
        "ja":  "を制限する"
    },
    {
        "en":  "occupy",
        "ja":  "（空間・時間）を占める；を占領する"
    },
    {
        "en":  "fade",
        "ja":  "薄れる；衰える"
    },
    {
        "en":  "relieve",
        "ja":  "を和らげる；〔受身形で〕（...して）安心する（to do）；を解放する"
    },
    {
        "en":  "suppress",
        "ja":  "を抑える；を抑圧する"
    },
    {
        "en":  "starve",
        "ja":  "飢える；（～を）渇望する（for）；を飢えさせる"
    },
    {
        "en":  "scratch",
        "ja":  "を引っかく；を取り消す，削除する"
    },
    {
        "en":  "unite",
        "ja":  "団結する、一体化する"
    },
    {
        "en":  "grip",
        "ja":  "を握る；をとらえる"
    },
    {
        "en":  "surrender",
        "ja":  "を放棄する，引き渡す；（～に）屈する（to）"
    },
    {
        "en":  "twist",
        "ja":  "をねじる，ひねる；を歪曲する"
    },
    {
        "en":  "remodel",
        "ja":  "を改装する、を改造する"
    },
    {
        "en":  "triple",
        "ja":  "３倍になる、を３倍にする"
    },
    {
        "en":  "drown",
        "ja":  "溺死する；を水浸しにする"
    },
    {
        "en":  "lean",
        "ja":  "傾く；寄りかかる；をもたせかける"
    },
    {
        "en":  "soak",
        "ja":  "を浸す；をずぶぬれにする；浸る"
    },
    {
        "en":  "hover",
        "ja":  "(鳥・昆虫・ヘリコプターなどが)空中(の一点)に止まる"
    },
    {
        "en":  "interrupt",
        "ja":  "を中断させる；（の）邪魔をする"
    },
    {
        "en":  "socialize",
        "ja":  "(社会的に)交際する"
    },
    {
        "en":  "termite",
        "ja":  "シロアリ"
    },
    {
        "en":  "microbe",
        "ja":  "微生物；細菌"
    },
    {
        "en":  "beverage",
        "ja":  "（水以外の）飲み物，飲料"
    },
    {
        "en":  "paperwork",
        "ja":  "(必要)書類、書類事務"
    },
    {
        "en":  "descendant",
        "ja":  "子孫"
    },
    {
        "en":  "sculpture",
        "ja":  "彫刻（作品）"
    },
    {
        "en":  "handout",
        "ja":  "(講演・授業などの)配布物、プリント"
    },
    {
        "en":  "replacement",
        "ja":  "交換、交替、代わりの人[もの]"
    },
    {
        "en":  "minister",
        "ja":  "大臣"
    },
    {
        "en":  "stream",
        "ja":  "小川"
    },
    {
        "en":  "predator",
        "ja":  "捕食動物；略奪者"
    },
    {
        "en":  "observer",
        "ja":  "監視員、観察者"
    },
    {
        "en":  "commission",
        "ja":  "代理手数料、歩合、委員会"
    },
    {
        "en":  "committee",
        "ja":  "委員会"
    },
    {
        "en":  "junk",
        "ja":  "がらくた、つまらないもの"
    },
    {
        "en":  "departure",
        "ja":  "出発"
    },
    {
        "en":  "description",
        "ja":  "描写、説明"
    },
    {
        "en":  "supervisor",
        "ja":  "監督者；指導教員"
    },
    {
        "en":  "guidance",
        "ja":  "指導、案内"
    },
    {
        "en":  "landscape",
        "ja":  "眺め、風景、景色"
    },
    {
        "en":  "crew",
        "ja":  "(船の)乗組員、(飛行機・列車などの)乗務員"
    },
    {
        "en":  "drain",
        "ja":  "（液体）を流出させる；（液体が）流れ出る"
    },
    {
        "en":  "stereotype",
        "ja":  "固定観念、ステレオタイプ"
    },
    {
        "en":  "edition",
        "ja":  "(刊行物の)版"
    },
    {
        "en":  "graphic",
        "ja":  "図、挿絵"
    },
    {
        "en":  "pathway",
        "ja":  "小道、細道"
    },
    {
        "en":  "reunion",
        "ja":  "再会（の集い）；再結合"
    },
    {
        "en":  "cliff",
        "ja":  "崖、絶壁"
    },
    {
        "en":  "coordinator",
        "ja":  "コーディネーター、取りまとめ役、責任者"
    },
    {
        "en":  "depth",
        "ja":  "深さ、深み"
    },
    {
        "en":  "liver",
        "ja":  "肝臓"
    },
    {
        "en":  "monopoly",
        "ja":  "独占（権）"
    },
    {
        "en":  "usage",
        "ja":  "（使）用法；語法；習慣"
    },
    {
        "en":  "chart",
        "ja":  "図，グラフ；海図；ヒットチャート"
    },
    {
        "en":  "expectancy",
        "ja":  "期待、見込み"
    },
    {
        "en":  "nowhere",
        "ja":  "どの場所も～ない"
    },
    {
        "en":  "courthouse",
        "ja":  "裁判所(の建物)"
    },
    {
        "en":  "cove",
        "ja":  "入江、小湾"
    },
    {
        "en":  "dock",
        "ja":  "埠頭、波止場、(艦船の)ドック"
    },
    {
        "en":  "ministry",
        "ja":  "省"
    },
    {
        "en":  "inflammation",
        "ja":  "炎症、点火、引火"
    },
    {
        "en":  "cholesterol",
        "ja":  "コレステロール"
    },
    {
        "en":  "gender",
        "ja":  "(社会的・文化的)性別、ジェンダー"
    },
    {
        "en":  "depression",
        "ja":  "うつ病、意気消沈、不景気"
    },
    {
        "en":  "stem",
        "ja":  "（草木の）茎，幹"
    },
    {
        "en":  "personnel",
        "ja":  "〔集合的に〕職員，社員"
    },
    {
        "en":  "controversy",
        "ja":  "論争"
    },
    {
        "en":  "recognition",
        "ja":  "(人・物が)それと分かること、認めること、認識"
    },
    {
        "en":  "applicant",
        "ja":  "応募者、志願者"
    },
    {
        "en":  "anthropologist",
        "ja":  "人類学者"
    },
    {
        "en":  "sewage",
        "ja":  "下水"
    },
    {
        "en":  "acceptable",
        "ja":  "受け入れられる、容認できる"
    },
    {
        "en":  "nuclear",
        "ja":  "原子力利用の、核エネルギーの"
    },
    {
        "en":  "moral",
        "ja":  "道徳(上)の、倫理的な"
    },
    {
        "en":  "marine",
        "ja":  "海の；船舶の"
    },
    {
        "en":  "conventional",
        "ja":  "伝統的な、型にはまった"
    },
    {
        "en":  "awful",
        "ja":  "ひどい；嫌な；ものすごい"
    },
    {
        "en":  "consistent",
        "ja":  "着実な、安定した、首尾一貫した"
    },
    {
        "en":  "primitive",
        "ja":  "原始的な；未開の"
    },
    {
        "en":  "mature",
        "ja":  "成熟した；熟した"
    },
    {
        "en":  "unfamiliar",
        "ja":  "（～に）不慣れな（with）；（～に）（よく）知られていない（to）"
    },
    {
        "en":  "impractical",
        "ja":  "実用的ではない、非現実的な"
    },
    {
        "en":  "unpredictable",
        "ja":  "変わりやすい、予測できない"
    },
    {
        "en":  "misleading",
        "ja":  "誤解させる、紛らわしい"
    },
    {
        "en":  "plentiful",
        "ja":  "豊富な、十分な"
    },
    {
        "en":  "Mediterranean",
        "ja":  "地中海(沿岸地域)の"
    },
    {
        "en":  "unsafe",
        "ja":  "安全でない、危険な"
    },
    {
        "en":  "bare",
        "ja":  "露出した、裸の"
    },
    {
        "en":  "feeble",
        "ja":  "病弱な、(体が)弱々しい"
    },
    {
        "en":  "horrible",
        "ja":  "実にひどい、ぞっとする"
    },
    {
        "en":  "scenic",
        "ja":  "景色の良い"
    },
    {
        "en":  "supplementary",
        "ja":  "補足の、追加の"
    },
    {
        "en":  "nosy",
        "ja":  "詮索好きな、おせっかいな"
    },
    {
        "en":  "intermediate",
        "ja":  "中級の；中間の"
    },
    {
        "en":  "universal",
        "ja":  "(あらゆる人に)共通の、全員の、普遍的な"
    },
    {
        "en":  "capture",
        "ja":  "を捕らえる、を捕虜にする"
    },
    {
        "en":  "arise",
        "ja":  "起こる、出現する"
    },
    {
        "en":  "implement",
        "ja":  "を実行［実施］する"
    },
    {
        "en":  "reproduce",
        "ja":  "を複製する；を繁殖させる；繁殖する"
    },
    {
        "en":  "seize",
        "ja":  "をつかむ；を奪い取る；を没収する"
    },
    {
        "en":  "dominate",
        "ja":  "を支配する、優勢である"
    },
    {
        "en":  "complicate",
        "ja":  "を複雑にする"
    },
    {
        "en":  "scan",
        "ja":  "を走査する；をざっと見る；を注意深く調べる"
    },
    {
        "en":  "negotiate",
        "ja":  "交渉する；を（交渉して）取り決める"
    },
    {
        "en":  "illustrate",
        "ja":  "を説明する、を例示する"
    },
    {
        "en":  "encounter",
        "ja":  "に遭遇する"
    },
    {
        "en":  "confine",
        "ja":  "を限定する；〔通例受身形で〕閉じ込められる"
    },
    {
        "en":  "transmit",
        "ja":  "を伝える；（電波・信号など）を送る"
    },
    {
        "en":  "administer",
        "ja":  "を管理する、を経営する、を治める、(治療)を施す"
    },
    {
        "en":  "ease",
        "ja":  "を和らげる、緩和する"
    },
    {
        "en":  "resume",
        "ja":  "（を）再開する；を取り戻す"
    },
    {
        "en":  "pursue",
        "ja":  "を追跡する、を追求する"
    },
    {
        "en":  "decay",
        "ja":  "腐敗する（≒rot）；（徐々に）衰える"
    },
    {
        "en":  "shrink",
        "ja":  "縮む，縮小する；減少する；ひるむ"
    },
    {
        "en":  "cherish",
        "ja":  "を大切にする；を心に抱く"
    },
    {
        "en":  "launch",
        "ja":  "を売り出す、を開始する、(ロケットなど)を発射する"
    },
    {
        "en":  "accommodate",
        "ja":  "を収容する；を（～に）適応させる（to）"
    },
    {
        "en":  "withstand",
        "ja":  "に耐える"
    },
    {
        "en":  "halt",
        "ja":  "を止める；止まる"
    },
    {
        "en":  "transform",
        "ja":  "を大きく変える"
    },
    {
        "en":  "transplant",
        "ja":  "を移植する；を移住させる"
    },
    {
        "en":  "retail",
        "ja":  "小売り（⇔wholesale 卸売り）"
    },
    {
        "en":  "abandon",
        "ja":  "を捨てる、を放棄する"
    },
    {
        "en":  "developer",
        "ja":  "宅地造成業者、開発者"
    },
    {
        "en":  "circulation",
        "ja":  "循環；流通；（新聞・雑誌の）発行部数"
    },
    {
        "en":  "appliance",
        "ja":  "(特に家庭用の)器具"
    },
    {
        "en":  "bond",
        "ja":  "きずな、債券、契約"
    },
    {
        "en":  "circuit",
        "ja":  "周回すること、回路、巡回"
    },
    {
        "en":  "innovation",
        "ja":  "(技術)革新、新機軸"
    },
    {
        "en":  "infant",
        "ja":  "幼児、乳児"
    },
    {
        "en":  "transaction",
        "ja":  "（商）取引；（人と人との）交流"
    },
    {
        "en":  "celebrity",
        "ja":  "有名人、著名人"
    },
    {
        "en":  "checkup",
        "ja":  "健康診断、検査"
    },
    {
        "en":  "makeup",
        "ja":  "化粧；化粧品；構成；性質"
    },
    {
        "en":  "respondent",
        "ja":  "(調査・アンケートなどの)回答者"
    },
    {
        "en":  "well-being",
        "ja":  "健康、幸福"
    },
    {
        "en":  "flaw",
        "ja":  "欠点、傷、ひび"
    },
    {
        "en":  "strain",
        "ja":  "に負担をかける；を緊張させる；を漉す"
    },
    {
        "en":  "rivalry",
        "ja":  "ライバル意識、競争"
    },
    {
        "en":  "publicity",
        "ja":  "一般に知られること、評判、宣伝"
    },
    {
        "en":  "consent",
        "ja":  "同意，承諾"
    },
    {
        "en":  "addiction",
        "ja":  "依存"
    },
    {
        "en":  "profession",
        "ja":  "職業；専門職；同業者仲間"
    },
    {
        "en":  "sacrifice",
        "ja":  "犠牲；いけにえ"
    },
    {
        "en":  "nerve",
        "ja":  "神経；〔～s〕神経過敏；（...する）度胸（to do）"
    },
    {
        "en":  "assumption",
        "ja":  "(確証のない)仮定、想定、思い込み"
    },
    {
        "en":  "context",
        "ja":  "文脈、背景、状況"
    },
    {
        "en":  "era",
        "ja":  "時代"
    },
    {
        "en":  "trait",
        "ja":  "特徴、特色"
    },
    {
        "en":  "voucher",
        "ja":  "クーポン券、商品券"
    },
    {
        "en":  "draft",
        "ja":  "下書き；為替手形；隙間風"
    },
    {
        "en":  "blaze",
        "ja":  "炎、強いか輝き"
    },
    {
        "en":  "currency",
        "ja":  "通貨、普及"
    },
    {
        "en":  "stance",
        "ja":  "立場、対処の姿勢"
    },
    {
        "en":  "fluid",
        "ja":  "流動体，液体"
    },
    {
        "en":  "dispute",
        "ja":  "に異議を唱える；（を）議論する"
    },
    {
        "en":  "counterpart",
        "ja":  "相当する物［人］"
    },
    {
        "en":  "perception",
        "ja":  "認識、知覚"
    },
    {
        "en":  "custody",
        "ja":  "親権、保護、管理、拘留"
    },
    {
        "en":  "venue",
        "ja":  "会場、開催地"
    },
    {
        "en":  "dread",
        "ja":  "をひどく恐れる"
    },
    {
        "en":  "incentive",
        "ja":  "動機（づけ）；報奨金"
    },
    {
        "en":  "disgust",
        "ja":  "をむかつかせる；に愛想を尽かせる"
    },
    {
        "en":  "province",
        "ja":  "州，省；〔the ～s〕地方；分野"
    },
    {
        "en":  "proponent",
        "ja":  "支持者"
    },
    {
        "en":  "commercial",
        "ja":  "商業(上)の、営利的な"
    },
    {
        "en":  "excessive",
        "ja":  "過度の、法外な"
    },
    {
        "en":  "vulnerable",
        "ja":  "（攻撃などに）弱い，もろい；傷つきやすい"
    },
    {
        "en":  "protective",
        "ja":  "保護する、守ろうとする"
    },
    {
        "en":  "secure",
        "ja":  "安全な、確かな"
    },
    {
        "en":  "obvious",
        "ja":  "明らかな"
    },
    {
        "en":  "reluctant",
        "ja":  "気が進まない，嫌がる（⇔willing）"
    },
    {
        "en":  "confident",
        "ja":  "確信して、自信に満ちた"
    },
    {
        "en":  "intelligent",
        "ja":  "知能の高い、利口な"
    },
    {
        "en":  "barren",
        "ja":  "不毛の、作物ができない"
    },
    {
        "en":  "epidemic",
        "ja":  "流行（病）；蔓延"
    },
    {
        "en":  "reliable",
        "ja":  "信頼できる"
    },
    {
        "en":  "curious",
        "ja":  "好奇心の強い、詮索好きな"
    },
    {
        "en":  "hasty",
        "ja":  "急ぎの、早まった"
    },
    {
        "en":  "behavioral",
        "ja":  "行動の"
    },
    {
        "en":  "bulky",
        "ja":  "かさばった、扱いにくいほど大きい"
    },
    {
        "en":  "faulty",
        "ja":  "(機械・装置などが)欠陥のある"
    },
    {
        "en":  "hectic",
        "ja":  "やたらと忙しい"
    },
    {
        "en":  "knowledgeable",
        "ja":  "よく知っている、物知りの"
    },
    {
        "en":  "tense",
        "ja":  "張り詰めた，緊張した"
    },
    {
        "en":  "intact",
        "ja":  "損なわれていない，手つかずの"
    },
    {
        "en":  "comprehensive",
        "ja":  "包括的な、広範囲にわたる"
    },
    {
        "en":  "hesitant",
        "ja":  "ためらいがちな"
    },
    {
        "en":  "scarce",
        "ja":  "乏しい；珍しい"
    },
    {
        "en":  "defensive",
        "ja":  "防御的な"
    },
    {
        "en":  "permanently",
        "ja":  "永遠に、いつも"
    },
    {
        "en":  "nonetheless",
        "ja":  "それにもかかわらず，それでもなお"
    },
    {
        "en":  "primarily",
        "ja":  "主として、初めに"
    },
    {
        "en":  "intentionally",
        "ja":  "故意に、意図的に"
    },
    {
        "en":  "abruptly",
        "ja":  "突然に"
    },
    {
        "en":  "outsource",
        "ja":  "を外注する、を業務委託する"
    },
    {
        "en":  "applaud",
        "ja":  "に拍手する、を賞賛する"
    },
    {
        "en":  "bribe",
        "ja":  "賄賂"
    },
    {
        "en":  "replicate",
        "ja":  "(同一実験など)を繰り返す、を複製する"
    },
    {
        "en":  "stroll",
        "ja":  "散歩する、ぶらぶら歩く"
    },
    {
        "en":  "swell",
        "ja":  "膨張する，腫れる；を膨らませる"
    },
    {
        "en":  "uphold",
        "ja":  "を支持する、を確認する、を維持する"
    },
    {
        "en":  "vomit",
        "ja":  "吐く、もどす"
    },
    {
        "en":  "expire",
        "ja":  "期限が切れる"
    },
    {
        "en":  "recruit",
        "ja":  "を募る；に新人を補充する"
    },
    {
        "en":  "enhance",
        "ja":  "を高める、を増す"
    },
    {
        "en":  "accumulate",
        "ja":  "を蓄積する，集める；積もる"
    },
    {
        "en":  "designate",
        "ja":  "を指定する；を任命する"
    },
    {
        "en":  "conceal",
        "ja":  "を隠す（≒hide）；を秘密にする"
    },
    {
        "en":  "disregard",
        "ja":  "を無視する；を軽視する"
    },
    {
        "en":  "accelerate",
        "ja":  "を加速させる，促進する；加速する"
    },
    {
        "en":  "revive",
        "ja":  "を復活させる；復活する"
    },
    {
        "en":  "enact",
        "ja":  "(法案)を制定する、を通過させる"
    },
    {
        "en":  "exert",
        "ja":  "を及ぼす；（力など）を行使する"
    },
    {
        "en":  "leak",
        "ja":  "漏れる；を漏らす"
    },
    {
        "en":  "jail",
        "ja":  "刑務所，拘置所（≒prison）"
    },
    {
        "en":  "reform",
        "ja":  "を改革する、を改善する"
    },
    {
        "en":  "declare",
        "ja":  "を宣言する、を断言する"
    },
    {
        "en":  "outline",
        "ja":  "の要点を述べる；の輪郭を描く"
    },
    {
        "en":  "annoy",
        "ja":  "をいらいらさせる、を悩ます"
    },
    {
        "en":  "interfere",
        "ja":  "干渉する，介入する；邪魔する"
    },
    {
        "en":  "nest",
        "ja":  "(鳥の)巣"
    },
    {
        "en":  "founder",
        "ja":  "創設者"
    },
    {
        "en":  "biologist",
        "ja":  "生物学者"
    },
    {
        "en":  "arrangement",
        "ja":  "準備、配置、取り決め"
    },
    {
        "en":  "landfill",
        "ja":  "ごみ埋め立て地"
    },
    {
        "en":  "trunk",
        "ja":  "(木の)幹、(象の)鼻、(自動車の)"
    },
    {
        "en":  "principle",
        "ja":  "(個人の)主義、信条、原則"
    },
    {
        "en":  "series",
        "ja":  "連続、一続き"
    },
    {
        "en":  "independence",
        "ja":  "独立、自立"
    },
    {
        "en":  "exploration",
        "ja":  "探検、調査"
    },
    {
        "en":  "justice",
        "ja":  "正義、公正、司法、裁判"
    },
    {
        "en":  "humanity",
        "ja":  "人類"
    },
    {
        "en":  "involvement",
        "ja":  "関与、巻き込まれること"
    },
    {
        "en":  "accounting",
        "ja":  "経理、会計(学)"
    },
    {
        "en":  "discrimination",
        "ja":  "（～に対する）差別（against）；区別"
    },
    {
        "en":  "inequality",
        "ja":  "不平等"
    },
    {
        "en":  "master",
        "ja":  "修士"
    },
    {
        "en":  "millennium",
        "ja":  "千年間，千年紀"
    },
    {
        "en":  "refusal",
        "ja":  "拒否、拒絶"
    },
    {
        "en":  "wound",
        "ja":  "（銃弾・刃物などによる）傷；痛手"
    },
    {
        "en":  "absence",
        "ja":  "不在、欠席"
    },
    {
        "en":  "distribution",
        "ja":  "分配、配給"
    },
    {
        "en":  "wilderness",
        "ja":  "荒野；（庭・町などの）放置された部分"
    },
    {
        "en":  "concentration",
        "ja":  "濃度、集中、専念"
    },
    {
        "en":  "craft",
        "ja":  "工芸品、(手先でする)作業"
    },
    {
        "en":  "crust",
        "ja":  "地殻、パンの耳、(動物の)甲殻"
    },
    {
        "en":  "basement",
        "ja":  "地階、地下室"
    },
    {
        "en":  "janitor",
        "ja":  "(アパート・ビル・学校などの)用務員、管理人"
    },
    {
        "en":  "prejudice",
        "ja":  "偏見、先入観"
    },
    {
        "en":  "prosperity",
        "ja":  "繁栄、繁盛"
    },
    {
        "en":  "robbery",
        "ja":  "強盗(事件)"
    },
    {
        "en":  "warranty",
        "ja":  "保証(書)"
    },
    {
        "en":  "appetite",
        "ja":  "食欲；欲求"
    },
    {
        "en":  "bullet",
        "ja":  "銃弾"
    },
    {
        "en":  "preparation",
        "ja":  "準備、支度"
    },
    {
        "en":  "citizenship",
        "ja":  "市民権、公民権、市民[国民]であること"
    },
    {
        "en":  "stale",
        "ja":  "(パンなどが)堅くなった、鮮度の落ちた、陳腐な"
    },
    {
        "en":  "disadvantaged",
        "ja":  "(経済的・社会的に)恵まれない"
    },
    {
        "en":  "ongoing",
        "ja":  "継続している，進行中の"
    },
    {
        "en":  "sturdy",
        "ja":  "頑丈な、たくましい、不屈の"
    },
    {
        "en":  "unauthorized",
        "ja":  "権限のない、(公的に)認可されていない"
    },
    {
        "en":  "verbal",
        "ja":  "口頭での、言葉の[に関する]"
    },
    {
        "en":  "weary",
        "ja":  "疲れ果てた；（～に）うんざりした（of）"
    },
    {
        "en":  "equivalent",
        "ja":  "相当する、同等の"
    },
    {
        "en":  "intense",
        "ja":  "極度の、激しい"
    },
    {
        "en":  "consecutive",
        "ja":  "連続した"
    },
    {
        "en":  "noticeable",
        "ja":  "著しい、目立つ"
    },
    {
        "en":  "crucial",
        "ja":  "重大な、決定的な"
    },
    {
        "en":  "electrical",
        "ja":  "電気の、電気を扱う"
    },
    {
        "en":  "steep",
        "ja":  "（傾斜が）急な；急激な；法外な"
    },
    {
        "en":  "civil",
        "ja":  "(軍人・官史に対して)民間の、一般市民の"
    },
    {
        "en":  "supreme",
        "ja":  "最高の"
    },
    {
        "en":  "elite",
        "ja":  "えり抜きの"
    },
    {
        "en":  "broad",
        "ja":  "(幅の)広い、広範囲な"
    },
    {
        "en":  "industrial",
        "ja":  "産業の、工業の"
    },
    {
        "en":  "allied",
        "ja":  "連合の、同盟を組んだ"
    },
    {
        "en":  "external",
        "ja":  "外部の；対外的な"
    },
    {
        "en":  "mere",
        "ja":  "ほんの、単なる"
    },
    {
        "en":  "latter",
        "ja":  "後半の、後ろの方の、後者の"
    },
    {
        "en":  "presidential",
        "ja":  "大統領の[による]、社長の"
    },
    {
        "en":  "ethical",
        "ja":  "倫理(上)の、道徳の"
    },
    {
        "en":  "realistic",
        "ja":  "現実的な、実際的な"
    },
    {
        "en":  "harmless",
        "ja":  "害のない"
    },
    {
        "en":  "underlying",
        "ja":  "潜在的な、根本的な"
    },
    {
        "en":  "urgent",
        "ja":  "緊急の"
    },
    {
        "en":  "complimentary",
        "ja":  "無料の、賞賛する"
    },
    {
        "en":  "eager",
        "ja":  "熱望して、熱心な"
    },
    {
        "en":  "loudly",
        "ja":  "大声で、騒々しく"
    },
    {
        "en":  "accordingly",
        "ja":  "それ相応に、従って、そんなわけで"
    },
    {
        "en":  "occasionally",
        "ja":  "ときどき"
    },
    {
        "en":  "smoothly",
        "ja":  "順調に、滑らかに"
    },
    {
        "en":  "frankly",
        "ja":  "率直に、正直に"
    },
    {
        "en":  "notably",
        "ja":  "とりわけ"
    },
    {
        "en":  "continuously",
        "ja":  "連続して、継続して"
    },
    {
        "en":  "compel",
        "ja":  "（人）に強いて～させる"
    },
    {
        "en":  "distinguish",
        "ja":  "区別する、を区別する"
    },
    {
        "en":  "heighten",
        "ja":  "を高める、を増大させる"
    },
    {
        "en":  "ruin",
        "ja":  "を台無しにする、を駄目にする"
    },
    {
        "en":  "equip",
        "ja":  "に備えつける"
    },
    {
        "en":  "export",
        "ja":  "を輸出する"
    },
    {
        "en":  "glance",
        "ja":  "ちらりと見る"
    },
    {
        "en":  "notify",
        "ja":  "に知らせる"
    },
    {
        "en":  "overdo",
        "ja":  "を使い過ぎる、をやり過ぎる"
    },
    {
        "en":  "pierce",
        "ja":  "に穴を開ける、を突き通す"
    },
    {
        "en":  "overestimate",
        "ja":  "を過大評価する[見積もる]"
    },
    {
        "en":  "raid",
        "ja":  "(警察が)に手入れを行う、(軍隊が)を襲撃する"
    },
    {
        "en":  "recall",
        "ja":  "を思い出す、(商品など)を回収する"
    },
    {
        "en":  "simplify",
        "ja":  "を簡単にする"
    },
    {
        "en":  "wrinkle",
        "ja":  "(顔などに)しわを寄せる、(衣装など)にしわを作る"
    },
    {
        "en":  "conspire",
        "ja":  "陰謀を企てる、共謀する"
    },
    {
        "en":  "imitate",
        "ja":  "をまねる、を見習う"
    },
    {
        "en":  "inhale",
        "ja":  "を吸い込む"
    },
    {
        "en":  "overrate",
        "ja":  "過大評価される"
    },
    {
        "en":  "sympathize",
        "ja":  "同情する"
    },
    {
        "en":  "glide",
        "ja":  "滑らかに動く、音もなく移動する"
    },
    {
        "en":  "kidnap",
        "ja":  "を誘拐する"
    },
    {
        "en":  "pretend",
        "ja":  "のつもりになる、～するふりをする"
    },
    {
        "en":  "simmer",
        "ja":  "(煮立たない程度に)こことこ煮える[≒boil gently]"
    },
    {
        "en":  "thaw",
        "ja":  "解凍される、溶ける"
    },
    {
        "en":  "unfold",
        "ja":  "（閉じたもの）を開く；を明らかにする；開く；明らかになる"
    },
    {
        "en":  "detain",
        "ja":  "を勾留[留置]する、(人)を引き留める"
    },
    {
        "en":  "puncture",
        "ja":  "(タイヤ)をパンクさせる、に穴をあける"
    },
    {
        "en":  "strangle",
        "ja":  "(発展・活動など)を抑圧する、を窒息させる"
    },
    {
        "en":  "hygiene",
        "ja":  "衛生（状態）；健康法"
    },
    {
        "en":  "oppression",
        "ja":  "抑圧、虐待"
    },
    {
        "en":  "collaboration",
        "ja":  "合作、共同、協力"
    },
    {
        "en":  "harbor",
        "ja":  "港、避難所"
    },
    {
        "en":  "lawn",
        "ja":  "芝生"
    },
    {
        "en":  "pedestrian",
        "ja":  "歩行者"
    },
    {
        "en":  "racism",
        "ja":  "人種差別(主義[政策])"
    },
    {
        "en":  "summit",
        "ja":  "(先進国)首脳会議、サミット、(山などの)頂上"
    },
    {
        "en":  "bug",
        "ja":  "病原菌（が起こす病気）；虫；盗聴器；（機械・プログラムの）欠陥"
    },
    {
        "en":  "dirt",
        "ja":  "汚れ、泥、ほこり"
    },
    {
        "en":  "maternity",
        "ja":  "妊産婦の、母であること"
    },
    {
        "en":  "stroke",
        "ja":  "脳卒中；（ボールを）打つこと；（雷などの）一撃"
    },
    {
        "en":  "tale",
        "ja":  "(事実・伝説・架空の)話、(文学作品としての)物語"
    },
    {
        "en":  "certainty",
        "ja":  "確実性、確信"
    },
    {
        "en":  "imbalance",
        "ja":  "不均衡、アンバランス"
    },
    {
        "en":  "incidence",
        "ja":  "発生(率)"
    },
    {
        "en":  "pit",
        "ja":  "穴、くぼみ"
    },
    {
        "en":  "texture",
        "ja":  "感触，手触り；本質；質感"
    },
    {
        "en":  "thumb",
        "ja":  "(手の)親指"
    },
    {
        "en":  "undergraduate",
        "ja":  "学部学生"
    },
    {
        "en":  "wisdom",
        "ja":  "知恵、賢明さ"
    },
    {
        "en":  "bride",
        "ja":  "花嫁、新婦"
    },
    {
        "en":  "dictator",
        "ja":  "独裁者、専制君主"
    },
    {
        "en":  "signature",
        "ja":  "署名；特徴"
    },
    {
        "en":  "testament",
        "ja":  "あかし、証拠"
    },
    {
        "en":  "attachment",
        "ja":  "添付ファイル、添付書類"
    },
    {
        "en":  "bachelor",
        "ja":  "独身の男性、学士"
    },
    {
        "en":  "blister",
        "ja":  "水ぶくれ"
    },
    {
        "en":  "blockade",
        "ja":  "(港などの)封鎖、経済[通信]封鎖"
    },
    {
        "en":  "condo",
        "ja":  "分譲マンション"
    },
    {
        "en":  "invoice",
        "ja":  "明細請求書、納品書"
    },
    {
        "en":  "leisure",
        "ja":  "自由な時間、余暇"
    },
    {
        "en":  "meditation",
        "ja":  "瞑想、黙想"
    },
    {
        "en":  "procession",
        "ja":  "(儀式などの)行列、行進"
    },
    {
        "en":  "unrest",
        "ja":  "(社会的な)混乱、不安、(心の)動揺"
    },
    {
        "en":  "equator",
        "ja":  "赤道"
    },
    {
        "en":  "exhausted",
        "ja":  "疲れ果てた"
    },
    {
        "en":  "problematic",
        "ja":  "問題のある、疑わしい"
    },
    {
        "en":  "desirable",
        "ja":  "望ましい"
    },
    {
        "en":  "geological",
        "ja":  "地質(学)上の"
    },
    {
        "en":  "rash",
        "ja":  "早まった、軽率な"
    },
    {
        "en":  "solitary",
        "ja":  "ひとりの、孤独の"
    },
    {
        "en":  "uneven",
        "ja":  "でこぼこな、平でない"
    },
    {
        "en":  "antique",
        "ja":  "骨董の，アンティークの；古風な"
    },
    {
        "en":  "dense",
        "ja":  "密集した，密度の高い；（霧などが）濃い"
    },
    {
        "en":  "economical",
        "ja":  "経済的な、安上がりな"
    },
    {
        "en":  "fictional",
        "ja":  "架空の、フィクションの"
    },
    {
        "en":  "gradual",
        "ja":  "徐々の，緩やかな"
    },
    {
        "en":  "intimate",
        "ja":  "親密な；密接な"
    },
    {
        "en":  "lengthy",
        "ja":  "長い、長時間の"
    },
    {
        "en":  "ultimate",
        "ja":  "最終の、究極の"
    },
    {
        "en":  "victorious",
        "ja":  "勝利を得た、勝ち誇った"
    },
    {
        "en":  "witty",
        "ja":  "機知に富んだ"
    },
    {
        "en":  "blurry",
        "ja":  "ぼやけた、不鮮明な"
    },
    {
        "en":  "exceptional",
        "ja":  "例外的に優れた、まれな"
    },
    {
        "en":  "finite",
        "ja":  "有限の、限られた"
    },
    {
        "en":  "on-the-job",
        "ja":  "実地の、職場での"
    },
    {
        "en":  "vacant",
        "ja":  "空いている"
    },
    {
        "en":  "cheery",
        "ja":  "陽気な、元気な"
    },
    {
        "en":  "cowardly",
        "ja":  "卑怯な、臆病な"
    },
    {
        "en":  "immeasurable",
        "ja":  "計り知れない、果てしない、広大な"
    },
    {
        "en":  "impaired",
        "ja":  "～に障害のある、弱った、損なわれた"
    },
    {
        "en":  "impassable",
        "ja":  "(川・道などが)通行できない、(困難・障害などが)克服できない"
    },
    {
        "en":  "inactive",
        "ja":  "不活発な、停止中の"
    },
    {
        "en":  "inconvenient",
        "ja":  "不便な、不都合な"
    },
    {
        "en":  "superstitious",
        "ja":  "迷信深い、迷信の"
    },
    {
        "en":  "unpleasant",
        "ja":  "不愉快な、いやな"
    },
    {
        "en":  "wicked",
        "ja":  "悪意のある、意地の悪い"
    },
    {
        "en":  "ecological",
        "ja":  "環境の、生態(学)の"
    },
    {
        "en":  "imaginary",
        "ja":  "想像上の、架空の"
    },
    {
        "en":  "ripe",
        "ja":  "熟した；成熟した"
    },
    {
        "en":  "disguise",
        "ja":  "を（～に）変装させる（as）；を偽る"
    },
    {
        "en":  "curb",
        "ja":  "を抑制する、を制御する"
    },
    {
        "en":  "restrain",
        "ja":  "を制止する；を規制する"
    },
    {
        "en":  "stumble",
        "ja":  "よろけながら歩く；（～に）つまずく（on/over）"
    },
    {
        "en":  "diminish",
        "ja":  "を減らす；減少する（≒decrease）"
    },
    {
        "en":  "rotate",
        "ja":  "回転する；循環する；を回転させる"
    },
    {
        "en":  "compress",
        "ja":  "を要約する、を短縮する、を圧縮して詰め込む"
    },
    {
        "en":  "decode",
        "ja":  "(暗号・符号)を解読する"
    },
    {
        "en":  "offset",
        "ja":  "を相殺する，埋め合わせる；をオフセット印刷にする"
    },
    {
        "en":  "bid",
        "ja":  "（～に）の値をつける（for/on）；（挨拶）を述べる"
    },
    {
        "en":  "burst",
        "ja":  "破裂する；（～を）突然始める（into）"
    },
    {
        "en":  "overtake",
        "ja":  "を追い抜く；に追いつく（≒catch up with）；（災難・強い感情などが）を襲う"
    },
    {
        "en":  "retain",
        "ja":  "を保持する"
    },
    {
        "en":  "litter",
        "ja":  "(場所)を散らかす"
    },
    {
        "en":  "prohibit",
        "ja":  "を禁止する"
    },
    {
        "en":  "discipline",
        "ja":  "を罰する、を訓練する"
    },
    {
        "en":  "yield",
        "ja":  "を産出する、屈する、(権利など)を譲る"
    },
    {
        "en":  "sweep",
        "ja":  "（を）掃く；を一掃する；さっと通過する"
    },
    {
        "en":  "dictate",
        "ja":  "を指図する；を書き取らせる；を規定する"
    },
    {
        "en":  "inject",
        "ja":  "（人）に注射する，を注入する；を導入する"
    },
    {
        "en":  "urge",
        "ja":  "に熱心に勧める"
    },
    {
        "en":  "mimic",
        "ja":  "をまねる"
    },
    {
        "en":  "roam",
        "ja":  "（を）歩き回る；放浪する"
    },
    {
        "en":  "assess",
        "ja":  "を査定する、を評価する"
    },
    {
        "en":  "boast",
        "ja":  "を誇る；（を）自慢する"
    },
    {
        "en":  "drag",
        "ja":  "を引きずる；ぐずぐずする"
    },
    {
        "en":  "repay",
        "ja":  "を返済する"
    },
    {
        "en":  "overthrow",
        "ja":  "(政府・体制など)を打倒する"
    },
    {
        "en":  "fulfill",
        "ja":  "(約束・任務など)を果たす、(条件・要求など)を満たす"
    },
    {
        "en":  "doom",
        "ja":  "〔通例受身形で〕運命にある"
    },
    {
        "en":  "affiliate",
        "ja":  "を提携させる、を合併する"
    },
    {
        "en":  "assault",
        "ja":  "に暴行する；を攻撃する"
    },
    {
        "en":  "testimony",
        "ja":  "証言、証拠"
    },
    {
        "en":  "errand",
        "ja":  "（人の）使い，使い走り；用件"
    },
    {
        "en":  "friction",
        "ja":  "不和；摩擦"
    },
    {
        "en":  "coalition",
        "ja":  "連立、合同"
    },
    {
        "en":  "influx",
        "ja":  "(人・物の)殺到、(水・空気の)流入"
    },
    {
        "en":  "curse",
        "ja":  "悪態，ののしりの言葉；呪い；〔通例a ～〕災い"
    },
    {
        "en":  "app",
        "ja":  "アプリ"
    },
    {
        "en":  "visibility",
        "ja":  "視界、視野、目に見えること"
    },
    {
        "en":  "fabric",
        "ja":  "織物，布（地）；構造"
    },
    {
        "en":  "collision",
        "ja":  "衝突；対立"
    },
    {
        "en":  "dioxide",
        "ja":  "二酸化物"
    },
    {
        "en":  "orbit",
        "ja":  "軌道"
    },
    {
        "en":  "trial",
        "ja":  "裁判、試験、試み"
    },
    {
        "en":  "literacy",
        "ja":  "(特定分野の)知識、技能、読み書きの能力"
    },
    {
        "en":  "scheme",
        "ja":  "計画（≒plan）；体系；陰謀"
    },
    {
        "en":  "completion",
        "ja":  "完了、完成"
    },
    {
        "en":  "expertise",
        "ja":  "専門的知識[技術、意見]"
    },
    {
        "en":  "diploma",
        "ja":  "卒業[修了]証書、(学位・資格の)証明書"
    },
    {
        "en":  "livelihood",
        "ja":  "生計、生活手段"
    },
    {
        "en":  "motive",
        "ja":  "動機"
    },
    {
        "en":  "recession",
        "ja":  "不況；後退"
    },
    {
        "en":  "surrounding",
        "ja":  "周囲の状況、環境"
    },
    {
        "en":  "fortune",
        "ja":  "財産、幸運、運命"
    },
    {
        "en":  "token",
        "ja":  "(気持ちなどの)しるし、記念品"
    },
    {
        "en":  "trace",
        "ja":  "跡、形跡"
    },
    {
        "en":  "venture",
        "ja":  "危険を冒して進む；を思い切ってする"
    },
    {
        "en":  "physician",
        "ja":  "内科医、医師"
    },
    {
        "en":  "perspective",
        "ja":  "観点"
    },
    {
        "en":  "physics",
        "ja":  "物理学"
    },
    {
        "en":  "legislation",
        "ja":  "法律；立法"
    },
    {
        "en":  "barn",
        "ja":  "家畜小屋、(農家の)納屋"
    },
    {
        "en":  "daring",
        "ja":  "大胆な、勇敢な"
    },
    {
        "en":  "transparent",
        "ja":  "透明な；明快な"
    },
    {
        "en":  "tragic",
        "ja":  "悲惨な、悲劇的な"
    },
    {
        "en":  "sinister",
        "ja":  "邪悪な、不吉な"
    },
    {
        "en":  "striking",
        "ja":  "著しい、目立つ"
    },
    {
        "en":  "plural",
        "ja":  "複数の、2つ[2人]以上の、複数形の"
    },
    {
        "en":  "vital",
        "ja":  "必要不可欠な"
    },
    {
        "en":  "sensitive",
        "ja":  "敏感な、傷つきやすい"
    },
    {
        "en":  "remarkable",
        "ja":  "注目に値する、著しい"
    },
    {
        "en":  "minimal",
        "ja":  "最小(限度)の"
    },
    {
        "en":  "bankrupt",
        "ja":  "破産宣告を受けた；破綻している"
    },
    {
        "en":  "authentic",
        "ja":  "本物の；信頼できる"
    },
    {
        "en":  "moderate",
        "ja":  "適度な；穏健な"
    },
    {
        "en":  "alien",
        "ja":  "異質の、外国の"
    },
    {
        "en":  "prompt",
        "ja":  "迅速な"
    },
    {
        "en":  "random",
        "ja":  "無作為の、任意の"
    },
    {
        "en":  "decisive",
        "ja":  "決定的な、断固たる"
    },
    {
        "en":  "inevitable",
        "ja":  "避けられない、必然的な"
    },
    {
        "en":  "acid",
        "ja":  "酸性の；酸っぱい；辛辣な"
    },
    {
        "en":  "climatic",
        "ja":  "気候(上)の、風土の"
    },
    {
        "en":  "incredible",
        "ja":  "信じられない、驚くほどの"
    },
    {
        "en":  "precise",
        "ja":  "正確な、厳格な"
    },
    {
        "en":  "invaluable",
        "ja":  "極めて貴重な[高価]な"
    },
    {
        "en":  "stern",
        "ja":  "厳しい；いかめしい"
    },
    {
        "en":  "indifferent",
        "ja":  "無関心な（≒uninterested）"
    },
    {
        "en":  "charitable",
        "ja":  "慈善の、慈悲深い"
    },
    {
        "en":  "massive",
        "ja":  "大量の、大規模な、巨大な"
    },
    {
        "en":  "comparable",
        "ja":  "匹敵する、同様の"
    },
    {
        "en":  "irrational",
        "ja":  "不合理な"
    },
    {
        "en":  "cynical",
        "ja":  "冷笑的な，皮肉な"
    },
    {
        "en":  "overly",
        "ja":  "あまりに、過度に"
    },
    {
        "en":  "literally",
        "ja":  "文字どおり、まさしく"
    },
    {
        "en":  "voluntarily",
        "ja":  "自発的に"
    },
    {
        "en":  "technically",
        "ja":  "厳密に(言えば)、専門[技術]的に"
    },
    {
        "en":  "wholly",
        "ja":  "完全に、全く"
    },
    {
        "en":  "approximately",
        "ja":  "おおよそ、ほぼ"
    },
    {
        "en":  "uniquely",
        "ja":  "比類なく、独特に"
    },
    {
        "en":  "bewilder",
        "ja":  "（通例受身形で）当惑する"
    },
    {
        "en":  "clutch",
        "ja":  "をぐっとつかむ"
    },
    {
        "en":  "discard",
        "ja":  "を捨てる"
    },
    {
        "en":  "enlist",
        "ja":  "入隊する、参加する、(支持・協力)を得る"
    },
    {
        "en":  "heed",
        "ja":  "(助言・警告など)に注意する"
    },
    {
        "en":  "liberate",
        "ja":  "を解放する"
    },
    {
        "en":  "overlap",
        "ja":  "（一部）重なる；（と）重複［共通］する"
    },
    {
        "en":  "reconstruct",
        "ja":  "を再建する、を改変する"
    },
    {
        "en":  "shriek",
        "ja":  "悲鳴をあげる、甲高い声[音]を出す"
    },
    {
        "en":  "sprain",
        "ja":  "(足首・手首など)をくじく、を捻挫する"
    },
    {
        "en":  "resent",
        "ja":  "に憤慨する"
    },
    {
        "en":  "thrive",
        "ja":  "繁栄する，うまくいく；繁茂する"
    },
    {
        "en":  "embrace",
        "ja":  "を抱擁する、を(喜んで)受け入れる"
    },
    {
        "en":  "excel",
        "ja":  "（～で）秀でている（in/at）；に勝る"
    },
    {
        "en":  "enroll",
        "ja":  "登録する，入会する；を登録させる"
    },
    {
        "en":  "retrieve",
        "ja":  "（情報）を検索する；を取り戻す；を回復する"
    },
    {
        "en":  "degrade",
        "ja":  "の面目を失わせる、の質[価値]を低下させる"
    },
    {
        "en":  "reconcile",
        "ja":  "を（～と）一致させる（with）；を和解させる"
    },
    {
        "en":  "contaminate",
        "ja":  "を汚染する；を堕落させる"
    },
    {
        "en":  "disrupt",
        "ja":  "を混乱させる；を分裂させる"
    },
    {
        "en":  "divert",
        "ja":  "（注意など）をそらす；を迂回させる；（資金など）を転用する"
    },
    {
        "en":  "grumble",
        "ja":  "不平を述べる"
    },
    {
        "en":  "provoke",
        "ja":  "（感情・行動など）を引き起こす；を挑発する"
    },
    {
        "en":  "outweigh",
        "ja":  "より価値がある、より重い"
    },
    {
        "en":  "crave",
        "ja":  "(を)切望する"
    },
    {
        "en":  "sustain",
        "ja":  "を持続させる、を支える"
    },
    {
        "en":  "disclose",
        "ja":  "を公表する，暴く"
    },
    {
        "en":  "tempt",
        "ja":  "を（...する）気にさせる（to do）；を引きつける"
    },
    {
        "en":  "resign",
        "ja":  "（を）辞任する；を放棄する"
    },
    {
        "en":  "dismiss",
        "ja":  "を解雇する、(意見など)を退ける"
    },
    {
        "en":  "surpass",
        "ja":  "を上回る"
    },
    {
        "en":  "bounce",
        "ja":  "跳ねる；反射する；を弾ませる；（Ｅメールが）（宛先不明で）返送される"
    },
    {
        "en":  "bureau",
        "ja":  "（官庁の）局；事務局；案内所"
    },
    {
        "en":  "dependency",
        "ja":  "依存、従属"
    },
    {
        "en":  "discomfort",
        "ja":  "不快、不便"
    },
    {
        "en":  "drawback",
        "ja":  "欠点、不利な点"
    },
    {
        "en":  "feast",
        "ja":  "祝宴；大ごちそう；楽しみ"
    },
    {
        "en":  "hydrogen",
        "ja":  "水素"
    },
    {
        "en":  "modernization",
        "ja":  "近代化、現代化、最新式化"
    },
    {
        "en":  "objective",
        "ja":  "目的、目標"
    },
    {
        "en":  "poll",
        "ja":  "世論調査、投票(数)、投票所"
    },
    {
        "en":  "ration",
        "ja":  "(食料・物資などの)割当(量)"
    },
    {
        "en":  "revenue",
        "ja":  "歳入（⇔expenditure 歳出）；収益"
    },
    {
        "en":  "scholarship",
        "ja":  "奨学金、学識"
    },
    {
        "en":  "upbringing",
        "ja":  "(子供の)養育、しつけ"
    },
    {
        "en":  "compliment",
        "ja":  "賛辞"
    },
    {
        "en":  "excerpt",
        "ja":  "抜粋、引用"
    },
    {
        "en":  "faith",
        "ja":  "信仰(心)、信用"
    },
    {
        "en":  "segment",
        "ja":  "部分、区分"
    },
    {
        "en":  "downturn",
        "ja":  "(景気などの)下降(状態)"
    },
    {
        "en":  "temper",
        "ja":  "気質，気性；機嫌；かんしゃく"
    },
    {
        "en":  "fragment",
        "ja":  "断片"
    },
    {
        "en":  "intersection",
        "ja":  "(進路の)交差点"
    },
    {
        "en":  "anarchy",
        "ja":  "無秩序、無政府状態"
    },
    {
        "en":  "breakup",
        "ja":  "(人間関係の)解消、別れ"
    },
    {
        "en":  "privilege",
        "ja":  "特権"
    },
    {
        "en":  "exemption",
        "ja":  "(義務・責任などの)免除"
    },
    {
        "en":  "monarch",
        "ja":  "君主"
    },
    {
        "en":  "narrative",
        "ja":  "話、物語"
    },
    {
        "en":  "sensation",
        "ja":  "漠然とした感じ、感覚、大騒ぎ"
    },
    {
        "en":  "apprentice",
        "ja":  "見習い(工)、初心者"
    },
    {
        "en":  "chore",
        "ja":  "雑用、家事、いやな仕事"
    },
    {
        "en":  "dehydration",
        "ja":  "脱水(症状)"
    },
    {
        "en":  "questionable",
        "ja":  "疑わしい"
    },
    {
        "en":  "outdated",
        "ja":  "時代[流行]遅れの、旧式の"
    },
    {
        "en":  "forthcoming",
        "ja":  "来るべき"
    },
    {
        "en":  "gross",
        "ja":  "総計の；甚だしい；粗野な"
    },
    {
        "en":  "overdue",
        "ja":  "支払期限を過ぎた、(予定の日時より)遅れた"
    },
    {
        "en":  "contemporary",
        "ja":  "現代の、現代的な、同時代の"
    },
    {
        "en":  "drastic",
        "ja":  "徹底的な，抜本的な；極端な"
    },
    {
        "en":  "conditional",
        "ja":  "～しだいの、条件付きの"
    },
    {
        "en":  "subjective",
        "ja":  "主観的な"
    },
    {
        "en":  "exotic",
        "ja":  "外来の；異国風の"
    },
    {
        "en":  "intensive",
        "ja":  "集中的な、徹底的な"
    },
    {
        "en":  "obscure",
        "ja":  "（世に）知られていない；不明瞭な"
    },
    {
        "en":  "tedious",
        "ja":  "退屈な"
    },
    {
        "en":  "exclusive",
        "ja":  "高級な、排他的な"
    },
    {
        "en":  "decent",
        "ja":  "まずまずの；きちんとした；上品な"
    },
    {
        "en":  "considerate",
        "ja":  "思いやりのある"
    },
    {
        "en":  "durable",
        "ja":  "長持ちする、丈夫な"
    },
    {
        "en":  "perpetual",
        "ja":  "永続的な；ひっきりなしの"
    },
    {
        "en":  "proficient",
        "ja":  "堪能な、熟達した"
    },
    {
        "en":  "acoustic",
        "ja":  "音響の；聴覚の；（楽器が）アコースティックの"
    },
    {
        "en":  "biographical",
        "ja":  "伝記の"
    },
    {
        "en":  "botanical",
        "ja":  "植物の、植物学(上)の"
    },
    {
        "en":  "brutal",
        "ja":  "残酷な、無情な"
    },
    {
        "en":  "commendable",
        "ja":  "賞賛されるべき、立派な"
    },
    {
        "en":  "desperate",
        "ja":  "絶望的な、強く望んで、必死の"
    },
    {
        "en":  "extravagant",
        "ja":  "浪費する、(要求などが)過度な"
    },
    {
        "en":  "filthy",
        "ja":  "汚い、不潔な"
    },
    {
        "en":  "serene",
        "ja":  "穏やかな、平静な"
    },
    {
        "en":  "valid",
        "ja":  "法律的に有効な、理にかなった"
    },
    {
        "en":  "inherent",
        "ja":  "生来の，本来的に備わっている"
    },
    {
        "en":  "merely",
        "ja":  "単なる、ただの、単に"
    },
    {
        "en":  "somehow",
        "ja":  "何とかして、とにかく"
    },
    {
        "en":  "subsequently",
        "ja":  "その後、続いて"
    },
    {
        "en":  "deliberately",
        "ja":  "故意に、慎重に"
    },
    {
        "en":  "gently",
        "ja":  "優しく、静かに"
    },
    {
        "en":  "via",
        "ja":  "～の手段によって、～経由で"
    },
    {
        "en":  "alongside",
        "ja":  "～と一緒に、～と並んで"
    },
    {
        "en":  "portray",
        "ja":  "を描く；（の役）を演じる"
    },
    {
        "en":  "dispatch",
        "ja":  "を派遣する；を発送する；を処理する"
    },
    {
        "en":  "quote",
        "ja":  "が～と述べたと伝える、を引用する"
    },
    {
        "en":  "amend",
        "ja":  "を改正する、を修正する"
    },
    {
        "en":  "betray",
        "ja":  "をうっかり表す；を裏切る"
    },
    {
        "en":  "wither",
        "ja":  "(植物などが)しおれる"
    },
    {
        "en":  "omit",
        "ja":  "を省略する"
    },
    {
        "en":  "fabricate",
        "ja":  "をでっち上げる、を組み立てる"
    },
    {
        "en":  "violate",
        "ja":  "（法律・規則など）に違反する；を侵害する"
    },
    {
        "en":  "allege",
        "ja":  "を主張する"
    },
    {
        "en":  "integrate",
        "ja":  "を統合する；融合する"
    },
    {
        "en":  "underestimate",
        "ja":  "（を）過小評価する；（を）軽く見る；を少なく見積もる"
    },
    {
        "en":  "escort",
        "ja":  "を護衛[護送]する、に付き添う"
    },
    {
        "en":  "facilitate",
        "ja":  "を促進する、を容易にする"
    },
    {
        "en":  "initiate",
        "ja":  "を新たに始める"
    },
    {
        "en":  "convey",
        "ja":  "を伝える、を運ぶ"
    },
    {
        "en":  "populate",
        "ja":  "に住む，の住民である；に人を住まわせる"
    },
    {
        "en":  "reinforce",
        "ja":  "を補強する、を強化する"
    },
    {
        "en":  "attain",
        "ja":  "を獲得する，達成する；に達する"
    },
    {
        "en":  "cheat",
        "ja":  "(試験で)カンニングをする、をだます"
    },
    {
        "en":  "deceive",
        "ja":  "をだます（≒take in）"
    },
    {
        "en":  "frustrate",
        "ja":  "に不満を抱かせる、を挫折させる"
    },
    {
        "en":  "subsidize",
        "ja":  "に補助金[助成金]を支給する"
    },
    {
        "en":  "alternate",
        "ja":  "代わりの；交互の"
    },
    {
        "en":  "dedicate",
        "ja":  "を捧げる"
    },
    {
        "en":  "endeavor",
        "ja":  "～しようと(懸命に)努力する、を(真剣に)試みる"
    },
    {
        "en":  "intrigue",
        "ja":  "に興味を持たせる；陰謀を企てる"
    },
    {
        "en":  "soar",
        "ja":  "急上昇する；空高く飛ぶ"
    },
    {
        "en":  "tease",
        "ja":  "（を）からかう；をいじめる"
    },
    {
        "en":  "confer",
        "ja":  "(賞・学位・栄誉・権利など)を授与する、相談する"
    },
    {
        "en":  "forbid",
        "ja":  "を禁じる"
    },
    {
        "en":  "nod",
        "ja":  "(頭)を軽く下げる、うなずく"
    },
    {
        "en":  "oblige",
        "ja":  "に義務づける；に恩恵を施す"
    },
    {
        "en":  "discontent",
        "ja":  "不満"
    },
    {
        "en":  "disposal",
        "ja":  "処分、売却"
    },
    {
        "en":  "exile",
        "ja":  "亡命（者）；（国外）追放"
    },
    {
        "en":  "foe",
        "ja":  "敵"
    },
    {
        "en":  "itinerary",
        "ja":  "旅行の日程、旅行計画"
    },
    {
        "en":  "persecution",
        "ja":  "迫害"
    },
    {
        "en":  "publication",
        "ja":  "出版(物)、発行"
    },
    {
        "en":  "riddle",
        "ja":  "なぞなぞ、不可解な人[もの、事実]"
    },
    {
        "en":  "sanitation",
        "ja":  "公衆衛生（学）；下水［衛生］設備"
    },
    {
        "en":  "component",
        "ja":  "構成部品[部分、要素]"
    },
    {
        "en":  "quota",
        "ja":  "割当量[数]、ノルマ"
    },
    {
        "en":  "cuisine",
        "ja":  "（独特の）料理，料理法"
    },
    {
        "en":  "detour",
        "ja":  "迂回(路)、回り道"
    },
    {
        "en":  "inmate",
        "ja":  "(刑務所などの)収容者、入院患者"
    },
    {
        "en":  "fatigue",
        "ja":  "(相当の)疲労"
    },
    {
        "en":  "uproar",
        "ja":  "大騒ぎ、騒動"
    },
    {
        "en":  "coincidence",
        "ja":  "偶然の一致"
    },
    {
        "en":  "correspondence",
        "ja":  "通信、一致"
    },
    {
        "en":  "ballot",
        "ja":  "投票、投票用紙、投票総数"
    },
    {
        "en":  "competence",
        "ja":  "能力、資格"
    },
    {
        "en":  "enterprise",
        "ja":  "事業、企業"
    },
    {
        "en":  "hazard",
        "ja":  "危険（要素）；偶然"
    },
    {
        "en":  "explosion",
        "ja":  "爆発、急激な増加"
    },
    {
        "en":  "famine",
        "ja":  "飢饉；（食糧・物資の）ひどい不足"
    },
    {
        "en":  "acceptance",
        "ja":  "受諾、受け取り"
    },
    {
        "en":  "leftover",
        "ja":  "(特に食事の)残りもの"
    },
    {
        "en":  "apprehension",
        "ja":  "不安、懸念"
    },
    {
        "en":  "wreck",
        "ja":  "残骸、難破(船)"
    },
    {
        "en":  "landmark",
        "ja":  "（ある場所の）目印；画期的な出来事"
    },
    {
        "en":  "dweller",
        "ja":  "居住者"
    },
    {
        "en":  "geometry",
        "ja":  "幾何学"
    },
    {
        "en":  "standby",
        "ja":  "(いざというとき)頼りになるもの(人)、交替要因"
    },
    {
        "en":  "diversity",
        "ja":  "多様性"
    },
    {
        "en":  "accuracy",
        "ja":  "正確さ、的確さ"
    },
    {
        "en":  "tap",
        "ja":  "(水道などの)蛇口"
    },
    {
        "en":  "brick",
        "ja":  "れんが"
    },
    {
        "en":  "bay",
        "ja":  "入江、湾"
    },
    {
        "en":  "lenient",
        "ja":  "寛大な"
    },
    {
        "en":  "stubborn",
        "ja":  "頑固な，強情な（≒obstinate）；手に負えない"
    },
    {
        "en":  "clumsy",
        "ja":  "不器用な"
    },
    {
        "en":  "perilous",
        "ja":  "とても危険な"
    },
    {
        "en":  "adverse",
        "ja":  "不都合な；逆の"
    },
    {
        "en":  "persistent",
        "ja":  "執拗な、固執する、持続する"
    },
    {
        "en":  "outrageous",
        "ja":  "法外な、途方もない、けしからぬ"
    },
    {
        "en":  "skeptical",
        "ja":  "（～に）懐疑的な（of/about）"
    },
    {
        "en":  "legitimate",
        "ja":  "合法的な；妥当な"
    },
    {
        "en":  "corrupt",
        "ja":  "を堕落させる；を買収する；堕落する"
    },
    {
        "en":  "experimental",
        "ja":  "実験の、実験[試験]的な"
    },
    {
        "en":  "improper",
        "ja":  "不適切な、無作法な"
    },
    {
        "en":  "spontaneous",
        "ja":  "自然発生的な；自発的な"
    },
    {
        "en":  "unconditional",
        "ja":  "無条件の、絶対的な"
    },
    {
        "en":  "counterfeit",
        "ja":  "偽造の、偽の"
    },
    {
        "en":  "dizzy",
        "ja":  "目まいがする；当惑した"
    },
    {
        "en":  "sustainable",
        "ja":  "持続できる、維持できる"
    },
    {
        "en":  "democratic",
        "ja":  "民主主義の、民主的な"
    },
    {
        "en":  "conservative",
        "ja":  "保守的な"
    },
    {
        "en":  "fundamental",
        "ja":  "基本的な、必須の"
    },
    {
        "en":  "ambitious",
        "ja":  "(計画などが)野心的な、(人が)大志を抱いた"
    },
    {
        "en":  "concrete",
        "ja":  "具体的な、明確な、コンクリート製の"
    },
    {
        "en":  "cruel",
        "ja":  "残酷な"
    },
    {
        "en":  "inferior",
        "ja":  "劣悪な、劣った"
    },
    {
        "en":  "ample",
        "ja":  "十分すぎるほどの；広い"
    },
    {
        "en":  "inaccurate",
        "ja":  "不正確な、誤りのある"
    },
    {
        "en":  "inadequate",
        "ja":  "不十分な、不適当な"
    },
    {
        "en":  "inappropriate",
        "ja":  "ふさわしくない、不適当な"
    },
    {
        "en":  "uncertain",
        "ja":  "はっきり分からない、(人が)確信がない"
    },
    {
        "en":  "vague",
        "ja":  "あいまいな、不明確な"
    },
    {
        "en":  "retreat",
        "ja":  "引っ込む、退く"
    },
    {
        "en":  "revolt",
        "ja":  "暴動[反乱]を起こす、をむかむかさせる"
    },
    {
        "en":  "deflect",
        "ja":  "(人の注意・非難など)をそらす、の方向を変えさせる"
    },
    {
        "en":  "demote",
        "ja":  "を降格する"
    },
    {
        "en":  "despise",
        "ja":  "を軽蔑する、をひどく嫌う"
    },
    {
        "en":  "grasp",
        "ja":  "を理解する、をしっかりと握る"
    },
    {
        "en":  "summon",
        "ja":  "を呼び出す、を召喚する、(議会など)を招集する"
    },
    {
        "en":  "expel",
        "ja":  "を追放する；を吐き出す"
    },
    {
        "en":  "redeem",
        "ja":  "(失敗・欠点など)を補う、を埋め合わせる"
    },
    {
        "en":  "comprise",
        "ja":  "から成る；を構成する"
    },
    {
        "en":  "prevail",
        "ja":  "普及している；支配的である；（～に）打ち勝つ（over）"
    },
    {
        "en":  "eject",
        "ja":  "を取り出す、を追い出す"
    },
    {
        "en":  "falsify",
        "ja":  "を偽造する"
    },
    {
        "en":  "obstruct",
        "ja":  "をふさぐ、を妨害する"
    },
    {
        "en":  "depict",
        "ja":  "を描く"
    },
    {
        "en":  "tremble",
        "ja":  "震える"
    },
    {
        "en":  "confess",
        "ja":  "（を）告白する"
    },
    {
        "en":  "stare",
        "ja":  "じっと見つめる"
    },
    {
        "en":  "ache",
        "ja":  "痛む、うずく"
    },
    {
        "en":  "reflect",
        "ja":  "を反映する、を反射する、熟考する"
    },
    {
        "en":  "assert",
        "ja":  "を主張する"
    },
    {
        "en":  "impose",
        "ja":  "(規則・税・罰金など)を課[科]す、を押しつける"
    },
    {
        "en":  "interpret",
        "ja":  "を解釈する、を通訳する"
    },
    {
        "en":  "devote",
        "ja":  "(努力・時間など)を捧げる、に専念する"
    },
    {
        "en":  "deteriorate",
        "ja":  "(状況・質など)が悪化する"
    },
    {
        "en":  "contemplate",
        "ja":  "（を）熟考する；を予想する"
    },
    {
        "en":  "delegate",
        "ja":  "(権限・責任など)を委譲[委任]する、(人)を代表として派遣する"
    },
    {
        "en":  "propel",
        "ja":  "を進ませる、(人)を駆り立てる"
    },
    {
        "en":  "recede",
        "ja":  "後退する、退く"
    },
    {
        "en":  "scrape",
        "ja":  "(泥・ペンキ・さびなど)をこすり取る、の表面をこする"
    },
    {
        "en":  "smash",
        "ja":  "を粉砕する；を強打する；粉々に壊れる；激突する"
    },
    {
        "en":  "scold",
        "ja":  "(特に子供)をしかる"
    },
    {
        "en":  "amuse",
        "ja":  "を楽しませる"
    },
    {
        "en":  "overhaul",
        "ja":  "(システムなど)を総点検する、を分解修理する"
    },
    {
        "en":  "herd",
        "ja":  "(牛・羊などの)群"
    },
    {
        "en":  "bait",
        "ja":  "誘惑物、(釣り針・わなにつける)餌"
    },
    {
        "en":  "petition",
        "ja":  "請願(書)、嘆願(書)"
    },
    {
        "en":  "ransom",
        "ja":  "身代金、(身代金などによる)解放"
    },
    {
        "en":  "fragrance",
        "ja":  "芳香"
    },
    {
        "en":  "insight",
        "ja":  "見識、洞察力"
    },
    {
        "en":  "conquest",
        "ja":  "征服、(欠点・課題などの)克服"
    },
    {
        "en":  "sincerity",
        "ja":  "誠実"
    },
    {
        "en":  "tariff",
        "ja":  "関税"
    },
    {
        "en":  "sanction",
        "ja":  "制裁(措置)、認可"
    },
    {
        "en":  "sphere",
        "ja":  "領域；球体；天体"
    },
    {
        "en":  "outcast",
        "ja":  "見捨てられた人、浮浪者"
    },
    {
        "en":  "affair",
        "ja":  "事情、事柄、問題"
    },
    {
        "en":  "scandal",
        "ja":  "スキャンダル、不正行為"
    },
    {
        "en":  "allergy",
        "ja":  "アレルギー"
    },
    {
        "en":  "destruction",
        "ja":  "破壊、破滅"
    },
    {
        "en":  "peasant",
        "ja":  "(発展途上国などの)小作人、貧農"
    },
    {
        "en":  "burden",
        "ja":  "負担、重荷、荷物"
    },
    {
        "en":  "faculty",
        "ja":  "(大学・学部の)教授陣、学部、才能、能力"
    },
    {
        "en":  "tactics",
        "ja":  "作戦，方策；戦術，戦法"
    },
    {
        "en":  "fare",
        "ja":  "(乗り物の)運賃、料金"
    },
    {
        "en":  "manner",
        "ja":  "方法、風習、行儀、作法"
    },
    {
        "en":  "correlation",
        "ja":  "相互[相関]関係"
    },
    {
        "en":  "weed",
        "ja":  "雑草、草"
    },
    {
        "en":  "command",
        "ja":  "命令、指図、(外国語などを)自由に使える能力"
    },
    {
        "en":  "quarter",
        "ja":  "４分の１、(都市の特定の)地区、四半期"
    },
    {
        "en":  "availability",
        "ja":  "(入手の)可能性、有用[有効]性"
    },
    {
        "en":  "caution",
        "ja":  "用心、注意、警戒、警告"
    },
    {
        "en":  "prevention",
        "ja":  "予防、防止、妨害"
    },
    {
        "en":  "reptile",
        "ja":  "爬虫類(動物)"
    },
    {
        "en":  "fate",
        "ja":  "運命、(最終的な)結末"
    },
    {
        "en":  "inclination",
        "ja":  "意向、願望、好み"
    },
    {
        "en":  "scorn",
        "ja":  "軽蔑、侮蔑"
    },
    {
        "en":  "contempt",
        "ja":  "軽蔑；恥辱"
    },
    {
        "en":  "domain",
        "ja":  "分野；領域；ドメイン"
    },
    {
        "en":  "pillar",
        "ja":  "柱、支柱"
    },
    {
        "en":  "tender",
        "ja":  "柔らかい、優しい"
    },
    {
        "en":  "awkward",
        "ja":  "ばつの悪い、気まずい、ぎこちない"
    },
    {
        "en":  "fierce",
        "ja":  "猛烈な；どう猛な"
    },
    {
        "en":  "peculiar",
        "ja":  "変な、特有の"
    },
    {
        "en":  "genuine",
        "ja":  "本物の"
    },
    {
        "en":  "vigorous",
        "ja":  "精力的な；激しい；活力のある"
    },
    {
        "en":  "gloomy",
        "ja":  "陰気な；薄暗い；悲観的な"
    },
    {
        "en":  "medieval",
        "ja":  "中世の"
    },
    {
        "en":  "subtle",
        "ja":  "微妙な、かすかな"
    },
    {
        "en":  "rigid",
        "ja":  "厳しい；硬直した"
    },
    {
        "en":  "coarse",
        "ja":  "粗い、粗野な"
    },
    {
        "en":  "humble",
        "ja":  "謙虚な、地位[身分]などが低い"
    },
    {
        "en":  "slack",
        "ja":  "たるんだ、(商売などが)不活発な"
    },
    {
        "en":  "trivial",
        "ja":  "取るに足らない"
    },
    {
        "en":  "mutual",
        "ja":  "相互の"
    },
    {
        "en":  "redundant",
        "ja":  "不要な、余分な、(表現などが)冗長な"
    },
    {
        "en":  "premature",
        "ja":  "早過ぎる、(判断などが)早まった"
    },
    {
        "en":  "attentive",
        "ja":  "注意深い"
    },
    {
        "en":  "integral",
        "ja":  "不可欠な、必要な"
    },
    {
        "en":  "memorable",
        "ja":  "忘れられない、記憶すべき"
    },
    {
        "en":  "persuasive",
        "ja":  "説得力のある"
    },
    {
        "en":  "prevalent",
        "ja":  "蔓延している、広く行き渡っている"
    },
    {
        "en":  "unaware",
        "ja":  "気づかないで、知らないで"
    },
    {
        "en":  "worthwhile",
        "ja":  "(時間・労力・金をかける)価値のある"
    },
    {
        "en":  "amazing",
        "ja":  "驚くべき"
    },
    {
        "en":  "eligible",
        "ja":  "適格の，資格のある；（結婚相手として）望ましい"
    },
    {
        "en":  "vicious",
        "ja":  "悪意[敵意]のある、乱暴な"
    },
    {
        "en":  "invisible",
        "ja":  "見えない"
    },
    {
        "en":  "invalid",
        "ja":  "(法的に)無効な"
    },
    {
        "en":  "rotten",
        "ja":  "(食べ物などが)腐った、(道徳的に)腐敗した"
    },
    {
        "en":  "plague",
        "ja":  "疫病；（害虫などの）異常発生"
    },
    {
        "en":  "sponsor",
        "ja":  "に資金を提供する、を後援する"
    },
    {
        "en":  "honor",
        "ja":  "を賞賛する、に与える、を尊敬する"
    },
    {
        "en":  "remark",
        "ja":  "～と述べる"
    },
    {
        "en":  "incorporate",
        "ja":  "を取り[組み]入れる"
    },
    {
        "en":  "resolve",
        "ja":  "(問題など)を解決する、を決意する"
    },
    {
        "en":  "sway",
        "ja":  "(ゆっくりと)揺れる、動揺する"
    },
    {
        "en":  "inherit",
        "ja":  "(遺伝で)を受け継ぐ、を相続する"
    },
    {
        "en":  "pile",
        "ja":  "を大量に積む、を積み重ねる、積み重なる"
    },
    {
        "en":  "renovate",
        "ja":  "を改修[改築]する"
    },
    {
        "en":  "maximize",
        "ja":  "を最大限にする"
    },
    {
        "en":  "uncover",
        "ja":  "(遺跡など)を発掘する、の覆いを取る、を明るみに出す"
    },
    {
        "en":  "mislead",
        "ja":  "に誤った考えを持たせる、を欺く"
    },
    {
        "en":  "opt",
        "ja":  "選ぶ"
    },
    {
        "en":  "outnumber",
        "ja":  "より数で勝る"
    },
    {
        "en":  "presume",
        "ja":  "と思う；と推定する；を前提とする"
    },
    {
        "en":  "refine",
        "ja":  "を洗練する；を精製する"
    },
    {
        "en":  "stir",
        "ja":  "をかき回す；を揺り動かす"
    },
    {
        "en":  "strive",
        "ja":  "懸命に努力する"
    },
    {
        "en":  "thrill",
        "ja":  "をわくわく[ぞくぞく]させる"
    },
    {
        "en":  "tighten",
        "ja":  "を固く締める、を強化する"
    },
    {
        "en":  "arouse",
        "ja":  "（感情など）を引き起こす；を目覚めさせる"
    },
    {
        "en":  "buzz",
        "ja":  "(場所が)ざわつく、どよめく"
    },
    {
        "en":  "converge",
        "ja":  "集まる、集中する"
    },
    {
        "en":  "deduct",
        "ja":  "を控除する、を減じる"
    },
    {
        "en":  "disconnect",
        "ja":  "(人)のインターネットへの接続を切る、の接続を断つ"
    },
    {
        "en":  "gossip",
        "ja":  "うわさ話をする"
    },
    {
        "en":  "wander",
        "ja":  "(当てもなく)歩き回る、ぶらつく"
    },
    {
        "en":  "suck",
        "ja":  "（を）吸う；（を）しゃぶる"
    },
    {
        "en":  "dye",
        "ja":  "を～色に染める、を染める"
    },
    {
        "en":  "trespass",
        "ja":  "(不法)侵入する、侵害する"
    },
    {
        "en":  "graze",
        "ja":  "(家畜などが)牧草を食べる"
    },
    {
        "en":  "entrust",
        "ja":  "AにBを任せる"
    },
    {
        "en":  "peer",
        "ja":  "同僚、仲間、同等[対等]の者"
    },
    {
        "en":  "molecule",
        "ja":  "分子、微粒子"
    },
    {
        "en":  "meantime",
        "ja":  "その間"
    },
    {
        "en":  "merit",
        "ja":  "価値、優秀さ、長所"
    },
    {
        "en":  "prospect",
        "ja":  "見込み、見通し、期待"
    },
    {
        "en":  "chatter",
        "ja":  "くだらないおしゃべり"
    },
    {
        "en":  "funeral",
        "ja":  "葬式"
    },
    {
        "en":  "methodology",
        "ja":  "方法論、研究方法"
    },
    {
        "en":  "bundle",
        "ja":  "束、包み"
    },
    {
        "en":  "burglar",
        "ja":  "強盗、泥棒"
    },
    {
        "en":  "canyon",
        "ja":  "峡谷"
    },
    {
        "en":  "duration",
        "ja":  "（時間の）継続，持続（時間）"
    },
    {
        "en":  "fountain",
        "ja":  "噴水、源泉、湧き水"
    },
    {
        "en":  "genius",
        "ja":  "天賦の才、天才(的な人)"
    },
    {
        "en":  "grassland",
        "ja":  "牧草地、草原"
    },
    {
        "en":  "interval",
        "ja":  "（時間の）間隔；合間；隔たり；小休止"
    },
    {
        "en":  "longevity",
        "ja":  "長寿；寿命；長年勤続"
    },
    {
        "en":  "mode",
        "ja":  "方法、様式"
    },
    {
        "en":  "needle",
        "ja":  "針、縫い針、編み針"
    },
    {
        "en":  "organizer",
        "ja":  "主催者、まとめ役、幹事"
    },
    {
        "en":  "rehearsal",
        "ja":  "(劇・音楽などの)リハーサル、下げいこ"
    },
    {
        "en":  "servant",
        "ja":  "(特に住み込みの)使用人、召使"
    },
    {
        "en":  "sociology",
        "ja":  "社会学"
    },
    {
        "en":  "spectacle",
        "ja":  "(印象的な)光景、壮観、見もの"
    },
    {
        "en":  "norm",
        "ja":  "標準、規範、典型"
    },
    {
        "en":  "certificate",
        "ja":  "証明書；免許状"
    },
    {
        "en":  "vice",
        "ja":  "悪習、悪"
    },
    {
        "en":  "knot",
        "ja":  "結び目、結び方"
    },
    {
        "en":  "rubber",
        "ja":  "ゴム、ゴム製品"
    },
    {
        "en":  "asteroid",
        "ja":  "小惑星"
    },
    {
        "en":  "syndrome",
        "ja":  "症候群、シンドローム"
    },
    {
        "en":  "detention",
        "ja":  "拘置、留置"
    },
    {
        "en":  "distress",
        "ja":  "苦悩、苦痛"
    },
    {
        "en":  "ignition",
        "ja":  "(エンジンの)点火装置、点火"
    },
    {
        "en":  "esteem",
        "ja":  "尊敬、尊重"
    },
    {
        "en":  "hospitality",
        "ja":  "親切なもてなし，歓待；受容性"
    },
    {
        "en":  "legacy",
        "ja":  "遺産"
    },
    {
        "en":  "sane",
        "ja":  "(考え方などが)健全な、分別のある、正気の"
    },
    {
        "en":  "doubtful",
        "ja":  "(物・事が)疑わしい、(人が)疑わしく思う"
    },
    {
        "en":  "favorable",
        "ja":  "好意的な、好ましい"
    },
    {
        "en":  "generous",
        "ja":  "気前のよい、寛大な"
    },
    {
        "en":  "hollow",
        "ja":  "空洞の；空虚な；うわべだけの"
    },
    {
        "en":  "internal",
        "ja":  "内部の、内側の、国内の"
    },
    {
        "en":  "interpersonal",
        "ja":  "人間[対人]関係の"
    },
    {
        "en":  "staple",
        "ja":  "必需食品；主要産物"
    },
    {
        "en":  "tolerant",
        "ja":  "寛容な、包容力のある"
    },
    {
        "en":  "folk",
        "ja":  "民間(起源)の、民衆の"
    },
    {
        "en":  "furious",
        "ja":  "激怒した；猛烈な"
    },
    {
        "en":  "ironic",
        "ja":  "皮肉な、反語的な"
    },
    {
        "en":  "pale",
        "ja":  "(人・顔色などが)青白い、血の気を失った、(色が)淡い、薄い"
    },
    {
        "en":  "pregnant",
        "ja":  "妊娠した"
    },
    {
        "en":  "rewarding",
        "ja":  "満足感が得られる、報われる"
    },
    {
        "en":  "sacred",
        "ja":  "神聖な、聖なる、宗教的な"
    },
    {
        "en":  "terrific",
        "ja":  "素晴らしい、すてきな"
    },
    {
        "en":  "abridged",
        "ja":  "簡約[短縮]された"
    },
    {
        "en":  "dull",
        "ja":  "退屈な、頭が鈍い"
    },
    {
        "en":  "faint",
        "ja":  "かすかな；めまいがする；弱々しい"
    },
    {
        "en":  "irresponsible",
        "ja":  "無責任な"
    },
    {
        "en":  "notorious",
        "ja":  "悪名高い（≒infamous）"
    },
    {
        "en":  "recurrent",
        "ja":  "(周期的に)繰り返される、(病気などが)再発する"
    },
    {
        "en":  "irresistible",
        "ja":  "抵抗できない、非常に魅力的な"
    },
    {
        "en":  "binding",
        "ja":  "拘束力のある、義務を負わせる"
    },
    {
        "en":  "dejected",
        "ja":  "落胆した、元気のない"
    },
    {
        "en":  "fictitious",
        "ja":  "架空の、偽りの"
    },
    {
        "en":  "gracious",
        "ja":  "親切な、丁寧な"
    },
    {
        "en":  "upcoming",
        "ja":  "やがて起ころう[現れよう]としている、来るべき"
    },
    {
        "en":  "abundant",
        "ja":  "豊富な"
    },
    {
        "en":  "grind",
        "ja":  "（穀物など）をひく"
    },
    {
        "en":  "archive",
        "ja":  "〔しばしば～s〕記録文書，公文書；公文書保管所；（コンピューターの）アーカイブ"
    },
    {
        "en":  "devise",
        "ja":  "を考案する"
    },
    {
        "en":  "precede",
        "ja":  "に先行する"
    },
    {
        "en":  "horrify",
        "ja":  "を怖がらせる"
    },
    {
        "en":  "lodge",
        "ja":  "(苦情・抗議など)を申し出る、を預ける、を泊める"
    },
    {
        "en":  "mediate",
        "ja":  "調停する、仲裁する"
    },
    {
        "en":  "mingle",
        "ja":  "付き合う、仲間に入る、混ざる"
    },
    {
        "en":  "perspire",
        "ja":  "汗をかく"
    },
    {
        "en":  "concede",
        "ja":  "(しぶしぶ)～と認める"
    },
    {
        "en":  "hinder",
        "ja":  "を妨げる"
    },
    {
        "en":  "waver",
        "ja":  "(心が)揺れ動く、迷う"
    },
    {
        "en":  "formulate",
        "ja":  "(計画など)を(注意深く)まとめる、を明確に述べる"
    },
    {
        "en":  "exhale",
        "ja":  "(息・煙・言葉など)を吐き出す"
    },
    {
        "en":  "rebound",
        "ja":  "(ボールなどが)跳ね返る"
    },
    {
        "en":  "gratify",
        "ja":  "を喜ばせる、を満足させる"
    },
    {
        "en":  "pledge",
        "ja":  "を誓う，約束する；を与えることを約束する"
    },
    {
        "en":  "fasten",
        "ja":  "をしっかり留める、を固定する"
    },
    {
        "en":  "relay",
        "ja":  "を伝達する、を取り次ぐ、を中継で送る"
    },
    {
        "en":  "align",
        "ja":  "を一直線に並べる"
    },
    {
        "en":  "ascend",
        "ja":  "（を）上がる"
    },
    {
        "en":  "gaze",
        "ja":  "じっと見る"
    },
    {
        "en":  "adore",
        "ja":  "が大好きである、を敬愛する"
    },
    {
        "en":  "chill",
        "ja":  "(食べ物・飲み物など)を冷やす、冷える"
    },
    {
        "en":  "curve",
        "ja":  "カーブする、曲がる"
    },
    {
        "en":  "deflate",
        "ja":  "(タイヤ・風船などが)しぼむ、をしぼませる"
    },
    {
        "en":  "detach",
        "ja":  "を分離する、を取り外す"
    },
    {
        "en":  "enclose",
        "ja":  "を同封する；を取り囲む"
    },
    {
        "en":  "fetch",
        "ja":  "を（行って）持って［連れて］くる"
    },
    {
        "en":  "proclaim",
        "ja":  "を宣言する"
    },
    {
        "en":  "forge",
        "ja":  "を偽造する；（関係など）を築く；を鍛造する"
    },
    {
        "en":  "outburst",
        "ja":  "(火山・怒り・笑いなど)の爆発"
    },
    {
        "en":  "dimension",
        "ja":  "局面、寸法、規模、次元"
    },
    {
        "en":  "swarm",
        "ja":  "大群"
    },
    {
        "en":  "sequel",
        "ja":  "続編、結果"
    },
    {
        "en":  "artifact",
        "ja":  "人工遺物、工芸品"
    },
    {
        "en":  "mercy",
        "ja":  "慈悲；〔通例a ～〕幸運"
    },
    {
        "en":  "successor",
        "ja":  "後継者、相続人"
    },
    {
        "en":  "triumph",
        "ja":  "(大)勝利、成功"
    },
    {
        "en":  "clause",
        "ja":  "(法律・条約などの)条項、(文の)節"
    },
    {
        "en":  "analogy",
        "ja":  "類推；類似"
    },
    {
        "en":  "downfall",
        "ja":  "破滅、転落、(雨・雪などの)大降り"
    },
    {
        "en":  "fusion",
        "ja":  "融合(物)、(政府などの)連立"
    },
    {
        "en":  "fracture",
        "ja":  "骨折、割れ目、裂け目"
    },
    {
        "en":  "menace",
        "ja":  "困りもの、危険人物、脅威"
    },
    {
        "en":  "setback",
        "ja":  "(進歩・発展の)妨げ、支障"
    },
    {
        "en":  "empathy",
        "ja":  "共感、感情移入"
    },
    {
        "en":  "tumble",
        "ja":  "転倒、(株価などの)暴落"
    },
    {
        "en":  "diameter",
        "ja":  "直径"
    },
    {
        "en":  "momentum",
        "ja":  "勢い、はずみ"
    },
    {
        "en":  "troop",
        "ja":  "軍隊、兵隊"
    },
    {
        "en":  "pharmacy",
        "ja":  "薬屋、薬局"
    },
    {
        "en":  "nightmare",
        "ja":  "悪夢、(悪夢のような)恐ろしい経験"
    },
    {
        "en":  "slope",
        "ja":  "坂、斜面"
    },
    {
        "en":  "glacier",
        "ja":  "氷河"
    },
    {
        "en":  "grief",
        "ja":  "(死などに対する)深い悲しみ、悲痛"
    },
    {
        "en":  "misery",
        "ja":  "惨めさ、悲惨さ"
    },
    {
        "en":  "accent",
        "ja":  "なまり、方言"
    },
    {
        "en":  "ambassador",
        "ja":  "大使"
    },
    {
        "en":  "autopsy",
        "ja":  "検死"
    },
    {
        "en":  "blast",
        "ja":  "爆発、爆破、突風"
    },
    {
        "en":  "courtesy",
        "ja":  "礼儀正しさ；好意；優遇"
    },
    {
        "en":  "deed",
        "ja":  "(意図的な)行為、行い"
    },
    {
        "en":  "discourse",
        "ja":  "話し合い，会話；講演；論説"
    },
    {
        "en":  "impulse",
        "ja":  "衝動"
    },
    {
        "en":  "jar",
        "ja":  "(広口の)びん、つぼ"
    },
    {
        "en":  "sibling",
        "ja":  "兄弟姉妹(の１人)"
    },
    {
        "en":  "enthusiasm",
        "ja":  "熱狂、熱中"
    },
    {
        "en":  "treasure",
        "ja":  "宝物、貴重品"
    },
    {
        "en":  "horizontal",
        "ja":  "水平な"
    },
    {
        "en":  "indefinite",
        "ja":  "限定されない、不定の、はっきりしない"
    },
    {
        "en":  "vulgar",
        "ja":  "下品な、無作法な"
    },
    {
        "en":  "resilient",
        "ja":  "回復力のある、弾力(性)ある"
    },
    {
        "en":  "aquatic",
        "ja":  "(動植物が)水生の、水の"
    },
    {
        "en":  "insistent",
        "ja":  "強く主張する、執拗な"
    },
    {
        "en":  "frantic",
        "ja":  "大急ぎの、気が狂いそうな"
    },
    {
        "en":  "deceptive",
        "ja":  "人を惑わすような"
    },
    {
        "en":  "illogical",
        "ja":  "筋の通らない、不合理な"
    },
    {
        "en":  "elaborate",
        "ja":  "精巧な、入念な"
    },
    {
        "en":  "mellow",
        "ja":  "(性格が)円熟した、柔らかくて豊かな[美しい]"
    },
    {
        "en":  "boundless",
        "ja":  "無限の"
    },
    {
        "en":  "cordial",
        "ja":  "心温まる、心からの"
    },
    {
        "en":  "seasonal",
        "ja":  "季節(ごと)の"
    },
    {
        "en":  "sour",
        "ja":  "酸っぱい"
    },
    {
        "en":  "swift",
        "ja":  "素早い"
    },
    {
        "en":  "cumulative",
        "ja":  "累積する、しだいに増加する"
    },
    {
        "en":  "savage",
        "ja":  "残酷な、凶暴な"
    },
    {
        "en":  "admirable",
        "ja":  "賞賛に値する、素晴らしい"
    },
    {
        "en":  "informative",
        "ja":  "有益な、情報[知識]を提供する"
    },
    {
        "en":  "proportional",
        "ja":  "釣り合った、比例した"
    },
    {
        "en":  "simultaneous",
        "ja":  "同時に起こる"
    },
    {
        "en":  "static",
        "ja":  "変化[進歩]のない"
    },
    {
        "en":  "uneasy",
        "ja":  "不安な、心配な、落ち着かない"
    },
    {
        "en":  "unequal",
        "ja":  "(権利などが)不平等な"
    },
    {
        "en":  "autonomous",
        "ja":  "自治の、自主的な"
    },
    {
        "en":  "bold",
        "ja":  "大胆な、勇敢な"
    },
    {
        "en":  "pessimistic",
        "ja":  "悲観的な"
    },
    {
        "en":  "repetitive",
        "ja":  "繰り返しの"
    },
    {
        "en":  "respiratory",
        "ja":  "呼吸器に関する、呼吸の"
    },
    {
        "en":  "coherent",
        "ja":  "一貫した，筋の通った；結束した"
    },
    {
        "en":  "account for ～",
        "ja":  "(割合・分量など)を占める、～(の理由)を説明する"
    },
    {
        "en":  "accuse A of B",
        "ja":  "AをBの罪で告訴する、AをBの理由で非難する"
    },
    {
        "en":  "act on ～",
        "ja":  "(忠告・情報など)に従って行動する、～に影響を及ぼす"
    },
    {
        "en":  "act out ～",
        "ja":  "(物語・経験など)を身振りで実演する"
    },
    {
        "en":  "add up to ～",
        "ja":  "(合計が)～になる、結局～ということになる"
    },
    {
        "en":  "adhere to ～",
        "ja":  "(信念・規則など)を順守する、～に固執する"
    },
    {
        "en":  "air out ～",
        "ja":  "(部屋など)を換気する、(衣類・寝具など)を外気に当てる"
    },
    {
        "en":  "all but",
        "ja":  "ほとんど"
    },
    {
        "en":  "allow for ～",
        "ja":  "～を考慮に入れる、～を見込む"
    },
    {
        "en":  "answer for ～",
        "ja":  "～の責任を負う、～の罰を受ける"
    },
    {
        "en":  "aspire to do ～",
        "ja":  "～することを熱望[切望]する"
    },
    {
        "en":  "attribute A to B",
        "ja":  "AをBのせいと考える"
    },
    {
        "en":  "back down",
        "ja":  "撤回する、敗北[非]を認める"
    },
    {
        "en":  "back off",
        "ja":  "手を引く、撤回する、後退する"
    },
    {
        "en":  "back up ～",
        "ja":  "～を裏付ける、～を支援する、(ファイルなど)のコピーを取る"
    },
    {
        "en":  "back on ～",
        "ja":  "～を当てにする"
    },
    {
        "en":  "be committed to ～",
        "ja":  "～に献身している"
    },
    {
        "en":  "be destined to do ～",
        "ja":  "～する運命である"
    },
    {
        "en":  "(be) free of ～",
        "ja":  "(料金・税金など)がない、～免除されている"
    },
    {
        "en":  "be obsessed with ～",
        "ja":  "(妄想・固定観念など)に取りつかれている"
    },
    {
        "en":  "be subject to ～",
        "ja":  "(病気など)にかかりやすい、(影響など)を受けやすい"
    },
    {
        "en":  "blast off",
        "ja":  "打ち上げられる、発射される"
    },
    {
        "en":  "blow up",
        "ja":  "(かんかんに)怒る、爆発する"
    },
    {
        "en":  "bounce back",
        "ja":  "(打撃・病気などから)回復する、立ち直る"
    },
    {
        "en":  "branch off",
        "ja":  "(話題が)変わる、(わき道に)それる"
    },
    {
        "en":  "break away from ～",
        "ja":  "(伝統・習慣など)を断つ、(束縛など)から逃れる"
    },
    {
        "en":  "break down",
        "ja":  "決裂する、失敗する、故障する"
    },
    {
        "en":  "break off ～",
        "ja":  "～を中断する、～を急にやめる"
    },
    {
        "en":  "break out",
        "ja":  "勃発する、(伝染病などが)発生する"
    },
    {
        "en":  "bring about ～",
        "ja":  "～を引き起こす、～を招く"
    },
    {
        "en":  "bring down ～",
        "ja":  "(人・政府など)を(打ち)倒す"
    },
    {
        "en":  "bring off ～",
        "ja":  "～をやってのける、～を成し遂げる"
    },
    {
        "en":  "bring on ～",
        "ja":  "(災い・病気など)をもたらす"
    },
    {
        "en":  "bring out ～",
        "ja":  "(才能・性質など)を引き出す、～を発揮させる"
    },
    {
        "en":  "bump into ～",
        "ja":  "～にばったり出会う"
    },
    {
        "en":  "burn out ～",
        "ja":  "(人)を疲れ果てさせる、～を燃え尽きさせる"
    },
    {
        "en":  "by means of ～",
        "ja":  "～用いて、～によって"
    },
    {
        "en":  "call for ～",
        "ja":  "～を必要とする、～を要求する"
    },
    {
        "en":  "call off ～",
        "ja":  "～を中止する"
    },
    {
        "en":  "call on ～",
        "ja":  "～を訪ねる、(人)に頼む"
    },
    {
        "en":  "carry away ～",
        "ja":  "無我夢中になる、～を持ち去る"
    },
    {
        "en":  "carry through ～",
        "ja":  "～を成し遂げる、～を成就させる"
    },
    {
        "en":  "catch up on ～",
        "ja":  "(近況など)について新しい情報を知る、～の遅れを取り戻す"
    },
    {
        "en":  "check off ～",
        "ja":  "～にチェックマークをつける"
    },
    {
        "en":  "chip in ～",
        "ja":  "(金・労力などを)出し合う"
    },
    {
        "en":  "clean out ～",
        "ja":  "～の中をきれいにする、～を空にする"
    },
    {
        "en":  "clear out ～",
        "ja":  "～の中身を出してきれいに片付ける、～を空にする"
    },
    {
        "en":  "clear up (～)",
        "ja":  "(誤解など)を解く、(問題など)を解明する、～片付ける、晴れる"
    },
    {
        "en":  "close in (on ～)",
        "ja":  "(～を)包囲する、(～に)追ってくる"
    },
    {
        "en":  "come after ～",
        "ja":  "～の後をつける、～を追跡する"
    },
    {
        "en":  "come before ～",
        "ja":  "(問題などが)(法廷など)で審議される、(法廷など)に出頭する"
    },
    {
        "en":  "come down to ～",
        "ja":  "要するに～ということになる"
    },
    {
        "en":  "come down with ～",
        "ja":  "(軽い病気)にかかる"
    },
    {
        "en":  "come into ～",
        "ja":  "～の状態になる"
    },
    {
        "en":  "come off",
        "ja":  "結局～になる、行われる"
    },
    {
        "en":  "come through",
        "ja":  "要求に応える、伝えられる"
    },
    {
        "en":  "comply with ～",
        "ja":  "(規則・基準など)に従う"
    },
    {
        "en":  "contribute to ～",
        "ja":  "～の一因となる、～に寄与[貢献]する～に寄付する"
    },
    {
        "en":  "cope with ～",
        "ja":  "～うまく処理する、～に対処する"
    },
    {
        "en":  "count for ～",
        "ja":  "～の価値がある"
    },
    {
        "en":  "count on ～",
        "ja":  "～を当てにする"
    },
    {
        "en":  "cover for ～",
        "ja":  "～の代わり[代理]を務める"
    },
    {
        "en":  "cover up ～",
        "ja":  "～(の事実)を隠す、～を秘密にする"
    },
    {
        "en":  "crack up",
        "ja":  "神経が参る、気が変になる、大笑いする"
    },
    {
        "en":  "cross out ～",
        "ja":  "～を線を引いて消す"
    },
    {
        "en":  "cut back (on ～)",
        "ja":  "(～を)削減[縮小]する"
    },
    {
        "en":  "cut down (on ～)",
        "ja":  "(～を)減らす"
    },
    {
        "en":  "cut in (on ～)",
        "ja":  "(話などに)割り込む、さえぎる"
    },
    {
        "en":  "deal in ～",
        "ja":  "(商品)を商う、(仕事など)に従事する"
    },
    {
        "en":  "deprive A of B",
        "ja":  "AからBを奪う"
    },
    {
        "en":  "die down",
        "ja":  "静まる、衰える"
    },
    {
        "en":  "die out",
        "ja":  "絶滅する"
    },
    {
        "en":  "dispose of ～",
        "ja":  "～を処分する、を捨てる"
    },
    {
        "en":  "do away with ～",
        "ja":  "～を廃止する、～を取り除く"
    },
    {
        "en":  "drag on",
        "ja":  "(会議などがだらだらと)長引く"
    },
    {
        "en":  "drag out ～",
        "ja":  "～を(必要以上に)長引かせる"
    },
    {
        "en":  "draw on ～",
        "ja":  "(技術・経験など)に頼る、～を利用する"
    },
    {
        "en":  "draw up ～",
        "ja":  "(計画)を立てる、(報告書など)を作成する"
    },
    {
        "en":  "dream up ～",
        "ja":  "(奇抜な考え・計画など)を思いつく、～を考え出す"
    },
    {
        "en":  "drive off [away] ～",
        "ja":  "～を追い払う"
    },
    {
        "en":  "drive up ～",
        "ja":  "(価格など)を急速に上昇させる"
    },
    {
        "en":  "drop back (to ～)",
        "ja":  "(～に)後退する、順位が下がる"
    },
    {
        "en":  "drop out (of ～)",
        "ja":  "(活動・集団から)身を引く、(学校を)中途退学する"
    },
    {
        "en":  "ease into ～",
        "ja":  "(仕事など)に徐々に慣れる"
    },
    {
        "en":  "eat up ～",
        "ja":  "～を使い果たす、～を食べ尽くす"
    },
    {
        "en":  "embark on [upon] ～",
        "ja":  "(事業など)に乗り出す、～に着手する"
    },
    {
        "en":  "endear A to B",
        "ja":  "AをBに慕わせる"
    },
    {
        "en":  "even up ～",
        "ja":  "～を等しくする、～を均等にする"
    },
    {
        "en":  "face off",
        "ja":  "対決する"
    },
    {
        "en":  "fall away",
        "ja":  "減少する、弱まる、衰える"
    },
    {
        "en":  "fall back on ～",
        "ja":  "～を当てにする"
    },
    {
        "en":  "fall for ～",
        "ja":  "(うまい話・売り込みなど)に乗せられる、～に強く引きつけられる"
    },
    {
        "en":  "fall off",
        "ja":  "(数・量が)減少する、(質が)低下する"
    },
    {
        "en":  "fall on ～",
        "ja":  "(責任・仕事などが)～に降りかかる、(記念日などが)～に当たる"
    },
    {
        "en":  "fall through",
        "ja":  "(計画などが)駄目になる、失敗する"
    },
    {
        "en":  "fall under ～",
        "ja":  "(影響・監督など)を受ける"
    },
    {
        "en":  "feel for ～",
        "ja":  "～に同情する、～を思いやる"
    },
    {
        "en":  "figure out ～",
        "ja":  "～を理解する、～を解決する"
    },
    {
        "en":  "fill out ～",
        "ja":  "(書類)に必要事項を記入する"
    },
    {
        "en":  "fire up ～",
        "ja":  "～始動させる、～に火をつける"
    },
    {
        "en":  "fit into ～",
        "ja":  "～に溶け込む、～に収まる"
    },
    {
        "en":  "fix up ～",
        "ja":  "～を修理する、～を改装する"
    },
    {
        "en":  "for all ～",
        "ja":  "～にもかかわらず、～を考慮しても"
    },
    {
        "en":  "for the time being",
        "ja":  "当分の間(は)、さしあたり"
    },
    {
        "en":  "force down ～",
        "ja":  "(感情など)を抑える"
    },
    {
        "en":  "free up ～",
        "ja":  "～を自由化する、～解放する"
    },
    {
        "en":  "frown on [upon] ～",
        "ja":  "～に難色を示す、～に不賛成の意を表す"
    },
    {
        "en":  "gear up ～",
        "ja":  "準備をする"
    },
    {
        "en":  "get around (～)",
        "ja":  "あちこち動き回る、歩き回る、～をうまく避ける、～を逃れる"
    },
    {
        "en":  "get around to doing ～",
        "ja":  "～をする余裕[暇]ができる"
    },
    {
        "en":  "get away with ～",
        "ja":  "～を(罰などを受けずに)うまくやる"
    },
    {
        "en":  "get by ～",
        "ja":  "何とかやっていく、通り抜ける"
    },
    {
        "en":  "get down to ～",
        "ja":  "～本気で取りかかる"
    },
    {
        "en":  "get in on ～",
        "ja":  "～に参加する、～に加わる"
    },
    {
        "en":  "get into ～",
        "ja":  "(本・映画・音楽など)に夢中になる、(ある状態)になる"
    },
    {
        "en":  "get on with ～",
        "ja":  "(仕事など)を続ける、(人)とうまくやっていく"
    },
    {
        "en":  "give away ～",
        "ja":  "(秘密・答えなど)をばらす、～をただで与える、～を安く売る"
    },
    {
        "en":  "give in (to ～)",
        "ja":  "(～に)降参する、屈する、負ける"
    },
    {
        "en":  "give off ～",
        "ja":  "(光・音・においなど)を発する"
    },
    {
        "en":  "give A over to B",
        "ja":  "AをBに預ける、AをBに引き渡す"
    },
    {
        "en":  "give rise to ～",
        "ja":  "～の原因となる、(悪い事態)を生じさせる"
    },
    {
        "en":  "go back on ～",
        "ja":  "(約束など)を破る"
    },
    {
        "en":  "go for ～",
        "ja":  "～を選ぶ"
    },
    {
        "en":  "grow into ～",
        "ja":  "(成長して)(服など)を着られるようになる"
    },
    {
        "en":  "grow on ～",
        "ja":  "(人)の気にいるようになる、(習慣などが)～の身につてくる"
    },
    {
        "en":  "grow out of ～",
        "ja":  "(成長して)(行為・習慣など)から脱する、～から生じる"
    },
    {
        "en":  "hand down ～",
        "ja":  "(伝統・慣習など)を(後世に)伝える、(判決など)を言い渡す"
    },
    {
        "en":  "hand off ～",
        "ja":  "～を任せる、～を引き渡す"
    },
    {
        "en":  "hand out A (to B)",
        "ja":  "(Bに)Aを配る"
    },
    {
        "en":  "hang around (～)",
        "ja":  "(～を)ぶらつく、うろつく"
    },
    {
        "en":  "hang on",
        "ja":  "(少し)待つ、電話を切らずにおく"
    },
    {
        "en":  "hang up ～",
        "ja":  "(電話を)切る"
    },
    {
        "en":  "head off (～)",
        "ja":  "～を阻止する、～を回避する、出かける、立ち去る"
    },
    {
        "en":  "head out",
        "ja":  "出かける、立ち去る"
    },
    {
        "en":  "hold back ～",
        "ja":  "～を抑えておく"
    },
    {
        "en":  "hold off ～",
        "ja":  "～を引き延ばす、～を延期する"
    },
    {
        "en":  "hold out (～)",
        "ja":  "(敵・逆境・圧力などに)もちこたえる、～を差し出す"
    },
    {
        "en":  "hold over ～",
        "ja":  "続映[続演]される、～を延期する"
    },
    {
        "en":  "in a row",
        "ja":  "連続で"
    },
    {
        "en":  "in favor of ～",
        "ja":  "～に賛成して、～を支持して"
    },
    {
        "en":  "in response to ～",
        "ja":  "～に応えて、～に応じて"
    },
    {
        "en":  "in terms of ～",
        "ja":  "～の観点から"
    },
    {
        "en":  "in the event of ～",
        "ja":  "(万一)～の場合には"
    },
    {
        "en":  "in vain",
        "ja":  "無駄に、効果なく、～にすぐ飛びつく"
    },
    {
        "en":  "jump at ～",
        "ja":  "～にすぐ飛びつく"
    },
    {
        "en":  "keep track of ～",
        "ja":  "(人の動向・情勢など)に注意している、～の跡をたどる"
    },
    {
        "en":  "keep up with ～",
        "ja":  "(時勢・流行・人・仕事・勉強など)に遅れずについていく"
    },
    {
        "en":  "kick around ～",
        "ja":  "(計画・提案など)をあれこれ検討する"
    },
    {
        "en":  "kick in",
        "ja":  "(薬などが)効き始める、機能し始める"
    },
    {
        "en":  "kick off A (with B)",
        "ja":  "(Bで)Aを開始する"
    },
    {
        "en":  "kick A out (of B)",
        "ja":  "(Bから)Aを追い出す[首にする]"
    },
    {
        "en":  "knock down ～",
        "ja":  "～を取り壊す、～を解体する、～を殴り倒す"
    },
    {
        "en":  "lay into ～",
        "ja":  "～を厳しく非難する、～を攻撃する"
    },
    {
        "en":  "lay off ～",
        "ja":  "(一時的にまたは永久に) ～を解雇する"
    },
    {
        "en":  "leave off (～)",
        "ja":  "(～を)やめる"
    },
    {
        "en":  "let alone ～",
        "ja":  "まして～、～は言うまでもなく"
    },
    {
        "en":  "let down ～",
        "ja":  "～を失望させる、～(の期待・信頼)を裏切る"
    },
    {
        "en":  "let out ～",
        "ja":  "(声など)を出す、(感情)を表す、～を外に出す"
    },
    {
        "en":  "let up",
        "ja":  "手を緩める、(望ましくないことが)弱まる、(風雨などが)やむ"
    },
    {
        "en":  "level off [out]",
        "ja":  "横ばいになる、安定する"
    },
    {
        "en":  "lift off",
        "ja":  "(飛行機などが)離陸する"
    },
    {
        "en":  "live up to ～",
        "ja":  "(期待など)に応える、(規範など)に従って行動する"
    },
    {
        "en":  "lock in ～",
        "ja":  "～を固定する、(鍵をかけて)～を閉じ込める"
    },
    {
        "en":  "look down on ～",
        "ja":  "～を見下す、～を軽蔑する"
    },
    {
        "en":  "make (both) ends meet",
        "ja":  "(収支を合わせて)収入内で何とかやりくりする"
    },
    {
        "en":  "make do with ～",
        "ja":  "(あり合わせのもの)で済ます"
    },
    {
        "en":  "make it",
        "ja":  "間に合う、成功する、(会合などに)出席できる"
    },
    {
        "en":  "make out (～)",
        "ja":  "～を理解する、うまくやる"
    },
    {
        "en":  "make over ～",
        "ja":  "～を作り変える、～変身させる"
    },
    {
        "en":  "mark down ～",
        "ja":  "～を値下げする、～を書き留める"
    },
    {
        "en":  "mark out ～",
        "ja":  "(線などで)～を区画する、～を区切る"
    },
    {
        "en":  "miss out on ～",
        "ja":  "(機会・好機など)を逸する"
    },
    {
        "en":  "narrow down ～",
        "ja":  "(範囲など)を制限する、～を狭くする"
    },
    {
        "en":  "on a ～ basis",
        "ja":  "～の基準で、～の原則で"
    },
    {
        "en":  "on [in] behalf of A",
        "ja":  "Aを代表して、Aに代わって"
    },
    {
        "en":  "on the contrary",
        "ja":  "それどころか、まるで反対で"
    },
    {
        "en":  "on the spot",
        "ja":  "その場で、即座に"
    },
    {
        "en":  "on the verge of ～",
        "ja":  "～の間際[寸前]で"
    },
    {
        "en":  "over the hump",
        "ja":  "難局を脱して、峠を越して"
    },
    {
        "en":  "owing to ～",
        "ja":  "～のために、～の理由で"
    },
    {
        "en":  "pack up",
        "ja":  "(仕事などが終わって)持ち物をまとめる、荷造りする"
    },
    {
        "en":  "pass for ～",
        "ja":  "～で通る、～と見なされる"
    },
    {
        "en":  "pass off A (as B)",
        "ja":  "Aを(Bだと)偽る"
    },
    {
        "en":  "pass A on (to B)",
        "ja":  "A(もの・情報・病気・利益など)を(Bに)伝える[渡す]"
    },
    {
        "en":  "pass out",
        "ja":  "気絶する"
    },
    {
        "en":  "pay off ～",
        "ja":  "(借金など)を全部支払う"
    },
    {
        "en":  "phase out ～",
        "ja":  "～を段階的に廃止[排除]する"
    },
    {
        "en":  "pick over ～",
        "ja":  "～念入りに調べて選ぶ、～を吟味する"
    },
    {
        "en":  "pick through ～",
        "ja":  "～の中をくまなく探す"
    },
    {
        "en":  "pile up",
        "ja":  "(仕事・借金などが)どんどんたまる、山積する"
    },
    {
        "en":  "pin down ～",
        "ja":  "～を押さえつける、～を動けなくする"
    },
    {
        "en":  "play down ～",
        "ja":  "～を(実際より)重要でないように見せようとする"
    },
    {
        "en":  "play out (～)",
        "ja":  "(物事・状況が)展開する、徐々に進展する、～を最後まで演じる"
    },
    {
        "en":  "play up ～",
        "ja":  "～を誇張する、～強調する"
    },
    {
        "en":  "point to ～",
        "ja":  "(状況・証拠などが)～を示す、(大事な点・理由など)を指摘する"
    },
    {
        "en":  "pull back (～)",
        "ja":  "後退する、～を後退させる、思いとどまる"
    },
    {
        "en":  "pull in ～",
        "ja":  "(観客・客など)を引きつける、(利益・金など)を得る"
    },
    {
        "en":  "pull off ～",
        "ja":  "(困難なこと)をやってのける"
    },
    {
        "en":  "pull through ～",
        "ja":  "(病気・苦境など)を切り抜ける"
    },
    {
        "en":  "push for ～",
        "ja":  "～を要求する、～を得ようと努める"
    },
    {
        "en":  "push through ～",
        "ja":  "(議案など)を通す、～を突き進む"
    },
    {
        "en":  "put down ～",
        "ja":  "(金額)を手付金として払う、～を書き留める"
    },
    {
        "en":  "put forth ～",
        "ja":  "(力など)を発揮する、(計画・案など)を提出する"
    },
    {
        "en":  "put toward ～",
        "ja":  "～を提案[提出]する"
    },
    {
        "en":  "put in ～",
        "ja":  "(設備など)を備え付ける、(金・時間・精力など)をつぎ込む"
    },
    {
        "en":  "put A through (to B)",
        "ja":  "Aの電話を(Bに)つなぐ"
    },
    {
        "en":  "read off ～",
        "ja":  "(リストなど)を読み上げる"
    },
    {
        "en":  "refrain from doing ～",
        "ja":  "～するのを控える、～するのをやめる"
    },
    {
        "en":  "regardless of ～",
        "ja":  "～に(も)かかわらず、～にかまわず"
    },
    {
        "en":  "roll in (～)",
        "ja":  "(金など)がたくさんある、転がり込む、どっと集まる"
    },
    {
        "en":  "roll up ～",
        "ja":  "～をくるくると巻く、(そで・すそ)をまくり上げる"
    },
    {
        "en":  "round off ～",
        "ja":  "～を締めくくる、～をうまく終える"
    },
    {
        "en":  "round up ～",
        "ja":  "(散らばった人など)を集める、～を逮捕する"
    },
    {
        "en":  "rule out ～",
        "ja":  "～を排除する、～を除外する"
    },
    {
        "en":  "run against ～",
        "ja":  "～に不利になる"
    },
    {
        "en":  "run down ～",
        "ja":  "(車・運転手が)～をひく、～のことを悪く言う、～を突き止める"
    },
    {
        "en":  "run through ～",
        "ja":  "ざっと～を読み上げる[に目を通す]"
    },
    {
        "en":  "scoop up ～",
        "ja":  "～を抱き上げる、～をすくい上げる"
    },
    {
        "en":  "scratch out ～",
        "ja":  "～を削除する、やっと(生計)を立てる"
    },
    {
        "en":  "see about ～",
        "ja":  "～を検討する、～を手配する、～を何とかする"
    },
    {
        "en":  "see A off",
        "ja":  "(空港・駅などで)Aを見送る"
    },
    {
        "en":  "see through ～",
        "ja":  "～を見抜く、～を見破る、～を通して見る"
    },
    {
        "en":  "sell out",
        "ja":  "(期待を)裏切る、(ものが)売り切れる"
    },
    {
        "en":  "send for ～",
        "ja":  "(人・助けなど)を呼ぶ、～に来てもらう"
    },
    {
        "en":  "send out for ～",
        "ja":  "(食べ物)の出前を頼む"
    },
    {
        "en":  "set aside ～",
        "ja":  "(時間・金など)をとっておく、～をわきへどける"
    },
    {
        "en":  "set down ～",
        "ja":  "～を書き留める"
    },
    {
        "en":  "set in",
        "ja":  "(季節・流行・好ましくないものなどが)始まる、起こる"
    },
    {
        "en":  "set off (～)",
        "ja":  "出発する、～を引き起こす、～を作動させる"
    },
    {
        "en":  "set out to do ～",
        "ja":  "～することに着手する、～し始める"
    },
    {
        "en":  "set up ～",
        "ja":  "(会合など)を準備する、～を設置する、(会社・組織など)を作る"
    },
    {
        "en":  "settle down",
        "ja":  "ゆったりとくつろぐ、落ち着く、定住する"
    },
    {
        "en":  "settle up (with ～)",
        "ja":  "(～と)精算する、(～に)勘定を支払う"
    },
    {
        "en":  "shake up ～",
        "ja":  "～を刷新する、～を動揺させる、～を奮い立たせる"
    },
    {
        "en":  "show off (～)",
        "ja":  "いいところを見せる、～を見せびらかす"
    },
    {
        "en":  "show up",
        "ja":  "現れる、やってくる"
    },
    {
        "en":  "sign up for ～",
        "ja":  "(署名して)～に参加する、(受講など)の届けを出す"
    },
    {
        "en":  "single out ～",
        "ja":  "～を(特に)選び出す"
    },
    {
        "en":  "sink in",
        "ja":  "十分に理解される、分かってもらう"
    },
    {
        "en":  "sit back",
        "ja":  "何もしないで[手をこまねいて]いる、くつろぐ、(いすに)深く座る"
    },
    {
        "en":  "sit by",
        "ja":  "(悪い事態を)黙って見ている、傍観する"
    },
    {
        "en":  "sit in",
        "ja":  "参加する、見学[参観]する、代理を務める"
    },
    {
        "en":  "skim over ～",
        "ja":  "～をざっと見る、～表面的に扱う"
    },
    {
        "en":  "slip by",
        "ja":  "(時・機会が)いつの間にか過ぎる"
    },
    {
        "en":  "smooth over ～",
        "ja":  "(話し合いをして)(問題・困難など)を処理しやすくする"
    },
    {
        "en":  "speak for ～",
        "ja":  "～を代表して意見を述べる、～を代弁する、～への支持を表明する"
    },
    {
        "en":  "split up (～)",
        "ja":  "別れる、分裂する、～を分裂させる"
    },
    {
        "en":  "spring from ～",
        "ja":  "～から生じる、(人が)～の出である"
    },
    {
        "en":  "spring up",
        "ja":  "急に生まれる、急成長する"
    },
    {
        "en":  "stand down (as ～)",
        "ja":  "(公職など)を辞任する"
    },
    {
        "en":  "stand for ～",
        "ja":  "～の略である、～を意味する、～を支持する"
    },
    {
        "en":  "stand up to ～",
        "ja":  "～に抵抗する、～に立ち向かう、～に耐える"
    },
    {
        "en":  "stay off ～",
        "ja":  "(健康のため)～を控える、～に近づかない"
    },
    {
        "en":  "step down [aside]",
        "ja":  "辞任する"
    },
    {
        "en":  "stick around",
        "ja":  "そこらで待つ、帰らずにいる"
    },
    {
        "en":  "stick to [by] ～",
        "ja":  "(主義など)を堅持する、～をやり続ける"
    },
    {
        "en":  "stick up for ～",
        "ja":  "～をあくまでも擁護する、～を支持する"
    },
    {
        "en":  "stick with ～",
        "ja":  "～を最後までやり抜く、～を続けてする"
    },
    {
        "en":  "stir in ～",
        "ja":  "～を入れてかき混ぜる"
    },
    {
        "en":  "stir up ～",
        "ja":  "(騒ぎなど)を引き起こす、(想像力・記憶など)をかき立てる"
    },
    {
        "en":  "sum up ～",
        "ja":  "～を要約する"
    },
    {
        "en":  "take in ～",
        "ja":  "～を摂取する、(光景など)を観察する、～をだます、～を理解する"
    },
    {
        "en":  "tale on ～",
        "ja":  "(特にきつい仕事・責任)を引き受ける"
    },
    {
        "en":  "take over ～",
        "ja":  "～を引き継ぐ、～を買収する、～を占領する"
    },
    {
        "en":  "take up ～",
        "ja":  "～を趣味[職業・学問]として始める、(問題など)を取り上げる"
    },
    {
        "en":  "talk down to A",
        "ja":  "Aを見下した調子で話す"
    },
    {
        "en":  "talk A into doing ～",
        "ja":  "Aを説得して～させる"
    },
    {
        "en":  "talk up ～",
        "ja":  "(人・もの)を実際以上に興味深いもののように話す"
    },
    {
        "en":  "tear down ～",
        "ja":  "～を取り壊す、～を解体する、～を殴り倒す"
    },
    {
        "en":  "tell on ～",
        "ja":  "(特に子供が)～のことを告げ口する、～にこたえる"
    },
    {
        "en":  "the other way around",
        "ja":  "(方角・事情などが)逆に[で]"
    },
    {
        "en":  "throw off ～",
        "ja":  "(衣服など)をさっと脱ぐ[脱ぎ捨てる]、～を払いのける"
    },
    {
        "en":  "throw up (～)",
        "ja":  "嘔吐する、(食べ物)を吐く"
    },
    {
        "en":  "tidy up ～",
        "ja":  "(部屋・家・机など)を片付ける、～を整理する"
    },
    {
        "en":  "tie up ～",
        "ja":  "忙しくて身動きできない、～を固く縛る"
    },
    {
        "en":  "tip over (～)",
        "ja":  "ひっくり返る、倒れる、～をひっくり返す"
    },
    {
        "en":  "touch up ～",
        "ja":  "(絵・文章・化粧など)を手直しする、～を修正する"
    },
    {
        "en":  "track down ～",
        "ja":  "～を追跡して捕らえる、～を追い詰める"
    },
    {
        "en":  "trip up (A)",
        "ja":  "Aをつまずかせる、つまずく、しくじる"
    },
    {
        "en":  "try out ～",
        "ja":  "～を試してみる、～の効果を試す"
    },
    {
        "en":  "tune in (to ～)",
        "ja":  "(局・番組などに)テレビ[ラジオ]のチャンネルを合わせる"
    },
    {
        "en":  "tune up (～)",
        "ja":  "(楽器)を調律する、(エンジン・機械など)を整備する、調律する"
    },
    {
        "en":  "turn around (～)",
        "ja":  "(商売・経済など)を好転させる、～の向きを変える、好転する"
    },
    {
        "en":  "turn away ～",
        "ja":  "～を追い払う、(客など)の入場を断る、～を背ける"
    },
    {
        "en":  "turn in (～)",
        "ja":  "～を提出する、寝る"
    },
    {
        "en":  "turn out",
        "ja":  "であることがわかる、集まる"
    },
    {
        "en":  "turn to ～",
        "ja":  "～に頼る、(犯罪・悪習など)に走る、～に取りかかる"
    },
    {
        "en":  "walk off [away] with ～",
        "ja":  "～を盗む、(賞など)をあっさり手に入れる"
    },
    {
        "en":  "wander off",
        "ja":  "はぐれる、(道路・場所から)外れる、(主題から)脱線する"
    },
    {
        "en":  "want for ～",
        "ja":  "～を欠いている"
    },
    {
        "en":  "wash away ～",
        "ja":  "～を洗い流す、(記憶・感情など)を洗い去る"
    },
    {
        "en":  "wash down ～",
        "ja":  "(食べ物など)を流し込む、～を洗い流す"
    },
    {
        "en":  "watch over ～",
        "ja":  "～の世話をする、～を見守る、～を監視する"
    },
    {
        "en":  "wear off",
        "ja":  "(薬効・印象・痛みなどが)しだいに弱まる、すり減ってなくなる"
    },
    {
        "en":  "wear out ～",
        "ja":  "～を疲れ果てさせる"
    },
    {
        "en":  "weigh on ～",
        "ja":  "～に重くのしかかる、～を圧迫する、～を苦しめる"
    },
    {
        "en":  "win over ～",
        "ja":  "～を説得する"
    },
    {
        "en":  "wipe out ～",
        "ja":  "～を消滅[絶滅]させる、～を撲滅する"
    },
    {
        "en":  "work out ～",
        "ja":  "(計画・対策など)を練る、(問題)を解決する、～を計算する"
    },
    {
        "en":  "wrap up ～",
        "ja":  "(仕事・交渉など)を滞りなく終える"
    }
];
