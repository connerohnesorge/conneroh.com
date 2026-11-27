---
title: canyon
groups: [agents]
lang: Go
featured: true
order: 5
---
In my first year as an AI Engineer at Cottingham & Butler, I built Canyon, a distributed system on Kubernetes that uses a SIP back-to-back user agent (B2BUA) to record and transcribe calls, tracks outbound desk calls, and runs voice agents for caller flows an IVR would otherwise handle. Canyon transcribes each call leg on its own, so speaker labels come from the audio path rather than from guessing voices. I used the time the second representative joined to split the transcript at the handoff, so each person can review their own part of the conversation.
