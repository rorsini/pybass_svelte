<script>
    export let xPos;
    export let yPos;
    export let label;
    export let note_color;
    export let text_color;
    export let scale_degree;
    export let stroke_color;

    let strokeWidth;
    $: strokeWidth = (scale_degree == 1) ? 3 : 1;

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
    stroke-width="{strokeWidth}"
    fill="{note_color}" />

<text
    x="{textXPos}"
    y="{yPos + 4}"
    fill="{text_color}">{label}</text>
