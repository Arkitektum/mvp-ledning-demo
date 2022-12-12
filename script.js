const openFeatureElementsDialog = () => {
    const featureElementsDialogElement = document.getElementById("feature-elements-dialog");
    featureElementsDialogElement.classList.add("active");
};

const closeFeatureElementsDialog = () => {
    const featureElementsDialogElement = document.getElementById("feature-elements-dialog");
    featureElementsDialogElement.classList.remove("active");
};

const activateElement = (arrowElement, startTime, endTime) => {
    if (startTime) {
        setTimeout(() => {
            arrowElement.classList.add("active");
        }, startTime);
    }
    if (endTime) {
        setTimeout(() => {
            arrowElement.classList.remove("active");
        }, endTime);
    }
};


const activateSfkbFkbMapElement = (many = false, startTime) => {
    const sfkbFkb_default = document.getElementById("sfkb-fkb_default");
    const sfkbFkb_results_single = document.getElementById("sfkb-fkb_results_single");
    const sfkbFkb_results_many = document.getElementById("sfkb-fkb_results_many");

    if (startTime) {
        setTimeout(() => {
            sfkbFkb_default.classList.remove("active");
            if (many) {
                sfkbFkb_results_many.classList.add("active");
            } else {
                sfkbFkb_results_single.classList.add("active");
            }
        }, startTime);
    }
};

const activateSfkbSamlebaseMapElement = (many = false, startTime) => {
    const sfkbSamlebase_default = document.getElementById("sfkb-samlebase_default");
    const sfkbSamlebase_results_single = document.getElementById("sfkb-samlebase_results_single");
    const sfkbSamlebase_results_many = document.getElementById("sfkb-samlebase_results_many");

    if (startTime) {
        setTimeout(() => {
            sfkbSamlebase_default.classList.remove("active");
            if (many) {
                sfkbSamlebase_results_many.classList.add("active");
            } else {
                sfkbSamlebase_results_single.classList.add("active");
            }
        }, startTime);
    }
};

const activateEkomportalenMapElement = (startTime) => {
    const ekomportalen_default = document.getElementById("ekomportalen_default");
    const ekomportalen_results = document.getElementById("ekomportalen_results");

    if (startTime) {
        setTimeout(() => {
            ekomportalen_default.classList.remove("active");
            ekomportalen_results.classList.add("active");
        }, startTime);
    }
};

const runSimulatedRequests = (many = false) => {
    const openDialogButton = document.getElementById("openDialogButton");
    const arrowToFellesApi = document.getElementById("arrowToFellesApi");
    const fellesApiBox = document.getElementById("fellesApi");
    const arrowToKoeordningForObjekter = document.getElementById("arrowToKoeordningForObjekter");
    const koeordningForObjekter = document.getElementById("koeordningForObjekter");
    const arrowToSfkbFkb = document.getElementById("arrowToSfkbFkb");
    const sfkbFkb = document.getElementById("sfkb-fkb");
    const arrowToSfkbSamlebase = document.getElementById("arrowToSfkbSamlebase");
    const sfkbSamlebase = document.getElementById("sfkb-samlebase");
    const arrowToEkomportalen = document.getElementById("arrowToEkomportalen");
    const ekomportalen = document.getElementById("ekomportalen");
    
    openDialogButton.innerText = many ? "Mange objekter er valgt" : "Ett objekt er valgt";
    activateElement(openDialogButton, 1);

    activateElement(arrowToFellesApi, 1, 1900);
    activateElement(fellesApiBox, 1900);
    activateElement(arrowToKoeordningForObjekter, 1900, 3800);
    activateElement(koeordningForObjekter, 3800);

    let sfkbFkbEndTime;
    let sfkbSamlebaseEndTime;
    let ekomportalenEndTime;

    if (Math.random() < 1/3) {
        sfkbFkbEndTime = 5700;
        sfkbSamlebaseEndTime = 6300;
        ekomportalenEndTime = 6900;
    } else if (Math.random() < 2/3) {
        sfkbFkbEndTime = 6300;
        sfkbSamlebaseEndTime = 6900;
        ekomportalenEndTime = 5700;
    } else {
        sfkbFkbEndTime = 6900;
        sfkbSamlebaseEndTime = 5700;
        ekomportalenEndTime = 6300;
    }
    
    

    activateElement(arrowToSfkbFkb, 3800, sfkbFkbEndTime);
    activateElement(sfkbFkb, sfkbFkbEndTime);
    activateSfkbFkbMapElement(many, sfkbFkbEndTime);

    activateElement(arrowToSfkbSamlebase, 3800, sfkbSamlebaseEndTime);
    activateElement(sfkbSamlebase, sfkbSamlebaseEndTime);
    activateSfkbSamlebaseMapElement(many, sfkbSamlebaseEndTime);

    activateElement(arrowToEkomportalen, 3800, ekomportalenEndTime);
    activateElement(ekomportalen, ekomportalenEndTime);
    activateEkomportalenMapElement(ekomportalenEndTime);
};
