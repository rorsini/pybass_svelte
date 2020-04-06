<script>
  export let string;
  export let fbLength;
</script>

<path fill="none" 
  stroke="#888" 
  d="M 0 {string} l {fbLength} 0"
  transform="matrix(1,0,0,1,0,0)" 
  stroke-width="4" />

<path fill="none" 
  stroke="#e2e2e2" 
  d="M 0 {string - 0.5} l {fbLength} 0"
  transform="matrix(1,0,0,1,0,0)" 
  stroke-width="0.8" />