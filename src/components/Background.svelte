<script>
  export let fbLength = 0;
  export let fbWidth = 0;
</script>

<defs>
  <linearGradient id="myGradient" gradientTransform="rotate(90)">
    <stop offset="0%" stop-color="#ffdd83" />
    <stop offset="90%"  stop-color="#e1b94e" />
  </linearGradient>
</defs>
<rect 
  x="-10" 
  y="0" 
  width="{fbLength + 8}" 
  height="{fbWidth -1 }" 
  rx="10" 
  ry="10" 
  fill="url('#myGradient')" 
  stroke="#d7b14a" 
  transform="matrix(1,0,0,1,0,0)" 
  stroke-width="4" 
  opacity="1" 
  fill-opacity="1" 
  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); opacity: 1; fill-opacity: 1;" />

<path 
  fill="none"
  stroke="#be8b00"
  d="M 0 {(fbWidth - 1)} l {(fbLength - 7)} 0"
  transform="matrix(1,0,0,1,0,0)"
  stroke-width="3"
  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);" />
