---
layout: ../layouts/Legal.astro
title: Privacy Policy
---

# Privacy Policy for Owloud

**Last updated: July 17, 2026**

This Privacy Policy explains how **Carlos Islas** ("we", "us",
or "our") collects, uses, and protects your information when you use the
**Owloud** mobile application (the "App"). Owloud is an English-learning app where
you listen to audiobooks with synchronized text, tap words to see definitions,
save words to a personal vocabulary, and practice with flashcards.

By using the App, you agree to this Privacy Policy. If you do not agree, please
do not use the App.

---

## 1. Information We Collect

### a) Information you give us

- **Account information.** When you create an account, we collect your **email
  address** and **password**. Authentication is handled by our backend provider,
  Supabase. Your password is stored by Supabase in a securely hashed form — we
  never see or store your password in plain text.
- **Sign in with Apple.** If you sign in with Apple, Apple shares your **name**
  and **email address** (or an Apple-provided private relay email if you choose
  to hide your real one).
- **Sign in with Google.** If you sign in with Google, Google shares basic
  profile information such as your **name** and **email address**.
- **Profile and onboarding details.** During onboarding you may give us your
  **name**, your **English level**, your **learning goals**, and the **topics**
  you are interested in.

### b) Information created as you use the App

- **Learning activity.** Words you save to your vocabulary, your flashcard
  practice and mastery progress, chapters you complete, books you mark as
  favorites, quiz results, and your reading/listening time, daily streaks, and
  activity dates.
- **Playback and downloads.** Your current playback position and the list of
  chapters you have downloaded for offline use.
- **Preferences.** Your daily goal, reminder settings, and theme (light/dark).
- **Reports you send us.** If you report a problem (for example a wrong
  definition), we receive the report type and category, your message, your
  **name** (as set in your profile), your account ID if you are signed in, and
  the App version. Reports are stored on our backend.

### c) Information collected automatically

- **Dictionary and translation lookups.** When you tap a word to see its
  definition, that single word may be sent to a third-party dictionary service
  (see Section 4) to fetch the definition, pronunciation, and example. When you
  request a Spanish translation, the word is sent to our translation service,
  which uses **DeepL** and stores the result in a shared translation table so
  the same word does not need to be translated twice. Only the word itself is
  sent — never your name or account details.
- **Usage analytics (PostHog).** We collect a small set of usage events — such
  as opening the App, starting or completing a chapter, viewing the paywall,
  and completing a purchase — to understand how the App is used and to improve
  it. When you are signed in, these events are linked to your account ID. They
  do not include the content of your saved vocabulary or your messages.
- **Crash and error data (Sentry).** If the App crashes or hits a technical
  error, a report (crash trace, device model, operating system version, App
  version) is sent to Sentry so we can find and fix the problem.
- **Purchase information.** Subscriptions are sold and charged by Apple and
  managed through **RevenueCat**, which receives your purchase receipt and
  subscription status. We never see your payment card details.
- **Technical operation.** Standard information needed to operate the App and our
  backend (for example, network requests to load books, chapters, and audio).

We do **not** collect your precise location, your contacts, or your photos.

---

## 2. Where Your Data Is Stored

- **On your device.** Most of your learning data — saved words, flashcard
  progress, stats, streaks, playback position, downloaded chapters, and
  preferences — is stored **locally on your device** and is not uploaded to our
  servers. If you delete the App, this local data is removed with it.
- **On our backend (Supabase).** Your **account credentials and login session**
  are managed by Supabase so you can sign in, and **reports you submit** are
  stored there. The books, chapters, audio, and quiz content you access are
  also delivered from this backend.
- **With our analytics and crash-reporting providers.** Usage events are
  processed by PostHog and crash reports by Sentry (see Section 4).

---

## 3. How We Use Your Information

We use your information to:

- Create and secure your account and keep you signed in.
- Provide the core features: audio playback, synchronized text, word
  definitions, saved vocabulary, flashcards, quizzes, and progress tracking.
- Remember your preferences and personalize content recommendations based on
  your level, goals, and topics.
- Send you optional **reminder notifications** if you enable them (see Section 6).
- Process your subscription and unlock premium features.
- Understand how the App is used (analytics), fix crashes, and improve the App.

We do **not** sell your personal information.

---

## 4. Third-Party Services

The App relies on the following third parties. Each has its own privacy policy
that governs how it handles data:

| Service                                           | Purpose                                      | What it may receive                                               |
| ------------------------------------------------- | -------------------------------------------- | ----------------------------------------------------------------- |
| **Supabase**                                      | Authentication, content backend, and reports | Your email, hashed password, login session, and submitted reports |
| **Resend**                                        | Sending account emails (verification codes)  | Your email address                                                |
| **Apple (Sign in with Apple)**                    | Optional login                               | Your name and email (or a private relay email)                    |
| **Google (Google Sign-In)**                       | Optional login                               | Your name and email                                               |
| **Apple App Store / RevenueCat**                  | Subscription billing and management          | Purchase receipt and subscription status (no card details)        |
| **PostHog**                                       | Usage analytics                              | Usage events, linked to your account ID when signed in            |
| **Sentry**                                        | Crash and error reporting                    | Crash traces, device model, OS and App version                    |
| **Free Dictionary API** (`api.dictionaryapi.dev`) | Word definitions                             | The individual word you tap                                       |
| **DeepL** (via our translation service)           | Word translations                            | The individual word you translate                                 |

We encourage you to review the privacy policies of these providers. We are not
responsible for the privacy practices of third-party services.

---

## 5. Legal Bases for Processing (for users in the EEA/UK)

Where the GDPR applies, we process your data on these legal bases:

- **Performance of a contract** — to provide the App and its features.
- **Consent** — for optional reminder notifications, which you can withdraw at
  any time.
- **Legitimate interests** — to keep the App secure, to measure how the App is
  used (analytics), to fix crashes and errors, and to improve it.

---

## 6. Notifications

If you enable reminders, the App schedules **local notifications** on your device
to help you keep your learning streak. You can turn these off at any time in the
App or in your device's system settings. Granting notification permission is
always optional.

---

## 7. Data Retention

- **Local data** remains on your device until you delete it in the App or
  uninstall the App.
- **Account data** is retained for as long as your account exists. When you
  delete your account in the App, we delete your account information from our
  backend, except where we must keep certain records to comply with the law.
- **Reports** you submit are kept for as long as needed to review and fix the
  reported problem. They are not automatically deleted when you delete your
  account.
- **Analytics and crash data** are retained by PostHog and Sentry according to
  their own retention policies.

---

## 8. Your Rights

Depending on where you live, you may have the right to:

- Access the personal data we hold about you.
- Correct inaccurate data.
- Delete your data ("right to be forgotten").
- Object to or restrict certain processing.
- Withdraw consent for notifications.
- Request a copy of your data (data portability).

To exercise any of these rights, contact us at **support@owloud.app**.
You can also remove most of your data yourself by clearing it in the App or
uninstalling it.

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

Your account data may be processed on servers located outside your country,
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
