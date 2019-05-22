---
title: Polyrhythm Homepage
author: Craig Stuart Sapp
keywords: homepage
permalink: /index.html
vim: ts=3
template: default
summary: 
---


<select onchange="doSearch();" id="table-scope">
	<option value="example">example list</option>
	<option value="work">work list</option>
</select>

<input id="search" placeholder="search" value="" autocomplete="off">

<span id="search-count"></span>

<div id="list"></div>

{% include_relative styles-local.html %}
{% include_relative scripts-local.html %}

