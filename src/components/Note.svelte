<script>
    export let xPos;
    export let yPos;
    export let label;
    export let note_color;
    export let text_color;
    export let scale_degree;
    export let stroke_color;

    let stroke_class = 'thinStroke';
    if (scale_degree === 1) {
        stroke_class = 'thickStroke';
    }
</script>

<rect
    x="{xPos}"
    y="{yPos-10}"
    width="20" 
    height="20" 
    rx="5"
    ry="5"
    stroke="{stroke_color}"
    fill="{note_color}"
    class="{stroke_class}" />

<text
    x="{xPos + 4}"
    y="{yPos + 3}"
    font-size="10"
    fill="{text_color}">{label}</text>

<style>
	.thinStroke {
        stroke-width: 1;
        stroke: rgb(0,0,0);
	}
    .thickStroke {
        stroke-width: 3;
        stroke: rgb(0,0,0);
	}
</style>