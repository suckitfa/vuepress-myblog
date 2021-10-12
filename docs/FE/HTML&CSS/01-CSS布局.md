### freecodecamp
1. Accessbility  
    辅助功能,亲和力,可访问性
2. period
    一段时间，句号
    In css, class selctor starts with a period.
3. Abbreviated
    简短的，小型的
4. beak
    鸟类的嘴（比如企鹅，这种长长的,尖尖的）

### head
Any markup with information about your page would go into the head tag. T
> Metadata elements, such as link, meta, title, and style, typically go inside the head element.
### HTML5
> HTML5 provides more descriptive tags. Includes 
main | header | footer | nav | video | article | section ......
more easy to read and helps SEO

### img
> selfe closing tag.
> src: url of a image
> alt: contains text which will be displayed once the image failed to load

### a
> href: url of a external(外部的) webpage.
>  (anchor) elements can also be used to create internal(内部的) links to jump to different sections within a webpage. 
```html
<a href="#"></a>
```
### 选择器
- class selector
> the order of the class declarations in the style is most important. The second will overwrite the second declation.
- id selector
> id selector will overrides class selector.
- inline style
> inline style will overides class&id selector.
- !important
```css
.pink-text {
    color:pink !important;
}
```
### 单位
- px

- em 
- rem

### css variable
```css
/* 声明一个变量penguin-skin */
.pengui {
    --penguin-skin:gray;
}
```
### CSS三列布局

- float布局： 左边左浮动，右边右浮动，中间margin：0 100px;
- Position布局: 左边left：0; 右边right：0; 中间left: 100px; right: 100px;
- table布局: 父元素 display: table; 左右 width: 100px; 三个元素display: table-cell;
- 弹性(flex)布局:父元素 display: flex; 左右 width: 100px;
- 网格（gird）布局：
