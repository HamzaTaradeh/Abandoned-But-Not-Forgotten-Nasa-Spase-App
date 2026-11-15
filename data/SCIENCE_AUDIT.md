# Scientific review — Abandoned But Not Forgotten

Review date: 15 November 2026  
Scope: the 17 entries in `js/data.js` and the matching grouped entries described in the project README.  
Standard: prioritize NASA, NASA Science, NASA/JPL, NASA NSSDCA and NASA historical records. This is a fact-checking working document, not a claim that every line of every story has been independently peer-reviewed.

## High-priority corrections applied to the starter data

1. **Apollo 11 Eagle vs. laser retroreflector** — The descent stage of the Lunar Module Eagle and the Apollo 11 Lunar Laser Ranging Retroreflector are two separate objects. The retroreflector was deployed by the astronauts on the lunar surface; it is not part of the Eagle descent stage. Keep them as separate objects or clearly describe them as separate items at the same landing site. NASA/NIST sources:  
   - https://science.nasa.gov/wp-content/uploads/2023/09/Apollo11AnniversaryLitho_updated.pdf  
   - https://www.nist.gov/history/moon-and-back-25-seconds

2. **Sojourner** — The last data transmission from Mars Pathfinder was received on 27 September 1997, but NASA says the successful mission was terminated on 10 March 1998 after attempts to restore communications. The data entry's `year` is now 1998 (mission termination year); the story distinguishes the last data from formal termination.  
   - https://science.nasa.gov/mission/mars-pathfinder/  
   - https://science.nasa.gov/resource/sojourners-farthest-journey/

3. **Spirit** — The rover fell silent in March 2010, but NASA ended recovery efforts and declared the mission complete on 25 May 2011. The data entry's `year` is now 2011; the story preserves the 2010 last-contact date.  
   - https://science.nasa.gov/mission/mer-spirit/

4. **Opportunity** — Last communication: 10 June 2018. NASA declared the mission complete: 13 February 2019. The data entry's `year` is now 2019; the story distinguishes both dates.  
   - https://science.nasa.gov/mission/mer-opportunity/  
   - https://science.nasa.gov/missions/mer/nasas-opportunity-rover-mission-on-mars-comes-to-end/

5. **InSight** — Last communication: 15 December 2022. NASA announced the mission had ended on 21 December 2022 after two missed communication attempts and depletion of power. The story now states both dates and avoids implying NASA knows the exact instant power failed.  
   - https://www.nasa.gov/missions/insight/nasa-retires-insight-mars-lander-mission-after-years-of-science/

6. **Apollo Lunar Roving Vehicles** — There were three separate LRVs, used on Apollo 15, 16 and 17 in 1971 and 1972. The grouped entry now uses 1972 as the final deployment year rather than suggesting all three were from 1971. Consider splitting them into three entries if the project needs a literal count of individual machines.  
   - https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_lrv.html  
   - https://www.nasa.gov/history/50-years-ago-first-apollo-astronauts-to-drive-on-the-moon-took-final-cruise/

7. **Dawn** — Dawn is not simply “drifting through space”: it is an inert spacecraft in a deliberately maintained long-term orbit around Ceres. The data story now says it remains in a planned, stable orbit and is no longer communicating.  
   - https://science.nasa.gov/mission/dawn/toolkit/end-of-mission/  
   - https://science.nasa.gov/mission/dawn/mission-status/

8. **Kepler** — NASA retired Kepler in its safe orbit, away from Earth, after it ran out of fuel on 30 October 2018. Avoid describing it as a probe drifting freely in deep space.  
   - https://science.nasa.gov/mission/kepler/in-depth/  
   - https://science.nasa.gov/mission/kepler/

## Per-entry primary-source register

| Entry in the project | NASA / authoritative source | Review note |
|---|---|---|
| Apollo 11 Eagle / retroreflector | https://science.nasa.gov/wp-content/uploads/2023/09/Apollo11AnniversaryLitho_updated.pdf ; https://www.nist.gov/history/moon-and-back-25-seconds | Treat the descent stage and retroreflector as separate objects. The reflector remains useful for lunar laser ranging. |
| Surveyor 3 | https://science.nasa.gov/mission/surveyor-3/ | NASA confirms the lander dug trenches and Apollo 12 astronauts recovered its camera system and soil scoop in 1969. |
| Apollo 12 ALSEP | https://www.nasa.gov/wp-content/uploads/static/history/SP-4029/Apollo_18-31_ALSEP_Arrays_and_Status.htm | Apollo 12 array was commanded on 19 Nov 1969 and off 30 Sep 1977. ALSEP was a set of instruments, not one machine. |
| Apollo 15/16/17 Lunar Roving Vehicles | https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_lrv.html | Three rovers were used; each remained at its mission's lunar site. |
| Viking 1 | https://science.nasa.gov/mission/viking/spacecraft-and-science/ | Lander landed 20 Jul 1976; last communication / end of lander mission 13 Nov 1982. |
| Viking 2 | https://science.nasa.gov/mission/viking-2/ | Lander landed 3 Sep 1976; last data / end of lander mission 11 Apr 1980. |
| Sojourner / Mars Pathfinder | https://science.nasa.gov/mission/mars-pathfinder/ | Landing 4 Jul 1997; final Pathfinder data 27 Sep 1997; mission terminated 10 Mar 1998. |
| Spirit | https://science.nasa.gov/mission/mer-spirit/ | Last contact March 2010; NASA ended recovery efforts 25 May 2011. |
| Opportunity | https://science.nasa.gov/mission/mer-opportunity/ | Last communication 10 Jun 2018; NASA declared end of mission 13 Feb 2019. |
| Phoenix | https://science.nasa.gov/mission/mars-phoenix/ | Landed 25 May 2008 in Vastitas Borealis; NASA reports evidence of water ice; end of mission Nov 2008. |
| InSight | https://www.nasa.gov/missions/insight/nasa-retires-insight-mars-lander-mission-after-years-of-science/ | Last communication 15 Dec 2022; NASA announced mission ended 21 Dec 2022. |
| Ingenuity | https://www.nasa.gov/news-release/after-three-years-on-mars-nasas-ingenuity-helicopter-mission-ends/ | Completed 72 flights; rotor damage on landing after flight 72; mission ended Jan 2024. |
| Pioneer 10 | https://science.nasa.gov/mission/pioneer-10/ | Routine contact ended 1997; last signal received 23 Jan 2003. |
| Pioneer 11 | https://science.nasa.gov/mission/pioneer-11/ | Last contact 30 Sep 1995; later engineering data received 24 Nov 1995. |
| NEAR Shoemaker | https://science.nasa.gov/mission/near-shoemaker/ | First spacecraft to orbit an asteroid and first to land on one; touched down on Eros 12 Feb 2001. |
| Dawn | https://science.nasa.gov/mission/dawn/toolkit/end-of-mission/ | Mission ended 1 Nov 2018 after hydrazine depletion; spacecraft remains in a stable orbit around Ceres. |
| Kepler | https://science.nasa.gov/mission/kepler/in-depth/ | Retired 30 Oct 2018 after fuel depletion; remains in a safe orbit away from Earth. |

## Important project-level content issues

### 1. The “17 machines” count needs a transparent counting rule
The README lists grouped entries (for example, Viking 1 and 2; Spirit and Opportunity; Phoenix and InSight; Pioneer 10 and 11; three Lunar Roving Vehicles). Depending on whether the Apollo 11 retroreflector is counted separately and whether each rover/lander is counted individually, the total changes. Publish a short “How we count the 17” note and make the list consistent. The three Apollo LRVs alone are three separate vehicles.

### 2. “Abandoned” is not scientifically precise for every object
Use more descriptive status labels:
- **Inactive on surface** — landers, rovers, instruments no longer operating.
- **Inactive in orbit** — Dawn around Ceres; Kepler around the Sun.
- **Silent / outbound** — Pioneer 10 and 11.
- **Passive experiment still used** — Apollo 11 retroreflector (not an active spacecraft).
This avoids implying all objects were simply discarded in the same way.

### 3. Distinguish four dates in the data model
Do not use one generic `year` field for all meanings. Prefer separate fields:
- `launchYear`
- `landingYear` (where relevant)
- `lastContactDate`
- `missionEndDate`
- `leftAtSiteYear` (for hardware physically left behind)
If the UI can show only one year, label it “Mission ended” and use the formal mission-end year, not the last-contact year.

### 4. Claims that should be cited at the point of use
Every detail page should display a “NASA sources” list. A single references page is useful, but each machine's factual statements should link to the source that supports them. Keep NASA image credits separate from science references.

### 5. Do not claim all content is fully verified yet
This audit confirms the key dates and broad mission descriptions listed above. More specific claims in the four first-person story chapters (especially discoveries, mechanisms, distances and causal explanations) should be checked sentence-by-sentence against the linked mission pages and primary mission reports before final submission.

## Sources used in this audit
All links above are official NASA / NASA Science / NASA NSSDCA / NASA JPL pages except the NIST historical explanation of the Apollo 11 retroreflector deployment.


### 6. Bilingual content is not complete in the current starter implementation
The current `js/i18n.js` translates a subset of interface labels, navigation and status names. The artifact names, summaries and four story chapters in `js/data.js` are English-only. Therefore, do not advertise the current ZIP as fully bilingual yet. To meet the README requirement, add Arabic fields for every artifact and render the selected language's name, summary, site and story chapters; also translate quiz questions, options and explanations. The RTL document direction alone does not translate the underlying content.


## Submission revision applied
- Added a per-entry NASA/JPL/NIST source list to the detail page.
- Explained on Home and About pages that 17 means catalog/story entries, not individual physical objects.
- Corrected the displayed reference year for Sojourner (1998 formal mission termination), Spirit (2011 mission end), Opportunity (2019 mission end), and the Apollo rover group (last deployment 1972).
- Clarified that inactive status does not mean every object is freely drifting.
- The card art remains illustrative emoji/SVG-style art, not NASA photography. Use real images only with exact image-page credits.

## Remaining before final submission
- Full Arabic translations of all artifact narratives, quiz questions and static page copy are still required; do not claim full bilingual coverage yet.
- Check every sentence in each four-part story against its linked source and add further sources where a paragraph combines multiple claims.
- Replace the single `year` field with separate launch, landing, last-contact and formal mission-end dates where relevant.
- The contact form remains a demonstration and does not transmit messages.
