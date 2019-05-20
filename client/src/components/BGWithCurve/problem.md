The SVG:

```html
    <svg 
    id="bgwithcurve__topCurveSvg" 
    xmlns="http://www.w3.org/2000/svg"   
    viewBox="0 0 1907.798 167.201"
    >
        <path 
        id="bgwithcurve__topCurvePath" 
        className="cls-1" 
        d="M0,1498.192s477.615-165.479,991.947,0,907.851,0,907.851,0v85.627H0Z" 
        transform="translate(4 -1420.617)"
        />
    </svg>
```

The css: 

```css
    #bgwithcurve__container {
        width: 100vw;
        position: relative;
        left: 50%;
        right: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
    }

    #bgwithcurve__topCurvePath {
        fill: #5e6b73;
        stroke: #5e6b73;
        stroke-width: 8px;
        /* height: 100%; */
    }


    #bgwithcurve__topCurveSvg {
        padding: 0;
        height:100%;
        width: 100%;
    }

    #bgwithcurve__content {
        height: 100vh;
        background-color: #5e6b73;
        width: 100%;
    }
```