---
title: Polyrhythm Homepage
author: Craig Stuart Sapp
keywords: homepage
permalink: /index.html
vim: ts=3
template: default
summary: 
---


<table>
<tr>
<td>
<select onchange="doSearch();" id="table-scope">
	<option value="work">work list</option>
	<option value="example">example list</option>
</select>
</td>

<td>
<input id="search" placeholder="search" value="" autocomplete="off">
</td>

<td>
<span id="search-count"></span>
</td>
</tr>
</table>

<div style="margin-top:20px;" id="list"></div>

{% include_relative styles-local.html %}
{% include_relative scripts-local.html %}

