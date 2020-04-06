<script>
  export let x = 30;
  export let y = 0;
  export let width = 5;
  export let height = 152;
  export let distanceAboveNut = 0;
  export let fbWidth = 0;
</script>

<rect {x} {y} {width} {height} 
  rx="0" 
  ry="0" 
  fill="#444444" 
  stroke="none" 
  transform="matrix(1,0,0,1,0,0)" 
  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);" />

<path fill="none" 
  stro  ke="#c5a54e" 
  d="M {(distanceAboveNut + 5)} 0 l 0 {fbWidth}"
  transform="matrix(1,0,0,1,0,0)" 
  stroke-width="2" 
  opacity="0.5"
  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);" />
  