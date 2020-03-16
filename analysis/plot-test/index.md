---
vega-lite: true
---


<div id="plotRegion"></div>

<table>

<tr>
	<td> <b>page</b>: </td>
	<td> <span id="page_info"></span> </td>
</tr>

<tr>
	<td> <b>plot</b>: </td>
	<td> <span id="plot_info"></span> </td>
</tr>

<tr>
	<td> <b>plotFile</b>: </td>
	<td> <span id="plotfile_info"></span> </td>
</tr>

<tr>
	<td> <b>data</b>: </td>
	<td> <span id="data_info"></span> </td>
</tr>

<tr>
	<td> <b>dataFile</b>: </td>
	<td> <span id="datafile_info"></span> </td>
</tr>

<tr>
	<td> <b>URL</b>: </td>
	<td> <span id="url_info"></span> </td>
</tr>

</table>

<p>
Template for loading a plot script and data onto this page:
<ul> <li> <b>page</b>?plot=<b>plot</b>&data=<b>data</b> </li> </ul>
</p>

<p>
If the data and script both come from <a target="_blank" href="https://github.com/polyrhythm-project/vegalitetest">https://github.com/polyrhythm-project/vegalitetest</a>, then the full URL address can be omitted, and just the filenames can be given:
</p>

<ul> <li> <b>page</b>?plotFile=<b>stacked_layered_accents_grouped_butterfly.JSON</b>&dataFile=<b>161S.tsv</b> </li> </ul>



{% include_relative styles-local.html %}
{% include_relative scripts-local.html %}


