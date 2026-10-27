---
layout: ../layouts/Legal.astro
title: Privacy Policy
---

# Privacy Policy for Owloud

**Last updated: October 27, 2026**

This Privacy Policy explains how **Carlos Islas** ("we", "us",
or "our") collects, uses, and protects your information when you use the
**Owloud** mobile application for iPhone and Android (the "App"). Owloud is an English-learning app where
you listen to audiobooks and short stories with synchronized text, tap words to
see definitions, save words to a personal vocabulary, and practice with
flashcards and quizzes.

By using the App, you agree to this Privacy Policy. If you do not agree, please
do not use the App.

---

## 1. Information We Collect

### a) Information you give us

- **Account information (optional).** You can use the App without an account.
  If you create one with email, we collect your **email address** and
  **password**, and we email you a verification code to confirm the address.
  Authentication is handled by our backend provider, Supabase. Your password is
  stored by Supabase in a securely hashed form — we never see or store your
  password in plain text.
- **Sign in with Apple.** If you sign in with Apple (available on iPhone),
  Apple shares your **name**
  and **email address** (or an Apple-provided private relay email if you choose
  to hide your real one).
- **Sign in with Google.** If you sign in with Google, Google shares basic
  profile information such as your **name** and **email address**.
- **Onboarding answers.** During onboarding you may give us your **name**, your
  **native language** (which also sets the App's language), your **English
  level**, the **story or books you pick**, **how you heard about Owloud**,
  your **daily listening goal**, and whether you want a daily reminder. These
  answers are stored on your device. Two of them, how you heard about Owloud
  and the story or books you pick, are also sent to our usage analytics (see
  below).

### b) Information created as you use the App

- **Learning activity.** Words you save to your vocabulary, the notes you add
  to them, the collections you create, your flashcard practice and mastery
  progress, your answers to practice exercises and quizzes, chapters and
  stories you complete, books you mark as favorites, your best quiz score for
  each chapter, and your listening and reading time.
- **Streak and progress history.** The days you were active (up to about the
  last two years), which the streak screen's calendar uses, and a short per-day
  history (roughly the last 60 days) of how long you listened and how many
  flashcards you reviewed, which the progress charts use.
- **Playback and downloads.** Your playback position in each chapter and the
  list of chapters you have downloaded for offline use.
- **Plan usage.** Whether you have Owloud Pro, the limited-time offers you
  have been shown, and any chapters you unlocked with Feathers in earlier
  versions of the App.
- **Preferences.** Your English level, daily goal, reminder settings, App
  language, theme (light/dark), and flashcard settings.
- **Reports and feedback you send us.** If you report a problem, send
  feedback, or flag a wrong translation, we receive the report type and
  category, your message, your **name** (as set in your profile), your account
  ID if you are signed in, and the App version. If you choose to include an
  **email address** so we can reply, we receive it too. A translation report
  also includes the word, the translation that was shown, and the book it came
  from. Reports are stored on our backend.

### c) Information collected automatically

- **Word lookups.** When you tap a word, its translation, pronunciation, part
  of speech, and (when available) a pronunciation audio clip are served from
  our own backend, which was built in bulk from public dictionary data — no
  word is sent live to a third-party dictionary service. When you request a
  Spanish translation that isn't already in our backend — of a word, or of a
  sentence from the book you are reading — that text is sent to our
  translation service, which uses **DeepL** and stores the result so the same
  text does not need to be translated twice. When no curated example sentence
  is available for a word, the App searches **Tatoeba** (see Section 4) for
  one in real time. In all cases, only the word or sentence itself is sent —
  never your name or account details.
- **Pronunciation.** When a recording is not available for a word, the App uses
  your device's built-in text-to-speech to pronounce it. This happens on your
  device and sends nothing to us.
- **Usage analytics (PostHog).** We collect a small set of usage events — such
  as opening the App, the onboarding steps you view, your answer to Apple's
  tracking prompt, starting or completing a chapter, saving a word, viewing
  the paywall or an offer, and completing a purchase — to
  understand how the App is used and to improve it. PostHog also records basic
  device and App information (such as device model, operating system, App
  version, and language) and an approximate location (country or city)
  derived from your IP address. Events are linked to a random identifier, and
  to your account ID when you are signed in. They do not include the words you
  save, your notes, or your messages.
- **Crash and performance data (Sentry).** If the App crashes or hits a
  technical error, a report (crash trace, device model, operating system
  version, App version) is sent to Sentry so we can find and fix the problem.
  Sentry also receives performance measurements, such as how long screens and
  network requests take to load.
- **Purchase information.** Subscriptions are sold and charged by **Apple**
  (App Store, on iPhone) or **Google** (Google Play, on Android) and managed
  through **RevenueCat**, which receives your purchase receipt and
  subscription status, linked to your account ID when you are signed in. We
  never see your payment card details.
- **Ad measurement (Meta).** We advertise Owloud on Facebook and Instagram;
  the App itself shows no ads. To learn which of our ads work, **Meta** is
  told about a few moments: when the App is installed and opened (reported by
  Meta's SDK inside the App), when you create an account or finish onboarding
  (reported by the App), and when you start a free trial, subscribe, or renew
  (reported by **RevenueCat** from its servers, with the plan and its price).
  With these events Meta receives device and App information (such as device
  model, operating system, App version, and language), your IP address, a
  random ID that Meta's SDK creates for this installation, information about
  how the App was installed, and an ID for your purchases (your account ID if
  you are signed in). It also receives your device's **advertising
  identifier**: on iPhone, only if you allow tracking when Apple asks; on
  Android, unless you delete it in your device settings (see Section 8). On
  iPhone, RevenueCat also sends the identifier Apple assigns to the App on your
  device. These events never include your name, your email address, or the
  words you save.
- **App updates (Expo).** The App checks Expo's servers for updates when it
  starts. Like any web server, Expo receives your IP address, along with your
  App version, your device platform, and a random installation identifier.
- **Technical operation.** Standard information needed to operate the App and our
  backend (for example, network requests to load books, chapters, and audio).

We do **not** collect your precise location, your contacts, or your photos.
Apart from the ad measurement with Meta described above, which on iPhone uses
your advertising identifier only with your permission, we do not track you
across other companies' apps or websites.

---

## 2. Where Your Data Is Stored

- **On your device.** Your onboarding answers and all of your learning data —
  saved words, notes, collections, flashcard progress, quiz scores, stats,
  streaks, playback position, downloaded chapters, and preferences — are stored
  **locally on your device** and are not uploaded to our servers. We do not
  back up or sync this data, so it is not restored when you reinstall the App
  or sign in on another device. If you delete the App, this local data is
  removed with it.
- **On our backend (Supabase).** Your **account credentials and login session**
  are managed by Supabase so you can sign in, and **reports you submit** are
  stored there. Book, chapter, story, and quiz information also comes from this
  backend.
- **On our content delivery network (Cloudflare).** The audiobook audio,
  synchronized transcripts, and cover images are delivered through
  **Cloudflare**. Like any web server, Cloudflare receives your device's IP
  address and standard request information when it serves these files.
- **With our analytics, crash-reporting, and advertising providers.** Usage
  events are processed by PostHog, crash reports by Sentry, and ad-measurement
  events by Meta (see Section 4).

---

## 3. How We Use Your Information

We use your information to:

- Create and secure your account and keep you signed in, if you have one.
- Provide the core features: audio playback, synchronized text, word
  definitions, saved vocabulary, flashcards, practice exercises, quizzes, and
  progress tracking.
- Remember your preferences and suggest books that match your English level.
- Apply the free plan (for example, the free chapters and the saved-word
  limit) and unlock Owloud Pro features when you subscribe.
- Send you optional **reminder notifications** if you enable them (see Section 6).
- Answer and act on the reports and feedback you send us.
- Understand how the App is used (analytics), fix crashes, and improve the App.
- Measure and improve our ads on Facebook and Instagram (for example, how many
  people install the App, sign up, or subscribe after seeing one), so they
  reach more people who may find Owloud useful.

We do **not** sell your personal information, and the App does not show ads.
We share the limited data described in Section 1 with Meta only to measure and
improve our own ads.

---

## 4. Third-Party Services

The App relies on the following third parties. Each has its own privacy policy
that governs how it handles data:

| Service                                        | Purpose                                               | What it may receive                                                                                                                                        |
| ---------------------------------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Supabase**                                   | Authentication, content backend, and reports          | Your email, hashed password, login session, and the reports you submit                                                                                     |
| **Cloudflare**                                 | Delivering audio, transcripts, and cover images (CDN) | Your IP address and standard request data when content loads                                                                                               |
| **Resend**                                     | Sending account emails (verification codes)           | Your email address                                                                                                                                         |
| **Expo (EAS Update)**                          | Delivering App updates                                | Your IP address, App version, device platform, random installation ID                                                                                      |
| **Apple (Sign in with Apple)**                 | Optional login on iPhone                              | Your name and email (or a private relay email)                                                                                                             |
| **Google (Google Sign-In)**                    | Optional login                                        | Your name and email                                                                                                                                        |
| **Apple App Store / Google Play / RevenueCat** | Subscription billing and management                   | Purchase receipt and subscription status (no card details), your account ID, device identifiers for ad measurement                                         |
| **Meta** (Facebook SDK)                        | Measuring our ads on Facebook and Instagram           | Installs, App opens, sign-ups, onboarding completion, trials and purchases; device and App information, IP address, advertising identifier (see Section 1) |
| **PostHog**                                    | Usage analytics                                       | Usage events, device and App information, approximate location from your IP                                                                                |
| **Sentry**                                     | Crash, error, and performance reporting               | Crash traces, performance data, device model, OS and App version                                                                                           |
| **Tatoeba**                                    | Example sentences (when no curated example exists)    | The individual word you tap                                                                                                                                |
| **DeepL** (via our translation service)        | Word and sentence translations                        | The word or sentence you ask to translate                                                                                                                  |

We encourage you to review the privacy policies of these providers. We are not
responsible for the privacy practices of third-party services.

---

## 5. Legal Bases for Processing (for users in the EEA/UK)

Where the GDPR applies, we process your data on these legal bases:

- **Performance of a contract** — to provide the App and its features,
  including your subscription.
- **Consent** — for optional reminder notifications and, on iPhone, for
  sharing your advertising identifier with Meta (Apple's tracking prompt). You
  can withdraw your consent at any time (see Section 8).
- **Legitimate interests** — to keep the App secure, to measure how the App is
  used (analytics), to fix crashes and errors, to improve it, and to measure
  how well our ads work.

---

## 6. Notifications

If you enable reminders, the App schedules **local notifications** on your
device: a daily reminder at the time you choose and, when your streak is about
to reset, a reminder to keep it. Some days the daily reminder mentions the
book you are listening to or one of the week's free short stories; if you
haven't opened the App for a few days, it says so, and after ten days the
reminders stop until you open the App again. They are scheduled on your device
from your own progress, not sent from our servers. You can turn them off at any
time in the App or in your
device's system settings. Granting notification permission is always optional.

---

## 7. Data Retention

- **Local data** remains on your device until you delete it in the App or
  uninstall the App. Chapters downloaded for offline use are also removed when
  your Owloud Pro subscription ends.
- **Account data** is retained for as long as your account exists. When you
  delete your account in the App (**Profile → Delete account**) or ask us to by
  email (see [Delete your account](/delete-account)), we delete your account
  information from our backend, except where we must keep certain records to
  comply with the law. Deleting it in the App also clears your local data and
  downloads from that device. If you signed in with Apple, we also ask Apple
  to revoke the App's access to your Apple ID.
- **Reports** you submit are kept for as long as needed to review and fix the
  reported problem. When you delete your account, we keep them but remove your
  name and account ID from them. If a report includes an email address you
  typed and you want it removed, write to us.
- **Purchase records** are kept by Apple, Google, and RevenueCat as tax and
  accounting laws require.
- **Analytics, crash, and ad-measurement data** are retained by PostHog,
  Sentry, and Meta according to their own retention policies.

---

## 8. Your Rights and Choices

Depending on where you live, you may have the right to:

- Access the personal data we hold about you.
- Correct inaccurate data.
- Delete your data ("right to be forgotten").
- Object to or restrict certain processing.
- Withdraw consent for notifications or tracking.
- Request a copy of your data (data portability).

You can also control your device's advertising identifier yourself:

- **iPhone:** the App asks before using it, and you can change your answer at
  any time in **Settings → Privacy & Security → Tracking**.
- **Android:** you can delete or reset it in your device's settings (for
  example, **Settings → Privacy → Ads** or **Settings → Google → Ads**,
  depending on your device).

To exercise any of these rights, contact us at **support@owloud.app**.
You can also remove most of your data yourself by deleting your account in the
App or uninstalling it.

---

## 9. Children's Privacy

The App is not directed to children under **13**,
and we do not knowingly collect personal data from them. If you believe a child
has provided us personal data, please contact us and we will delete it.

---

## 10. Data Security

We use reasonable technical and organizational measures to protect your data,
including encrypted connections (HTTPS) and a managed authentication provider.
However, no method of transmission or storage is 100% secure, and we cannot
guarantee absolute security.

---

## 11. International Data Transfers

Your data may be processed on servers located outside your country,
including by our providers listed in Section 4. Where required, we rely on
appropriate safeguards for such transfers.

---

## 12. Changes to This Policy

We may update this Privacy Policy from time to time. When we do, we will change
the "Last updated" date at the top. Significant changes will be communicated
within the App where appropriate. Continued use of the App after changes means
you accept the updated policy.

---

## 13. Contact Us

If you have questions about this Privacy Policy or your data, contact us at:

- **Carlos Islas**
- **Email:** support@owloud.app
