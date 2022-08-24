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


The corpus examples are associated with different types of metadata (see Table 1, in [Poudrier &amp; Shanahan, 2018](https://drive.google.com/file/d/1LRTjYO4-_HYG4SMHygSoDHgLSHD840Zm/view?usp=sharing)). The metadata is stored on a Google spreadsheet from which the website metadata is extracted. This setup allows for effortless updating of website metadata. Metadata was used in the transcription and encoding process as well as for analysis purposes. Metadata validation was performed by [team members](/people) under the supervision of the principal investigator. Editorial comments pertaining to each example can be accessed on the corresponding example page. Click on the items below for more details on each metadata field pertaining to composers, works, premieres, and examples.


<details markdown="1">
<summary style="display:list-item !important"><b>Composers</b></summary>


The _Suter 1980 Corpus_ features twenty composers from Europe and North America. Basic biographical information was collected using authoritative sources, including [Oxford Music Online](https://www.oxfordmusiconline.com/), scholarly editions of the composers’ works, biographies, and online sources. Of special interest in this corpus is the emigration of several composers due to two world wars in the period covered.

A map of composers’ birth and death cities can be accessed on [Maps](/maps). Composers’ nationality is provided on [Composers](/composers). On the [Home](/) page, works and examples can be sorted based on the composer's last name.


- Composer’s Name and Nationality
  - Name and nationality are based on Oxford Music Online.
  - Example pages include all prenames, with prenames that are generally not used given in square brackets; otherwise, only first and last names are used as identifiers.
  - If a composer has more than one nationality, all nationalities are provided in chronological order using the comma-delimited format.

- Composer’s Birth/Death Date and Birth/Death Place
  - Dates, countries, and cities are based on Oxford Music Online; in cases where location names have changed, the name at the time of birth is used.

</details>


<details markdown="1">
<summary style="display:list-item !important"><b>Source Works</b></summary>


The 724 examples presented in Suter (1980) are extracted from 450 works. The works are identified by a three-letter abbreviation of the composer’s last name followed by a number that corresponds roughly to its composition year within the specific composer’s output. Work numbers are not necessarily contiguous, possibly due to the fact that the 450 source works are a subset of 913 works surveyed by Suter. The surveyed works were not selected based on their use of polyrhythm, but on their representation of each composer’s output in terms of life period and genre. last name, and a number, which corresponds roughly to its composition year.

A list of composers and their corpus representation by works and examples is accessible on [Composers](/composers). On the [Home](/) page, works can be sorted based on ID, title, genre/subgenre, composition year, and publication year.


- Work Title
  - Suter’s (1980) work titles are French translations of the original titles. The titles used on this website are based primarily on the published scores and include instrumentation; work titles are provided in the original language, followed by an English translation, whenever applicable.
  - Works are also identified by the work identifiers provided by Suter (1980). Work identifiers begin with a three-letter abbreviation of the composer’s last name followed by a number.

- Genre and Subgenre
  - Genre and subgenre were determined based on instrumentation, using Oxford Music Online composers’ works tables only as a secondary reference due to the lack of standardized category in this source.
  - Genre comprises “Orchestral” (with or without solo part), “Instrumental” (a subset of instruments), “Vocal” (excluding stage works), and “Stage”. Each genre is subdivided into subgenres to allow for finer distinction. “Orchestral” includes “Symphonic”, “Programmatic”, and “Concerto”, while “Stage” includes “Opera”, “Ballet”, and “Theatrical”. Due to the large proportion of solo keyboard works, “Instrumental” is subdivided into “Keyboard” and “Chamber” (including chamber orchestra). “Vocal” is subdivided into “Solo”, which includes only solo voices with accompaniment or as part of a duet, and “Choral” (with or without accompaniment, including orchestral).

- Composition Year and First Publication Year
  - Suter’s metadata was used as a starting point and cross-referenced with multiple sources, including Oxford Music Online, published scores and publishers’ websites, and bibliographies (printed and online). In cases where work was revised or orchestrated at a later date, the original completion date is provided first, with the revision date (“rev.”) or orchestration date (“orch.”) provided in parentheses. For works that exist in multiple versions, version information is provided in the Editorial Comments available on the example page.

</details>


<details markdown="1">
<summary style="display:list-item !important"><b>Premieres</b></summary>


Because of the historical and geographical features of the corpus, information about work premieres was gathered using multiple sources, including internet resources. Premiere metadata is provided on the example page, whenever available.

Works were geocoded based on venue or city using the heat map format as well as an interactive timeline map using [Carto](https://carto.com/). These maps include work, example, and premiere metadata, and can be accessed on [Maps](/maps). On the [Home](/) page, works can be sorted based on premiere year.

- Premiere Date
  - The premiere date (day, month, year) was determined using multiple sources, including published scores and publishers’ websites, Oxford Music Online, bibliographies, and online sources. Information from websites was cross-referenced with more authoritative sources, whenever possible.

- Premiere Country, City, and Venue
  - Premiere location (country, city, venue) was determined using multiple sources, including performance venues websites, and cross-reference with scholarly sources, whenever possible.
  - Names of locations are those that were used at the time when the premiere took place. Venue names are provided in the original language, followed by an English translation in square brackets and alternate names in parentheses, when applicable.

- Premiere Ensemble and Soloists
  - Premiere musicians were identified using multiple sources, including venues, ensembles, and publishers’ websites as well as biographies.
  - Conductors' names are provided for larger works, whenever possible.
  - Soloists and conductors are identified by the first letter of their given name followed by their first full name; multiple soloists are separated by semicolons.

</details>


<details markdown="1">
<summary style="display:list-item !important"><b>Source Work Full Unit</b></summary>


Because the source works are wide-ranging in terms of length and larger form, a source work full unit (SWFU) was determined based on the shortest complete unit. Works composed as a single movement are categorized as “single movement”. If the work was part of a collection of similar works (e.g., song cycle), the full unit is identified as the specific work within the collection, including the number assigned to the work within the collection, is applicable.

For multi-movement works like symphonies and sonatas, the movement is the full unit; movements are generally identified by their number and initial tempo marking. In larger works divided into sections that are composed of multiple units, such as operas and cantatas, the full unit was determined to be indicated by changes of scenes; scenes are generally identified by headings from the score, or when no heading is provided, by the text incipit. In cases where movements are not clearly separated from each other, the full unit was determined based on clues provided on the score by the composer or standard subdivision of the work in commercial recordings.

Below is a description of the procedure for extracting metadata from source works. Information pertaining to specific works is provided in the Editorial Comments available on each example page.

- Full Unit Total Measures and Duration
  - Total measures are provided based on the printed score; in cases where the full unit corresponds to a section within a work in which measures are not provided, a measures count is provided.
  - Dotted bar lines are not counted as measures unless measure numbers on the score treat dotted bar lines as full measures. In the case of polymetric scores, the smaller measures are counted, unless notated measure numbers are based on the larger notated measures.
  - Full unit duration is provided in the format “min:seconds” and calculated from 0:00 to the first second of silence at the end of the unit, unless it is part of a track that begins earlier. In the latter case, duration is computed by adding the recorded time of both tracks.

- Full Unit Start Time Signature and Time Signature Type
  - The start time signatures were extracted from published scores and categorized using standard types (duple, triple, compound, or odd). Works that are written without a time signature are categorized as “none”.
  - Polymetric time signatures are given in the order they occur, from bottom to top staff, and delimited by a semi-colon (e.g., 3/4;9/8). Polymetric time signatures are further categorized as “polymetric” (the same notated beat has the same duration) or “polydurational” (the same notated beat has a different duration).

- Full Unit Start Notated Beat, Notated Beat Rate, and Mean Beat Rate
  - If the beat rate is written as a range, a mean beat rate was calculated for analysis purposes. If two beat rates are given, with the second in parentheses, both beat rates are provided (e.g., “92(96)” and a mean beat rate is calculated. Polymetric beat rates are given in the order written and delimited by a semi-colon (e.g., quarter=60;dotted-quarter=40).
  - The absence of notated beat rate is signaled by the term “none” for each metadata field.

- Full Unit Start Tempo Expression
  - Tempo expressions were extracted from the first measure of the score in their literal form; the absence of tempo expression is signaled by the term “none”.

</details>


<details markdown="1">
<summary style="display:list-item !important"><b>Examples</b></summary>


Each example is identified with a filename adapted from the original example identifiers, which are visible on the scores accessed through each example page (E0 button). The website uses short example IDs that begin with “R” (reserve dataset) or “T” (testing dataset), followed by the example number used in Suter (1980). Complete filenames are used on the PDF generated by Sibelius during the encoding process (available on each example page). These filenames are adapted from the original naming system. For more details on how to decode Suter’s example identifiers: [PDF document with translation and the original excerpt from Suter 1980](https://drive.google.com/file/d/1fzA7iakBfjbyc_Fwsnhsdmyk0lMiCAMp/view?usp=sharing). On the [Home](/) page, works can be sorted based on ID, title, genre/subgenre, composition year, premiere year, and publication year.

Example metadata was used in the transcription and encoding of examples. Because we opted for diplomatic transcriptions, square brackets are used for data extracted from a prior location in the score and curly brackets are used for score indications that are interpretations based on available information. Editorial comments are provided for all bracketed indications.

- Example Start, End, and Total Measures
  - Example measures numbers are extracted from the scores whenever available. For analysis purposes, pick-up measures are given a number that corresponds to the duration of the pick-up note(s) expressed as a fraction of one bar. For example, if a work with a time signature of 3/8 begins with an eighth-note pick-up, the start measure will be 0.33. Note that partial measures are included in the total measures.
  - If the example is extracted from a full unit in a score with notated measures that do not correspond with the full unit, start and end measures are provided based on the full unit, with the notated bar numbers following in parentheses.
  - Dotted bar lines are not counted unless the notated measure numbers on the score count dotted bar lines as full measures.
  - In the case of polymetric scores, smaller measures are counted, unless the notated measure numbers on the score count the larger polymetric bars as full measures.

- Example Start Time Signature, Time Signature Type, and Changing Time Signature
  - Example start time signature and time signature types use the same procedure as for the full unit start time signature and time signature type, except in the presence of changing times signature, in which case all time signatures are extracted, but only the start time signature is used as an identifier.

- Example Start Time Signature Beat, Notated Beat Rate, and Mean Beat Rate
  - Example start time signature beat, notated beat rate, and mean beat rate are determined following the same procedure as for the full unit start time signature beat, notated beat rate, and mean beat rate.
  - For analysis purposes, an interpretative time signature is provided in curly brackets for unmetered examples. The time signature is determined based on the first measure of the example. For sorting based on the time signature, unmetered examples are categorized as “none”.

- Example Start Notated Beat, Notated Beat Rate, and Mean Beat Rate
  - Example start notated beat and beat rate are determined following the same procedure as for the full unit start notated beat, except when no beat rate is provided at the start measure. In these cases, the notated beat rate corresponds to either: (1) the last beat rate notated on the score before the example start measure, provided in square brackets on the encoded score; or, (2) a calculated beat rate based on the time signature and randomly selected recording, provided in curly brackets on the encoded score. For simple and odd time signatures, the notated beat corresponds to the denominator (e.g., 2/4 = quarter note; 7/8 = eighth note); note that 3/8 was treated as a simple time signature. For compound time signatures, the notated beat corresponds to the value that represents three units of the denominator (e.g., 9/8=eighth*3=dotted-quarter).

- Example Start Tempo Expression
  - Tempo expressions were extracted from the first measure of the example score in their literal form; if a tempo expression is not provided at the beginning of the example, the last notated tempo expression determined to be still in effect is provided in square brackets, and the specific location where the tempo expression is found is given in the Editorial Comment.

</details>


<details markdown="1">
<summary style="display:list-item !important"><b>Source Recordings</b></summary>


Recordings were randomly selected from the [Naxos Music Library](https://login.ezproxy.library.ubc.ca/login?qurl=http%3a%2f%2fubc.NaxosMusicLibrary.com), available through the [UBC Library Indexes & Databases](https://resources.library.ubc.ca/). The following procedure was used: (1) determine the number of available recordings in Naxos using the "composers" index, then "view by work," and then "available recordings"; (2) select recording using a [random number generator](https://www.random.org/) with max limit set to the number of available recordings (min limit = 1) and record random selection number (e.g., 14/35); (3) access selected recording and collect CD reference information; (4) record date retrieved and assign direct link through OpenAthens proxy.

- Naxos Recording Link
  - Access to source recordings is possible through an OpenAthens or institutional subscription.
  - In cases where an example spans more than one track, the recording link corresponds to the track that features the beginning of the example.

- Example Start and End Timestamps
  - Start and end timestamps are provided to facilitate users’ access to extracted examples within the source work full unit. They are extracted from the track player at the unit level of a second and are not rounded up. For example,  if an example starts at 1:00:95, the example’s start timestamp is 1:00, not 1:01; if the example ends at 1:00:95, the example's end timestamp is 1:00, not 1:01). In short, the time notated in seconds considers the full second, not a fraction of the second.

- Example Duration
  - Example duration is calculated from the extracted clips that include the full examples using a Digital Audio Workstation (DAW).


</details>
