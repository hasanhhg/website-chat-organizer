(function () {
  var T = {
    en: {
      meta: { title: "AI Chat Organizer for Claude & ChatGPT – Free Chrome Extension", description: "The free AI chat organizer for Claude and ChatGPT. Auto-sorts hundreds of chats into projects in one click. Chrome extension, no API key, nothing deleted." },
      nav:  { cta: "Add to Chrome" },
      hero: { badge: "Free Chrome Extension", h1: "Your Claude &amp; ChatGPT chats,<br><em>finally organized</em>", sub: "Hundreds of chats and zero order? Chat Organizer scans up to your 200 most recent chats, builds a plan, and moves approved matches into projects.", stars: "Built for Claude and ChatGPT power users", cta: "Add to Chrome, it’s free", note1: "No API key required", note2: "No account needed", note3: "Works in seconds" },
      stats: { v1: "Free", l1: "No account required", l2: "Chat topics recognized", l3: "Built-in categories", l4: "Full organize run" },
      hiw:  { eyebrow: "How it works", title: "Three steps, one click", sub: "You see the full plan before anything moves. Nothing happens without your approval." },
      step1: { title: "Click Organize", desc: "The extension scans up to your 200 most recent chats and builds a move plan using keyword matching and AI. Takes a few seconds." },
      step2: { title: "Review the plan", desc: "See exactly which chat goes where before anything moves. New projects are clearly marked. Unmatched chats are flagged separately." },
      step3: { title: "Click Apply", desc: "Everything moves in one batch. Empty projects are cleaned up automatically. Done." },
      feat:  { eyebrow: "Features", title: "Everything you need,<br>nothing you don’t", sub: "Simple and fast. No settings to configure, no API key to paste." },
      feat1: { title: "Instant keyword matching", desc: "A built-in multilingual wordlist matches most chats in milliseconds, with no network call and no delay." },
      feat2: { title: "AI for the hard ones", desc: "Ambiguous titles get categorized by a shared AI backend. No API key needed. It just works." },
      feat3: { title: "Preview before applying", desc: "See the full plan before a single chat moves. Cancel at any time with one click." },
      feat4: { title: "Manual mode", desc: "Assign specific chats by hand when auto-organize isn’t quite right for your workflow." },
      feat5: { title: "Multilingual", desc: "Keyword matching covers English, Dutch, French, German, Spanish, Polish, Russian and more." },
      feat6: { title: "Auto-cleanup", desc: "Empty projects are removed automatically after each organize run. Your sidebar stays tidy." },
      band:  { title: "Ready to clean up?", sub: "Free, no setup, takes about 10 seconds to install.", cta: "Add to Chrome" },
      topics: { eyebrow: "Wordlist", title: "Recognizes what you’re talking about", sub: "The built-in wordlist covers the most common chat topics across multiple languages.", sidebar: "built-in categories, plus AI covering everything else", meta: "Works across <strong>10+ languages</strong> and handles any topic your chats throw at it." },
      priv:  { eyebrow: "Privacy", title: "Your data stays yours", sub: "No accounts, no tracking, no data collection beyond what’s needed to organize your chats.", note: "Chat content never leaves your browser. For ambiguous titles, only the title text is sent to a shared AI service for categorization. No personal data, no history, no accounts.", link: "Full privacy policy" },
      pc1:   { title: "Stays in your browser", desc: "Your chats are read directly from Claude.ai using your active login session. No data is stored on any server." },
      pc2:   { title: "Only titles leave", desc: "When AI categorization is needed, only the <strong>chat title</strong> is sent. Never the conversation content." },
      pc3:   { title: "Zero analytics", desc: "No usage tracking, telemetry, or crash reports. A shared AI service receives only ambiguous chat titles when categorization is needed." },
      perms: { title: "Chrome permissions explained" },
      perm1: { desc: "Reads your open Claude.ai tab to detect chat titles. Only active while you use the extension." },
      perm2: { desc: "Saves your project names locally in your browser. Nothing is sent to any server." },
      perm3: { desc: "Reads your chat titles and moves chats into projects on claude.ai and chatgpt.com. Only active while you use the extension." },
      faq:   { eyebrow: "FAQ", title: "Common questions", q1: "Is it free?", a1: "Yes. Chat Organizer is free to install and use today, with no API key or separate account required.", q2: "Do I need an API key?", a2: "No. The AI categorization runs on a shared backend at no cost to you. Just install the extension and click Organize.", q3: "Will it delete my chats or projects?", a3: "No chats are ever deleted. Projects that are left completely empty after organizing are removed to keep your sidebar clean, but every conversation stays intact in your chat history.", q4: "Does it work in languages other than English?", a4: "Yes. The keyword wordlist covers Dutch, French, German, Spanish, Italian, Polish, Russian, Arabic, Hindi and more. The AI fallback works in any language.", q5: "Do I need to be logged in to Claude.ai?", a5: "Yes. The extension uses your active Claude.ai browser session to read and move chats. Open claude.ai, log in, then click the extension icon.", q6: "Can I undo an organize run?", a6: "Not automatically, but you can move chats back manually in Claude.ai. That’s why the preview step exists: review the plan carefully before clicking Apply.", q7: "How do I organize my Claude chats?", a7: "Install Chat Organizer, open Claude.ai, and click Organize. It scans up to your 200 most recent chats, suggests projects for unorganized matches, and moves only the plan you approve.", q8: "Is there a tool to manage and organize hundreds of Claude conversations?", a8: "Yes. Chat Organizer is a free Chrome extension made to manage and organize large Claude.ai chat histories. It sorts hundreds of conversations into projects automatically, so you can find an old chat in seconds instead of scrolling forever.", q9: "Does it work with ChatGPT?", a9: "Yes. Chat Organizer works on both Claude and ChatGPT. Pick the platform in the popup, which auto-detects the tab you are on, and organize either sidebar the same way with the same one-click preview." },
      cta:   { title: "Clean up your chats today", sub: "Free, no setup, works in seconds.", note: "No account · No API key · No data collection" },
      footer: { store: "Chrome Web Store", contact: "Contact", guide: "How to organize Claude chats", guide2: "How to organize ChatGPT chats", privacy: "Privacy Policy", changelog: "Changelog", copy: "Not affiliated with Anthropic or OpenAI. Claude is a trademark of Anthropic, PBC; ChatGPT is a trademark of OpenAI." }
    },

    nl: {
      meta: { title: "Chat Organizer: Claude- en ChatGPT-chats automatisch ordenen", description: "Chat Organizer ordent je Claude- en ChatGPT-chats met een klik in projecten. Gratis Chrome-extensie, geen API-sleutel en geen account nodig." },
      nav:  { cta: "Toevoegen aan Chrome" },
      hero: { badge: "Gratis Chrome-extensie", h1: "Jouw Claude- en ChatGPT-chats,<br><em>eindelijk georganiseerd</em>", sub: "Honderden chats en geen overzicht? Chat Organizer scant maximaal je 200 meest recente chats, maakt een plan en verplaatst goedgekeurde matches naar projecten.", stars: "Gemaakt voor intensieve Claude- en ChatGPT-gebruikers", cta: "Toevoegen aan Chrome, gratis", note1: "Geen API-sleutel nodig", note2: "Geen account nodig", note3: "Klaar in seconden" },
      stats: { v1: "Gratis", l1: "Geen account nodig", l2: "Chatonderwerpen herkend", l3: "Ingebouwde categorieën", l4: "Volledig organiseren" },
      hiw:  { eyebrow: "Hoe het werkt", title: "Drie stappen, één klik", sub: "Je ziet het volledige plan voordat er iets verplaatst wordt. Niets gebeurt zonder jouw goedkeuring." },
      step1: { title: "Klik op Organiseren", desc: "De extensie scant maximaal je 200 meest recente chats en maakt met trefwoorden en AI een verplaatsplan. Dit duurt meestal enkele seconden." },
      step2: { title: "Bekijk het plan", desc: "Zie precies welke chat waarheen gaat voordat er iets verplaatst wordt. Nieuwe projecten zijn duidelijk gemarkeerd. Niet-herkende chats worden apart weergegeven." },
      step3: { title: "Klik op Toepassen", desc: "Alles verplaatst in één keer. Lege projecten worden automatisch opgeruimd. Klaar." },
      feat:  { eyebrow: "Functies", title: "Alles wat je nodig hebt,<br>niets wat je niet nodig hebt", sub: "Eenvoudig en snel. Geen instellingen, geen API-sleutel." },
      feat1: { title: "Directe trefwoordherkenning", desc: "Een ingebouwde meertalige woordenlijst herkent de meeste chats in milliseconden, zonder netwerkoproep of vertraging." },
      feat2: { title: "AI voor de lastige gevallen", desc: "Onduidelijke titels worden gecategoriseerd door een gedeelde AI-backend. Geen API-sleutel nodig. Het werkt gewoon." },
      feat3: { title: "Voorbeeld voor het toepassen", desc: "Zie het volledige plan voordat een chat verplaatst wordt. Annuleer op elk moment met één klik." },
      feat4: { title: "Handmatige modus", desc: "Wijs specifieke chats handmatig toe wanneer automatisch organiseren niet helemaal past bij je workflow." },
      feat5: { title: "Meertalig", desc: "Trefwoordherkenning ondersteunt Engels, Nederlands, Frans, Duits, Spaans, Pools, Russisch en meer." },
      feat6: { title: "Automatisch opruimen", desc: "Lege projecten worden na elke organisatieronde automatisch verwijderd. Je zijbalk blijft overzichtelijk." },
      band:  { title: "Klaar om op te ruimen?", sub: "Gratis, geen installatie, duurt ongeveer 10 seconden.", cta: "Toevoegen aan Chrome" },
      topics: { eyebrow: "Woordenlijst", title: "Herkent waar je het over hebt", sub: "De ingebouwde woordenlijst dekt de meest voorkomende chatonderwerpen in meerdere talen.", sidebar: "ingebouwde categorieën, plus AI voor alles daarna", meta: "Werkt in <strong>10+ talen</strong> en verwerkt elk onderwerp dat je chats bevatten." },
      priv:  { eyebrow: "Privacy", title: "Jouw data blijft van jou", sub: "Geen accounts, geen tracking, geen dataverzameling buiten wat nodig is om je chats te organiseren.", note: "Chatinhoud verlaat nooit je browser. Voor onduidelijke titels wordt alleen de titeltekst naar een gedeelde AI-dienst gestuurd voor categorisering. Geen persoonlijke data, geen geschiedenis, geen accounts.", link: "Volledig privacybeleid" },
      pc1:   { title: "Blijft in je browser", desc: "Je chats worden rechtstreeks gelezen van Claude.ai via je actieve inlogsessie. Geen data wordt opgeslagen op een server." },
      pc2:   { title: "Alleen titels vertrekken", desc: "Wanneer AI-categorisering nodig is, wordt alleen de <strong>chattitel</strong> verzonden. Nooit de gespreksinhoud." },
      pc3:   { title: "Nul analyses", desc: "Geen gebruiksregistratie, telemetrie of crashrapporten. De gedeelde AI-service ontvangt alleen onduidelijke chattitels wanneer categorisatie nodig is." },
      perms: { title: "Chrome-rechten uitgelegd" },
      perm1: { desc: "Leest je open Claude.ai-tabblad om chattitels te detecteren. Alleen actief tijdens gebruik van de extensie." },
      perm2: { desc: "Slaat je projectnamen lokaal op in je browser. Niets wordt naar een server verzonden." },
      perm3: { desc: "Voert de organisatielogica uit op claude.ai om de zijbalk te lezen en chats naar projecten te verplaatsen." },
      faq:   { eyebrow: "FAQ", title: "Veelgestelde vragen", q1: "Is het gratis?", a1: "Ja. Chat Organizer is vandaag gratis te installeren en te gebruiken. Je hebt geen API-sleutel of apart account nodig.", q2: "Heb ik een API-sleutel nodig?", a2: "Nee. De AI-categorisering draait op een gedeelde backend zonder kosten voor jou. Installeer de extensie en klik op Organiseren.", q3: "Worden mijn chats of projecten verwijderd?", a3: "Geen enkele chat wordt verwijderd. Projecten die na het organiseren volledig leeg zijn, worden verwijderd om je zijbalk overzichtelijk te houden, maar elk gesprek blijft intact in je chatgeschiedenis.", q4: "Werkt het in andere talen dan Engels?", a4: "Ja. De trefwoordenlijst dekt Nederlands, Frans, Duits, Spaans, Italiaans, Pools, Russisch, Arabisch, Hindi en meer. De AI-fallback werkt in elke taal.", q5: "Moet ik ingelogd zijn op Claude.ai?", a5: "Ja. De extensie gebruikt je actieve Claude.ai-browsersessie om chats te lezen en te verplaatsen. Open claude.ai, log in en klik op het extensiepictogram.", q6: "Kan ik een organisatieronde ongedaan maken?", a6: "Niet automatisch, maar je kunt chats handmatig terugzetten in Claude.ai. Daarom bestaat de voorbeeldstap: bekijk het plan zorgvuldig voordat je op Toepassen klikt." },
      cta:   { title: "Ruim je chats vandaag op", sub: "Gratis, geen installatie, klaar in seconden.", note: "Geen account · Geen API-sleutel · Geen dataverzameling" },
      footer: { store: "Chrome Web Store", contact: "Contact", privacy: "Privacybeleid", changelog: "Wijzigingen", copy: "Niet gelieerd aan Anthropic of OpenAI. Claude is een handelsmerk van Anthropic, PBC; ChatGPT is een handelsmerk van OpenAI." }
    },

    fr: {
      meta: { title: "Organiser les chats ChatGPT et Claude | Extension gratuite", description: "Chat Organizer trie automatiquement vos chats Claude et ChatGPT dans des projets en un clic. Extension Chrome gratuite, sans clé API ni compte." },
      nav:  { cta: "Ajouter à Chrome" },
      hero: { badge: "Extension Chrome gratuite", h1: "Vos chats Claude et ChatGPT,<br><em>enfin organisés</em>", sub: "Des centaines de chats sans ordre ? Chat Organizer analyse jusqu’à vos 200 chats les plus récents, crée un plan et déplace les correspondances approuvées vers des projets.", stars: "Conçu pour les utilisateurs intensifs de Claude et ChatGPT", cta: "Ajouter à Chrome, gratuit", note1: "Aucune clé API requise", note2: "Aucun compte nécessaire", note3: "Prêt en quelques secondes" },
      stats: { v1: "Gratuit", l1: "Aucun compte requis", l2: "Sujets de chat reconnus", l3: "Catégories intégrées", l4: "Organisation complète" },
      hiw:  { eyebrow: "Comment ça marche", title: "Trois étapes, un clic", sub: "Vous voyez le plan complet avant que quoi que ce soit ne bouge. Rien ne se passe sans votre accord." },
      step1: { title: "Cliquez sur Organiser", desc: "L’extension analyse jusqu’à vos 200 chats les plus récents et crée un plan avec des mots-clés et l’IA. Quelques secondes suffisent." },
      step2: { title: "Vérifiez le plan", desc: "Voyez exactement quel chat va où avant tout déplacement. Les nouveaux projets sont clairement indiqués. Les chats non reconnus sont signalés séparément." },
      step3: { title: "Cliquez sur Appliquer", desc: "Tout se déplace en une fois. Les projets vides sont supprimés automatiquement. C’est fait." },
      feat:  { eyebrow: "Fonctionnalités", title: "Tout ce qu’il faut,<br>rien de superflu", sub: "Simple et rapide. Aucun réglage, aucune clé API à saisir." },
      feat1: { title: "Correspondance instantanée", desc: "Une liste de mots multilingue intégrée reconnaît la plupart des chats en millisecondes, sans appel réseau ni délai." },
      feat2: { title: "L’IA pour les cas difficiles", desc: "Les titres ambigus sont catégorisés par un backend IA partagé. Aucune clé API nécessaire. Ça fonctionne simplement." },
      feat3: { title: "Aperçu avant application", desc: "Voyez le plan complet avant qu’un seul chat ne bouge. Annulez à tout moment en un clic." },
      feat4: { title: "Mode manuel", desc: "Assignez des chats spécifiques à la main quand l’organisation automatique ne convient pas tout à fait." },
      feat5: { title: "Multilingue", desc: "La correspondance couvre l’anglais, le néerlandais, le français, l’allemand, l’espagnol, le polonais, le russe et plus encore." },
      feat6: { title: "Nettoyage automatique", desc: "Les projets vides sont supprimés automatiquement après chaque organisation. Votre barre latérale reste propre." },
      band:  { title: "Prêt à faire le ménage?", sub: "Gratuit, sans configuration, environ 10 secondes à installer.", cta: "Ajouter à Chrome" },
      topics: { eyebrow: "Liste de mots", title: "Reconnaît vos sujets de conversation", sub: "La liste de mots intégrée couvre les sujets de chat les plus courants dans plusieurs langues.", sidebar: "catégories intégrées, plus l’IA pour tout le reste", meta: "Fonctionne dans <strong>10+ langues</strong> et gère tous les sujets de vos chats." },
      priv:  { eyebrow: "Confidentialité", title: "Vos données vous appartiennent", sub: "Pas de comptes, pas de suivi, pas de collecte de données au-delà du nécessaire pour organiser vos chats.", note: "Le contenu des chats ne quitte jamais votre navigateur. Pour les titres ambigus, seul le texte du titre est envoyé à un service IA partagé. Aucune donnée personnelle, aucun historique, aucun compte.", link: "Politique de confidentialité complète" },
      pc1:   { title: "Reste dans votre navigateur", desc: "Vos chats sont lus directement depuis Claude.ai via votre session active. Aucune donnée n’est stockée sur un serveur." },
      pc2:   { title: "Seuls les titres partent", desc: "Quand la catégorisation IA est nécessaire, seul le <strong>titre du chat</strong> est envoyé. Jamais le contenu de la conversation." },
      pc3:   { title: "Zéro analytics", desc: "Pas de suivi d’utilisation, de télémétrie ou de rapports d’erreurs. Le service d’IA partagé reçoit uniquement les titres ambigus lorsque le classement est nécessaire." },
      perms: { title: "Permissions Chrome expliquées" },
      perm1: { desc: "Lit votre onglet Claude.ai ouvert pour détecter les titres des chats. Actif uniquement pendant l’utilisation de l’extension." },
      perm2: { desc: "Enregistre vos noms de projets localement dans votre navigateur. Rien n’est envoyé à un serveur." },
      perm3: { desc: "Exécute la logique d’organisation sur claude.ai pour lire la barre latérale et déplacer les chats." },
      faq:   { eyebrow: "FAQ", title: "Questions fréquentes", q1: "Est-ce gratuit?", a1: "Oui. Chat Organizer est gratuit à installer et à utiliser aujourd’hui. Aucune clé API ni compte séparé n’est requis.", q2: "Ai-je besoin d’une clé API?", a2: "Non. La catégorisation IA fonctionne sur un backend partagé sans frais pour vous. Installez l’extension et cliquez sur Organiser.", q3: "Mes chats ou projets seront-ils supprimés?", a3: "Aucun chat n’est supprimé. Les projets entièrement vides après l’organisation sont supprimés pour garder votre barre latérale propre, mais chaque conversation reste dans votre historique.", q4: "Fonctionne-t-il dans d’autres langues que l’anglais?", a4: "Oui. La liste de mots couvre le néerlandais, le français, l’allemand, l’espagnol, l’italien, le polonais, le russe, l’arabe, le hindi et plus encore.", q5: "Dois-je être connecté à Claude.ai?", a5: "Oui. L’extension utilise votre session de navigateur Claude.ai active pour lire et déplacer les chats. Ouvrez claude.ai, connectez-vous, puis cliquez sur l’icône de l’extension.", q6: "Puis-je annuler une organisation?", a6: "Pas automatiquement, mais vous pouvez déplacer les chats manuellement dans Claude.ai. C’est pourquoi l’étape d’aperçu existe: vérifiez le plan soigneusement avant de cliquer sur Appliquer." },
      cta:   { title: "Organisez vos chats aujourd’hui", sub: "Gratuit, sans configuration, prêt en quelques secondes.", note: "Aucun compte · Aucune clé API · Aucune collecte de données" },
      footer: { store: "Chrome Web Store", contact: "Contact", privacy: "Politique de confidentialité", changelog: "Notes de version", copy: "Non affilié à Anthropic ni à OpenAI. Claude est une marque déposée d’Anthropic, PBC ; ChatGPT est une marque déposée d’OpenAI." }
    },

    de: {
      meta: { title: "ChatGPT- und Claude-Chats sortieren | Kostenlose Erweiterung", description: "Chat Organizer sortiert deine Claude- und ChatGPT-Chats mit einem Klick in Projekte. Kostenlose Chrome-Erweiterung, ohne API-Schlüssel und Konto." },
      nav:  { cta: "Zu Chrome hinzufügen" },
      hero: { badge: "Kostenlose Chrome-Erweiterung", h1: "Deine Claude- und ChatGPT-Chats,<br><em>endlich organisiert</em>", sub: "Hunderte Chats ohne Ordnung? Chat Organizer scannt bis zu 200 deiner neuesten Chats, erstellt einen Plan und verschiebt bestätigte Treffer in Projekte.", stars: "Für intensive Claude- und ChatGPT-Nutzer entwickelt", cta: "Zu Chrome hinzufügen, kostenlos", note1: "Kein API-Schlüssel nötig", note2: "Kein Konto nötig", note3: "Fertig in Sekunden" },
      stats: { v1: "Kostenlos", l1: "Kein Konto erforderlich", l2: "Chat-Themen erkannt", l3: "Eingebaute Kategorien", l4: "Vollständige Organisation" },
      hiw:  { eyebrow: "So funktioniert es", title: "Drei Schritte, ein Klick", sub: "Du siehst den vollständigen Plan, bevor irgendetwas verschoben wird. Nichts passiert ohne deine Zustimmung." },
      step1: { title: "Klick auf Organisieren", desc: "Die Erweiterung scannt bis zu 200 deiner neuesten Chats und erstellt mit Schlüsselwörtern und KI einen Verschiebeplan. Das dauert nur wenige Sekunden." },
      step2: { title: "Plan überprüfen", desc: "Sieh genau, welcher Chat wohin geht, bevor sich etwas bewegt. Neue Projekte sind klar gekennzeichnet. Nicht erkannte Chats werden separat markiert." },
      step3: { title: "Klick auf Anwenden", desc: "Alles wird auf einmal verschoben. Leere Projekte werden automatisch bereinigt. Fertig." },
      feat:  { eyebrow: "Funktionen", title: "Alles was du brauchst,<br>nichts was du nicht brauchst", sub: "Einfach und schnell. Keine Einstellungen, kein API-Schlüssel." },
      feat1: { title: "Sofortige Schlüsselwort-Erkennung", desc: "Eine eingebaute mehrsprachige Wortliste erkennt die meisten Chats in Millisekunden, ohne Netzwerkaufruf und ohne Verzögerung." },
      feat2: { title: "KI für schwierige Fälle", desc: "Mehrdeutige Titel werden von einem geteilten KI-Backend kategorisiert. Kein API-Schlüssel nötig. Funktioniert einfach." },
      feat3: { title: "Vorschau vor dem Anwenden", desc: "Sieh den vollständigen Plan, bevor ein Chat verschoben wird. Jederzeit mit einem Klick abbrechen." },
      feat4: { title: "Manueller Modus", desc: "Weise bestimmte Chats manuell zu, wenn die automatische Organisation nicht ganz passt." },
      feat5: { title: "Mehrsprachig", desc: "Schlüsselwort-Erkennung unterstützt Englisch, Niederländisch, Französisch, Deutsch, Spanisch, Polnisch, Russisch und mehr." },
      feat6: { title: "Automatische Bereinigung", desc: "Leere Projekte werden nach jeder Organisation automatisch entfernt. Deine Seitenleiste bleibt aufgeräumt." },
      band:  { title: "Bereit zum Aufräumen?", sub: "Kostenlos, keine Einrichtung, dauert ca. 10 Sekunden.", cta: "Zu Chrome hinzufügen" },
      topics: { eyebrow: "Wortliste", title: "Erkennt, worüber du sprichst", sub: "Die eingebaute Wortliste deckt die häufigsten Chat-Themen in mehreren Sprachen ab.", sidebar: "eingebaute Kategorien, plus KI für alles andere", meta: "Funktioniert in <strong>10+ Sprachen</strong> und verarbeitet jedes Thema in deinen Chats." },
      priv:  { eyebrow: "Datenschutz", title: "Deine Daten bleiben deine", sub: "Keine Konten, kein Tracking, keine Datenerfassung über das Nötige hinaus.", note: "Chat-Inhalte verlassen nie deinen Browser. Für mehrdeutige Titel wird nur der Titeltext an einen geteilten KI-Dienst gesendet. Keine persönlichen Daten, keine Historie, keine Konten.", link: "Vollständige Datenschutzerklärung" },
      pc1:   { title: "Bleibt in deinem Browser", desc: "Deine Chats werden direkt von Claude.ai über deine aktive Anmeldesitzung gelesen. Keine Daten werden auf einem Server gespeichert." },
      pc2:   { title: "Nur Titel verlassen den Browser", desc: "Wenn KI-Kategorisierung benötigt wird, wird nur der <strong>Chat-Titel</strong> gesendet. Nie der Gesprächsinhalt." },
      pc3:   { title: "Null Analysen", desc: "Kein Nutzungs-Tracking, keine Telemetrie und keine Absturzberichte. Der gemeinsame KI-Dienst erhält nur unklare Chattitel, wenn eine Einordnung nötig ist." },
      perms: { title: "Chrome-Berechtigungen erklärt" },
      perm1: { desc: "Liest deinen geöffneten Claude.ai-Tab, um Chat-Titel zu erkennen. Nur aktiv, während du die Erweiterung verwendest." },
      perm2: { desc: "Speichert deine Projektnamen lokal in deinem Browser. Nichts wird an einen Server gesendet." },
      perm3: { desc: "Führt die Organisationslogik auf claude.ai aus, um die Seitenleiste zu lesen und Chats in Projekte zu verschieben." },
      faq:   { eyebrow: "FAQ", title: "Häufige Fragen", q1: "Ist es kostenlos?", a1: "Ja. Chat Organizer kann heute kostenlos installiert und genutzt werden. Kein API-Schlüssel und kein separates Konto erforderlich.", q2: "Brauche ich einen API-Schlüssel?", a2: "Nein. Die KI-Kategorisierung läuft auf einem geteilten Backend ohne Kosten für dich. Installiere die Erweiterung und klicke auf Organisieren.", q3: "Werden meine Chats oder Projekte gelöscht?", a3: "Kein Chat wird jemals gelöscht. Komplett leere Projekte nach der Organisation werden entfernt, um die Seitenleiste übersichtlich zu halten, aber jedes Gespräch bleibt in deinem Chat-Verlauf erhalten.", q4: "Funktioniert es in anderen Sprachen als Englisch?", a4: "Ja. Die Wortliste deckt Niederländisch, Französisch, Deutsch, Spanisch, Italienisch, Polnisch, Russisch, Arabisch, Hindi und mehr ab.", q5: "Muss ich bei Claude.ai eingeloggt sein?", a5: "Ja. Die Erweiterung verwendet deine aktive Claude.ai-Browser-Sitzung, um Chats zu lesen und zu verschieben. Öffne claude.ai, melde dich an und klicke dann auf das Erweiterungssymbol.", q6: "Kann ich eine Organisation rükgängig machen?", a6: "Nicht automatisch, aber du kannst Chats manuell in Claude.ai zurückverschieben. Deshalb gibt es den Vorschaupunkt: Prüfe den Plan sorgfältig, bevor du auf Anwenden klickst." },
      cta:   { title: "Räum deine Chats heute auf", sub: "Kostenlos, keine Einrichtung, fertig in Sekunden.", note: "Kein Konto · Kein API-Schlüssel · Keine Datenerfassung" },
      footer: { store: "Chrome Web Store", contact: "Kontakt", privacy: "Datenschutzerklärung", changelog: "Änderungen", copy: "Nicht mit Anthropic oder OpenAI verbunden. Claude ist eine Marke von Anthropic, PBC; ChatGPT ist eine Marke von OpenAI." }
    },

    es: {
      meta: { title: "Organizar chats de ChatGPT y Claude | Extensión gratuita", description: "Chat Organizer ordena automáticamente tus chats de Claude y ChatGPT en proyectos con un clic. Extensión de Chrome gratis, sin clave API ni cuenta." },
      nav:  { cta: "Añadir a Chrome" },
      hero: { badge: "Extensión de Chrome gratuita", h1: "Tus chats de Claude y ChatGPT,<br><em>por fin organizados</em>", sub: "¿Cientos de chats sin orden? Chat Organizer analiza hasta tus 200 chats más recientes, crea un plan y mueve a proyectos las coincidencias que apruebes.", stars: "Creado para usuarios avanzados de Claude y ChatGPT", cta: "Añadir a Chrome, es gratis", note1: "Sin clave API", note2: "Sin cuenta requerida", note3: "Listo en segundos" },
      stats: { v1: "Gratis", l1: "No requiere cuenta", l2: "Temas de chat reconocidos", l3: "Categorías integradas", l4: "Organización completa" },
      hiw:  { eyebrow: "Cómo funciona", title: "Tres pasos, un clic", sub: "Ves el plan completo antes de que se mueva nada. Nada ocurre sin tu aprobación." },
      step1: { title: "Haz clic en Organizar", desc: "La extensión analiza hasta tus 200 chats más recientes y crea un plan con palabras clave e IA. Tarda unos segundos." },
      step2: { title: "Revisa el plan", desc: "Ve exactamente qué chat va dónde antes de que se mueva nada. Los nuevos proyectos están claramente marcados. Los chats no reconocidos se señalan aparte." },
      step3: { title: "Haz clic en Aplicar", desc: "Todo se mueve de una vez. Los proyectos vacíos se eliminan automáticamente. Listo." },
      feat:  { eyebrow: "Funciones", title: "Todo lo que necesitas,<br>nada más", sub: "Simple y rápido. Sin ajustes que configurar, sin clave API que pegar." },
      feat1: { title: "Coincidencia instantánea", desc: "Una lista de palabras multilingüe integrada reconoce la mayoría de los chats en milisegundos, sin llamadas de red ni retrasos." },
      feat2: { title: "IA para los difíciles", desc: "Los títulos ambiguos son categorizados por un backend de IA compartido. No se necesita clave API. Simplemente funciona." },
      feat3: { title: "Vista previa antes de aplicar", desc: "Ve el plan completo antes de que se mueva un solo chat. Cancela en cualquier momento con un clic." },
      feat4: { title: "Modo manual", desc: "Asigna chats específicos a mano cuando la organización automática no se adapta del todo a tu flujo de trabajo." },
      feat5: { title: "Multilingüe", desc: "La coincidencia de palabras clave cubre inglés, neerlandés, francés, alemán, español, polaco, ruso y más." },
      feat6: { title: "Limpieza automática", desc: "Los proyectos vacíos se eliminan automáticamente después de cada organización. Tu barra lateral se mantiene ordenada." },
      band:  { title: "¿Listo para organizar?", sub: "Gratuito, sin configuración, tarda unos 10 segundos en instalar.", cta: "Añadir a Chrome" },
      topics: { eyebrow: "Lista de palabras", title: "Reconoce de qué hablas", sub: "La lista de palabras integrada cubre los temas de chat más comunes en varios idiomas.", sidebar: "categorías integradas, más IA para todo lo demás", meta: "Funciona en <strong>10+ idiomas</strong> y maneja cualquier tema de tus chats." },
      priv:  { eyebrow: "Privacidad", title: "Tus datos son tuyos", sub: "Sin cuentas, sin seguimiento, sin recolección de datos más allá de lo necesario para organizar tus chats.", note: "El contenido de los chats nunca sale de tu navegador. Para títulos ambiguos, solo el texto del título se envía a un servicio de IA compartido. Sin datos personales, sin historial, sin cuentas.", link: "Política de privacidad completa" },
      pc1:   { title: "Se queda en tu navegador", desc: "Tus chats se leen directamente desde Claude.ai usando tu sesión activa. No se almacenan datos en ningún servidor." },
      pc2:   { title: "Solo los títulos salen", desc: "Cuando se necesita categorización con IA, solo se envía el <strong>título del chat</strong>. Nunca el contenido de la conversación." },
      pc3:   { title: "Cero analíticas", desc: "Sin seguimiento de uso, telemetría ni informes de errores. El servicio de IA compartido solo recibe títulos ambiguos cuando hace falta categorizarlos." },
      perms: { title: "Permisos de Chrome explicados" },
      perm1: { desc: "Lee tu pestaña abierta de Claude.ai para detectar títulos de chat. Solo activo mientras usas la extensión." },
      perm2: { desc: "Guarda los nombres de tus proyectos localmente en tu navegador. Nada se envía a ningún servidor." },
      perm3: { desc: "Ejecuta la lógica de organización en claude.ai para leer la barra lateral y mover chats a proyectos." },
      faq:   { eyebrow: "Preguntas frecuentes", title: "Preguntas comunes", q1: "¿Es gratuito?", a1: "Sí. Chat Organizer se puede instalar y usar gratis hoy. No requiere una clave API ni una cuenta aparte.", q2: "¿Necesito una clave API?", a2: "No. La categorización con IA funciona en un backend compartido sin coste para ti. Instala la extensión y haz clic en Organizar.", q3: "¿Borrará mis chats o proyectos?", a3: "No se elimina ningún chat. Los proyectos completamente vacíos tras la organización se eliminan para mantener tu barra lateral limpia, pero cada conversación permanece en tu historial.", q4: "¿Funciona en otros idiomas además del inglés?", a4: "Sí. La lista de palabras cubre neerlandés, francés, alemán, español, italiano, polaco, ruso, árabe, hindi y más.", q5: "¿Necesito estar conectado a Claude.ai?", a5: "Sí. La extensión usa tu sesión activa del navegador en Claude.ai para leer y mover chats. Abre claude.ai, inicia sesión y haz clic en el icono de la extensión.", q6: "¿Puedo deshacer una organización?", a6: "No automáticamente, pero puedes mover los chats de vuelta manualmente en Claude.ai. Por eso existe el paso de vista previa: revisa el plan con cuidado antes de hacer clic en Aplicar.", q7: "¿Cómo organizo mis chats de Claude?", a7: "Instala Chat Organizer, abre Claude.ai y haz clic en Organizar. Analiza hasta tus 200 chats más recientes, sugiere proyectos y mueve solo el plan que apruebes.", q8: "¿Hay una herramienta para gestionar y organizar cientos de conversaciones de Claude?", a8: "Sí. Chat Organizer es una extensión de Chrome gratuita creada para gestionar y organizar historiales grandes de chats de Claude.ai. Ordena cientos de conversaciones en proyectos automáticamente, para que encuentres un chat antiguo en segundos en lugar de desplazarte sin fin." },
      cta:   { title: "Organiza tus chats hoy", sub: "Gratis, sin configuración, listo en segundos.", note: "Sin cuenta · Sin clave API · Sin recolección de datos" },
      footer: { store: "Chrome Web Store", contact: "Contacto", privacy: "Política de privacidad", changelog: "Novedades", copy: "No afiliado con Anthropic ni OpenAI. Claude es una marca registrada de Anthropic, PBC; ChatGPT es una marca registrada de OpenAI." }
    },

    zh: {
      meta: { title: "整理 ChatGPT 和 Claude 聊天记录 | 免费 Chrome 扩展程序", description: "Chat Organizer 一键将您的 Claude 和 ChatGPT 聊天自动归类到项目中。免费 Chrome 扩展程序，无需 API 密钥，无需账户，不会删除任何聊天。" },
      nav:  { cta: "添加到 Chrome" },
      hero: { badge: "免费 Chrome 扩展", h1: "你的 Claude 和 ChatGPT 对话，<br><em>终于井然有序</em>", sub: "数百个对话毫无条理？Chat Organizer 会扫描最近的 200 个对话，制定计划，并将你批准的匹配项移入项目。", stars: "专为 Claude 和 ChatGPT 重度用户打造", cta: "添加到 Chrome，免费", note1: "无需 API 密钥", note2: "无需注册账号", note3: "几秒即可完成" },
      stats: { v1: "免费", l1: "无需单独账户", l2: "可识别的对话主题", l3: "内置分类", l4: "完整整理一次" },
      hiw:  { eyebrow: "使用方法", title: "三步，一键搞定", sub: "任何内容移动之前，你都能看到完整计划。没有你的确认，什么都不会发生。" },
      step1: { title: "点击整理", desc: "扩展程序会扫描最近的 200 个对话，并通过关键词匹配和 AI 生成移动计划，只需几秒钟。" },
      step2: { title: "查看计划", desc: "在任何对话移动之前，清楚看到每个对话的目标位置。新项目有明确标注，未匹配的对话单独列出。" },
      step3: { title: "点击应用", desc: "所有内容一次性移动完毕。空项目自动清除。完成。" },
      feat:  { eyebrow: "功能", title: "你需要的一切，<br>不多一分", sub: "简单快速。无需配置任何设置，无需粘贴 API 密钥。" },
      feat1: { title: "即时关键词匹配", desc: "内置多语言词汇表在毫秒内识别大多数对话，无需网络请求，无任何延迟。" },
      feat2: { title: "AI 处理难题", desc: "模糊标题由共享 AI 后端进行分类，无需 API 密钥，开箱即用。" },
      feat3: { title: "应用前预览", desc: "在任何对话移动之前查看完整计划，随时一键取消。" },
      feat4: { title: "手动模式", desc: "当自动整理不完全符合你的工作流程时，可手动分配特定对话。" },
      feat5: { title: "多语言支持", desc: "关键词匹配涵盖英语、荷兰语、法语、德语、西班牙语、波兰语、俄语等更多语言。" },
      feat6: { title: "自动清理", desc: "每次整理后，空项目会自动删除，侧边栏保持整洁。" },
      band:  { title: "准备好清理了吗？", sub: "免费，无需设置，安装约 10 秒。", cta: "添加到 Chrome" },
      topics: { eyebrow: "词汇表", title: "识别你的对话主题", sub: "内置词汇表涵盖多种语言中最常见的对话主题。", sidebar: "内置分类，加上 AI 覆盖其他所有内容", meta: "支持 <strong>10+ 种语言</strong>，处理你对话中的任何主题。" },
      priv:  { eyebrow: "隐私", title: "你的数据，属于你", sub: "无账号、无追踪、除整理对话所需外不收集任何数据。", note: "对话内容从不离开你的浏览器。对于模糊标题，仅将标题文本发送到共享 AI 服务进行分类，不涉及个人数据、历史记录或账号。", link: "完整隐私政策" },
      pc1:   { title: "留在你的浏览器", desc: "你的对话直接通过你的活动登录会话从 Claude.ai 读取，任何数据都不会存储在服务器上。" },
      pc2:   { title: "只有标题会离开", desc: "需要 AI 分类时，仅发送<strong>对话标题</strong>，从不发送对话内容。" },
      pc3:   { title: "零数据分析", desc: "无使用追踪、无遥测、无崩溃报告。仅在需要分类时，共享 AI 服务才会接收含义不明确的对话标题。" },
      perms: { title: "Chrome 权限说明" },
      perm1: { desc: "读取你打开的 Claude.ai 标签页以检测对话标题，仅在使用扩展程序时才处于活动状态。" },
      perm2: { desc: "将你的项目名称本地保存在浏览器中，不会向任何服务器发送任何内容。" },
      perm3: { desc: "在 claude.ai 上运行整理逻辑，读取侧边栏并将对话移入项目。" },
      faq:   { eyebrow: "常见问题", title: "常见问题解答", q1: "这是免费的吗？", a1: "是的。Chat Organizer 目前可免费安装和使用，无需 API 密钥或单独账户。", q2: "我需要 API 密钥吗？", a2: "不需要。AI 分类在共享后端上运行，对你完全免费。只需安装扩展程序并点击整理即可。", q3: "它会删除我的对话或项目吗？", a3: "不会删除任何对话。整理后完全为空的项目会被删除以保持侧边栏整洁，但每个对话都完整保留在你的聊天历史中。", q4: "它支持英语以外的其他语言吗？", a4: "是的。关键词词汇表涵盖荷兰语、法语、德语、西班牙语、意大利语、波兰语、俄语、阿拉伯语、印地语等更多语言。AI 备选方案支持任何语言。", q5: "我需要登录 Claude.ai 吗？", a5: "是的。扩展程序使用你活动的 Claude.ai 浏览器会话来读取和移动对话。打开 claude.ai，登录，然后点击扩展程序图标。", q6: "我可以撤销整理操作吗？", a6: "不能自动撤销，但你可以在 Claude.ai 中手动移回对话。这就是为什么预览步骤存在：在点击应用之前仔细检查计划。" },
      cta:   { title: "今天就整理你的对话", sub: "免费，无需设置，几秒即可完成。", note: "无账号 · 无 API 密钥 · 不收集数据" },
      footer: { store: "Chrome 网上应用店", contact: "联系我们", privacy: "隐私政策", changelog: "更新日志", copy: "与 Anthropic 和 OpenAI 均无关联。Claude 是 Anthropic PBC 的商标；ChatGPT 是 OpenAI 的商标。" }
    },

    pt: {
      meta: { title: "Organizar conversas do ChatGPT e Claude | Extensão gratuita", description: "O Chat Organizer organiza as suas conversas do Claude e do ChatGPT em projetos com um clique. Extensão gratuita para Chrome, sem chave de API." },
      nav:  { cta: "Adicionar ao Chrome" },
      hero: { badge: "Extensão gratuita para Chrome", h1: "Seus chats do Claude e ChatGPT,<br><em>finalmente organizados</em>", sub: "Centenas de chats sem ordem? O Chat Organizer analisa até seus 200 chats mais recentes, cria um plano e move para projetos apenas as correspondências aprovadas.", stars: "Feito para usuários avançados do Claude e ChatGPT", cta: "Adicionar ao Chrome, de graça", note1: "Sem chave de API", note2: "Sem conta necessária", note3: "Pronto em segundos" },
      stats: { v1: "Grátis", l1: "Não requer conta", l2: "Tópicos de chat reconhecidos", l3: "Categorias integradas", l4: "Organização completa" },
      hiw:  { eyebrow: "Como funciona", title: "Três passos, um clique", sub: "Você vê o plano completo antes de qualquer coisa ser movida. Nada acontece sem a sua aprovação." },
      step1: { title: "Clique em Organizar", desc: "A extensão analisa até seus 200 chats mais recentes e cria um plano com palavras-chave e IA. Leva apenas alguns segundos." },
      step2: { title: "Revise o plano", desc: "Veja exatamente para onde cada chat vai antes de qualquer coisa ser movida. Novos projetos são claramente marcados. Chats não reconhecidos são sinalizados separadamente." },
      step3: { title: "Clique em Aplicar", desc: "Tudo é movido de uma vez. Projetos vazios são excluídos automaticamente. Pronto." },
      feat:  { eyebrow: "Recursos", title: "Tudo que você precisa,<br>nada a mais", sub: "Simples e rápido. Sem configurações, sem chave de API para colar." },
      feat1: { title: "Correspondência instantânea", desc: "Uma lista de palavras multilíngue integrada reconhece a maioria dos chats em milissegundos, sem chamada de rede e sem atraso." },
      feat2: { title: "IA para os difíceis", desc: "Títulos ambíguos são categorizados por um backend de IA compartilhado. Sem chave de API. Simplesmente funciona." },
      feat3: { title: "Visualizar antes de aplicar", desc: "Veja o plano completo antes de um único chat ser movido. Cancele a qualquer momento com um clique." },
      feat4: { title: "Modo manual", desc: "Atribua chats específicos manualmente quando a organização automática não se encaixa no seu fluxo de trabalho." },
      feat5: { title: "Multilíngue", desc: "A correspondência cobre inglês, holandês, francês, alemão, espanhol, polonês, russo e mais." },
      feat6: { title: "Limpeza automática", desc: "Projetos vazios são removidos automaticamente após cada organização. Sua barra lateral fica organizada." },
      band:  { title: "Pronto para limpar?", sub: "Gratuito, sem configuração, leva cerca de 10 segundos para instalar.", cta: "Adicionar ao Chrome" },
      topics: { eyebrow: "Lista de palavras", title: "Reconhece sobre o que você fala", sub: "A lista de palavras integrada cobre os tópicos de chat mais comuns em vários idiomas.", sidebar: "categorias integradas, mais IA cobrindo todo o resto", meta: "Funciona em <strong>10+ idiomas</strong> e lida com qualquer tópico dos seus chats." },
      priv:  { eyebrow: "Privacidade", title: "Seus dados são seus", sub: "Sem contas, sem rastreamento, sem coleta de dados além do necessário para organizar seus chats.", note: "O conteúdo dos chats nunca sai do seu navegador. Para títulos ambíguos, apenas o texto do título é enviado a um serviço de IA compartilhado. Sem dados pessoais, sem histórico, sem contas.", link: "Política de privacidade completa" },
      pc1:   { title: "Fica no seu navegador", desc: "Seus chats são lidos diretamente do Claude.ai usando sua sessão ativa. Nenhum dado é armazenado em nenhum servidor." },
      pc2:   { title: "Apenas os títulos saem", desc: "Quando a categorização por IA é necessária, apenas o <strong>título do chat</strong> é enviado. Nunca o conteúdo da conversa." },
      pc3:   { title: "Zero análises", desc: "Sem rastreamento de uso, telemetria ou relatórios de falhas. O serviço de IA compartilhado recebe apenas títulos ambíguos quando a categorização é necessária." },
      perms: { title: "Permissões do Chrome explicadas" },
      perm1: { desc: "Lê sua aba Claude.ai aberta para detectar títulos de chat. Ativo apenas enquanto você usa a extensão." },
      perm2: { desc: "Salva os nomes dos seus projetos localmente no seu navegador. Nada é enviado a nenhum servidor." },
      perm3: { desc: "Executa a lógica de organização no claude.ai para ler a barra lateral e mover chats para projetos." },
      faq:   { eyebrow: "Perguntas frequentes", title: "Perguntas comuns", q1: "É gratuito?", a1: "Sim. O Chat Organizer pode ser instalado e usado gratuitamente hoje. Não requer chave de API nem conta separada.", q2: "Preciso de uma chave de API?", a2: "Não. A categorização por IA funciona em um backend compartilhado sem custo para você. Instale a extensão e clique em Organizar.", q3: "Vai excluir meus chats ou projetos?", a3: "Nenhum chat é excluído. Projetos completamente vazios após a organização são removidos para manter a barra lateral limpa, mas cada conversa permanece intacta no histórico.", q4: "Funciona em outros idiomas além do inglês?", a4: "Sim. A lista de palavras cobre holandês, francês, alemão, espanhol, italiano, polonês, russo, árabe, hindi e mais. O fallback de IA funciona em qualquer idioma.", q5: "Preciso estar conectado ao Claude.ai?", a5: "Sim. A extensão usa sua sessão ativa do navegador no Claude.ai para ler e mover chats. Abra claude.ai, faça login e clique no ícone da extensão.", q6: "Posso desfazer uma organização?", a6: "Não automaticamente, mas você pode mover os chats de volta manualmente no Claude.ai. É por isso que o passo de visualização existe: revise o plano com cuidado antes de clicar em Aplicar." },
      cta:   { title: "Organize seus chats hoje", sub: "Gratuito, sem configuração, pronto em segundos.", note: "Sem conta · Sem chave de API · Sem coleta de dados" },
      footer: { store: "Chrome Web Store", contact: "Contato", privacy: "Política de privacidade", changelog: "Novidades", copy: "Não afiliado à Anthropic nem à OpenAI. Claude é uma marca registrada da Anthropic, PBC; ChatGPT é uma marca registrada da OpenAI." }
    },

    ja: {
      meta: { title: "ChatGPT・Claudeのチャットを自動整理 | 無料Chrome拡張機能", description: "Chat Organizerは、ClaudeとChatGPTのチャットをワンクリックでプロジェクトに自動仕分けします。無料のChrome拡張機能で、APIキーもアカウントも不要です。" },
      nav:  { cta: "Chrome に追加" },
      hero: { badge: "無料 Chrome 拡張機能", h1: "Claude と ChatGPT のチャット、<br><em>ついに整理された</em>", sub: "何百ものチャットが無秩序に？Chat Organizer は最近の最大 200 件を確認し、計画を作成して、承認した項目だけをプロジェクトへ移動します。", stars: "Claude と ChatGPT のパワーユーザー向け", cta: "Chrome に追加（無料）", note1: "API キー不要", note2: "アカウント不要", note3: "数秒で完了" },
      stats: { v1: "無料", l1: "別アカウント不要", l2: "認識できるチャットトピック", l3: "組み込みカテゴリ", l4: "完全整理実行" },
      hiw:  { eyebrow: "使い方", title: "3ステップ、ワンクリック", sub: "何かが移動される前に、完全な計画を確認できます。あなたの承認なしに何も起こりません。" },
      step1: { title: "「整理」をクリック", desc: "拡張機能は最近の最大 200 件を確認し、キーワードと AI を使って移動計画を作成します。数秒で完了します。" },
      step2: { title: "計画を確認", desc: "何かが移動される前に、どのチャットがどこに行くかを正確に確認できます。新しいプロジェクトは明確にマークされています。未一致のチャットは別途フラグが立てられます。" },
      step3: { title: "「適用」をクリック", desc: "すべてが一括で移動されます。空のプロジェクトは自動的にクリーンアップされます。完了です。" },
      feat:  { eyebrow: "機能", title: "必要なすべて、<br>それだけ", sub: "シンプルで高速。設定不要、API キー不要。" },
      feat1: { title: "瞬時のキーワードマッチング", desc: "組み込みの多言語ワードリストが、ネットワーク通信なし・遅延なしでほとんどのチャットをミリ秒で認識します。" },
      feat2: { title: "難しい場合は AI が対応", desc: "曖昧なタイトルは共有 AI バックエンドによって分類されます。API キー不要。そのまま動作します。" },
      feat3: { title: "適用前にプレビュー", desc: "チャットが移動される前に完全な計画を確認できます。いつでもワンクリックでキャンセル可能。" },
      feat4: { title: "手動モード", desc: "自動整理がワークフローに合わない場合に、特定のチャットを手動で割り当てられます。" },
      feat5: { title: "多言語対応", desc: "キーワードマッチングは英語、オランダ語、フランス語、ドイツ語、スペイン語、ポーランド語、ロシア語などをカバーします。" },
      feat6: { title: "自動クリーンアップ", desc: "空のプロジェクトは整理実行後に自動的に削除されます。サイドバーがすっきりします。" },
      band:  { title: "整理を始めましょう", sub: "無料、設定不要、インストールは約 10 秒。", cta: "Chrome に追加" },
      topics: { eyebrow: "ワードリスト", title: "あなたのトピックを認識", sub: "組み込みワードリストは複数の言語で最も一般的なチャットトピックをカバーします。", sidebar: "組み込みカテゴリ、残りは AI がカバー", meta: "<strong>10以上の言語</strong>に対応し、チャットのあらゆるトピックを処理します。" },
      priv:  { eyebrow: "プライバシー", title: "あなたのデータはあなたのもの", sub: "アカウントなし、追跡なし、チャット整理に必要な範囲を超えたデータ収集なし。", note: "チャットの内容がブラウザ外に出ることはありません。曖昧なタイトルの場合、タイトルのテキストのみが分類のために共有 AI サービスに送信されます。個人データなし、履歴なし、アカウントなし。", link: "完全なプライバシーポリシー" },
      pc1:   { title: "ブラウザ内に留まる", desc: "チャットはアクティブなログインセッションを使用して Claude.ai から直接読み取られます。サーバーにデータは保存されません。" },
      pc2:   { title: "タイトルだけが送信される", desc: "AI 分類が必要な場合、<strong>チャットタイトル</strong>のみが送信されます。会話の内容は送信されません。" },
      pc3:   { title: "ゼロ分析", desc: "使用状況の追跡、テレメトリ、クラッシュレポートはありません。分類が必要な場合のみ、共有 AI サービスへ曖昧なチャットタイトルを送信します。" },
      perms: { title: "Chrome の権限について" },
      perm1: { desc: "開いている Claude.ai タブを読み取ってチャットタイトルを検出します。拡張機能の使用中のみアクティブです。" },
      perm2: { desc: "プロジェクト名をブラウザ内にローカル保存します。サーバーには何も送信されません。" },
      perm3: { desc: "claude.ai 上でサイドバーを読み取ってチャットをプロジェクトに移動するため、整理ロジックを実行します。" },
      faq:   { eyebrow: "よくある質問", title: "よくあるご質問", q1: "無料ですか？", a1: "はい。Chat Organizer は現在無料でインストールして利用できます。API キーや別アカウントは不要です。", q2: "API キーは必要ですか？", a2: "不要です。AI 分類は共有バックエンドで動作し、あなたへの費用は一切ありません。拡張機能をインストールして「整理」をクリックするだけです。", q3: "チャットやプロジェクトが削除されますか？", a3: "チャットが削除されることはありません。整理後に完全に空になったプロジェクトは、サイドバーをきれいに保つために削除されますが、すべての会話はチャット履歴に残ります。", q4: "英語以外の言語でも動作しますか？", a4: "はい。キーワードワードリストはオランダ語、フランス語、ドイツ語、スペイン語、イタリア語、ポーランド語、ロシア語、アラビア語、ヒンディー語などをカバーします。AI フォールバックはあらゆる言語で動作します。", q5: "Claude.ai にログインする必要がありますか？", a5: "はい。拡張機能はアクティブな Claude.ai ブラウザセッションを使用してチャットを読み取り、移動します。claude.ai を開いてログインし、拡張機能アイコンをクリックしてください。", q6: "整理操作を元に戻せますか？", a6: "自動的には元に戻せませんが、Claude.ai でチャットを手動で移動し直すことができます。そのためにプレビューステップがあります。適用をクリックする前にプランをよく確認してください。" },
      cta:   { title: "今日チャットを整理しましょう", sub: "無料、設定不要、数秒で完了。", note: "アカウント不要 · API キー不要 · データ収集なし" },
      footer: { store: "Chrome ウェブストア", contact: "お問い合わせ", privacy: "プライバシーポリシー", changelog: "更新履歴", copy: "Anthropic および OpenAI とは無関係です。Claude は Anthropic PBC の商標、ChatGPT は OpenAI の商標です。" }
    },

    ru: {
      meta: { title: "Организация чатов ChatGPT и Claude | Бесплатное расширение", description: "Chat Organizer автоматически сортирует ваши чаты Claude и ChatGPT по проектам в один клик. Бесплатное расширение Chrome, без API-ключа и аккаунта." },
      nav:  { cta: "Добавить в Chrome" },
      hero: { badge: "Бесплатное расширение для Chrome", h1: "Ваши чаты в Claude и ChatGPT,<br><em>наконец организованы</em>", sub: "Сотни чатов в беспорядке? Chat Organizer проверяет до 200 последних чатов, составляет план и переносит в проекты только подтверждённые совпадения.", stars: "Создано для активных пользователей Claude и ChatGPT", cta: "Добавить в Chrome — бесплатно", note1: "API-ключ не нужен", note2: "Аккаунт не нужен", note3: "Готово за секунды" },
      stats: { v1: "Бесплатно", l1: "Отдельный аккаунт не нужен", l2: "Распознаваемых тем чатов", l3: "Встроенных категорий", l4: "Полная организация" },
      hiw:  { eyebrow: "Как это работает", title: "Три шага, один клик", sub: "Вы видите полный план до того, как что-либо будет перемещено. Ничего не происходит без вашего одобрения." },
      step1: { title: "Нажмите «Организовать»", desc: "Расширение проверяет до 200 последних чатов и составляет план с помощью ключевых слов и ИИ. Это занимает несколько секунд." },
      step2: { title: "Просмотрите план", desc: "Видите точно, какой чат куда попадёт, до любого перемещения. Новые проекты чётко помечены. Нераспознанные чаты отмечены отдельно." },
      step3: { title: "Нажмите «Применить»", desc: "Всё перемещается сразу. Пустые проекты удаляются автоматически. Готово." },
      feat:  { eyebrow: "Функции", title: "Всё, что нужно,<br>ничего лишнего", sub: "Просто и быстро. Никаких настроек, никакого API-ключа." },
      feat1: { title: "Мгновенное сопоставление ключевых слов", desc: "Встроенный многоязычный список слов распознаёт большинство чатов за миллисекунды без сетевых запросов и задержек." },
      feat2: { title: "ИИ для сложных случаев", desc: "Неоднозначные заголовки категоризируются общим бэкендом ИИ. Без API-ключа. Просто работает." },
      feat3: { title: "Предпросмотр перед применением", desc: "Смотрите полный план до того, как переместится хотя бы один чат. Отменяйте в любой момент одним кликом." },
      feat4: { title: "Ручной режим", desc: "Назначайте конкретные чаты вручную, когда автоорганизация не вполне подходит под ваш рабочий процесс." },
      feat5: { title: "Многоязычный", desc: "Сопоставление ключевых слов охватывает английский, нидерландский, французский, немецкий, испанский, польский, русский и другие языки." },
      feat6: { title: "Автоочистка", desc: "Пустые проекты удаляются автоматически после каждой организации. Ваша боковая панель остаётся опрятной." },
      band:  { title: "Готовы навести порядок?", sub: "Бесплатно, без настроек, установка занимает около 10 секунд.", cta: "Добавить в Chrome" },
      topics: { eyebrow: "Список слов", title: "Распознаёт тему разговора", sub: "Встроенный список слов охватывает наиболее распространённые темы чатов на нескольких языках.", sidebar: "встроенные категории, плюс ИИ для всего остального", meta: "Работает на <strong>10+ языках</strong> и обрабатывает любую тему из ваших чатов." },
      priv:  { eyebrow: "Конфиденциальность", title: "Ваши данные — ваши", sub: "Без аккаунтов, без слежки, без сбора данных сверх необходимого для организации чатов.", note: "Содержимое чатов никогда не покидает ваш браузер. Для неоднозначных заголовков только текст заголовка отправляется в общий ИИ-сервис для категоризации. Никаких личных данных, истории или аккаунтов.", link: "Полная политика конфиденциальности" },
      pc1:   { title: "Остаётся в вашем браузере", desc: "Ваши чаты читаются напрямую из Claude.ai через вашу активную сессию. Данные не хранятся ни на каком сервере." },
      pc2:   { title: "Уходят только заголовки", desc: "При необходимости категоризации ИИ отправляется только <strong>заголовок чата</strong>. Никогда — содержимое беседы." },
      pc3:   { title: "Ноль аналитики", desc: "Нет отслеживания использования, телеметрии и отчётов об ошибках. Общий ИИ-сервис получает только неоднозначные названия чатов, когда нужна классификация." },
      perms: { title: "Разрешения Chrome" },
      perm1: { desc: "Читает открытую вкладку Claude.ai для обнаружения заголовков чатов. Активно только во время использования расширения." },
      perm2: { desc: "Сохраняет имена проектов локально в вашем браузере. Ничего не отправляется на сервер." },
      perm3: { desc: "Запускает логику организации на claude.ai для чтения боковой панели и перемещения чатов в проекты." },
      faq:   { eyebrow: "Вопросы и ответы", title: "Частые вопросы", q1: "Это бесплатно?", a1: "Да. Сегодня Chat Organizer можно установить и использовать бесплатно. Ключ API и отдельный аккаунт не нужны.", q2: "Нужен ли API-ключ?", a2: "Нет. ИИ-категоризация работает на общем бэкенде без каких-либо затрат для вас. Просто установите расширение и нажмите «Организовать».", q3: "Оно удалит мои чаты или проекты?", a3: "Ни один чат никогда не удаляется. Полностью пустые после организации проекты удаляются, чтобы боковая панель оставалась аккуратной, но каждый разговор остаётся в истории чатов.", q4: "Работает на других языках кроме английского?", a4: "Да. Список слов охватывает нидерландский, французский, немецкий, испанский, итальянский, польский, русский, арабский, хинди и другие. ИИ-запасной вариант работает на любом языке.", q5: "Нужно ли быть залогиненным в Claude.ai?", a5: "Да. Расширение использует вашу активную браузерную сессию Claude.ai для чтения и перемещения чатов. Откройте claude.ai, войдите в систему, затем нажмите значок расширения.", q6: "Можно ли отменить организацию?", a6: "Не автоматически, но вы можете вернуть чаты вручную в Claude.ai. Именно для этого существует шаг предпросмотра: внимательно изучите план перед нажатием «Применить»." },
      cta:   { title: "Организуйте чаты сегодня", sub: "Бесплатно, без настроек, готово за секунды.", note: "Без аккаунта · Без API-ключа · Без сбора данных" },
      footer: { store: "Chrome Web Store", contact: "Контакты", privacy: "Политика конфиденциальности", changelog: "История изменений", copy: "Не связано с Anthropic или OpenAI. Claude является торговой маркой Anthropic PBC; ChatGPT является торговой маркой OpenAI." }
    },

    ar: {
      meta: { title: "تنظيم محادثات ChatGPT و Claude | إضافة Chrome مجانية", description: "ينظّم Chat Organizer محادثات Claude و ChatGPT في مشاريع بنقرة واحدة. إضافة Chrome مجانية، بدون مفتاح API وبدون حساب، ولا يتم حذف أي محادثة." },
      nav:  { cta: "أضف إلى Chrome" },
      hero: { badge: "امتداد Chrome مجاني", h1: "محادثاتك على Claude وChatGPT،<br><em>منظّمة أخيراً</em>", sub: "مئات المحادثات بلا نظام؟ يفحص Chat Organizer ما يصل إلى أحدث 200 محادثة، وينشئ خطة، وينقل إلى المشاريع العناصر التي توافق عليها فقط.", stars: "مصمم لمستخدمي Claude وChatGPT المحترفين", cta: "أضف إلى Chrome، مجاناً", note1: "لا حاجة لمفتاح API", note2: "لا حاجة لحساب", note3: "جاهز في ثوانٍ" },
      stats: { v1: "مجاني", l1: "لا يحتاج إلى حساب منفصل", l2: "موضوعات محادثة معترف بها", l3: "فئات مدمجة", l4: "تنظيم شامل" },
      hiw:  { eyebrow: "كيف يعمل", title: "ثلاث خطوات، نقرة واحدة", sub: "ترى الخطة الكاملة قبل نقل أي شيء. لا شيء يحدث دون موافقتك." },
      step1: { title: "انقر على تنظيم", desc: "يفحص الامتداد ما يصل إلى أحدث 200 محادثة ويُنشئ خطة باستخدام الكلمات المفتاحية والذكاء الاصطناعي. يستغرق ذلك بضع ثوانٍ." },
      step2: { title: "راجع الخطة", desc: "ترى بالضبط أين ستذهب كل محادثة قبل أي نقل. المشاريع الجديدة مُحدَّدة بوضوح. المحادثات غير المتطابقة مُميَّزة بشكل منفصل." },
      step3: { title: "انقر على تطبيق", desc: "يتم نقل كل شيء دفعة واحدة. يتم حذف المشاريع الفارغة تلقائياً. انتهى." },
      feat:  { eyebrow: "الميزات", title: "كل ما تحتاجه،<br>لا أكثر", sub: "بسيط وسريع. لا إعدادات للضبط، لا مفتاح API للصق." },
      feat1: { title: "مطابقة فورية للكلمات المفتاحية", desc: "قائمة كلمات مدمجة متعددة اللغات تتعرّف على معظم المحادثات في ميلي ثانية، دون طلب شبكة أو تأخير." },
      feat2: { title: "الذكاء الاصطناعي للحالات الصعبة", desc: "يتم تصنيف العناوين الغامضة بواسطة واجهة خلفية مشتركة للذكاء الاصطناعي. لا حاجة لمفتاح API. يعمل ببساطة." },
      feat3: { title: "معاينة قبل التطبيق", desc: "ترى الخطة الكاملة قبل نقل أي محادثة. يمكنك الإلغاء في أي وقت بنقرة واحدة." },
      feat4: { title: "الوضع اليدوي", desc: "خصّص محادثات محددة يدوياً عندما لا يناسب التنظيم التلقائي سير عملك تماماً." },
      feat5: { title: "متعدد اللغات", desc: "تغطي مطابقة الكلمات المفتاحية الإنجليزية والهولندية والفرنسية والألمانية والإسبانية والبولندية والروسية والمزيد." },
      feat6: { title: "التنظيف التلقائي", desc: "تُزال المشاريع الفارغة تلقائياً بعد كل تشغيل للتنظيم. يبقى الشريط الجانبي مرتّباً." },
      band:  { title: "جاهز للتنظيم؟", sub: "مجاني، بلا إعداد، يستغرق التثبيت نحو 10 ثوانٍ.", cta: "أضف إلى Chrome" },
      topics: { eyebrow: "قائمة الكلمات", title: "يتعرّف على موضوع حديثك", sub: "تغطي قائمة الكلمات المدمجة أكثر موضوعات المحادثة شيوعاً عبر لغات متعددة.", sidebar: "فئات مدمجة، بالإضافة إلى ذكاء اصطناعي يغطي كل شيء آخر", meta: "يعمل عبر <strong>أكثر من 10 لغات</strong> ويتعامل مع أي موضوع في محادثاتك." },
      priv:  { eyebrow: "الخصوصية", title: "بياناتك ملكك", sub: "لا حسابات، لا تتبع، لا جمع بيانات تتجاوز ما هو ضروري لتنظيم محادثاتك.", note: "محتوى المحادثات لا يغادر متصفحك أبداً. بالنسبة للعناوين الغامضة، يُرسَل نص العنوان فقط إلى خدمة ذكاء اصطناعي مشتركة للتصنيف. لا بيانات شخصية، لا سجل، لا حسابات.", link: "سياسة الخصوصية الكاملة" },
      pc1:   { title: "يبقى في متصفحك", desc: "تُقرأ محادثاتك مباشرةً من Claude.ai باستخدام جلسة تسجيل الدخول النشطة. لا يتم تخزين أي بيانات على أي خادم." },
      pc2:   { title: "العناوين فقط هي التي تغادر", desc: "عند الحاجة لتصنيف بالذكاء الاصطناعي، يُرسَل <strong>عنوان المحادثة</strong> فقط. لا يُرسَل محتوى المحادثة أبداً." },
      pc3:   { title: "صفر تحليلات", desc: "لا تتبع للاستخدام ولا قياس عن بُعد ولا تقارير أعطال. لا تستقبل خدمة الذكاء الاصطناعي المشتركة سوى عناوين المحادثات الغامضة عند الحاجة إلى التصنيف." },
      perms: { title: "أذونات Chrome موضّحة" },
      perm1: { desc: "يقرأ علامة تبويب Claude.ai المفتوحة للكشف عن عناوين المحادثات. نشط فقط أثناء استخدام الامتداد." },
      perm2: { desc: "يحفظ أسماء مشاريعك محلياً في متصفحك. لا شيء يُرسَل إلى أي خادم." },
      perm3: { desc: "يشغّل منطق التنظيم على claude.ai لقراءة الشريط الجانبي ونقل المحادثات إلى المشاريع." },
      faq:   { eyebrow: "الأسئلة الشائعة", title: "أسئلة مشتركة", q1: "هل هو مجاني؟", a1: "نعم. يمكن تثبيت Chat Organizer واستخدامه مجاناً اليوم، من دون مفتاح API أو حساب منفصل.", q2: "هل أحتاج مفتاح API؟", a2: "لا. يعمل تصنيف الذكاء الاصطناعي على واجهة خلفية مشتركة دون أي تكلفة عليك. فقط ثبّت الامتداد وانقر على تنظيم.", q3: "هل سيحذف محادثاتي أو مشاريعي؟", a3: "لا يُحذف أي محادثة. المشاريع التي تبقى فارغة تماماً بعد التنظيم تُزال للحفاظ على الشريط الجانبي نظيفاً، لكن كل محادثة تبقى سليمة في تاريخ المحادثات.", q4: "هل يعمل بلغات أخرى غير الإنجليزية؟", a4: "نعم. تغطي قائمة الكلمات الهولندية والفرنسية والألمانية والإسبانية والإيطالية والبولندية والروسية والعربية والهندية والمزيد. يعمل البديل الاحتياطي للذكاء الاصطناعي بأي لغة.", q5: "هل أحتاج إلى تسجيل الدخول إلى Claude.ai؟", a5: "نعم. يستخدم الامتداد جلسة المتصفح النشطة على Claude.ai لقراءة ونقل المحادثات. افتح claude.ai، سجّل الدخول، ثم انقر على أيقونة الامتداد.", q6: "هل يمكنني التراجع عن التنظيم؟", a6: "ليس تلقائياً، لكن يمكنك إعادة المحادثات يدوياً في Claude.ai. لهذا السبب توجد خطوة المعاينة: راجع الخطة بعناية قبل النقر على تطبيق." },
      cta:   { title: "نظّم محادثاتك اليوم", sub: "مجاني، بلا إعداد، جاهز في ثوانٍ.", note: "بلا حساب · بلا مفتاح API · بلا جمع بيانات" },
      footer: { store: "متجر Chrome الإلكتروني", contact: "تواصل معنا", privacy: "سياسة الخصوصية", changelog: "سجل التغييرات", copy: "غير مرتبط بـ Anthropic أو OpenAI. Claude علامة تجارية لـ Anthropic PBC؛ وChatGPT علامة تجارية لـ OpenAI." }
    },

    hi: {
      meta: { title: "ChatGPT और Claude चैट व्यवस्थित करें | मुफ़्त Chrome एक्सटेंशन", description: "Chat Organizer आपकी Claude और ChatGPT चैट को एक क्लिक में प्रोजेक्ट्स में व्यवस्थित करता है। मुफ़्त Chrome एक्सटेंशन, कोई API कुंजी या खाता नहीं चाहिए।" },
      nav:  { cta: "Chrome में जोड़ें" },
      hero: { badge: "मुफ़्त Chrome एक्सटेंशन", h1: "आपकी Claude और ChatGPT चैट्स,<br><em>आख़िरकार व्यवस्थित</em>", sub: "सैकड़ों चैट्स और कोई व्यवस्था नहीं? Chat Organizer आपकी हाल की अधिकतम 200 चैट्स देखता है, योजना बनाता है और केवल स्वीकृत मिलानों को प्रोजेक्ट्स में ले जाता है।", stars: "Claude और ChatGPT पावर यूज़र्स के लिए बनाया गया", cta: "Chrome में जोड़ें, मुफ़्त है", note1: "कोई API की ज़रूरत नहीं", note2: "कोई अकाउंट ज़रूरी नहीं", note3: "कुछ सेकंड में तैयार" },
      stats: { v1: "मुफ़्त", l1: "अलग अकाउंट की जरूरत नहीं", l2: "चैट विषय पहचाने गए", l3: "बिल्ट-इन श्रेणियां", l4: "पूर्ण व्यवस्था" },
      hiw:  { eyebrow: "यह कैसे काम करता है", title: "तीन क़दम, एक क्लिक", sub: "कुछ भी हिलने से पहले आप पूरी योजना देखते हैं। आपकी मंज़ूरी के बिना कुछ नहीं होता।" },
      step1: { title: "Organize पर क्लिक करें", desc: "एक्सटेंशन आपकी हाल की अधिकतम 200 चैट्स देखता है और कीवर्ड मिलान तथा AI से मूव प्लान बनाता है। इसमें कुछ सेकंड लगते हैं।" },
      step2: { title: "योजना देखें", desc: "कुछ भी हिलने से पहले देखें कि कौन सी चैट कहाँ जाएगी। नए प्रोजेक्ट्स स्पष्ट रूप से चिह्नित हैं। अनमैच्ड चैट्स अलग से दिखाई जाती हैं।" },
      step3: { title: "Apply पर क्लिक करें", desc: "सब कुछ एक साथ मूव होता है। खाली प्रोजेक्ट्स अपने आप साफ़ हो जाते हैं। हो गया।" },
      feat:  { eyebrow: "फ़ीचर्स", title: "जो चाहिए वो सब,<br>ज़्यादा कुछ नहीं", sub: "सरल और तेज़। कोई सेटिंग नहीं, कोई API की नहीं।" },
      feat1: { title: "तुरंत कीवर्ड मिलान", desc: "बिल्ट-इन बहुभाषी वर्डलिस्ट बिना किसी नेटवर्क कॉल के मिलीसेकंड में अधिकांश चैट्स को पहचान लेती है।" },
      feat2: { title: "मुश्किल मामलों के लिए AI", desc: "अस्पष्ट शीर्षकों को साझा AI बैकएंड द्वारा वर्गीकृत किया जाता है। कोई API की नहीं। बस काम करता है।" },
      feat3: { title: "लागू करने से पहले पूर्वावलोकन", desc: "कोई भी चैट हिलने से पहले पूरी योजना देखें। किसी भी समय एक क्लिक से रद्द करें।" },
      feat4: { title: "मैनुअल मोड", desc: "जब ऑटो-ऑर्गनाइज़ आपके वर्कफ़्लो के लिए सही नहीं है तो विशिष्ट चैट्स को मैन्युअली असाइन करें।" },
      feat5: { title: "बहुभाषी", desc: "कीवर्ड मिलान अंग्रेज़ी, डच, फ्रेंच, जर्मन, स्पेनिश, पोलिश, रूसी और अधिक को कवर करता है।" },
      feat6: { title: "ऑटो-क्लीनअप", desc: "खाली प्रोजेक्ट्स प्रत्येक व्यवस्था के बाद अपने आप हट जाते हैं। साइडबार साफ़ रहता है।" },
      band:  { title: "साफ़ करने के लिए तैयार?", sub: "मुफ़्त, कोई सेटअप नहीं, इंस्टॉल में लगभग 10 सेकंड।", cta: "Chrome में जोड़ें" },
      topics: { eyebrow: "वर्डलिस्ट", title: "आप किस बारे में बात कर रहे हैं", sub: "बिल्ट-इन वर्डलिस्ट कई भाषाओं में सबसे सामान्य चैट विषयों को कवर करती है।", sidebar: "बिल्ट-इन श्रेणियां, बाकी सब AI कवर करता है", meta: "<strong>10+ भाषाओं</strong> में काम करता है और आपकी चैट्स के किसी भी विषय को संभालता है।" },
      priv:  { eyebrow: "गोपनीयता", title: "आपका डेटा आपका है", sub: "कोई अकाउंट नहीं, कोई ट्रैकिंग नहीं, चैट व्यवस्थित करने से परे कोई डेटा संग्रह नहीं।", note: "चैट सामग्री आपके ब्राउज़र से कभी नहीं जाती। अस्पष्ट शीर्षकों के लिए, केवल शीर्षक का टेक्स्ट वर्गीकरण के लिए साझा AI सेवा को भेजा जाता है। कोई व्यक्तिगत डेटा, इतिहास या अकाउंट नहीं।", link: "पूरी गोपनीयता नीति" },
      pc1:   { title: "ब्राउज़र में ही रहता है", desc: "आपकी चैट्स आपके सक्रिय लॉगिन सेशन का उपयोग करके Claude.ai से सीधे पढ़ी जाती हैं। किसी भी सर्वर पर कोई डेटा संग्रहीत नहीं होता।" },
      pc2:   { title: "केवल शीर्षक जाते हैं", desc: "जब AI वर्गीकरण की ज़रूरत होती है, केवल <strong>चैट शीर्षक</strong> भेजा जाता है। बातचीत की सामग्री कभी नहीं।" },
      pc3:   { title: "शून्य एनालिटिक्स", desc: "कोई उपयोग ट्रैकिंग, टेलीमेट्री या क्रैश रिपोर्ट नहीं। वर्गीकरण की जरूरत होने पर साझा AI सेवा को केवल अस्पष्ट चैट शीर्षक भेजे जाते हैं।" },
      perms: { title: "Chrome अनुमतियां समझाई गईं" },
      perm1: { desc: "चैट शीर्षक खोजने के लिए आपका खुला Claude.ai टैब पढ़ता है। केवल एक्सटेंशन उपयोग के दौरान सक्रिय।" },
      perm2: { desc: "आपके प्रोजेक्ट नाम ब्राउज़र में स्थानीय रूप से सहेजता है। कोई सर्वर को कुछ नहीं भेजा जाता।" },
      perm3: { desc: "साइडबार पढ़ने और चैट्स को प्रोजेक्ट्स में मूव करने के लिए claude.ai पर व्यवस्था तर्क चलाता है।" },
      faq:   { eyebrow: "अक्सर पूछे जाने वाले सवाल", title: "सामान्य प्रश्न", q1: "क्या यह मुफ़्त है?", a1: "हाँ। Chat Organizer आज मुफ़्त में इंस्टॉल और उपयोग किया जा सकता है। API कुंजी या अलग अकाउंट की जरूरत नहीं।", q2: "क्या मुझे API की चाहिए?", a2: "नहीं। AI वर्गीकरण साझा बैकएंड पर आपके लिए बिना किसी लागत के चलता है। बस एक्सटेंशन इंस्टॉल करें और Organize पर क्लिक करें।", q3: "क्या यह मेरी चैट्स या प्रोजेक्ट्स मिटाएगा?", a3: "कोई भी चैट कभी नहीं मिटाई जाती। व्यवस्था के बाद पूरी तरह खाली प्रोजेक्ट्स साइडबार साफ़ रखने के लिए हटाए जाते हैं, लेकिन हर बातचीत आपके चैट इतिहास में बरकरार रहती है।", q4: "क्या यह अंग्रेज़ी के अलावा अन्य भाषाओं में काम करता है?", a4: "हाँ। कीवर्ड वर्डलिस्ट डच, फ्रेंच, जर्मन, स्पेनिश, इटालियन, पोलिश, रूसी, अरबी, हिंदी और अधिक को कवर करती है। AI फ़ॉलबैक किसी भी भाषा में काम करता है।", q5: "क्या मुझे Claude.ai में लॉग इन होना ज़रूरी है?", a5: "हाँ। एक्सटेंशन चैट्स पढ़ने और मूव करने के लिए आपके सक्रिय Claude.ai ब्राउज़र सेशन का उपयोग करता है। claude.ai खोलें, लॉग इन करें, फिर एक्सटेंशन आइकन पर क्लिक करें।", q6: "क्या मैं व्यवस्था को पूर्ववत कर सकता हूँ?", a6: "स्वचालित रूप से नहीं, लेकिन आप Claude.ai में चैट्स को मैन्युअली वापस मूव कर सकते हैं। इसीलिए पूर्वावलोकन चरण है: Apply पर क्लिक करने से पहले योजना को ध्यान से जाँचें।" },
      cta:   { title: "आज अपनी चैट्स व्यवस्थित करें", sub: "मुफ़्त, कोई सेटअप नहीं, सेकंड में तैयार।", note: "कोई अकाउंट नहीं · कोई API की नहीं · कोई डेटा संग्रह नहीं" },
      footer: { store: "Chrome वेब स्टोर", contact: "संपर्क", privacy: "गोपनीयता नीति", changelog: "चेंजलॉग", copy: "Anthropic या OpenAI से संबद्ध नहीं। Claude, Anthropic PBC का ट्रेडमार्क है; ChatGPT, OpenAI का ट्रेडमार्क है।" }
    },

    id: {
      meta: { title: "Atur obrolan ChatGPT & Claude | Ekstensi Chrome gratis", description: "Chat Organizer menyortir obrolan Claude dan ChatGPT Anda ke dalam proyek dengan satu klik. Ekstensi Chrome gratis, tanpa kunci API dan tanpa akun." },
      nav:  { cta: "Tambahkan ke Chrome" },
      hero: { badge: "Ekstensi Chrome gratis", h1: "Obrolan Claude dan ChatGPT-mu,<br><em>akhirnya terorganisir</em>", sub: "Ratusan obrolan tidak teratur? Chat Organizer memeriksa hingga 200 obrolan terbaru, membuat rencana, dan memindahkan hanya kecocokan yang Anda setujui ke proyek.", stars: "Dibuat untuk pengguna mahir Claude dan ChatGPT", cta: "Tambahkan ke Chrome, gratis", note1: "Tanpa kunci API", note2: "Tanpa akun", note3: "Selesai dalam hitungan detik" },
      stats: { v1: "Gratis", l1: "Tidak perlu akun terpisah", l2: "Topik obrolan dikenali", l3: "Kategori bawaan", l4: "Pengorganisasian lengkap" },
      hiw:  { eyebrow: "Cara kerjanya", title: "Tiga langkah, satu klik", sub: "Kamu melihat rencana lengkap sebelum ada yang dipindahkan. Tidak ada yang terjadi tanpa persetujuanmu." },
      step1: { title: "Klik Organize", desc: "Ekstensi memeriksa hingga 200 obrolan terbaru dan membuat rencana dengan pencocokan kata kunci dan AI. Hanya butuh beberapa detik." },
      step2: { title: "Tinjau rencananya", desc: "Lihat dengan tepat obrolan mana yang akan ke mana sebelum ada yang dipindahkan. Proyek baru ditandai dengan jelas. Obrolan yang tidak cocok ditandai secara terpisah." },
      step3: { title: "Klik Apply", desc: "Semuanya dipindahkan sekaligus. Proyek kosong dibersihkan secara otomatis. Selesai." },
      feat:  { eyebrow: "Fitur", title: "Semua yang kamu butuhkan,<br>tidak lebih", sub: "Sederhana dan cepat. Tidak perlu mengonfigurasi pengaturan, tidak perlu menempel kunci API." },
      feat1: { title: "Pencocokan kata kunci instan", desc: "Daftar kata multibahasa bawaan mengenali sebagian besar obrolan dalam milidetik, tanpa panggilan jaringan dan tanpa penundaan." },
      feat2: { title: "AI untuk yang sulit", desc: "Judul yang ambigu dikategorikan oleh backend AI bersama. Tidak perlu kunci API. Langsung berfungsi." },
      feat3: { title: "Pratinjau sebelum menerapkan", desc: "Lihat rencana lengkap sebelum satu obrolan pun dipindahkan. Batalkan kapan saja dengan satu klik." },
      feat4: { title: "Mode manual", desc: "Tetapkan obrolan tertentu secara manual ketika pengorganisasian otomatis tidak sepenuhnya sesuai alur kerjamu." },
      feat5: { title: "Multibahasa", desc: "Pencocokan kata kunci mencakup bahasa Inggris, Belanda, Prancis, Jerman, Spanyol, Polandia, Rusia, dan lainnya." },
      feat6: { title: "Pembersihan otomatis", desc: "Proyek kosong dihapus secara otomatis setelah setiap pengorganisasian. Sidebar tetap rapi." },
      band:  { title: "Siap untuk beres-beres?", sub: "Gratis, tanpa pengaturan, butuh sekitar 10 detik untuk dipasang.", cta: "Tambahkan ke Chrome" },
      topics: { eyebrow: "Daftar kata", title: "Mengenali apa yang kamu bicarakan", sub: "Daftar kata bawaan mencakup topik obrolan paling umum dalam berbagai bahasa.", sidebar: "kategori bawaan, plus AI yang mencakup semuanya", meta: "Berfungsi dalam <strong>10+ bahasa</strong> dan menangani topik apa pun dari obrolanmu." },
      priv:  { eyebrow: "Privasi", title: "Datamu tetap milikmu", sub: "Tidak ada akun, tidak ada pelacakan, tidak ada pengumpulan data melebihi yang diperlukan untuk mengorganisir obrolanmu.", note: "Konten obrolan tidak pernah meninggalkan browsermu. Untuk judul yang ambigu, hanya teks judul yang dikirim ke layanan AI bersama untuk kategorisasi. Tidak ada data pribadi, tidak ada riwayat, tidak ada akun.", link: "Kebijakan privasi lengkap" },
      pc1:   { title: "Tetap di browsermu", desc: "Obrolanmu dibaca langsung dari Claude.ai menggunakan sesi login aktifmu. Tidak ada data yang disimpan di server mana pun." },
      pc2:   { title: "Hanya judul yang pergi", desc: "Saat kategorisasi AI diperlukan, hanya <strong>judul obrolan</strong> yang dikirim. Tidak pernah isi percakapan." },
      pc3:   { title: "Nol analitik", desc: "Tidak ada pelacakan penggunaan, telemetri, atau laporan kerusakan. Layanan AI bersama hanya menerima judul obrolan ambigu saat kategorisasi diperlukan." },
      perms: { title: "Izin Chrome dijelaskan" },
      perm1: { desc: "Membaca tab Claude.ai yang terbuka untuk mendeteksi judul obrolan. Hanya aktif saat kamu menggunakan ekstensi." },
      perm2: { desc: "Menyimpan nama proyekmu secara lokal di browsermu. Tidak ada yang dikirim ke server mana pun." },
      perm3: { desc: "Menjalankan logika pengorganisasian di claude.ai untuk membaca sidebar dan memindahkan obrolan ke proyek." },
      faq:   { eyebrow: "FAQ", title: "Pertanyaan umum", q1: "Apakah gratis?", a1: "Ya. Chat Organizer dapat dipasang dan digunakan gratis hari ini. Tidak perlu kunci API atau akun terpisah.", q2: "Apakah saya perlu kunci API?", a2: "Tidak. Kategorisasi AI berjalan di backend bersama tanpa biaya untukmu. Cukup pasang ekstensi dan klik Organize.", q3: "Apakah akan menghapus obrolan atau proyekku?", a3: "Tidak ada obrolan yang dihapus. Proyek yang benar-benar kosong setelah pengorganisasian dihapus untuk menjaga sidebar tetap bersih, tetapi setiap percakapan tetap utuh di riwayat obrolanmu.", q4: "Apakah berfungsi dalam bahasa selain Inggris?", a4: "Ya. Daftar kata mencakup bahasa Belanda, Prancis, Jerman, Spanyol, Italia, Polandia, Rusia, Arab, Hindi, dan lainnya. Fallback AI berfungsi dalam bahasa apa pun.", q5: "Apakah saya perlu masuk ke Claude.ai?", a5: "Ya. Ekstensi menggunakan sesi browser Claude.ai aktifmu untuk membaca dan memindahkan obrolan. Buka claude.ai, masuk, lalu klik ikon ekstensi.", q6: "Bisakah saya membatalkan pengorganisasian?", a6: "Tidak secara otomatis, tapi kamu bisa memindahkan obrolan kembali secara manual di Claude.ai. Itulah mengapa langkah pratinjau ada: tinjau rencana dengan cermat sebelum mengklik Apply." },
      cta:   { title: "Organisir obrolanmu hari ini", sub: "Gratis, tanpa pengaturan, selesai dalam detik.", note: "Tanpa akun · Tanpa kunci API · Tanpa pengumpulan data" },
      footer: { store: "Chrome Web Store", contact: "Kontak", privacy: "Kebijakan privasi", changelog: "Perubahan", copy: "Tidak berafiliasi dengan Anthropic atau OpenAI. Claude adalah merek dagang Anthropic, PBC; ChatGPT adalah merek dagang OpenAI." }
    },

    it: {
      meta: { title: "Organizza le chat di ChatGPT e Claude | Estensione gratuita", description: "Chat Organizer ordina automaticamente le tue chat di Claude e ChatGPT in progetti con un clic. Estensione Chrome gratuita, senza chiave API." },
      nav:  { cta: "Aggiungi a Chrome" },
      hero: { badge: "Estensione Chrome gratuita", h1: "Le tue chat di Claude e ChatGPT,<br><em>finalmente organizzate</em>", sub: "Centinaia di chat senza ordine? Chat Organizer analizza fino alle 200 chat più recenti, crea un piano e sposta nei progetti solo le corrispondenze approvate.", stars: "Creato per gli utenti esperti di Claude e ChatGPT", cta: "Aggiungi a Chrome, è gratis", note1: "Nessuna chiave API", note2: "Nessun account necessario", note3: "Pronto in secondi" },
      stats: { v1: "Gratis", l1: "Nessun account separato richiesto", l2: "Argomenti chat riconosciuti", l3: "Categorie integrate", l4: "Organizzazione completa" },
      hiw:  { eyebrow: "Come funziona", title: "Tre passi, un clic", sub: "Vedi il piano completo prima che si muova qualsiasi cosa. Niente succede senza la tua approvazione." },
      step1: { title: "Fai clic su Organizza", desc: "L'estensione analizza fino alle 200 chat più recenti e crea un piano con parole chiave e IA. Richiede pochi secondi." },
      step2: { title: "Rivedi il piano", desc: "Vedi esattamente quale chat va dove prima che si sposti qualcosa. I nuovi progetti sono chiaramente indicati. Le chat non riconosciute vengono segnalate separatamente." },
      step3: { title: "Fai clic su Applica", desc: "Tutto si sposta in una volta. I progetti vuoti vengono eliminati automaticamente. Fatto." },
      feat:  { eyebrow: "Funzionalità", title: "Tutto ciò che serve,<br>niente di più", sub: "Semplice e veloce. Nessuna impostazione da configurare, nessuna chiave API da incollare." },
      feat1: { title: "Corrispondenza istantanea", desc: "Una lista di parole multilingue integrata riconosce la maggior parte delle chat in millisecondi, senza chiamate di rete e senza ritardi." },
      feat2: { title: "IA per i casi difficili", desc: "I titoli ambigui vengono categorizzati da un backend IA condiviso. Nessuna chiave API necessaria. Funziona e basta." },
      feat3: { title: "Anteprima prima di applicare", desc: "Vedi il piano completo prima che si sposti una singola chat. Annulla in qualsiasi momento con un clic." },
      feat4: { title: "Modalità manuale", desc: "Assegna chat specifiche a mano quando l'organizzazione automatica non si adatta perfettamente al tuo flusso di lavoro." },
      feat5: { title: "Multilingue", desc: "La corrispondenza di parole chiave copre inglese, olandese, francese, tedesco, spagnolo, polacco, russo e altro." },
      feat6: { title: "Pulizia automatica", desc: "I progetti vuoti vengono rimossi automaticamente dopo ogni organizzazione. La tua barra laterale rimane ordinata." },
      band:  { title: "Pronto a fare ordine?", sub: "Gratuito, nessuna configurazione, circa 10 secondi per installare.", cta: "Aggiungi a Chrome" },
      topics: { eyebrow: "Lista di parole", title: "Riconosce di cosa parli", sub: "La lista di parole integrata copre gli argomenti di chat più comuni in diverse lingue.", sidebar: "categorie integrate, più IA per tutto il resto", meta: "Funziona in <strong>10+ lingue</strong> e gestisce qualsiasi argomento delle tue chat." },
      priv:  { eyebrow: "Privacy", title: "I tuoi dati sono tuoi", sub: "Nessun account, nessun tracciamento, nessuna raccolta dati oltre a quanto necessario per organizzare le tue chat.", note: "Il contenuto delle chat non lascia mai il tuo browser. Per i titoli ambigui, solo il testo del titolo viene inviato a un servizio IA condiviso per la categorizzazione. Nessun dato personale, nessuna cronologia, nessun account.", link: "Informativa sulla privacy completa" },
      pc1:   { title: "Rimane nel tuo browser", desc: "Le tue chat vengono lette direttamente da Claude.ai usando la tua sessione di accesso attiva. Nessun dato viene memorizzato su alcun server." },
      pc2:   { title: "Escono solo i titoli", desc: "Quando è necessaria la categorizzazione IA, viene inviato solo il <strong>titolo della chat</strong>. Mai il contenuto della conversazione." },
      pc3:   { title: "Zero analytics", desc: "Nessun tracciamento dell'utilizzo, telemetria o rapporto di errori. Il servizio IA condiviso riceve solo i titoli ambigui quando serve la categorizzazione." },
      perms: { title: "Permessi Chrome spiegati" },
      perm1: { desc: "Legge la scheda Claude.ai aperta per rilevare i titoli delle chat. Attivo solo mentre usi l'estensione." },
      perm2: { desc: "Salva i nomi dei tuoi progetti localmente nel tuo browser. Nulla viene inviato a nessun server." },
      perm3: { desc: "Esegue la logica di organizzazione su claude.ai per leggere la barra laterale e spostare le chat nei progetti." },
      faq:   { eyebrow: "FAQ", title: "Domande frequenti", q1: "È gratuito?", a1: "Sì. Chat Organizer può essere installato e usato gratuitamente oggi. Non servono una chiave API o un account separato.", q2: "Ho bisogno di una chiave API?", a2: "No. La categorizzazione IA funziona su un backend condiviso senza costi per te. Installa l'estensione e fai clic su Organizza.", q3: "Eliminerà le mie chat o i miei progetti?", a3: "Nessuna chat viene mai eliminata. I progetti completamente vuoti dopo l'organizzazione vengono rimossi per mantenere pulita la barra laterale, ma ogni conversazione rimane intatta nella cronologia.", q4: "Funziona in lingue diverse dall'inglese?", a4: "Sì. La lista di parole copre olandese, francese, tedesco, spagnolo, italiano, polacco, russo, arabo, hindi e altro. Il fallback IA funziona in qualsiasi lingua.", q5: "Devo essere connesso a Claude.ai?", a5: "Sì. L'estensione usa la tua sessione browser attiva su Claude.ai per leggere e spostare le chat. Apri claude.ai, accedi, poi fai clic sull'icona dell'estensione.", q6: "Posso annullare un'organizzazione?", a6: "Non automaticamente, ma puoi spostare le chat manualmente su Claude.ai. Ecco perché esiste il passaggio di anteprima: esamina attentamente il piano prima di fare clic su Applica." },
      cta:   { title: "Organizza le tue chat oggi", sub: "Gratuito, nessuna configurazione, pronto in secondi.", note: "Nessun account · Nessuna chiave API · Nessuna raccolta dati" },
      footer: { store: "Chrome Web Store", contact: "Contatto", privacy: "Informativa sulla privacy", changelog: "Note di versione", copy: "Non affiliato con Anthropic né OpenAI. Claude è un marchio di Anthropic, PBC; ChatGPT è un marchio di OpenAI." }
    },

    tr: {
      meta: { title: "ChatGPT ve Claude sohbetlerini düzenle | Ücretsiz eklenti", description: "Chat Organizer, Claude ve ChatGPT sohbetlerini tek tıkla projelere ayırır. Ücretsiz Chrome eklentisi, API anahtarı ve hesap gerekmez." },
      nav:  { cta: "Chrome'a Ekle" },
      hero: { badge: "Ücretsiz Chrome Uzantısı", h1: "Claude ve ChatGPT sohbetlerin,<br><em>sonunda düzene girdi</em>", sub: "Yüzlerce sohbet düzensiz mi? Chat Organizer en son 200 sohbeti inceler, bir plan oluşturur ve yalnızca onayladığınız eşleşmeleri projelere taşır.", stars: "Claude ve ChatGPT ileri düzey kullanıcıları için geliştirildi", cta: "Chrome'a Ekle, ücretsiz", note1: "API anahtarı gerekmez", note2: "Hesap gerekmez", note3: "Saniyeler içinde hazır" },
      stats: { v1: "Ücretsiz", l1: "Ayrı hesap gerekmez", l2: "Tanınan sohbet konusu", l3: "Yerleşik kategori", l4: "Tam düzenleme" },
      hiw:  { eyebrow: "Nasıl çalışır", title: "Üç adım, bir tık", sub: "Her şey taşınmadan önce tam planı görürsün. Onayın olmadan hiçbir şey olmaz." },
      step1: { title: "Organize'e tıkla", desc: "Uzantı en son 200 sohbeti inceler ve anahtar kelime eşleştirme ile yapay zeka kullanarak bir taşıma planı oluşturur. Birkaç saniye sürer." },
      step2: { title: "Planı incele", desc: "Herhangi bir şey taşınmadan önce tam olarak hangi sohbetin nereye gideceğini gör. Yeni projeler açıkça işaretlenir. Eşleşmeyen sohbetler ayrıca belirtilir." },
      step3: { title: "Uygula'ya tıkla", desc: "Her şey bir seferde taşınır. Boş projeler otomatik olarak temizlenir. Tamamlandı." },
      feat:  { eyebrow: "Özellikler", title: "İhtiyacın olan her şey,<br>fazlası değil", sub: "Basit ve hızlı. Ayar yapma yok, API anahtarı yapıştırma yok." },
      feat1: { title: "Anında anahtar kelime eşleştirme", desc: "Yerleşik çok dilli kelime listesi, ağ çağrısı olmadan ve gecikme olmadan çoğu sohbeti milisaniyeler içinde tanır." },
      feat2: { title: "Zor olanlar için yapay zeka", desc: "Belirsiz başlıklar paylaşılan bir yapay zeka arka ucu tarafından kategorilere ayrılır. API anahtarı gerekmez. Sadece çalışır." },
      feat3: { title: "Uygulamadan önce önizleme", desc: "Tek bir sohbet taşınmadan önce tam planı gör. İstediğin zaman tek tıkla iptal et." },
      feat4: { title: "Manuel mod", desc: "Otomatik düzenleme iş akışına tam uymadığında belirli sohbetleri manuel olarak ata." },
      feat5: { title: "Çok dilli", desc: "Anahtar kelime eşleştirme İngilizce, Felemenkçe, Fransızca, Almanca, İspanyolca, Lehçe, Rusça ve daha fazlasını kapsar." },
      feat6: { title: "Otomatik temizleme", desc: "Boş projeler her düzenleme sonrasında otomatik olarak kaldırılır. Kenar çubuğun düzenli kalır." },
      band:  { title: "Temizlemeye hazır mısın?", sub: "Ücretsiz, kurulum yok, yükleme yaklaşık 10 saniye sürer.", cta: "Chrome'a Ekle" },
      topics: { eyebrow: "Kelime listesi", title: "Ne hakkında konuştuğunu tanır", sub: "Yerleşik kelime listesi birçok dilde en yaygın sohbet konularını kapsar.", sidebar: "yerleşik kategoriler, artı diğer her şeyi kapsayan yapay zeka", meta: "<strong>10'dan fazla dilde</strong> çalışır ve sohbetlerindeki her konuyu işler." },
      priv:  { eyebrow: "Gizlilik", title: "Verin senin", sub: "Hesap yok, takip yok, sohbetlerini düzenlemek için gerekenin ötesinde veri toplama yok.", note: "Sohbet içeriği asla tarayıcını terk etmez. Belirsiz başlıklar için yalnızca başlık metni kategorize edilmek üzere paylaşılan bir yapay zeka hizmetine gönderilir. Kişisel veri yok, geçmiş yok, hesap yok.", link: "Tam gizlilik politikası" },
      pc1:   { title: "Tarayıcında kalır", desc: "Sohbetlerin aktif oturum açma oturumun kullanılarak doğrudan Claude.ai'den okunur. Hiçbir sunucuda veri depolanmaz." },
      pc2:   { title: "Yalnızca başlıklar gider", desc: "Yapay zeka kategorilendirmesi gerektiğinde yalnızca <strong>sohbet başlığı</strong> gönderilir. Konuşma içeriği asla gönderilmez." },
      pc3:   { title: "Sıfır analitik", desc: "Kullanım takibi, telemetri veya kilitlenme raporu yoktur. Paylaşılan yapay zeka hizmeti yalnızca sınıflandırma gerektiğinde belirsiz sohbet başlıklarını alır." },
      perms: { title: "Chrome izinleri açıklandı" },
      perm1: { desc: "Sohbet başlıklarını tespit etmek için açık Claude.ai sekmeni okur. Yalnızca uzantıyı kullanırken etkindir." },
      perm2: { desc: "Proje adlarını tarayıcında yerel olarak kaydeder. Hiçbir sunucuya hiçbir şey gönderilmez." },
      perm3: { desc: "Kenar çubuğunu okumak ve sohbetleri projelere taşımak için claude.ai üzerinde düzenleme mantığını çalıştırır." },
      faq:   { eyebrow: "SSS", title: "Sık sorulan sorular", q1: "Ücretsiz mi?", a1: "Evet. Chat Organizer bugün ücretsiz olarak kurulup kullanılabilir. API anahtarı veya ayrı hesap gerekmez.", q2: "API anahtarına ihtiyacım var mı?", a2: "Hayır. Yapay zeka kategorilendirmesi sana herhangi bir maliyet olmadan paylaşılan bir arka uçta çalışır. Uzantıyı yükle ve Organize'e tıkla.", q3: "Sohbetlerimi veya projelerimi siler mi?", a3: "Hiçbir sohbet silinmez. Düzenleme sonrasında tamamen boş olan projeler kenar çubuğunu düzenli tutmak için kaldırılır, ancak her konuşma sohbet geçmişinde sağlam kalır.", q4: "İngilizce dışında başka dillerde de çalışıyor mu?", a4: "Evet. Kelime listesi Felemenkçe, Fransızca, Almanca, İspanyolca, İtalyanca, Lehçe, Rusça, Arapça, Hintçe ve daha fazlasını kapsar. Yapay zeka yedek sistemi herhangi bir dilde çalışır.", q5: "Claude.ai'ye giriş yapmam gerekiyor mu?", a5: "Evet. Uzantı sohbetleri okumak ve taşımak için aktif Claude.ai tarayıcı oturumunu kullanır. claude.ai'yi aç, giriş yap, ardından uzantı simgesine tıkla.", q6: "Bir düzenlemeyi geri alabilir miyim?", a6: "Otomatik olarak geri alınamaz, ancak sohbetleri Claude.ai'de manuel olarak geri taşıyabilirsin. Bu nedenle önizleme adımı var: Uygula'ya tıklamadan önce planı dikkatlice incele." },
      cta:   { title: "Sohbetlerini bugün düzenle", sub: "Ücretsiz, kurulum yok, saniyeler içinde hazır.", note: "Hesap yok · API anahtarı yok · Veri toplama yok" },
      footer: { store: "Chrome Web Mağazası", contact: "İletişim", privacy: "Gizlilik Politikası", changelog: "Değişiklikler", copy: "Anthropic veya OpenAI ile bağlantısı yoktur. Claude, Anthropic PBC'nin; ChatGPT, OpenAI'nin ticari markasıdır." }
    }
  };

  function resolve(obj, key) {
    return key.split('.').reduce(function(o, k) { return o && o[k]; }, obj);
  }

  function applyLang(lang) {
    var t = T[lang] || T.en;
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    // Localized <title> + meta description (falls back to English when a
    // language has no meta block yet). Keeps each ?lang= URL self-describing.
    var meta = t.meta || T.en.meta;
    if (meta) {
      if (meta.title) document.title = meta.title;
      var md = document.querySelector('meta[name="description"]');
      if (md && meta.description) md.setAttribute('content', meta.description);
    }

    // Self-referential canonical per URL. Without this every ?lang= variant
    // canonicalized to the apex, telling Google the localized pages were just
    // duplicates of the English homepage, which suppressed their own snippets
    // in non-English results. Base it on the actual URL param (not the resolved
    // lang) so the bare apex stays apex-canonical.
    // Legacy ?lang=xx URLs are already indexed. Point their canonical at the
    // static /xx/ page so Google consolidates the old URL into the new one
    // instead of treating them as competing duplicates. Static pages ship the
    // correct canonical in their raw HTML and are left alone.
    if (!STATIC_LANG) {
      var urlLang = new URLSearchParams(window.location.search).get('lang');
      var canon = document.querySelector('link[rel="canonical"]');
      if (canon) {
        canon.setAttribute('href', 'https://chat-organizer.com/' +
          (urlLang && T[urlLang] && urlLang !== 'en' ? urlLang + '/' : ''));
      }
    }

    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var val = resolve(t, el.dataset.i18n);
      if (val !== undefined) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
      var val = resolve(t, el.dataset.i18nHtml);
      if (val !== undefined) el.innerHTML = val;
    });

    // Color the platform names in the hero headline (Claude orange, ChatGPT green)
    // in every language. Runs after the i18n pass re-sets the raw headline text.
    var heroH1 = document.querySelector('[data-i18n-html="hero.h1"]');
    if (heroH1) {
      heroH1.innerHTML = heroH1.innerHTML
        .replace(/ChatGPT/g, '<span class="brand-chatgpt">ChatGPT</span>')
        .replace(/Claude/g, '<span class="brand-claude">Claude</span>');
    }

    document.querySelectorAll('.lang-option').forEach(function(btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    var cur = document.querySelector('.lang-current');
    if (cur) cur.textContent = lang.toUpperCase();

    try { localStorage.setItem('co-lang', lang); } catch(e) {}
  }

  // Set by build_i18n.py on the pre-rendered /{lang}/ pages. When present the
  // markup is already translated in the raw HTML, so the runtime pass must not
  // run again (it would double-wrap the hero brand spans and stomp the
  // self-referential canonical).
  var STATIC_LANG = document.documentElement.getAttribute('data-static-lang');

  function getLang() {
    if (STATIC_LANG && T[STATIC_LANG]) return STATIC_LANG;
    var params = new URLSearchParams(window.location.search);
    var p = params.get('lang');
    if (p && T[p]) return p;
    // No navigator.language fallback: the apex is the English canonical and
    // each other language has its own indexable URL, so auto-switching here
    // would serve non-English content at an English canonical.
    return 'en';
  }

  // Wire up switcher (with keyboard support: Escape closes, focus returns to button)
  var btn  = document.querySelector('.lang-btn');
  var menu = document.querySelector('.lang-menu');
  if (btn && menu) {
    function closeMenu() {
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
    btn.setAttribute('aria-expanded', 'false');
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      var open = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
      if (open) {
        var active = menu.querySelector('.lang-option.active');
        if (active) active.focus();
      }
    });
    document.addEventListener('click', closeMenu);
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && menu.classList.contains('open')) {
        closeMenu();
        btn.focus();
      }
    });
    document.querySelectorAll('.lang-option').forEach(function(opt) {
      opt.addEventListener('click', function() {
        try { localStorage.setItem('co-lang', opt.dataset.lang); } catch(e) {}
        // Options are real <a href="/xx/"> links now, so let the browser
        // navigate to the pre-rendered page instead of swapping text in place.
        if (!opt.getAttribute('href')) { applyLang(opt.dataset.lang); }
        closeMenu();
      });
    });
  }

  if (STATIC_LANG) {
    // Already translated at build time; just mark the active switcher entry.
    document.querySelectorAll('.lang-option').forEach(function(btn) {
      btn.classList.toggle('active', btn.dataset.lang === STATIC_LANG);
    });
    var curEl = document.querySelector('.lang-current');
    if (curEl) curEl.textContent = STATIC_LANG.toUpperCase();
  } else {
    applyLang(getLang());
  }
})();
