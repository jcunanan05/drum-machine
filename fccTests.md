# fCC tests

1. `main#drum-machine`
2. `main#drum-machine > section#display`
3. `main#drum-machine` > 9 clickable elements, and in this order: `Q, W, E, A, S, D, Z, X, C` with a `class="drumpad"`
4. `.drumpad` each with id of the drumpad letter, with HTML5 `audio` and `src` attribute
5. Trigger `audio` in `.drumpad` `onClick`
6. Trigger `audio` in `.drumpad` `onKeyDown`
7. Identify where the sound is coming from in the `#display`