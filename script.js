function toggleDetail(id) {
    const detail = document.getElementById(`detail-${id}`);
    const button = detail.previousElementSibling;

    detail.classList.toggle("show");

    if (detail.classList.contains("show")) {
        button.innerHTML = "Hide Detail";
    } else {
        button.innerHTML = "Show Detail Information";
    }
}

