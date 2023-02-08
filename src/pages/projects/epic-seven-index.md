---
layout: ../../layouts/ProjectLayout.astro
title: 'Epic Seven Index'
pubDate: 2022-07-01
description: "Tools for Epic Seven mobile game. Search and filter of heroes or artifacts."
author: "Ricardo Chu"
image:
  url: "https://i.postimg.cc/XJPmyCLd/epicsevenindex-blog-cover.jpg"
  alt: "EpicSeven Index"
link:
  demo: https://epic7index.netlify.app/
  source: https://github.com/kypexfly/e7c-ts-react
tags: ["react", "typescript", "tailwindcss"]
---

## About epic7index

This is an Epic Seven fan made webside using [EpicSevenDB](https://api.epicsevendb.com/) API as source of information and inspired on [epic7x](https://epic7x.com/), [epicsevendb](https://epicsevendb.com/) and [epic7stats](https://www.epic7stats.com/).
Implemented with React.js library.

## Know issues

* Public filter in Artifacts is not working.
* API is giving different element/class/sign names, ie. manauser = soul weaver, twin = gemini, etc.
* Filtering heroes and artifacts feels slow. Needs optimization.