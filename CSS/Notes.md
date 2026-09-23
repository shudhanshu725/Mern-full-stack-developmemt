# FONT PROPERTY

1. font size : px, rem ,em
2. font weight : bold, light, normal
3. font style : normal , italic.
4.  font family : ......etc
5. google font


# Text property
1. Text-align : start, end, center,  justify
2. text- transform : uppercase, lowercase, none
3. text-decoration: underline, overline, line-through
4. text-underline : value in pixel
5. line-height: it totaly depend on font size
6. letter-spacing: value in pixel
7. word spacing: value in pixel
8. -webket-text-strock: thickness  color;
9. text-shadow: offset-x   offset-y    blur radius   color of shadow;

# CSS Box model rule

+------------------------------------------------------+
|                        margin                        |
|   +----------------------------------------------+   |
|   |                    border                    |   |
|   |   +--------------------------------------+   |   |
|   |   |               padding                |   |   |
|   |   |   +------------------------------+   |   |   |
|   |   |   |           content            |   |   |   |
|   |   |   |       width x height         |   |   |   |
|   |   |   +------------------------------+   |   |   |
|   |   +--------------------------------------+   |   |
|   +----------------------------------------------+   |
+------------------------------------------------------+

total size = content + padding + border + margin
```

  i) it added in css-3
  ii) According to css box model rule if we write anything it will be wrapped within a rectangular box.
  iii) it has 4 major part :-- 1.Margin, border box, padding box, content box 

1)Box-sizing: Content box(default), Border- Box.
  a)content-box:
  width = only content
  b)border-box:
  width = content + padding + border 

2)Margin property: margin-top, margin-right,margin-left, margin-bottom (in px)
  margin : T R B L ; margin: __TB__,___LR___;

3)How to horizontally center a container 
  margin: 0  auto; Margin-inline: left Right; margin-block: top bottom;

4) Padding property:- padding-top, padding-right,padding-left, padding-bottom (in px)
  padding : T R B L ; padding: __TB__,___LR___; padding-inline: left Right; padding-block: top bottom;

5) Border property :- border-width : px ; Border-style: solid, dotted,dashed, double , grove. 
Border-color : red ; border-top,right,bottom,left: width style color; Border-radius: top-left_top-right_bottom-right_bottom-left;
border-radius: 50% for circle ; 

6) Overflow property :- overflow : visible, hidden, scroll, auto .
7) Box shadow: offset-x__offset-y__blur radius__spread radius__color of shadow__inset(for inside shadow)

### Flex box ### 
    It is a one dimension layout module system

Flex terminology:- 
1) Display: flex , 
2) flex-direction : row(default), column , 
3) flex-wrap : no wrap(default), wrap, wrap-reverse , 
4) flex-flow : ___(flex direction) ___(flex wrap) 
5)gap : row gap  column gap , 
6) justify-content : start(default),emd , center, space between , space around, space evenly , 
7) align-item : stretch(default), start, end , center 
8)align-content: start, end , center , space between , space around, space evenly, stretch(default) .
 



