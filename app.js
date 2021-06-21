// selectors
const boxContainer = document.querySelector('.box-container');
const sortBtn = document.querySelector('#sort-btn');
const shuffleBtn = document.querySelector('#shuffle-btn');

// functions
function createBox(arr) {
    let str = '';
    arr.forEach( item => {
        if (window.outerWidth <= 480) {
            str += '<div class="border-'+ item.color +' box" data-color="' + item.color +'">';
        } else {
            str += '<div class="background-'+ item.color +' box" data-color="' + item.color +'">';
        }
        str += item.key;
        str += '</div>';
    });
    boxContainer.innerHTML = str;
}

// Sort function
function sortArr(arr) {
    const narr = [ ...arr];
    narr.sort( (a,b) => a.key - b.key);
    createBox(narr);
}

// Shuffle array function
function shuffleArr(arr) {
    const narr = arr.map(item => {
        return {
            sort: Math.random(),
            ...item
        }
    }).sort( (a,b) => a.sort - b.sort);
    createBox(narr);
}

// Event Listeners
sortBtn.addEventListener('click', () => {
    sortArr(ourArray);
});

shuffleBtn.addEventListener('click', () => {
    shuffleArr(ourArray);
});

window.addEventListener('resize', () => {
    if (window.outerWidth <= 480) {
        document.querySelectorAll('.box').forEach(box => {
            const no = box.dataset.color;
            box.classList.remove('background-' + no);
            box.classList.add('border-' + no);
            box.classList.add('background-grey');
        })
    } else {
        document.querySelectorAll('.box').forEach(box => {
            const no = box.dataset.color;
            box.classList.remove('border-' + no);
            box.classList.add('background-' + no);
            box.classList.remove('background-grey');
        })
    }
})

const data = [
    {
        key: 1,
        color: '1'
    },
    {
        key: 2,
        color: '2'
    },
    {
        key: 3,
        color: '3'
    },
    {
        key: 4,
        color: '2'
    },
    {
        key: 5,
        color: '3'
    },
    {
        key: 6,
        color: '4'
    },
    {
        key: 7,
        color: '4'
    },
    {
        key: 8,
        color: '1'
    },
    {
        key: 9,
        color: '3'
    }
];


const ourArray = [ ...data];
createBox(ourArray);