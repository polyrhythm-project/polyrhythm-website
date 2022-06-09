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


## Metadata Validation ##

To complete this task, you need access to the following links and sources:

- [TDS Metadata Validation Working Document](https://docs.google.com/spreadsheets/d/1s06QHpHWrL55cEraj3peph4WrV69yj-9tGYT40_XeT8/edit#gid=1738702283).

- [FDS Source Scores Master Working Document](https://docs.google.com/spreadsheets/d/1_2uFSZHJ0AclYKc_DDzN25JWKTTC5uFQVyfwH7oHC7c/edit#gid=900860769).

- [FDS Metadata Master](https://docs.google.com/spreadsheets/d/17rjKQ3lXJHEHAcDfOXTDNX5a0A_jVqwokcaqhd3Ddng/edit#gid=900860769).

- [Suter Examples Audio Synthesis Spreadsheet](https://docs.google.com/spreadsheets/d/1nGsd7TlSWtmxrNv_2C1lTOWwLtfz1IH0O2pqhm7bj_A/edit?pli=1#gid=0).

- A Calculator (optional, but recommended).

- [Audio Metadata Validation Protocol](https://drive.google.com/file/d/1dfp1h0XFpkJkB6H7MZppSwHPjq8GEPAQ/view?usp=sharing).

- [Scanning TDS E1/E2/E3 Protocol](https://drive.google.com/file/d/1iAn3BtUFatYhZOzv1vM9-FkRrM5JmrL2/view?usp=sharing).

- [Guide and Resources for Sourcing Additional Scores](https://drive.google.com/file/d/1adxhtt7fi_PmdaoCfj8Rs_egZDO6-YNY/view?usp=sharing).


### General Task Instructions ###

Metadata Validation involves verifying the following columns in the TDS Metadata Validation Working Document: A (Filename), D (Editorial Comments), AH (Source Work Full Unit), AI (Full Unit Total Measures), AJ (Full Unit Duration), AK (Full Unit Start Time Signature), AL (Full Unit Start Tsig Type), AO (Full Unit Start Tempo Expression), AP (Full Unit Start Notated Beat), AQ (Full Unit Start Notated Beat Rate), AR (Full Unit Start Mean Beat Rate), AT (Naxos Recording Link), AU (Example Start Measure), AV (Example End Measure), AW (Example Total Measures), AX (Example Start Time), AY (Example End Time), AZ (Example Duration), BA (Example Start Tsig), BB (Example Start Tsig Beat), BC (Example Start Tsig Mean Beat Rate), BD (Example Start Notated Beat), BE (Example Start Notated Beat Rate), BF (Example Start Tsig Type), BI (Changing Tsig), BJ (Other Tsigs), BK (More than 5 Tsig Changes? [yes/no]), and BL (Example Start Tempo Expression).

- Columns AM, AN, BG, and BH are not currently relevant to the Metadata Validation Task; therefore, when one starts a new batch, they can hide the respective columns (by right-clicking the top of the columns and selecting “Hide column”) or ignore them altogether.
- When referring to older batches for validated examples and precedents (which is highly encouraged), one may notice that columns BM and BN contain additional information on where to find the relevant scans for the examples. Columns BM and BN are not found on the FDS Metadata Master spreadsheet, and are only for reference and help validators to keep track of which scans have been already made, are only available on Nkoda, are new (“NEW:”), and/or need to be rescanned (“(RESCAN)”), as well as the creators of the scans (all “NEW” scans are created by Ethan). At the start of every new batch, I would recommend you to make a list of links to E1 scans that have been created, noting if certain scans are missing or scores are only accessible through Nkoda. For all the E1 scans that have already been created, check them thoroughly according to step 1 of the Scanning TDS E1/E2/E3 Protocol; if any relevant information is missing, note down “RESCAN” in order to remind other validators that a updated scan must be generated.

The purpose and legend of the TDS Metadata Validation Working Document can be found on the first tab of the spreadsheet, which includes simple explanations on how to read the document. The last three tabs of the spreadsheet can be largely ignored as many of the protocols and info have yet to be updated.

For each example that is to be validated, make sure you are able to locate and use an E1, E2, or E3 score that contains the __entire SWFU__ and not merely an E1/E2/E3 scan that contains the example and surrounding metadata.

The audio-related columns that can be validated are as follows: D (Editorial Comments),
AH (Source Work Full Unit), AJ (Full Unit Duration), AT (Naxos Recording Link), AX
(Example Start Time), AY (Example End Time), and AZ (Example Duration), which are all addressed in the [Audio Metadata Validation Protocol](https://drive.google.com/file/d/1dfp1h0XFpkJkB6H7MZppSwHPjq8GEPAQ/view?usp=sharing).


### Specific Task Instructions ###

Open the [TDS Metadata Validation Working Document](https://docs.google.com/spreadsheets/d/1s06QHpHWrL55cEraj3peph4WrV69yj-9tGYT40_XeT8/edit#gid=1738702283) and choose an example in column A to validate. Having decided on an example, locate an E1, E2, or E3 score by searching for the same example in the [FDS Source Scores Master Working Document](https://docs.google.com/spreadsheets/d/1_2uFSZHJ0AclYKc_DDzN25JWKTTC5uFQVyfwH7oHC7c/edit#gid=900860769).
1. If no scores are listed, refer to the [Guide and Resources for Sourcing Additional Scores](https://drive.google.com/file/d/1adxhtt7fi_PmdaoCfj8Rs_egZDO6-YNY/view?usp=sharing) in order to find a new score. Once a new score is found, record the publication information of the new score in the FDS Source Scores Master spreadsheet (refer to step 7 of the [Scanning TDS E1/E2/E3 Protocol](https://drive.google.com/file/d/1iAn3BtUFatYhZOzv1vM9-FkRrM5JmrL2/view?usp=sharing)).

#### Full Unit Start Metadata ####
- Columns affected are AK, AL, AO, AP, AQ, and AR):
- Refer to the first page of the SWFU for the following columns. For SWFU’s that do not have a clear-cut beginning (such as certain movements in operatic works or with attacca notations), defer to Dr. Poudrier for the preferred metadata.[^1]
1. For columns AK and AL (Full Unit Start Time Signature and Full Unit Start Tsig Type):
   a. Validate the opening time signature for the SWFU as written on the score. The Full Unit Start Tsig Type is determined by the time signature and its subdivisions, the latter of which is also dependent on the tempo of the piece (2/2=duple, 3/2=triple, 4/8=quadruple, 5/4=odd, 6/4=compound, 7/4=odd, 8/4=other, 9/8=compound, 12/8=compound, 3/4;9/8=polymetric, etc.).

[^1]: If the theme and variations is a movement in a multi-movement work, then we will treat the entirety as SWFU; if it is a single movement work, then we will treat the relevant _theme_ or _variation_ as the SWFU.
