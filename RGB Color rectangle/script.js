const colorPickers = document.querySelectorAll('.colorPicker');
const inputs = document.querySelectorAll('input');

colorPickers.forEach((picker, index) => {
    picker.addEventListener('mousemove', (e) => {
        const rect = e.target.getBoundingClientRect();
        const rectInsideVal = e.clientX - rect.left;
        if (rectInsideVal < rect.width) {
            const colorValue = Math.ceil(gsap.utils.mapRange(0, rect.width, 255, 0, rectInsideVal));
            inputs[index].value = colorValue;
            picker.style.backgroundColor = getRgbString(index, colorValue);
        }
    });
});

function getRgbString(index, value) {
    const rgbComponents = [[value, 0, 0], [0, value, 0], [0, 0, value]];
    return `rgb(${rgbComponents[index].join(', ')})`;
}


// function getRgbString(index, value) {
//   switch (index) {
//     case 0:
//       return `rgb(${value}, 0, 0)`;
//     case 1:
//       return `rgb(0, ${value}, 0)`;
//     case 2:
//       return `rgb(0, 0, ${value})`;
//     default:
//       return '';
//   }
// }



// Container 2
let rectangle = document.querySelector('.rectangle')
let rgbValue = document.querySelector('.rgbValue')

rectangle.addEventListener('mousemove', (e) => {
    let rect = e.target.getBoundingClientRect()
    let rectInsideVal = e.clientX - rect.left //mere cursor ki location minus ki rectangle ke leftest point se
    console.log(rectInsideVal)

    if (rectInsideVal < rect.width / 2) {
        let redColor = Math.ceil(gsap.utils.mapRange(0, rect.width / 2, 255, 0, rectInsideVal))
        rectangle.style.backgroundColor = `rgb(${redColor}, 0, 0)`
        rgbValue.innerHTML = `rgb(${redColor}, 0, 0)`
    } else {
        let blueColor = Math.ceil(gsap.utils.mapRange(rect.width / 2, rect.width, 0, 255, rectInsideVal))
        rectangle.style.backgroundColor = `rgb(0, 0, ${blueColor})`
        rgbValue.innerHTML = `rgb(0, 0, ${blueColor})`
    }
})

rectangle.addEventListener('mouseleave', () => {
    gsap.to(rectangle, {
        backgroundColor: '#fff',
    })
    rgbValue.innerHTML = 'rgb(255,255,255)'
})