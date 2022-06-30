# roll-text [Web Component]

## Dependencies

- gsap

## Usage

```javascript
import './path/to/roll-text/roll-text'
```

There's 2 ways to use this component.
- If the default and hover text are the same, you might want to avoid duplicating text in the DOM (for SEO reasons).  
In that case, use the `data-content` attribute for the hover text. The value of this attribute will be used as content for an `:after` pseudo-element.

```html
<roll-text>
    <div>
        <div>Lorem ipsum</div>
        <div data-content="Lorem ipsum"></div>
    </div>
</roll-text>
```
- If the default text and hover are different, or if you need to nest elements like images, use it simply this way

```html
<roll-text>
    <div>
        <div>Default text <img src=""></div>
        <div>Hover text <img src=""></div>
    </div>
</roll-text>
```