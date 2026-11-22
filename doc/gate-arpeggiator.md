# Korg Kaossilator: gate arpeggiator pattern list

Transcribed from the reference card [KaossArpegBIG.jpg](./images/KaossArpegBIG.jpg).

The device has 50 gate arpeggiator patterns, `G.00` to `G.49`. Each one is a rhythm of note on/off gates that loops at the tempo (BPM). The card draws each pattern on a 4-beat grid, with dark bars for gate on and light gaps for gate off.

## Pattern lengths (from the card's legend)

| Patterns            | Loop length |
| ------------------- | ----------- |
| G.00, 01, 03, 11–20 | 1 beat      |
| G.02, 07–10         | 3/4 beat    |
| G.21–23             | 5/4 beat    |
| G.04, 24–27         | 6/4 beat    |
| G.05, 28–41         | 2 beats     |
| G.06, 42–49         | 4 beats     |

Swing patterns: **G.18–20, 27, 39–41**.

## Patterns

These patterns were measured from the card image's pixels (see [Method](#method)). All positions and lengths are in **beats**.

**Steps** shows each pattern as sixteenth-note steps, with one group of four per beat:

- `X`: a gate starts on this step
- `=`: the previous gate is still held
- `.`: a very short blip (gate under 0.08 beat)
- `-`: rest

**Gates** lists each gate as `start+length`, measured in beats. A normal gate ends about 0.07 beat before the next step: one step measures about 0.18, two steps about 0.43. Some gates are deliberately short (about 0.1 beat, e.g. G.32, G.45). The Steps column rounds those up to one step, but the Gates column keeps the measured length.

In **swing** patterns, every off-beat sixteenth (the 2nd and 4th of each beat) moves later, to 1/3 and 5/6 of the beat, which is triplet swing. The Steps column still shows those patterns on the straight grid. Their gate lengths are less regular, so treat the Gates column as the reference.

| Pattern | Length | Swing | Steps                 | Gates (start+length, beats)                                                                                           |
| ------- | ------ | ----- | --------------------- | --------------------------------------------------------------------------------------------------------------------- |
| G.00    | 1      |       | `XXXX`                | 0+0.18, 0.25+0.17, 0.5+0.17, 0.75+0.18                                                                                |
| G.01    | 1      |       | `X=X=`                | 0+0.37, 0.5+0.36                                                                                                      |
| G.02    | 3/4    |       | `X==`                 | 0+0.62                                                                                                                |
| G.03    | 1      |       | `X===`                | 0+0.81                                                                                                                |
| G.04    | 6/4    |       | `X=== =-`             | 0+1.25                                                                                                                |
| G.05    | 2      |       | `X=== ===-`           | 0+1.75                                                                                                                |
| G.06    | 4      |       | `X=== ==== ==== ===-` | 0+3.74                                                                                                                |
| G.07    | 3/4    |       | `XX-`                 | 0+0.18, 0.25+0.17                                                                                                     |
| G.08    | 3/4    |       | `X=-`                 | 0+0.5                                                                                                                 |
| G.09    | 3/4    |       | `X-X`                 | 0+0.24, 0.5+0.17                                                                                                      |
| G.10    | 3/4    |       | `.X-`                 | 0+0.06, 0.25+0.3                                                                                                      |
| G.11    | 1      |       | `X=XX`                | 0+0.43, 0.5+0.17, 0.75+0.17                                                                                           |
| G.12    | 1      |       | `XXX=`                | 0+0.18, 0.25+0.17, 0.5+0.43                                                                                           |
| G.13    | 1      |       | `XX-X`                | 0+0.18, 0.25+0.17, 0.75+0.17                                                                                          |
| G.14    | 1      |       | `.X=.`                | 0+0.05, 0.25+0.36, 0.75+0.05                                                                                          |
| G.15    | 1      |       | `.-X=`                | 0+0.05, 0.5+0.43                                                                                                      |
| G.16    | 1      |       | `X-XX`                | 0+0.18, 0.5+0.17, 0.75+0.17                                                                                           |
| G.17    | 1      |       | `..X=`                | 0+0.04, 0.25+0.04, 0.5+0.36                                                                                           |
| G.18    | 1      | yes   | `X.X.`                | 0+0.15, 0.333+0.06, 0.5+0.23, 0.833+0.07                                                                              |
| G.19    | 1      | yes   | `X-X.`                | 0+0.14, 0.5+0.23, 0.833+0.07                                                                                          |
| G.20    | 1      | yes   | `..XX`                | 0+0.07, 0.333+0.02, 0.5+0.23, 0.833+0.11                                                                              |
| G.21    | 5/4    |       | `X=X= .`              | 0+0.43, 0.5+0.33, 1+0.05                                                                                              |
| G.22    | 5/4    |       | `X=-X -`              | 0+0.48, 0.75+0.23                                                                                                     |
| G.23    | 5/4    |       | `X-X- X`              | 0+0.16, 0.5+0.17, 1+0.18                                                                                              |
| G.24    | 6/4    |       | `X=XX XX`             | 0+0.42, 0.5+0.17, 0.75+0.17, 1+0.18, 1.25+0.17                                                                        |
| G.25    | 6/4    |       | `XXX= X=`             | 0+0.17, 0.25+0.17, 0.5+0.42, 1+0.43                                                                                   |
| G.26    | 6/4    |       | `X--X =-`             | 0+0.24, 0.75+0.49                                                                                                     |
| G.27    | 6/4    | yes   | `XX-X XX`             | 0+0.23, 0.333+0.1, 0.833+0.11, 1+0.23, 1.333+0.11                                                                     |
| G.28    | 2      |       | `XX-X X-XX`           | 0+0.17, 0.25+0.17, 0.75+0.17, 1+0.18, 1.5+0.17, 1.75+0.18                                                             |
| G.29    | 2      |       | `XXX= .XXX`           | 0+0.17, 0.25+0.17, 0.5+0.43, 1+0.05, 1.25+0.18, 1.5+0.18, 1.75+0.18                                                   |
| G.30    | 2      |       | `X=X= .X=X`           | 0+0.42, 0.5+0.42, 1+0.05, 1.25+0.43, 1.75+0.18                                                                        |
| G.31    | 2      |       | `X--X ===-`           | 0+0.23, 0.75+0.99                                                                                                     |
| G.32    | 2      |       | `X--X --X-`           | 0+0.1, 0.75+0.11, 1.5+0.11                                                                                            |
| G.33    | 2      |       | `XX.X -.X-`           | 0+0.17, 0.25+0.16, 0.5+0.04, 0.75+0.3, 1.25+0.05, 1.5+0.3                                                             |
| G.34    | 2      |       | `X=.X =X=.`           | 0+0.42, 0.5+0.04, 0.75+0.43, 1.25+0.43, 1.75+0.05                                                                     |
| G.35    | 2      |       | `.X-X -.X-`           | 0+0.04, 0.25+0.3, 0.75+0.3, 1.25+0.05, 1.5+0.3                                                                        |
| G.36    | 2      |       | `.-X= .X=-`           | 0+0.04, 0.5+0.36, 1+0.05, 1.25+0.36                                                                                   |
| G.37    | 2      |       | `.-.X =.X=`           | 0+0.04, 0.5+0.05, 0.75+0.36, 1.25+0.05, 1.5+0.36                                                                      |
| G.38    | 2      |       | `X==X --..`           | 0+0.61, 0.75+0.23, 1.5+0.05, 1.75+0.05                                                                                |
| G.39    | 2      | yes   | `XX.X -.X=`           | 0+0.23, 0.333+0.1, 0.5+0.06, 0.833+0.24, 1.333+0.03, 1.5+0.36                                                         |
| G.40    | 2      | yes   | `..XX =.X-`           | 0+0.06, 0.333+0.02, 0.5+0.23, 0.833+0.41, 1.333+0.03, 1.5+0.24                                                        |
| G.41    | 2      | yes   | `X=-X =-X=`           | 0+0.48, 0.833+0.49, 1.5+0.32                                                                                          |
| G.42    | 4      |       | `X==- X==- X=-X -X-X` | 0+0.73, 1+0.74, 2+0.49, 2.75+0.3, 3.25+0.3, 3.75+0.12                                                                 |
| G.43    | 4      |       | `X=-X =-X= -X=- X=X=` | 0+0.48, 0.75+0.48, 1.5+0.49, 2.25+0.5, 3+0.43, 3.5+0.37                                                               |
| G.44    | 4      |       | `X=-- X=-X =-X= -X=-` | 0+0.54, 1+0.49, 1.75+0.49, 2.5+0.49, 3.25+0.49                                                                        |
| G.45    | 4      |       | `X-X- -X-- X--X --X-` | 0+0.1, 0.5+0.11, 1.25+0.11, 2+0.12, 2.75+0.11, 3.5+0.11                                                               |
| G.46    | 4      |       | `X-X= -X-X -X=- X-X-` | 0+0.23, 0.5+0.48, 1.25+0.24, 1.75+0.24, 2.25+0.49, 3+0.24, 3.5+0.24                                                   |
| G.47    | 4      |       | `XXXX X-XX -XX- XXX-` | 0+0.16, 0.25+0.11, 0.5+0.11, 0.75+0.11, 1+0.18, 1.5+0.18, 1.75+0.18, 2.25+0.18, 2.5+0.18, 3+0.18, 3.25+0.12, 3.5+0.18 |
| G.48    | 4      |       | `X==- .X-X -X=- X-X-` | 0+0.73, 1+0.05, 1.25+0.24, 1.75+0.24, 2.25+0.43, 3+0.24, 3.5+0.24                                                     |
| G.49    | 4      |       | `X=== =-XX XXXX =XX=` | 0+1.18, 1.5+0.11, 1.75+0.11, 2+0.11, 2.25+0.12, 2.5+0.12, 2.75+0.37, 3.25+0.12, 3.5+0.37                              |

## Method

1. **Calibrate.** In image pixels, the beat lines sit at x = 122 (beat 0), 550 (beat 2) and 763 (beat 3), so one beat is 213.7 px. The rows are 19 px apart, starting at y ≈ 223 for G.00. The rows were located from the alternating yellow/blue background.
2. **Measure.** For each row, take the median of the 3 centre pixel lines (this smooths out JPEG noise) and find runs with luminance below 90, which are the black bars. Measuring along the centreline sidesteps the rounded corners: a capsule shape is at full length in its middle. Runs past the pattern length are dropped; those come from the card border and the text of the inset legend.
3. **Snap.** Gate starts are snapped to the sixteenth grid, or to the swing grid (0, 1/3, 1/2, 5/6 of each beat) for swing patterns. Measured starts were within ±0.02 beat of the grid. Lengths are kept as measured, to ±0.01 beat.
4. **Verify.** The snapped data was redrawn underneath each original row and checked by eye. All 50 patterns matched.
