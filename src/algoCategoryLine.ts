export default function algoCategoryLine(
  algoMenu: HTMLUListElement,
  algoMenuLine: HTMLLIElement
){
  let leftDef: number=0, widthDef: number=0;
  let calcPosition: number, calcWidth: number;
  
  // *if the user have not click anything in the algo picker
  let isFirstTime: boolean = true;

  // minus 1 to exclude this element: <li class="menu-line"></li>
  for(let i=0; i<algoMenu.childElementCount-1; i++){
    /* references
      https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element
      https://stackoverflow.com/questions/11634770/get-position-offset-of-element-relative-to-a-parent-container
    */

    // if the li element is hovered
    algoMenu.children[i].addEventListener("mouseover", (e: Event) => {
      let menu = e.target as HTMLInputElement;
      console.log(menu);
      console.log(menu.offsetLeft);

      // show the line
      algoMenuLine.style.display = "block";
      
      // adjust the width
      calcWidth = menu.offsetWidth;
      algoMenuLine.style.width = calcWidth + "px";
      
      // adjust the coordinate
      calcPosition = menu.offsetLeft;
      algoMenuLine.style.left = calcPosition + "px";
    });
    
    // if the li element is clicked
    algoMenu.children[i].addEventListener("click", () => {
      console.log("clicked");
      
      // make the menu line fixed place according where it gets clicked
      algoMenuLine.style.width = calcWidth + "px";
      algoMenuLine.style.left = calcPosition + "px";

      widthDef = calcWidth;
      leftDef = calcPosition;
      isFirstTime=false;
    });
  }
  
  algoMenu.addEventListener("mouseleave", () => {
    // *if the user have not click anything in the algo picker, remove the line animation.
    if(isFirstTime===true) algoMenuLine.style.display = "none"
    
    // but we will maintain where is the last hovered element
    algoMenuLine.style.width = widthDef + "px";
    algoMenuLine.style.left = leftDef + "px";
  });
}