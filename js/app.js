const ulNavList = document.getElementById("navbar__list");
const sections = [...document.querySelectorAll("section")];
const navMenu = document.querySelector(".navbar__menu");
// End of Global Variables

// create a function that add  dynamic navbar 
const headerNavBar = () => {
    sections.forEach((section) => {
        const liElement = document.createElement("li");
        const aTag = document.createElement("a");
        aTag.classList.add("menu__link");
        const sectionId = section.getAttribute("id");
        aTag.href = "#" + sectionId;
        aTag.innerHTML = `${sectionId}`;
        liElement.append(aTag);
        ulNavList.append(liElement);
        // add an event listener to the window and  highlight the navbar link when the section  scrolls into viewport.
        window.addEventListener("scroll", () => {
            if (
                window.pageYOffset > section.offsetTop - 70 &&
                window.pageYOffset <= section.offsetTop - 70 + section.offsetHeight
            ) {
                navMenu.querySelector(`a[href*=${sectionId}]`)
                    .classList.add("active");
            } else {
                navMenu
                    .querySelector(`a[href*=${sectionId}]`)
                    .classList.remove("active");
            }
        });
        //add event listener to li element and when it clicks ,scrolling to the appropriate page
        liElement.addEventListener("click", (e) => {
            e.preventDefault();
            section.scrollIntoView({
                behavior: "smooth"
            });
        });
    });
};
// End of function

//calling/invoking the function
headerNavBar();

// create a function to make the sections to add active class when it's on viewport
const sectionActiveClass = () => {
    sections.map(function (section) {
        if (
            section.getBoundingClientRect()
            .top >= 0 &&
            section.getBoundingClientRect()
            .top <= 150
        ) {
            section.classList.add("your-active-class");
        } else {
            section.classList.remove("your-active-class");
        }
    });
};
// End of function

//add an event listener to the document  and pass a function name as a reference

document.addEventListener("scroll", sectionActiveClass);

