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

<table>
<tr>

<td>
<select onchange="doSearch();" id="table-scope">
	<option value="example">example list</option>
	<option value="work">work list</option>
</select>
</td>

<td>
<input id="search" style="width:220px;"  placeholder="search" value="" autocomplete="off">
</td>

<td>
<span id="search-count"></span>
</td>

<td>
<span onclick="clearSearchFields()" class="clear-button">clear</span>
</td>

</tr>
</table>
</tr>

<tr>

<table style="margin-top:10px;" >
<tr>

<td>
<select id="composer" onchange="doSearch();">
</select>
</td>

<td>
<select id="genre" onchange="doSearch();">
</select>
</td>

<td>
<select id="tsigtype" onchange="doSearch();">
</select>
</td>

<td>
<select id="tempobeat" onchange="doSearch();">
</select>
</td>

<td>
<input placeholder="tempo min." value="" autocomplete="off" id="tempomin">
<input placeholder="tempo max." value="" autocomplete="off" id="tempomax">
</td>


</tr>
</table>

<i>Bold IDs indicate examples with interactive musical scores</i>

<div style="margin-bottom:50px; margin-top:20px;" id="list"></div>


{% include_relative styles-local.html %}
{% include_relative scripts-local.html %}


