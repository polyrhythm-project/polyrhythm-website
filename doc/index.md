---
title: Polyrhythm Documentation
author: 
keywords: documentation
permalink: /doc/index.html
vim: ts=3
template: default
summary: 
---

{% include_relative styles-local.html %}
{% include_relative scripts-local.html %}

# Documentation #


## Metadata ##


The corpus examples are associated with different types of metadata (see Table 1, in [Poudrier &amp; Shanahan 2018](https://drive.google.com/file/d/1LRTjYO4-_HYG4SMHygSoDHgLSHD840Zm/view?usp=sharing)). The metadata is stored on a Google spreadsheet from which the website metadata is extracted. This set-up allows for effortless updating of website metadata. Metadata was used in the transcription and encoding process as well as for analysis purposes. Metadata validation was performed by [team members](/people) under the supervision of the principal investigator. Editorial comments pertaining to each example can be accessed on the corresponding example page. Click on the items below for more details on each metadata field pertaining to composers, works, premieres, and examples.


<details markdown="1">
<summary style="display:list-item !important"><b>Composers</b></summary>


The _Suter 1980 Corpus_ features twenty composers from Europe and North-America. Basic biographical information was collected using authoritative sources, including [Oxford Music Online](https://www.oxfordmusiconline.com/), scholarly editions of the composers’ works, biographies, and online sources. Of special interest in this corpus is the emigration of several composers due to two world wars in the period covered. A map of composers’ birth and death cities can be accessed on [Maps](/maps).


- Composer’s Name
- Composer’s Nationality
- Composer’s Birth Date and Birth Place
- Composer’s Death Date and Death Place

</details>


<details markdown="1">
<summary style="display:list-item !important"><b>Works</b></summary>


The examples in this corpus were extracted by Suter (1980) from 450 works that were selected among 913 works surveyed.  The surveyed works were not selected based on their use of polyrhythm, but on their representation of each composer’s output in terms of life period and genre. Each work is identified by Suter’s Work ID, which consists of a three-letter abbreviation of the composer’s last name and a number, which corresponds roughly to its composition year. A list of composers and their corpus representation by works and examples is accessible on [Composers](/composers).


- Work Title
- Genre and Subgenre
- Composition Year
- First Publication Year

</details>


<details markdown="1">
<summary style="display:list-item !important"><b>Premieres</b></summary>


Because of the historical and geographical features of the corpus, information about work premieres was gathered using multiple sources, including internet resources. Geocoding of premiere venues or cities was used to create a heat map and an interactive timeline of the corpus using Carto. The maps can be accessed on [Maps](/maps).


</details>


<details markdown="1">
<summary style="display:list-item !important"><b>Examples</b></summary>


Each example is identified with a filename adapted from the original example identifiers, which are visible on the scores accessed through each example page (E0 button). The filenames begin with “R” (reserve dataset) or “T” (testing dataset), followed by the example number used in Suter (1980) and a translation of the original Suter example ID. For more details on how to decode Suter’s example identifiers: [PDF document with translation and original excerpt from Suter 1980](https://drive.google.com/file/d/1fzA7iakBfjbyc_Fwsnhsdmyk0lMiCAMp/view?usp=sharing).


- Source Work
  - Source Work Full Unit (SWFU)
  - Full Unit Total Measures
  - Full Unit Duration
  - Full Unit Start Time Signature, Time Signature Type, ChangingTiime Signatures
    - The start time signatures were extracted from published scores and categorized using standard types (duple, triple, compound, or odd). If the work features changing time signatures, all time signatures were extracted, but only the start time signature is used as an identifier; works without a time signature are categorized as “none”.
    - Polymetric times signature are further categorized as “polymetric” (same notated beat has same duration) or “polydurational” (same notated beat has different duration)
  - Full Unit Start Tempo Expression
  - Full Unit Start Notated Beat, Notated Beat Rate, and Mean Beat Rate

- Example
  - Example Start, End, and Total Measures
    - Example measures numbers were extracted from the scores whenever available. For analysis purposes pick-up measures are given a number that correspond to the
  - Example Start Time Signature and Time Signature Type
  - Example Start Time Signature Beat Value, Notated Beat Rate, and Mean Beat Rate
  - Example Start Notated Beat Value, Notated Beat Rate, and Mean Beat Rate
  - Example Start Tempo Expression
- Audio
  - Naxos Recording Link
  - Example Start and End Time Stamps
  - Example Duration

</details>
