$(window).on('load', function() {
    "use strict";

    /*==============================================
    Language change
    ==============================================*/
    function set_translate(language){
      if(language === 'jp'){
        return { 
          "jp":{
            "translation":{
              "views": {
                  "title": "シャヒド | 履歴書",
                  "available_for_hire": "私は雇用可能です！",
                  "nikname": "シャヒド",
                  "profession": "ソフトウェアエンジニア",
                  "home": "ホーム",
                  "about": "アバウト",
                  "services": "サービス",
                  "experience": "経験",
                  "hello": "こんにちは！",
                  "name": "私はシャヒド・イクバルです。",
                  "intro": "献身的なプロフェッショナルとして、強い職業道徳心と絶え間ない改善を追求する姿勢を誇りに思っています。時間厳守と積極的な学びに取り組む実績を持ち、ポジティブで協力的な職場環境を育成します。独立してもチームの一員としても優れ、スピーディーな環境で活躍します。効果的なコミュニケーションと問題解決能力により、多様な背景と学習への情熱を持って挑戦を受け入れます。",
                  "thankyou": "お時間を割いていただき、ありがとうございます。ご連絡を楽しみにしています。",
                  "view_works": "作品を見る",
                  "who_am_i": "私は誰でしょうか？",
                  "about_me": "プロフィール",
                  "bio": "バイオグラフィー ",
                  "bio_details": "私はシャヒド・イクバルです。ロバストなウェブアプリケーションを構築することに情熱を持つソフトウェアエンジニアです。Ruby on Railsで10年以上の経験を持ち、バックエンド開発とシステムアーキテクチャのスキルを磨く様々なプロジェクトに携わってきました。Railsに加えて、データベース管理のためのPostgreSQLや、HTML、CSS、jQueryなどのフロントエンド技術も習得しています。最近では、スクリプティングや自動化タスクの多様性に富むPythonも積極的に学んでいます。",
                  "age": "年齢",
                  "residence": "住所",
                  "japan": "日本",
                  "email": "メール",
                  "phone": "電話",
                  "download_cv": "履歴書をダウンロードする",
                  "what_can_i_do": "私は何ができるでしょうか？",
                  "my_skills": "私のスキル",
                  "gcp_desc": "GCPのさまざまなサービスを活用して、スケーラブルで柔軟なクラウドアーキテクチャを設計します。クラウドコンピューティングの実務経験もあります。",
                  "front_end_development": "フロントエンド開発（HTML/CSS/jQuery）",
                  "front_end_development_desc":"私はHTML、CSS、およびjQueryを専門とし、ユーザーインターフェースデザインに対する鋭い感覚を持っています。これらの技術に堅固な基盤を築いています。",
                  "python": "パイソン",
                  "ansible": "Ansible（オープンソースのIT自動化エンジン）",
                  "ansible_desc": "Ansibleの強力な機能を活用して、インフラ管理プロセスを効率化し、さまざまな環境でタスクを自動化します。",
                  "what_do_i_do": "私は何をすればいいですか？",
                  "backend_development": "バックエンド開発",
                  "backend_development_desc": "Ruby on Railsで10年以上の経験を持ち、スケーラブルで効率的なサーバーサイドソリューションの構築に優れています。",
                  "api_development": "API 開発",
                  "api_development_desc": "Ruby on RailsとFastAPIを使用して、堅牢なAPIを構築する豊富な経験があり、両フレームワークの強固な基盤を持っています。",
                  "education_experience": "学歴と経験",
                  "resume": "履歴書",
                  "resume_name": "イクバル シャヒド",
                  "tokyo": "東京 ",
                  "experienced_in_ruby_on_rails": "Ruby on Railsウェブ開発の経験が豊富で、プロジェクトライフサイクル管理（分析、設計、開発、チームリーダーシップ、デプロイメント、テスト、ドキュメンテーション、メンテナンス、技術サポート）に精通しています。MVCアーキテクチャ、HTML5、Bootstrap、Restful API統合、Git/GitHub/Bitbucketを得意とし、積極的な問題解決と適応力を示しています。",
                  "work_experiences": "職務経歴",
                  "senior_software_engineer": "シニアソフトウェアエンジニア",
                  "software_engineer": "ソフトウェアエンジニア",
                  "contract_software_developer": "契約ソフトウェア開発者",
                  "software_analyst": "ソフトウェアアナリスト",
                  "protea": "PROTEA JAPAN | 2022年 - 現在",
                  "protea_desc": "主導して特徴開発およびバグ修正の取り組みを行い、堅牢なアプリケーション機能と最適なユーザーエクスペリエンスを確保します。包括的なコードレビューを実施し、Gitlabを使用してソースコードを管理し、高い基準を遵守し協力を促進します。複数の環境にわたるビルドの作成と展開を監督し、効率化のための自動化を実装します。デザイナーと密に連携して直感的でアクセスしやすいユーザーインターフェースを実装します。多様な技術スキルを活用して複雑な問題を解決し、革新を推進します。メンターシップと技術リーダーシップを提供し、協力的なチーム環境を推進し、クロスファンクショナルなチーム間でのプロジェクトの成功配信とアライメントを確保します。",
                  "vebuin": "VeBuIn | 2018年12月 - 2022年1月",
                  "vebuin_desc": "VeBuIn株式会社でのソフトウェアエンジニアとして、Ruby on Railsを利用して高品質なソフトウェアソリューションの開発とメンテナンスに従事しました。清潔なコーディング原則に常に従い、コードの保守性と拡張性を確保しました。スクラムチーム内での作業を通じて、反復的かつ増分的な改善に貢献し、クロスファンクショナルなチームと効果的に協力して堅牢な機能を提供し、複雑な問題を解決しました。私の役割はソフトウェアエンジニアリングのベストプラクティスと持続的な改善に強いコミットメントを持っていました。",
                  "sodel_solutions": "Sodel Solutions | 2018年7月 - 2018年12月",
                  "sodel_solutions_desc": "Sodel Solutions株式会社において、Ruby on Railsを専門とするソフトウェアエンジニアとして勤務しました。APIの開発とメンテナンス、効率的なバックエンド管理のためのActive Adminの統合、そして保守可能で拡張可能なコードのためのクリーンなコーディング原則の遵守が私の役割でした。スクラムチーム内での作業を通じて、反復的な改善の提供に重要な役割を果たし、クロスファンクショナルなチームと協力して高品質なソフトウェアソリューションを確保しました。",
                  "unikaihatsu": "ユニ開発ソフトウェア | 2016年11月 - 2018年07月",
                  "unikaihatsu_desc": "ユニ開発ソフトウェア株式会社で、Ruby on RailsとPostgreSQLを活用して堅牢でスケーラブルなアプリケーションの開発に従事しました。Bootstrapを使用してレスポンシブで視覚的に魅力的なユーザーインターフェースを作成しました。清潔なコーディング慣行へのコミットメントにより、高品質なコードを確保しました。また、Scrumの経験により、アジャイルチーム内での効果的な協力を促進しました。これらの技術と方法論の統合により、高品質なソフトウェアソリューションの提供に貢献しました。",
                  "excel_infoways": "エクセルインフォウェイズ株式会社 | 2016年3月 - 2016年11月",
                  "excel_infoways_desc": "Excel Infoways株式会社でのソフトウェアエンジニアとして、Ruby on Rails開発に特化し、eコマースプラットフォーム向けのスケーラブルなAPIの構築に重点を置きました。常に清潔なコーディング慣行を適用し、保守性と効率の良いコードベースの確保に努めました。私の役割は、クロスファンクショナルなチームと緊密に協力し、eコマースビジネスの特有の要求を満たすカスタマイズされたソフトウェアソリューションを提供することでした。API開発とeコマースソリューションの専門知識は、企業の技術的な能力向上とビジネス目標の効果的な達成に大きく貢献しました。",
                  "cerebrate": "セレブレイト株式会社 | 2015年11月 - 2016年03月",
                  "cerebrate_desc": "セレブレイト株式会社では、最初はRails開発者として始め、すぐにMEANスタック（MongoDB、Express.js、Angular.js、Node.js）での作業に移行しました。この変化は、私のスキルを拡張し、最先端の技術と共に働くことに重要な役割を果たしました。セレブレイトのイノベーションと協力の文化で繁栄し、新しいアイデアを実現することができるよう支援されています。このダイナミックな環境は常に私に新たな高みを目指すように挑戦してくれます。",
                  "botree": "ボーツリーテクノロジーズ株式会社 | 2015年02月 - 2015年10月",
                  "botree_desc": "ボーツリーテクノロジーズ株式会社での役割では、Ruby on Railsを使用して新しいモジュールを追加する責任がありました。この経験により、技術的な能力を磨くだけでなく、チームワークと効率的なプロジェクト管理の重要性も学びました。私は、協力と効果的なコミュニケーションが成功するプロジェクトの鍵であると信じています。",
                  "sharingdais": "シェアリングダイス | 2014年09月 - 2014年12月",
                  "sharingdais_desc": "Sharingdais.comはスタートアップの製品ベースの企業でした。私はソフトウェアエンジニアとしてこの会社に参加し、新しい機能の追加とバグの解決を担当しました。このサイトはRailsとBootstrapで構築されていました。",
                  "dreamsoft4u": "ドリームソフトフォーユー株式会社 | 2014年07月 - 2014年09月",
                  "dreamsoft4u_desc": "前職では主にjQueryとプラグインの統合に焦点を当てていましたが、自分自身を試し、Ruby on Railsを使って独立して機能開発に取り組むことを決意しました。そのためDreamSoft4u株式会社で契約社員として仕事をすることにしました。DreamSoft4u株式会社での時間を通じて、Shopifyや小規模なチャットアプリケーションなどのプロジェクトに携わる機会を得ました。これらの経験は、技術的なスキルを磨くだけでなく、適応性と問題解決の重要性を学ぶことができました。",
                  "kartik_solutions": "カルティックソリューションズ株式会社 | 2013年06月 - 2014年06月",
                  "kartik_solutions_desc": "以前の会社でRuby on Railsを使っているのを見て興味を持ちました。そのフレームワークの能力に魅了され、さらに学びたいと思いました。そのため、Rubyの学習に飛び込み、わずか3ヶ月後にバックエンド開発者として初めてのチャンスを得ることができました。カルティックソリューションズ株式会社では、既存のサイトのメンテナンスと改善を担当しています。これにより、Fitbitのユーザー向けに統合するなど、さまざまなプラグインやツールを使う機会を得ました。開発者として成長し続ける中で、挑戦的でありながらも報われる経験を積むことができました。",
                  "beryl_systems": "ベリルシステムズ株式会社 | 2012年12月 - 2013年05月",
                  "beryl_systems_desc": "私のキャリアはベリルシステムズ株式会社で始まりました。ここではBootstrapフレームワークを使った作業とjQuery、Bootstrapのスキルを磨く機会を得ました。ベリルシステムズでの時間を通じて、新しいページの作成や既存ページのデザインの向上に責任を持ちました。これにより、自分の創造性を発揮するだけでなく、クライアントの全体的なユーザーエクスペリエンスを向上させることができました。",
                  "projects": "プロジェクト",
                  "right_on": "ライトオン",
                  "right_on_desc": "これは衣料品販売に特化したeコマースウェブサイトです。その製品は楽天、&mall、Magaseek、PayPayなど他のeコマースプラットフォームにもリストされています。このシステムは、これらのプラットフォームからの注文を追跡し、倉庫に送信し、注文の出荷を管理し、在庫記録を維持するように設計されています。",
                  "right_on_hr": "ライトオン (人事システム)",
                  "confidential": "機密",
                  "right_on_hr_desc": "このシステムは企業の人事部門向けのデータストレージソリューションとして設計されています。従業員は休暇、経費などの申請を行うことができるワークフローシステムとして機能します。申請はまずマネージャーに承認を求められ、最終的には人事部に送られます。システムでは、マネージャーや人事担当者が必要に応じてワークフローのステップを調整できるようになっており、承認の階層を増減させることができます。",
                  "giftcardspread": "ギフトカードスプレッド",
                  "giftcardspread_desc": "このシステムは元々Giftcardspreadのサブシステムでした。主な機能は、他のシステムの価格と比較して製品の価格を管理することです。",
                  "whiskk": "ウィスク",
                  "na": "利用不可",
                  "whiskk_desc": "このアプリは、コミュニティ内での社会的な相互作用と支援を促進するために設計されたソーシャルアプリでした。アプリは、同じ社会に住む個々の多様なニーズを満たすことを目指し、相互支援とつながりを育むことを目的としています。",
                  "advowire": "アドボワイア",
                  "advowire_desc": "AdvoWireは、ブロガー、ソーシャルメディアユーザー、ブランド、エージェンシー間のつながりを促進し、インフルエンサーおよび口コミマーケティングキャンペーンを支援します。ユーザーは「アドボケイト」プロファイルを作成し、関連するキャンペーンに参加することでインセンティブを受け取ります。業界の適合性、ネットワークの範囲、地理的位置によって資格が決定されます。アドボケイトネットワークの信憑性は、偽造または非活動的な連絡先やフォロワーを抑制する統合された検証手法によって確保され、キャンペーンの効果と信頼性が向上します。",
                  "sharingdais_project": "シェアリングダイス",
                  "sharingdais_project_desc": "このプラットフォームは、食べ物、スキル、書籍などのピア・ツー・ピア（P2P）活動のオンラインリスティングサービスとして機能します。ユーザーはプラットフォーム上でこれらのサービスを提供および発見し、リスティングに興味を示し、他のユーザーとつながって共有を行うことができます。現在、このプラットフォームはバンガロールとNCR（National Capital Region）地域のユーザーに利用可能です。",
                  "tmo": "トムメンアウトフィット",
                  "tmo_desc": "これは仕立て屋と顧客の間のコミュニケーションを目的としたチャットシステムでした。",
                  "sharemeister": "シェアマイスタ",
                  "sharemeister_desc": "Sharemeisterは、どんなデジタルアプリケーションでもスケーリングするために設計されたリソースのマーケットプレイスを提供するソフトウェアユーティリティサービスです。",
                  "pinni_insurance": "ピンニー保険",
                  "pinni_insurance_desc": "このプロジェクトは私が初めて取り組んだものでした。具体的には保険会社向けのデータ管理システムの設計に関わりました。",
                  "skills": "スキル",
                  "technical": "テクニカル",
                  "shopify": "ショッピファイ",
                  "ruby_on_rails": "ルビーオンレイルズ",
                  "fast_api": "ファストエーピーアイ",
                  "kong_gateway": "コング API ゲートウェイ ",
                  "postgresql": "ポストグレSQL",
                  "html": "エイチティーエムエル",
                  "css": "シーエスエス",
                  "jquery": "ジェイクエリ",
                  "bootstrap": "ブートストラップ",
                  "reactjs": "リアクト",
                  "mean_stack": "MEANスタック",
                  "gcp": "Google Cloud Platform (グーグル クラウド プラットフォーム)",
                  "aws": "AWS (アマゾン ウェブ サービス)",
                  "ansible": "アンシブル",
                  "docker": "ドッカー",
                  "clean_coding": "クリーンコーディング",
                  "code_review": "コードレビュー ",
                  "scrum": "スクラム",
                  "gitlab": "ギットラブ",
                  "gitHub": "ギットハブ",
                  "bitbucket": "ビットバケット",
                  "redis": "レディス",
                  "javascript_react": "ジャバスクリプト/リアクト",
                  "ruby_python": "ルビー/パイソン",
                  "postgre_mysql": "ポストグレSQL/マイエスキューエル",
                  "object_oriented_design": "オブジェクト指向設計",
                  "design_and_implement_database_structures": "データベース構造の設計と実装",
                  "lead_and_deliver_complex_software_systems": "複雑なソフトウェアシステムのリードおよびデリバリ",
                  "professional": "プロフェッショナル",
                  "effective_communication": "効果的なコミュニケーション",
                  "team_player": "チームプレーヤー",
                  "strong_problem_solver": "問題解決力が強い",
                  "good_time_management": "時間管理能力が良い",
                  "education": "教育",
                  "bachelor_of_technology": "コンピュータサイエンス工学士",
                  "university": "ビール・バフアドゥル・シン・プルバンチャル大学、ジャウンプル",
                  "languages": "言語",
                  "hindi": "ヒンディー語",
                  "english": "英語",
                  "japanese": "日本語",
                  "german": "Deutschland",
                  "urdu": "Urdu",
                  "native": "(Native)",
                  "conversational": "(conversational)",
                  "interests": "Interests",
                  "cooking": "Cooking"
              }
            }
          }
        }
      }else if (language === 'de') {
        return {
          "de": {
            "translation":{
              "views": {
                  "title": "Shahid | Lebenslauf",
                  "available_for_hire": "Ich bin für Anstellung verfügbar!",
                  "nikname": "Shahid",
                  "profession": "Softwareingenieur",
                  "home": "Startseite",
                  "about": "Über uns",
                  "services": "Dienstleistungen",
                  "experience": "Erfahrung",
                  "hello": "Hallo!",
                  "name": "Ich bin Shahid Iqbal.",
                  "intro": "Als engagierter Fachmann bin ich stolz auf meine starke Arbeitsethik und mein ständiges Streben nach Verbesserung. Mit einem Track Record in puncto Pünktlichkeit und einer proaktiven Lernhaltung fördere ich ein positives, kollaboratives Arbeitsumfeld. Ich zeichne mich sowohl in der Eigenarbeit als auch im Team aus und blühe in schnelllebigen Umgebungen auf. Meine effektiven Kommunikations- und Problemlösungsfähigkeiten befähigen mich, aufmerksam zuzuhören und Herausforderungen taktvoll zu lösen, unterstützt von einem vielseitigen Hintergrund und einer Leidenschaft für das Lernen.",
                  "thankyou": "Vielen Dank für Ihre Zeit. Ich freue mich darauf, mit Ihnen in Kontakt zu treten.",
                  "view_works": "Arbeiten anzeigen",
                  "who_am_i": "Wer bin ich?",
                  "about_me": "Über mich",
                  "bio": "Biografie",
                  "bio_details": "Ich bin Shahid Iqbal, ein Softwareentwickler mit Leidenschaft für die Entwicklung robuster Webanwendungen. Mit über einem Jahrzehnt Erfahrung in Ruby on Rails habe ich an vielfältigen Projekten gearbeitet, die meine Fähigkeiten in der Backend-Entwicklung und Systemarchitektur geschärft haben. Neben Rails beherrsche ich PostgreSQL für die Datenbankverwaltung und verfüge über fundierte Kenntnisse in Frontend-Technologien wie HTML, CSS und jQuery. In letzter Zeit erkunde ich auch Python für seine Vielseitigkeit in Skripting und Automatisierungsaufgaben.",
                  "age": "Alter",
                  "residence": "Wohnsitz",
                  "japan": "Japan",
                  "email": "E-Mail",
                  "phone": "Telefon",
                  "download_cv": "Lebenslauf herunterladen",
                  "what_can_i_do": "Was kann ich tun?",
                  "my_skills": "Meine Fähigkeiten",
                  "gcp_desc": "Nutzen der Dienste von GCP zur Gestaltung skalierbarer und flexibler Cloud-Architekturen. Praktische Erfahrung im Bereich Cloud Computing.",
                  "front_end_development": "Front-End-Entwicklung (HTML/CSS/jQuery)",
                  "front_end_development_desc":"Ich habe mich auf HTML, CSS und jQuery spezialisiert und habe ein gutes Gespür für Benutzeroberflächendesign. Ich habe eine solide Grundlage in diesen Technologien.",
                  "python": "Python",
                  "ansible": "Ansible (Open-Source-IT-Automatisierungs-Engine)",
                  "ansible_desc": "Nutzen Sie die leistungsstarken Fähigkeiten von Ansible, um Infrastrukturmanagementprozesse zu optimieren und Aufgaben in verschiedenen Umgebungen zu automatisieren.",
                  "what_do_i_do": "Was soll ich tun?",
                  "backend_development": "Backend-Entwicklung",
                  "backend_development_desc": "Mit über einem Jahrzehnt Erfahrung in Ruby on Rails bin ich herausragend in der Entwicklung skalierbarer und effizienter serverseitiger Lösungen.",
                  "api_development": "API-Entwicklung",
                  "api_development_desc": "Ich verfüge über umfangreiche Erfahrung im Aufbau robuster APIs mit Ruby on Rails und FastAPI und habe solide Kenntnisse in beiden Frameworks.",
                  "education_experience": "Ausbildung und Erfahrung",
                  "resume": "Lebenslauf",
                  "resume_name": "Shahid Iqbal",
                  "tokyo": "Tokio",
                  "experienced_in_ruby_on_rails": "Erfahren in der Ruby on Rails Webentwicklung sowie im Projekt-Lebenszyklus-Management (Analyse, Design, Entwicklung, Teamleitung, Bereitstellung, Testing, Dokumentation, Wartung, technischer Support) mit Fachkenntnissen in MVC-Architektur, HTML5, Bootstrap, Restful API-Integration und Git/GitHub/Bitbucket. Zeige proaktive Problemlösungsfähigkeiten und Anpassungsfähigkeit.",
                  "work_experiences": "Berufserfahrung",
                  "senior_software_engineer": "Senior Softwareentwickler",
                  "software_engineer": "Softwareentwickler",
                  "contract_software_developer": "Vertragssoftwareentwickler",
                  "software_analyst": "Software-Analyst",
                  "protea": "PROTEA JAPAN | 2022 - Gegenwart",
                  "protea_desc": "Leitung der Feature-Entwicklung und Fehlerbehebungsmaßnahmen zur Sicherstellung einer robusten Anwendungs-funktionalität und optimalen Benutzererfahrung. Durchführung umfassender Code-Reviews und Verwaltung des Quellcodes mit Gitlab zur Sicherstellung hoher Standards und Förderung der Zusammenarbeit. Überwachung der Erstellung und Bereitstellung von Builds in mehreren Umgebungen sowie Implementierung von Automatisierung zur Steigerung der Effizienz. Enge Zusammenarbeit mit Designern zur Umsetzung intuitiver und barrierefreier Benutzeroberflächen. Einsatz vielfältiger technischer Fähigkeiten zur Lösung komplexer Probleme und Förderung von Innovationen. Bereitstellung von Mentoring, technischer Führung und Förderung einer kooperativen Teamumgebung zur Sicherstellung erfolgreicher Projektumsetzung und Abstimmung zwischen funktionsübergreifenden Teams.",
                  "vebuin": "VeBuIn | Dezember 2018 - Januar 2022",
                  "vebuin_desc": "Als Softwareentwickler bei VeBuIn Pvt. Ltd. habe ich Ruby on Rails eingesetzt, um hochwertige Softwarelösungen zu entwickeln und zu pflegen. Ich habe konsequent saubere Codierungsprinzipien eingehalten, um die Wartbarkeit und Skalierbarkeit des Codes sicherzustellen. Innerhalb eines Scrum-Teams habe ich zu iterativen und inkrementellen Verbesserungen beigetragen und effektiv mit funktionsübergreifenden Teams zusammengearbeitet, um robuste Funktionen zu liefern und komplexe Probleme zu lösen. Meine Rolle umfasste ein starkes Engagement für Best Practices in der Softwareentwicklung und kontinuierliche Verbesserung.",
                  "sodel_solutions": "Sodel Solutions | Juli 2018 - Dezember 2018",
                  "sodel_solutions_desc": "Bei Sodel Solutions Inc. war ich als Softwareentwickler spezialisiert auf Ruby on Rails tätig. Meine Aufgaben umfassten die Entwicklung und Wartung von APIs, die Integration von Active Admin zur effizienten Backend-Verwaltung sowie die Einhaltung von sauberen Codierungsprinzipien für wartbaren und skalierbaren Code. Innerhalb eines Scrum-Teams spielte ich eine Schlüsselrolle bei der Bereitstellung iterativer Verbesserungen und arbeitete eng mit funktionsübergreifenden Teams zusammen, um hochwertige Softwarelösungen zu gewährleisten.",
                  "unikaihatsu": "Unikaihatsu Software | November 2016 - Juli 2018",
                  "unikaihatsu_desc": "Bei Unikaihatsu Software Pvt. Ltd. war ich als Softwareentwickler tätig und nutzte Ruby on Rails und PostgreSQL, um robuste und skalierbare Anwendungen zu entwickeln. Mit Bootstrap habe ich responsive und optisch ansprechende Benutzeroberflächen erstellt. Mein Engagement für saubere Codierungspraktiken gewährleistete hochwertigen Code, und meine Erfahrung in Scrum ermöglichte effektive Zusammenarbeit innerhalb agiler Teams. Durch die Integration dieser Technologien und Methoden trug ich zur Bereitstellung hochwertiger Softwarelösungen bei.",
                  "excel_infoways": "Excel Infoways Ltd | März 2016 - November 2016",
                  "excel_infoways_desc": "Als Softwareentwickler bei Excel Infoways Ltd habe ich mich auf Ruby on Rails Entwicklung spezialisiert und dabei stark auf die Entwicklung skalierbarer APIs für E-Commerce Plattformen fokussiert. Ich habe konsequent saubere Codierungspraktiken angewendet, um wartbare und effiziente Codebasen zu gewährleisten. Meine Aufgabe umfasste die enge Zusammenarbeit mit funktionsübergreifenden Teams, um maßgeschneiderte Softwarelösungen zu liefern, die den einzigartigen Anforderungen von E-Commerce Unternehmen gerecht werden. Meine Expertise in API Entwicklung und E-Commerce Lösungen hat maßgeblich zur Verbesserung der technologischen Fähigkeiten des Unternehmens und zur effektiven Erreichung der Geschäftsziele beigetragen.",
                  "cerebrate": "Cerebrate, Inc | November 2015 - März 2016",
                  "cerebrate_desc": "Bei Cerebrate, Inc. begann ich als Rails-Entwickler und wechselte schnell zur Arbeit mit dem MEAN-Stack (MongoDB, Express.js, Angular.js, Node.js). Dieser Wechsel war entscheidend für die Erweiterung meiner Fähigkeiten und den Umgang mit modernsten Technologien. Ich habe in der Kultur der Innovation und Zusammenarbeit bei Cerebrate erfolgreich gearbeitet, wo ich befähigt wurde, neue Ideen umzusetzen. Diese dynamische Umgebung fordert mich ständig heraus, mich selbst zu neuen Höchstleistungen anzuspornen.",
                  "botree": "BoTree Technologies Pvt. Ltd. | Februar 2015 - Oktober 2015",
                  "botree_desc": "In meiner Rolle bei BoTree Technologies Pvt Ltd war ich dafür verantwortlich, neue Module unter Verwendung von Ruby on Rails hinzuzufügen. Diese Erfahrung hat mir nicht nur geholfen, meine technischen Fähigkeiten zu schärfen, sondern auch die Bedeutung von Teamarbeit und effizientem Projektmanagement kennengelernt. Ich bin der Überzeugung, dass Zusammenarbeit und effektive Kommunikation entscheidend für die erfolgreiche Durchführung von Projekten sind.",
                  "sharingdais": "Sharingdais | September 2014 - Dezember 2014",
                  "sharingdais_desc": "Sharingdais.com war ein Startup-Unternehmen mit einem produktbasierten Ansatz. Ich trat als Softwareentwickler in dieses Unternehmen ein und war dafür verantwortlich, neue Funktionen hinzuzufügen und Fehler zu beheben. Die Website wurde mit Rails und Bootstrap entwickelt.",
                  "dreamsoft4u": "DreamSoft4u Pvt. Ltd. | Juli 2014 - September 2014",
                  "dreamsoft4u_desc": "Während mein vorheriger Job hauptsächlich auf jQuery und Plugin-Integration ausgerichtet war, wollte ich mich herausfordern und sehen, wie ich mich selbstständig bei der Entwicklung eines Features mit Ruby on Rails schlagen würde. Deshalb habe ich mich entschieden, einen Vertragsjob bei DreamSoft4u Pvt. Ltd. anzunehmen. Während meiner Zeit bei DreamSoft4u Pvt. Ltd. hatte ich die Möglichkeit, an Projekten wie Shopify und einer kleinen Chat-Anwendung zu arbeiten. Diese Erfahrungen haben nicht nur meine technischen Fähigkeiten geschärft, sondern mir auch die Bedeutung von Anpassungsfähigkeit und Problemlösung vermittelt.",
                  "kartik_solutions": "Kartik Solutions Pvt. Ltd. | Juni 2013 - Juni 2014",
                  "kartik_solutions_desc": "Mein Interesse an Ruby on Rails begann, als ich bei meinem vorherigen Unternehmen arbeitete, das auch dieses Framework für ihr Backend nutzte. Ich war fasziniert von seinen Möglichkeiten und wusste, dass ich mehr lernen wollte. Also habe ich die Initiative ergriffen, um Ruby zu lernen, und nur 3 Monate später konnte ich meine erste Gelegenheit als Backend-Entwickler sichern. Bei Kartik Solutions Pvt. Ltd. bin ich für die Pflege und Verbesserung unserer bestehenden Website verantwortlich. Dies hat mir die Möglichkeit gegeben, mit verschiedenen Plugins und Tools zu arbeiten, einschließlich der Integration von Fitbit für unsere Nutzer. Es war eine herausfordernde, aber auch belohnende Erfahrung, da ich kontinuierlich als Entwickler lernen und wachsen konnte.",
                  "beryl_systems": "Beryl Systems | Dezember 2012 - Mai 2013",
                  "beryl_systems_desc": "Meine Karriere begann bei Beryl Systems, wo ich die Möglichkeit hatte, mit dem Bootstrap-Framework zu arbeiten und meine Fähigkeiten in jQuery und Bootstrap zu verbessern. Während meiner Zeit bei Beryl Systems war ich verantwortlich für die Erstellung neuer Seiten und die Verbesserung des Designs bestehender Seiten. Dies ermöglichte es mir, nicht nur meine Kreativität zu zeigen, sondern auch die Gesamtnutzererfahrung für unsere Kunden zu verbessern.",
                  "projects": "Projekte",
                  "right_on": "RightOn",
                  "right_on_desc": "Dies ist eine E-Commerce-Website, die sich auf den Verkauf von Bekleidung spezialisiert hat. Ihre Produkte sind auch auf anderen E-Commerce-Plattformen wie Rakuten, &mall, Magaseek, PayPay usw. aufgeführt. Das System ist darauf ausgelegt, Bestellungen von diesen Plattformen zu verfolgen, sie an das Lager zu senden, den Versand der Bestellungen zu verwalten und die Lagerbestände zu führen.",
                  "right_on_hr": "RightOn (Personalwirtschaftssystem)",
                  "confidential": "Vertraulich",
                  "right_on_hr_desc": "Dieses System wurde als Datenlösung für die Personalabteilung eines Unternehmens konzipiert. Es fungiert als Workflow-System, über das Mitarbeiter Urlaubsanträge, Spesen und andere Anfragen stellen können. Anfragen werden zunächst an Manager zur Genehmigung weitergeleitet und dann zur endgültigen Genehmigung an die Personalabteilung. Das System ermöglicht es Managern und HR-Personal, die Workflow-Schritte nach Bedarf anzupassen, z. B. die Genehmigungshierarchie zu erhöhen oder zu verringern.",
                  "giftcardspread": "Giftcardspread",
                  "giftcardspread_desc": "Dieses System war ursprünglich ein Subsystem von Giftcardspread. Seine Hauptfunktion besteht darin, Produktpreise durch den Vergleich mit Preisen anderer Systeme zu verwalten.",
                  "whiskk": "Whiskk",
                  "na": "Nicht verfügbar",
                  "whiskk_desc": "Es handelte sich um eine soziale App, die darauf abzielte, soziale Interaktion und Unterstützung innerhalb einer Gemeinschaft zu erleichtern. Die App sollte die vielfältigen Bedürfnisse der Menschen in derselben Gesellschaft befriedigen, indem sie gegenseitige Unterstützung und Verbindungen fördert.",
                  "advowire": "Advowire",
                  "advowire_desc": "AdvoWire erleichtert die Verbindungen zwischen Bloggern, Social-Media-Nutzern, Marken und Agenturen für Influencer- und Word-of-Mouth-Marketingkampagnen. Benutzer erstellen „Advocate“-Profile und erhalten Anreize für die Teilnahme an relevanten Kampagnen. Die Berechtigung wird durch die Branchenzugehörigkeit, die Reichweite des Netzwerks und den geografischen Standort bestimmt. Die Authentizität der Advocate-Netzwerke wird durch integrierte Verifizierungsmethoden sichergestellt, um gefälschte oder inaktive Kontakte und Follower zu reduzieren und so die Effektivität und Glaubwürdigkeit der Kampagnen zu steigern.",
                  "sharingdais_project": "Sharingdais",
                  "sharingdais_project_desc": "Diese Plattform dient als Online-Listing-Service für Peer-to-Peer (P2P)-Aktivitäten wie das Teilen von Lebensmitteln, Fähigkeiten und Büchern. Nutzer können auf der Plattform diese Dienste anbieten und entdecken, Interesse an Einträgen bekunden und sich zum Zwecke des Teilens mit anderen Nutzern verbinden. Die Plattform ist derzeit für Nutzer in den Regionen Bangalore und NCR (National Capital Region) verfügbar.",
                  "tmo": "TMO(TomrMenOutfit)",
                  "tmo_desc": "Es handelte sich um ein Chat-System, das speziell für die Kommunikation zwischen Schneidern und Kunden entwickelt wurde.",
                  "sharemeister": "Sharemeister",
                  "sharemeister_desc": "Sharemeister ist ein Software-Dienstprogramm, das einen Marktplatz für Ressourcen bietet, der darauf ausgelegt ist, jede digitale Anwendung zu skalieren.",
                  "pinni_insurance": "Pinni Versicherung",
                  "pinni_insurance_desc": "Dieses Projekt war das erste, an dem ich gearbeitet habe. Es umfasste das Design eines Systems zur Verwaltung von Daten speziell für ein Versicherungsunternehmen.",
                  "skills": "Fähigkeiten",
                  "technical": "Technisch",
                  "shopify": "Shopify",
                  "ruby_on_rails": "Ruby on Rails",
                  "fast_api": "FastAPI",
                  "kong_gateway": "Kong API Gateway",
                  "postgresql": "PostgreSQL",
                  "html": "HTML",
                  "css": "CSS",
                  "jquery": "Jquery",
                  "bootstrap": "Bootstrap",
                  "reactjs": "ReactJS",
                  "mean_stack": "MEAN Stack",
                  "gcp": "Google Cloud Platform (GCP)",
                  "aws": "AWS (Amazon Web Services)",
                  "ansible": "Ansible",
                  "docker": "Docker",
                  "clean_coding": "Sauberes Codieren",
                  "code_review": "Code-Überprüfung",
                  "scrum": "Scrum",
                  "gitlab": "GitLab",
                  "gitHub": "GitHub",
                  "bitbucket": "Bitbucket",
                  "redis": "Redis",
                  "javascript_react": "JavaScript/React",
                  "ruby_python": "Ruby/Python",
                  "postgre_mysql": "PostgreSQL/MySQL",
                  "object_oriented_design": "Objektorientiertes Design",
                  "design_and_implement_database_structures": "Entwurf und Implementierung von Datenbankstrukturen",
                  "lead_and_deliver_complex_software_systems": "Führen und Liefern komplexer Softwaresysteme",
                  "professional": "Professionell",
                  "effective_communication": "Effektive Kommunikation",
                  "team_player": "Teamplayer",
                  "strong_problem_solver": "Starker Problemlöser",
                  "good_time_management": "Gutes Zeitmanagement",
                  "education": "Bildung",
                  "bachelor_of_technology": "Bachelor of Technology in Informatik",
                  "university": "Universität Veer Bahadur Singh Purvanchal, Jaunpur",
                  "languages": "Sprachen",
                  "hindi": "Hindi",
                  "english": "English",
                  "japanese": "Japanese",
                  "german": "Deutschland",
                  "urdu": "Urdu",
                  "native": "(Native)",
                  "conversational": "(conversational)",
                  "interests": "Interests",
                  "cooking": "Cooking"
              }
            }
          }
        }
      }else{
        return {
          "us": {
            "translation": {
              "views": {
                "title": "Shahid | Resume",
                    "available_for_hire": "I'm available for hire!",
                  "nikname": "Shahid",
                    "profession": "Software Engineer",
                    "home": "Home",
                    "about": "About",
                    "services": "Services",
                    "experience": "Experience",
                    "hello": "Hello!",
                    "name": "I'm Shahid Iqbal.",
                    "intro": "As a dedicated professional, I am proud of my strong work ethic and constant pursuit of improvement. With a track record of punctuality and a proactive approach to learning, I foster a positive, collaborative work environment. I excel independently and as part of a team, thriving in fast-paced settings. My effective communication and problem-solving skills make me adept at listening and tactfully resolving challenges with a diverse background and passion for learning.",
                    "thankyou": "Thank you for your time. I look forward to connecting with you.",
                    "view_works": "View Works",
                    "who_am_i": "Who am I?",
                    "about_me": "About Me",
                    "bio": "Bio",
                    "bio_details": "I'm Shahid Iqbal, a Software Engineer with a passion for building robust web applications. With over a decade of experience in Ruby on Rails, I've had the opportunity to work on diverse projects that have honed my skills in backend development and system architecture. Alongside Rails, I'm proficient in PostgreSQL for database management, and I have a strong grasp of front-end technologies like HTML, CSS, and jQuery. Recently, I've also been exploring Python for its versatility in scripting and automation tasks.",
                    "age": "Age",
                    "residence": "Residence",
                    "japan": "Japan",
                    "email": "Email",
                    "phone": "Phone",
                    "download_cv": "Download CV",
                    "what_can_i_do": "What can I do?",
                    "my_skills": "My Skills",
                    "gcp_desc": "Leveraging GCP's suite of services to design scalable and flexible cloud architectures. With hands-on experience in cloud computing.",
                    "front_end_development": "Front-end Development(HTML/CSS/Jquery)",
                    "front_end_development_desc":"I specialize in HTML, CSS, and jQuery and have a keen eye for user interface design. I have a solid foundation in these technologies.",
                    "python": "Python",
                    "ansible": "Ansible(Open source IT automation engine)",
                    "ansible_desc": "Leverage Ansible's powerful capabilities to streamline infrastructure management processes and automate tasks across diverse environments.",
                    "what_do_i_do": "What do I do?",
                    "backend_development": "Backend Development",
                    "backend_development_desc": "With over a decade of experience in Ruby on Rails, I excel at building scalable and efficient server-side solutions.",
                    "api_development": "API Development",
                    "api_development_desc": "I bring extensive experience in building robust APIs using Ruby on Rails and FastAPI, with a strong foundation in both frameworks.",
                    "education_experience": "Education & Experience",
                    "resume": "Resume",
                    "resume_name": "Shahid Iqbal",
                    "tokyo": "Tokyo",
                    "experienced_in_ruby_on_rails": "Experienced in Ruby on Rails web development, project life cycle management (Analysis, Design, Development, Team Leadership, Deployment, Testing, Documentation, Maintenance, Technical Support), with expertise in MVC architecture, HTML5, Bootstrap, Restful API integration, and Git/GitHub/Bitbucket, demonstrating proactive problem-solving and adaptability.",
                    "work_experiences": "Work Experiences",
                    "senior_software_engineer": "Senior Software Engineer",
                    "software_engineer": "Software Engineer",
                    "contract_software_developer": "Contract Software Developer",
                    "software_analyst": "Software Analyst",
                    "protea": "PROTEA JAPAN | 2022 - Present",
                    "protea_desc": "Lead feature development and bug fixing efforts, ensuring robust application functionality and optimal user experience. Conduct comprehensive code reviews and manage source code using Gitlab, enforcing high standards and fostering collaboration. Oversee build creation and deployment across multiple environments, implementing automation for efficiency. Collaborate closely with designers to implement intuitive and accessible user interfaces. Leverage diverse technical skills to solve complex problems and drive innovation. Provide mentorship, technical leadership, and promote a collaborative team environment, ensuring successful project delivery and alignment across cross-functional teams.",
                    "vebuin": "VeBuIn | 12 2018 - 01 2022",
                    "vebuin_desc": "As a Software Engineer at VeBuIn Pvt. Ltd., I utilized Ruby on Rails to develop and maintain high-quality software solutions. I consistently adhered to clean coding principles to ensure code maintainability and scalability. Working within a Scrum team, I contributed to iterative and incremental improvements, effectively collaborating with cross-functional teams to deliver robust features and resolve complex issues. My role involved a strong commitment to software engineering best practices and continuous improvement.",
                    "sodel_solutions": "Sodel Solutions | 07 2018 - 12 2018",
                    "sodel_solutions_desc": "At Sodel Solutions Inc., I served as a Software Engineer specializing in Ruby on Rails. My role involved developing and maintaining APIs, integrating Active Admin for efficient backend management, and adhering to clean coding principles for maintainable and scalable code. Working within a Scrum team, I played a key role in delivering iterative improvements and collaborating with cross-functional teams to ensure high-quality software solutions.",
                    "unikaihatsu": "Unikaihatsu Software | 11 2016 - 07 2018",
                    "unikaihatsu_desc": "At Unikaihatsu Software Pvt. Ltd., I worked as a Software Engineer, leveraging Ruby on Rails and PostgreSQL to develop robust and scalable applications. I utilized Bootstrap to create responsive and visually appealing user interfaces. My commitment to clean coding practices ensured high-quality code, and my experience in Scrum facilitated effective collaboration within agile teams. I contributed to delivering high-quality software solutions by integrating these technologies and methodologies.",
                    "excel_infoways": "Excel Infoways Ltd | 03 2016 - 11 2016",
                    "excel_infoways_desc": "As a Software Engineer at Excel Infoways Ltd, I specialized in Ruby on Rails development with a strong emphasis on building scalable APIs for e-commerce platforms. I consistently applied clean coding practices to ensure maintainable and efficient codebases. My role involved collaborating closely with cross-functional teams to deliver tailored software solutions that met the unique demands of e-commerce businesses. My expertise in API development and e-commerce solutions contributed significantly to enhancing the company's technological capabilities and achieving business objectives effectively.",
                    "cerebrate": "Cerebrate, Inc | 11 2015 - 03 2016",
                    "cerebrate_desc": "At Cerebrate, Inc., I began as a Rails developer and quickly transitioned to working with the MEAN stack (MongoDB, Express.js, Angular.js, Node.js). This shift was pivotal in expanding my skills and working with cutting-edge technologies.I've thrived in Cerebrate's culture of innovation and collaboration, where I've been empowered to bring new ideas to fruition. This dynamic environment constantly challenges me to push myself to new heights.",
                    "botree": "BoTree Technologies Pvt. Ltd. | 02 2015 - 10 2015",
                    "botree_desc": "In my role at BoTree Technologies Pvt Ltd, I was responsible for adding new modules using Ruby on Rails. This experience not only allowed me to sharpen my technical abilities, but also taught me the importance of teamwork and efficient project management. I believe that collaboration and effective communication are key to delivering successful projects.",
                    "sharingdais": "Sharingdais | 09 2014 - 12 2014",
                    "sharingdais_desc": "Sharingdais.com was a startup product-based company.I joined this company as a software engineer and my responsibility was to add new features and solve bugs. This site was built on Rails and Bootstrap.",
                    "dreamsoft4u": "DreamSoft4u Pvt. Ltd. | 07 2014 - 09 2014",
                    "dreamsoft4u_desc": "While my previous job focused mostly on JQuery and plugin integration, I wanted to challenge myself and see how I would fare working independently on a feature using Ruby on Rails. That's why I decided to take on a contract job at DreamSoft4u Pvt. Ltd. During my time at DreamSoft4u Pvt. Ltd, I had the opportunity to work on projects such as Shopify and a small chat application. These experiences have not only honed my technical skills but also taught me the importance of adaptability and problem-solving.",
                    "kartik_solutions": "Kartik Solutions Pvt. Ltd. | 06 2013 - 06 2014",
                    "kartik_solutions_desc": "My interest in Ruby on Rails began when I was working at my previous company, which also used the framework for their backend. I was fascinated by its capabilities and knew I wanted to learn more. So, I took the initiative to dive into learning Ruby and after just 3 months, I was able to secure my first opportunity as a backend developer.At Kartik Solutions Pvt. Ltd, I have been responsible for maintaining and enhancing our existing site. This has given me the opportunity to work with different plugins and tools, including integrating Fitbit for our users. It has been a challenging yet rewarding experience, as I have been able to continuously learn and grow as a developer.",
                    "beryl_systems": "Beryl systems | 12 2012 - 05 2013",
                    "beryl_systems_desc": "I began my career at Beryl systems, where I had the opportunity to work with the Bootstrap framework and hone my skills in jQuery and Bootstrap. During my time at Beryl systems, I was responsible for creating new pages and enhancing the design of existing pages. This allowed me to not only showcase my creativity but also improve the overall user experience for our clients.",
                    "projects": "Projects",
                    "right_on": "RightOn",
                    "right_on_desc": "This is an e-commerce website specializing in garment sales. Its products are also listed on other e-commerce platforms such as Rakuten, &mall, Magaseek, PayPay, etc. The system is designed to track orders from these platforms, send them to the warehouse, manage order shipments, and maintain inventory records.",
                    "right_on_hr": "RightOn(HR system)",
                    "confidential": "Confidential",
                    "right_on_hr_desc": "This system is designed as a data storage solution for the HR department of a company. It operates as a workflow system where employees can apply for leaves, expenses, and other requests. Requests are initially forwarded to managers for approval and then to HR for final approval. The system allows managers and HR personnel to adjust the workflow steps as needed, such as increasing or decreasing the approval hierarchy.",
                    "giftcardspread": "Giftcardspread",
                    "giftcardspread_desc": "This system was originally a subsystem of Giftcardspread. Its primary function is to manage product prices by comparing them with prices from other systems.",
                    "whiskk": "Whiskk",
                    "na": "NA",
                    "whiskk_desc": "It was a social app designed to facilitate social interaction and support within a community. The app aimed to meet the diverse needs of individuals living in the same society by fostering mutual assistance and connections.",
                    "advowire": "Advowire",
                    "advowire_desc": "AdvoWire facilitates connections between bloggers, social media users, brands, and agencies for influencer and word-of-mouth marketing campaigns. Users create 'Advocate' profiles and receive incentives for participating in relevant campaigns. Eligibility is determined by industry alignment, network reach, and geographic location. The authenticity of Advocate networks is ensured through integrated verification methods to mitigate fake or inactive contacts and followers, enhancing campaign effectiveness and credibility.",
                    "sharingdais": "Sharingdais",
                    "sharingdais_desc": "This platform serves as an online listing service for peer-to-peer (P2P) activities such as sharing food, skills, and books. Users can both offer and discover these services on the platform, express interest in listings, and connect with other users for sharing purposes. The platform is currently available for users in the Bangalore and NCR (National Capital Region) regions.",
                    "tmo": "TMO(TomrMenOutfit)",
                    "tmo_desc": "It was a chat system designed specifically for communication between tailors and customers.",
                    "sharemeister": "Sharemeister",
                    "sharemeister_desc": "Sharemeister is a software utility service that offers a marketplace of resources designed to scale any digital application.",
                    "pinni_insurance": "Pinni insurance",
                    "pinni_insurance_desc": "This project was the first one I worked on. It involved designing a system to manage data specifically for an insurance company.",
                    "skills": "Skills",
                    "technical": "Technical",
                    "shopify": "Shopify",
                    "ruby_on_rails": "Ruby on Rails",
                    "fast_api": "FastAPI",
                    "kong_gateway": "Kong API Gateway",
                    "postgresql": "PostgreSQL",
                    "html": "HTML",
                    "css": "CSS",
                    "jquery": "Jquery",
                    "bootstrap": "Bootstrap",
                    "reactjs": "ReactJS",
                    "mean_stack": "MEAN Stack",
                    "gcp": "Google Cloud Platform (GCP)",
                    "aws": "AWS (Amazon Web Services)",
                    "ansible": "Ansible",
                    "docker": "Docker",
                    "clean_coding": "Clean Coding",
                    "code_review": "Code Review",
                    "scrum": "Scrum",
                    "gitlab": "GitLab",
                    "gitHub": "GitHub",
                    "bitbucket": "Bitbucket",
                    "redis": "Redis",
                    "javascript_react": "JavaScript/React",
                    "ruby_python": "Ruby/Python",
                    "postgre_mysql": "PostgreSQL/MySQL",
                    "object_oriented_design": "Object-oriented design",
                    "design_and_implement_database_structures": "Design and implement database structures",
                    "lead_and_deliver_complex_software_systems": "Lead and deliver complex software systems",
                    "professional": "Professional",
                    "effective_communication": "Effective communication",
                    "team_player": "Team player",
                    "strong_problem_solver": "Strong problem solver",
                    "good_time_management": "Good time management",
                    "education": "Education",
                    "bachelor_of_technology": "Bachelor of Technology in Computer Science",
                    "university": "University: Veer Bahadur Singh Purvanchal University, Jaunpur",
                    "languages": "Languages",
                    "hindi": "Hindi",
                    "english": "English",
                    "japanese": "日本語",
                    "german": "Deutschland",
                    "urdu": "Urdu",
                    "native": "(Native)",
                    "conversational": "(conversational)",
                    "interests": "Interests",
                    "cooking": "Cooking"
                }
            }
          }
        }
      }
    };
    function translate_menu(preferredLanguage){
      // let file = 'locales/'+preferredLanguage+'.json'
      // loadJSON(file, function (json) {
        let json = set_translate(preferredLanguage)
        i18next.use(i18nextBrowserLanguageDetector).init({
          debug: true,
          fallbackLng: 'us',
          resources: json
        }, (err, t) => {
          if (err) return console.error(err);
          jqueryI18next.init(i18next, $, { useOptionsAttr: true });
          i18next.changeLanguage(preferredLanguage)
          $('html').localize();
        });
      // })
    }

    function setCookie(name, value, days) {
      let expires = "";
      if (days) {
          let date = new Date();
          date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
          expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    function getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') c = c.substring(1, c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }
    $('#language-dropdown .dropdown-item').click(function(e) {
      e.preventDefault();
      var selectedLanguage = $(this).attr('data-lang');
      setCookie('language', selectedLanguage, 30);
      location.reload();
    });

    // Function to load JSON file asynchronously
    // function loadJSON(url, callback) {
    //   var xhr = new XMLHttpRequest();
    //   xhr.overrideMimeType("application/json");
    //   xhr.open('GET', url, true);
    //   xhr.onreadystatechange = function () {
    //     if (xhr.readyState === 4 && xhr.status === 200) {
    //       callback(JSON.parse(xhr.responseText));
    //     }
    //   };
    //   xhr.send(null);
    // }

    function set_language_ui(preferredLanguage){
      var eliment = $('#language-dropdown .dropdown-item[data-lang="' + preferredLanguage + '"]')
      eliment.addClass('active');
      $('#language-name').text(eliment.text())
      $('#language-icon').attr('title', preferredLanguage);
      $('#language-icon').removeClass();
      $('#language-icon').addClass('fi fi-'+ preferredLanguage);

      translate_menu(preferredLanguage)
    }

    var preferredLanguage = getCookie('language');
    if (preferredLanguage) {
      set_language_ui(preferredLanguage)
    }else{
      set_language_ui('us')
    }
    /*=========================================================================
        Menu Clicks
    =========================================================================*/
    // Show the first tab and hide the rest
    $('.anchor-menu li:first-child a').addClass('active');
    $('.animated-section:first').addClass('section-visible');

    // Click function
    $('.anchor-menu li a, a.section-link').on('click', function(){
      $('.anchor-menu li a').removeClass('active');
      $(this).addClass('active');
      $('.animated-section').removeClass('section-visible');
      
      var activeTab = $(this).attr('href');
      $(activeTab).addClass('section-visible');
      return false;
    });

    if(window.location.hash) {
        $('.animated-section').removeClass('section-visible');
        $(window.location.hash).addClass('section-visible');
    } else {
        
    }

    /*=========================================================================
        Preloader
    =========================================================================*/
    $("#preloader").delay(750).fadeOut('slow');
    $(".site-wrapper").delay(750).fadeIn('slow');

    /*=========================================================================
     Isotope
     =========================================================================*/
    $('.portfolio-filter').on( 'click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({ filter: filterValue });
    });

    // change is-checked class on buttons
    $('.portfolio-filter').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'li', function() {
            $buttonGroup.find('.current').removeClass('current');
            $( this ).addClass('current');
        });
    });

    var $container = $('.portfolio-wrapper');
    $container.imagesLoaded( function() {
      $('.portfolio-wrapper').isotope({
          // options
          itemSelector: '[class*="col-"]',
          percentPosition: true,
          masonry: {
              // use element for option
              columnWidth: '[class*="col-"]'
          }
      });
    });

    var bolbyPopup = function(){
      /*=========================================================================
              Magnific Popup
      =========================================================================*/
      $('.work-image').magnificPopup({
        type: 'image',
        closeBtnInside: false,
        mainClass: 'my-mfp-zoom-in',
      });

      $('.work-content').magnificPopup({
        type: 'inline',
        fixedContentPos: true,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: false,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
      });

      $('.work-video').magnificPopup({
        type: 'iframe',
        closeBtnInside: false,
        iframe: {
            markup: '<div class="mfp-iframe-scaler">'+
                      '<div class="mfp-close"></div>'+
                      '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                    '</div>', 

            patterns: {
              youtube: {
                index: 'youtube.com/',

                id: 'v=',

                src: 'https://www.youtube.com/embed/%id%?autoplay=1'
              },
              vimeo: {
                index: 'vimeo.com/',
                id: '/',
                src: '//player.vimeo.com/video/%id%?autoplay=1'
              },
              gmaps: {
                index: '//maps.google.',
                src: '%id%&output=embed'
              }

            },

            srcAction: 'iframe_src',
          }
      });

      $('.gallery-link').on('click', function () {
          $(this).next().magnificPopup('open');
      });

      $('.gallery').each(function () {
          $(this).magnificPopup({
              delegate: 'a',
              type: 'image',
              closeBtnInside: false,
              gallery: {
                  enabled: true,
                  navigateByImgClick: true
              },
              fixedContentPos: false,
              mainClass: 'my-mfp-zoom-in',
          });
      });
    }

    bolbyPopup();

    /*=========================================================================
     Infinite Scroll
     =========================================================================*/
    var curPage = 1;
    var pagesNum = $(".portfolio-pagination").find("li a:last").text();   // Number of pages

    $container.infinitescroll({
        itemSelector: '.grid-item',
        nextSelector: '.portfolio-pagination li a',
        navSelector: '.portfolio-pagination',
        extraScrollPx: 0,
        bufferPx: 0,
        maxPage: 6,
        loading: {
            finishedMsg: "No more works",
            msgText: '',
            speed: 'slow',
            selector: '.load-more',
        }
    },
    // trigger Masonry as a callback
    function( newElements ) {

      var $newElems = $( newElements );
      $newElems.imagesLoaded(function(){  
        $newElems.animate({ opacity: 1 });
        $container.isotope( 'appended', $newElems );
      });

      bolbyPopup();

      // Check last page
      curPage++;
      if(curPage == pagesNum) {
        $( '.load-more' ).remove();
      }

    });

    $container.infinitescroll( 'unbind' );

    $( '.load-more .btn' ).on('click', function() {
      $container.infinitescroll( 'retrieve' );
      // display loading icon
      $( '.load-more .btn i' ).css('display', 'inline-block');
      $( '.load-more .btn i' ).addClass('fa-spin');

      $(document).ajaxStop(function () {
        setTimeout(function(){
               // hide loading icon
          $( '.load-more .btn i' ).hide();
        }, 1000);
      });
      return false;
    });

    /* ======= Mobile Filter ======= */

    // bind filter on select change
    $('.portfolio-filter-mobile').on( 'change', function() {
      // get filter value from option value
      var filterValue = this.value;
      // use filterFn if matches value
      filterValue = filterFns[ filterValue ] || filterValue;
      $container.isotope({ filter: filterValue });
    });

    var filterFns = {
      // show if number is greater than 50
      numberGreaterThan50: function() {
        var number = $(this).find('.number').text();
        return parseInt( number, 10 ) > 50;
      },
      // show if name ends with -ium
      ium: function() {
        var name = $(this).find('.name').text();
        return name.match( /ium$/ );
      }
    };
});

$(document).on('ready', function() {
    "use strict";

    /*=========================================================================
                Slick Slider
    =========================================================================*/
    $('.testimonials-wrapper').slick({
      dots: true,
      arrows: true,
      autoplay: false,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            arrows: false
          }
        }
      ]
    });

    $('.clients-wrapper').slick({
      dots: true,
      arrows: false,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

});

$(function(){
    "use strict";

    /*=========================================================================
            Mobile Menu Toggle
    =========================================================================*/
    $('.menu-icon button').on( 'click', function() {
        $('header.header, main.content').toggleClass('open');
    });

    $('.menu-icon button').on( 'click', function() {
      $('header.mobile-header').toggleClass('open');
      $('.menu-icon button span').toggleClass('open');
    });

    $('main.content').on( 'click', function() {
        $('header.header, main.content, header.mobile-header').removeClass('open');
        $('.menu-icon button span').removeClass('open');
    });

    $('.main-menu li a, .main-menu li').on( 'click', function() {
        $('header.header, main.content, header.mobile-header').removeClass('open');
        $('.menu-icon button span').removeClass('open');
    });

    /*=========================================================================
     Spacer with Data Attribute
     =========================================================================*/
    var list = document.getElementsByClassName('spacer');

    for (var i = 0; i < list.length; i++) {
      var size = list[i].getAttribute('data-height');
      list[i].style.height = "" + size + "px";
    }

    /*=========================================================================
     Background Image with Data Attribute
     =========================================================================*/
     var list = document.getElementsByClassName('data-bg-image');

     for (var i = 0; i < list.length; i++) {
       var bgimage = list[i].getAttribute('data-bg-image');
       list[i].style.backgroundImage  = "url('" + bgimage + "')";
     }

    /*=========================================================================
     Background Color with Data Attribute
     =========================================================================*/
     var list = document.getElementsByClassName('data-bg-color');

     for (var i = 0; i < list.length; i++) {
       var bgcolor = list[i].getAttribute('data-bg-color');
       list[i].style.backgroundColor = "" + bgcolor + "";
     }

     /*=========================================================================
     Color with Data Attribute
     =========================================================================*/
     var list = document.getElementsByClassName('data-color');

     for (var i = 0; i < list.length; i++) {
       var color = list[i].getAttribute('data-color');
       list[i].style.color = "" + color + "";
     }

     /*=========================================================================
     Border Color with Data Attribute
     =========================================================================*/
     var list = document.getElementsByClassName('data-border-color');

     for (var i = 0; i < list.length; i++) {
       var border_color = list[i].getAttribute('data-border-color');
       list[i].style.borderColor = "" + border_color + "";
     }

     /*=========================================================================
     Progress Bar width with Data Attribute
     =========================================================================*/
     var list = document.getElementsByClassName('progress-bar');

     for (var i = 0; i < list.length; i++) {
       var barwidth = list[i].getAttribute('data-width');
       list[i].style.width = "" + barwidth + "%";
     }

    /*=========================================================================
            Main Menu
    =========================================================================*/
    $( ".submenu" ).before( '<i class="ion-md-add switch"></i>' );

    $(".vertical-menu li i.switch").on( 'click', function() {
        var $submenu = $(this).next(".submenu");
        $submenu.slideToggle(300);
        $submenu.parent().toggleClass("openmenu");
    });


    /*=========================================================================
              Custom cursor
      =========================================================================*/
      var mouse = { x: 0, y: 0 };
      var pos = { x: 0, y: 0 };
      var ratio = 0.25;     
      var active = false;     
      var ball = document.getElementById("ball");
      
      
      TweenLite.set(ball, { xPercent: -50, yPercent: -50 });
      
      document.addEventListener("mousemove", mouseMove);
      
      function mouseMove(e) {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        mouse.x = e.pageX;
        mouse.y = e.pageY - scrollTop;
      }
      
      TweenLite.ticker.addEventListener("tick", updatePosition);
      
      function updatePosition() {
        if (!active) {
          pos.x += (mouse.x - pos.x) * ratio;
          pos.y += (mouse.y - pos.y) * ratio;
      
          TweenLite.set(ball, { x: pos.x, y: pos.y });
        }
      }

      $('a, button, .portfolio-filter li').on('mouseenter',
        function(event) {
          TweenMax.to(ball, 0.3, { scale: 2.5, borderWidth: '0', background: 'rgba(0,0,0,0.1)' });
        }).on('mouseleave', function() {
          TweenMax.to(ball, 0.3, { scale: 1, borderWidth: '1px', background: 'none' });
        }
      );

      $('.simplebar-scrollbar').on('mouseenter touchstart',
        function(event) {
          $('#ball').addClass('empty');
          TweenLite.ticker.addEventListener("tick", updatePosition);
          TweenMax.to(ball, 0.3, { scale: 6.5, borderWidth: '0', background: 'rgba(0,0,0,1)' });
        }).on('mouseleave touchend', function() {

        }
      );

      $('.portfolio-link').on('mouseenter',
        function(event) {
          TweenMax.to(ball, 0.3, { scale: 2.5, borderWidth: '0', background: 'rgba(0,0,0,0.4)' });
          $('#ball').addClass('plus');
        }).on('mouseleave', function() {
          TweenMax.to(ball, 0.3, { scale: 1, borderWidth: '1px', background: 'none' });
          $('#ball').removeClass('plus');
        }
      );

      $('.blog-link').on('mouseenter',
        function(event) {
          TweenMax.to(ball, 0.3, { scale: 2.5, borderWidth: '0', background: 'rgba(0,0,0,0.4)' });
          $('#ball').addClass('link');
        }).on('mouseleave', function() {
          TweenMax.to(ball, 0.3, { scale: 1, borderWidth: '1px', background: 'none' });
          $('#ball').removeClass('link');
        }
      );

      $('.section-inner').each((index, element) => new SimpleBar(element), { autoHide: false });

});
