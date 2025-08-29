<!-- 1.ans -->
difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll are given below-

1.getElementById - it's use to select element by it's id which is unique and its return a single element.

2.getElementsByClassName - it's use to select multiple elements which is use same class name.

3.querySelector - it's use to select the first element that matches a CSS selector.it also known as css selector.

4.querySelectorAll - it's use to select all elements that match a CSS selector.

<!-- 2.ans -->
In js code when we create and insert a new element into DOM.
first of all -
1 . we use set a variable and then write that command document.createElement()
2 . then we can set - inner text , className and id 
3 . when we insert it into DOM - we need a parent element to attach it
  i.appendchild .
  ii.insert it before another element.
  iii.insert element with append and prepend.

<!-- 3. ans  -->
Event Bubbling - event bubbling is a process when its happens on a child element, then it also automatically triggers the same event on it's parents and then it's parent and thats way up to the top of the page(unless we stop it).



<!-- 4.ans -->
Event Delegation - Event Delegation is a technique where we are not adding a separate event listener to every child element. we add event listener to the parent element and then when we click any child we can use event.target and find out which child was clicked.

Event Delegation is useful for it's better performance and handling dynamic element.

<!-- 5.ans -->
difference between preventDefault() and stopPropagation() are as flow -

1.preventDefault() - it will stop the default acton.as like - when we click a link won't open the page and submitting a form won't reload the page.

2.stopPropagation() - it will stop the event from moving upward to parent element. as like - when we clicking a button inside a div will not trigger the div's click event.