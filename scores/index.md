---
title: Scores
author: 
keywords: List of research
permalink: /scores/index.html
vim: ts=3
template: default
summary: 
---

{% include_relative styles-local.html %}
{% include_relative scripts-local.html %}

# Scores #

<p>
Sort scores by: 

<select id="sort-method" onchange="displayScoreList()">
<option value="workid">Work ID</option>
<option value="exid">Example ID</option>
<option value="cyear">Composition Date</option>
<option value="pyear">Publication Date</option>
</select>

</p>
<br/>

<div id="score-list"></div>

