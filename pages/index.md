---
title: Building a Functional Language for Live Coding
---

Over the past year or so, I've started learning about programming language theory, as I attempt to build my own language. One motivation is practical: I really love [Tidal Cycles](https://tidalcycles.org/) for performing live coded music, but the process for setting it up is famously difficult. Additionally, when you use an editor to "run Tidal," what's actually happening is that the editor is running an instance of [GHCi](https://downloads.haskell.org/ghc/latest/docs/users_guide/ghci.html), the interactive Haskell interpreter. GHCi is great as a piece of terminal software but kind of awkward to integrate into another tool like a code editor.
