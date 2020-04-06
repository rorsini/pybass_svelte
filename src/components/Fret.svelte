<script>
  export let length = 0;
  export let distanceAboveNut = 0;
  export let fbWidth = 0;
  export let fretNum = 0;
</script>

<path 
  fill="none" 
  stroke="#444" 
  d="M {Math.round(length - (length / Math.pow(2, ((fretNum + 1) / 12))) + distanceAboveNut)} 0 l 0 {fbWidth}" 
  transform="matrix(1,0,0,1,0,0)" 
  stroke-width="2" 
  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);" />

<path 
  fill="none" 
  stroke="#222" 
  d="M {(Math.round(length - (length / Math.pow(2, ((fretNum + 1) / 12))) + distanceAboveNut)) + 1} 0 l 0 {fbWidth}" 
  transform="matrix(1,0,0,1,0,0)" 
  stroke-width="1" 
  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);" />

<path 
  fill="none" 
  stroke="#c5a54e"
  d="M {(Math.round(length - (length / Math.pow(2, ((fretNum + 1) / 12))) + distanceAboveNut)) + 2} 0 l 0 {fbWidth}" 
  transform="matrix(1,0,0,1,0,0)" 
  stroke-width="2"
  opacity="0.5" 
  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);" />