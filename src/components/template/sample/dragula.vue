<template>
    <div class="parent">
        <label for="hy"
            >Move stuff between these two containers. Note how the stuff gets
            inserted near the mouse pointer? Great stuff.</label
        >

        <div class="wrapper">
            <div id="left-defaults" class="container-a">
                <div>
                    You can move these elements between these two containers
                </div>
                <div>Moving them anywhere else isn't quite possible</div>
                <div>
                    Anything can be moved around. That includes images,
                    <a href="https://github.com/bevacqua/dragula">links</a>, or
                    any other nested elements.
                    <div class="image-thing">
                        <img
                            src="http://bevacqua.github.io/dragula/resources/icon.svg"
                            onerror='this.src="resources/icon.png"'
                            alt="dragula"
                        />
                    </div>
                    <sub>(You can still click on links, as usual!)</sub>
                </div>
            </div>

            <div id="right-defaults" class="container-a">
                <div>
                    There's also the possibility of moving elements around in
                    the same container, changing their position
                </div>
                <div>
                    This is the default use case. You only need to specify the
                    containers you want to use
                </div>
                <div>More interactive use cases lie ahead</div>
                <div>
                    Moving <code>&lt;input/&gt;</code> elements works just fine.
                    You can still focus them, too. <input placeholder="See?" />
                </div>
                <div>
                    Make sure to check out the
                    <a href="https://github.com/bevacqua/dragula#readme"
                        >documentation on GitHub!</a
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import dragula from 'dragula';

export default {
    name: 'dragula-sample',
    mounted() {
        dragula([this.$$('left-defaults'), this.$$('right-defaults')]);
    },
    methods: {
        $$: (id) => {
            return document.getElementById(id);
        },
    },
};
</script>

<style scoped lang="scss">
.gu-mirror {
    position: fixed !important;
    margin: 0 !important;
    z-index: 9999 !important;
    opacity: 0.8;
    -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=80)';
    filter: alpha(opacity=80);
}
.gu-hide {
    display: none !important;
}
.gu-unselectable {
    -webkit-user-select: none !important;
    -moz-user-select: none !important;
    -ms-user-select: none !important;
    user-select: none !important;
}
.gu-transit {
    opacity: 0.2;
    -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=20)';
    filter: alpha(opacity=20);
}
.parent {
    background-color: rgba(255, 255, 255, 0.2);
    margin: 50px 0;
    padding: 20px;

    // overwrite style
    position: relative;
    margin: 0 auto;
    max-width: 760px;
    color: #ecf0f1;
    font-family: Georgia, Helvetica;
    font-size: 17px;
    background-color: #942a57;
    box-sizing: initial;
}
.wrapper {
    display: table;
}
.container-a {
    display: table-cell;
    background-color: rgba(255, 255, 255, 0.2);
    width: 50%;
}
.container-a:nth-child(odd) {
    background-color: rgba(0, 0, 0, 0.2);
}
.container-a > div,
.gu-mirror {
    margin: 10px;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.2);
    transition: opacity 0.4s ease-in-out;
}
.container-a > div {
    cursor: move;
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;
}
.gu-mirror {
    cursor: grabbing;
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
}
.image-thing {
    margin: 20px 0;
    display: block;
    text-align: center;
}
</style>
