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
<select id="dataset" onchange="doSearch();">
	<option value="">all datasets</option>
	<option value="Reserve">Reserve</option>
	<option value="Testing">Testing</option>
	<option value="Both">Both</option>
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
<input placeholder="tempo min." value="" autocomplete="off" id="tempomin">&nbsp;<input placeholder="tempo max." value="" autocomplete="off" id="tempomax">
</td>

<td>
<input placeholder="duration min." value="" autocomplete="off" id="secondsmin">&nbsp;<input placeholder="duration max." value="" autocomplete="off" id="secondsmax">
</td>

</tr>
</table>

<i>Bold IDs indicate examples with interactive musical scores</i>

<div style="margin-bottom:50px; margin-top:20px;" id="list"></div>


{% include_relative styles-local.html %}
{% include_relative scripts-local.html %}


