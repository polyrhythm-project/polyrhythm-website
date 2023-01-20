---
title: Recordings 
author: 
keywords: List of research
permalink: /recordings/index.html
vim: ts=3
template: default
summary: 
---

{% include_relative styles-local.html %}
{% include_relative scripts-local.html %}

# Recordings #

<p>
Sort recordings by: 

<select id="sort-method" onchange="displayRecordingList()">
<option value="workid">Work ID</option>
<option value="exid">Example ID</option>
<option value="cyear">Composition Date</option>
<option value="ryear">Release Date</option>
</select>

<div id="recording-list"></div>

