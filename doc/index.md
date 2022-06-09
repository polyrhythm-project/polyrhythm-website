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
   - Validate the opening time signature for the SWFU as written on the score. The Full Unit Start Tsig Type is determined by the time signature and its subdivisions, the latter of which is also dependent on the tempo of the piece (2/2=duple, 3/2=triple, 4/8=quadruple, 5/4=odd, 6/4=compound, 7/4=odd, 8/4=other, 9/8=compound, 12/8=compound, 3/4;9/8=polymetric, etc.).
     -  For unmetered examples, “calculate” a time signature by counting the number of beats and grouping them according to your musical discretion and sense. Place the “calculated” time signature within curly brackets (refer to T518). Follow the same curly-bracket-convention with column AL (if the Full Unit Start Time Signature is “{4/4}”, then the Full Unit Start Tsig Type will be “{quadruple}”).
     -  For unmeasured examples that start with cadenzas or significantly longer measures (refer to T620), add an editorial comment under column D stating the circumstance, and “calculate” the time signature of the following measure to provide a time signature more indicative of the SWFU’s metric quality.
     -  As you write time signatures according to the way they are notated on the score, you may see that parenthetical brackets are occasionally used (i.e. “(3/8)”; refer to T500).
     -  Check the meter for ALL instruments, in case the work may be polymetric. 4/4(12/8) vs. 3/4;9/8 vs. 2/8’3/8 (T613) vs. 10/4(4+2+4);3/4+3/4+4/4 (T585).
     -  Double check common time (C) vs. cut time.
2. For column AO (Full Unit Start Tempo Expression):
   - Validate the opening tempo expression, which is typically notated above SWFU m. 1, as written on the score (i.e. “Allegro”, “Andante (Poco moderato)”, “Moderato, poco allegro”, “Sehr mäßig (very moderately), Tempo I”, etc.). Maintain the original language, and note any specific capitalizations or linguistic accents as you validate. For examples that are missing tempo expressions at the beginning of the SWFU, writing “none” will suffice.
3. For columns AP, and AQ (Full Unit Start Notated Beat and Full Unit Start Notated Beat Rate):
   - Validate the opening notated beat and beat rate. Most pieces will follow the following format: “beat=beat-rate” (i.e. quarter=120).
     - For column AP, dotted beat rates (such as dotted-quarter, dotted-half, etc.) should be notated with a hyphen rather than a space: use “dotted-quarter” rather than “dotted quarter”.
       - Polymetric (quarter;dotted-quarter).
       - In the case of beat rates that are notated with ties (such as a half note tied to an eighth note), notate it as “half+eighth” (refer to T356).
       - Be on the lookout for Full Unit Start Notated Beats that are not displayed through the standard notation, but are represented by text instead (refer to T613).
     - For column AQ, validate the beat rate as it appears on the score (i.e. “100”. “36-44”, “72(66)”etc.). Avoid using spaces, even for beat rates with ranges.
       - Some examples have two beat rates, with the latter in parentheses. Notate these examples without spaces as follows: “92(96)” (refer to T465).
       - Polymetric examples (T585).
     - If no opening beats or beat rates are notated, writing “none” in the respective boxes will suffice.
4. For column AR (Full Unit Start Mean Beat Rate):
   - Only validate once you have already validated column AQ; calculate the average beat rate of the opening notated beat rate. If the notated beat rate is “60”: 60/1 = 60; if the notated beat rate is “126-132”: (126+132)/2 = 129; if the notated beat rate is “63-58”: (63+58)/2 = 60.5, which will be rounded up to 61 (apply standard rules of rounding: if the relevant decimal place is 5 or above, round upwards; if the relevant decimal place is 4 or below, round downwards, etc.); if the notated beat rate is “72(66)”: (72+66)/2 = 69, etc.
     - Polymetric examples—for which the beat rate is, for instance, “56;56”—mean that both meters are proceeding at the same beat rate. Therefore, the Full Unit Start Mean Beat Rate is simply “56” (refer to T585).
     - If no opening beat rates are notated, writing “none” will suffice.


[^1]: If the theme and variations is a movement in a multi-movement work, then we will treat the entirety as SWFU; if it is a single movement work, then we will treat the relevant _theme_ or _variation_ as the SWFU.
