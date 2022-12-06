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

const activateFkbMapElement = (many = false, startTime) => {
    const fkb_default = document.getElementById("fkb_default");
    const fkb_results_single = document.getElementById("fkb_results_single");
    const fkb_results_many = document.getElementById("fkb_results_many");

    if (startTime) {
        setTimeout(() => {
            fkb_default.classList.remove("active");
            if (many) {
                fkb_results_many.classList.add("active");
            } else {
                fkb_results_single.classList.add("active");
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
    const arrowToEkomportalen = document.getElementById("arrowToEkomportalen");
    const ekomportalen = document.getElementById("ekomportalen");
    const arrowFkb = document.getElementById("arrowToFkb");
    const fkb = document.getElementById("fkb");

    openDialogButton.innerText = many ? "Mange objekter er valgt" : "Ett objekt er valgt";
    activateElement(openDialogButton, 1);

    activateElement(arrowToFellesApi, 1, 1900);
    activateElement(fellesApiBox, 1900);
    activateElement(arrowToKoeordningForObjekter, 1900, 3800);
    activateElement(koeordningForObjekter, 3800);

    let fkbEndTime;
    let ekomportalenEndTime;

    if (Math.random() < 0.5) {
        fkbEndTime = 5700;
        ekomportalenEndTime = 6900;
    } else {
        fkbEndTime = 6900;
        ekomportalenEndTime = 5700;
    }

    activateElement(arrowFkb, 3800, fkbEndTime);
    activateElement(fkb, fkbEndTime);
    activateFkbMapElement(many, fkbEndTime);
    activateElement(arrowToEkomportalen, 3800, ekomportalenEndTime);
    activateElement(ekomportalen, ekomportalenEndTime);
    activateEkomportalenMapElement(ekomportalenEndTime);
};
