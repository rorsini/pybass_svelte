<script>
    export let xPos;
    export let yPos;
    export let label;
    export let note_color;
    export let text_color;
    export let scale_degree;
    export let stroke_color;

    let stroke_class =
        (scale_degree === 1) ?
            'thickStroke' :
            'thinStroke';

    let textXPos =
        (label.length == 1) ?
            xPos + 6 :
            xPos + 2;
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
    x="{textXPos}"
    y="{yPos + 4}"
    font-size="14"
    font-family="Courier New, Arial, Helvetica, sans-serif"
    font-weight="bold"
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