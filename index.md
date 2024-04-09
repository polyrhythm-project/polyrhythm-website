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

<td>
<input placeholder="staff min." value="" autocomplete="off" id="partsmin">&nbsp;<input placeholder="staff max." value="" autocomplete="off" id="partsmax">
</td>

<td>
<select id="instruments" onchange="doSearch();">
<option value="">instrument</option>
<option value="accor">accor</option>
<option value="alto">alto</option>
<option value="anvil">anvil</option>
<option value="arpa">arpa</option>
<option value="banjo">banjo</option>
<option value="barit">barit</option>
<option value="bass">bass</option>
<option value="bdrum">bdrum</option>
<option value="bongo">bongo</option>
<option value="brush">brush</option>
<option value="bscan">bscan</option>
<option value="bugle">bugle</option>
<option value="calto">calto</option>
<option value="campn">campn</option>
<option value="cangl">cangl</option>
<option value="casts">casts</option>
<option value="cbass">cbass</option>
<option value="cello">cello</option>
<option value="cemba">cemba</option>
<option value="chain">chain</option>
<option value="chcym">chcym</option>
<option value="chime">chime</option>
<option value="clap">clap</option>
<option value="clarb">clarb</option>
<option value="clarp">clarp</option>
<option value="clars">clars</option>
<option value="clave">clave</option>
<option value="clavi">clavi</option>
<option value="clest">clest</option>
<option value="conga">conga</option>
<option value="cor">cor</option>
<option value="cornt">cornt</option>
<option value="coro">coro</option>
<option value="crshc">crshc</option>
<option value="cymba">cymba</option>
<option value="drmsp">drmsp</option>
<option value="drum">drum</option>
<option value="drumP">drumP</option>
<option value="fag_c">fag_c</option>
<option value="fagot">fagot</option>
<option value="fdrum">fdrum</option>
<option value="feme">feme</option>
<option value="fingc">fingc</option>
<option value="flex">flex</option>
<option value="flt">flt</option>
<option value="flt_a">flt_a</option>
<option value="fltda">fltda</option>
<option value="fltdb">fltdb</option>
<option value="fltds">fltds</option>
<option value="genB">genB</option>
<option value="genT">genT</option>
<option value="glock">glock</option>
<option value="gong">gong</option>
<option value="guitr">guitr</option>
<option value="hbell">hbell</option>
<option value="heck">heck</option>
<option value="heltn">heltn</option>
<option value="idio">idio</option>
<option value="lion">lion</option>
<option value="lyrtn">lyrtn</option>
<option value="male">male</option>
<option value="mando">mando</option>
<option value="marac">marac</option>
<option value="marim">marim</option>
<option value="mbari">mbari</option>
<option value="mezzo">mezzo</option>
<option value="nfant">nfant</option>
<option value="oboe">oboe</option>
<option value="ondes">ondes</option>
<option value="organ">organ</option>
<option value="paila">paila</option>
<option value="pbell">pbell</option>
<option value="perc">perc</option>
<option value="piano">piano</option>
<option value="piatt">piatt</option>
<option value="picco">picco</option>
<option value="ratch">ratch</option>
<option value="ratl">ratl</option>
<option value="sarus">sarus</option>
<option value="saxA">saxA</option>
<option value="saxR">saxR</option>
<option value="saxS">saxS</option>
<option value="saxT">saxT</option>
<option value="sbell">sbell</option>
<option value="sdrum">sdrum</option>
<option value="siren">siren</option>
<option value="slap">slap</option>
<option value="soprn">soprn</option>
<option value="spshc">spshc</option>
<option value="stim">stim</option>
<option value="str">str</option>
<option value="strdr">strdr</option>
<option value="tambn">tambn</option>
<option value="tbell">tbell</option>
<option value="tblok">tblok</option>
<option value="tdrum">tdrum</option>
<option value="tenor">tenor</option>
<option value="timpa">timpa</option>
<option value="tom">tom</option>
<option value="trngl">trngl</option>
<option value="tromb">tromb</option>
<option value="tromp">tromp</option>
<option value="tromt">tromt</option>
<option value="tuba">tuba</option>
<option value="tubaB">tubaB</option>
<option value="tubac">tubac</option>
<option value="tubat">tubat</option>
<option value="vibra">vibra</option>
<option value="viola">viola</option>
<option value="violn">violn</option>
<option value="vox">vox</option>
<option value="wblok">wblok</option>
<option value="xylo">xylo</option>
</select>
<br>
<input type="checkbox" id="instrument-only" name="instrumentOnly" onchange="doSearch()">
<label for="instrument-only">only</label>
</td>


<td>
<select id="iclasses" onchange="doSearch();">
<option value="">class</option>
<option value="bras">Brass</option>
<option value="gen">Generic</option>
<option value="klav">Keyboard</option>
<option value="idio">Percussion</option>
<option value="str">Strings</option>
<option value="vox">Voices</option>
<option value="ww">Woodwinds</option>
</select>
<br>
<input type="checkbox" id="iclass-only" name="iclassOnly" onchange="doSearch()">
<label for="iclass-only">only</label>
</td>

</tr>
</table>

<i>Bold IDs indicate examples with interactive musical scores</i>

<div style="margin-bottom:50px; margin-top:20px;" id="list"></div>


{% include_relative styles-local.html %}
{% include_relative scripts-local.html %}


