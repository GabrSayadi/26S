const mainConent = document.getElementById('main_con');
const convertButton = document.getElementById('convertButton');
const vistedPalce = document.getElementById('count_of_place');
const arabicName = [
    {
        id: "yemen_sea",
        name: "بحر اليمن"
    },
    {
        id: "jaser_red_sea",
        name: "الجزر اليمنية - البحر الأحمر"
    },
    {
        id: "sadah",
        name: "صعدة"
    },
    {
        id: "alhudaydah",
        name: "الحديدة"
    },
    {
        id: "almahwit",
        name: "المحويت"
    },
    {
        id: "dhamar",
        name: "ذمار"
    },
    {
        id: "hajjah",
        name: "حجة"
    },
    {
        id: "amran",
        name: "عمران"
    },
    {
        id: "ibb",
        name: "إب"
    },
    {
        id: "lahij",
        name: "لحج"
    },
    {
        id: "taizz",
        name: "تعز"
    },
    {
        id: "almahrah",
        name: "المهرة"
    },
    {
        id: "albayda",
        name: "البيضاء"
    },
    {
        id: "aldali",
        name: "الضالع"
    },
    {
        id: "aljawf",
        name: "الجوف"
    },
    {
        id: "shabwah",
        name: "شبوة"
    },
    {
        id: "marib",
        name: "مأرب"
    },
    {
        id: "sanaa",
        name: "صنعاء"
    },
    {
        id: "hadramawt",
        name: "حضرموت و سقطرى"
    },
    {
        id: "amanatalasimah",
        name: "أمانة العاصمة"
    },
    {
        id: "raymah",
        name: "ريمة"
    },
    {
        id: "adan",
        name: "عدن"
    },
    {
        id: "abyan",
        name: "أبين"
    }
]
const vistedSet = new Set();

addEventListener('click', (e) => {
    const id = e.target.id;
    if (id && id.toString() !== 'yemen_sea') {
        const element = document.getElementById(id);
        element.style.fill = 'red';
        vistedSet.add(id);
        console.log(vistedSet.size);
        vistedPalce.innerText = vistedSet.size;
    }
    
})

const changeIdToText = (id) => {
    const city = arabicName.find(e => e.id === id);
    if (city.name === 'بحر اليمن') return 'بحر اليمن';
    if (city.name === 'الجزر اليمنية - البحر الأحمر') return 'الجزر اليمنية - البحر الأحمر';
    if (city.name === 'أمانة العاصمة') return 'أمانة العاصمة';
    return 'محافظة ' + city.name;
}

document.querySelectorAll(".paths").forEach(e => {
    e.setAttribute('class', `paths ${e.id}`);
    e.addEventListener("mouseover", function () {
        window.onmousemove=function (j) {
            x = j.clientX
            y = j.clientY
            document.getElementById('name').style.top = y-60  + 'px'
            document.getElementById('name').style.left = x +10 + 'px'
        }
        const classes=e.className.baseVal.replace(/ /g, '.')
        document.getElementById("name").style.opacity = 1
        
        document.getElementById("namep").innerText = changeIdToText(e.id)
    })
    e.addEventListener("mouseleave", function () {
        const classes=e.className.baseVal.replace(/ /g, '.')
        document.getElementById("name").style.opacity = 0
    })
})

function convertToImage() {
    domtoimage.toBlob(mainConent)
        .then(function (blob) {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.download = 'my26.png';
            link.href = url;
            link.click();
    });
}

convertButton.addEventListener('click', convertToImage);